// Minimal, runnable example for @ondewo/csi-client-nodejs.
//
// It authenticates with the current ONDEWO bearer convention (the D18 Keycloak
// offline-token flow) and calls the CSI `Conversations.ListS2sPipelines` unary
// RPC, printing the returned speech-to-speech pipelines.
//
// Auth: `login(...)` performs a one-time Resource-Owner-Password-Credentials
// login against a public Keycloak client and keeps a short-lived access token
// warm; `provider.getAuthMetadata()` yields the `authorization: Bearer <jwt>`
// gRPC metadata passed on every call. There is no legacy per-request token / HTTP-basic /
// users.login() credential check anymore.
//
// A published consumer imports everything from the package root, e.g.:
//   import { login, ConversationsClient, ListS2sPipelinesRequest } from '@ondewo/csi-client-nodejs';
//   import { credentials } from '@grpc/grpc-js';
// The generated gRPC stubs carry no bundled TypeScript types, so `main()` loads
// them with a runtime `require` (the same pattern the auth provider uses for
// `@grpc/grpc-js`) and casts them to the small structural interfaces below. The
// pure request/response logic in `listS2sPipelines` stays fully typed and unit-
// testable with a mocked client — see listS2sPipelines.spec.ts.
//
// Run (against a reachable CSI server):
//   ONDEWO_KEYCLOAK_URL=https://auth.example.com/auth \
//   ONDEWO_KEYCLOAK_REALM=ondewo-ccai-platform \
//   ONDEWO_KEYCLOAK_CLIENT_ID=ondewo-nlu-cai-sdk-public \
//   ONDEWO_USERNAME=tech-user@example.com ONDEWO_PASSWORD=... \
//   ONDEWO_CSI_HOST=localhost:50055 \
//   node examples/listS2sPipelines.js

/** The `authorization: Bearer <jwt>` gRPC metadata produced by the auth provider. */
export interface AuthMetadata {
	set(key: string, value: string): void;
}

/** The subset of the generated `S2sPipeline` message this example reads. */
export interface S2sPipelineLike {
	getId(): string;
	getNluProjectId(): string;
	getNluLanguageCode(): string;
}

/** The subset of the generated `ListS2sPipelinesResponse` message this example reads. */
export interface ListS2sPipelinesResponseLike {
	getPipelinesList(): S2sPipelineLike[];
}

/** A gRPC error as surfaced by `@grpc/grpc-js` unary callbacks. */
export interface ServiceErrorLike extends Error {
	code?: number;
}

/**
 * The single unary method of the generated `ConversationsClient` this example
 * uses, in its node-style `(request, metadata, callback)` form.
 */
export interface ConversationsClientLike {
	listS2sPipelines(
		request: object,
		metadata: AuthMetadata,
		done: (error: ServiceErrorLike | null, response: ListS2sPipelinesResponseLike) => void
	): void;
}

/** A flat, log-friendly view of one configured speech-to-speech pipeline. */
export interface S2sPipelineSummary {
	id: string;
	nluProjectId: string;
	nluLanguageCode: string;
}

/**
 * Call `Conversations.ListS2sPipelines` with bearer auth and resolve the
 * configured pipelines as plain summaries, wrapping the node-style gRPC
 * callback in a Promise.
 *
 * @param client the CSI Conversations gRPC client (or any structural stand-in).
 * @param request an empty `ListS2sPipelinesRequest`.
 * @param metadata the `authorization: Bearer <jwt>` metadata from the auth provider.
 * @returns the pipelines as flat summaries.
 */
export function listS2sPipelines(
	client: ConversationsClientLike,
	request: object,
	metadata: AuthMetadata
): Promise<S2sPipelineSummary[]> {
	return new Promise<S2sPipelineSummary[]>(
		(resolve: (value: S2sPipelineSummary[]) => void, reject: (reason: ServiceErrorLike) => void): void => {
			client.listS2sPipelines(
				request,
				metadata,
				(error: ServiceErrorLike | null, response: ListS2sPipelinesResponseLike): void => {
					if (error !== null) {
						reject(error);
						return;
					}
					resolve(
						response.getPipelinesList().map((pipeline: S2sPipelineLike): S2sPipelineSummary => ({
							id: pipeline.getId(),
							nluProjectId: pipeline.getNluProjectId(),
							nluLanguageCode: pipeline.getNluLanguageCode()
						}))
					);
				}
			);
		}
	);
}

/** A started auth provider handle (subset of `OfflineTokenProvider`) used by `main`. */
interface OfflineTokenProviderHandle {
	getAuthMetadata(): AuthMetadata;
	stop(): void;
}

/** The login options accepted by the package's `login(...)` helper. */
interface LoginOptions {
	keycloakUrl: string;
	realm: string;
	clientId: string;
	username: string;
	password: string;
}

/** The subset of the package's public API `main` loads at runtime. */
interface CsiSdkModule {
	login(options: LoginOptions): Promise<OfflineTokenProviderHandle>;
	ConversationsClient: new (address: string, channelCredentials: unknown) => ConversationsClientLike;
	ListS2sPipelinesRequest: new () => object;
}

/** The subset of `@grpc/grpc-js` `main` loads at runtime. */
interface GrpcCredentialsModule {
	credentials: { createInsecure(): unknown };
}

/**
 * Read a required environment variable or throw a descriptive error.
 *
 * @param name the environment variable name.
 * @returns the non-empty value.
 */
function requireEnv(name: string): string {
	const value: string | undefined = process.env[name];
	if (value === undefined || value.length === 0) {
		throw new Error(`Missing required environment variable: ${name}`);
	}
	return value;
}

/**
 * Wire the real generated client + auth provider and print the pipelines.
 *
 * @returns a promise that settles once the RPC has completed.
 */
async function main(): Promise<void> {
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	const sdk: CsiSdkModule = require('@ondewo/csi-client-nodejs') as CsiSdkModule;
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	const grpc: GrpcCredentialsModule = require('@grpc/grpc-js') as GrpcCredentialsModule;

	const provider: OfflineTokenProviderHandle = await sdk.login({
		keycloakUrl: requireEnv('ONDEWO_KEYCLOAK_URL'),
		realm: requireEnv('ONDEWO_KEYCLOAK_REALM'),
		clientId: requireEnv('ONDEWO_KEYCLOAK_CLIENT_ID'),
		username: requireEnv('ONDEWO_USERNAME'),
		password: requireEnv('ONDEWO_PASSWORD')
	});
	try {
		const host: string = process.env.ONDEWO_CSI_HOST ?? 'localhost:50055';
		const client: ConversationsClientLike = new sdk.ConversationsClient(host, grpc.credentials.createInsecure());
		const request: object = new sdk.ListS2sPipelinesRequest();
		const pipelines: S2sPipelineSummary[] = await listS2sPipelines(client, request, provider.getAuthMetadata());
		console.log(`Found ${pipelines.length} S2S pipeline(s):`, pipelines);
	} finally {
		provider.stop();
	}
}

// Only run when executed directly (`node examples/listS2sPipelines.js`), never on import.
if (require.main === module) {
	main().catch((error: unknown): void => {
		console.error(error);
		process.exitCode = 1;
	});
}
