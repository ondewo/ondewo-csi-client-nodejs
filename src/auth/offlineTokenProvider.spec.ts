// Hermetic unit tests for the D18 offline-token auth helper.
//
// No network: the Keycloak token endpoint is mocked via an injected fetchFn and
// the clock/timers are mocked, so the auto-refresh loop is driven deterministically.
//
// Run (Node >= 22, no extra deps):
//   node --test --experimental-strip-types src/auth/offlineTokenProvider.spec.ts

import nodeTest from 'node:test';
import assert from 'node:assert/strict';
import { login, OfflineTokenError, OfflineTokenProvider } from './offlineTokenProvider';
import type { FetchInit, FetchResponseLike } from './offlineTokenProvider';

/** Shape of the injected fetch double the tests pass into {@link login}. */
interface FetchFn {
	(url: string, init: FetchInit): Promise<FetchResponseLike>;
}

/** One request captured by the fetch stub, with its URL-decoded form fields. */
interface RecordedRequest {
	/** The endpoint URL the provider POSTed to. */
	url: string;
	/** The request method, headers, and raw body. */
	init: FetchInit;
	/** The request body parsed as URL-encoded form fields. */
	form: URLSearchParams;
}

/** A queued, canned reply for the fetch stub to return for one request. */
interface StubReply {
	/** Whether the response models a 2xx success. */
	ok: boolean;
	/** The HTTP status code to surface. */
	status: number;
	/** The raw response body text. */
	bodyText: string;
}

/** The fetch double plus the live list of requests it has recorded. */
interface FetchStub {
	/** The injectable fetch function. */
	fetchFn: FetchFn;
	/** Requests captured so far, in call order. */
	requests: RecordedRequest[];
}

/** Per-test overrides layered onto {@link BASE_OPTIONS} by {@link doLogin}. */
interface LoginOverrides {
	/** Optional Keycloak base URL override (e.g. to test trailing-slash normalisation). */
	keycloakUrl?: string;
	/** Optional proactive-refresh skew in seconds. */
	refreshSkewInS?: number;
	/** Optional upper bound, in seconds, on the background refresh loop. */
	tokenExpirationInS?: number;
	/** The fetch double to inject (always provided). */
	fetchFn: FetchFn;
}

/** The shared, complete set of login options reused across tests. */
interface BaseOptions {
	/** Keycloak base URL. */
	keycloakUrl: string;
	/** Realm name. */
	realm: string;
	/** Public ROPC client id. */
	clientId: string;
	/** Technical-user username/email. */
	username: string;
	/** Technical-user password. */
	password: string;
}

/** Canonical login options shared by every test (overridable via {@link doLogin}). */
const BASE_OPTIONS: BaseOptions = {
	keycloakUrl: 'https://auth.example.com/auth',
	realm: 'ondewo-ccai-platform',
	clientId: 'ondewo-nlu-cai-sdk-public',
	username: 'ondewo-nlu-cai-tech-proj-bot@example.com',
	password: 'super-secret'
};

/** The token endpoint the provider must derive from {@link BASE_OPTIONS}. */
const TOKEN_ENDPOINT: string =
	'https://auth.example.com/auth/realms/ondewo-ccai-platform/protocol/openid-connect/token';

/**
 * Build a fetch stub that returns queued replies and records every request.
 *
 * @param replies the canned replies to return, one per request in order.
 * @returns the fetch double and the live list of recorded requests.
 */
function makeFetchStub(replies: StubReply[]): FetchStub {
	const requests: RecordedRequest[] = [];
	const queue: StubReply[] = [...replies];
	const fetchFn: FetchFn = (url: string, init: FetchInit): Promise<FetchResponseLike> => {
		requests.push({ url, init, form: new URLSearchParams(init.body) });
		const reply: StubReply | undefined = queue.shift();
		if (reply === undefined) {
			throw new Error('fetch stub exhausted: unexpected extra token request');
		}
		const response: FetchResponseLike = {
			ok: reply.ok,
			status: reply.status,
			text: (): Promise<string> => Promise.resolve(reply.bodyText)
		};
		return Promise.resolve(response);
	};
	return { fetchFn, requests };
}

