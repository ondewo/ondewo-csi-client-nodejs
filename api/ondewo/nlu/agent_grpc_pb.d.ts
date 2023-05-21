// package: ondewo.nlu
// file: ondewo/nlu/agent.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from 'grpc';
import * as ondewo_nlu_agent_pb from '../../ondewo/nlu/agent_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as ondewo_nlu_common_pb from '../../ondewo/nlu/common_pb';
import * as ondewo_nlu_intent_pb from '../../ondewo/nlu/intent_pb';
import * as ondewo_nlu_user_pb from '../../ondewo/nlu/user_pb';
import * as ondewo_nlu_project_role_pb from '../../ondewo/nlu/project_role_pb';
import * as ondewo_nlu_operations_pb from '../../ondewo/nlu/operations_pb';
import * as ondewo_nlu_session_pb from '../../ondewo/nlu/session_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

interface IAgentsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
	createAgent: IAgentsService_ICreateAgent;
	updateAgent: IAgentsService_IUpdateAgent;
	getAgent: IAgentsService_IGetAgent;
	deleteAgent: IAgentsService_IDeleteAgent;
	deleteAllAgents: IAgentsService_IDeleteAllAgents;
	listAgents: IAgentsService_IListAgents;
	listAgentsOfUser: IAgentsService_IListAgentsOfUser;
	listAllAgents: IAgentsService_IListAllAgents;
	addUserToProject: IAgentsService_IAddUserToProject;
	removeUserFromProject: IAgentsService_IRemoveUserFromProject;
	listUsersInProject: IAgentsService_IListUsersInProject;
	getPlatformInfo: IAgentsService_IGetPlatformInfo;
	listProjectPermissions: IAgentsService_IListProjectPermissions;
	trainAgent: IAgentsService_ITrainAgent;
	buildCache: IAgentsService_IBuildCache;
	exportAgent: IAgentsService_IExportAgent;
	exportBenchmarkAgent: IAgentsService_IExportBenchmarkAgent;
	importAgent: IAgentsService_IImportAgent;
	optimizeRankingMatch: IAgentsService_IOptimizeRankingMatch;
	restoreAgent: IAgentsService_IRestoreAgent;
	getAgentStatistics: IAgentsService_IGetAgentStatistics;
	getSessionsStatistics: IAgentsService_IGetSessionsStatistics;
	setAgentStatus: IAgentsService_ISetAgentStatus;
	setResources: IAgentsService_ISetResources;
	deleteResources: IAgentsService_IDeleteResources;
	exportResources: IAgentsService_IExportResources;
	getModelStatuses: IAgentsService_IGetModelStatuses;
	getPlatformMapping: IAgentsService_IGetPlatformMapping;
	setPlatformMapping: IAgentsService_ISetPlatformMapping;
	getFullTextSearchEntityType: IAgentsService_IGetFullTextSearchEntityType;
	getFullTextSearchEntity: IAgentsService_IGetFullTextSearchEntity;
	getFullTextSearchEntitySynonym: IAgentsService_IGetFullTextSearchEntitySynonym;
	getFullTextSearchIntent: IAgentsService_IGetFullTextSearchIntent;
	getFullTextSearchIntentContextIn: IAgentsService_IGetFullTextSearchIntentContextIn;
	getFullTextSearchIntentContextOut: IAgentsService_IGetFullTextSearchIntentContextOut;
	getFullTextSearchIntentUsersays: IAgentsService_IGetFullTextSearchIntentUsersays;
	getFullTextSearchIntentTags: IAgentsService_IGetFullTextSearchIntentTags;
	getFullTextSearchIntentResponse: IAgentsService_IGetFullTextSearchIntentResponse;
	getFullTextSearchIntentParameters: IAgentsService_IGetFullTextSearchIntentParameters;
	reindexAgent: IAgentsService_IReindexAgent;
}

