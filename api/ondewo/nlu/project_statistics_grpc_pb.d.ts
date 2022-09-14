// package: ondewo.nlu
// file: ondewo/nlu/project_statistics.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from 'grpc';
import * as ondewo_nlu_project_statistics_pb from '../../ondewo/nlu/project_statistics_pb';
import * as ondewo_nlu_intent_pb from '../../ondewo/nlu/intent_pb';
import * as ondewo_nlu_common_pb from '../../ondewo/nlu/common_pb';
import * as ondewo_nlu_entity_type_pb from '../../ondewo/nlu/entity_type_pb';

interface IProjectStatisticsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
	getIntentCount: IProjectStatisticsService_IGetIntentCount;
	getEntityTypeCount: IProjectStatisticsService_IGetEntityTypeCount;
	getUserCount: IProjectStatisticsService_IGetUserCount;
	getSessionCount: IProjectStatisticsService_IGetSessionCount;
	getTrainingPhraseCount: IProjectStatisticsService_IGetTrainingPhraseCount;
	getResponseCount: IProjectStatisticsService_IGetResponseCount;
	getEntityValueCount: IProjectStatisticsService_IGetEntityValueCount;
	getEntitySynonymCount: IProjectStatisticsService_IGetEntitySynonymCount;
}

interface IProjectStatisticsService_IGetIntentCount
	extends grpc.MethodDefinition<
		ondewo_nlu_project_statistics_pb.GetIntentCountRequest,
		ondewo_nlu_common_pb.StatResponse
	> {
	path: '/ondewo.nlu.ProjectStatistics/GetIntentCount';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_project_statistics_pb.GetIntentCountRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_project_statistics_pb.GetIntentCountRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_common_pb.StatResponse>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_common_pb.StatResponse>;
}
interface IProjectStatisticsService_IGetEntityTypeCount
	extends grpc.MethodDefinition<
		ondewo_nlu_project_statistics_pb.GetEntityTypeCountRequest,
		ondewo_nlu_common_pb.StatResponse
	> {
	path: '/ondewo.nlu.ProjectStatistics/GetEntityTypeCount';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_project_statistics_pb.GetEntityTypeCountRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_project_statistics_pb.GetEntityTypeCountRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_common_pb.StatResponse>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_common_pb.StatResponse>;
}
interface IProjectStatisticsService_IGetUserCount
	extends grpc.MethodDefinition<
		ondewo_nlu_project_statistics_pb.GetProjectStatRequest,
		ondewo_nlu_common_pb.StatResponse
	> {
	path: '/ondewo.nlu.ProjectStatistics/GetUserCount';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_project_statistics_pb.GetProjectStatRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_project_statistics_pb.GetProjectStatRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_common_pb.StatResponse>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_common_pb.StatResponse>;
}
interface IProjectStatisticsService_IGetSessionCount
	extends grpc.MethodDefinition<
		ondewo_nlu_project_statistics_pb.GetProjectStatRequest,
		ondewo_nlu_common_pb.StatResponse
	> {
	path: '/ondewo.nlu.ProjectStatistics/GetSessionCount';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_project_statistics_pb.GetProjectStatRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_project_statistics_pb.GetProjectStatRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_common_pb.StatResponse>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_common_pb.StatResponse>;
}
interface IProjectStatisticsService_IGetTrainingPhraseCount
	extends grpc.MethodDefinition<
		ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		ondewo_nlu_common_pb.StatResponse
	> {
	path: '/ondewo.nlu.ProjectStatistics/GetTrainingPhraseCount';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_common_pb.StatResponse>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_common_pb.StatResponse>;
}
interface IProjectStatisticsService_IGetResponseCount
	extends grpc.MethodDefinition<
		ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		ondewo_nlu_common_pb.StatResponse
	> {
	path: '/ondewo.nlu.ProjectStatistics/GetResponseCount';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_common_pb.StatResponse>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_common_pb.StatResponse>;
}
interface IProjectStatisticsService_IGetEntityValueCount
	extends grpc.MethodDefinition<
		ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		ondewo_nlu_common_pb.StatResponse
	> {
	path: '/ondewo.nlu.ProjectStatistics/GetEntityValueCount';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_common_pb.StatResponse>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_common_pb.StatResponse>;
}
interface IProjectStatisticsService_IGetEntitySynonymCount
	extends grpc.MethodDefinition<
		ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		ondewo_nlu_common_pb.StatResponse
	> {
	path: '/ondewo.nlu.ProjectStatistics/GetEntitySynonymCount';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_common_pb.StatResponse>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_common_pb.StatResponse>;
}