/**
 * Serialise a well-formed Keycloak token-endpoint JSON body.
 *
 * @param accessToken the `access_token` field value.
 * @param refreshToken the `refresh_token` field value.
 * @param expiresIn the `expires_in` field value, in seconds.
 * @returns the JSON-encoded token response body.
 */
function tokenBody(accessToken: string, refreshToken: string, expiresIn: number): string {
	return JSON.stringify({ access_token: accessToken, refresh_token: refreshToken, expires_in: expiresIn });
}

/**
 * Invoke {@link login} with {@link BASE_OPTIONS} plus per-test overrides and a
 * fixed clock (`nowFn` returning 0) so timer scheduling is deterministic.
 *
 * @param overrides the fetch double and optional login/refresh overrides.
 * @returns the started provider promise.
 */
function doLogin(overrides: LoginOverrides): Promise<OfflineTokenProvider> {
	return login({
		...BASE_OPTIONS,
		keycloakUrl: overrides.keycloakUrl ?? BASE_OPTIONS.keycloakUrl,
		refreshSkewInS: overrides.refreshSkewInS,
		tokenExpirationInS: overrides.tokenExpirationInS,
		fetchFn: overrides.fetchFn,
		nowFn: (): number => 0
	});
}

/** The initial login issues a ROPC + `offline_access` request to the public client and sends no `client_secret` (Q1). */
nodeTest('login performs ROPC + offline_access against the public client (no secret)', async (): Promise<void> => {
	const stub: FetchStub = makeFetchStub([{ ok: true, status: 200, bodyText: tokenBody('access-1', 'offline-1', 300) }]);
	const provider: OfflineTokenProvider = await doLogin({ fetchFn: stub.fetchFn });
	try {
		assert.equal(stub.requests.length, 1);
		const request: RecordedRequest = stub.requests[0];
		assert.equal(request.url, TOKEN_ENDPOINT);
		assert.equal(request.init.method, 'POST');
		assert.equal(request.init.headers['Content-Type'], 'application/x-www-form-urlencoded');
		assert.equal(request.form.get('grant_type'), 'password');
		assert.equal(request.form.get('client_id'), BASE_OPTIONS.clientId);
		assert.equal(request.form.get('username'), BASE_OPTIONS.username);
		assert.equal(request.form.get('password'), BASE_OPTIONS.password);
		assert.equal(request.form.get('scope'), 'openid offline_access');
		// Q1: public client — no client_secret is ever sent.
		assert.equal(request.form.has('client_secret'), false);
		assert.equal(provider.getAccessToken(), 'access-1');
		assert.equal(provider.getAuthorizationHeader(), 'Bearer access-1');
	} finally {
		provider.stop();
	}
});

/** Trailing slashes on `keycloakUrl` are stripped so the derived token endpoint is canonical. */
nodeTest('login normalises a trailing slash in keycloakUrl', async (): Promise<void> => {
	const stub: FetchStub = makeFetchStub([{ ok: true, status: 200, bodyText: tokenBody('a', 'r', 300) }]);
	const provider: OfflineTokenProvider = await doLogin({
		keycloakUrl: 'https://auth.example.com/auth///',
		fetchFn: stub.fetchFn
	});
	provider.stop();
	assert.equal(stub.requests[0].url, TOKEN_ENDPOINT);
});

