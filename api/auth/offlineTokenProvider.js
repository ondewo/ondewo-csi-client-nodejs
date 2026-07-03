// ONDEWO Keycloak offline-token auth helper (migration decision D18).
//
// Reusable headless-SDK auth: one-time ROPC + offline_access login against a
// PUBLIC Keycloak client (no client_secret — Q1), then silent auto-refresh of
// the short-lived access token from the long-lived offline refresh token. The
// current access token is exposed for `Authorization: Bearer <jwt>` (D5).
//
// CommonJS build artifact authored to match the generated api/*.js modules; the
// authoritative source is src/auth/offlineTokenProvider.ts.

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });
exports.login = exports.OfflineTokenProvider = exports.OfflineTokenError = void 0;

/** Path segment between the Keycloak base URL and the realm name. */
var TOKEN_PATH_PREFIX = '/realms/';
/** Path segment after the realm name pointing at the OIDC token endpoint. */
var TOKEN_PATH_SUFFIX = '/protocol/openid-connect/token';
/** Default seconds-before-expiry at which a proactive refresh fires. */
var DEFAULT_REFRESH_SKEW_IN_S = 30;
/** OAuth scope requesting an offline (long-lived) refresh token alongside the OIDC token. */
var SCOPE_OFFLINE_ACCESS = 'openid offline_access';

/**
 * Error thrown when a Keycloak token request fails (bad credentials, expired
 * offline session, network error, malformed response). Callers may re-login.
 */
class OfflineTokenError extends Error {
	/**
	 * @param {string} message human-readable failure description.
	 * @param {number} [status] optional HTTP status from the Keycloak token endpoint.
	 */
	constructor(message, status) {
		super(message);
		this.name = 'OfflineTokenError';
		this.status = status;
	}
}
exports.OfflineTokenError = OfflineTokenError;

/**
 * Holds the live access token and silently refreshes it from the offline
 * refresh token until stop() is called or tokenExpirationInS elapses.
 * Construct via login(), not directly.
 */
class OfflineTokenProvider {
	/**
	 * @internal Use login().
	 *
	 * @param {object} options the validated login + refresh configuration.
	 * @param {object} initialResponse the parsed token-endpoint response from the initial ROPC login.
	 */
	constructor(options, initialResponse) {
		var trimmedUrl = options.keycloakUrl.replace(/\/+$/, '');
		this.tokenEndpoint = trimmedUrl + TOKEN_PATH_PREFIX + options.realm + TOKEN_PATH_SUFFIX;
		this.clientId = options.clientId;
		this.username = options.username;
		this.password = options.password;
		this.refreshSkewInS = options.refreshSkewInS != null ? options.refreshSkewInS : DEFAULT_REFRESH_SKEW_IN_S;
		this.fetchFn = options.fetchFn != null ? options.fetchFn : defaultFetch;
		this.nowFn = options.nowFn != null ? options.nowFn : Date.now;
		this.deadlineMs =
			options.tokenExpirationInS === undefined ? undefined : this.nowFn() + options.tokenExpirationInS * 1000;

		this.accessToken = initialResponse.access_token;
		this.refreshToken = initialResponse.refresh_token;
		this.stopped = false;
		this.refreshTimer = undefined;
		this.inFlightRefresh = undefined;
		this.scheduleRefresh(initialResponse.expires_in);
	}

	/**
	 * The current access token (a Keycloak JWT).
	 *
	 * @returns {string} the live access token string.
	 */
	getAccessToken() {
		return this.accessToken;
	}

	/**
	 * The value for the HTTP/gRPC `Authorization` header: `Bearer <jwt>`.
	 *
	 * @returns {string} the `Authorization` header value.
	 */
	getAuthorizationHeader() {
		return 'Bearer ' + this.accessToken;
	}

	/**
	 * gRPC metadata carrying `authorization: Bearer <jwt>` (decision D5). Lazily loads `@grpc/grpc-js`.
	 *
	 * @returns {object} a `@grpc/grpc-js` `Metadata` instance with the `authorization` entry set.
	 */
	getAuthMetadata() {
		var grpc = require('@grpc/grpc-js');
		var metadata = new grpc.Metadata();
		metadata.set('Authorization', this.getAuthorizationHeader());
		return metadata;
	}

	/**
	 * Force an immediate refresh from the offline token (e.g. after an UNAUTHENTICATED).
	 * Concurrent calls share a single in-flight request.
	 *
	 * @returns {Promise<string>} the freshly acquired access token.
	 */
	async forceRefresh() {
		await this.refreshOnce();
		return this.accessToken;
	}

	/** Stop the background refresh loop and release the timer. */
	stop() {
		this.stopped = true;
		if (this.refreshTimer !== undefined) {
			clearTimeout(this.refreshTimer);
			this.refreshTimer = undefined;
		}
	}

	/**
	 * Arm a one-shot timer to refresh the access token `refreshSkewInS` seconds
	 * before it expires. No-ops when stopped, and self-stops when the next refresh
	 * would fire past the deadline.
	 *
	 * @param {number} expiresInS lifetime, in seconds, of the access token just received.
	 * @returns {void}
	 */
	scheduleRefresh(expiresInS) {
		if (this.stopped) {
			return;
		}
		var lifetimeS = Math.max(expiresInS, 0);
		var skewS = Math.min(this.refreshSkewInS, lifetimeS);
		var delayMs = Math.max((lifetimeS - skewS) * 1000, 0);
		var fireAtMs = this.nowFn() + delayMs;
		if (this.deadlineMs !== undefined && fireAtMs >= this.deadlineMs) {
			this.stop();
			return;
		}
		var self = this;
		this.refreshTimer = setTimeout(function () {
			void self.refreshOnce();
		}, delayMs);
		if (typeof this.refreshTimer.unref === 'function') {
			this.refreshTimer.unref();
		}
	}

