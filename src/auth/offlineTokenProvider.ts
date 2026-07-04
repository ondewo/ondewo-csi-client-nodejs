// ONDEWO Keycloak offline-token auth helper (migration decision D18).
//
// A reusable, framework-agnostic provider that performs a one-time Resource
// Owner Password Credentials (ROPC) login against a *public* Keycloak client
// (no client_secret — decision Q1) requesting `offline_access`, then keeps a
// short-lived access token warm by silently refreshing it from the long-lived
// offline refresh token. The current access token is exposed for the standard
// `Authorization: Bearer <jwt>` gRPC metadata (decision D5).
//
// Scope: headless SDKs only (decision D18). Browsers must use the
// Authorization-Code-+-PKCE redirect flow and must never hold an offline token.
//
// `@grpc/grpc-js` (a runtime dependency of this package) is required lazily
// inside getAuthMetadata() so the token logic stays importable and unit-testable
// without a gRPC runtime present.

/** Minimal subset of `@grpc/grpc-js` `Metadata` the provider produces. */
export interface BearerMetadata {
	set(key: string, value: string): void;
}

/**
 * The HTTP layer the provider talks to Keycloak through.
 *
 * Defaults to the global `fetch` (Node >= 18). Injectable so unit tests can
 * mock the token endpoint without any network access.
 */
export interface FetchLike {
	(input: string, init: FetchInit): Promise<FetchResponseLike>;
}

/** Minimal subset of `RequestInit` the provider relies on. */
export interface FetchInit {
	method: string;
	headers: Record<string, string>;
	body: string;
}

/** Minimal subset of `Response` the provider relies on. */
export interface FetchResponseLike {
	ok: boolean;
	status: number;
	text(): Promise<string>;
}

/** Options for {@link login}. */
export interface OfflineTokenLoginOptions {
	/** Base Keycloak URL, e.g. `https://auth.example.com/auth`. */
	keycloakUrl: string;
	/** Realm name, e.g. `ondewo-ccai-platform`. */
	realm: string;
	/** Public ROPC client id, e.g. `ondewo-nlu-cai-sdk-public`. No secret (Q1). */
	clientId: string;
	/** Technical-user (2FA-exempt, D14) username/email. */
	username: string;
	/** Technical-user password. */
	password: string;
	/**
	 * Upper bound, in seconds, on how long the background refresh keeps running
	 * after the initial login. Once elapsed the refresh loop stops, the access
	 * token is allowed to lapse, and a fresh {@link login} is required. Omit to
	 * run until the offline session itself expires.
	 */
	tokenExpirationInS?: number;
	/**
	 * Seconds before access-token expiry at which a proactive refresh fires, so
	 * the hot path never waits on Keycloak. Defaults to 30 s (clamped to the
	 * token lifetime).
	 */
	refreshSkewInS?: number;
	/** Injectable HTTP layer; defaults to the global `fetch`. */
	fetchFn?: FetchLike;
	/** Injectable clock returning epoch milliseconds; defaults to `Date.now`. */
	nowFn?: () => number;
}

/** The token-endpoint response fields the provider consumes. */
interface KeycloakTokenResponse {
	/** Short-lived JWT used for the `Authorization: Bearer <jwt>` header. */
	access_token: string;
	/** Long-lived offline refresh token used to silently re-acquire access tokens. */
	refresh_token: string;
	/** Access-token lifetime in seconds, used to schedule the proactive refresh. */
	expires_in: number;
}

/** Path segment between the Keycloak base URL and the realm name. */
const TOKEN_PATH_PREFIX: string = '/realms/';
/** Path segment after the realm name pointing at the OIDC token endpoint. */
const TOKEN_PATH_SUFFIX: string = '/protocol/openid-connect/token';
/** Default seconds-before-expiry at which a proactive refresh fires. */
const DEFAULT_REFRESH_SKEW_IN_S: number = 30;
/** Floor, in seconds, on the scheduled refresh delay so a short-lived token never busy-loops the endpoint. */
const MIN_REFRESH_DELAY_IN_S: number = 1;
/** OAuth scope requesting an offline (long-lived) refresh token alongside the OIDC token. */
const SCOPE_OFFLINE_ACCESS: string = 'openid offline_access';