/** The background timer fires `skew` seconds before expiry and refreshes the access token from the offline token. */
nodeTest('the background loop refreshes the access token from the offline token before expiry', async (): Promise<void> => {
	const timers: typeof nodeTest.mock.timers = nodeTest.mock.timers;
	timers.enable({ apis: ['setTimeout'] });
	try {
		const stub: FetchStub = makeFetchStub([
			{ ok: true, status: 200, bodyText: tokenBody('access-1', 'offline-1', 300) },
			{ ok: true, status: 200, bodyText: tokenBody('access-2', 'offline-2', 300) }
		]);
		const provider: OfflineTokenProvider = await doLogin({ refreshSkewInS: 30, fetchFn: stub.fetchFn });
		assert.equal(provider.getAccessToken(), 'access-1');
		// expires_in 300 - skew 30 = fire at 270 s.
		timers.tick(270 * 1000);
		await waitForToken(provider, 'access-2');
		assert.equal(stub.requests.length, 2);
		const refreshRequest: RecordedRequest = stub.requests[1];
		assert.equal(refreshRequest.form.get('grant_type'), 'refresh_token');
		assert.equal(refreshRequest.form.get('refresh_token'), 'offline-1');
		assert.equal(refreshRequest.form.get('client_id'), BASE_OPTIONS.clientId);
		provider.stop();
	} finally {
		timers.reset();
	}
});

/** When Keycloak rotates the offline refresh token, the newest one is used on the subsequent refresh. */
nodeTest('a rotated offline refresh token is used for the next refresh', async (): Promise<void> => {
	const timers: typeof nodeTest.mock.timers = nodeTest.mock.timers;
	timers.enable({ apis: ['setTimeout'] });
	try {
		const stub: FetchStub = makeFetchStub([
			{ ok: true, status: 200, bodyText: tokenBody('access-1', 'offline-1', 100) },
			{ ok: true, status: 200, bodyText: tokenBody('access-2', 'offline-2', 100) },
			{ ok: true, status: 200, bodyText: tokenBody('access-3', 'offline-3', 100) }
		]);
		const provider: OfflineTokenProvider = await doLogin({ refreshSkewInS: 10, fetchFn: stub.fetchFn });
		timers.tick(90 * 1000);
		await waitForToken(provider, 'access-2');
		timers.tick(90 * 1000);
		await waitForToken(provider, 'access-3');
		assert.equal(stub.requests.length, 3);
		assert.equal(stub.requests[1].form.get('refresh_token'), 'offline-1');
		assert.equal(stub.requests[2].form.get('refresh_token'), 'offline-2');
		provider.stop();
	} finally {
		timers.reset();
	}
});

/** A `tokenExpirationInS` bound below the first-refresh point stops the loop so no refresh ever fires. */
nodeTest('tokenExpirationInS stops the refresh loop before the next refresh would fire', async (): Promise<void> => {
	const timers: typeof nodeTest.mock.timers = nodeTest.mock.timers;
	timers.enable({ apis: ['setTimeout'] });
	try {
		const stub: FetchStub = makeFetchStub([{ ok: true, status: 200, bodyText: tokenBody('access-1', 'offline-1', 300) }]);
		// Bound below the 270 s first-refresh point → loop must never refresh.
		const provider: OfflineTokenProvider = await doLogin({
			refreshSkewInS: 30,
			tokenExpirationInS: 100,
			fetchFn: stub.fetchFn
		});
		timers.tick(10 * 60 * 1000);
		assert.equal(stub.requests.length, 1, 'no refresh should happen past the bound');
		assert.equal(provider.getAccessToken(), 'access-1');
		provider.stop();
	} finally {
		timers.reset();
	}
});

/** A `tokenExpirationInS` bound well above the first-refresh point leaves the loop running (false side of the deadline guard). */
nodeTest('a bound that comfortably fits the next refresh still lets the loop refresh', async (): Promise<void> => {
	const timers: typeof nodeTest.mock.timers = nodeTest.mock.timers;
	timers.enable({ apis: ['setTimeout'] });
	try {
		const stub: FetchStub = makeFetchStub([
			{ ok: true, status: 200, bodyText: tokenBody('access-1', 'offline-1', 300) },
			{ ok: true, status: 200, bodyText: tokenBody('access-2', 'offline-2', 300) }
		]);
		// Bound far above the 270 s first-refresh point → fireAt < deadline, so the loop
		// must NOT stop (exercises the false side of the deadline AND-guard).
		const provider: OfflineTokenProvider = await doLogin({
			refreshSkewInS: 30,
			tokenExpirationInS: 10000,
			fetchFn: stub.fetchFn
		});
		timers.tick(270 * 1000);
		await waitForToken(provider, 'access-2');
		assert.equal(stub.requests.length, 2);
		provider.stop();
	} finally {
		timers.reset();
	}
});