	/**
	 * Run exactly one refresh, coalescing overlapping callers onto a single
	 * in-flight request.
	 *
	 * @returns {Promise<void>} resolves once the (shared) refresh has settled.
	 */
	async refreshOnce() {
		if (this.inFlightRefresh !== undefined) {
			await this.inFlightRefresh;
			return;
		}
		var pending = this.performRefresh();
		this.inFlightRefresh = pending;
		try {
			await pending;
		} finally {
			this.inFlightRefresh = undefined;
		}
	}

	/**
	 * Exchange the offline refresh token for a fresh access token, persist the
	 * (possibly rotated) refresh token, and re-arm the background refresh.
	 *
	 * @returns {Promise<void>} resolves once the new token has been stored and the next refresh scheduled.
	 * @throws {OfflineTokenError} if the refresh request fails or the response is malformed.
	 */
	async performRefresh() {
		var form = {
			grant_type: 'refresh_token',
			client_id: this.clientId,
			refresh_token: this.refreshToken
		};
		var response = await postForm(this.fetchFn, this.tokenEndpoint, form);
		this.accessToken = response.access_token;
		if (response.refresh_token.length > 0) {
			this.refreshToken = response.refresh_token;
		}
		this.scheduleRefresh(response.expires_in);
	}
}
exports.OfflineTokenProvider = OfflineTokenProvider;

/**
 * Perform the one-time ROPC + offline_access login and return a started
 * OfflineTokenProvider that auto-refreshes the access token.
 *
 * @param {object} options login + refresh configuration.
 * @returns {Promise<OfflineTokenProvider>} a provider whose getAuthMetadata() yields `Authorization: Bearer`.
 * @throws {OfflineTokenError} if the credentials are rejected or the response is malformed.
 */
async function login(options) {
	var fetchFn = options.fetchFn != null ? options.fetchFn : defaultFetch;
	var form = {
		grant_type: 'password',
		client_id: options.clientId,
		username: options.username,
		password: options.password,
		scope: SCOPE_OFFLINE_ACCESS
	};
	var trimmedUrl = options.keycloakUrl.replace(/\/+$/, '');
	var endpoint = trimmedUrl + TOKEN_PATH_PREFIX + options.realm + TOKEN_PATH_SUFFIX;
	var response = await postForm(fetchFn, endpoint, form);
	return new OfflineTokenProvider(options, response);
}
exports.login = login;

/**
 * Default fetch layer: delegate to the global `fetch` (Node >= 18).
 *
 * @param {string} input the request URL.
 * @param {object} init the request method, headers, and body.
 * @returns {Promise<object>} the fetch response promise.
 * @throws {OfflineTokenError} if no global `fetch` exists and none was injected.
 */
function defaultFetch(input, init) {
	var globalFetch = globalThis.fetch;
	if (globalFetch === undefined) {
		throw new OfflineTokenError('No global fetch available; pass options.fetchFn explicitly.');
	}
	return globalFetch(input, init);
}

/**
 * POST a URL-encoded form to the Keycloak token endpoint and parse the response.
 *
 * @param {Function} fetchFn the HTTP layer to use.
 * @param {string} endpoint the fully-qualified token endpoint URL.
 * @param {object} form the URL-encoded field map (grant, client, credentials).
 * @returns {Promise<object>} the validated token-endpoint response.
 * @throws {OfflineTokenError} on transport failure, a non-2xx status, or a malformed body.
 */
async function postForm(fetchFn, endpoint, form) {
	var body = new URLSearchParams(form).toString();
	var response;
	try {
		response = await fetchFn(endpoint, {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: body
		});
	} catch (cause) {
		var reason = cause instanceof Error ? cause.message : String(cause);
		throw new OfflineTokenError('Keycloak token request failed: ' + reason);
	}
	var raw = await response.text();
	if (!response.ok) {
		throw new OfflineTokenError('Keycloak token endpoint returned ' + response.status + ': ' + raw, response.status);
	}
	return parseTokenResponse(raw);
}

/**
 * Parse and validate a raw token-endpoint body into a token response object.
 *
 * @param {string} raw the response body text.
 * @returns {object} the validated token fields (`access_token`, `refresh_token`, `expires_in`).
 * @throws {OfflineTokenError} if the body is not JSON, is not an object, or is missing/mistyped any required field.
 */
function parseTokenResponse(raw) {
	var parsed;
	try {
		parsed = JSON.parse(raw);
	} catch (parseError) {
		throw new OfflineTokenError('Keycloak token endpoint returned non-JSON body.');
	}
	if (parsed === null || typeof parsed !== 'object') {
		throw new OfflineTokenError('Keycloak token response is not an object.');
	}
	var accessToken = parsed.access_token;
	var refreshToken = parsed.refresh_token;
	var expiresIn = parsed.expires_in;
	if (typeof accessToken !== 'string' || accessToken.length === 0) {
		throw new OfflineTokenError('Keycloak token response missing access_token.');
	}
	if (typeof refreshToken !== 'string' || refreshToken.length === 0) {
		throw new OfflineTokenError('Keycloak token response missing refresh_token (offline_access scope granted?).');
	}
	if (typeof expiresIn !== 'number') {
		throw new OfflineTokenError('Keycloak token response missing numeric expires_in.');
	}
	return { access_token: accessToken, refresh_token: refreshToken, expires_in: expiresIn };
}