/**
 * Thrown when a Keycloak token request fails (bad credentials, expired offline
 * session, network error, malformed response). Callers may re-{@link login}.
 */
export class OfflineTokenError extends Error {
	/** The HTTP status of the failed token request, or `undefined` for transport/parse errors. */
	public readonly status: number | undefined;

	/**
	 * @param message human-readable failure description.
	 * @param status optional HTTP status from the Keycloak token endpoint.
	 */
	public constructor(message: string, status?: number) {
		super(message);
		this.name = 'OfflineTokenError';
		this.status = status;
	}
}

/**
 * Holds the live access token and silently refreshes it from the offline
 * refresh token until {@link stop} is called or `tokenExpirationInS` elapses.
 *
 * Construct it with {@link login} rather than directly.
 */
export class OfflineTokenProvider {
	/** Fully-qualified Keycloak OIDC token endpoint, derived from `keycloakUrl` + `realm`. */
	private readonly tokenEndpoint: string;
	/** Public ROPC client id sent on every token request (no secret — Q1). */
	private readonly clientId: string;
	/** Technical-user username/email used for the initial ROPC login. */
	private readonly username: string;
	/** Technical-user password used for the initial ROPC login. */
	private readonly password: string;
	/** Seconds before access-token expiry at which the proactive refresh fires. */
	private readonly refreshSkewInS: number;
	/** Injected HTTP layer used for all token requests. */
	private readonly fetchFn: FetchLike;
	/** Injected clock returning epoch milliseconds (mockable in tests). */
	private readonly nowFn: () => number;
	/** Epoch-ms hard stop for the refresh loop, or `undefined` to run until the offline session expires. */
	private readonly deadlineMs: number | undefined;

	/** The live, short-lived access token surfaced to callers. */
	private accessToken: string;
	/** The current offline refresh token (rotated by Keycloak across refreshes). */
	private refreshToken: string;
	/** Handle of the pending background-refresh timer, or `undefined` when none is scheduled. */
	private refreshTimer: ReturnType<typeof setTimeout> | undefined;
	/** Whether {@link stop} has been called; gates further scheduling. */
	private stopped: boolean;
	/** The single shared in-flight refresh promise, so concurrent refreshes coalesce. */
	private inFlightRefresh: Promise<void> | undefined;

	/**
	 * @internal Use {@link login}.
	 *
	 * @param options the validated login + refresh configuration.
	 * @param initialResponse the parsed token-endpoint response from the initial ROPC login.
	 */
	public constructor(options: OfflineTokenLoginOptions, initialResponse: KeycloakTokenResponse) {
		const trimmedUrl: string = options.keycloakUrl.replace(/\/+$/, '');
		this.tokenEndpoint = `${trimmedUrl}${TOKEN_PATH_PREFIX}${options.realm}${TOKEN_PATH_SUFFIX}`;
		this.clientId = options.clientId;
		this.username = options.username;
		this.password = options.password;
		this.refreshSkewInS = options.refreshSkewInS ?? DEFAULT_REFRESH_SKEW_IN_S;
		this.fetchFn = options.fetchFn ?? defaultFetch;
		this.nowFn = options.nowFn ?? Date.now;
		this.deadlineMs =
			options.tokenExpirationInS === undefined ? undefined : this.nowFn() + options.tokenExpirationInS * 1000;

		this.accessToken = initialResponse.access_token;
		this.refreshToken = initialResponse.refresh_token;
		this.stopped = false;
		this.scheduleRefresh(initialResponse.expires_in);
	}

	/**
	 * The current access token (a Keycloak JWT).
	 *
	 * @returns the live access token string.
	 */
	public getAccessToken(): string {
		return this.accessToken;
	}

	/**
	 * The value for the HTTP/gRPC `Authorization` header: `Bearer <jwt>`.
	 *
	 * @returns the `Authorization` header value.
	 */
	public getAuthorizationHeader(): string {
		return `Bearer ${this.accessToken}`;
	}

