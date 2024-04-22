// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2020-2023 ONDEWO GmbH
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
var ondewo_nlu_project_statistics_pb = require('../../ondewo/nlu/project_statistics_pb.js');
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var ondewo_nlu_intent_pb = require('../../ondewo/nlu/intent_pb.js');
var ondewo_nlu_common_pb = require('../../ondewo/nlu/common_pb.js');
var ondewo_nlu_entity_type_pb = require('../../ondewo/nlu/entity_type_pb.js');

function serialize_ondewo_nlu_GetEntityTypeCountRequest(arg) {
  if (!(arg instanceof ondewo_nlu_project_statistics_pb.GetEntityTypeCountRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetEntityTypeCountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetEntityTypeCountRequest(buffer_arg) {
  return ondewo_nlu_project_statistics_pb.GetEntityTypeCountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetIntentCountRequest(arg) {
  if (!(arg instanceof ondewo_nlu_project_statistics_pb.GetIntentCountRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetIntentCountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetIntentCountRequest(buffer_arg) {
  return ondewo_nlu_project_statistics_pb.GetIntentCountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetProjectElementStatRequest(arg) {
  if (!(arg instanceof ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetProjectElementStatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetProjectElementStatRequest(buffer_arg) {
  return ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetProjectStatRequest(arg) {
  if (!(arg instanceof ondewo_nlu_project_statistics_pb.GetProjectStatRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetProjectStatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetProjectStatRequest(buffer_arg) {
  return ondewo_nlu_project_statistics_pb.GetProjectStatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_StatResponse(arg) {
  if (!(arg instanceof ondewo_nlu_common_pb.StatResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.StatResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_StatResponse(buffer_arg) {
  return ondewo_nlu_common_pb.StatResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Project Root Statistics
var ProjectStatisticsService = exports.ProjectStatisticsService = {
  // Returns the intent count within a project
getIntentCount: {
    path: '/ondewo.nlu.ProjectStatistics/GetIntentCount',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_project_statistics_pb.GetIntentCountRequest,
    responseType: ondewo_nlu_common_pb.StatResponse,
    requestSerialize: serialize_ondewo_nlu_GetIntentCountRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetIntentCountRequest,
    responseSerialize: serialize_ondewo_nlu_StatResponse,
    responseDeserialize: deserialize_ondewo_nlu_StatResponse,
  },
  // Returns the entity types count within a project
getEntityTypeCount: {
    path: '/ondewo.nlu.ProjectStatistics/GetEntityTypeCount',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_project_statistics_pb.GetEntityTypeCountRequest,
    responseType: ondewo_nlu_common_pb.StatResponse,
    requestSerialize: serialize_ondewo_nlu_GetEntityTypeCountRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetEntityTypeCountRequest,
    responseSerialize: serialize_ondewo_nlu_StatResponse,
    responseDeserialize: deserialize_ondewo_nlu_StatResponse,
  },
  // Returns the users count within a project
getUserCount: {
    path: '/ondewo.nlu.ProjectStatistics/GetUserCount',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_project_statistics_pb.GetProjectStatRequest,
    responseType: ondewo_nlu_common_pb.StatResponse,
    requestSerialize: serialize_ondewo_nlu_GetProjectStatRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetProjectStatRequest,
    responseSerialize: serialize_ondewo_nlu_StatResponse,
    responseDeserialize: deserialize_ondewo_nlu_StatResponse,
  },
  // Returns the sessions count within a project
getSessionCount: {
    path: '/ondewo.nlu.ProjectStatistics/GetSessionCount',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_project_statistics_pb.GetProjectStatRequest,
    responseType: ondewo_nlu_common_pb.StatResponse,
    requestSerialize: serialize_ondewo_nlu_GetProjectStatRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetProjectStatRequest,
    responseSerialize: serialize_ondewo_nlu_StatResponse,
    responseDeserialize: deserialize_ondewo_nlu_StatResponse,
  },
  // Returns the training phrases count within a project
getTrainingPhraseCount: {
    path: '/ondewo.nlu.ProjectStatistics/GetTrainingPhraseCount',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
    responseType: ondewo_nlu_common_pb.StatResponse,
    requestSerialize: serialize_ondewo_nlu_GetProjectElementStatRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetProjectElementStatRequest,
    responseSerialize: serialize_ondewo_nlu_StatResponse,
    responseDeserialize: deserialize_ondewo_nlu_StatResponse,
  },
  // Returns the responses count within a project
getResponseCount: {
    path: '/ondewo.nlu.ProjectStatistics/GetResponseCount',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
    responseType: ondewo_nlu_common_pb.StatResponse,
    requestSerialize: serialize_ondewo_nlu_GetProjectElementStatRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetProjectElementStatRequest,
    responseSerialize: serialize_ondewo_nlu_StatResponse,
    responseDeserialize: deserialize_ondewo_nlu_StatResponse,
  },
  // Returns the entity value count within a project
getEntityValueCount: {
    path: '/ondewo.nlu.ProjectStatistics/GetEntityValueCount',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
    responseType: ondewo_nlu_common_pb.StatResponse,
    requestSerialize: serialize_ondewo_nlu_GetProjectElementStatRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetProjectElementStatRequest,
    responseSerialize: serialize_ondewo_nlu_StatResponse,
    responseDeserialize: deserialize_ondewo_nlu_StatResponse,
  },
  // Returns the entity synonyms count within a project
getEntitySynonymCount: {
    path: '/ondewo.nlu.ProjectStatistics/GetEntitySynonymCount',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
    responseType: ondewo_nlu_common_pb.StatResponse,
    requestSerialize: serialize_ondewo_nlu_GetProjectElementStatRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetProjectElementStatRequest,
    responseSerialize: serialize_ondewo_nlu_StatResponse,
    responseDeserialize: deserialize_ondewo_nlu_StatResponse,
  },
};

exports.ProjectStatisticsClient = grpc.makeGenericClientConstructor(ProjectStatisticsService);
