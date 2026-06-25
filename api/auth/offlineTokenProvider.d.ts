// ONDEWO Keycloak offline-token auth helper (migration decision D18).
// Type declarations for the CommonJS build artifact offlineTokenProvider.js.
// Authoritative source: src/auth/offlineTokenProvider.ts.

/** The HTTP layer the provider talks to Keycloak through (defaults to global fetch). */
export interface FetchLike {
	(input: string, init: FetchInit): Promise<FetchResponseLike>;
}

/** Minimal subset of RequestInit the provider relies on. */
export interface FetchInit {
	/** HTTP method (always `POST` for the token endpoint). */
	method: string;
	/** Request headers (always `Content-Type: application/x-www-form-urlencoded`). */
	headers: Record<string, string>;
	/** URL-encoded request body. */
	body: string;
}

/** Minimal subset of Response the provider relies on. */
export interface FetchResponseLike {
	/** Whether the response status is in the 2xx range. */
	ok: boolean;
	/** HTTP status code. */
	status: number;
	/** Resolves the raw response body text. */
	text(): Promise<string>;
}

/** Minimal subset of @grpc/grpc-js Metadata the provider produces. */
export interface BearerMetadata {
	/** Set a metadata entry (the provider sets `authorization`). */
	set(key: string, value: string): void;
}

/** Options for login(). */
export interface OfflineTokenLoginOptions {
	/** Base Keycloak URL, e.g. `https://auth.example.com/auth`. */
	keycloakUrl: string;
	/** Realm name, e.g. `ondewo-ccai-platform`. */
	realm: string;
	/** Public ROPC client id; no secret (Q1). */
	clientId: string;
	/** Technical-user (2FA-exempt, D14) username/email. */
	username: string;
	/** Technical-user password. */
	password: string;
	/** Upper bound, in seconds, on how long the background refresh keeps running after login. */
	tokenExpirationInS?: number;
	/** Seconds before access-token expiry at which a proactive refresh fires (default 30). */
	refreshSkewInS?: number;
	/** Injectable HTTP layer; defaults to the global `fetch`. */
	fetchFn?: FetchLike;
	/** Injectable clock returning epoch milliseconds; defaults to `Date.now`. */
	nowFn?: () => number;
}

/**
 * Thrown when a Keycloak token request fails (bad credentials, expired offline
 * session, network error, malformed response). Callers may re-login().
 */
export class OfflineTokenError extends Error {
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
 * refresh token until stop() is called or tokenExpirationInS elapses.
 * Construct it with login() rather than directly.
 */
export class OfflineTokenProvider {
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
	 * gRPC metadata carrying `authorization: Bearer <jwt>` (decision D5). Lazily loads `@grpc/grpc-js`.
	 *
	 * @returns a `@grpc/grpc-js` `Metadata` instance with the `authorization` entry set.
	 */
	getAuthMetadata(): BearerMetadata;
	/**
	 * Force an immediate refresh from the offline token (e.g. after an UNAUTHENTICATED).
	 * Concurrent calls share a single in-flight request.
	 *
	 * @returns the freshly acquired access token.
	 */
	forceRefresh(): Promise<string>;
	/** Stop the background refresh loop and release the timer. */
	stop(): void;
}

/**
 * Perform the one-time ROPC + offline_access login and return a started
 * OfflineTokenProvider that auto-refreshes the access token.
 *
 * @param options login + refresh configuration.
 * @returns a provider whose `getAuthMetadata()` yields `Authorization: Bearer`.
 * @throws {OfflineTokenError} if the credentials are rejected or the response is malformed.
 */
export function login(options: OfflineTokenLoginOptions): Promise<OfflineTokenProvider>;