	/**
	 * gRPC metadata carrying `authorization: Bearer <jwt>` (decision D5), ready to
	 * pass to a `@grpc/grpc-js` client call. Lazily loads `@grpc/grpc-js`.
	 *
	 * @returns a `@grpc/grpc-js` `Metadata` instance with the `authorization` entry set.
	 */
	public getAuthMetadata(): BearerMetadata {
		// Lazy require keeps the token logic importable without a gRPC runtime
		// (matching the generated api/*.js grpc usage). Synchronous by design.
		// eslint-disable-next-line @typescript-eslint/no-require-imports
		const grpc: { Metadata: new () => BearerMetadata } = require('@grpc/grpc-js') as {
			Metadata: new () => BearerMetadata;
		};
		const metadata: BearerMetadata = new grpc.Metadata();
		// Lowercase 'authorization' is mandatory: native gRPC (grpc-python peers)
		// rejects a non-lowercase metadata key at call time (grpc-js would normalise
		// it, but the key must match the other clients on the wire).
		metadata.set('authorization', this.getAuthorizationHeader());
		return metadata;
	}

	/**
	 * Force an immediate refresh from the offline token. Call this after a gRPC
	 * `UNAUTHENTICATED` to re-acquire a valid access token. Concurrent calls
	 * share a single in-flight request.
	 *
	 * @returns the freshly acquired access token.
	 */
	public async forceRefresh(): Promise<string> {
		await this.refreshOnce();
		return this.accessToken;
	}

	/** Stop the background refresh loop and release the timer. */
	public stop(): void {
		this.stopped = true;
		if (this.refreshTimer !== undefined) {
			clearTimeout(this.refreshTimer);
			this.refreshTimer = undefined;
		}
	}

	/**
	 * Arm a one-shot timer to refresh the access token `refreshSkewInS` seconds
	 * before it expires. No-ops when stopped, and self-stops when the next refresh
	 * would fire past {@link deadlineMs}.
	 *
	 * @param expiresInS lifetime, in seconds, of the access token just received.
	 */
	private scheduleRefresh(expiresInS: number): void {
		if (this.stopped) {
			return;
		}
		const lifetimeS: number = Math.max(expiresInS, 0);
		const skewS: number = Math.min(this.refreshSkewInS, lifetimeS);
		const delayMs: number = Math.max((lifetimeS - skewS) * 1000, MIN_REFRESH_DELAY_IN_S * 1000);
		const fireAtMs: number = this.nowFn() + delayMs;
		if (this.deadlineMs !== undefined && fireAtMs >= this.deadlineMs) {
			// Next refresh would land past the bound — let the token lapse.
			this.stop();
			return;
		}
		this.refreshTimer = setTimeout((): void => {
			void this.refreshOnce();
		}, delayMs);
		// Do not keep the process alive solely for the refresh timer.
		/* c8 ignore next 3 -- Node's Timeout always has unref(); the no-unref else-path is unreachable here. */
		if (typeof this.refreshTimer.unref === 'function') {
			this.refreshTimer.unref();
		}
	}