export const ProjectStatisticsService: IProjectStatisticsService;

export interface IProjectStatisticsServer {
	getIntentCount: grpc.handleUnaryCall<
		ondewo_nlu_project_statistics_pb.GetIntentCountRequest,
		ondewo_nlu_common_pb.StatResponse
	>;
	getEntityTypeCount: grpc.handleUnaryCall<
		ondewo_nlu_project_statistics_pb.GetEntityTypeCountRequest,
		ondewo_nlu_common_pb.StatResponse
	>;
	getUserCount: grpc.handleUnaryCall<
		ondewo_nlu_project_statistics_pb.GetProjectStatRequest,
		ondewo_nlu_common_pb.StatResponse
	>;
	getSessionCount: grpc.handleUnaryCall<
		ondewo_nlu_project_statistics_pb.GetProjectStatRequest,
		ondewo_nlu_common_pb.StatResponse
	>;
	getTrainingPhraseCount: grpc.handleUnaryCall<
		ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		ondewo_nlu_common_pb.StatResponse
	>;
	getResponseCount: grpc.handleUnaryCall<
		ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		ondewo_nlu_common_pb.StatResponse
	>;
	getEntityValueCount: grpc.handleUnaryCall<
		ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		ondewo_nlu_common_pb.StatResponse
	>;
	getEntitySynonymCount: grpc.handleUnaryCall<
		ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		ondewo_nlu_common_pb.StatResponse
	>;
}

export interface IProjectStatisticsClient {
	getIntentCount(
		request: ondewo_nlu_project_statistics_pb.GetIntentCountRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	getIntentCount(
		request: ondewo_nlu_project_statistics_pb.GetIntentCountRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	getIntentCount(
		request: ondewo_nlu_project_statistics_pb.GetIntentCountRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	getEntityTypeCount(
		request: ondewo_nlu_project_statistics_pb.GetEntityTypeCountRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	getEntityTypeCount(
		request: ondewo_nlu_project_statistics_pb.GetEntityTypeCountRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	getEntityTypeCount(
		request: ondewo_nlu_project_statistics_pb.GetEntityTypeCountRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	getUserCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectStatRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	getUserCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectStatRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	getUserCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectStatRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	getSessionCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectStatRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	getSessionCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectStatRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	getSessionCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectStatRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	getTrainingPhraseCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	getTrainingPhraseCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	getTrainingPhraseCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	getResponseCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	getResponseCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	getResponseCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	getEntityValueCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	getEntityValueCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	getEntityValueCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	getEntitySynonymCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	getEntitySynonymCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	getEntitySynonymCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
}

export class ProjectStatisticsClient extends grpc.Client implements IProjectStatisticsClient {
	constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
	public getIntentCount(
		request: ondewo_nlu_project_statistics_pb.GetIntentCountRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	public getIntentCount(
		request: ondewo_nlu_project_statistics_pb.GetIntentCountRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	public getIntentCount(
		request: ondewo_nlu_project_statistics_pb.GetIntentCountRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	public getEntityTypeCount(
		request: ondewo_nlu_project_statistics_pb.GetEntityTypeCountRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	public getEntityTypeCount(
		request: ondewo_nlu_project_statistics_pb.GetEntityTypeCountRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	public getEntityTypeCount(
		request: ondewo_nlu_project_statistics_pb.GetEntityTypeCountRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	public getUserCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectStatRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	public getUserCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectStatRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	public getUserCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectStatRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	public getSessionCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectStatRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	public getSessionCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectStatRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	public getSessionCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectStatRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	public getTrainingPhraseCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	public getTrainingPhraseCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	public getTrainingPhraseCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	public getResponseCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	public getResponseCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	public getResponseCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	public getEntityValueCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	public getEntityValueCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	public getEntityValueCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	public getEntitySynonymCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	public getEntitySynonymCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
	public getEntitySynonymCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpc.ClientUnaryCall;
}
