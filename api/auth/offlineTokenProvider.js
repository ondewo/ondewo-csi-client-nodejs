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

var TOKEN_PATH_PREFIX = '/realms/';
var TOKEN_PATH_SUFFIX = '/protocol/openid-connect/token';
var DEFAULT_REFRESH_SKEW_IN_S = 30;
var SCOPE_OFFLINE_ACCESS = 'openid offline_access';

/**
 * Error thrown when a Keycloak token request fails (bad credentials, expired
 * offline session, network error, malformed response). Callers may re-login.
 */
class OfflineTokenError extends Error {
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

	getAccessToken() {
		return this.accessToken;
	}

	getAuthorizationHeader() {
		return 'Bearer ' + this.accessToken;
	}

	getAuthMetadata() {
		var grpc = require('@grpc/grpc-js');
		var metadata = new grpc.Metadata();
		metadata.set('authorization', this.getAuthorizationHeader());
		return metadata;
	}

	async forceRefresh() {
		await this.refreshOnce();
		return this.accessToken;
	}

	stop() {
		this.stopped = true;
		if (this.refreshTimer !== undefined) {
			clearTimeout(this.refreshTimer);
			this.refreshTimer = undefined;
		}
	}

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

function defaultFetch(input, init) {
	var globalFetch = globalThis.fetch;
	if (globalFetch === undefined) {
		throw new OfflineTokenError('No global fetch available; pass options.fetchFn explicitly.');
	}
	return globalFetch(input, init);
}

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