	/**
	 * Run exactly one refresh, coalescing overlapping callers onto a single
	 * in-flight request via {@link inFlightRefresh}.
	 *
	 * @returns a promise that resolves once the (shared) refresh has settled.
	 */
	private async refreshOnce(): Promise<void> {
		if (this.inFlightRefresh !== undefined) {
			await this.inFlightRefresh;
			return;
		}
		const pending: Promise<void> = this.performRefresh();
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
	 * @returns a promise that resolves once the new token has been stored and the next refresh scheduled.
	 * @throws {OfflineTokenError} if the refresh request fails or the response is malformed.
	 */
	private async performRefresh(): Promise<void> {
		const form: Record<string, string> = {
			grant_type: 'refresh_token',
			client_id: this.clientId,
			refresh_token: this.refreshToken
		};
		const response: KeycloakTokenResponse = await postForm(this.fetchFn, this.tokenEndpoint, form);
		this.accessToken = response.access_token;
		// Keycloak may rotate the (offline) refresh token; keep the newest.
		/* c8 ignore next 3 -- parseTokenResponse rejects an empty refresh_token, so the length===0 else-path is unreachable. */
		if (response.refresh_token.length > 0) {
			this.refreshToken = response.refresh_token;
		}
		this.scheduleRefresh(response.expires_in);
	}
}

/**
 * Perform the one-time ROPC + `offline_access` login and return a started
 * {@link OfflineTokenProvider} that auto-refreshes the access token.
 *
 * @param options login + refresh configuration (see {@link OfflineTokenLoginOptions}).
 * @returns a provider whose `getAuthMetadata()` yields `Authorization: Bearer`.
 * @throws {OfflineTokenError} if the credentials are rejected or the response is malformed.
 */
export async function login(options: OfflineTokenLoginOptions): Promise<OfflineTokenProvider> {
	const fetchFn: FetchLike = options.fetchFn ?? defaultFetch;
	const form: Record<string, string> = {
		grant_type: 'password',
		client_id: options.clientId,
		username: options.username,
		password: options.password,
		scope: SCOPE_OFFLINE_ACCESS
	};
	const trimmedUrl: string = options.keycloakUrl.replace(/\/+$/, '');
	const endpoint: string = `${trimmedUrl}${TOKEN_PATH_PREFIX}${options.realm}${TOKEN_PATH_SUFFIX}`;
	const response: KeycloakTokenResponse = await postForm(fetchFn, endpoint, form);
	return new OfflineTokenProvider(options, response);
}

/**
 * Default {@link FetchLike}: delegate to the global `fetch` (Node >= 18).
 *
 * @param input the request URL.
 * @param init the request method, headers, and body.
 * @returns the fetch response promise.
 * @throws {OfflineTokenError} if no global `fetch` exists and none was injected.
 */
function defaultFetch(input: string, init: FetchInit): Promise<FetchResponseLike> {
	const globalFetch: FetchLike | undefined = (globalThis as { fetch?: FetchLike }).fetch;
	if (globalFetch === undefined) {
		throw new OfflineTokenError('No global fetch available; pass options.fetchFn explicitly.');
	}
	return globalFetch(input, init);
}

/**
 * POST a URL-encoded form to the Keycloak token endpoint and parse the response.
 *
 * @param fetchFn the HTTP layer to use.
 * @param endpoint the fully-qualified token endpoint URL.
 * @param form the `application/x-www-form-urlencoded` field map (grant, client, credentials).
 * @returns the validated token-endpoint response.
 * @throws {OfflineTokenError} on transport failure, a non-2xx status, or a malformed body.
 */
async function postForm(
	fetchFn: FetchLike,
	endpoint: string,
	form: Record<string, string>
): Promise<KeycloakTokenResponse> {
	const body: string = new URLSearchParams(form).toString();
	let response: FetchResponseLike;
	try {
		response = await fetchFn(endpoint, {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body
		});
	} catch (cause) {
		const reason: string = cause instanceof Error ? cause.message : String(cause);
		throw new OfflineTokenError(`Keycloak token request failed: ${reason}`);
	}
	const raw: string = await response.text();
	if (!response.ok) {
		throw new OfflineTokenError(`Keycloak token endpoint returned ${response.status}: ${raw}`, response.status);
	}
	return parseTokenResponse(raw);
}

/**
 * Parse and validate a raw token-endpoint body into a {@link KeycloakTokenResponse}.
 *
 * @param raw the response body text.
 * @returns the validated token fields (`access_token`, `refresh_token`, `expires_in`).
 * @throws {OfflineTokenError} if the body is not JSON, is not an object, or is missing/mistyped any required field.
 */
function parseTokenResponse(raw: string): KeycloakTokenResponse {
	let parsed: unknown;
	try {
		parsed = JSON.parse(raw);
	} catch {
		throw new OfflineTokenError('Keycloak token endpoint returned non-JSON body.');
	}
	if (parsed === null || typeof parsed !== 'object') {
		throw new OfflineTokenError('Keycloak token response is not an object.');
	}
	const record: Record<string, unknown> = parsed as Record<string, unknown>;
	const accessToken: unknown = record.access_token;
	const refreshToken: unknown = record.refresh_token;
	const expiresIn: unknown = record.expires_in;
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
