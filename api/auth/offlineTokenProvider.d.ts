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
    /**
     * Optional undici dispatcher (Node's non-standard `fetch` extension). Set only
     * on the default transport when `keycloakVerifySsl` is `false`; carries an
     * `Agent({ connect: { rejectUnauthorized: false } })` so the token request skips
     * TLS certificate verification. Left `undefined` on the secure default path.
     */
    dispatcher?: unknown;
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
    /**
     * When `false`, DISABLE TLS certificate verification on the Keycloak token
     * request (opt-in insecure, for a self-signed local Envoy at
     * `https://localhost:12001/auth`). Defaults to `true` (verify — secure, unchanged
     * behaviour). Ignored when a custom `fetchFn` is injected. Node-only: implemented
     * via an undici dispatcher, so it is a no-op in a browser bundle.
     */
    keycloakVerifySsl?: boolean;
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
/**
 * Thrown when a Keycloak token request fails (bad credentials, expired offline
 * session, network error, malformed response). Callers may re-{@link login}.
 */
export declare class OfflineTokenError extends Error {
    /** The HTTP status of the failed token request, or `undefined` for transport/parse errors. */
    readonly status: number | undefined;
    /**
     * @param message human-readable failure description.
     * @param status optional HTTP status from the Keycloak token endpoint.
     */
    constructor(message: string, status?: number);
}
/**
 * Holds the live access token and silently refreshes it from the offline
 * refresh token until {@link stop} is called or `tokenExpirationInS` elapses.
 *
 * Construct it with {@link login} rather than directly.
 */
export declare class OfflineTokenProvider {
    /** Fully-qualified Keycloak OIDC token endpoint, derived from `keycloakUrl` + `realm`. */
    private readonly tokenEndpoint;
    /** Public ROPC client id sent on every token request (no secret — Q1). */
    private readonly clientId;
    /** Technical-user username/email used for the initial ROPC login. */
    private readonly username;
    /** Technical-user password used for the initial ROPC login. */
    private readonly password;
    /** Seconds before access-token expiry at which the proactive refresh fires. */
    private readonly refreshSkewInS;
    /** Injected HTTP layer used for all token requests. */
    private readonly fetchFn;
    /** Injected clock returning epoch milliseconds (mockable in tests). */
    private readonly nowFn;
    /** Epoch-ms hard stop for the refresh loop, or `undefined` to run until the offline session expires. */
    private readonly deadlineMs;
    /** The live, short-lived access token surfaced to callers. */
    private accessToken;
    /** The current offline refresh token (rotated by Keycloak across refreshes). */
    private refreshToken;
    /** Handle of the pending background-refresh timer, or `undefined` when none is scheduled. */
    private refreshTimer;
    /** Whether {@link stop} has been called; gates further scheduling. */
    private stopped;
    /** The single shared in-flight refresh promise, so concurrent refreshes coalesce. */
    private inFlightRefresh;
    /**
     * @internal Use {@link login}.
     *
     * @param options the validated login + refresh configuration.
     * @param initialResponse the parsed token-endpoint response from the initial ROPC login.
     */
    constructor(options: OfflineTokenLoginOptions, initialResponse: KeycloakTokenResponse);
    /**
     * The current access token (a Keycloak JWT).
     *
     * @returns the live access token string.
     */
    getAccessToken(): string;
    /**
     * The value for the HTTP/gRPC `Authorization` header: `Bearer <jwt>`.
     *
     * @returns the `Authorization` header value.
     */
    getAuthorizationHeader(): string;
    /**
     * gRPC metadata carrying `authorization: Bearer <jwt>` (decision D5), ready to
     * pass to a `@grpc/grpc-js` client call. Lazily loads `@grpc/grpc-js`.
     *
     * @returns a `@grpc/grpc-js` `Metadata` instance with the `authorization` entry set.
     */
    getAuthMetadata(): BearerMetadata;
    /**
     * Force an immediate refresh from the offline token. Call this after a gRPC
     * `UNAUTHENTICATED` to re-acquire a valid access token. Concurrent calls
     * share a single in-flight request.
     *
     * @returns the freshly acquired access token.
     */
    forceRefresh(): Promise<string>;
    /** Stop the background refresh loop and release the timer. */
    stop(): void;
    /**
     * Arm a one-shot timer to refresh the access token `refreshSkewInS` seconds
     * before it expires. No-ops when stopped, and self-stops when the next refresh
     * would fire past {@link deadlineMs}.
     *
     * @param expiresInS lifetime, in seconds, of the access token just received.
     */
    private scheduleRefresh;
    /**
     * Run exactly one refresh, coalescing overlapping callers onto a single
     * in-flight request via {@link inFlightRefresh}.
     *
     * @returns a promise that resolves once the (shared) refresh has settled.
     */
    private refreshOnce;
    /**
     * Exchange the offline refresh token for a fresh access token, persist the
     * (possibly rotated) refresh token, and re-arm the background refresh.
     *
     * @returns a promise that resolves once the new token has been stored and the next refresh scheduled.
     * @throws {OfflineTokenError} if the refresh request fails or the response is malformed.
     */
    private performRefresh;
}
/**
 * Perform the one-time ROPC + `offline_access` login and return a started
 * {@link OfflineTokenProvider} that auto-refreshes the access token.
 *
 * @param options login + refresh configuration (see {@link OfflineTokenLoginOptions}).
 * @returns a provider whose `getAuthMetadata()` yields `Authorization: Bearer`.
 * @throws {OfflineTokenError} if the credentials are rejected or the response is malformed.
 */
export declare function login(options: OfflineTokenLoginOptions): Promise<OfflineTokenProvider>;
export {};
