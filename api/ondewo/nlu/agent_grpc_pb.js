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
// Modifications Copyright 2020-2026 ONDEWO GmbH
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
// File-level comment for <code>ondewo/nlu/agent.proto</code>.
//
// This file contains a single service <a href="index.html#ondewo.nlu.Agents">Agents</a>.
//
// The most important messages is <a href="index.html#ondewo.nlu.Agent">Agent</a> and its most complicated field is <code>configs</code>.
'use strict';
var grpc = require('@grpc/grpc-js');
var ondewo_nlu_agent_pb = require('../../ondewo/nlu/agent_pb.js');
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var ondewo_nlu_common_pb = require('../../ondewo/nlu/common_pb.js');
var ondewo_nlu_intent_pb = require('../../ondewo/nlu/intent_pb.js');
var ondewo_nlu_user_pb = require('../../ondewo/nlu/user_pb.js');
var ondewo_nlu_project_role_pb = require('../../ondewo/nlu/project_role_pb.js');
var ondewo_nlu_operations_pb = require('../../ondewo/nlu/operations_pb.js');
var ondewo_nlu_session_pb = require('../../ondewo/nlu/session_pb.js');
var ondewo_nlu_ccai_project_pb = require('../../ondewo/nlu/ccai_project_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_AddUserToProjectRequest(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.AddUserToProjectRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.AddUserToProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_AddUserToProjectRequest(buffer_arg) {
  return ondewo_nlu_agent_pb.AddUserToProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_Agent(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.Agent)) {
    throw new Error('Expected argument of type ondewo.nlu.Agent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_Agent(buffer_arg) {
  return ondewo_nlu_agent_pb.Agent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_BuildCacheRequest(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.BuildCacheRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.BuildCacheRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_BuildCacheRequest(buffer_arg) {
  return ondewo_nlu_agent_pb.BuildCacheRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CreateAgentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.CreateAgentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.CreateAgentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CreateAgentRequest(buffer_arg) {
  return ondewo_nlu_agent_pb.CreateAgentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CreateProjectTechnicalUserRequest(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.CreateProjectTechnicalUserRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.CreateProjectTechnicalUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CreateProjectTechnicalUserRequest(buffer_arg) {
  return ondewo_nlu_agent_pb.CreateProjectTechnicalUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CreateProjectTechnicalUserResponse(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.CreateProjectTechnicalUserResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.CreateProjectTechnicalUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CreateProjectTechnicalUserResponse(buffer_arg) {
  return ondewo_nlu_agent_pb.CreateProjectTechnicalUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DeleteAgentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.DeleteAgentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.DeleteAgentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteAgentRequest(buffer_arg) {
  return ondewo_nlu_agent_pb.DeleteAgentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DeleteProjectTechnicalUserRequest(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.DeleteProjectTechnicalUserRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.DeleteProjectTechnicalUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteProjectTechnicalUserRequest(buffer_arg) {
  return ondewo_nlu_agent_pb.DeleteProjectTechnicalUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DeleteResourcesRequest(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.DeleteResourcesRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.DeleteResourcesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteResourcesRequest(buffer_arg) {
  return ondewo_nlu_agent_pb.DeleteResourcesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ExportAgentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.ExportAgentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ExportAgentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ExportAgentRequest(buffer_arg) {
  return ondewo_nlu_agent_pb.ExportAgentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ExportBenchmarkAgentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.ExportBenchmarkAgentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ExportBenchmarkAgentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ExportBenchmarkAgentRequest(buffer_arg) {
  return ondewo_nlu_agent_pb.ExportBenchmarkAgentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ExportResourcesRequest(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.ExportResourcesRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ExportResourcesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ExportResourcesRequest(buffer_arg) {
  return ondewo_nlu_agent_pb.ExportResourcesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ExportResourcesResponse(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.ExportResourcesResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ExportResourcesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ExportResourcesResponse(buffer_arg) {
  return ondewo_nlu_agent_pb.ExportResourcesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_FullTextSearchRequest(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.FullTextSearchRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.FullTextSearchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_FullTextSearchRequest(buffer_arg) {
  return ondewo_nlu_agent_pb.FullTextSearchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_FullTextSearchResponseEntity(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.FullTextSearchResponseEntity)) {
    throw new Error('Expected argument of type ondewo.nlu.FullTextSearchResponseEntity');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_FullTextSearchResponseEntity(buffer_arg) {
  return ondewo_nlu_agent_pb.FullTextSearchResponseEntity.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_FullTextSearchResponseEntitySynonym(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.FullTextSearchResponseEntitySynonym)) {
    throw new Error('Expected argument of type ondewo.nlu.FullTextSearchResponseEntitySynonym');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_FullTextSearchResponseEntitySynonym(buffer_arg) {
  return ondewo_nlu_agent_pb.FullTextSearchResponseEntitySynonym.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_FullTextSearchResponseEntityType(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.FullTextSearchResponseEntityType)) {
    throw new Error('Expected argument of type ondewo.nlu.FullTextSearchResponseEntityType');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_FullTextSearchResponseEntityType(buffer_arg) {
  return ondewo_nlu_agent_pb.FullTextSearchResponseEntityType.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_FullTextSearchResponseIntent(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.FullTextSearchResponseIntent)) {
    throw new Error('Expected argument of type ondewo.nlu.FullTextSearchResponseIntent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_FullTextSearchResponseIntent(buffer_arg) {
  return ondewo_nlu_agent_pb.FullTextSearchResponseIntent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_FullTextSearchResponseIntentContextIn(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.FullTextSearchResponseIntentContextIn)) {
    throw new Error('Expected argument of type ondewo.nlu.FullTextSearchResponseIntentContextIn');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_FullTextSearchResponseIntentContextIn(buffer_arg) {
  return ondewo_nlu_agent_pb.FullTextSearchResponseIntentContextIn.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_FullTextSearchResponseIntentContextOut(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.FullTextSearchResponseIntentContextOut)) {
    throw new Error('Expected argument of type ondewo.nlu.FullTextSearchResponseIntentContextOut');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_FullTextSearchResponseIntentContextOut(buffer_arg) {
  return ondewo_nlu_agent_pb.FullTextSearchResponseIntentContextOut.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_FullTextSearchResponseIntentParameters(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.FullTextSearchResponseIntentParameters)) {
    throw new Error('Expected argument of type ondewo.nlu.FullTextSearchResponseIntentParameters');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_FullTextSearchResponseIntentParameters(buffer_arg) {
  return ondewo_nlu_agent_pb.FullTextSearchResponseIntentParameters.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_FullTextSearchResponseIntentResponse(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.FullTextSearchResponseIntentResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.FullTextSearchResponseIntentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_FullTextSearchResponseIntentResponse(buffer_arg) {
  return ondewo_nlu_agent_pb.FullTextSearchResponseIntentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_FullTextSearchResponseIntentTags(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.FullTextSearchResponseIntentTags)) {
    throw new Error('Expected argument of type ondewo.nlu.FullTextSearchResponseIntentTags');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_FullTextSearchResponseIntentTags(buffer_arg) {
  return ondewo_nlu_agent_pb.FullTextSearchResponseIntentTags.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_FullTextSearchResponseIntentUsersays(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.FullTextSearchResponseIntentUsersays)) {
    throw new Error('Expected argument of type ondewo.nlu.FullTextSearchResponseIntentUsersays');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_FullTextSearchResponseIntentUsersays(buffer_arg) {
  return ondewo_nlu_agent_pb.FullTextSearchResponseIntentUsersays.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetAgentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.GetAgentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetAgentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetAgentRequest(buffer_arg) {
  return ondewo_nlu_agent_pb.GetAgentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetAgentStatisticsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.GetAgentStatisticsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetAgentStatisticsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetAgentStatisticsRequest(buffer_arg) {
  return ondewo_nlu_agent_pb.GetAgentStatisticsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetAgentStatisticsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.GetAgentStatisticsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.GetAgentStatisticsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetAgentStatisticsResponse(buffer_arg) {
  return ondewo_nlu_agent_pb.GetAgentStatisticsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetModelStatusesRequest(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.GetModelStatusesRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetModelStatusesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetModelStatusesRequest(buffer_arg) {
  return ondewo_nlu_agent_pb.GetModelStatusesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetModelStatusesResponse(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.GetModelStatusesResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.GetModelStatusesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetModelStatusesResponse(buffer_arg) {
  return ondewo_nlu_agent_pb.GetModelStatusesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetPlatformInfoResponse(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.GetPlatformInfoResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.GetPlatformInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetPlatformInfoResponse(buffer_arg) {
  return ondewo_nlu_agent_pb.GetPlatformInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetPlatformMappingRequest(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.GetPlatformMappingRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetPlatformMappingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetPlatformMappingRequest(buffer_arg) {
  return ondewo_nlu_agent_pb.GetPlatformMappingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetSessionsStatisticsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.GetSessionsStatisticsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetSessionsStatisticsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetSessionsStatisticsRequest(buffer_arg) {
  return ondewo_nlu_agent_pb.GetSessionsStatisticsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetSessionsStatisticsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.GetSessionsStatisticsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.GetSessionsStatisticsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetSessionsStatisticsResponse(buffer_arg) {
  return ondewo_nlu_agent_pb.GetSessionsStatisticsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetSessionsStatisticsTimeSeriesRequest(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.GetSessionsStatisticsTimeSeriesRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetSessionsStatisticsTimeSeriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetSessionsStatisticsTimeSeriesRequest(buffer_arg) {
  return ondewo_nlu_agent_pb.GetSessionsStatisticsTimeSeriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetSessionsStatisticsTimeSeriesResponse(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.GetSessionsStatisticsTimeSeriesResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.GetSessionsStatisticsTimeSeriesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetSessionsStatisticsTimeSeriesResponse(buffer_arg) {
  return ondewo_nlu_agent_pb.GetSessionsStatisticsTimeSeriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ImportAgentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.ImportAgentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ImportAgentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ImportAgentRequest(buffer_arg) {
  return ondewo_nlu_agent_pb.ImportAgentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListAgentsOfUserResponse(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.ListAgentsOfUserResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListAgentsOfUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListAgentsOfUserResponse(buffer_arg) {
  return ondewo_nlu_agent_pb.ListAgentsOfUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListAgentsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.ListAgentsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListAgentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListAgentsRequest(buffer_arg) {
  return ondewo_nlu_agent_pb.ListAgentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListAgentsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.ListAgentsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListAgentsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListAgentsResponse(buffer_arg) {
  return ondewo_nlu_agent_pb.ListAgentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListProjectPermissionsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.ListProjectPermissionsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListProjectPermissionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListProjectPermissionsRequest(buffer_arg) {
  return ondewo_nlu_agent_pb.ListProjectPermissionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListProjectPermissionsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.ListProjectPermissionsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListProjectPermissionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListProjectPermissionsResponse(buffer_arg) {
  return ondewo_nlu_agent_pb.ListProjectPermissionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListProjectTechnicalUsersRequest(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.ListProjectTechnicalUsersRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListProjectTechnicalUsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListProjectTechnicalUsersRequest(buffer_arg) {
  return ondewo_nlu_agent_pb.ListProjectTechnicalUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListProjectTechnicalUsersResponse(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.ListProjectTechnicalUsersResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListProjectTechnicalUsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListProjectTechnicalUsersResponse(buffer_arg) {
  return ondewo_nlu_agent_pb.ListProjectTechnicalUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListUsersInProjectRequest(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.ListUsersInProjectRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListUsersInProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListUsersInProjectRequest(buffer_arg) {
  return ondewo_nlu_agent_pb.ListUsersInProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListUsersInProjectResponse(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.ListUsersInProjectResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListUsersInProjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListUsersInProjectResponse(buffer_arg) {
  return ondewo_nlu_agent_pb.ListUsersInProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_MigrateAgentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.MigrateAgentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.MigrateAgentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_MigrateAgentRequest(buffer_arg) {
  return ondewo_nlu_agent_pb.MigrateAgentRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_ondewo_nlu_OptimizeRankingMatchRequest(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.OptimizeRankingMatchRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.OptimizeRankingMatchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_OptimizeRankingMatchRequest(buffer_arg) {
  return ondewo_nlu_agent_pb.OptimizeRankingMatchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_PlatformMapping(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.PlatformMapping)) {
    throw new Error('Expected argument of type ondewo.nlu.PlatformMapping');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_PlatformMapping(buffer_arg) {
  return ondewo_nlu_agent_pb.PlatformMapping.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ReindexAgentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.ReindexAgentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ReindexAgentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ReindexAgentRequest(buffer_arg) {
  return ondewo_nlu_agent_pb.ReindexAgentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RemoveUserFromProjectRequest(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.RemoveUserFromProjectRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RemoveUserFromProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RemoveUserFromProjectRequest(buffer_arg) {
  return ondewo_nlu_agent_pb.RemoveUserFromProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RestoreAgentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.RestoreAgentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RestoreAgentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RestoreAgentRequest(buffer_arg) {
  return ondewo_nlu_agent_pb.RestoreAgentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RotateProjectTechnicalUserPasswordRequest(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.RotateProjectTechnicalUserPasswordRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RotateProjectTechnicalUserPasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RotateProjectTechnicalUserPasswordRequest(buffer_arg) {
  return ondewo_nlu_agent_pb.RotateProjectTechnicalUserPasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RotateProjectTechnicalUserPasswordResponse(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.RotateProjectTechnicalUserPasswordResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RotateProjectTechnicalUserPasswordResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RotateProjectTechnicalUserPasswordResponse(buffer_arg) {
  return ondewo_nlu_agent_pb.RotateProjectTechnicalUserPasswordResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_SetAgentStatusRequest(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.SetAgentStatusRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.SetAgentStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_SetAgentStatusRequest(buffer_arg) {
  return ondewo_nlu_agent_pb.SetAgentStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_SetResourcesRequest(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.SetResourcesRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.SetResourcesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_SetResourcesRequest(buffer_arg) {
  return ondewo_nlu_agent_pb.SetResourcesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_TrainAgentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.TrainAgentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.TrainAgentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_TrainAgentRequest(buffer_arg) {
  return ondewo_nlu_agent_pb.TrainAgentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_UpdateAgentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_agent_pb.UpdateAgentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.UpdateAgentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_UpdateAgentRequest(buffer_arg) {
  return ondewo_nlu_agent_pb.UpdateAgentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Agents are best described as Natural Language Understanding (NLU) modules that transform user requests into actionable data. You can include agents in your app, product, or service to determine user intent and respond to the user in a natural way.
//
// After you create an agent, you can add <a href="index.html#ondewo.nlu.Intent">Intents</a>, <a href="index.html#ondewo.nlu.Context">Contexts</a>, <a href="index.html#ondewo.nlu.EntityType">Entity Types</a>, <a href="index.html#ondewo.nlu.WebhookRequest">Webhooks</a>, and so on to manage the flow of a conversation and match user input to predefined intents and actions.
//
// You can create an agent using both Dialogflow Standard Edition and Dialogflow Enterprise Edition. For details, see <a href="https://docs.cloud.google.com/dialogflow/docs/editions">Dialogflow Editions</a>.
//
// You can save your agent for backup or versioning by exporting the agent by using the <a href="index.html#ondewo.nlu.Agents.ExportAgent">ExportAgent</a> method. You can import a saved agent by using the <a href="index.html#ondewo.nlu.Agents.ImportAgent">ImportAgent</a> method.
//
// Dialogflow provides several <a href="https://dialogflow.com/docs/prebuilt-agents">prebuilt agents</a> for common conversation scenarios such as determining a date and time, converting currency, and so on.
//
// For more information about agents, see the <a href="https://dialogflow.com/docs/agents">Dialogflow documentation</a>.
var AgentsService = exports.AgentsService = {
  // Creates the specified agent.
//
// Examples:
//
// <pre>
// grpcurl -plaintext -H 'Authorization: Bearer <jwt>' -d '{
//   "agent": {
//     "display_name": "My Pizza Bot",
//     "default_language_code": "en",
//     "supported_language_codes": ["en"],
//     "time_zone": "Europe/Vienna",
//     "nlu_platform": "ONDEWO"
//   }
// }' localhost:50055 ondewo.nlu.Agents.CreateAgent
// </pre>
//
// <samp>{
//   "parent": "projects/76aaf4f3-a1f6-4fda-b4b3-351c64e65bc4/agent",
//   "display_name": "Pizza Bot",
//   "default_language_code": "en",
//   "supported_language_codes": [
//     "en"
//   ],
//   "time_zone": "Europe/Vienna",
//   "nlu_platform": "ONDEWO",
//   "owner_id": "5aac51b8-668f-49dd-913f-cc683e56af34"
// }
// </samp>
createAgent: {
    path: '/ondewo.nlu.Agents/CreateAgent',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.CreateAgentRequest,
    responseType: ondewo_nlu_agent_pb.Agent,
    requestSerialize: serialize_ondewo_nlu_CreateAgentRequest,
    requestDeserialize: deserialize_ondewo_nlu_CreateAgentRequest,
    responseSerialize: serialize_ondewo_nlu_Agent,
    responseDeserialize: deserialize_ondewo_nlu_Agent,
  },
  // Updates the specified agent.
//
// Examples:
//
// <pre>
// grpcurl -plaintext -H 'Authorization: Bearer <jwt>' -d '{
//   "agent": {
//     "parent": "projects/76aaf4f3-a1f6-4fda-b4b3-351c64e65bc4/agent",
//     "display_name": "Pizza Bot 2",
//     "supported_language_codes": ["en", "de"]
//   },
//   "update_mask": {
//     "paths": [
//       "agent.display_name",
//       "agent.supported_language_codes"
//     ]
//   }
// }' localhost:50055 ondewo.nlu.Agents.UpdateAgent
// </pre>
//
// <samp>{
//   "parent": "projects/76aaf4f3-a1f6-4fda-b4b3-351c64e65bc4/agent",
//   "display_name": "Pizza Bot 2",
//   "default_language_code": "en",
//   "supported_language_codes": [
//     "en",
//     "de"
//   ],
//   "time_zone": "Europe/Vienna",
//   "nlu_platform": "ONDEWO",
//   "owner_id": "5aac51b8-668f-49dd-913f-cc683e56af34"
// }
// </samp>
updateAgent: {
    path: '/ondewo.nlu.Agents/UpdateAgent',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.UpdateAgentRequest,
    responseType: ondewo_nlu_agent_pb.Agent,
    requestSerialize: serialize_ondewo_nlu_UpdateAgentRequest,
    requestDeserialize: deserialize_ondewo_nlu_UpdateAgentRequest,
    responseSerialize: serialize_ondewo_nlu_Agent,
    responseDeserialize: deserialize_ondewo_nlu_Agent,
  },
  // Retrieves the specified agent.
//
// Examples:
//
// <pre>
// grpcurl -plaintext -H 'Authorization: Bearer <jwt>' -d '{
//   "parent": "projects/76aaf4f3-a1f6-4fda-b4b3-351c64e65bc4/agent"
// }' localhost:50055 ondewo.nlu.Agents.GetAgent
// </pre>
// <samp>{
//   "parent": "projects/76aaf4f3-a1f6-4fda-b4b3-351c64e65bc4/agent",
//   "display_name": "Pizza Bot 2",
//   "default_language_code": "en",
//   "supported_language_codes": [
//     "en",
//     "de"
//   ],
//   "time_zone": "Europe/Vienna",
//   "nlu_platform": "ONDEWO",
//   "configs": {...},
//   "owner_id": "5aac51b8-668f-49dd-913f-cc683e56af34"
// }
// </samp>
getAgent: {
    path: '/ondewo.nlu.Agents/GetAgent',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.GetAgentRequest,
    responseType: ondewo_nlu_agent_pb.Agent,
    requestSerialize: serialize_ondewo_nlu_GetAgentRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetAgentRequest,
    responseSerialize: serialize_ondewo_nlu_Agent,
    responseDeserialize: deserialize_ondewo_nlu_Agent,
  },
  // Deletes the specified agent.
//
// Examples:
//
// <pre>
// grpcurl -plaintext -H 'Authorization: Bearer <jwt>' -d '{
//   "parent": "projects/76aaf4f3-a1f6-4fda-b4b3-351c64e65bc4/agent"
// }' localhost:50055 ondewo.nlu.Agents.DeleteAgent
// </pre>
// <samp>{}</samp>
deleteAgent: {
    path: '/ondewo.nlu.Agents/DeleteAgent',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.DeleteAgentRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_nlu_DeleteAgentRequest,
    requestDeserialize: deserialize_ondewo_nlu_DeleteAgentRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Deletes all agents in the server (for development purposes only).
//
// Examples:
//
// <pre>
// grpcurl -plaintext -H 'Authorization: Bearer <jwt>' localhost:50055 ondewo.nlu.Agents.DeleteAllAgents
// </pre>
// <samp>{}</samp>
deleteAllAgents: {
    path: '/ondewo.nlu.Agents/DeleteAllAgents',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Lists agents in the server associated to the current user
//
// Examples:
//
// <pre>
// grpcurl -plaintext -H 'Authorization: Bearer <jwt>' localhost:50055 ondewo.nlu.Agents.ListAgents
// </pre>
// <samp>{
//   "agents_with_owners": [
//     {
//       "agent": {
//         "parent": "projects/76aaf4f3-a1f6-4fda-b4b3-351c64e65bc4/agent",
//         "display_name": "Pizza Bot 2",
//         "owner_id": "5aac51b8-668f-49dd-913f-cc683e56af34"
//       },
//       "owner": {
//         "user_id": "5aac51b8-668f-49dd-913f-cc683e56af34",
//         "display_name": "admin",
//         "server_role_id": 3,
//         "user_email": "admin@ondewo.com"
//       }
//     }
//   ],
//   "next_page_token": "current_index-1"
// }
// </samp>
listAgents: {
    path: '/ondewo.nlu.Agents/ListAgents',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.ListAgentsRequest,
    responseType: ondewo_nlu_agent_pb.ListAgentsResponse,
    requestSerialize: serialize_ondewo_nlu_ListAgentsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListAgentsRequest,
    responseSerialize: serialize_ondewo_nlu_ListAgentsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListAgentsResponse,
  },
  // Lists agents in the server associated to the given user
//
// Examples:
//
// <pre>
// grpcurl -plaintext -H 'Authorization: Bearer <jwt>' localhost:50055 ondewo.nlu.Agents.ListAgentsOfUser
// </pre>
// <samp>{
//   "agents_of_user_with_owners": [
//     {
//       "agent_with_owner": {
//         "agent": {
//           "parent": "projects/76aaf4f3-a1f6-4fda-b4b3-351c64e65bc4/agent",
//           "display_name": "Pizza Bot 2",
//           "owner_id": "5aac51b8-668f-49dd-913f-cc683e56af34"
//         },
//         "owner": {
//           "user_id": "5aac51b8-668f-49dd-913f-cc683e56af34",
//           "display_name": "admin",
//           "server_role_id": 3,
//           "user_email": "admin@ondewo.com"
//         }
//       },
//       "project_role": {
//         "role_id": 4,
//         "name": "ADMIN"
//       }
//     }
//   ],
//   "next_page_token": "current_index-1"
// }
// </samp>
listAgentsOfUser: {
    path: '/ondewo.nlu.Agents/ListAgentsOfUser',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.ListAgentsRequest,
    responseType: ondewo_nlu_agent_pb.ListAgentsOfUserResponse,
    requestSerialize: serialize_ondewo_nlu_ListAgentsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListAgentsRequest,
    responseSerialize: serialize_ondewo_nlu_ListAgentsOfUserResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListAgentsOfUserResponse,
  },
  // Lists all agents in the server
//
// Examples:
//
// <pre>
// grpcurl -plaintext -H 'Authorization: Bearer <jwt>' localhost:50055 ondewo.nlu.Agents.ListAllAgents
// </pre>
// <samp>{
//   "agents_with_owners": [
//     {
//       "agent": {
//         "parent": "projects/76aaf4f3-a1f6-4fda-b4b3-351c64e65bc4/agent",
//         "display_name": "Pizza Bot 2",
//         "owner_id": "5aac51b8-668f-49dd-913f-cc683e56af34"
//       },
//       "owner": {
//         "user_id": "5aac51b8-668f-49dd-913f-cc683e56af34",
//         "display_name": "admin",
//         "server_role_id": 3,
//         "user_email": "admin@ondewo.com"
//       }
//     }
//   ],
//   "next_page_token": "current_index-1"
// }
// </samp>
listAllAgents: {
    path: '/ondewo.nlu.Agents/ListAllAgents',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.ListAgentsRequest,
    responseType: ondewo_nlu_agent_pb.ListAgentsResponse,
    requestSerialize: serialize_ondewo_nlu_ListAgentsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListAgentsRequest,
    responseSerialize: serialize_ondewo_nlu_ListAgentsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListAgentsResponse,
  },
  // Adds a user with specified id to the project (agent)
addUserToProject: {
    path: '/ondewo.nlu.Agents/AddUserToProject',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.AddUserToProjectRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_nlu_AddUserToProjectRequest,
    requestDeserialize: deserialize_ondewo_nlu_AddUserToProjectRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Removes a user with specified id from the project (agent)
removeUserFromProject: {
    path: '/ondewo.nlu.Agents/RemoveUserFromProject',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.RemoveUserFromProjectRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_nlu_RemoveUserFromProjectRequest,
    requestDeserialize: deserialize_ondewo_nlu_RemoveUserFromProjectRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Lists users in the project (agent)
listUsersInProject: {
    path: '/ondewo.nlu.Agents/ListUsersInProject',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.ListUsersInProjectRequest,
    responseType: ondewo_nlu_agent_pb.ListUsersInProjectResponse,
    requestSerialize: serialize_ondewo_nlu_ListUsersInProjectRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListUsersInProjectRequest,
    responseSerialize: serialize_ondewo_nlu_ListUsersInProjectResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListUsersInProjectResponse,
  },
  // Gets information from the platform
// <br>
// Request parameter:
// <a href="https://protobuf.dev/reference/protobuf/google.protobuf/#empty">google.protobuf.Empty</a>
getPlatformInfo: {
    path: '/ondewo.nlu.Agents/GetPlatformInfo',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: ondewo_nlu_agent_pb.GetPlatformInfoResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_ondewo_nlu_GetPlatformInfoResponse,
    responseDeserialize: deserialize_ondewo_nlu_GetPlatformInfoResponse,
  },
  // List permissions from the project (agent)
listProjectPermissions: {
    path: '/ondewo.nlu.Agents/ListProjectPermissions',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.ListProjectPermissionsRequest,
    responseType: ondewo_nlu_agent_pb.ListProjectPermissionsResponse,
    requestSerialize: serialize_ondewo_nlu_ListProjectPermissionsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListProjectPermissionsRequest,
    responseSerialize: serialize_ondewo_nlu_ListProjectPermissionsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListProjectPermissionsResponse,
  },
  // Trains the specified agent.
//
// Operation &lt;response: <a href="https://protobuf.dev/reference/protobuf/google.protobuf/#empty">google.protobuf.Empty</a>,
//            metadata: <a href="https://protobuf.dev/reference/protobuf/google.protobuf/#struct">google.protobuf.Struct</a>&gt;
trainAgent: {
    path: '/ondewo.nlu.Agents/TrainAgent',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.TrainAgentRequest,
    responseType: ondewo_nlu_operations_pb.Operation,
    requestSerialize: serialize_ondewo_nlu_TrainAgentRequest,
    requestDeserialize: deserialize_ondewo_nlu_TrainAgentRequest,
    responseSerialize: serialize_ondewo_nlu_Operation,
    responseDeserialize: deserialize_ondewo_nlu_Operation,
  },
  // Builds cache for the specified agent.
//
// Operation &lt;response: <a href="https://protobuf.dev/reference/protobuf/google.protobuf/#empty">google.protobuf.Empty</a>,
//            metadata: <a href="https://protobuf.dev/reference/protobuf/google.protobuf/#struct">google.protobuf.Struct</a>&gt;
buildCache: {
    path: '/ondewo.nlu.Agents/BuildCache',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.BuildCacheRequest,
    responseType: ondewo_nlu_operations_pb.Operation,
    requestSerialize: serialize_ondewo_nlu_BuildCacheRequest,
    requestDeserialize: deserialize_ondewo_nlu_BuildCacheRequest,
    responseSerialize: serialize_ondewo_nlu_Operation,
    responseDeserialize: deserialize_ondewo_nlu_Operation,
  },
  // Exports the specified agent to a ZIP file.
// <br>
// Operation &lt;response: <a href="index.html#ondewo.nlu.ExportAgentResponse">ExportAgentResponse</a>,
//            metadata: <a href="https://protobuf.dev/reference/protobuf/google.protobuf/#struct">google.protobuf.Struct</a>&gt;
exportAgent: {
    path: '/ondewo.nlu.Agents/ExportAgent',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.ExportAgentRequest,
    responseType: ondewo_nlu_operations_pb.Operation,
    requestSerialize: serialize_ondewo_nlu_ExportAgentRequest,
    requestDeserialize: deserialize_ondewo_nlu_ExportAgentRequest,
    responseSerialize: serialize_ondewo_nlu_Operation,
    responseDeserialize: deserialize_ondewo_nlu_Operation,
  },
  // Exports the specified train agent to a ZIP file after train-test split, returns the test TrainingPhrase list.
//
exportBenchmarkAgent: {
    path: '/ondewo.nlu.Agents/ExportBenchmarkAgent',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.ExportBenchmarkAgentRequest,
    responseType: ondewo_nlu_operations_pb.Operation,
    requestSerialize: serialize_ondewo_nlu_ExportBenchmarkAgentRequest,
    requestDeserialize: deserialize_ondewo_nlu_ExportBenchmarkAgentRequest,
    responseSerialize: serialize_ondewo_nlu_Operation,
    responseDeserialize: deserialize_ondewo_nlu_Operation,
  },
  // Imports the specified agent from a ZIP file.
// <br>
// Uploads new intents and entity types without deleting the existing ones.
// Intents and entity types with the same name are replaced with the new
// versions from ImportAgentRequest.
// <br>
// Operation &lt;response: <a href="https://protobuf.dev/reference/protobuf/google.protobuf/#empty">google.protobuf.Empty</a>,
//            metadata: <a href="https://protobuf.dev/reference/protobuf/google.protobuf/#struct">google.protobuf.Struct</a>&gt;
importAgent: {
    path: '/ondewo.nlu.Agents/ImportAgent',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.ImportAgentRequest,
    responseType: ondewo_nlu_operations_pb.Operation,
    requestSerialize: serialize_ondewo_nlu_ImportAgentRequest,
    requestDeserialize: deserialize_ondewo_nlu_ImportAgentRequest,
    responseSerialize: serialize_ondewo_nlu_Operation,
    responseDeserialize: deserialize_ondewo_nlu_Operation,
  },
  migrateAgent: {
    path: '/ondewo.nlu.Agents/MigrateAgent',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.MigrateAgentRequest,
    responseType: ondewo_nlu_operations_pb.Operation,
    requestSerialize: serialize_ondewo_nlu_MigrateAgentRequest,
    requestDeserialize: deserialize_ondewo_nlu_MigrateAgentRequest,
    responseSerialize: serialize_ondewo_nlu_Operation,
    responseDeserialize: deserialize_ondewo_nlu_Operation,
  },
  optimizeRankingMatch: {
    path: '/ondewo.nlu.Agents/OptimizeRankingMatch',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.OptimizeRankingMatchRequest,
    responseType: ondewo_nlu_operations_pb.Operation,
    requestSerialize: serialize_ondewo_nlu_OptimizeRankingMatchRequest,
    requestDeserialize: deserialize_ondewo_nlu_OptimizeRankingMatchRequest,
    responseSerialize: serialize_ondewo_nlu_Operation,
    responseDeserialize: deserialize_ondewo_nlu_Operation,
  },
  // Restores the specified agent from a ZIP file.
// <br>
// Replaces the current agent version with a new one. All the intents and
// entity types in the older version are deleted.
// <br>
// Operation &lt;response: <a href="https://protobuf.dev/reference/protobuf/google.protobuf/#empty">google.protobuf.Empty</a>,
//            metadata: <a href="https://protobuf.dev/reference/protobuf/google.protobuf/#struct">google.protobuf.Struct</a>&gt;
restoreAgent: {
    path: '/ondewo.nlu.Agents/RestoreAgent',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.RestoreAgentRequest,
    responseType: ondewo_nlu_operations_pb.Operation,
    requestSerialize: serialize_ondewo_nlu_RestoreAgentRequest,
    requestDeserialize: deserialize_ondewo_nlu_RestoreAgentRequest,
    responseSerialize: serialize_ondewo_nlu_Operation,
    responseDeserialize: deserialize_ondewo_nlu_Operation,
  },
  // Gets statistics for the agent
getAgentStatistics: {
    path: '/ondewo.nlu.Agents/GetAgentStatistics',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.GetAgentStatisticsRequest,
    responseType: ondewo_nlu_agent_pb.GetAgentStatisticsResponse,
    requestSerialize: serialize_ondewo_nlu_GetAgentStatisticsRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetAgentStatisticsRequest,
    responseSerialize: serialize_ondewo_nlu_GetAgentStatisticsResponse,
    responseDeserialize: deserialize_ondewo_nlu_GetAgentStatisticsResponse,
  },
  getSessionsStatistics: {
    path: '/ondewo.nlu.Agents/GetSessionsStatistics',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.GetSessionsStatisticsRequest,
    responseType: ondewo_nlu_agent_pb.GetSessionsStatisticsResponse,
    requestSerialize: serialize_ondewo_nlu_GetSessionsStatisticsRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetSessionsStatisticsRequest,
    responseSerialize: serialize_ondewo_nlu_GetSessionsStatisticsResponse,
    responseDeserialize: deserialize_ondewo_nlu_GetSessionsStatisticsResponse,
  },
  // Gets LLM telemetry statistics for sessions bucketed over time (time series).
// Supports LLM-typed report types (SESSION_LLM_*) only.
getSessionsStatisticsTimeSeries: {
    path: '/ondewo.nlu.Agents/GetSessionsStatisticsTimeSeries',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.GetSessionsStatisticsTimeSeriesRequest,
    responseType: ondewo_nlu_agent_pb.GetSessionsStatisticsTimeSeriesResponse,
    requestSerialize: serialize_ondewo_nlu_GetSessionsStatisticsTimeSeriesRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetSessionsStatisticsTimeSeriesRequest,
    responseSerialize: serialize_ondewo_nlu_GetSessionsStatisticsTimeSeriesResponse,
    responseDeserialize: deserialize_ondewo_nlu_GetSessionsStatisticsTimeSeriesResponse,
  },
  // Sets status for the agent
setAgentStatus: {
    path: '/ondewo.nlu.Agents/SetAgentStatus',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.SetAgentStatusRequest,
    responseType: ondewo_nlu_agent_pb.Agent,
    requestSerialize: serialize_ondewo_nlu_SetAgentStatusRequest,
    requestDeserialize: deserialize_ondewo_nlu_SetAgentStatusRequest,
    responseSerialize: serialize_ondewo_nlu_Agent,
    responseDeserialize: deserialize_ondewo_nlu_Agent,
  },
  // Sets resources
setResources: {
    path: '/ondewo.nlu.Agents/SetResources',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.SetResourcesRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_nlu_SetResourcesRequest,
    requestDeserialize: deserialize_ondewo_nlu_SetResourcesRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Deletes resources
deleteResources: {
    path: '/ondewo.nlu.Agents/DeleteResources',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.DeleteResourcesRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_nlu_DeleteResourcesRequest,
    requestDeserialize: deserialize_ondewo_nlu_DeleteResourcesRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Exports resources
exportResources: {
    path: '/ondewo.nlu.Agents/ExportResources',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.ExportResourcesRequest,
    responseType: ondewo_nlu_agent_pb.ExportResourcesResponse,
    requestSerialize: serialize_ondewo_nlu_ExportResourcesRequest,
    requestDeserialize: deserialize_ondewo_nlu_ExportResourcesRequest,
    responseSerialize: serialize_ondewo_nlu_ExportResourcesResponse,
    responseDeserialize: deserialize_ondewo_nlu_ExportResourcesResponse,
  },
  // Get statuses of models related to project
getModelStatuses: {
    path: '/ondewo.nlu.Agents/GetModelStatuses',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.GetModelStatusesRequest,
    responseType: ondewo_nlu_agent_pb.GetModelStatusesResponse,
    requestSerialize: serialize_ondewo_nlu_GetModelStatusesRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetModelStatusesRequest,
    responseSerialize: serialize_ondewo_nlu_GetModelStatusesResponse,
    responseDeserialize: deserialize_ondewo_nlu_GetModelStatusesResponse,
  },
  // Get all set platform name mappings for an Agent
getPlatformMapping: {
    path: '/ondewo.nlu.Agents/GetPlatformMapping',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.GetPlatformMappingRequest,
    responseType: ondewo_nlu_agent_pb.PlatformMapping,
    requestSerialize: serialize_ondewo_nlu_GetPlatformMappingRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetPlatformMappingRequest,
    responseSerialize: serialize_ondewo_nlu_PlatformMapping,
    responseDeserialize: deserialize_ondewo_nlu_PlatformMapping,
  },
  // Set platform name mappings for an Agent
setPlatformMapping: {
    path: '/ondewo.nlu.Agents/SetPlatformMapping',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.PlatformMapping,
    responseType: ondewo_nlu_agent_pb.PlatformMapping,
    requestSerialize: serialize_ondewo_nlu_PlatformMapping,
    requestDeserialize: deserialize_ondewo_nlu_PlatformMapping,
    responseSerialize: serialize_ondewo_nlu_PlatformMapping,
    responseDeserialize: deserialize_ondewo_nlu_PlatformMapping,
  },
  // Full text search endpoint in entity types
getFullTextSearchEntityType: {
    path: '/ondewo.nlu.Agents/GetFullTextSearchEntityType',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.FullTextSearchRequest,
    responseType: ondewo_nlu_agent_pb.FullTextSearchResponseEntityType,
    requestSerialize: serialize_ondewo_nlu_FullTextSearchRequest,
    requestDeserialize: deserialize_ondewo_nlu_FullTextSearchRequest,
    responseSerialize: serialize_ondewo_nlu_FullTextSearchResponseEntityType,
    responseDeserialize: deserialize_ondewo_nlu_FullTextSearchResponseEntityType,
  },
  // Full text search endpoint in entities
getFullTextSearchEntity: {
    path: '/ondewo.nlu.Agents/GetFullTextSearchEntity',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.FullTextSearchRequest,
    responseType: ondewo_nlu_agent_pb.FullTextSearchResponseEntity,
    requestSerialize: serialize_ondewo_nlu_FullTextSearchRequest,
    requestDeserialize: deserialize_ondewo_nlu_FullTextSearchRequest,
    responseSerialize: serialize_ondewo_nlu_FullTextSearchResponseEntity,
    responseDeserialize: deserialize_ondewo_nlu_FullTextSearchResponseEntity,
  },
  // Full text search endpoint in entity synonyms
getFullTextSearchEntitySynonym: {
    path: '/ondewo.nlu.Agents/GetFullTextSearchEntitySynonym',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.FullTextSearchRequest,
    responseType: ondewo_nlu_agent_pb.FullTextSearchResponseEntitySynonym,
    requestSerialize: serialize_ondewo_nlu_FullTextSearchRequest,
    requestDeserialize: deserialize_ondewo_nlu_FullTextSearchRequest,
    responseSerialize: serialize_ondewo_nlu_FullTextSearchResponseEntitySynonym,
    responseDeserialize: deserialize_ondewo_nlu_FullTextSearchResponseEntitySynonym,
  },
  // Full text search endpoint in intents
getFullTextSearchIntent: {
    path: '/ondewo.nlu.Agents/GetFullTextSearchIntent',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.FullTextSearchRequest,
    responseType: ondewo_nlu_agent_pb.FullTextSearchResponseIntent,
    requestSerialize: serialize_ondewo_nlu_FullTextSearchRequest,
    requestDeserialize: deserialize_ondewo_nlu_FullTextSearchRequest,
    responseSerialize: serialize_ondewo_nlu_FullTextSearchResponseIntent,
    responseDeserialize: deserialize_ondewo_nlu_FullTextSearchResponseIntent,
  },
  // Full text search endpoint in context ins of intents
getFullTextSearchIntentContextIn: {
    path: '/ondewo.nlu.Agents/GetFullTextSearchIntentContextIn',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.FullTextSearchRequest,
    responseType: ondewo_nlu_agent_pb.FullTextSearchResponseIntentContextIn,
    requestSerialize: serialize_ondewo_nlu_FullTextSearchRequest,
    requestDeserialize: deserialize_ondewo_nlu_FullTextSearchRequest,
    responseSerialize: serialize_ondewo_nlu_FullTextSearchResponseIntentContextIn,
    responseDeserialize: deserialize_ondewo_nlu_FullTextSearchResponseIntentContextIn,
  },
  // Full text search endpoint in context outs of intents
getFullTextSearchIntentContextOut: {
    path: '/ondewo.nlu.Agents/GetFullTextSearchIntentContextOut',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.FullTextSearchRequest,
    responseType: ondewo_nlu_agent_pb.FullTextSearchResponseIntentContextOut,
    requestSerialize: serialize_ondewo_nlu_FullTextSearchRequest,
    requestDeserialize: deserialize_ondewo_nlu_FullTextSearchRequest,
    responseSerialize: serialize_ondewo_nlu_FullTextSearchResponseIntentContextOut,
    responseDeserialize: deserialize_ondewo_nlu_FullTextSearchResponseIntentContextOut,
  },
  // Full text search endpoint in user says of intents
getFullTextSearchIntentUsersays: {
    path: '/ondewo.nlu.Agents/GetFullTextSearchIntentUsersays',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.FullTextSearchRequest,
    responseType: ondewo_nlu_agent_pb.FullTextSearchResponseIntentUsersays,
    requestSerialize: serialize_ondewo_nlu_FullTextSearchRequest,
    requestDeserialize: deserialize_ondewo_nlu_FullTextSearchRequest,
    responseSerialize: serialize_ondewo_nlu_FullTextSearchResponseIntentUsersays,
    responseDeserialize: deserialize_ondewo_nlu_FullTextSearchResponseIntentUsersays,
  },
  // Full text search endpoint in tags of intents
getFullTextSearchIntentTags: {
    path: '/ondewo.nlu.Agents/GetFullTextSearchIntentTags',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.FullTextSearchRequest,
    responseType: ondewo_nlu_agent_pb.FullTextSearchResponseIntentTags,
    requestSerialize: serialize_ondewo_nlu_FullTextSearchRequest,
    requestDeserialize: deserialize_ondewo_nlu_FullTextSearchRequest,
    responseSerialize: serialize_ondewo_nlu_FullTextSearchResponseIntentTags,
    responseDeserialize: deserialize_ondewo_nlu_FullTextSearchResponseIntentTags,
  },
  // Full text search endpoint in responses of intents
getFullTextSearchIntentResponse: {
    path: '/ondewo.nlu.Agents/GetFullTextSearchIntentResponse',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.FullTextSearchRequest,
    responseType: ondewo_nlu_agent_pb.FullTextSearchResponseIntentResponse,
    requestSerialize: serialize_ondewo_nlu_FullTextSearchRequest,
    requestDeserialize: deserialize_ondewo_nlu_FullTextSearchRequest,
    responseSerialize: serialize_ondewo_nlu_FullTextSearchResponseIntentResponse,
    responseDeserialize: deserialize_ondewo_nlu_FullTextSearchResponseIntentResponse,
  },
  // Full text search endpoint in parameters of intents
getFullTextSearchIntentParameters: {
    path: '/ondewo.nlu.Agents/GetFullTextSearchIntentParameters',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.FullTextSearchRequest,
    responseType: ondewo_nlu_agent_pb.FullTextSearchResponseIntentParameters,
    requestSerialize: serialize_ondewo_nlu_FullTextSearchRequest,
    requestDeserialize: deserialize_ondewo_nlu_FullTextSearchRequest,
    responseSerialize: serialize_ondewo_nlu_FullTextSearchResponseIntentParameters,
    responseDeserialize: deserialize_ondewo_nlu_FullTextSearchResponseIntentParameters,
  },
  // Force reindexing Intent and Entity data of Agent
reindexAgent: {
    path: '/ondewo.nlu.Agents/ReindexAgent',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.ReindexAgentRequest,
    responseType: ondewo_nlu_operations_pb.Operation,
    requestSerialize: serialize_ondewo_nlu_ReindexAgentRequest,
    requestDeserialize: deserialize_ondewo_nlu_ReindexAgentRequest,
    responseSerialize: serialize_ondewo_nlu_Operation,
    responseDeserialize: deserialize_ondewo_nlu_Operation,
  },
  // Creates a project-scoped technical user (a normal, 2FA-exempt account holding
// PROJECT_EXECUTOR on this one project) for headless/machine access (e.g.
// ondewo-sip/csi/vtsi) via the ROPC login bridge. The generated password is
// returned ONCE in the response and is not retrievable afterwards.
createProjectTechnicalUser: {
    path: '/ondewo.nlu.Agents/CreateProjectTechnicalUser',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.CreateProjectTechnicalUserRequest,
    responseType: ondewo_nlu_agent_pb.CreateProjectTechnicalUserResponse,
    requestSerialize: serialize_ondewo_nlu_CreateProjectTechnicalUserRequest,
    requestDeserialize: deserialize_ondewo_nlu_CreateProjectTechnicalUserRequest,
    responseSerialize: serialize_ondewo_nlu_CreateProjectTechnicalUserResponse,
    responseDeserialize: deserialize_ondewo_nlu_CreateProjectTechnicalUserResponse,
  },
  // Lists the project-scoped technical users of the project (agent).
listProjectTechnicalUsers: {
    path: '/ondewo.nlu.Agents/ListProjectTechnicalUsers',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.ListProjectTechnicalUsersRequest,
    responseType: ondewo_nlu_agent_pb.ListProjectTechnicalUsersResponse,
    requestSerialize: serialize_ondewo_nlu_ListProjectTechnicalUsersRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListProjectTechnicalUsersRequest,
    responseSerialize: serialize_ondewo_nlu_ListProjectTechnicalUsersResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListProjectTechnicalUsersResponse,
  },
  // Deletes a project-scoped technical user (removes the Keycloak user and the
// project membership/projection rows).
deleteProjectTechnicalUser: {
    path: '/ondewo.nlu.Agents/DeleteProjectTechnicalUser',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.DeleteProjectTechnicalUserRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_nlu_DeleteProjectTechnicalUserRequest,
    requestDeserialize: deserialize_ondewo_nlu_DeleteProjectTechnicalUserRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Rotates the password of a project-scoped technical user. Invalidates the old
// password and returns the new generated password ONCE in the response.
rotateProjectTechnicalUserPassword: {
    path: '/ondewo.nlu.Agents/RotateProjectTechnicalUserPassword',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_agent_pb.RotateProjectTechnicalUserPasswordRequest,
    responseType: ondewo_nlu_agent_pb.RotateProjectTechnicalUserPasswordResponse,
    requestSerialize: serialize_ondewo_nlu_RotateProjectTechnicalUserPasswordRequest,
    requestDeserialize: deserialize_ondewo_nlu_RotateProjectTechnicalUserPasswordRequest,
    responseSerialize: serialize_ondewo_nlu_RotateProjectTechnicalUserPasswordResponse,
    responseDeserialize: deserialize_ondewo_nlu_RotateProjectTechnicalUserPasswordResponse,
  },
};

exports.AgentsClient = grpc.makeGenericClientConstructor(AgentsService, 'Agents');
