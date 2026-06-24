// ONDEWO Keycloak offline-token auth helper (migration decision D18).
// Type declarations for the CommonJS build artifact offlineTokenProvider.js.
// Authoritative source: src/auth/offlineTokenProvider.ts.

/** The HTTP layer the provider talks to Keycloak through (defaults to global fetch). */
export interface FetchLike {
	(input: string, init: FetchInit): Promise<FetchResponseLike>;
}

/** Minimal subset of RequestInit the provider relies on. */
export interface FetchInit {
	method: string;
	headers: Record<string, string>;
	body: string;
}

/** Minimal subset of Response the provider relies on. */
export interface FetchResponseLike {
	ok: boolean;
	status: number;
	text(): Promise<string>;
}

/** Minimal subset of @grpc/grpc-js Metadata the provider produces. */
export interface BearerMetadata {
	set(key: string, value: string): void;
}

/** Options for login(). */
export interface OfflineTokenLoginOptions {
	keycloakUrl: string;
	realm: string;
	clientId: string;
	username: string;
	password: string;
	tokenExpirationInS?: number;
	refreshSkewInS?: number;
	fetchFn?: FetchLike;
	nowFn?: () => number;
}

export class OfflineTokenError extends Error {
	readonly status: number | undefined;
	constructor(message: string, status?: number);
}

export class OfflineTokenProvider {
	getAccessToken(): string;
	getAuthorizationHeader(): string;
	getAuthMetadata(): BearerMetadata;
	forceRefresh(): Promise<string>;
	stop(): void;
}

export function login(options: OfflineTokenLoginOptions): Promise<OfflineTokenProvider>;
