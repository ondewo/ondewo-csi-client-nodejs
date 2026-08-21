"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfflineTokenProvider = exports.OfflineTokenError = void 0;
exports.login = login;
/** Path segment between the Keycloak base URL and the realm name. */
const TOKEN_PATH_PREFIX = '/realms/';
/** Path segment after the realm name pointing at the OIDC token endpoint. */
const TOKEN_PATH_SUFFIX = '/protocol/openid-connect/token';
/** Default seconds-before-expiry at which a proactive refresh fires. */
const DEFAULT_REFRESH_SKEW_IN_S = 30;
/** Floor, in seconds, on the scheduled refresh delay so a short-lived token never busy-loops the endpoint. */
const MIN_REFRESH_DELAY_IN_S = 1;
/** OAuth scope requesting an offline (long-lived) refresh token alongside the OIDC token. */
const SCOPE_OFFLINE_ACCESS = 'openid offline_access';
/**
 * Thrown when a Keycloak token request fails (bad credentials, expired offline
 * session, network error, malformed response). Callers may re-{@link login}.
 */
class OfflineTokenError extends Error {
    /**
     * @param message human-readable failure description.
     * @param status optional HTTP status from the Keycloak token endpoint.
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
 * refresh token until {@link stop} is called or `tokenExpirationInS` elapses.
 *
 * Construct it with {@link login} rather than directly.
 */
class OfflineTokenProvider {
    /**
     * @internal Use {@link login}.
     *
     * @param options the validated login + refresh configuration.
     * @param initialResponse the parsed token-endpoint response from the initial ROPC login.
     */
    constructor(options, initialResponse) {
        const trimmedUrl = options.keycloakUrl.replace(/\/+$/, '');
        this.tokenEndpoint = `${trimmedUrl}${TOKEN_PATH_PREFIX}${options.realm}${TOKEN_PATH_SUFFIX}`;
        this.clientId = options.clientId;
        this.username = options.username;
        this.password = options.password;
        this.refreshSkewInS = options.refreshSkewInS ?? DEFAULT_REFRESH_SKEW_IN_S;
        this.fetchFn = options.fetchFn ?? createDefaultFetch(options.keycloakVerifySsl ?? true);
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
    getAccessToken() {
        return this.accessToken;
    }
    /**
     * The value for the HTTP/gRPC `Authorization` header: `Bearer <jwt>`.
     *
     * @returns the `Authorization` header value.
     */
    getAuthorizationHeader() {
        return `Bearer ${this.accessToken}`;
    }
    /**
     * gRPC metadata carrying `authorization: Bearer <jwt>` (decision D5), ready to
     * pass to a `@grpc/grpc-js` client call. Lazily loads `@grpc/grpc-js`.
     *
     * @returns a `@grpc/grpc-js` `Metadata` instance with the `authorization` entry set.
     */
    getAuthMetadata() {
        // Lazy require keeps the token logic importable without a gRPC runtime
        // (matching the generated api/*.js grpc usage). Synchronous by design.
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const grpc = require('@grpc/grpc-js');
        const metadata = new grpc.Metadata();
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
     * would fire past {@link deadlineMs}.
     *
     * @param expiresInS lifetime, in seconds, of the access token just received.
     */
    scheduleRefresh(expiresInS) {
        if (this.stopped) {
            return;
        }
        const lifetimeS = Math.max(expiresInS, 0);
        const skewS = Math.min(this.refreshSkewInS, lifetimeS);
        const delayMs = Math.max((lifetimeS - skewS) * 1000, MIN_REFRESH_DELAY_IN_S * 1000);
        const fireAtMs = this.nowFn() + delayMs;
        if (this.deadlineMs !== undefined && fireAtMs >= this.deadlineMs) {
            // Next refresh would land past the bound — let the token lapse.
            this.stop();
            return;
        }
        this.refreshTimer = setTimeout(() => {
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
    async refreshOnce() {
        if (this.inFlightRefresh !== undefined) {
            await this.inFlightRefresh;
            return;
        }
        const pending = this.performRefresh();
        this.inFlightRefresh = pending;
        try {
            await pending;
        }
        finally {
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
    async performRefresh() {
        const form = {
            grant_type: 'refresh_token',
            client_id: this.clientId,
            refresh_token: this.refreshToken
        };
        const response = await postForm(this.fetchFn, this.tokenEndpoint, form);
        this.accessToken = response.access_token;
        // Keycloak may rotate the (offline) refresh token; keep the newest.
        /* c8 ignore next 3 -- parseTokenResponse rejects an empty refresh_token, so the length===0 else-path is unreachable. */
        if (response.refresh_token.length > 0) {
            this.refreshToken = response.refresh_token;
        }
        this.scheduleRefresh(response.expires_in);
    }
}
exports.OfflineTokenProvider = OfflineTokenProvider;
/**
 * Perform the one-time ROPC + `offline_access` login and return a started
 * {@link OfflineTokenProvider} that auto-refreshes the access token.
 *
 * @param options login + refresh configuration (see {@link OfflineTokenLoginOptions}).
 * @returns a provider whose `getAuthMetadata()` yields `Authorization: Bearer`.
 * @throws {OfflineTokenError} if the credentials are rejected or the response is malformed.
 */
async function login(options) {
    const fetchFn = options.fetchFn ?? createDefaultFetch(options.keycloakVerifySsl ?? true);
    const form = {
        grant_type: 'password',
        client_id: options.clientId,
        username: options.username,
        password: options.password,
        scope: SCOPE_OFFLINE_ACCESS
    };
    const trimmedUrl = options.keycloakUrl.replace(/\/+$/, '');
    const endpoint = `${trimmedUrl}${TOKEN_PATH_PREFIX}${options.realm}${TOKEN_PATH_SUFFIX}`;
    const response = await postForm(fetchFn, endpoint, form);
    return new OfflineTokenProvider(options, response);
}
/**
 * Build the default {@link FetchLike}: delegate to the global `fetch` (Node >= 18).
 *
 * When `verifySsl` is `false`, a cached undici `Agent` with
 * `rejectUnauthorized: false` is attached to every request as its `dispatcher`, so
 * the Keycloak token call skips TLS certificate verification (opt-in insecure;
 * Node-only). The dispatcher is built once here and reused for all requests this
 * transport makes (login + refreshes); the secure default never loads undici.
 *
 * @param verifySsl whether to verify the Keycloak server's TLS certificate.
 * @returns a fetch layer bound to the chosen TLS-verification behaviour.
 * @throws {OfflineTokenError} if no global `fetch` exists and none was injected.
 */
function createDefaultFetch(verifySsl) {
    let dispatcher;
    if (!verifySsl) {
        // Lazy require keeps undici out of the default (secure) code path.
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const { Agent } = require('undici');
        dispatcher = new Agent({ connect: { rejectUnauthorized: false } });
    }
    return (input, init) => {
        const globalFetch = globalThis.fetch;
        if (globalFetch === undefined) {
            throw new OfflineTokenError('No global fetch available; pass options.fetchFn explicitly.');
        }
        return globalFetch(input, dispatcher === undefined ? init : { ...init, dispatcher });
    };
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
async function postForm(fetchFn, endpoint, form) {
    const body = new URLSearchParams(form).toString();
    let response;
    try {
        response = await fetchFn(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body
        });
    }
    catch (cause) {
        const reason = cause instanceof Error ? cause.message : String(cause);
        throw new OfflineTokenError(`Keycloak token request failed: ${reason}`);
    }
    const raw = await response.text();
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
function parseTokenResponse(raw) {
    let parsed;
    try {
        parsed = JSON.parse(raw);
    }
    catch {
        throw new OfflineTokenError('Keycloak token endpoint returned non-JSON body.');
    }
    if (parsed === null || typeof parsed !== 'object') {
        throw new OfflineTokenError('Keycloak token response is not an object.');
    }
    const record = parsed;
    const accessToken = record.access_token;
    const refreshToken = record.refresh_token;
    const expiresIn = record.expires_in;
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
