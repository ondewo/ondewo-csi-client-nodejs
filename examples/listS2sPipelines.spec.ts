// Hermetic unit tests for the listS2sPipelines example.
//
// No network and no live gRPC server: the CSI Conversations client is replaced
// by a structural double that records the request + metadata it receives and
// invokes the node-style callback with a canned response or error. This proves
// the example forwards the request and bearer metadata unchanged and correctly
// maps (and error-propagates) the response.
//
// Run (Node >= 22, no extra deps):
//   node --test --experimental-strip-types examples/listS2sPipelines.spec.ts

import nodeTest from 'node:test';
import assert from 'node:assert/strict';
import { listS2sPipelines } from './listS2sPipelines';
import type {
	AuthMetadata,
	ConversationsClientLike,
	ListS2sPipelinesResponseLike,
	S2sPipelineLike,
	S2sPipelineSummary,
	ServiceErrorLike
} from './listS2sPipelines';

/** The request + metadata a single `listS2sPipelines` call handed to the client. */
interface RecordedCall {
	/** The request instance the example forwarded. */
	request: object;
	/** The bearer metadata the example forwarded. */
	metadata: AuthMetadata;
}

/** A client double plus the calls it has recorded. */
interface ClientDouble {
	/** The structural client to pass into the example. */
	client: ConversationsClientLike;
	/** The calls captured so far, in order. */
	calls: RecordedCall[];
}

/**
 * Build a bearer-metadata double (only `set` is part of the structural surface).
 *
 * @returns an inert `AuthMetadata` used purely as a forwarded sentinel.
 */
function makeMetadata(): AuthMetadata {
	return { set: (): void => undefined };
}

/**
 * Build a generated-message double for one `S2sPipeline`.
 *
 * @param id the pipeline id.
 * @param nluProjectId the NLU project id.
 * @param nluLanguageCode the NLU language code.
 * @returns a structural `S2sPipelineLike` exposing the three read getters.
 */
function makePipeline(id: string, nluProjectId: string, nluLanguageCode: string): S2sPipelineLike {
	return {
		getId: (): string => id,
		getNluProjectId: (): string => nluProjectId,
		getNluLanguageCode: (): string => nluLanguageCode
	};
}

/**
 * Build a client double that replies with a canned response and/or error and
 * records every call.
 *
 * @param error the error to pass to the callback, or `null` for success.
 * @param pipelines the pipelines the canned response returns on success.
 * @returns the client double and its recorded-calls list.
 */
function makeClientDouble(error: ServiceErrorLike | null, pipelines: S2sPipelineLike[]): ClientDouble {
	const calls: RecordedCall[] = [];
	const response: ListS2sPipelinesResponseLike = {
		getPipelinesList: (): S2sPipelineLike[] => pipelines
	};
	const client: ConversationsClientLike = {
		listS2sPipelines: (
			request: object,
			metadata: AuthMetadata,
			done: (callError: ServiceErrorLike | null, callResponse: ListS2sPipelinesResponseLike) => void
		): void => {
			calls.push({ request, metadata });
			done(error, response);
		}
	};
	return { client, calls };
}

/** On success the example maps the response and forwards the exact request + bearer metadata. */
nodeTest('listS2sPipelines maps the response and forwards the request + bearer metadata', async (): Promise<void> => {
	const double: ClientDouble = makeClientDouble(null, [
		makePipeline('pipeline-a', 'project-1', 'en'),
		makePipeline('pipeline-b', 'project-2', 'de')
	]);
	const request: object = {};
	const metadata: AuthMetadata = makeMetadata();

	const summaries: S2sPipelineSummary[] = await listS2sPipelines(double.client, request, metadata);

	assert.deepEqual(summaries, [
		{ id: 'pipeline-a', nluProjectId: 'project-1', nluLanguageCode: 'en' },
		{ id: 'pipeline-b', nluProjectId: 'project-2', nluLanguageCode: 'de' }
	]);
	assert.equal(double.calls.length, 1);
	// The exact request instance and metadata are forwarded unchanged.
	assert.equal(double.calls[0].request, request);
	assert.equal(double.calls[0].metadata, metadata);
});

/** An empty pipeline list resolves to an empty summary array (no throw on the happy-empty path). */
nodeTest('listS2sPipelines resolves to an empty array when no pipelines exist', async (): Promise<void> => {
	const double: ClientDouble = makeClientDouble(null, []);

	const summaries: S2sPipelineSummary[] = await listS2sPipelines(double.client, {}, makeMetadata());

	assert.deepEqual(summaries, []);
});

/** A gRPC `ServiceError` from the unary call rejects the returned promise with that same error. */
nodeTest('listS2sPipelines rejects with the gRPC ServiceError when the call fails', async (): Promise<void> => {
	const serviceError: ServiceErrorLike = new Error('upstream unavailable') as ServiceErrorLike;
	serviceError.code = 14;
	const double: ClientDouble = makeClientDouble(serviceError, []);

	await assert.rejects(
		(): Promise<S2sPipelineSummary[]> => listS2sPipelines(double.client, {}, makeMetadata()),
		(thrown: unknown): boolean => {
			assert.ok(thrown instanceof Error);
			const failure: ServiceErrorLike = thrown;
			assert.equal(failure, serviceError);
			assert.equal(failure.code, 14);
			return true;
		}
	);
});
