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
// Modifications Copyright 2020-2023 ONDEWO GmbH
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
var ondewo_nlu_context_pb = require('../../ondewo/nlu/context_pb.js');
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_protobuf_Empty(arg) {
	if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
		throw new Error('Expected argument of type google.protobuf.Empty');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
	return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_Context(arg) {
	if (!(arg instanceof ondewo_nlu_context_pb.Context)) {
		throw new Error('Expected argument of type ondewo.nlu.Context');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_Context(buffer_arg) {
	return ondewo_nlu_context_pb.Context.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CreateContextRequest(arg) {
	if (!(arg instanceof ondewo_nlu_context_pb.CreateContextRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.CreateContextRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CreateContextRequest(buffer_arg) {
	return ondewo_nlu_context_pb.CreateContextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DeleteAllContextsRequest(arg) {
	if (!(arg instanceof ondewo_nlu_context_pb.DeleteAllContextsRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.DeleteAllContextsRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteAllContextsRequest(buffer_arg) {
	return ondewo_nlu_context_pb.DeleteAllContextsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DeleteContextRequest(arg) {
	if (!(arg instanceof ondewo_nlu_context_pb.DeleteContextRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.DeleteContextRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteContextRequest(buffer_arg) {
	return ondewo_nlu_context_pb.DeleteContextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetContextRequest(arg) {
	if (!(arg instanceof ondewo_nlu_context_pb.GetContextRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.GetContextRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetContextRequest(buffer_arg) {
	return ondewo_nlu_context_pb.GetContextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListContextsRequest(arg) {
	if (!(arg instanceof ondewo_nlu_context_pb.ListContextsRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.ListContextsRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListContextsRequest(buffer_arg) {
	return ondewo_nlu_context_pb.ListContextsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListContextsResponse(arg) {
	if (!(arg instanceof ondewo_nlu_context_pb.ListContextsResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.ListContextsResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListContextsResponse(buffer_arg) {
	return ondewo_nlu_context_pb.ListContextsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_UpdateContextRequest(arg) {
	if (!(arg instanceof ondewo_nlu_context_pb.UpdateContextRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.UpdateContextRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_UpdateContextRequest(buffer_arg) {
	return ondewo_nlu_context_pb.UpdateContextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

// A context represents additional information included with user input or with
// an intent returned by the Dialogflow API. Contexts are helpful for
// differentiating user input which may be vague or have a different meaning
// depending on additional details from your application such as user setting
// and preferences, previous user input, where the user is in your application,
// geographic location, and so on.
//
// You can include contexts as input parameters of a
// [DetectIntent][google.cloud.dialogflow.v2.Sessions.DetectIntent] (or
// [StreamingDetectIntent][google.cloud.dialogflow.v2.Sessions.StreamingDetectIntent]) request,
// or as output contexts included in the returned intent.
// Contexts expire when an intent is matched, after the number of `DetectIntent`
// requests specified by the `lifespan_count` parameter, or after 10 minutes
// if no intents are matched for a `DetectIntent` request.
//
// For more information about contexts, see the
// [Dialogflow documentation](https://dialogflow.com/docs/contexts).
var ContextsService = (exports.ContextsService = {
	// Returns the list of all contexts in the specified session.
	listContexts: {
		path: '/ondewo.nlu.Contexts/ListContexts',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_context_pb.ListContextsRequest,
		responseType: ondewo_nlu_context_pb.ListContextsResponse,
		requestSerialize: serialize_ondewo_nlu_ListContextsRequest,
		requestDeserialize: deserialize_ondewo_nlu_ListContextsRequest,
		responseSerialize: serialize_ondewo_nlu_ListContextsResponse,
		responseDeserialize: deserialize_ondewo_nlu_ListContextsResponse
	},
	// Retrieves the specified context.
	getContext: {
		path: '/ondewo.nlu.Contexts/GetContext',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_context_pb.GetContextRequest,
		responseType: ondewo_nlu_context_pb.Context,
		requestSerialize: serialize_ondewo_nlu_GetContextRequest,
		requestDeserialize: deserialize_ondewo_nlu_GetContextRequest,
		responseSerialize: serialize_ondewo_nlu_Context,
		responseDeserialize: deserialize_ondewo_nlu_Context
	},
	// Creates a context.
	createContext: {
		path: '/ondewo.nlu.Contexts/CreateContext',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_context_pb.CreateContextRequest,
		responseType: ondewo_nlu_context_pb.Context,
		requestSerialize: serialize_ondewo_nlu_CreateContextRequest,
		requestDeserialize: deserialize_ondewo_nlu_CreateContextRequest,
		responseSerialize: serialize_ondewo_nlu_Context,
		responseDeserialize: deserialize_ondewo_nlu_Context
	},
	// Updates the specified context.
	updateContext: {
		path: '/ondewo.nlu.Contexts/UpdateContext',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_context_pb.UpdateContextRequest,
		responseType: ondewo_nlu_context_pb.Context,
		requestSerialize: serialize_ondewo_nlu_UpdateContextRequest,
		requestDeserialize: deserialize_ondewo_nlu_UpdateContextRequest,
		responseSerialize: serialize_ondewo_nlu_Context,
		responseDeserialize: deserialize_ondewo_nlu_Context
	},
	// Deletes the specified context.
	deleteContext: {
		path: '/ondewo.nlu.Contexts/DeleteContext',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_context_pb.DeleteContextRequest,
		responseType: google_protobuf_empty_pb.Empty,
		requestSerialize: serialize_ondewo_nlu_DeleteContextRequest,
		requestDeserialize: deserialize_ondewo_nlu_DeleteContextRequest,
		responseSerialize: serialize_google_protobuf_Empty,
		responseDeserialize: deserialize_google_protobuf_Empty
	},
	// Deletes all active contexts in the specified session.
	deleteAllContexts: {
		path: '/ondewo.nlu.Contexts/DeleteAllContexts',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_context_pb.DeleteAllContextsRequest,
		responseType: google_protobuf_empty_pb.Empty,
		requestSerialize: serialize_ondewo_nlu_DeleteAllContextsRequest,
		requestDeserialize: deserialize_ondewo_nlu_DeleteAllContextsRequest,
		responseSerialize: serialize_google_protobuf_Empty,
		responseDeserialize: deserialize_google_protobuf_Empty
	}
});

exports.ContextsClient = grpc.makeGenericClientConstructor(ContextsService);
