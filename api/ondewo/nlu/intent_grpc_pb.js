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
var ondewo_nlu_intent_pb = require('../../ondewo/nlu/intent_pb.js');
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var ondewo_nlu_context_pb = require('../../ondewo/nlu/context_pb.js');
var ondewo_nlu_common_pb = require('../../ondewo/nlu/common_pb.js');
var ondewo_nlu_operations_pb = require('../../ondewo/nlu/operations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

function serialize_google_protobuf_Empty(arg) {
	if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
		throw new Error('Expected argument of type google.protobuf.Empty');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
	return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_BatchCreateParametersRequest(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.BatchCreateParametersRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.BatchCreateParametersRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_BatchCreateParametersRequest(buffer_arg) {
	return ondewo_nlu_intent_pb.BatchCreateParametersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_BatchCreateResponseMessagesRequest(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.BatchCreateResponseMessagesRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.BatchCreateResponseMessagesRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_BatchCreateResponseMessagesRequest(buffer_arg) {
	return ondewo_nlu_intent_pb.BatchCreateResponseMessagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_BatchCreateTrainingPhrasesRequest(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.BatchCreateTrainingPhrasesRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.BatchCreateTrainingPhrasesRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_BatchCreateTrainingPhrasesRequest(buffer_arg) {
	return ondewo_nlu_intent_pb.BatchCreateTrainingPhrasesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_BatchDeleteIntentsRequest(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.BatchDeleteIntentsRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.BatchDeleteIntentsRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_BatchDeleteIntentsRequest(buffer_arg) {
	return ondewo_nlu_intent_pb.BatchDeleteIntentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_BatchDeleteParametersRequest(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.BatchDeleteParametersRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.BatchDeleteParametersRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_BatchDeleteParametersRequest(buffer_arg) {
	return ondewo_nlu_intent_pb.BatchDeleteParametersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_BatchDeleteParametersResponse(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.BatchDeleteParametersResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.BatchDeleteParametersResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_BatchDeleteParametersResponse(buffer_arg) {
	return ondewo_nlu_intent_pb.BatchDeleteParametersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_BatchDeleteResponseMessagesRequest(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.BatchDeleteResponseMessagesRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.BatchDeleteResponseMessagesRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_BatchDeleteResponseMessagesRequest(buffer_arg) {
	return ondewo_nlu_intent_pb.BatchDeleteResponseMessagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_BatchDeleteResponseMessagesResponse(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.BatchDeleteResponseMessagesResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.BatchDeleteResponseMessagesResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_BatchDeleteResponseMessagesResponse(buffer_arg) {
	return ondewo_nlu_intent_pb.BatchDeleteResponseMessagesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_BatchDeleteTrainingPhrasesRequest(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.BatchDeleteTrainingPhrasesRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.BatchDeleteTrainingPhrasesRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_BatchDeleteTrainingPhrasesRequest(buffer_arg) {
	return ondewo_nlu_intent_pb.BatchDeleteTrainingPhrasesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_BatchDeleteTrainingPhrasesResponse(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.BatchDeleteTrainingPhrasesResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.BatchDeleteTrainingPhrasesResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_BatchDeleteTrainingPhrasesResponse(buffer_arg) {
	return ondewo_nlu_intent_pb.BatchDeleteTrainingPhrasesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_BatchGetParametersRequest(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.BatchGetParametersRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.BatchGetParametersRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_BatchGetParametersRequest(buffer_arg) {
	return ondewo_nlu_intent_pb.BatchGetParametersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_BatchGetResponseMessagesRequest(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.BatchGetResponseMessagesRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.BatchGetResponseMessagesRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_BatchGetResponseMessagesRequest(buffer_arg) {
	return ondewo_nlu_intent_pb.BatchGetResponseMessagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_BatchGetTrainingPhrasesRequest(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.BatchGetTrainingPhrasesRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.BatchGetTrainingPhrasesRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_BatchGetTrainingPhrasesRequest(buffer_arg) {
	return ondewo_nlu_intent_pb.BatchGetTrainingPhrasesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_BatchParametersStatusResponse(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.BatchParametersStatusResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.BatchParametersStatusResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_BatchParametersStatusResponse(buffer_arg) {
	return ondewo_nlu_intent_pb.BatchParametersStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_BatchResponseMessagesStatusResponse(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.BatchResponseMessagesStatusResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_BatchResponseMessagesStatusResponse(buffer_arg) {
	return ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_BatchTrainingPhrasesStatusResponse(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.BatchTrainingPhrasesStatusResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_BatchTrainingPhrasesStatusResponse(buffer_arg) {
	return ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_BatchUpdateIntentsRequest(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.BatchUpdateIntentsRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.BatchUpdateIntentsRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_BatchUpdateIntentsRequest(buffer_arg) {
	return ondewo_nlu_intent_pb.BatchUpdateIntentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_BatchUpdateParametersRequest(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.BatchUpdateParametersRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.BatchUpdateParametersRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_BatchUpdateParametersRequest(buffer_arg) {
	return ondewo_nlu_intent_pb.BatchUpdateParametersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_BatchUpdateResponseMessagesRequest(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.BatchUpdateResponseMessagesRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.BatchUpdateResponseMessagesRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_BatchUpdateResponseMessagesRequest(buffer_arg) {
	return ondewo_nlu_intent_pb.BatchUpdateResponseMessagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_BatchUpdateTrainingPhrasesRequest(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.BatchUpdateTrainingPhrasesRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.BatchUpdateTrainingPhrasesRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_BatchUpdateTrainingPhrasesRequest(buffer_arg) {
	return ondewo_nlu_intent_pb.BatchUpdateTrainingPhrasesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CreateIntentRequest(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.CreateIntentRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.CreateIntentRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CreateIntentRequest(buffer_arg) {
	return ondewo_nlu_intent_pb.CreateIntentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DeleteIntentRequest(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.DeleteIntentRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.DeleteIntentRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteIntentRequest(buffer_arg) {
	return ondewo_nlu_intent_pb.DeleteIntentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetAllIntentTagsRequest(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.GetAllIntentTagsRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.GetAllIntentTagsRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetAllIntentTagsRequest(buffer_arg) {
	return ondewo_nlu_intent_pb.GetAllIntentTagsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetIntentRequest(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.GetIntentRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.GetIntentRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetIntentRequest(buffer_arg) {
	return ondewo_nlu_intent_pb.GetIntentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetIntentTagsRequest(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.GetIntentTagsRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.GetIntentTagsRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetIntentTagsRequest(buffer_arg) {
	return ondewo_nlu_intent_pb.GetIntentTagsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetIntentTagsResponse(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.GetIntentTagsResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.GetIntentTagsResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetIntentTagsResponse(buffer_arg) {
	return ondewo_nlu_intent_pb.GetIntentTagsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_Intent(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.Intent)) {
		throw new Error('Expected argument of type ondewo.nlu.Intent');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_Intent(buffer_arg) {
	return ondewo_nlu_intent_pb.Intent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_IntentTagRequest(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.IntentTagRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.IntentTagRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_IntentTagRequest(buffer_arg) {
	return ondewo_nlu_intent_pb.IntentTagRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListIntentsRequest(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.ListIntentsRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.ListIntentsRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListIntentsRequest(buffer_arg) {
	return ondewo_nlu_intent_pb.ListIntentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListIntentsResponse(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.ListIntentsResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.ListIntentsResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListIntentsResponse(buffer_arg) {
	return ondewo_nlu_intent_pb.ListIntentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListParametersRequest(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.ListParametersRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.ListParametersRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListParametersRequest(buffer_arg) {
	return ondewo_nlu_intent_pb.ListParametersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListParametersResponse(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.ListParametersResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.ListParametersResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListParametersResponse(buffer_arg) {
	return ondewo_nlu_intent_pb.ListParametersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListResponseMessagesRequest(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.ListResponseMessagesRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.ListResponseMessagesRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListResponseMessagesRequest(buffer_arg) {
	return ondewo_nlu_intent_pb.ListResponseMessagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListResponseMessagesResponse(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.ListResponseMessagesResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.ListResponseMessagesResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListResponseMessagesResponse(buffer_arg) {
	return ondewo_nlu_intent_pb.ListResponseMessagesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListTrainingPhrasesRequest(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.ListTrainingPhrasesRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.ListTrainingPhrasesRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListTrainingPhrasesRequest(buffer_arg) {
	return ondewo_nlu_intent_pb.ListTrainingPhrasesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListTrainingPhrasesResponse(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.ListTrainingPhrasesResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.ListTrainingPhrasesResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListTrainingPhrasesResponse(buffer_arg) {
	return ondewo_nlu_intent_pb.ListTrainingPhrasesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListTrainingPhrasesofIntentsWithEnrichmentRequest(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.ListTrainingPhrasesofIntentsWithEnrichmentRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.ListTrainingPhrasesofIntentsWithEnrichmentRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListTrainingPhrasesofIntentsWithEnrichmentRequest(buffer_arg) {
	return ondewo_nlu_intent_pb.ListTrainingPhrasesofIntentsWithEnrichmentRequest.deserializeBinary(
		new Uint8Array(buffer_arg)
	);
}

function serialize_ondewo_nlu_ListTrainingPhrasesofIntentsWithEnrichmentResponse(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.ListTrainingPhrasesofIntentsWithEnrichmentResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.ListTrainingPhrasesofIntentsWithEnrichmentResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListTrainingPhrasesofIntentsWithEnrichmentResponse(buffer_arg) {
	return ondewo_nlu_intent_pb.ListTrainingPhrasesofIntentsWithEnrichmentResponse.deserializeBinary(
		new Uint8Array(buffer_arg)
	);
}

function serialize_ondewo_nlu_Operation(arg) {
	if (!(arg instanceof ondewo_nlu_operations_pb.Operation)) {
		throw new Error('Expected argument of type ondewo.nlu.Operation');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_Operation(buffer_arg) {
	return ondewo_nlu_operations_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_UpdateIntentRequest(arg) {
	if (!(arg instanceof ondewo_nlu_intent_pb.UpdateIntentRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.UpdateIntentRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_UpdateIntentRequest(buffer_arg) {
	return ondewo_nlu_intent_pb.UpdateIntentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

// An intent represents a mapping between input from a user and an action to
// be taken by your application. When you pass user input to the
// [DetectIntent][google.cloud.dialogflow.v2.Sessions.DetectIntent] (or
// [StreamingDetectIntent][google.cloud.dialogflow.v2.Sessions.StreamingDetectIntent]) method, the
// Dialogflow API analyzes the input and searches
// for a matching intent. If no match is found, the Dialogflow API returns a
// fallback intent (`is_fallback` = true).
//
// You can provide additional information for the Dialogflow API to use to
// match user input to an intent by adding the following to your intent.
//
// *   **Contexts** - provide additional context for intent analysis. For
//     example, if an intent is related to an object in your application that
//     plays music, you can provide a context to determine when to match the
//     intent if the user input is “turn it off”.  You can include a context
//     that matches the intent when there is previous user input of
//     "play music", and not when there is previous user input of
//     "turn on the light".
//
// *   **Events** - allow for matching an intent by using an event name
//     instead of user input. Your application can provide an event name and
//     related parameters to the Dialogflow API to match an intent. For
//     example, when your application starts, you can send a welcome event
//     with a user name parameter to the Dialogflow API to match an intent with
//     a personalized welcome message for the user.
//
// *   **Training phrases** - provide examples of user input to train the
//     Dialogflow API agent to better match intents.
//
// For more information about intents, see the
// [Dialogflow documentation](https://dialogflow.com/docs/intents).
var IntentsService = (exports.IntentsService = {
	// Returns the list of all intents in the specified agent.
	listIntents: {
		path: '/ondewo.nlu.Intents/ListIntents',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_intent_pb.ListIntentsRequest,
		responseType: ondewo_nlu_intent_pb.ListIntentsResponse,
		requestSerialize: serialize_ondewo_nlu_ListIntentsRequest,
		requestDeserialize: deserialize_ondewo_nlu_ListIntentsRequest,
		responseSerialize: serialize_ondewo_nlu_ListIntentsResponse,
		responseDeserialize: deserialize_ondewo_nlu_ListIntentsResponse
	},
	// Retrieves the specified intent.
	getIntent: {
		path: '/ondewo.nlu.Intents/GetIntent',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_intent_pb.GetIntentRequest,
		responseType: ondewo_nlu_intent_pb.Intent,
		requestSerialize: serialize_ondewo_nlu_GetIntentRequest,
		requestDeserialize: deserialize_ondewo_nlu_GetIntentRequest,
		responseSerialize: serialize_ondewo_nlu_Intent,
		responseDeserialize: deserialize_ondewo_nlu_Intent
	},
	// Creates an intent in the specified agent.
	createIntent: {
		path: '/ondewo.nlu.Intents/CreateIntent',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_intent_pb.CreateIntentRequest,
		responseType: ondewo_nlu_intent_pb.Intent,
		requestSerialize: serialize_ondewo_nlu_CreateIntentRequest,
		requestDeserialize: deserialize_ondewo_nlu_CreateIntentRequest,
		responseSerialize: serialize_ondewo_nlu_Intent,
		responseDeserialize: deserialize_ondewo_nlu_Intent
	},
	// Updates the specified intent.
	updateIntent: {
		path: '/ondewo.nlu.Intents/UpdateIntent',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_intent_pb.UpdateIntentRequest,
		responseType: ondewo_nlu_intent_pb.Intent,
		requestSerialize: serialize_ondewo_nlu_UpdateIntentRequest,
		requestDeserialize: deserialize_ondewo_nlu_UpdateIntentRequest,
		responseSerialize: serialize_ondewo_nlu_Intent,
		responseDeserialize: deserialize_ondewo_nlu_Intent
	},
	// Deletes the specified intent.
	deleteIntent: {
		path: '/ondewo.nlu.Intents/DeleteIntent',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_intent_pb.DeleteIntentRequest,
		responseType: google_protobuf_empty_pb.Empty,
		requestSerialize: serialize_ondewo_nlu_DeleteIntentRequest,
		requestDeserialize: deserialize_ondewo_nlu_DeleteIntentRequest,
		responseSerialize: serialize_google_protobuf_Empty,
		responseDeserialize: deserialize_google_protobuf_Empty
	},
	// Updates/Creates multiple intents in the specified agent.
	//
	// Operation <response: [BatchUpdateIntentsResponse][google.cloud.dialogflow.v2.BatchUpdateIntentsResponse]>
	batchUpdateIntents: {
		path: '/ondewo.nlu.Intents/BatchUpdateIntents',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_intent_pb.BatchUpdateIntentsRequest,
		responseType: ondewo_nlu_operations_pb.Operation,
		requestSerialize: serialize_ondewo_nlu_BatchUpdateIntentsRequest,
		requestDeserialize: deserialize_ondewo_nlu_BatchUpdateIntentsRequest,
		responseSerialize: serialize_ondewo_nlu_Operation,
		responseDeserialize: deserialize_ondewo_nlu_Operation
	},
	// Deletes intents in the specified agent.
	//
	// Operation <response: [google.protobuf.Empty][google.protobuf.Empty]>
	batchDeleteIntents: {
		path: '/ondewo.nlu.Intents/BatchDeleteIntents',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_intent_pb.BatchDeleteIntentsRequest,
		responseType: ondewo_nlu_operations_pb.Operation,
		requestSerialize: serialize_ondewo_nlu_BatchDeleteIntentsRequest,
		requestDeserialize: deserialize_ondewo_nlu_BatchDeleteIntentsRequest,
		responseSerialize: serialize_ondewo_nlu_Operation,
		responseDeserialize: deserialize_ondewo_nlu_Operation
	},
	// Tags a specific intent with tag(s)
	tagIntent: {
		path: '/ondewo.nlu.Intents/TagIntent',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_intent_pb.IntentTagRequest,
		responseType: google_protobuf_empty_pb.Empty,
		requestSerialize: serialize_ondewo_nlu_IntentTagRequest,
		requestDeserialize: deserialize_ondewo_nlu_IntentTagRequest,
		responseSerialize: serialize_google_protobuf_Empty,
		responseDeserialize: deserialize_google_protobuf_Empty
	},
	// Deletes tag(s) for a specific intent
	deleteIntentTag: {
		path: '/ondewo.nlu.Intents/DeleteIntentTag',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_intent_pb.IntentTagRequest,
		responseType: google_protobuf_empty_pb.Empty,
		requestSerialize: serialize_ondewo_nlu_IntentTagRequest,
		requestDeserialize: deserialize_ondewo_nlu_IntentTagRequest,
		responseSerialize: serialize_google_protobuf_Empty,
		responseDeserialize: deserialize_google_protobuf_Empty
	},
	// Gets all the tags for a specific intent
	getIntentTags: {
		path: '/ondewo.nlu.Intents/GetIntentTags',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_intent_pb.GetIntentTagsRequest,
		responseType: ondewo_nlu_intent_pb.GetIntentTagsResponse,
		requestSerialize: serialize_ondewo_nlu_GetIntentTagsRequest,
		requestDeserialize: deserialize_ondewo_nlu_GetIntentTagsRequest,
		responseSerialize: serialize_ondewo_nlu_GetIntentTagsResponse,
		responseDeserialize: deserialize_ondewo_nlu_GetIntentTagsResponse
	},
	// Gets all the tags for all the intents
	getAllIntentTags: {
		path: '/ondewo.nlu.Intents/GetAllIntentTags',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_intent_pb.GetAllIntentTagsRequest,
		responseType: ondewo_nlu_intent_pb.GetIntentTagsResponse,
		requestSerialize: serialize_ondewo_nlu_GetAllIntentTagsRequest,
		requestDeserialize: deserialize_ondewo_nlu_GetAllIntentTagsRequest,
		responseSerialize: serialize_ondewo_nlu_GetIntentTagsResponse,
		responseDeserialize: deserialize_ondewo_nlu_GetIntentTagsResponse
	},
	// ************************ Training Phrase RPC Endpoints ***************************
	//
	// Creates batch of training phrases
	batchCreateTrainingPhrases: {
		path: '/ondewo.nlu.Intents/BatchCreateTrainingPhrases',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_intent_pb.BatchCreateTrainingPhrasesRequest,
		responseType: ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse,
		requestSerialize: serialize_ondewo_nlu_BatchCreateTrainingPhrasesRequest,
		requestDeserialize: deserialize_ondewo_nlu_BatchCreateTrainingPhrasesRequest,
		responseSerialize: serialize_ondewo_nlu_BatchTrainingPhrasesStatusResponse,
		responseDeserialize: deserialize_ondewo_nlu_BatchTrainingPhrasesStatusResponse
	},
	// Retrieve a training phrases batch of the specified names.
	batchGetTrainingPhrases: {
		path: '/ondewo.nlu.Intents/BatchGetTrainingPhrases',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_intent_pb.BatchGetTrainingPhrasesRequest,
		responseType: ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse,
		requestSerialize: serialize_ondewo_nlu_BatchGetTrainingPhrasesRequest,
		requestDeserialize: deserialize_ondewo_nlu_BatchGetTrainingPhrasesRequest,
		responseSerialize: serialize_ondewo_nlu_BatchTrainingPhrasesStatusResponse,
		responseDeserialize: deserialize_ondewo_nlu_BatchTrainingPhrasesStatusResponse
	},
	// Updates batch of training phrases
	batchUpdateTrainingPhrases: {
		path: '/ondewo.nlu.Intents/BatchUpdateTrainingPhrases',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_intent_pb.BatchUpdateTrainingPhrasesRequest,
		responseType: ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse,
		requestSerialize: serialize_ondewo_nlu_BatchUpdateTrainingPhrasesRequest,
		requestDeserialize: deserialize_ondewo_nlu_BatchUpdateTrainingPhrasesRequest,
		responseSerialize: serialize_ondewo_nlu_BatchTrainingPhrasesStatusResponse,
		responseDeserialize: deserialize_ondewo_nlu_BatchTrainingPhrasesStatusResponse
	},
	// Delete a training phrases batch of the specified names.
	batchDeleteTrainingPhrases: {
		path: '/ondewo.nlu.Intents/BatchDeleteTrainingPhrases',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_intent_pb.BatchDeleteTrainingPhrasesRequest,
		responseType: ondewo_nlu_intent_pb.BatchDeleteTrainingPhrasesResponse,
		requestSerialize: serialize_ondewo_nlu_BatchDeleteTrainingPhrasesRequest,
		requestDeserialize: deserialize_ondewo_nlu_BatchDeleteTrainingPhrasesRequest,
		responseSerialize: serialize_ondewo_nlu_BatchDeleteTrainingPhrasesResponse,
		responseDeserialize: deserialize_ondewo_nlu_BatchDeleteTrainingPhrasesResponse
	},
	// List training phrases (of a specific intent).
	listTrainingPhrases: {
		path: '/ondewo.nlu.Intents/ListTrainingPhrases',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_intent_pb.ListTrainingPhrasesRequest,
		responseType: ondewo_nlu_intent_pb.ListTrainingPhrasesResponse,
		requestSerialize: serialize_ondewo_nlu_ListTrainingPhrasesRequest,
		requestDeserialize: deserialize_ondewo_nlu_ListTrainingPhrasesRequest,
		responseSerialize: serialize_ondewo_nlu_ListTrainingPhrasesResponse,
		responseDeserialize: deserialize_ondewo_nlu_ListTrainingPhrasesResponse
	},
	// ************************ Response RPC Endpoints ***************************
	//
	// Creates batch of intent messages
	batchCreateResponseMessages: {
		path: '/ondewo.nlu.Intents/BatchCreateResponseMessages',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_intent_pb.BatchCreateResponseMessagesRequest,
		responseType: ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse,
		requestSerialize: serialize_ondewo_nlu_BatchCreateResponseMessagesRequest,
		requestDeserialize: deserialize_ondewo_nlu_BatchCreateResponseMessagesRequest,
		responseSerialize: serialize_ondewo_nlu_BatchResponseMessagesStatusResponse,
		responseDeserialize: deserialize_ondewo_nlu_BatchResponseMessagesStatusResponse
	},
	// Retrieve a intent messages batch of the specified names.
	batchGetResponseMessages: {
		path: '/ondewo.nlu.Intents/BatchGetResponseMessages',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_intent_pb.BatchGetResponseMessagesRequest,
		responseType: ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse,
		requestSerialize: serialize_ondewo_nlu_BatchGetResponseMessagesRequest,
		requestDeserialize: deserialize_ondewo_nlu_BatchGetResponseMessagesRequest,
		responseSerialize: serialize_ondewo_nlu_BatchResponseMessagesStatusResponse,
		responseDeserialize: deserialize_ondewo_nlu_BatchResponseMessagesStatusResponse
	},
	// Updates batch of intent messages
	batchUpdateResponseMessages: {
		path: '/ondewo.nlu.Intents/BatchUpdateResponseMessages',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_intent_pb.BatchUpdateResponseMessagesRequest,
		responseType: ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse,
		requestSerialize: serialize_ondewo_nlu_BatchUpdateResponseMessagesRequest,
		requestDeserialize: deserialize_ondewo_nlu_BatchUpdateResponseMessagesRequest,
		responseSerialize: serialize_ondewo_nlu_BatchResponseMessagesStatusResponse,
		responseDeserialize: deserialize_ondewo_nlu_BatchResponseMessagesStatusResponse
	},
	// Delete a intent messages batch of the specified names.
	batchDeleteResponseMessages: {
		path: '/ondewo.nlu.Intents/BatchDeleteResponseMessages',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_intent_pb.BatchDeleteResponseMessagesRequest,
		responseType: ondewo_nlu_intent_pb.BatchDeleteResponseMessagesResponse,
		requestSerialize: serialize_ondewo_nlu_BatchDeleteResponseMessagesRequest,
		requestDeserialize: deserialize_ondewo_nlu_BatchDeleteResponseMessagesRequest,
		responseSerialize: serialize_ondewo_nlu_BatchDeleteResponseMessagesResponse,
		responseDeserialize: deserialize_ondewo_nlu_BatchDeleteResponseMessagesResponse
	},
	// List messages (of a specific intent).
	listResponseMessages: {
		path: '/ondewo.nlu.Intents/ListResponseMessages',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_intent_pb.ListResponseMessagesRequest,
		responseType: ondewo_nlu_intent_pb.ListResponseMessagesResponse,
		requestSerialize: serialize_ondewo_nlu_ListResponseMessagesRequest,
		requestDeserialize: deserialize_ondewo_nlu_ListResponseMessagesRequest,
		responseSerialize: serialize_ondewo_nlu_ListResponseMessagesResponse,
		responseDeserialize: deserialize_ondewo_nlu_ListResponseMessagesResponse
	},
	// ************************ Parameter RPC Endpoints ***************************
	//
	// Creates batch of intent messages
	batchCreateParameters: {
		path: '/ondewo.nlu.Intents/BatchCreateParameters',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_intent_pb.BatchCreateParametersRequest,
		responseType: ondewo_nlu_intent_pb.BatchParametersStatusResponse,
		requestSerialize: serialize_ondewo_nlu_BatchCreateParametersRequest,
		requestDeserialize: deserialize_ondewo_nlu_BatchCreateParametersRequest,
		responseSerialize: serialize_ondewo_nlu_BatchParametersStatusResponse,
		responseDeserialize: deserialize_ondewo_nlu_BatchParametersStatusResponse
	},
	// Retrieve a intent messages batch of the specified names.
	batchGetParameters: {
		path: '/ondewo.nlu.Intents/BatchGetParameters',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_intent_pb.BatchGetParametersRequest,
		responseType: ondewo_nlu_intent_pb.BatchParametersStatusResponse,
		requestSerialize: serialize_ondewo_nlu_BatchGetParametersRequest,
		requestDeserialize: deserialize_ondewo_nlu_BatchGetParametersRequest,
		responseSerialize: serialize_ondewo_nlu_BatchParametersStatusResponse,
		responseDeserialize: deserialize_ondewo_nlu_BatchParametersStatusResponse
	},
	// Updates batch of intent messages
	batchUpdateParameters: {
		path: '/ondewo.nlu.Intents/BatchUpdateParameters',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_intent_pb.BatchUpdateParametersRequest,
		responseType: ondewo_nlu_intent_pb.BatchParametersStatusResponse,
		requestSerialize: serialize_ondewo_nlu_BatchUpdateParametersRequest,
		requestDeserialize: deserialize_ondewo_nlu_BatchUpdateParametersRequest,
		responseSerialize: serialize_ondewo_nlu_BatchParametersStatusResponse,
		responseDeserialize: deserialize_ondewo_nlu_BatchParametersStatusResponse
	},
	// Delete a intent messages batch of the specified names.
	batchDeleteParameters: {
		path: '/ondewo.nlu.Intents/BatchDeleteParameters',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_intent_pb.BatchDeleteParametersRequest,
		responseType: ondewo_nlu_intent_pb.BatchDeleteParametersResponse,
		requestSerialize: serialize_ondewo_nlu_BatchDeleteParametersRequest,
		requestDeserialize: deserialize_ondewo_nlu_BatchDeleteParametersRequest,
		responseSerialize: serialize_ondewo_nlu_BatchDeleteParametersResponse,
		responseDeserialize: deserialize_ondewo_nlu_BatchDeleteParametersResponse
	},
	// List messages (of a specific intent).
	listParameters: {
		path: '/ondewo.nlu.Intents/ListParameters',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_intent_pb.ListParametersRequest,
		responseType: ondewo_nlu_intent_pb.ListParametersResponse,
		requestSerialize: serialize_ondewo_nlu_ListParametersRequest,
		requestDeserialize: deserialize_ondewo_nlu_ListParametersRequest,
		responseSerialize: serialize_ondewo_nlu_ListParametersResponse,
		responseDeserialize: deserialize_ondewo_nlu_ListParametersResponse
	},
	// List Training phrases (of a specific intent).
	listTrainingPhrasesofIntentsWithEnrichment: {
		path: '/ondewo.nlu.Intents/ListTrainingPhrasesofIntentsWithEnrichment',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_intent_pb.ListTrainingPhrasesofIntentsWithEnrichmentRequest,
		responseType: ondewo_nlu_intent_pb.ListTrainingPhrasesofIntentsWithEnrichmentResponse,
		requestSerialize: serialize_ondewo_nlu_ListTrainingPhrasesofIntentsWithEnrichmentRequest,
		requestDeserialize: deserialize_ondewo_nlu_ListTrainingPhrasesofIntentsWithEnrichmentRequest,
		responseSerialize: serialize_ondewo_nlu_ListTrainingPhrasesofIntentsWithEnrichmentResponse,
		responseDeserialize: deserialize_ondewo_nlu_ListTrainingPhrasesofIntentsWithEnrichmentResponse
	}
});

exports.IntentsClient = grpc.makeGenericClientConstructor(IntentsService);
