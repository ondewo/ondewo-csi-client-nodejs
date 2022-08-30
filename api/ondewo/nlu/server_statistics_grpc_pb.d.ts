// package: ondewo.nlu
// file: ondewo/nlu/server_statistics.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ondewo_nlu_server_statistics_pb from "../../ondewo/nlu/server_statistics_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as ondewo_nlu_common_pb from "../../ondewo/nlu/common_pb";

interface IServerStatisticsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getProjectCount: IServerStatisticsService_IGetProjectCount;
    getUserProjectCount: IServerStatisticsService_IGetUserProjectCount;
    getUserCount: IServerStatisticsService_IGetUserCount;
}

interface IServerStatisticsService_IGetProjectCount extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, ondewo_nlu_common_pb.StatResponse> {
    path: "/ondewo.nlu.ServerStatistics/GetProjectCount";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<ondewo_nlu_common_pb.StatResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_common_pb.StatResponse>;
}
interface IServerStatisticsService_IGetUserProjectCount extends grpc.MethodDefinition<ondewo_nlu_server_statistics_pb.GetUserProjectCountRequest, ondewo_nlu_common_pb.StatResponse> {
    path: "/ondewo.nlu.ServerStatistics/GetUserProjectCount";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_server_statistics_pb.GetUserProjectCountRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_server_statistics_pb.GetUserProjectCountRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_common_pb.StatResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_common_pb.StatResponse>;
}
interface IServerStatisticsService_IGetUserCount extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, ondewo_nlu_common_pb.StatResponse> {
    path: "/ondewo.nlu.ServerStatistics/GetUserCount";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<ondewo_nlu_common_pb.StatResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_common_pb.StatResponse>;
}

export const ServerStatisticsService: IServerStatisticsService;

export interface IServerStatisticsServer {
    getProjectCount: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, ondewo_nlu_common_pb.StatResponse>;
    getUserProjectCount: grpc.handleUnaryCall<ondewo_nlu_server_statistics_pb.GetUserProjectCountRequest, ondewo_nlu_common_pb.StatResponse>;
    getUserCount: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, ondewo_nlu_common_pb.StatResponse>;
}

export interface IServerStatisticsClient {
    getProjectCount(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void): grpc.ClientUnaryCall;
    getProjectCount(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void): grpc.ClientUnaryCall;
    getProjectCount(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void): grpc.ClientUnaryCall;
    getUserProjectCount(request: ondewo_nlu_server_statistics_pb.GetUserProjectCountRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void): grpc.ClientUnaryCall;
    getUserProjectCount(request: ondewo_nlu_server_statistics_pb.GetUserProjectCountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void): grpc.ClientUnaryCall;
    getUserProjectCount(request: ondewo_nlu_server_statistics_pb.GetUserProjectCountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void): grpc.ClientUnaryCall;
    getUserCount(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void): grpc.ClientUnaryCall;
    getUserCount(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void): grpc.ClientUnaryCall;
    getUserCount(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void): grpc.ClientUnaryCall;
}

export class ServerStatisticsClient extends grpc.Client implements IServerStatisticsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getProjectCount(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void): grpc.ClientUnaryCall;
    public getProjectCount(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void): grpc.ClientUnaryCall;
    public getProjectCount(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void): grpc.ClientUnaryCall;
    public getUserProjectCount(request: ondewo_nlu_server_statistics_pb.GetUserProjectCountRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void): grpc.ClientUnaryCall;
    public getUserProjectCount(request: ondewo_nlu_server_statistics_pb.GetUserProjectCountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void): grpc.ClientUnaryCall;
    public getUserProjectCount(request: ondewo_nlu_server_statistics_pb.GetUserProjectCountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void): grpc.ClientUnaryCall;
    public getUserCount(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void): grpc.ClientUnaryCall;
    public getUserCount(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void): grpc.ClientUnaryCall;
    public getUserCount(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.StatResponse) => void): grpc.ClientUnaryCall;
}