interface IAgentsService_ICreateAgent
	extends grpc.MethodDefinition<ondewo_nlu_agent_pb.CreateAgentRequest, ondewo_nlu_agent_pb.Agent> {
	path: '/ondewo.nlu.Agents/CreateAgent';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_agent_pb.CreateAgentRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.CreateAgentRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_agent_pb.Agent>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.Agent>;
}
interface IAgentsService_IUpdateAgent
	extends grpc.MethodDefinition<ondewo_nlu_agent_pb.UpdateAgentRequest, ondewo_nlu_agent_pb.Agent> {
	path: '/ondewo.nlu.Agents/UpdateAgent';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_agent_pb.UpdateAgentRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.UpdateAgentRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_agent_pb.Agent>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.Agent>;
}
interface IAgentsService_IGetAgent
	extends grpc.MethodDefinition<ondewo_nlu_agent_pb.GetAgentRequest, ondewo_nlu_agent_pb.Agent> {
	path: '/ondewo.nlu.Agents/GetAgent';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_agent_pb.GetAgentRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.GetAgentRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_agent_pb.Agent>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.Agent>;
}
interface IAgentsService_IDeleteAgent
	extends grpc.MethodDefinition<ondewo_nlu_agent_pb.DeleteAgentRequest, google_protobuf_empty_pb.Empty> {
	path: '/ondewo.nlu.Agents/DeleteAgent';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_agent_pb.DeleteAgentRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.DeleteAgentRequest>;
	responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
	responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IAgentsService_IDeleteAllAgents
	extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty> {
	path: '/ondewo.nlu.Agents/DeleteAllAgents';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
	requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
	responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
	responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IAgentsService_IListAgents
	extends grpc.MethodDefinition<ondewo_nlu_agent_pb.ListAgentsRequest, ondewo_nlu_agent_pb.ListAgentsResponse> {
	path: '/ondewo.nlu.Agents/ListAgents';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_agent_pb.ListAgentsRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.ListAgentsRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_agent_pb.ListAgentsResponse>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.ListAgentsResponse>;
}
interface IAgentsService_IListAgentsOfUser
	extends grpc.MethodDefinition<ondewo_nlu_agent_pb.ListAgentsRequest, ondewo_nlu_agent_pb.ListAgentsOfUserResponse> {
	path: '/ondewo.nlu.Agents/ListAgentsOfUser';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_agent_pb.ListAgentsRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.ListAgentsRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_agent_pb.ListAgentsOfUserResponse>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.ListAgentsOfUserResponse>;
}
interface IAgentsService_IListAllAgents
	extends grpc.MethodDefinition<ondewo_nlu_agent_pb.ListAgentsRequest, ondewo_nlu_agent_pb.ListAgentsResponse> {
	path: '/ondewo.nlu.Agents/ListAllAgents';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_agent_pb.ListAgentsRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.ListAgentsRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_agent_pb.ListAgentsResponse>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.ListAgentsResponse>;
}
interface IAgentsService_IAddUserToProject
	extends grpc.MethodDefinition<ondewo_nlu_agent_pb.AddUserToProjectRequest, google_protobuf_empty_pb.Empty> {
	path: '/ondewo.nlu.Agents/AddUserToProject';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_agent_pb.AddUserToProjectRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.AddUserToProjectRequest>;
	responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
	responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IAgentsService_IRemoveUserFromProject
	extends grpc.MethodDefinition<ondewo_nlu_agent_pb.RemoveUserFromProjectRequest, google_protobuf_empty_pb.Empty> {
	path: '/ondewo.nlu.Agents/RemoveUserFromProject';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_agent_pb.RemoveUserFromProjectRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.RemoveUserFromProjectRequest>;
	responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
	responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IAgentsService_IListUsersInProject
	extends grpc.MethodDefinition<
		ondewo_nlu_agent_pb.ListUsersInProjectRequest,
		ondewo_nlu_agent_pb.ListUsersInProjectResponse
	> {
	path: '/ondewo.nlu.Agents/ListUsersInProject';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_agent_pb.ListUsersInProjectRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.ListUsersInProjectRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_agent_pb.ListUsersInProjectResponse>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.ListUsersInProjectResponse>;
}
interface IAgentsService_IGetPlatformInfo
	extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, ondewo_nlu_agent_pb.GetPlatformInfoResponse> {
	path: '/ondewo.nlu.Agents/GetPlatformInfo';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
	requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
	responseSerialize: grpc.serialize<ondewo_nlu_agent_pb.GetPlatformInfoResponse>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.GetPlatformInfoResponse>;
}
interface IAgentsService_IListProjectPermissions
	extends grpc.MethodDefinition<
		ondewo_nlu_agent_pb.ListProjectPermissionsRequest,
		ondewo_nlu_agent_pb.ListProjectPermissionsResponse
	> {
	path: '/ondewo.nlu.Agents/ListProjectPermissions';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_agent_pb.ListProjectPermissionsRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.ListProjectPermissionsRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_agent_pb.ListProjectPermissionsResponse>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.ListProjectPermissionsResponse>;
}
interface IAgentsService_ITrainAgent
	extends grpc.MethodDefinition<ondewo_nlu_agent_pb.TrainAgentRequest, ondewo_nlu_operations_pb.Operation> {
	path: '/ondewo.nlu.Agents/TrainAgent';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_agent_pb.TrainAgentRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.TrainAgentRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_operations_pb.Operation>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_operations_pb.Operation>;
}
interface IAgentsService_IBuildCache
	extends grpc.MethodDefinition<ondewo_nlu_agent_pb.BuildCacheRequest, ondewo_nlu_operations_pb.Operation> {
	path: '/ondewo.nlu.Agents/BuildCache';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_agent_pb.BuildCacheRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.BuildCacheRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_operations_pb.Operation>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_operations_pb.Operation>;
}
interface IAgentsService_IExportAgent
	extends grpc.MethodDefinition<ondewo_nlu_agent_pb.ExportAgentRequest, ondewo_nlu_operations_pb.Operation> {
	path: '/ondewo.nlu.Agents/ExportAgent';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_agent_pb.ExportAgentRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.ExportAgentRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_operations_pb.Operation>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_operations_pb.Operation>;
}
interface IAgentsService_IExportBenchmarkAgent
	extends grpc.MethodDefinition<ondewo_nlu_agent_pb.ExportBenchmarkAgentRequest, ondewo_nlu_operations_pb.Operation> {
	path: '/ondewo.nlu.Agents/ExportBenchmarkAgent';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_agent_pb.ExportBenchmarkAgentRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.ExportBenchmarkAgentRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_operations_pb.Operation>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_operations_pb.Operation>;
}
interface IAgentsService_IImportAgent
	extends grpc.MethodDefinition<ondewo_nlu_agent_pb.ImportAgentRequest, ondewo_nlu_operations_pb.Operation> {
	path: '/ondewo.nlu.Agents/ImportAgent';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_agent_pb.ImportAgentRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.ImportAgentRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_operations_pb.Operation>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_operations_pb.Operation>;
}
interface IAgentsService_IOptimizeRankingMatch
	extends grpc.MethodDefinition<ondewo_nlu_agent_pb.OptimizeRankingMatchRequest, ondewo_nlu_operations_pb.Operation> {
	path: '/ondewo.nlu.Agents/OptimizeRankingMatch';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_agent_pb.OptimizeRankingMatchRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.OptimizeRankingMatchRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_operations_pb.Operation>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_operations_pb.Operation>;
}
interface IAgentsService_IRestoreAgent
	extends grpc.MethodDefinition<ondewo_nlu_agent_pb.RestoreAgentRequest, ondewo_nlu_operations_pb.Operation> {
	path: '/ondewo.nlu.Agents/RestoreAgent';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_agent_pb.RestoreAgentRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.RestoreAgentRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_operations_pb.Operation>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_operations_pb.Operation>;
}
interface IAgentsService_IGetAgentStatistics
	extends grpc.MethodDefinition<
		ondewo_nlu_agent_pb.GetAgentStatisticsRequest,
		ondewo_nlu_agent_pb.GetAgentStatisticsResponse
	> {
	path: '/ondewo.nlu.Agents/GetAgentStatistics';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_agent_pb.GetAgentStatisticsRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.GetAgentStatisticsRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_agent_pb.GetAgentStatisticsResponse>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.GetAgentStatisticsResponse>;
}
interface IAgentsService_IGetSessionsStatistics
	extends grpc.MethodDefinition<
		ondewo_nlu_agent_pb.GetSessionsStatisticsRequest,
		ondewo_nlu_agent_pb.GetSessionsStatisticsResponse
	> {
	path: '/ondewo.nlu.Agents/GetSessionsStatistics';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_agent_pb.GetSessionsStatisticsRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.GetSessionsStatisticsRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_agent_pb.GetSessionsStatisticsResponse>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.GetSessionsStatisticsResponse>;
}
interface IAgentsService_ISetAgentStatus
	extends grpc.MethodDefinition<ondewo_nlu_agent_pb.SetAgentStatusRequest, ondewo_nlu_agent_pb.Agent> {
	path: '/ondewo.nlu.Agents/SetAgentStatus';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_agent_pb.SetAgentStatusRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.SetAgentStatusRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_agent_pb.Agent>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.Agent>;
}
interface IAgentsService_ISetResources
	extends grpc.MethodDefinition<ondewo_nlu_agent_pb.SetResourcesRequest, google_protobuf_empty_pb.Empty> {
	path: '/ondewo.nlu.Agents/SetResources';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_agent_pb.SetResourcesRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.SetResourcesRequest>;
	responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
	responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IAgentsService_IDeleteResources
	extends grpc.MethodDefinition<ondewo_nlu_agent_pb.DeleteResourcesRequest, google_protobuf_empty_pb.Empty> {
	path: '/ondewo.nlu.Agents/DeleteResources';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_agent_pb.DeleteResourcesRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.DeleteResourcesRequest>;
	responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
	responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IAgentsService_IExportResources
	extends grpc.MethodDefinition<
		ondewo_nlu_agent_pb.ExportResourcesRequest,
		ondewo_nlu_agent_pb.ExportResourcesResponse
	> {
	path: '/ondewo.nlu.Agents/ExportResources';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_agent_pb.ExportResourcesRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.ExportResourcesRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_agent_pb.ExportResourcesResponse>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.ExportResourcesResponse>;
}
interface IAgentsService_IGetModelStatuses
	extends grpc.MethodDefinition<
		ondewo_nlu_agent_pb.GetModelStatusesRequest,
		ondewo_nlu_agent_pb.GetModelStatusesResponse
	> {
	path: '/ondewo.nlu.Agents/GetModelStatuses';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_agent_pb.GetModelStatusesRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.GetModelStatusesRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_agent_pb.GetModelStatusesResponse>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.GetModelStatusesResponse>;
}
interface IAgentsService_IGetPlatformMapping
	extends grpc.MethodDefinition<ondewo_nlu_agent_pb.GetPlatformMappingRequest, ondewo_nlu_agent_pb.PlatformMapping> {
	path: '/ondewo.nlu.Agents/GetPlatformMapping';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_agent_pb.GetPlatformMappingRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.GetPlatformMappingRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_agent_pb.PlatformMapping>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.PlatformMapping>;
}
interface IAgentsService_ISetPlatformMapping
	extends grpc.MethodDefinition<ondewo_nlu_agent_pb.PlatformMapping, ondewo_nlu_agent_pb.PlatformMapping> {
	path: '/ondewo.nlu.Agents/SetPlatformMapping';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_agent_pb.PlatformMapping>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.PlatformMapping>;
	responseSerialize: grpc.serialize<ondewo_nlu_agent_pb.PlatformMapping>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.PlatformMapping>;
}
interface IAgentsService_IGetFullTextSearchEntityType
	extends grpc.MethodDefinition<
		ondewo_nlu_agent_pb.FullTextSearchRequest,
		ondewo_nlu_agent_pb.FullTextSearchResponseEntityType
	> {
	path: '/ondewo.nlu.Agents/GetFullTextSearchEntityType';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_agent_pb.FullTextSearchRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.FullTextSearchRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_agent_pb.FullTextSearchResponseEntityType>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.FullTextSearchResponseEntityType>;
}
interface IAgentsService_IGetFullTextSearchEntity
	extends grpc.MethodDefinition<
		ondewo_nlu_agent_pb.FullTextSearchRequest,
		ondewo_nlu_agent_pb.FullTextSearchResponseEntity
	> {
	path: '/ondewo.nlu.Agents/GetFullTextSearchEntity';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_agent_pb.FullTextSearchRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.FullTextSearchRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_agent_pb.FullTextSearchResponseEntity>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.FullTextSearchResponseEntity>;
}
interface IAgentsService_IGetFullTextSearchEntitySynonym
	extends grpc.MethodDefinition<
		ondewo_nlu_agent_pb.FullTextSearchRequest,
		ondewo_nlu_agent_pb.FullTextSearchResponseEntitySynonym
	> {
	path: '/ondewo.nlu.Agents/GetFullTextSearchEntitySynonym';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_agent_pb.FullTextSearchRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.FullTextSearchRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_agent_pb.FullTextSearchResponseEntitySynonym>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.FullTextSearchResponseEntitySynonym>;
}
interface IAgentsService_IGetFullTextSearchIntent
	extends grpc.MethodDefinition<
		ondewo_nlu_agent_pb.FullTextSearchRequest,
		ondewo_nlu_agent_pb.FullTextSearchResponseIntent
	> {
	path: '/ondewo.nlu.Agents/GetFullTextSearchIntent';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_agent_pb.FullTextSearchRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.FullTextSearchRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_agent_pb.FullTextSearchResponseIntent>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.FullTextSearchResponseIntent>;
}
interface IAgentsService_IGetFullTextSearchIntentContextIn
	extends grpc.MethodDefinition<
		ondewo_nlu_agent_pb.FullTextSearchRequest,
		ondewo_nlu_agent_pb.FullTextSearchResponseIntentContextIn
	> {
	path: '/ondewo.nlu.Agents/GetFullTextSearchIntentContextIn';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_agent_pb.FullTextSearchRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.FullTextSearchRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_agent_pb.FullTextSearchResponseIntentContextIn>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.FullTextSearchResponseIntentContextIn>;
}
interface IAgentsService_IGetFullTextSearchIntentContextOut
	extends grpc.MethodDefinition<
		ondewo_nlu_agent_pb.FullTextSearchRequest,
		ondewo_nlu_agent_pb.FullTextSearchResponseIntentContextOut
	> {
	path: '/ondewo.nlu.Agents/GetFullTextSearchIntentContextOut';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_agent_pb.FullTextSearchRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.FullTextSearchRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_agent_pb.FullTextSearchResponseIntentContextOut>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.FullTextSearchResponseIntentContextOut>;
}
interface IAgentsService_IGetFullTextSearchIntentUsersays
	extends grpc.MethodDefinition<
		ondewo_nlu_agent_pb.FullTextSearchRequest,
		ondewo_nlu_agent_pb.FullTextSearchResponseIntentUsersays
	> {
	path: '/ondewo.nlu.Agents/GetFullTextSearchIntentUsersays';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_agent_pb.FullTextSearchRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.FullTextSearchRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_agent_pb.FullTextSearchResponseIntentUsersays>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.FullTextSearchResponseIntentUsersays>;
}
interface IAgentsService_IGetFullTextSearchIntentTags
	extends grpc.MethodDefinition<
		ondewo_nlu_agent_pb.FullTextSearchRequest,
		ondewo_nlu_agent_pb.FullTextSearchResponseIntentTags
	> {
	path: '/ondewo.nlu.Agents/GetFullTextSearchIntentTags';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_agent_pb.FullTextSearchRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.FullTextSearchRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_agent_pb.FullTextSearchResponseIntentTags>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.FullTextSearchResponseIntentTags>;
}
interface IAgentsService_IGetFullTextSearchIntentResponse
	extends grpc.MethodDefinition<
		ondewo_nlu_agent_pb.FullTextSearchRequest,
		ondewo_nlu_agent_pb.FullTextSearchResponseIntentResponse
	> {
	path: '/ondewo.nlu.Agents/GetFullTextSearchIntentResponse';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_agent_pb.FullTextSearchRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.FullTextSearchRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_agent_pb.FullTextSearchResponseIntentResponse>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.FullTextSearchResponseIntentResponse>;
}
interface IAgentsService_IGetFullTextSearchIntentParameters
	extends grpc.MethodDefinition<
		ondewo_nlu_agent_pb.FullTextSearchRequest,
		ondewo_nlu_agent_pb.FullTextSearchResponseIntentParameters
	> {
	path: '/ondewo.nlu.Agents/GetFullTextSearchIntentParameters';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_agent_pb.FullTextSearchRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.FullTextSearchRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_agent_pb.FullTextSearchResponseIntentParameters>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.FullTextSearchResponseIntentParameters>;
}
interface IAgentsService_IReindexAgent
	extends grpc.MethodDefinition<ondewo_nlu_agent_pb.ReindexAgentRequest, ondewo_nlu_operations_pb.Operation> {
	path: '/ondewo.nlu.Agents/ReindexAgent';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_agent_pb.ReindexAgentRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_agent_pb.ReindexAgentRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_operations_pb.Operation>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_operations_pb.Operation>;
}

export const AgentsService: IAgentsService;

export interface IAgentsServer {
	createAgent: grpc.handleUnaryCall<ondewo_nlu_agent_pb.CreateAgentRequest, ondewo_nlu_agent_pb.Agent>;
	updateAgent: grpc.handleUnaryCall<ondewo_nlu_agent_pb.UpdateAgentRequest, ondewo_nlu_agent_pb.Agent>;
	getAgent: grpc.handleUnaryCall<ondewo_nlu_agent_pb.GetAgentRequest, ondewo_nlu_agent_pb.Agent>;
	deleteAgent: grpc.handleUnaryCall<ondewo_nlu_agent_pb.DeleteAgentRequest, google_protobuf_empty_pb.Empty>;
	deleteAllAgents: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty>;
	listAgents: grpc.handleUnaryCall<ondewo_nlu_agent_pb.ListAgentsRequest, ondewo_nlu_agent_pb.ListAgentsResponse>;
	listAgentsOfUser: grpc.handleUnaryCall<
		ondewo_nlu_agent_pb.ListAgentsRequest,
		ondewo_nlu_agent_pb.ListAgentsOfUserResponse
	>;
	listAllAgents: grpc.handleUnaryCall<ondewo_nlu_agent_pb.ListAgentsRequest, ondewo_nlu_agent_pb.ListAgentsResponse>;
	addUserToProject: grpc.handleUnaryCall<ondewo_nlu_agent_pb.AddUserToProjectRequest, google_protobuf_empty_pb.Empty>;
	removeUserFromProject: grpc.handleUnaryCall<
		ondewo_nlu_agent_pb.RemoveUserFromProjectRequest,
		google_protobuf_empty_pb.Empty
	>;
	listUsersInProject: grpc.handleUnaryCall<
		ondewo_nlu_agent_pb.ListUsersInProjectRequest,
		ondewo_nlu_agent_pb.ListUsersInProjectResponse
	>;
	getPlatformInfo: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, ondewo_nlu_agent_pb.GetPlatformInfoResponse>;
	listProjectPermissions: grpc.handleUnaryCall<
		ondewo_nlu_agent_pb.ListProjectPermissionsRequest,
		ondewo_nlu_agent_pb.ListProjectPermissionsResponse
	>;
	trainAgent: grpc.handleUnaryCall<ondewo_nlu_agent_pb.TrainAgentRequest, ondewo_nlu_operations_pb.Operation>;
	buildCache: grpc.handleUnaryCall<ondewo_nlu_agent_pb.BuildCacheRequest, ondewo_nlu_operations_pb.Operation>;
	exportAgent: grpc.handleUnaryCall<ondewo_nlu_agent_pb.ExportAgentRequest, ondewo_nlu_operations_pb.Operation>;
	exportBenchmarkAgent: grpc.handleUnaryCall<
		ondewo_nlu_agent_pb.ExportBenchmarkAgentRequest,
		ondewo_nlu_operations_pb.Operation
	>;
	importAgent: grpc.handleUnaryCall<ondewo_nlu_agent_pb.ImportAgentRequest, ondewo_nlu_operations_pb.Operation>;
	optimizeRankingMatch: grpc.handleUnaryCall<
		ondewo_nlu_agent_pb.OptimizeRankingMatchRequest,
		ondewo_nlu_operations_pb.Operation
	>;
	restoreAgent: grpc.handleUnaryCall<ondewo_nlu_agent_pb.RestoreAgentRequest, ondewo_nlu_operations_pb.Operation>;
	getAgentStatistics: grpc.handleUnaryCall<
		ondewo_nlu_agent_pb.GetAgentStatisticsRequest,
		ondewo_nlu_agent_pb.GetAgentStatisticsResponse
	>;
	getSessionsStatistics: grpc.handleUnaryCall<
		ondewo_nlu_agent_pb.GetSessionsStatisticsRequest,
		ondewo_nlu_agent_pb.GetSessionsStatisticsResponse
	>;
	setAgentStatus: grpc.handleUnaryCall<ondewo_nlu_agent_pb.SetAgentStatusRequest, ondewo_nlu_agent_pb.Agent>;
	setResources: grpc.handleUnaryCall<ondewo_nlu_agent_pb.SetResourcesRequest, google_protobuf_empty_pb.Empty>;
	deleteResources: grpc.handleUnaryCall<ondewo_nlu_agent_pb.DeleteResourcesRequest, google_protobuf_empty_pb.Empty>;
	exportResources: grpc.handleUnaryCall<
		ondewo_nlu_agent_pb.ExportResourcesRequest,
		ondewo_nlu_agent_pb.ExportResourcesResponse
	>;
	getModelStatuses: grpc.handleUnaryCall<
		ondewo_nlu_agent_pb.GetModelStatusesRequest,
		ondewo_nlu_agent_pb.GetModelStatusesResponse
	>;
	getPlatformMapping: grpc.handleUnaryCall<
		ondewo_nlu_agent_pb.GetPlatformMappingRequest,
		ondewo_nlu_agent_pb.PlatformMapping
	>;
	setPlatformMapping: grpc.handleUnaryCall<ondewo_nlu_agent_pb.PlatformMapping, ondewo_nlu_agent_pb.PlatformMapping>;
	getFullTextSearchEntityType: grpc.handleUnaryCall<
		ondewo_nlu_agent_pb.FullTextSearchRequest,
		ondewo_nlu_agent_pb.FullTextSearchResponseEntityType
	>;
	getFullTextSearchEntity: grpc.handleUnaryCall<
		ondewo_nlu_agent_pb.FullTextSearchRequest,
		ondewo_nlu_agent_pb.FullTextSearchResponseEntity
	>;
	getFullTextSearchEntitySynonym: grpc.handleUnaryCall<
		ondewo_nlu_agent_pb.FullTextSearchRequest,
		ondewo_nlu_agent_pb.FullTextSearchResponseEntitySynonym
	>;
	getFullTextSearchIntent: grpc.handleUnaryCall<
		ondewo_nlu_agent_pb.FullTextSearchRequest,
		ondewo_nlu_agent_pb.FullTextSearchResponseIntent
	>;
	getFullTextSearchIntentContextIn: grpc.handleUnaryCall<
		ondewo_nlu_agent_pb.FullTextSearchRequest,
		ondewo_nlu_agent_pb.FullTextSearchResponseIntentContextIn
	>;
	getFullTextSearchIntentContextOut: grpc.handleUnaryCall<
		ondewo_nlu_agent_pb.FullTextSearchRequest,
		ondewo_nlu_agent_pb.FullTextSearchResponseIntentContextOut
	>;
	getFullTextSearchIntentUsersays: grpc.handleUnaryCall<
		ondewo_nlu_agent_pb.FullTextSearchRequest,
		ondewo_nlu_agent_pb.FullTextSearchResponseIntentUsersays
	>;
	getFullTextSearchIntentTags: grpc.handleUnaryCall<
		ondewo_nlu_agent_pb.FullTextSearchRequest,
		ondewo_nlu_agent_pb.FullTextSearchResponseIntentTags
	>;
	getFullTextSearchIntentResponse: grpc.handleUnaryCall<
		ondewo_nlu_agent_pb.FullTextSearchRequest,
		ondewo_nlu_agent_pb.FullTextSearchResponseIntentResponse
	>;
	getFullTextSearchIntentParameters: grpc.handleUnaryCall<
		ondewo_nlu_agent_pb.FullTextSearchRequest,
		ondewo_nlu_agent_pb.FullTextSearchResponseIntentParameters
	>;
	reindexAgent: grpc.handleUnaryCall<ondewo_nlu_agent_pb.ReindexAgentRequest, ondewo_nlu_operations_pb.Operation>;
}

export interface IAgentsClient {
	createAgent(
		request: ondewo_nlu_agent_pb.CreateAgentRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.Agent) => void
	): grpc.ClientUnaryCall;
	createAgent(
		request: ondewo_nlu_agent_pb.CreateAgentRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.Agent) => void
	): grpc.ClientUnaryCall;
	createAgent(
		request: ondewo_nlu_agent_pb.CreateAgentRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.Agent) => void
	): grpc.ClientUnaryCall;
	updateAgent(
		request: ondewo_nlu_agent_pb.UpdateAgentRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.Agent) => void
	): grpc.ClientUnaryCall;
	updateAgent(
		request: ondewo_nlu_agent_pb.UpdateAgentRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.Agent) => void
	): grpc.ClientUnaryCall;
	updateAgent(
		request: ondewo_nlu_agent_pb.UpdateAgentRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.Agent) => void
	): grpc.ClientUnaryCall;
	getAgent(
		request: ondewo_nlu_agent_pb.GetAgentRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.Agent) => void
	): grpc.ClientUnaryCall;
	getAgent(
		request: ondewo_nlu_agent_pb.GetAgentRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.Agent) => void
	): grpc.ClientUnaryCall;
	getAgent(
		request: ondewo_nlu_agent_pb.GetAgentRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.Agent) => void
	): grpc.ClientUnaryCall;
	deleteAgent(
		request: ondewo_nlu_agent_pb.DeleteAgentRequest,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	deleteAgent(
		request: ondewo_nlu_agent_pb.DeleteAgentRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	deleteAgent(
		request: ondewo_nlu_agent_pb.DeleteAgentRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	deleteAllAgents(
		request: google_protobuf_empty_pb.Empty,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	deleteAllAgents(
		request: google_protobuf_empty_pb.Empty,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	deleteAllAgents(
		request: google_protobuf_empty_pb.Empty,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	listAgents(
		request: ondewo_nlu_agent_pb.ListAgentsRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.ListAgentsResponse) => void
	): grpc.ClientUnaryCall;
	listAgents(
		request: ondewo_nlu_agent_pb.ListAgentsRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.ListAgentsResponse) => void
	): grpc.ClientUnaryCall;
	listAgents(
		request: ondewo_nlu_agent_pb.ListAgentsRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.ListAgentsResponse) => void
	): grpc.ClientUnaryCall;
	listAgentsOfUser(
		request: ondewo_nlu_agent_pb.ListAgentsRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.ListAgentsOfUserResponse) => void
	): grpc.ClientUnaryCall;
	listAgentsOfUser(
		request: ondewo_nlu_agent_pb.ListAgentsRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.ListAgentsOfUserResponse) => void
	): grpc.ClientUnaryCall;
	listAgentsOfUser(
		request: ondewo_nlu_agent_pb.ListAgentsRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.ListAgentsOfUserResponse) => void
	): grpc.ClientUnaryCall;
	listAllAgents(
		request: ondewo_nlu_agent_pb.ListAgentsRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.ListAgentsResponse) => void
	): grpc.ClientUnaryCall;
	listAllAgents(
		request: ondewo_nlu_agent_pb.ListAgentsRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.ListAgentsResponse) => void
	): grpc.ClientUnaryCall;
	listAllAgents(
		request: ondewo_nlu_agent_pb.ListAgentsRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.ListAgentsResponse) => void
	): grpc.ClientUnaryCall;
	addUserToProject(
		request: ondewo_nlu_agent_pb.AddUserToProjectRequest,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	addUserToProject(
		request: ondewo_nlu_agent_pb.AddUserToProjectRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	addUserToProject(
		request: ondewo_nlu_agent_pb.AddUserToProjectRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	removeUserFromProject(
		request: ondewo_nlu_agent_pb.RemoveUserFromProjectRequest,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	removeUserFromProject(
		request: ondewo_nlu_agent_pb.RemoveUserFromProjectRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	removeUserFromProject(
		request: ondewo_nlu_agent_pb.RemoveUserFromProjectRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	listUsersInProject(
		request: ondewo_nlu_agent_pb.ListUsersInProjectRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.ListUsersInProjectResponse) => void
	): grpc.ClientUnaryCall;
	listUsersInProject(
		request: ondewo_nlu_agent_pb.ListUsersInProjectRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.ListUsersInProjectResponse) => void
	): grpc.ClientUnaryCall;
	listUsersInProject(
		request: ondewo_nlu_agent_pb.ListUsersInProjectRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.ListUsersInProjectResponse) => void
	): grpc.ClientUnaryCall;
	getPlatformInfo(
		request: google_protobuf_empty_pb.Empty,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.GetPlatformInfoResponse) => void
	): grpc.ClientUnaryCall;
	getPlatformInfo(
		request: google_protobuf_empty_pb.Empty,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.GetPlatformInfoResponse) => void
	): grpc.ClientUnaryCall;
	getPlatformInfo(
		request: google_protobuf_empty_pb.Empty,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.GetPlatformInfoResponse) => void
	): grpc.ClientUnaryCall;
	listProjectPermissions(
		request: ondewo_nlu_agent_pb.ListProjectPermissionsRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.ListProjectPermissionsResponse) => void
	): grpc.ClientUnaryCall;
	listProjectPermissions(
		request: ondewo_nlu_agent_pb.ListProjectPermissionsRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.ListProjectPermissionsResponse) => void
	): grpc.ClientUnaryCall;
	listProjectPermissions(
		request: ondewo_nlu_agent_pb.ListProjectPermissionsRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.ListProjectPermissionsResponse) => void
	): grpc.ClientUnaryCall;
	trainAgent(
		request: ondewo_nlu_agent_pb.TrainAgentRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	trainAgent(
		request: ondewo_nlu_agent_pb.TrainAgentRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	trainAgent(
		request: ondewo_nlu_agent_pb.TrainAgentRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	buildCache(
		request: ondewo_nlu_agent_pb.BuildCacheRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	buildCache(
		request: ondewo_nlu_agent_pb.BuildCacheRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	buildCache(
		request: ondewo_nlu_agent_pb.BuildCacheRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	exportAgent(
		request: ondewo_nlu_agent_pb.ExportAgentRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	exportAgent(
		request: ondewo_nlu_agent_pb.ExportAgentRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	exportAgent(
		request: ondewo_nlu_agent_pb.ExportAgentRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	exportBenchmarkAgent(
		request: ondewo_nlu_agent_pb.ExportBenchmarkAgentRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	exportBenchmarkAgent(
		request: ondewo_nlu_agent_pb.ExportBenchmarkAgentRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	exportBenchmarkAgent(
		request: ondewo_nlu_agent_pb.ExportBenchmarkAgentRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	importAgent(
		request: ondewo_nlu_agent_pb.ImportAgentRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	importAgent(
		request: ondewo_nlu_agent_pb.ImportAgentRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	importAgent(
		request: ondewo_nlu_agent_pb.ImportAgentRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	optimizeRankingMatch(
		request: ondewo_nlu_agent_pb.OptimizeRankingMatchRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	optimizeRankingMatch(
		request: ondewo_nlu_agent_pb.OptimizeRankingMatchRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	optimizeRankingMatch(
		request: ondewo_nlu_agent_pb.OptimizeRankingMatchRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	restoreAgent(
		request: ondewo_nlu_agent_pb.RestoreAgentRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	restoreAgent(
		request: ondewo_nlu_agent_pb.RestoreAgentRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	restoreAgent(
		request: ondewo_nlu_agent_pb.RestoreAgentRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	getAgentStatistics(
		request: ondewo_nlu_agent_pb.GetAgentStatisticsRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.GetAgentStatisticsResponse) => void
	): grpc.ClientUnaryCall;
	getAgentStatistics(
		request: ondewo_nlu_agent_pb.GetAgentStatisticsRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.GetAgentStatisticsResponse) => void
	): grpc.ClientUnaryCall;
	getAgentStatistics(
		request: ondewo_nlu_agent_pb.GetAgentStatisticsRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.GetAgentStatisticsResponse) => void
	): grpc.ClientUnaryCall;
	getSessionsStatistics(
		request: ondewo_nlu_agent_pb.GetSessionsStatisticsRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.GetSessionsStatisticsResponse) => void
	): grpc.ClientUnaryCall;
	getSessionsStatistics(
		request: ondewo_nlu_agent_pb.GetSessionsStatisticsRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.GetSessionsStatisticsResponse) => void
	): grpc.ClientUnaryCall;
	getSessionsStatistics(
		request: ondewo_nlu_agent_pb.GetSessionsStatisticsRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.GetSessionsStatisticsResponse) => void
	): grpc.ClientUnaryCall;
	setAgentStatus(
		request: ondewo_nlu_agent_pb.SetAgentStatusRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.Agent) => void
	): grpc.ClientUnaryCall;
	setAgentStatus(
		request: ondewo_nlu_agent_pb.SetAgentStatusRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.Agent) => void
	): grpc.ClientUnaryCall;
	setAgentStatus(
		request: ondewo_nlu_agent_pb.SetAgentStatusRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.Agent) => void
	): grpc.ClientUnaryCall;
	setResources(
		request: ondewo_nlu_agent_pb.SetResourcesRequest,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	setResources(
		request: ondewo_nlu_agent_pb.SetResourcesRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	setResources(
		request: ondewo_nlu_agent_pb.SetResourcesRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	deleteResources(
		request: ondewo_nlu_agent_pb.DeleteResourcesRequest,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	deleteResources(
		request: ondewo_nlu_agent_pb.DeleteResourcesRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	deleteResources(
		request: ondewo_nlu_agent_pb.DeleteResourcesRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	exportResources(
		request: ondewo_nlu_agent_pb.ExportResourcesRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.ExportResourcesResponse) => void
	): grpc.ClientUnaryCall;
	exportResources(
		request: ondewo_nlu_agent_pb.ExportResourcesRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.ExportResourcesResponse) => void
	): grpc.ClientUnaryCall;
	exportResources(
		request: ondewo_nlu_agent_pb.ExportResourcesRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.ExportResourcesResponse) => void
	): grpc.ClientUnaryCall;
	getModelStatuses(
		request: ondewo_nlu_agent_pb.GetModelStatusesRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.GetModelStatusesResponse) => void
	): grpc.ClientUnaryCall;
	getModelStatuses(
		request: ondewo_nlu_agent_pb.GetModelStatusesRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.GetModelStatusesResponse) => void
	): grpc.ClientUnaryCall;
	getModelStatuses(
		request: ondewo_nlu_agent_pb.GetModelStatusesRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.GetModelStatusesResponse) => void
	): grpc.ClientUnaryCall;
	getPlatformMapping(
		request: ondewo_nlu_agent_pb.GetPlatformMappingRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.PlatformMapping) => void
	): grpc.ClientUnaryCall;
	getPlatformMapping(
		request: ondewo_nlu_agent_pb.GetPlatformMappingRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.PlatformMapping) => void
	): grpc.ClientUnaryCall;
	getPlatformMapping(
		request: ondewo_nlu_agent_pb.GetPlatformMappingRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.PlatformMapping) => void
	): grpc.ClientUnaryCall;
	setPlatformMapping(
		request: ondewo_nlu_agent_pb.PlatformMapping,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.PlatformMapping) => void
	): grpc.ClientUnaryCall;
	setPlatformMapping(
		request: ondewo_nlu_agent_pb.PlatformMapping,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.PlatformMapping) => void
	): grpc.ClientUnaryCall;
	setPlatformMapping(
		request: ondewo_nlu_agent_pb.PlatformMapping,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.PlatformMapping) => void
	): grpc.ClientUnaryCall;
	getFullTextSearchEntityType(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.FullTextSearchResponseEntityType) => void
	): grpc.ClientUnaryCall;
	getFullTextSearchEntityType(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.FullTextSearchResponseEntityType) => void
	): grpc.ClientUnaryCall;
	getFullTextSearchEntityType(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.FullTextSearchResponseEntityType) => void
	): grpc.ClientUnaryCall;
	getFullTextSearchEntity(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.FullTextSearchResponseEntity) => void
	): grpc.ClientUnaryCall;
	getFullTextSearchEntity(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.FullTextSearchResponseEntity) => void
	): grpc.ClientUnaryCall;
	getFullTextSearchEntity(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.FullTextSearchResponseEntity) => void
	): grpc.ClientUnaryCall;
	getFullTextSearchEntitySynonym(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		callback: (
			error: grpc.ServiceError | null,
			response: ondewo_nlu_agent_pb.FullTextSearchResponseEntitySynonym
		) => void
	): grpc.ClientUnaryCall;
	getFullTextSearchEntitySynonym(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		callback: (
			error: grpc.ServiceError | null,
			response: ondewo_nlu_agent_pb.FullTextSearchResponseEntitySynonym
		) => void
	): grpc.ClientUnaryCall;
	getFullTextSearchEntitySynonym(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (
			error: grpc.ServiceError | null,
			response: ondewo_nlu_agent_pb.FullTextSearchResponseEntitySynonym
		) => void
	): grpc.ClientUnaryCall;
	getFullTextSearchIntent(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.FullTextSearchResponseIntent) => void
	): grpc.ClientUnaryCall;
	getFullTextSearchIntent(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.FullTextSearchResponseIntent) => void
	): grpc.ClientUnaryCall;
	getFullTextSearchIntent(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.FullTextSearchResponseIntent) => void
	): grpc.ClientUnaryCall;
	getFullTextSearchIntentContextIn(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		callback: (
			error: grpc.ServiceError | null,
			response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentContextIn
		) => void
	): grpc.ClientUnaryCall;
	getFullTextSearchIntentContextIn(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		callback: (
			error: grpc.ServiceError | null,
			response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentContextIn
		) => void
	): grpc.ClientUnaryCall;
	getFullTextSearchIntentContextIn(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (
			error: grpc.ServiceError | null,
			response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentContextIn
		) => void
	): grpc.ClientUnaryCall;
	getFullTextSearchIntentContextOut(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		callback: (
			error: grpc.ServiceError | null,
			response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentContextOut
		) => void
	): grpc.ClientUnaryCall;
	getFullTextSearchIntentContextOut(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		callback: (
			error: grpc.ServiceError | null,
			response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentContextOut
		) => void
	): grpc.ClientUnaryCall;
	getFullTextSearchIntentContextOut(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (
			error: grpc.ServiceError | null,
			response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentContextOut
		) => void
	): grpc.ClientUnaryCall;
	getFullTextSearchIntentUsersays(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		callback: (
			error: grpc.ServiceError | null,
			response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentUsersays
		) => void
	): grpc.ClientUnaryCall;
	getFullTextSearchIntentUsersays(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		callback: (
			error: grpc.ServiceError | null,
			response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentUsersays
		) => void
	): grpc.ClientUnaryCall;
	getFullTextSearchIntentUsersays(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (
			error: grpc.ServiceError | null,
			response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentUsersays
		) => void
	): grpc.ClientUnaryCall;
	getFullTextSearchIntentTags(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentTags) => void
	): grpc.ClientUnaryCall;
	getFullTextSearchIntentTags(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentTags) => void
	): grpc.ClientUnaryCall;
	getFullTextSearchIntentTags(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentTags) => void
	): grpc.ClientUnaryCall;
	getFullTextSearchIntentResponse(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		callback: (
			error: grpc.ServiceError | null,
			response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentResponse
		) => void
	): grpc.ClientUnaryCall;
	getFullTextSearchIntentResponse(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		callback: (
			error: grpc.ServiceError | null,
			response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentResponse
		) => void
	): grpc.ClientUnaryCall;
	getFullTextSearchIntentResponse(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (
			error: grpc.ServiceError | null,
			response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentResponse
		) => void
	): grpc.ClientUnaryCall;
	getFullTextSearchIntentParameters(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		callback: (
			error: grpc.ServiceError | null,
			response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentParameters
		) => void
	): grpc.ClientUnaryCall;
	getFullTextSearchIntentParameters(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		callback: (
			error: grpc.ServiceError | null,
			response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentParameters
		) => void
	): grpc.ClientUnaryCall;
	getFullTextSearchIntentParameters(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (
			error: grpc.ServiceError | null,
			response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentParameters
		) => void
	): grpc.ClientUnaryCall;
	reindexAgent(
		request: ondewo_nlu_agent_pb.ReindexAgentRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	reindexAgent(
		request: ondewo_nlu_agent_pb.ReindexAgentRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	reindexAgent(
		request: ondewo_nlu_agent_pb.ReindexAgentRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
}

export class AgentsClient extends grpc.Client implements IAgentsClient {
	constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
	public createAgent(
		request: ondewo_nlu_agent_pb.CreateAgentRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.Agent) => void
	): grpc.ClientUnaryCall;
	public createAgent(
		request: ondewo_nlu_agent_pb.CreateAgentRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.Agent) => void
	): grpc.ClientUnaryCall;
	public createAgent(
		request: ondewo_nlu_agent_pb.CreateAgentRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.Agent) => void
	): grpc.ClientUnaryCall;
	public updateAgent(
		request: ondewo_nlu_agent_pb.UpdateAgentRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.Agent) => void
	): grpc.ClientUnaryCall;
	public updateAgent(
		request: ondewo_nlu_agent_pb.UpdateAgentRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.Agent) => void
	): grpc.ClientUnaryCall;
	public updateAgent(
		request: ondewo_nlu_agent_pb.UpdateAgentRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.Agent) => void
	): grpc.ClientUnaryCall;
	public getAgent(
		request: ondewo_nlu_agent_pb.GetAgentRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.Agent) => void
	): grpc.ClientUnaryCall;
	public getAgent(
		request: ondewo_nlu_agent_pb.GetAgentRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.Agent) => void
	): grpc.ClientUnaryCall;
	public getAgent(
		request: ondewo_nlu_agent_pb.GetAgentRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.Agent) => void
	): grpc.ClientUnaryCall;
	public deleteAgent(
		request: ondewo_nlu_agent_pb.DeleteAgentRequest,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	public deleteAgent(
		request: ondewo_nlu_agent_pb.DeleteAgentRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	public deleteAgent(
		request: ondewo_nlu_agent_pb.DeleteAgentRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	public deleteAllAgents(
		request: google_protobuf_empty_pb.Empty,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	public deleteAllAgents(
		request: google_protobuf_empty_pb.Empty,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	public deleteAllAgents(
		request: google_protobuf_empty_pb.Empty,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	public listAgents(
		request: ondewo_nlu_agent_pb.ListAgentsRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.ListAgentsResponse) => void
	): grpc.ClientUnaryCall;
	public listAgents(
		request: ondewo_nlu_agent_pb.ListAgentsRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.ListAgentsResponse) => void
	): grpc.ClientUnaryCall;
	public listAgents(
		request: ondewo_nlu_agent_pb.ListAgentsRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.ListAgentsResponse) => void
	): grpc.ClientUnaryCall;
	public listAgentsOfUser(
		request: ondewo_nlu_agent_pb.ListAgentsRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.ListAgentsOfUserResponse) => void
	): grpc.ClientUnaryCall;
	public listAgentsOfUser(
		request: ondewo_nlu_agent_pb.ListAgentsRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.ListAgentsOfUserResponse) => void
	): grpc.ClientUnaryCall;
	public listAgentsOfUser(
		request: ondewo_nlu_agent_pb.ListAgentsRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.ListAgentsOfUserResponse) => void
	): grpc.ClientUnaryCall;
	public listAllAgents(
		request: ondewo_nlu_agent_pb.ListAgentsRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.ListAgentsResponse) => void
	): grpc.ClientUnaryCall;
	public listAllAgents(
		request: ondewo_nlu_agent_pb.ListAgentsRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.ListAgentsResponse) => void
	): grpc.ClientUnaryCall;
	public listAllAgents(
		request: ondewo_nlu_agent_pb.ListAgentsRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.ListAgentsResponse) => void
	): grpc.ClientUnaryCall;
	public addUserToProject(
		request: ondewo_nlu_agent_pb.AddUserToProjectRequest,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	public addUserToProject(
		request: ondewo_nlu_agent_pb.AddUserToProjectRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	public addUserToProject(
		request: ondewo_nlu_agent_pb.AddUserToProjectRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	public removeUserFromProject(
		request: ondewo_nlu_agent_pb.RemoveUserFromProjectRequest,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	public removeUserFromProject(
		request: ondewo_nlu_agent_pb.RemoveUserFromProjectRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	public removeUserFromProject(
		request: ondewo_nlu_agent_pb.RemoveUserFromProjectRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	public listUsersInProject(
		request: ondewo_nlu_agent_pb.ListUsersInProjectRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.ListUsersInProjectResponse) => void
	): grpc.ClientUnaryCall;
	public listUsersInProject(
		request: ondewo_nlu_agent_pb.ListUsersInProjectRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.ListUsersInProjectResponse) => void
	): grpc.ClientUnaryCall;
	public listUsersInProject(
		request: ondewo_nlu_agent_pb.ListUsersInProjectRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.ListUsersInProjectResponse) => void
	): grpc.ClientUnaryCall;
	public getPlatformInfo(
		request: google_protobuf_empty_pb.Empty,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.GetPlatformInfoResponse) => void
	): grpc.ClientUnaryCall;
	public getPlatformInfo(
		request: google_protobuf_empty_pb.Empty,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.GetPlatformInfoResponse) => void
	): grpc.ClientUnaryCall;
	public getPlatformInfo(
		request: google_protobuf_empty_pb.Empty,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.GetPlatformInfoResponse) => void
	): grpc.ClientUnaryCall;
	public listProjectPermissions(
		request: ondewo_nlu_agent_pb.ListProjectPermissionsRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.ListProjectPermissionsResponse) => void
	): grpc.ClientUnaryCall;
	public listProjectPermissions(
		request: ondewo_nlu_agent_pb.ListProjectPermissionsRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.ListProjectPermissionsResponse) => void
	): grpc.ClientUnaryCall;
	public listProjectPermissions(
		request: ondewo_nlu_agent_pb.ListProjectPermissionsRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.ListProjectPermissionsResponse) => void
	): grpc.ClientUnaryCall;
	public trainAgent(
		request: ondewo_nlu_agent_pb.TrainAgentRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	public trainAgent(
		request: ondewo_nlu_agent_pb.TrainAgentRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	public trainAgent(
		request: ondewo_nlu_agent_pb.TrainAgentRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	public buildCache(
		request: ondewo_nlu_agent_pb.BuildCacheRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	public buildCache(
		request: ondewo_nlu_agent_pb.BuildCacheRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	public buildCache(
		request: ondewo_nlu_agent_pb.BuildCacheRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	public exportAgent(
		request: ondewo_nlu_agent_pb.ExportAgentRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	public exportAgent(
		request: ondewo_nlu_agent_pb.ExportAgentRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	public exportAgent(
		request: ondewo_nlu_agent_pb.ExportAgentRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	public exportBenchmarkAgent(
		request: ondewo_nlu_agent_pb.ExportBenchmarkAgentRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	public exportBenchmarkAgent(
		request: ondewo_nlu_agent_pb.ExportBenchmarkAgentRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	public exportBenchmarkAgent(
		request: ondewo_nlu_agent_pb.ExportBenchmarkAgentRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	public importAgent(
		request: ondewo_nlu_agent_pb.ImportAgentRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	public importAgent(
		request: ondewo_nlu_agent_pb.ImportAgentRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	public importAgent(
		request: ondewo_nlu_agent_pb.ImportAgentRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	public optimizeRankingMatch(
		request: ondewo_nlu_agent_pb.OptimizeRankingMatchRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	public optimizeRankingMatch(
		request: ondewo_nlu_agent_pb.OptimizeRankingMatchRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	public optimizeRankingMatch(
		request: ondewo_nlu_agent_pb.OptimizeRankingMatchRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	public restoreAgent(
		request: ondewo_nlu_agent_pb.RestoreAgentRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	public restoreAgent(
		request: ondewo_nlu_agent_pb.RestoreAgentRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	public restoreAgent(
		request: ondewo_nlu_agent_pb.RestoreAgentRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	public getAgentStatistics(
		request: ondewo_nlu_agent_pb.GetAgentStatisticsRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.GetAgentStatisticsResponse) => void
	): grpc.ClientUnaryCall;
	public getAgentStatistics(
		request: ondewo_nlu_agent_pb.GetAgentStatisticsRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.GetAgentStatisticsResponse) => void
	): grpc.ClientUnaryCall;
	public getAgentStatistics(
		request: ondewo_nlu_agent_pb.GetAgentStatisticsRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.GetAgentStatisticsResponse) => void
	): grpc.ClientUnaryCall;
	public getSessionsStatistics(
		request: ondewo_nlu_agent_pb.GetSessionsStatisticsRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.GetSessionsStatisticsResponse) => void
	): grpc.ClientUnaryCall;
	public getSessionsStatistics(
		request: ondewo_nlu_agent_pb.GetSessionsStatisticsRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.GetSessionsStatisticsResponse) => void
	): grpc.ClientUnaryCall;
	public getSessionsStatistics(
		request: ondewo_nlu_agent_pb.GetSessionsStatisticsRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.GetSessionsStatisticsResponse) => void
	): grpc.ClientUnaryCall;
	public setAgentStatus(
		request: ondewo_nlu_agent_pb.SetAgentStatusRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.Agent) => void
	): grpc.ClientUnaryCall;
	public setAgentStatus(
		request: ondewo_nlu_agent_pb.SetAgentStatusRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.Agent) => void
	): grpc.ClientUnaryCall;
	public setAgentStatus(
		request: ondewo_nlu_agent_pb.SetAgentStatusRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.Agent) => void
	): grpc.ClientUnaryCall;
	public setResources(
		request: ondewo_nlu_agent_pb.SetResourcesRequest,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	public setResources(
		request: ondewo_nlu_agent_pb.SetResourcesRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	public setResources(
		request: ondewo_nlu_agent_pb.SetResourcesRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	public deleteResources(
		request: ondewo_nlu_agent_pb.DeleteResourcesRequest,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	public deleteResources(
		request: ondewo_nlu_agent_pb.DeleteResourcesRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	public deleteResources(
		request: ondewo_nlu_agent_pb.DeleteResourcesRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	public exportResources(
		request: ondewo_nlu_agent_pb.ExportResourcesRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.ExportResourcesResponse) => void
	): grpc.ClientUnaryCall;
	public exportResources(
		request: ondewo_nlu_agent_pb.ExportResourcesRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.ExportResourcesResponse) => void
	): grpc.ClientUnaryCall;
	public exportResources(
		request: ondewo_nlu_agent_pb.ExportResourcesRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.ExportResourcesResponse) => void
	): grpc.ClientUnaryCall;
	public getModelStatuses(
		request: ondewo_nlu_agent_pb.GetModelStatusesRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.GetModelStatusesResponse) => void
	): grpc.ClientUnaryCall;
	public getModelStatuses(
		request: ondewo_nlu_agent_pb.GetModelStatusesRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.GetModelStatusesResponse) => void
	): grpc.ClientUnaryCall;
	public getModelStatuses(
		request: ondewo_nlu_agent_pb.GetModelStatusesRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.GetModelStatusesResponse) => void
	): grpc.ClientUnaryCall;
	public getPlatformMapping(
		request: ondewo_nlu_agent_pb.GetPlatformMappingRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.PlatformMapping) => void
	): grpc.ClientUnaryCall;
	public getPlatformMapping(
		request: ondewo_nlu_agent_pb.GetPlatformMappingRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.PlatformMapping) => void
	): grpc.ClientUnaryCall;
	public getPlatformMapping(
		request: ondewo_nlu_agent_pb.GetPlatformMappingRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.PlatformMapping) => void
	): grpc.ClientUnaryCall;
	public setPlatformMapping(
		request: ondewo_nlu_agent_pb.PlatformMapping,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.PlatformMapping) => void
	): grpc.ClientUnaryCall;
	public setPlatformMapping(
		request: ondewo_nlu_agent_pb.PlatformMapping,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.PlatformMapping) => void
	): grpc.ClientUnaryCall;
	public setPlatformMapping(
		request: ondewo_nlu_agent_pb.PlatformMapping,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.PlatformMapping) => void
	): grpc.ClientUnaryCall;
	public getFullTextSearchEntityType(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.FullTextSearchResponseEntityType) => void
	): grpc.ClientUnaryCall;
	public getFullTextSearchEntityType(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.FullTextSearchResponseEntityType) => void
	): grpc.ClientUnaryCall;
	public getFullTextSearchEntityType(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.FullTextSearchResponseEntityType) => void
	): grpc.ClientUnaryCall;
	public getFullTextSearchEntity(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.FullTextSearchResponseEntity) => void
	): grpc.ClientUnaryCall;
	public getFullTextSearchEntity(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.FullTextSearchResponseEntity) => void
	): grpc.ClientUnaryCall;
	public getFullTextSearchEntity(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.FullTextSearchResponseEntity) => void
	): grpc.ClientUnaryCall;
	public getFullTextSearchEntitySynonym(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		callback: (
			error: grpc.ServiceError | null,
			response: ondewo_nlu_agent_pb.FullTextSearchResponseEntitySynonym
		) => void
	): grpc.ClientUnaryCall;
	public getFullTextSearchEntitySynonym(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		callback: (
			error: grpc.ServiceError | null,
			response: ondewo_nlu_agent_pb.FullTextSearchResponseEntitySynonym
		) => void
	): grpc.ClientUnaryCall;
	public getFullTextSearchEntitySynonym(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (
			error: grpc.ServiceError | null,
			response: ondewo_nlu_agent_pb.FullTextSearchResponseEntitySynonym
		) => void
	): grpc.ClientUnaryCall;
	public getFullTextSearchIntent(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.FullTextSearchResponseIntent) => void
	): grpc.ClientUnaryCall;
	public getFullTextSearchIntent(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.FullTextSearchResponseIntent) => void
	): grpc.ClientUnaryCall;
	public getFullTextSearchIntent(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.FullTextSearchResponseIntent) => void
	): grpc.ClientUnaryCall;
	public getFullTextSearchIntentContextIn(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		callback: (
			error: grpc.ServiceError | null,
			response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentContextIn
		) => void
	): grpc.ClientUnaryCall;
	public getFullTextSearchIntentContextIn(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		callback: (
			error: grpc.ServiceError | null,
			response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentContextIn
		) => void
	): grpc.ClientUnaryCall;
	public getFullTextSearchIntentContextIn(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (
			error: grpc.ServiceError | null,
			response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentContextIn
		) => void
	): grpc.ClientUnaryCall;
	public getFullTextSearchIntentContextOut(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		callback: (
			error: grpc.ServiceError | null,
			response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentContextOut
		) => void
	): grpc.ClientUnaryCall;
	public getFullTextSearchIntentContextOut(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		callback: (
			error: grpc.ServiceError | null,
			response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentContextOut
		) => void
	): grpc.ClientUnaryCall;
	public getFullTextSearchIntentContextOut(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (
			error: grpc.ServiceError | null,
			response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentContextOut
		) => void
	): grpc.ClientUnaryCall;
	public getFullTextSearchIntentUsersays(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		callback: (
			error: grpc.ServiceError | null,
			response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentUsersays
		) => void
	): grpc.ClientUnaryCall;
	public getFullTextSearchIntentUsersays(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		callback: (
			error: grpc.ServiceError | null,
			response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentUsersays
		) => void
	): grpc.ClientUnaryCall;
	public getFullTextSearchIntentUsersays(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (
			error: grpc.ServiceError | null,
			response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentUsersays
		) => void
	): grpc.ClientUnaryCall;
	public getFullTextSearchIntentTags(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentTags) => void
	): grpc.ClientUnaryCall;
	public getFullTextSearchIntentTags(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentTags) => void
	): grpc.ClientUnaryCall;
	public getFullTextSearchIntentTags(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentTags) => void
	): grpc.ClientUnaryCall;
	public getFullTextSearchIntentResponse(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		callback: (
			error: grpc.ServiceError | null,
			response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentResponse
		) => void
	): grpc.ClientUnaryCall;
	public getFullTextSearchIntentResponse(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		callback: (
			error: grpc.ServiceError | null,
			response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentResponse
		) => void
	): grpc.ClientUnaryCall;
	public getFullTextSearchIntentResponse(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (
			error: grpc.ServiceError | null,
			response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentResponse
		) => void
	): grpc.ClientUnaryCall;
	public getFullTextSearchIntentParameters(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		callback: (
			error: grpc.ServiceError | null,
			response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentParameters
		) => void
	): grpc.ClientUnaryCall;
	public getFullTextSearchIntentParameters(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		callback: (
			error: grpc.ServiceError | null,
			response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentParameters
		) => void
	): grpc.ClientUnaryCall;
	public getFullTextSearchIntentParameters(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (
			error: grpc.ServiceError | null,
			response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentParameters
		) => void
	): grpc.ClientUnaryCall;
	public reindexAgent(
		request: ondewo_nlu_agent_pb.ReindexAgentRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	public reindexAgent(
		request: ondewo_nlu_agent_pb.ReindexAgentRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	public reindexAgent(
		request: ondewo_nlu_agent_pb.ReindexAgentRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
}