/** With `expires_in <= skew` and no deadline, the refresh delay is floored at 1 s so the loop never busy-spins. */
nodeTest('a sub-skew expires_in floors the refresh delay at 1 s instead of busy-looping', async (): Promise<void> => {
	const timers: typeof nodeTest.mock.timers = nodeTest.mock.timers;
	timers.enable({ apis: ['setTimeout'] });
	try {
		const stub: FetchStub = makeFetchStub([
			{ ok: true, status: 200, bodyText: tokenBody('access-1', 'offline-1', 10) },
			{ ok: true, status: 200, bodyText: tokenBody('access-2', 'offline-2', 300) }
		]);
		// expires_in 10 <= skew 30 → without the floor delayMs would be 0 (hot loop); it must be 1000.
		const provider: OfflineTokenProvider = await doLogin({ refreshSkewInS: 30, fetchFn: stub.fetchFn });
		assert.equal(provider.getAccessToken(), 'access-1');
		// Just below the 1 s floor: nothing fires yet (a 0 ms delay would already have refreshed).
		timers.tick(999);
		await Promise.resolve();
		assert.equal(stub.requests.length, 1, 'refresh must not fire before the 1 s floor');
		assert.equal(provider.getAccessToken(), 'access-1');
		// At the floor the refresh fires exactly once.
		timers.tick(1);
		await waitForToken(provider, 'access-2');
		assert.equal(stub.requests.length, 2);
		provider.stop();
	} finally {
		timers.reset();
	}
});

/** {@link OfflineTokenProvider.forceRefresh} synchronously re-acquires a token via the refresh grant. */
nodeTest('forceRefresh re-acquires immediately (e.g. after UNAUTHENTICATED)', async (): Promise<void> => {
	const stub: FetchStub = makeFetchStub([
		{ ok: true, status: 200, bodyText: tokenBody('access-1', 'offline-1', 300) },
		{ ok: true, status: 200, bodyText: tokenBody('access-2', 'offline-2', 300) }
	]);
	const provider: OfflineTokenProvider = await doLogin({ fetchFn: stub.fetchFn });
	try {
		const refreshed: string = await provider.forceRefresh();
		assert.equal(refreshed, 'access-2');
		assert.equal(provider.getAccessToken(), 'access-2');
		assert.equal(stub.requests[1].form.get('grant_type'), 'refresh_token');
	} finally {
		provider.stop();
	}
});

/** A non-2xx token response raises {@link OfflineTokenError} carrying the HTTP status. */
nodeTest('login throws OfflineTokenError with status on invalid credentials', async (): Promise<void> => {
	const stub: FetchStub = makeFetchStub([{ ok: false, status: 401, bodyText: JSON.stringify({ error: 'invalid_grant' }) }]);
	await assert.rejects(
		(): Promise<OfflineTokenProvider> => doLogin({ fetchFn: stub.fetchFn }),
		(thrown: unknown): boolean => {
			assert.ok(thrown instanceof OfflineTokenError);
			assert.equal(thrown.status, 401);
			assert.match(thrown.message, /401/);
			return true;
		}
	);
});

/** A 2xx response lacking `refresh_token` (offline scope not granted) raises {@link OfflineTokenError}. */
nodeTest('login throws OfflineTokenError when offline refresh token is absent', async (): Promise<void> => {
	const stub: FetchStub = makeFetchStub([
		{ ok: true, status: 200, bodyText: JSON.stringify({ access_token: 'a', expires_in: 300 }) }
	]);
	await assert.rejects(
		(): Promise<OfflineTokenProvider> => doLogin({ fetchFn: stub.fetchFn }),
		(thrown: unknown): boolean => {
			assert.ok(thrown instanceof OfflineTokenError);
			assert.match(thrown.message, /refresh_token/);
			return true;
		}
	);
});

