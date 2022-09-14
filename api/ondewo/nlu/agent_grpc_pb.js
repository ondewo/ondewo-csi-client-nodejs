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
// File-level comment for <code>ondewo/nlu/agent.proto</code>.
//
// This file contains a single service <a href="#ondewo.nlu.Agents">Agents</a>.
//
// The most important messages is <a href="#ondewo.nlu.Agent">Agent</a> and its most complicated field is <code>configs</code>.
'use strict';
var grpc = require('@grpc/grpc-js');
var ondewo_nlu_agent_pb = require('../../ondewo/nlu/agent_pb.js');
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var ondewo_nlu_common_pb = require('../../ondewo/nlu/common_pb.js');
var ondewo_nlu_intent_pb = require('../../ondewo/nlu/intent_pb.js');
var ondewo_nlu_user_pb = require('../../ondewo/nlu/user_pb.js');
var ondewo_nlu_project_role_pb = require('../../ondewo/nlu/project_role_pb.js');
var ondewo_nlu_operations_pb = require('../../ondewo/nlu/operations_pb.js');
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

function serialize_ondewo_nlu_DeleteAgentRequest(arg) {
	if (!(arg instanceof ondewo_nlu_agent_pb.DeleteAgentRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.DeleteAgentRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteAgentRequest(buffer_arg) {
	return ondewo_nlu_agent_pb.DeleteAgentRequest.deserializeBinary(new Uint8Array(buffer_arg));
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
// After you create an agent, you can add [Intents][google.cloud.dialogflow.v2.Intents], [Contexts][google.cloud.dialogflow.v2.Contexts], [Entity Types][google.cloud.dialogflow.v2.EntityTypes], [Webhooks][google.cloud.dialogflow.v2.WebhookRequest], and so on to manage the flow of a conversation and match user input to predefined intents and actions.
//
// You can create an agent using both Dialogflow Standard Edition and Dialogflow Enterprise Edition. For details, see [Dialogflow Editions](/dialogflow-enterprise/docs/editions).
//
// You can save your agent for backup or versioning by exporting the agent by using the [ExportAgent][google.cloud.dialogflow.v2.Agents.ExportAgent] method. You can import a saved agent by using the [ImportAgent][google.cloud.dialogflow.v2.Agents.ImportAgent] method.
//
// Dialogflow provides several [prebuilt agents](https://dialogflow.com/docs/prebuilt-agents) for common conversation scenarios such as determining a date and time, converting currency, and so on.
//
// For more information about agents, see the [Dialogflow documentation](https://dialogflow.com/docs/agents).
var AgentsService = (exports.AgentsService = {
	// Creates the specified agent.
	//
	// <p>Examples:</p>
	//
	// <pre>
	// grpcurl -plaintext -H 'cai-token: aimp' -d '{
	//   "agent": {
	//     "display_name": "Pizza Bot",
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
		responseDeserialize: deserialize_ondewo_nlu_Agent
	},
	// Updates the specified agent.
	//
	// <p>Examples:</p>
	//
	// <pre>
	// grpcurl -plaintext -H 'cai-token: aimp' -d '{
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
		responseDeserialize: deserialize_ondewo_nlu_Agent
	},
	// Retrieves the specified agent.
	//
	// <p>Examples:</p>
	//
	// <pre>
	// grpcurl -plaintext -H 'cai-token: aimp' -d '{
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
		responseDeserialize: deserialize_ondewo_nlu_Agent
	},
	// Deletes the specified agent.
	//
	// <p>Examples:</p>
	//
	// <pre>
	// grpcurl -plaintext -H 'cai-token: aimp' -d '{
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
		responseDeserialize: deserialize_google_protobuf_Empty
	},
	// Deletes all agents in the server (for development purposes only).
	//
	// <p>Examples:</p>
	//
	// <pre>
	// grpcurl -plaintext -H 'cai-token: aimp' localhost:50055 ondewo.nlu.Agents.DeleteAllAgents
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
		responseDeserialize: deserialize_google_protobuf_Empty
	},
	// Lists agents in the server associated to the current user
	//
	// <p>Examples:</p>
	//
	// <pre>
	// grpcurl -plaintext -H 'cai-token: aimp' localhost:50055 ondewo.nlu.Agents.ListAgents
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
		responseDeserialize: deserialize_ondewo_nlu_ListAgentsResponse
	},
	// Lists agents in the server associated to the given user
	//
	// <p>Examples:</p>
	//
	// <pre>
	// grpcurl -plaintext -H 'cai-token: aimp' localhost:50055 ondewo.nlu.Agents.ListAgentsOfUser
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
		responseDeserialize: deserialize_ondewo_nlu_ListAgentsOfUserResponse
	},
	// Lists all agents in the server
	//
	// <p>Examples:</p>
	//
	// <pre>
	// grpcurl -plaintext -H 'cai-token: aimp' localhost:50055 ondewo.nlu.Agents.ListAllAgents
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
		responseDeserialize: deserialize_ondewo_nlu_ListAgentsResponse
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
		responseDeserialize: deserialize_google_protobuf_Empty
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
		responseDeserialize: deserialize_google_protobuf_Empty
	},
	listUsersInProject: {
		path: '/ondewo.nlu.Agents/ListUsersInProject',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_agent_pb.ListUsersInProjectRequest,
		responseType: ondewo_nlu_agent_pb.ListUsersInProjectResponse,
		requestSerialize: serialize_ondewo_nlu_ListUsersInProjectRequest,
		requestDeserialize: deserialize_ondewo_nlu_ListUsersInProjectRequest,
		responseSerialize: serialize_ondewo_nlu_ListUsersInProjectResponse,
		responseDeserialize: deserialize_ondewo_nlu_ListUsersInProjectResponse
	},
	getPlatformInfo: {
		path: '/ondewo.nlu.Agents/GetPlatformInfo',
		requestStream: false,
		responseStream: false,
		requestType: google_protobuf_empty_pb.Empty,
		responseType: ondewo_nlu_agent_pb.GetPlatformInfoResponse,
		requestSerialize: serialize_google_protobuf_Empty,
		requestDeserialize: deserialize_google_protobuf_Empty,
		responseSerialize: serialize_ondewo_nlu_GetPlatformInfoResponse,
		responseDeserialize: deserialize_ondewo_nlu_GetPlatformInfoResponse
	},
	listProjectPermissions: {
		path: '/ondewo.nlu.Agents/ListProjectPermissions',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_agent_pb.ListProjectPermissionsRequest,
		responseType: ondewo_nlu_agent_pb.ListProjectPermissionsResponse,
		requestSerialize: serialize_ondewo_nlu_ListProjectPermissionsRequest,
		requestDeserialize: deserialize_ondewo_nlu_ListProjectPermissionsRequest,
		responseSerialize: serialize_ondewo_nlu_ListProjectPermissionsResponse,
		responseDeserialize: deserialize_ondewo_nlu_ListProjectPermissionsResponse
	},
	// Trains the specified agent.
	//
	// Operation <response: [google.protobuf.Empty][google.protobuf.Empty],
	//            metadata: [google.protobuf.Struct][google.protobuf.Struct]>
	trainAgent: {
		path: '/ondewo.nlu.Agents/TrainAgent',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_agent_pb.TrainAgentRequest,
		responseType: ondewo_nlu_operations_pb.Operation,
		requestSerialize: serialize_ondewo_nlu_TrainAgentRequest,
		requestDeserialize: deserialize_ondewo_nlu_TrainAgentRequest,
		responseSerialize: serialize_ondewo_nlu_Operation,
		responseDeserialize: deserialize_ondewo_nlu_Operation
	},
	// Builds cache for the specified agent.
	//
	// Operation <response: [google.protobuf.Empty][google.protobuf.Empty],
	//            metadata: [google.protobuf.Struct][google.protobuf.Struct]>
	buildCache: {
		path: '/ondewo.nlu.Agents/BuildCache',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_agent_pb.BuildCacheRequest,
		responseType: ondewo_nlu_operations_pb.Operation,
		requestSerialize: serialize_ondewo_nlu_BuildCacheRequest,
		requestDeserialize: deserialize_ondewo_nlu_BuildCacheRequest,
		responseSerialize: serialize_ondewo_nlu_Operation,
		responseDeserialize: deserialize_ondewo_nlu_Operation
	},
	// Exports the specified agent to a ZIP file.
	//
	// Operation <response: [ExportAgentResponse][google.cloud.dialogflow.v2.ExportAgentResponse],
	//            metadata: [google.protobuf.Struct][google.protobuf.Struct]>
	exportAgent: {
		path: '/ondewo.nlu.Agents/ExportAgent',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_agent_pb.ExportAgentRequest,
		responseType: ondewo_nlu_operations_pb.Operation,
		requestSerialize: serialize_ondewo_nlu_ExportAgentRequest,
		requestDeserialize: deserialize_ondewo_nlu_ExportAgentRequest,
		responseSerialize: serialize_ondewo_nlu_Operation,
		responseDeserialize: deserialize_ondewo_nlu_Operation
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
		responseDeserialize: deserialize_ondewo_nlu_Operation
	},
	// Imports the specified agent from a ZIP file.
	//
	// Uploads new intents and entity types without deleting the existing ones.
	// Intents and entity types with the same name are replaced with the new
	// versions from ImportAgentRequest.
	//
	// Operation <response: [google.protobuf.Empty][google.protobuf.Empty],
	//            metadata: [google.protobuf.Struct][google.protobuf.Struct]>
	importAgent: {
		path: '/ondewo.nlu.Agents/ImportAgent',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_agent_pb.ImportAgentRequest,
		responseType: ondewo_nlu_operations_pb.Operation,
		requestSerialize: serialize_ondewo_nlu_ImportAgentRequest,
		requestDeserialize: deserialize_ondewo_nlu_ImportAgentRequest,
		responseSerialize: serialize_ondewo_nlu_Operation,
		responseDeserialize: deserialize_ondewo_nlu_Operation
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
		responseDeserialize: deserialize_ondewo_nlu_Operation
	},
	// Restores the specified agent from a ZIP file.
	//
	// Replaces the current agent version with a new one. All the intents and
	// entity types in the older version are deleted.
	//
	// Operation <response: [google.protobuf.Empty][google.protobuf.Empty],
	//            metadata: [google.protobuf.Struct][google.protobuf.Struct]>
	restoreAgent: {
		path: '/ondewo.nlu.Agents/RestoreAgent',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_agent_pb.RestoreAgentRequest,
		responseType: ondewo_nlu_operations_pb.Operation,
		requestSerialize: serialize_ondewo_nlu_RestoreAgentRequest,
		requestDeserialize: deserialize_ondewo_nlu_RestoreAgentRequest,
		responseSerialize: serialize_ondewo_nlu_Operation,
		responseDeserialize: deserialize_ondewo_nlu_Operation
	},
	getAgentStatistics: {
		path: '/ondewo.nlu.Agents/GetAgentStatistics',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_agent_pb.GetAgentStatisticsRequest,
		responseType: ondewo_nlu_agent_pb.GetAgentStatisticsResponse,
		requestSerialize: serialize_ondewo_nlu_GetAgentStatisticsRequest,
		requestDeserialize: deserialize_ondewo_nlu_GetAgentStatisticsRequest,
		responseSerialize: serialize_ondewo_nlu_GetAgentStatisticsResponse,
		responseDeserialize: deserialize_ondewo_nlu_GetAgentStatisticsResponse
	},
	setAgentStatus: {
		path: '/ondewo.nlu.Agents/SetAgentStatus',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_agent_pb.SetAgentStatusRequest,
		responseType: ondewo_nlu_agent_pb.Agent,
		requestSerialize: serialize_ondewo_nlu_SetAgentStatusRequest,
		requestDeserialize: deserialize_ondewo_nlu_SetAgentStatusRequest,
		responseSerialize: serialize_ondewo_nlu_Agent,
		responseDeserialize: deserialize_ondewo_nlu_Agent
	},
	setResources: {
		path: '/ondewo.nlu.Agents/SetResources',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_agent_pb.SetResourcesRequest,
		responseType: google_protobuf_empty_pb.Empty,
		requestSerialize: serialize_ondewo_nlu_SetResourcesRequest,
		requestDeserialize: deserialize_ondewo_nlu_SetResourcesRequest,
		responseSerialize: serialize_google_protobuf_Empty,
		responseDeserialize: deserialize_google_protobuf_Empty
	},
	deleteResources: {
		path: '/ondewo.nlu.Agents/DeleteResources',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_agent_pb.DeleteResourcesRequest,
		responseType: google_protobuf_empty_pb.Empty,
		requestSerialize: serialize_ondewo_nlu_DeleteResourcesRequest,
		requestDeserialize: deserialize_ondewo_nlu_DeleteResourcesRequest,
		responseSerialize: serialize_google_protobuf_Empty,
		responseDeserialize: deserialize_google_protobuf_Empty
	},
	exportResources: {
		path: '/ondewo.nlu.Agents/ExportResources',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_agent_pb.ExportResourcesRequest,
		responseType: ondewo_nlu_agent_pb.ExportResourcesResponse,
		requestSerialize: serialize_ondewo_nlu_ExportResourcesRequest,
		requestDeserialize: deserialize_ondewo_nlu_ExportResourcesRequest,
		responseSerialize: serialize_ondewo_nlu_ExportResourcesResponse,
		responseDeserialize: deserialize_ondewo_nlu_ExportResourcesResponse
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
		responseDeserialize: deserialize_ondewo_nlu_GetModelStatusesResponse
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
		responseDeserialize: deserialize_ondewo_nlu_PlatformMapping
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
		responseDeserialize: deserialize_ondewo_nlu_PlatformMapping
	}
});

exports.AgentsClient = grpc.makeGenericClientConstructor(AgentsService);
