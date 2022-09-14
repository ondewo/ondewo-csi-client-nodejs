// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2018 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// Modifications Copyright 2021 ONDEWO GmbH
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
'use strict';
var grpc = require('@grpc/grpc-js');
var ondewo_nlu_session_pb = require('../../ondewo/nlu/session_pb.js');
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_rpc_status_pb = require('../../google/rpc/status_pb.js');
var google_type_latlng_pb = require('../../google/type/latlng_pb.js');
var ondewo_nlu_context_pb = require('../../ondewo/nlu/context_pb.js');
var ondewo_nlu_intent_pb = require('../../ondewo/nlu/intent_pb.js');
var ondewo_nlu_entity_type_pb = require('../../ondewo/nlu/entity_type_pb.js');

function serialize_google_protobuf_Empty(arg) {
	if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
		throw new Error('Expected argument of type google.protobuf.Empty');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
	return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_AddSessionLabelsRequest(arg) {
	if (!(arg instanceof ondewo_nlu_session_pb.AddSessionLabelsRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.AddSessionLabelsRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_AddSessionLabelsRequest(buffer_arg) {
	return ondewo_nlu_session_pb.AddSessionLabelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CreateSessionRequest(arg) {
	if (!(arg instanceof ondewo_nlu_session_pb.CreateSessionRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.CreateSessionRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CreateSessionRequest(buffer_arg) {
	return ondewo_nlu_session_pb.CreateSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CreateSessionReviewRequest(arg) {
	if (!(arg instanceof ondewo_nlu_session_pb.CreateSessionReviewRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.CreateSessionReviewRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CreateSessionReviewRequest(buffer_arg) {
	return ondewo_nlu_session_pb.CreateSessionReviewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DeleteSessionRequest(arg) {
	if (!(arg instanceof ondewo_nlu_session_pb.DeleteSessionRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.DeleteSessionRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteSessionRequest(buffer_arg) {
	return ondewo_nlu_session_pb.DeleteSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DetectIntentRequest(arg) {
	if (!(arg instanceof ondewo_nlu_session_pb.DetectIntentRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.DetectIntentRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DetectIntentRequest(buffer_arg) {
	return ondewo_nlu_session_pb.DetectIntentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DetectIntentResponse(arg) {
	if (!(arg instanceof ondewo_nlu_session_pb.DetectIntentResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.DetectIntentResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DetectIntentResponse(buffer_arg) {
	return ondewo_nlu_session_pb.DetectIntentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetLatestSessionReviewRequest(arg) {
	if (!(arg instanceof ondewo_nlu_session_pb.GetLatestSessionReviewRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.GetLatestSessionReviewRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetLatestSessionReviewRequest(buffer_arg) {
	return ondewo_nlu_session_pb.GetLatestSessionReviewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetSessionRequest(arg) {
	if (!(arg instanceof ondewo_nlu_session_pb.GetSessionRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.GetSessionRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetSessionRequest(buffer_arg) {
	return ondewo_nlu_session_pb.GetSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetSessionReviewRequest(arg) {
	if (!(arg instanceof ondewo_nlu_session_pb.GetSessionReviewRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.GetSessionReviewRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetSessionReviewRequest(buffer_arg) {
	return ondewo_nlu_session_pb.GetSessionReviewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListSessionLabelsRequest(arg) {
	if (!(arg instanceof ondewo_nlu_session_pb.ListSessionLabelsRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.ListSessionLabelsRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListSessionLabelsRequest(buffer_arg) {
	return ondewo_nlu_session_pb.ListSessionLabelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListSessionLabelsResponse(arg) {
	if (!(arg instanceof ondewo_nlu_session_pb.ListSessionLabelsResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.ListSessionLabelsResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListSessionLabelsResponse(buffer_arg) {
	return ondewo_nlu_session_pb.ListSessionLabelsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListSessionReviewsRequest(arg) {
	if (!(arg instanceof ondewo_nlu_session_pb.ListSessionReviewsRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.ListSessionReviewsRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListSessionReviewsRequest(buffer_arg) {
	return ondewo_nlu_session_pb.ListSessionReviewsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListSessionReviewsResponse(arg) {
	if (!(arg instanceof ondewo_nlu_session_pb.ListSessionReviewsResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.ListSessionReviewsResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListSessionReviewsResponse(buffer_arg) {
	return ondewo_nlu_session_pb.ListSessionReviewsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListSessionsRequest(arg) {
	if (!(arg instanceof ondewo_nlu_session_pb.ListSessionsRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.ListSessionsRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListSessionsRequest(buffer_arg) {
	return ondewo_nlu_session_pb.ListSessionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListSessionsResponse(arg) {
	if (!(arg instanceof ondewo_nlu_session_pb.ListSessionsResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.ListSessionsResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListSessionsResponse(buffer_arg) {
	return ondewo_nlu_session_pb.ListSessionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RemoveSessionLabelsRequest(arg) {
	if (!(arg instanceof ondewo_nlu_session_pb.RemoveSessionLabelsRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.RemoveSessionLabelsRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RemoveSessionLabelsRequest(buffer_arg) {
	return ondewo_nlu_session_pb.RemoveSessionLabelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_Session(arg) {
	if (!(arg instanceof ondewo_nlu_session_pb.Session)) {
		throw new Error('Expected argument of type ondewo.nlu.Session');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_Session(buffer_arg) {
	return ondewo_nlu_session_pb.Session.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_SessionReview(arg) {
	if (!(arg instanceof ondewo_nlu_session_pb.SessionReview)) {
		throw new Error('Expected argument of type ondewo.nlu.SessionReview');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_SessionReview(buffer_arg) {
	return ondewo_nlu_session_pb.SessionReview.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_StreamingDetectIntentRequest(arg) {
	if (!(arg instanceof ondewo_nlu_session_pb.StreamingDetectIntentRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.StreamingDetectIntentRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_StreamingDetectIntentRequest(buffer_arg) {
	return ondewo_nlu_session_pb.StreamingDetectIntentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_StreamingDetectIntentResponse(arg) {
	if (!(arg instanceof ondewo_nlu_session_pb.StreamingDetectIntentResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.StreamingDetectIntentResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_StreamingDetectIntentResponse(buffer_arg) {
	return ondewo_nlu_session_pb.StreamingDetectIntentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_TrackSessionStepRequest(arg) {
	if (!(arg instanceof ondewo_nlu_session_pb.TrackSessionStepRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.TrackSessionStepRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_TrackSessionStepRequest(buffer_arg) {
	return ondewo_nlu_session_pb.TrackSessionStepRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

// A session represents an interaction with a user. You retrieve user input
// and pass it to the [DetectIntent][google.cloud.dialogflow.v2.Sessions.DetectIntent] (or
// [StreamingDetectIntent][google.cloud.dialogflow.v2.Sessions.StreamingDetectIntent]) method to determine
// user intent and respond.
var SessionsService = (exports.SessionsService = {
	// Processes a natural language query and returns structured, actionable data
	// as a result. This method is not idempotent, because it may cause contexts
	// and session entity types to be updated, which in turn might affect
	// results of future queries.
	detectIntent: {
		path: '/ondewo.nlu.Sessions/DetectIntent',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_session_pb.DetectIntentRequest,
		responseType: ondewo_nlu_session_pb.DetectIntentResponse,
		requestSerialize: serialize_ondewo_nlu_DetectIntentRequest,
		requestDeserialize: deserialize_ondewo_nlu_DetectIntentRequest,
		responseSerialize: serialize_ondewo_nlu_DetectIntentResponse,
		responseDeserialize: deserialize_ondewo_nlu_DetectIntentResponse
	},
	// Processes a natural language query in audio format in a streaming fashion
	// and returns structured, actionable data as a result. This method is only
	// available via the gRPC API (not REST).
	streamingDetectIntent: {
		path: '/ondewo.nlu.Sessions/StreamingDetectIntent',
		requestStream: true,
		responseStream: true,
		requestType: ondewo_nlu_session_pb.StreamingDetectIntentRequest,
		responseType: ondewo_nlu_session_pb.StreamingDetectIntentResponse,
		requestSerialize: serialize_ondewo_nlu_StreamingDetectIntentRequest,
		requestDeserialize: deserialize_ondewo_nlu_StreamingDetectIntentRequest,
		responseSerialize: serialize_ondewo_nlu_StreamingDetectIntentResponse,
		responseDeserialize: deserialize_ondewo_nlu_StreamingDetectIntentResponse
	},
	// *** SESSION RELATED ENDPOINTS *** //
	// ListSessions: returns list of sessions from ondewo-kb; by default returns only session IDs
	listSessions: {
		path: '/ondewo.nlu.Sessions/ListSessions',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_session_pb.ListSessionsRequest,
		responseType: ondewo_nlu_session_pb.ListSessionsResponse,
		requestSerialize: serialize_ondewo_nlu_ListSessionsRequest,
		requestDeserialize: deserialize_ondewo_nlu_ListSessionsRequest,
		responseSerialize: serialize_ondewo_nlu_ListSessionsResponse,
		responseDeserialize: deserialize_ondewo_nlu_ListSessionsResponse
	},
	// GetSession: returns a session(=conversation) from ondewo-kb
	getSession: {
		path: '/ondewo.nlu.Sessions/GetSession',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_session_pb.GetSessionRequest,
		responseType: ondewo_nlu_session_pb.Session,
		requestSerialize: serialize_ondewo_nlu_GetSessionRequest,
		requestDeserialize: deserialize_ondewo_nlu_GetSessionRequest,
		responseSerialize: serialize_ondewo_nlu_Session,
		responseDeserialize: deserialize_ondewo_nlu_Session
	},
	// CreateSession: creates and returns a session(=conversation) from ondewo-kb
	createSession: {
		path: '/ondewo.nlu.Sessions/CreateSession',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_session_pb.CreateSessionRequest,
		responseType: ondewo_nlu_session_pb.Session,
		requestSerialize: serialize_ondewo_nlu_CreateSessionRequest,
		requestDeserialize: deserialize_ondewo_nlu_CreateSessionRequest,
		responseSerialize: serialize_ondewo_nlu_Session,
		responseDeserialize: deserialize_ondewo_nlu_Session
	},
	// TrackSessionStep: append to an existing session; creates it if not existing
	trackSessionStep: {
		path: '/ondewo.nlu.Sessions/TrackSessionStep',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_session_pb.TrackSessionStepRequest,
		responseType: ondewo_nlu_session_pb.Session,
		requestSerialize: serialize_ondewo_nlu_TrackSessionStepRequest,
		requestDeserialize: deserialize_ondewo_nlu_TrackSessionStepRequest,
		responseSerialize: serialize_ondewo_nlu_Session,
		responseDeserialize: deserialize_ondewo_nlu_Session
	},
	// DeleteSession: delete a session(=conversation) from ondewo-kb (for testing only)
	deleteSession: {
		path: '/ondewo.nlu.Sessions/DeleteSession',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_session_pb.DeleteSessionRequest,
		responseType: google_protobuf_empty_pb.Empty,
		requestSerialize: serialize_ondewo_nlu_DeleteSessionRequest,
		requestDeserialize: deserialize_ondewo_nlu_DeleteSessionRequest,
		responseSerialize: serialize_google_protobuf_Empty,
		responseDeserialize: deserialize_google_protobuf_Empty
	},
	// *** SESSION-LABEL RELATED ENDPOINTS *** //
	listSessionLabels: {
		path: '/ondewo.nlu.Sessions/ListSessionLabels',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_session_pb.ListSessionLabelsRequest,
		responseType: ondewo_nlu_session_pb.ListSessionLabelsResponse,
		requestSerialize: serialize_ondewo_nlu_ListSessionLabelsRequest,
		requestDeserialize: deserialize_ondewo_nlu_ListSessionLabelsRequest,
		responseSerialize: serialize_ondewo_nlu_ListSessionLabelsResponse,
		responseDeserialize: deserialize_ondewo_nlu_ListSessionLabelsResponse
	},
	addSessionLabels: {
		path: '/ondewo.nlu.Sessions/AddSessionLabels',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_session_pb.AddSessionLabelsRequest,
		responseType: ondewo_nlu_session_pb.Session,
		requestSerialize: serialize_ondewo_nlu_AddSessionLabelsRequest,
		requestDeserialize: deserialize_ondewo_nlu_AddSessionLabelsRequest,
		responseSerialize: serialize_ondewo_nlu_Session,
		responseDeserialize: deserialize_ondewo_nlu_Session
	},
	removeSessionLabels: {
		path: '/ondewo.nlu.Sessions/RemoveSessionLabels',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_session_pb.RemoveSessionLabelsRequest,
		responseType: ondewo_nlu_session_pb.Session,
		requestSerialize: serialize_ondewo_nlu_RemoveSessionLabelsRequest,
		requestDeserialize: deserialize_ondewo_nlu_RemoveSessionLabelsRequest,
		responseSerialize: serialize_ondewo_nlu_Session,
		responseDeserialize: deserialize_ondewo_nlu_Session
	},
	// *** SESSION-REVIEW RELATED ENDPOINTS *** //
	// ListSessionReviews:
	// returns list of session reviews from ondewo-kb; by default only returns session review IDs
	listSessionReviews: {
		path: '/ondewo.nlu.Sessions/ListSessionReviews',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_session_pb.ListSessionReviewsRequest,
		responseType: ondewo_nlu_session_pb.ListSessionReviewsResponse,
		requestSerialize: serialize_ondewo_nlu_ListSessionReviewsRequest,
		requestDeserialize: deserialize_ondewo_nlu_ListSessionReviewsRequest,
		responseSerialize: serialize_ondewo_nlu_ListSessionReviewsResponse,
		responseDeserialize: deserialize_ondewo_nlu_ListSessionReviewsResponse
	},
	// GetSessionReview:
	// returns a session-review from ondewo-kb or computes the first review if none exists
	getSessionReview: {
		path: '/ondewo.nlu.Sessions/GetSessionReview',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_session_pb.GetSessionReviewRequest,
		responseType: ondewo_nlu_session_pb.SessionReview,
		requestSerialize: serialize_ondewo_nlu_GetSessionReviewRequest,
		requestDeserialize: deserialize_ondewo_nlu_GetSessionReviewRequest,
		responseSerialize: serialize_ondewo_nlu_SessionReview,
		responseDeserialize: deserialize_ondewo_nlu_SessionReview
	},
	// GetLatestSessionReview:
	// returns a session-review from ondewo-kb or computes the first review if none exists
	getLatestSessionReview: {
		path: '/ondewo.nlu.Sessions/GetLatestSessionReview',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_session_pb.GetLatestSessionReviewRequest,
		responseType: ondewo_nlu_session_pb.SessionReview,
		requestSerialize: serialize_ondewo_nlu_GetLatestSessionReviewRequest,
		requestDeserialize: deserialize_ondewo_nlu_GetLatestSessionReviewRequest,
		responseSerialize: serialize_ondewo_nlu_SessionReview,
		responseDeserialize: deserialize_ondewo_nlu_SessionReview
	},
	// CreateSessionReview:
	// persist a session review in ondewo-kb
	// as a side effect: also update training data in ondewo-cai
	createSessionReview: {
		path: '/ondewo.nlu.Sessions/CreateSessionReview',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_session_pb.CreateSessionReviewRequest,
		responseType: ondewo_nlu_session_pb.SessionReview,
		requestSerialize: serialize_ondewo_nlu_CreateSessionReviewRequest,
		requestDeserialize: deserialize_ondewo_nlu_CreateSessionReviewRequest,
		responseSerialize: serialize_ondewo_nlu_SessionReview,
		responseDeserialize: deserialize_ondewo_nlu_SessionReview
	}
});

exports.SessionsClient = grpc.makeGenericClientConstructor(SessionsService);