/** A non-JSON response body raises {@link OfflineTokenError}. */
nodeTest('login throws OfflineTokenError on a non-JSON body', async (): Promise<void> => {
	const stub: FetchStub = makeFetchStub([{ ok: true, status: 200, bodyText: '<html>not json</html>' }]);
	await assert.rejects(
		(): Promise<OfflineTokenProvider> => doLogin({ fetchFn: stub.fetchFn }),
		(thrown: unknown): boolean => {
			assert.ok(thrown instanceof OfflineTokenError);
			assert.match(thrown.message, /non-JSON/);
			return true;
		}
	);
});

/** An `Error` rejection from the fetch layer is wrapped in {@link OfflineTokenError} preserving its message. */
nodeTest('a transport-level fetch failure surfaces as OfflineTokenError', async (): Promise<void> => {
	const fetchFn: FetchFn = (): Promise<FetchResponseLike> => Promise.reject(new Error('ECONNREFUSED'));
	await assert.rejects(
		(): Promise<OfflineTokenProvider> => doLogin({ fetchFn }),
		(thrown: unknown): boolean => {
			assert.ok(thrown instanceof OfflineTokenError);
			assert.match(thrown.message, /ECONNREFUSED/);
			return true;
		}
	);
});

/** A non-`Error` rejection from the fetch layer is `String()`-coerced into the {@link OfflineTokenError} message. */
nodeTest('a non-Error transport rejection is stringified into the OfflineTokenError', async (): Promise<void> => {
	// Covers the String(cause) branch of the catch when the thrown value is not an Error.
	// eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors -- exercising the non-Error cause path on purpose.
	const fetchFn: FetchFn = (): Promise<FetchResponseLike> => Promise.reject('boom-string');
	await assert.rejects(
		(): Promise<OfflineTokenProvider> => doLogin({ fetchFn }),
		(thrown: unknown): boolean => {
			assert.ok(thrown instanceof OfflineTokenError);
			assert.match(thrown.message, /boom-string/);
			return true;
		}
	);
});

/** Read/spy side of `@grpc/grpc-js` `Metadata` used to assert what {@link OfflineTokenProvider.getAuthMetadata} set. */
interface GrpcMetadataReadback {
	get(key: string): unknown[];
	set(key: string, value: string): void;
}

/**
 * {@link OfflineTokenProvider.getAuthMetadata} returns real `@grpc/grpc-js` metadata whose bearer entry is set
 * under the **lowercase** `authorization` key. grpc-js normalises the key on `set`, so `get`/`getMap` cannot tell
 * the source casing apart — we therefore spy on `Metadata.prototype.set` to capture the raw key the provider passes,
 * which must be lowercase (native grpc-python peers reject a non-lowercase key at call time).
 */
nodeTest('getAuthMetadata sets the bearer entry under the lowercase authorization key', async (): Promise<void> => {
	const stub: FetchStub = makeFetchStub([{ ok: true, status: 200, bodyText: tokenBody('access-1', 'offline-1', 300) }]);
	const provider: OfflineTokenProvider = await doLogin({ fetchFn: stub.fetchFn });
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	const grpc: { Metadata: { prototype: GrpcMetadataReadback; new (): GrpcMetadataReadback } } = require('@grpc/grpc-js');
	const originalSet: (key: string, value: string) => void = grpc.Metadata.prototype.set;
	const rawKeys: string[] = [];
	grpc.Metadata.prototype.set = function (key: string, value: string): void {
		rawKeys.push(key);
		originalSet.call(this, key, value);
	};
	try {
		const metadata: GrpcMetadataReadback = provider.getAuthMetadata() as unknown as GrpcMetadataReadback;
		assert.ok(metadata instanceof grpc.Metadata);
		// The raw key the provider handed to grpc-js must be exactly lowercase 'authorization'.
		assert.deepEqual(rawKeys, ['authorization']);
		assert.deepEqual(metadata.get('authorization'), ['Bearer access-1']);
	} finally {
		grpc.Metadata.prototype.set = originalSet;
		provider.stop();
	}
});

