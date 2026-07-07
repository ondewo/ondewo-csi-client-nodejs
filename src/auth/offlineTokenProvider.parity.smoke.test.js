// Parity smoke test for the SHIPPED CommonJS auth artifact.
//
// The 100%-coverage gate in `npm test` runs against the compiled TS source
// (.test-build/offlineTokenProvider.js), NOT the hand-authored CommonJS copy at
// api/auth/offlineTokenProvider.js that `make create_npm_package` actually ships
// (`cp -R api npm`) and that customers `require()` via public-api.js. This plain
// CJS smoke test loads that shipped artifact directly and asserts its core Bearer
// behaviour, so a drift between the two copies is caught. It is chained AFTER the
// c8 command in the `test` script (with `&&`) so it runs OUTSIDE the coverage gate
// — otherwise the api copy would be pulled into the `--include '**/offlineTokenProvider.js'`
// gate and fail the 100% lines/functions/branches check.

/* eslint-disable -- plain CommonJS smoke test of the shipped api/auth artifact (itself eslint-ignored); the TS-oriented ruleset (require-imports / typedef / id-denylist) does not apply here. */

'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { login } = require('../../api/auth/offlineTokenProvider');

/** A stand-in Keycloak JWT reused across the smoke assertions. */
const ACCESS_TOKEN = 'shipped-artifact-jwt';

/**
 * Build an injectable fetch double that returns one well-formed token response.
 *
 * @returns {Function} a fetch stub resolving the canned token body (no network).
 */
function makeFetchStub() {
	return function () {
		return Promise.resolve({
			ok: true,
			status: 200,
			text: function () {
				return Promise.resolve(
					JSON.stringify({ access_token: ACCESS_TOKEN, refresh_token: 'offline-1', expires_in: 300 })
				);
			}
		});
	};
}

/**
 * Log in against the shipped artifact with an injected fetch stub.
 *
 * @returns {Promise<object>} the started OfflineTokenProvider from the shipped copy.
 */
function loginWithStub() {
	return login({
		keycloakUrl: 'https://auth.example.com/auth',
		realm: 'ondewo-ccai-platform',
		clientId: 'ondewo-nlu-cai-sdk-public',
		username: 'ondewo-nlu-cai-tech-proj-bot@example.com',
		password: 'super-secret',
		fetchFn: makeFetchStub()
	});
}

test('shipped api/auth artifact: login resolves a provider exposing the Bearer authorization header', async () => {
	const provider = await loginWithStub();
	try {
		assert.equal(provider.getAccessToken(), ACCESS_TOKEN);
		assert.equal(provider.getAuthorizationHeader(), 'Bearer ' + ACCESS_TOKEN);
	} finally {
		provider.stop();
	}
});

test('shipped api/auth artifact: getAuthMetadata sets the bearer entry under the lowercase authorization key', async () => {
	const provider = await loginWithStub();
	// grpc-js normalises the key on set, so spy on the raw key the shipped artifact passes.
	const grpc = require('@grpc/grpc-js');
	const originalSet = grpc.Metadata.prototype.set;
	const rawKeys = [];
	grpc.Metadata.prototype.set = function (key, value) {
		rawKeys.push(key);
		originalSet.call(this, key, value);
	};
	try {
		const metadata = provider.getAuthMetadata();
		assert.deepEqual(rawKeys, ['authorization']);
		assert.deepEqual(metadata.get('authorization'), ['Bearer ' + ACCESS_TOKEN]);
	} finally {
		grpc.Metadata.prototype.set = originalSet;
		provider.stop();
	}
});
