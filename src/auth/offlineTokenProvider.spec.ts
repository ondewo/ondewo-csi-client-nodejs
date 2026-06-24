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

interface FetchFn {
	(url: string, init: FetchInit): Promise<FetchResponseLike>;
}

interface RecordedRequest {
	url: string;
	init: FetchInit;
	form: URLSearchParams;
}

interface StubReply {
	ok: boolean;
	status: number;
	bodyText: string;
}

interface FetchStub {
	fetchFn: FetchFn;
	requests: RecordedRequest[];
}

interface LoginOverrides {
	keycloakUrl?: string;
	refreshSkewInS?: number;
	tokenExpirationInS?: number;
	fetchFn: FetchFn;
}

interface BaseOptions {
	keycloakUrl: string;
	realm: string;
	clientId: string;
	username: string;
	password: string;
}

const BASE_OPTIONS: BaseOptions = {
	keycloakUrl: 'https://auth.example.com/auth',
	realm: 'ondewo-ccai-platform',
	clientId: 'ondewo-nlu-cai-sdk-public',
	username: 'ondewo-nlu-cai-tech-proj-bot@example.com',
	password: 'super-secret'
};

const TOKEN_ENDPOINT: string =
	'https://auth.example.com/auth/realms/ondewo-ccai-platform/protocol/openid-connect/token';

/** Build a fetch stub that returns queued replies and records every request. */
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

function tokenBody(accessToken: string, refreshToken: string, expiresIn: number): string {
	return JSON.stringify({ access_token: accessToken, refresh_token: refreshToken, expires_in: expiresIn });
}

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

nodeTest('login normalises a trailing slash in keycloakUrl', async (): Promise<void> => {
	const stub: FetchStub = makeFetchStub([{ ok: true, status: 200, bodyText: tokenBody('a', 'r', 300) }]);
	const provider: OfflineTokenProvider = await doLogin({
		keycloakUrl: 'https://auth.example.com/auth///',
		fetchFn: stub.fetchFn
	});
	provider.stop();
	assert.equal(stub.requests[0].url, TOKEN_ENDPOINT);
});

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