/** Omitting both `fetchFn` and `nowFn` makes {@link login} fall back to the global `fetch` and `Date.now`. */
nodeTest('login falls back to the global fetch and Date.now when neither is injected', async (): Promise<void> => {
	const globalRef: { fetch?: FetchFn } = globalThis as { fetch?: FetchFn };
	const previousFetch: FetchFn | undefined = globalRef.fetch;
	const recorded: string[] = [];
	globalRef.fetch = (url: string, init: FetchInit): Promise<FetchResponseLike> => {
		recorded.push(url);
		return Promise.resolve({
			ok: true,
			status: 200,
			text: (): Promise<string> => Promise.resolve(tokenBody('access-global', 'offline-global', 300))
		});
	};
	try {
		// Omit both fetchFn (-> defaultFetch -> globalThis.fetch) and nowFn (-> Date.now).
		const provider: OfflineTokenProvider = await login(BASE_OPTIONS);
		try {
			assert.equal(recorded.length, 1);
			assert.equal(recorded[0], TOKEN_ENDPOINT);
			assert.equal(provider.getAccessToken(), 'access-global');
		} finally {
			provider.stop();
		}
	} finally {
		globalRef.fetch = previousFetch;
	}
});

/** With neither an injected nor a global `fetch`, {@link login} raises {@link OfflineTokenError}. */
nodeTest('login throws OfflineTokenError when no fetchFn is given and no global fetch exists', async (): Promise<void> => {
	const globalRef: { fetch?: FetchFn } = globalThis as { fetch?: FetchFn };
	const previousFetch: FetchFn | undefined = globalRef.fetch;
	delete (globalThis as { fetch?: FetchFn }).fetch;
	try {
		await assert.rejects(
			(): Promise<OfflineTokenProvider> => login(BASE_OPTIONS),
			(thrown: unknown): boolean => {
				assert.ok(thrown instanceof OfflineTokenError);
				assert.match(thrown.message, /No global fetch available/);
				return true;
			}
		);
	} finally {
		globalRef.fetch = previousFetch;
	}
});

/** A 2xx response lacking `access_token` raises {@link OfflineTokenError}. */
nodeTest('login throws OfflineTokenError when access_token is missing', async (): Promise<void> => {
	const stub: FetchStub = makeFetchStub([
		{ ok: true, status: 200, bodyText: JSON.stringify({ refresh_token: 'r', expires_in: 300 }) }
	]);
	await assert.rejects(
		(): Promise<OfflineTokenProvider> => doLogin({ fetchFn: stub.fetchFn }),
		(thrown: unknown): boolean => {
			assert.ok(thrown instanceof OfflineTokenError);
			assert.match(thrown.message, /access_token/);
			return true;
		}
	);
});

/** A body that is valid JSON but not an object (e.g. `null`) raises {@link OfflineTokenError}. */
nodeTest('login throws OfflineTokenError when the body is valid JSON but not an object', async (): Promise<void> => {
	const stub: FetchStub = makeFetchStub([{ ok: true, status: 200, bodyText: 'null' }]);
	await assert.rejects(
		(): Promise<OfflineTokenProvider> => doLogin({ fetchFn: stub.fetchFn }),
		(thrown: unknown): boolean => {
			assert.ok(thrown instanceof OfflineTokenError);
			assert.match(thrown.message, /not an object/);
			return true;
		}
	);
});

/** A non-numeric `expires_in` raises {@link OfflineTokenError}. */
nodeTest('login throws OfflineTokenError when expires_in is not a number', async (): Promise<void> => {
	const stub: FetchStub = makeFetchStub([
		{ ok: true, status: 200, bodyText: JSON.stringify({ access_token: 'a', refresh_token: 'r', expires_in: 'soon' }) }
	]);
	await assert.rejects(
		(): Promise<OfflineTokenProvider> => doLogin({ fetchFn: stub.fetchFn }),
		(thrown: unknown): boolean => {
			assert.ok(thrown instanceof OfflineTokenError);
			assert.match(thrown.message, /expires_in/);
			return true;
		}
	);
});

