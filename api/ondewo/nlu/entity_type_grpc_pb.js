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
var ondewo_nlu_entity_type_pb = require('../../ondewo/nlu/entity_type_pb.js');
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var ondewo_nlu_common_pb = require('../../ondewo/nlu/common_pb.js');
var ondewo_nlu_operations_pb = require('../../ondewo/nlu/operations_pb.js');

function serialize_google_protobuf_Empty(arg) {
	if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
		throw new Error('Expected argument of type google.protobuf.Empty');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
	return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_BatchCreateEntitiesRequest(arg) {
	if (!(arg instanceof ondewo_nlu_entity_type_pb.BatchCreateEntitiesRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.BatchCreateEntitiesRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_BatchCreateEntitiesRequest(buffer_arg) {
	return ondewo_nlu_entity_type_pb.BatchCreateEntitiesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_BatchDeleteEntitiesRequest(arg) {
	if (!(arg instanceof ondewo_nlu_entity_type_pb.BatchDeleteEntitiesRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.BatchDeleteEntitiesRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_BatchDeleteEntitiesRequest(buffer_arg) {
	return ondewo_nlu_entity_type_pb.BatchDeleteEntitiesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_BatchDeleteEntitiesResponse(arg) {
	if (!(arg instanceof ondewo_nlu_entity_type_pb.BatchDeleteEntitiesResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.BatchDeleteEntitiesResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_BatchDeleteEntitiesResponse(buffer_arg) {
	return ondewo_nlu_entity_type_pb.BatchDeleteEntitiesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_BatchDeleteEntityTypesRequest(arg) {
	if (!(arg instanceof ondewo_nlu_entity_type_pb.BatchDeleteEntityTypesRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.BatchDeleteEntityTypesRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_BatchDeleteEntityTypesRequest(buffer_arg) {
	return ondewo_nlu_entity_type_pb.BatchDeleteEntityTypesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_BatchEntitiesResponse(arg) {
	if (!(arg instanceof ondewo_nlu_entity_type_pb.BatchEntitiesResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.BatchEntitiesResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_BatchEntitiesResponse(buffer_arg) {
	return ondewo_nlu_entity_type_pb.BatchEntitiesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_BatchGetEntitiesRequest(arg) {
	if (!(arg instanceof ondewo_nlu_entity_type_pb.BatchGetEntitiesRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.BatchGetEntitiesRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_BatchGetEntitiesRequest(buffer_arg) {
	return ondewo_nlu_entity_type_pb.BatchGetEntitiesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_BatchUpdateEntitiesRequest(arg) {
	if (!(arg instanceof ondewo_nlu_entity_type_pb.BatchUpdateEntitiesRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.BatchUpdateEntitiesRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_BatchUpdateEntitiesRequest(buffer_arg) {
	return ondewo_nlu_entity_type_pb.BatchUpdateEntitiesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_BatchUpdateEntityTypesRequest(arg) {
	if (!(arg instanceof ondewo_nlu_entity_type_pb.BatchUpdateEntityTypesRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.BatchUpdateEntityTypesRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_BatchUpdateEntityTypesRequest(buffer_arg) {
	return ondewo_nlu_entity_type_pb.BatchUpdateEntityTypesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CreateEntityTypeRequest(arg) {
	if (!(arg instanceof ondewo_nlu_entity_type_pb.CreateEntityTypeRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.CreateEntityTypeRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CreateEntityTypeRequest(buffer_arg) {
	return ondewo_nlu_entity_type_pb.CreateEntityTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DeleteEntityTypeRequest(arg) {
	if (!(arg instanceof ondewo_nlu_entity_type_pb.DeleteEntityTypeRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.DeleteEntityTypeRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteEntityTypeRequest(buffer_arg) {
	return ondewo_nlu_entity_type_pb.DeleteEntityTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_EntityType(arg) {
	if (!(arg instanceof ondewo_nlu_entity_type_pb.EntityType)) {
		throw new Error('Expected argument of type ondewo.nlu.EntityType');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_EntityType(buffer_arg) {
	return ondewo_nlu_entity_type_pb.EntityType.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetEntityTypeRequest(arg) {
	if (!(arg instanceof ondewo_nlu_entity_type_pb.GetEntityTypeRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.GetEntityTypeRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetEntityTypeRequest(buffer_arg) {
	return ondewo_nlu_entity_type_pb.GetEntityTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListEntitiesRequest(arg) {
	if (!(arg instanceof ondewo_nlu_entity_type_pb.ListEntitiesRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.ListEntitiesRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListEntitiesRequest(buffer_arg) {
	return ondewo_nlu_entity_type_pb.ListEntitiesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListEntitiesResponse(arg) {
	if (!(arg instanceof ondewo_nlu_entity_type_pb.ListEntitiesResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.ListEntitiesResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListEntitiesResponse(buffer_arg) {
	return ondewo_nlu_entity_type_pb.ListEntitiesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListEntityTypesRequest(arg) {
	if (!(arg instanceof ondewo_nlu_entity_type_pb.ListEntityTypesRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.ListEntityTypesRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListEntityTypesRequest(buffer_arg) {
	return ondewo_nlu_entity_type_pb.ListEntityTypesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListEntityTypesResponse(arg) {
	if (!(arg instanceof ondewo_nlu_entity_type_pb.ListEntityTypesResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.ListEntityTypesResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListEntityTypesResponse(buffer_arg) {
	return ondewo_nlu_entity_type_pb.ListEntityTypesResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_ondewo_nlu_UpdateEntityTypeRequest(arg) {
	if (!(arg instanceof ondewo_nlu_entity_type_pb.UpdateEntityTypeRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.UpdateEntityTypeRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_UpdateEntityTypeRequest(buffer_arg) {
	return ondewo_nlu_entity_type_pb.UpdateEntityTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

// Entities are extracted from user input and represent parameters that are
// meaningful to your application. For example, a date range, a proper name
// such as a geographic location or landmark, and so on. Entities represent
// actionable data for your application.
//
// When you define an entity, you can also include synonyms that all map to
// that entity. For example, "soft drink", "soda", "pop", and so on.
//
// There are three types of entities:
//
// *   **System** - entities that are defined by the Dialogflow API for common
//     data types such as date, time, currency, and so on. A system entity is
//     represented by the `EntityType` type.
//
// *   **Developer** - entities that are defined by you that represent
//     actionable data that is meaningful to your application. For example,
//     you could define a `pizza.sauce` entity for red or white pizza sauce,
//     a `pizza.cheese` entity for the different types of cheese on a pizza,
//     a `pizza.topping` entity for different toppings, and so on. A developer
//     entity is represented by the `EntityType` type.
//
// *   **User** - entities that are built for an individual user such as
//     favorites, preferences, playlists, and so on. A user entity is
//     represented by the [SessionEntityType][google.cloud.dialogflow.v2.SessionEntityType] type.
//
// For more information about entity types, see the
// [Dialogflow documentation](https://dialogflow.com/docs/entities).
var EntityTypesService = (exports.EntityTypesService = {
	// Returns the list of all entity types in the specified agent.
	listEntityTypes: {
		path: '/ondewo.nlu.EntityTypes/ListEntityTypes',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_entity_type_pb.ListEntityTypesRequest,
		responseType: ondewo_nlu_entity_type_pb.ListEntityTypesResponse,
		requestSerialize: serialize_ondewo_nlu_ListEntityTypesRequest,
		requestDeserialize: deserialize_ondewo_nlu_ListEntityTypesRequest,
		responseSerialize: serialize_ondewo_nlu_ListEntityTypesResponse,
		responseDeserialize: deserialize_ondewo_nlu_ListEntityTypesResponse
	},
	// Retrieves the specified entity type.
	getEntityType: {
		path: '/ondewo.nlu.EntityTypes/GetEntityType',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_entity_type_pb.GetEntityTypeRequest,
		responseType: ondewo_nlu_entity_type_pb.EntityType,
		requestSerialize: serialize_ondewo_nlu_GetEntityTypeRequest,
		requestDeserialize: deserialize_ondewo_nlu_GetEntityTypeRequest,
		responseSerialize: serialize_ondewo_nlu_EntityType,
		responseDeserialize: deserialize_ondewo_nlu_EntityType
	},
	// Creates an entity type in the specified agent.
	createEntityType: {
		path: '/ondewo.nlu.EntityTypes/CreateEntityType',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_entity_type_pb.CreateEntityTypeRequest,
		responseType: ondewo_nlu_entity_type_pb.EntityType,
		requestSerialize: serialize_ondewo_nlu_CreateEntityTypeRequest,
		requestDeserialize: deserialize_ondewo_nlu_CreateEntityTypeRequest,
		responseSerialize: serialize_ondewo_nlu_EntityType,
		responseDeserialize: deserialize_ondewo_nlu_EntityType
	},
	// Updates the specified entity type.
	updateEntityType: {
		path: '/ondewo.nlu.EntityTypes/UpdateEntityType',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_entity_type_pb.UpdateEntityTypeRequest,
		responseType: ondewo_nlu_entity_type_pb.EntityType,
		requestSerialize: serialize_ondewo_nlu_UpdateEntityTypeRequest,
		requestDeserialize: deserialize_ondewo_nlu_UpdateEntityTypeRequest,
		responseSerialize: serialize_ondewo_nlu_EntityType,
		responseDeserialize: deserialize_ondewo_nlu_EntityType
	},
	// Deletes the specified entity type.
	deleteEntityType: {
		path: '/ondewo.nlu.EntityTypes/DeleteEntityType',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_entity_type_pb.DeleteEntityTypeRequest,
		responseType: google_protobuf_empty_pb.Empty,
		requestSerialize: serialize_ondewo_nlu_DeleteEntityTypeRequest,
		requestDeserialize: deserialize_ondewo_nlu_DeleteEntityTypeRequest,
		responseSerialize: serialize_google_protobuf_Empty,
		responseDeserialize: deserialize_google_protobuf_Empty
	},
	// Updates/Creates multiple entity types in the specified agent.
	//
	// Operation <response: [BatchUpdateEntityTypesResponse][google.cloud.dialogflow.v2.BatchUpdateEntityTypesResponse],
	//            metadata: [google.protobuf.Struct][google.protobuf.Struct]>
	batchUpdateEntityTypes: {
		path: '/ondewo.nlu.EntityTypes/BatchUpdateEntityTypes',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_entity_type_pb.BatchUpdateEntityTypesRequest,
		responseType: ondewo_nlu_operations_pb.Operation,
		requestSerialize: serialize_ondewo_nlu_BatchUpdateEntityTypesRequest,
		requestDeserialize: deserialize_ondewo_nlu_BatchUpdateEntityTypesRequest,
		responseSerialize: serialize_ondewo_nlu_Operation,
		responseDeserialize: deserialize_ondewo_nlu_Operation
	},
	// Deletes entity types in the specified agent.
	//
	// Operation <response: [google.protobuf.Empty][google.protobuf.Empty],
	//            metadata: [google.protobuf.Struct][google.protobuf.Struct]>
	batchDeleteEntityTypes: {
		path: '/ondewo.nlu.EntityTypes/BatchDeleteEntityTypes',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_entity_type_pb.BatchDeleteEntityTypesRequest,
		responseType: ondewo_nlu_operations_pb.Operation,
		requestSerialize: serialize_ondewo_nlu_BatchDeleteEntityTypesRequest,
		requestDeserialize: deserialize_ondewo_nlu_BatchDeleteEntityTypesRequest,
		responseSerialize: serialize_ondewo_nlu_Operation,
		responseDeserialize: deserialize_ondewo_nlu_Operation
	},
	// Creates an entity value in an entity type.
	batchCreateEntities: {
		path: '/ondewo.nlu.EntityTypes/BatchCreateEntities',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_entity_type_pb.BatchCreateEntitiesRequest,
		responseType: ondewo_nlu_entity_type_pb.BatchEntitiesResponse,
		requestSerialize: serialize_ondewo_nlu_BatchCreateEntitiesRequest,
		requestDeserialize: deserialize_ondewo_nlu_BatchCreateEntitiesRequest,
		responseSerialize: serialize_ondewo_nlu_BatchEntitiesResponse,
		responseDeserialize: deserialize_ondewo_nlu_BatchEntitiesResponse
	},
	// Updates a specific entity value.
	batchUpdateEntities: {
		path: '/ondewo.nlu.EntityTypes/BatchUpdateEntities',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_entity_type_pb.BatchUpdateEntitiesRequest,
		responseType: ondewo_nlu_entity_type_pb.BatchEntitiesResponse,
		requestSerialize: serialize_ondewo_nlu_BatchUpdateEntitiesRequest,
		requestDeserialize: deserialize_ondewo_nlu_BatchUpdateEntitiesRequest,
		responseSerialize: serialize_ondewo_nlu_BatchEntitiesResponse,
		responseDeserialize: deserialize_ondewo_nlu_BatchEntitiesResponse
	},
	// Gets a specific entity value.
	batchGetEntities: {
		path: '/ondewo.nlu.EntityTypes/BatchGetEntities',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_entity_type_pb.BatchGetEntitiesRequest,
		responseType: ondewo_nlu_entity_type_pb.BatchEntitiesResponse,
		requestSerialize: serialize_ondewo_nlu_BatchGetEntitiesRequest,
		requestDeserialize: deserialize_ondewo_nlu_BatchGetEntitiesRequest,
		responseSerialize: serialize_ondewo_nlu_BatchEntitiesResponse,
		responseDeserialize: deserialize_ondewo_nlu_BatchEntitiesResponse
	},
	// Deletes the specified entity value.
	batchDeleteEntities: {
		path: '/ondewo.nlu.EntityTypes/BatchDeleteEntities',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_entity_type_pb.BatchDeleteEntitiesRequest,
		responseType: ondewo_nlu_entity_type_pb.BatchDeleteEntitiesResponse,
		requestSerialize: serialize_ondewo_nlu_BatchDeleteEntitiesRequest,
		requestDeserialize: deserialize_ondewo_nlu_BatchDeleteEntitiesRequest,
		responseSerialize: serialize_ondewo_nlu_BatchDeleteEntitiesResponse,
		responseDeserialize: deserialize_ondewo_nlu_BatchDeleteEntitiesResponse
	},
	// List entities of an entity type
	listEntities: {
		path: '/ondewo.nlu.EntityTypes/ListEntities',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_entity_type_pb.ListEntitiesRequest,
		responseType: ondewo_nlu_entity_type_pb.ListEntitiesResponse,
		requestSerialize: serialize_ondewo_nlu_ListEntitiesRequest,
		requestDeserialize: deserialize_ondewo_nlu_ListEntitiesRequest,
		responseSerialize: serialize_ondewo_nlu_ListEntitiesResponse,
		responseDeserialize: deserialize_ondewo_nlu_ListEntitiesResponse
	}
});

exports.EntityTypesClient = grpc.makeGenericClientConstructor(EntityTypesService);
