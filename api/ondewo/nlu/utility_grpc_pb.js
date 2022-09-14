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
var ondewo_nlu_utility_pb = require('../../ondewo/nlu/utility_pb.js');
var ondewo_nlu_intent_pb = require('../../ondewo/nlu/intent_pb.js');
var ondewo_nlu_entity_type_pb = require('../../ondewo/nlu/entity_type_pb.js');

function serialize_ondewo_nlu_AddTrainingPhrasesFromCSVRequest(arg) {
	if (!(arg instanceof ondewo_nlu_utility_pb.AddTrainingPhrasesFromCSVRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.AddTrainingPhrasesFromCSVRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_AddTrainingPhrasesFromCSVRequest(buffer_arg) {
	return ondewo_nlu_utility_pb.AddTrainingPhrasesFromCSVRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_AddTrainingPhrasesRequest(arg) {
	if (!(arg instanceof ondewo_nlu_utility_pb.AddTrainingPhrasesRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.AddTrainingPhrasesRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_AddTrainingPhrasesRequest(buffer_arg) {
	return ondewo_nlu_utility_pb.AddTrainingPhrasesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_AddTrainingPhrasesResponse(arg) {
	if (!(arg instanceof ondewo_nlu_utility_pb.AddTrainingPhrasesResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.AddTrainingPhrasesResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_AddTrainingPhrasesResponse(buffer_arg) {
	return ondewo_nlu_utility_pb.AddTrainingPhrasesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CleanAllEntityTypesRequest(arg) {
	if (!(arg instanceof ondewo_nlu_utility_pb.CleanAllEntityTypesRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.CleanAllEntityTypesRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CleanAllEntityTypesRequest(buffer_arg) {
	return ondewo_nlu_utility_pb.CleanAllEntityTypesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CleanAllEntityTypesResponse(arg) {
	if (!(arg instanceof ondewo_nlu_utility_pb.CleanAllEntityTypesResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.CleanAllEntityTypesResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CleanAllEntityTypesResponse(buffer_arg) {
	return ondewo_nlu_utility_pb.CleanAllEntityTypesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CleanAllIntentsRequest(arg) {
	if (!(arg instanceof ondewo_nlu_utility_pb.CleanAllIntentsRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.CleanAllIntentsRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CleanAllIntentsRequest(buffer_arg) {
	return ondewo_nlu_utility_pb.CleanAllIntentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CleanAllIntentsResponse(arg) {
	if (!(arg instanceof ondewo_nlu_utility_pb.CleanAllIntentsResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.CleanAllIntentsResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CleanAllIntentsResponse(buffer_arg) {
	return ondewo_nlu_utility_pb.CleanAllIntentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CleanEntityTypeRequest(arg) {
	if (!(arg instanceof ondewo_nlu_utility_pb.CleanEntityTypeRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.CleanEntityTypeRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CleanEntityTypeRequest(buffer_arg) {
	return ondewo_nlu_utility_pb.CleanEntityTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CleanEntityTypeResponse(arg) {
	if (!(arg instanceof ondewo_nlu_utility_pb.CleanEntityTypeResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.CleanEntityTypeResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CleanEntityTypeResponse(buffer_arg) {
	return ondewo_nlu_utility_pb.CleanEntityTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CleanIntentRequest(arg) {
	if (!(arg instanceof ondewo_nlu_utility_pb.CleanIntentRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.CleanIntentRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CleanIntentRequest(buffer_arg) {
	return ondewo_nlu_utility_pb.CleanIntentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CleanIntentResponse(arg) {
	if (!(arg instanceof ondewo_nlu_utility_pb.CleanIntentResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.CleanIntentResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CleanIntentResponse(buffer_arg) {
	return ondewo_nlu_utility_pb.CleanIntentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ValidateEmbeddedRegexRequest(arg) {
	if (!(arg instanceof ondewo_nlu_utility_pb.ValidateEmbeddedRegexRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.ValidateEmbeddedRegexRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ValidateEmbeddedRegexRequest(buffer_arg) {
	return ondewo_nlu_utility_pb.ValidateEmbeddedRegexRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ValidateEmbeddedRegexResponse(arg) {
	if (!(arg instanceof ondewo_nlu_utility_pb.ValidateEmbeddedRegexResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.ValidateEmbeddedRegexResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ValidateEmbeddedRegexResponse(buffer_arg) {
	return ondewo_nlu_utility_pb.ValidateEmbeddedRegexResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ValidateRegexRequest(arg) {
	if (!(arg instanceof ondewo_nlu_utility_pb.ValidateRegexRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.ValidateRegexRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ValidateRegexRequest(buffer_arg) {
	return ondewo_nlu_utility_pb.ValidateRegexRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ValidateRegexResponse(arg) {
	if (!(arg instanceof ondewo_nlu_utility_pb.ValidateRegexResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.ValidateRegexResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ValidateRegexResponse(buffer_arg) {
	return ondewo_nlu_utility_pb.ValidateRegexResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

// This is collection of utility endpoints, intended to language-independent operations,
// such as code checks, regex checks, etc.
var UtilitiesService = (exports.UtilitiesService = {
	// Validates the validity of python regexes
	validateRegex: {
		path: '/ondewo.nlu.Utilities/ValidateRegex',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_utility_pb.ValidateRegexRequest,
		responseType: ondewo_nlu_utility_pb.ValidateRegexResponse,
		requestSerialize: serialize_ondewo_nlu_ValidateRegexRequest,
		requestDeserialize: deserialize_ondewo_nlu_ValidateRegexRequest,
		responseSerialize: serialize_ondewo_nlu_ValidateRegexResponse,
		responseDeserialize: deserialize_ondewo_nlu_ValidateRegexResponse
	},
	// Validate that entity types with group references have synonyms with
	// capturing groups.
	validateEmbeddedRegex: {
		path: '/ondewo.nlu.Utilities/ValidateEmbeddedRegex',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_utility_pb.ValidateEmbeddedRegexRequest,
		responseType: ondewo_nlu_utility_pb.ValidateEmbeddedRegexResponse,
		requestSerialize: serialize_ondewo_nlu_ValidateEmbeddedRegexRequest,
		requestDeserialize: deserialize_ondewo_nlu_ValidateEmbeddedRegexRequest,
		responseSerialize: serialize_ondewo_nlu_ValidateEmbeddedRegexResponse,
		responseDeserialize: deserialize_ondewo_nlu_ValidateEmbeddedRegexResponse
	},
	// Cleans all intent training phrases and entity annotations of parent
	cleanAllIntents: {
		path: '/ondewo.nlu.Utilities/CleanAllIntents',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_utility_pb.CleanAllIntentsRequest,
		responseType: ondewo_nlu_utility_pb.CleanAllIntentsResponse,
		requestSerialize: serialize_ondewo_nlu_CleanAllIntentsRequest,
		requestDeserialize: deserialize_ondewo_nlu_CleanAllIntentsRequest,
		responseSerialize: serialize_ondewo_nlu_CleanAllIntentsResponse,
		responseDeserialize: deserialize_ondewo_nlu_CleanAllIntentsResponse
	},
	// Cleans single intent training phrases and entity annotations
	cleanIntent: {
		path: '/ondewo.nlu.Utilities/CleanIntent',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_utility_pb.CleanIntentRequest,
		responseType: ondewo_nlu_utility_pb.CleanIntentResponse,
		requestSerialize: serialize_ondewo_nlu_CleanIntentRequest,
		requestDeserialize: deserialize_ondewo_nlu_CleanIntentRequest,
		responseSerialize: serialize_ondewo_nlu_CleanIntentResponse,
		responseDeserialize: deserialize_ondewo_nlu_CleanIntentResponse
	},
	// Cleans all entity types of parent
	cleanAllEntityTypes: {
		path: '/ondewo.nlu.Utilities/CleanAllEntityTypes',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_utility_pb.CleanAllEntityTypesRequest,
		responseType: ondewo_nlu_utility_pb.CleanAllEntityTypesResponse,
		requestSerialize: serialize_ondewo_nlu_CleanAllEntityTypesRequest,
		requestDeserialize: deserialize_ondewo_nlu_CleanAllEntityTypesRequest,
		responseSerialize: serialize_ondewo_nlu_CleanAllEntityTypesResponse,
		responseDeserialize: deserialize_ondewo_nlu_CleanAllEntityTypesResponse
	},
	// Cleans entity type
	cleanEntityType: {
		path: '/ondewo.nlu.Utilities/CleanEntityType',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_utility_pb.CleanEntityTypeRequest,
		responseType: ondewo_nlu_utility_pb.CleanEntityTypeResponse,
		requestSerialize: serialize_ondewo_nlu_CleanEntityTypeRequest,
		requestDeserialize: deserialize_ondewo_nlu_CleanEntityTypeRequest,
		responseSerialize: serialize_ondewo_nlu_CleanEntityTypeResponse,
		responseDeserialize: deserialize_ondewo_nlu_CleanEntityTypeResponse
	},
	// Creates new training phrases corresponding to intent specified by its intent display name
	addTrainingPhrases: {
		path: '/ondewo.nlu.Utilities/AddTrainingPhrases',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_utility_pb.AddTrainingPhrasesRequest,
		responseType: ondewo_nlu_utility_pb.AddTrainingPhrasesResponse,
		requestSerialize: serialize_ondewo_nlu_AddTrainingPhrasesRequest,
		requestDeserialize: deserialize_ondewo_nlu_AddTrainingPhrasesRequest,
		responseSerialize: serialize_ondewo_nlu_AddTrainingPhrasesResponse,
		responseDeserialize: deserialize_ondewo_nlu_AddTrainingPhrasesResponse
	},
	// Creates new training phrases corresponding to intent specified by its intent display name from csv file
	addTrainingPhrasesFromCSV: {
		path: '/ondewo.nlu.Utilities/AddTrainingPhrasesFromCSV',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_utility_pb.AddTrainingPhrasesFromCSVRequest,
		responseType: ondewo_nlu_utility_pb.AddTrainingPhrasesResponse,
		requestSerialize: serialize_ondewo_nlu_AddTrainingPhrasesFromCSVRequest,
		requestDeserialize: deserialize_ondewo_nlu_AddTrainingPhrasesFromCSVRequest,
		responseSerialize: serialize_ondewo_nlu_AddTrainingPhrasesResponse,
		responseDeserialize: deserialize_ondewo_nlu_AddTrainingPhrasesResponse
	}
});

exports.UtilitiesClient = grpc.makeGenericClientConstructor(UtilitiesService);
// Holds a collection of utility functions