/** Overlapping {@link OfflineTokenProvider.forceRefresh} calls coalesce onto one in-flight request, not two. */
nodeTest('concurrent forceRefresh calls share a single in-flight refresh request', async (): Promise<void> => {
	let releaseRefresh: () => void = (): void => undefined;
	const gate: Promise<void> = new Promise<void>((resolve: () => void): void => {
		releaseRefresh = resolve;
	});
	const requests: string[] = [];
	let callIndex: number = 0;
	const fetchFn: FetchFn = (_url: string, init: FetchInit): Promise<FetchResponseLike> => {
		const form: URLSearchParams = new URLSearchParams(init.body);
		requests.push(form.get('grant_type') ?? '');
		const current: number = callIndex++;
		const body: string = tokenBody(`access-${current}`, `offline-${current}`, 300);
		const reply: FetchResponseLike = {
			ok: true,
			status: 200,
			text: (): Promise<string> => Promise.resolve(body)
		};
		// The login (first) call resolves immediately; the refresh call waits on the gate.
		if (current === 0) {
			return Promise.resolve(reply);
		}
		return gate.then((): FetchResponseLike => reply);
	};
	const provider: OfflineTokenProvider = await doLogin({ fetchFn });
	try {
		// Two overlapping refreshes: the second must await the first's in-flight promise,
		// so only ONE extra token request is issued.
		const first: Promise<string> = provider.forceRefresh();
		const second: Promise<string> = provider.forceRefresh();
		releaseRefresh();
		const [a, b]: [string, string] = await Promise.all([first, second]);
		assert.equal(a, 'access-1');
		assert.equal(b, 'access-1');
		// 1 login + exactly 1 refresh (shared), not 2 refreshes.
		assert.deepEqual(requests, ['password', 'refresh_token']);
	} finally {
		provider.stop();
	}
});

/** After {@link OfflineTokenProvider.stop}, a forced refresh still succeeds but the loop never re-arms a timer. */
nodeTest('forceRefresh after stop() refreshes once but does not reschedule a timer', async (): Promise<void> => {
	const timers: typeof nodeTest.mock.timers = nodeTest.mock.timers;
	timers.enable({ apis: ['setTimeout'] });
	try {
		const stub: FetchStub = makeFetchStub([
			{ ok: true, status: 200, bodyText: tokenBody('access-1', 'offline-1', 300) },
			{ ok: true, status: 200, bodyText: tokenBody('access-2', 'offline-2', 300) }
		]);
		const provider: OfflineTokenProvider = await doLogin({ refreshSkewInS: 30, fetchFn: stub.fetchFn });
		// stop() clears the active login-scheduled timer (exercises the clearTimeout branch).
		provider.stop();
		// A forced refresh still succeeds, but scheduleRefresh must early-return on `stopped`.
		const refreshed: string = await provider.forceRefresh();
		assert.equal(refreshed, 'access-2');
		// No new timer was scheduled, so ticking past the would-be refresh fires nothing.
		timers.tick(10 * 60 * 1000);
		await Promise.resolve();
		assert.equal(stub.requests.length, 2, 'no background refresh after stop()');
		assert.equal(provider.getAccessToken(), 'access-2');
	} finally {
		timers.reset();
	}
});

/**
 * Yield to the microtask queue until the provider's access token reaches the
 * expected value (the observable end-state of an async refresh). Mock timers
 * fire the refresh callback synchronously on `tick`, but the fetch/parse chain
 * that updates the token settles over subsequent microtask turns.
 */
async function waitForToken(provider: OfflineTokenProvider, expected: string): Promise<void> {
	for (let attempt: number = 0; attempt < 200 && provider.getAccessToken() !== expected; attempt++) {
		await Promise.resolve();
	}
	assert.equal(provider.getAccessToken(), expected);
}
