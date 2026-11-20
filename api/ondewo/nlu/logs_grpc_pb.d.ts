// package: ondewo.nlu
// file: ondewo/nlu/logs.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ondewo_nlu_logs_pb from "../../ondewo/nlu/logs_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ondewo_nlu_common_pb from "../../ondewo/nlu/common_pb";
import * as ondewo_nlu_operation_metadata_pb from "../../ondewo/nlu/operation_metadata_pb";

interface ILogsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    streamLogs: ILogsService_IStreamLogs;
    listLogs: ILogsService_IListLogs;
    getLogStream: ILogsService_IGetLogStream;
    listLogStreams: ILogsService_IListLogStreams;
    exportLogs: ILogsService_IExportLogs;
    deleteLogs: ILogsService_IDeleteLogs;
}

interface ILogsService_IStreamLogs extends grpc.MethodDefinition<ondewo_nlu_logs_pb.StreamLogsRequest, ondewo_nlu_logs_pb.StreamLogsResponse> {
    path: "/ondewo.nlu.Logs/StreamLogs";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<ondewo_nlu_logs_pb.StreamLogsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_logs_pb.StreamLogsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_logs_pb.StreamLogsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_logs_pb.StreamLogsResponse>;
}
interface ILogsService_IListLogs extends grpc.MethodDefinition<ondewo_nlu_logs_pb.ListLogsRequest, ondewo_nlu_logs_pb.ListLogsResponse> {
    path: "/ondewo.nlu.Logs/ListLogs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_logs_pb.ListLogsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_logs_pb.ListLogsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_logs_pb.ListLogsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_logs_pb.ListLogsResponse>;
}
interface ILogsService_IGetLogStream extends grpc.MethodDefinition<ondewo_nlu_logs_pb.GetLogStreamRequest, ondewo_nlu_logs_pb.CaiLogStream> {
    path: "/ondewo.nlu.Logs/GetLogStream";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_logs_pb.GetLogStreamRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_logs_pb.GetLogStreamRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_logs_pb.CaiLogStream>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_logs_pb.CaiLogStream>;
}
interface ILogsService_IListLogStreams extends grpc.MethodDefinition<ondewo_nlu_logs_pb.ListLogStreamsRequest, ondewo_nlu_logs_pb.ListLogStreamsResponse> {
    path: "/ondewo.nlu.Logs/ListLogStreams";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_logs_pb.ListLogStreamsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_logs_pb.ListLogStreamsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_logs_pb.ListLogStreamsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_logs_pb.ListLogStreamsResponse>;
}
interface ILogsService_IExportLogs extends grpc.MethodDefinition<ondewo_nlu_logs_pb.ExportLogsRequest, ondewo_nlu_logs_pb.ExportLogsResponse> {
    path: "/ondewo.nlu.Logs/ExportLogs";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<ondewo_nlu_logs_pb.ExportLogsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_logs_pb.ExportLogsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_logs_pb.ExportLogsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_logs_pb.ExportLogsResponse>;
}
interface ILogsService_IDeleteLogs extends grpc.MethodDefinition<ondewo_nlu_logs_pb.DeleteLogsRequest, ondewo_nlu_logs_pb.DeleteLogsResponse> {
    path: "/ondewo.nlu.Logs/DeleteLogs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_logs_pb.DeleteLogsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_logs_pb.DeleteLogsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_logs_pb.DeleteLogsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_logs_pb.DeleteLogsResponse>;
}

export const LogsService: ILogsService;

export interface ILogsServer {
    streamLogs: grpc.handleServerStreamingCall<ondewo_nlu_logs_pb.StreamLogsRequest, ondewo_nlu_logs_pb.StreamLogsResponse>;
    listLogs: grpc.handleUnaryCall<ondewo_nlu_logs_pb.ListLogsRequest, ondewo_nlu_logs_pb.ListLogsResponse>;
    getLogStream: grpc.handleUnaryCall<ondewo_nlu_logs_pb.GetLogStreamRequest, ondewo_nlu_logs_pb.CaiLogStream>;
    listLogStreams: grpc.handleUnaryCall<ondewo_nlu_logs_pb.ListLogStreamsRequest, ondewo_nlu_logs_pb.ListLogStreamsResponse>;
    exportLogs: grpc.handleServerStreamingCall<ondewo_nlu_logs_pb.ExportLogsRequest, ondewo_nlu_logs_pb.ExportLogsResponse>;
    deleteLogs: grpc.handleUnaryCall<ondewo_nlu_logs_pb.DeleteLogsRequest, ondewo_nlu_logs_pb.DeleteLogsResponse>;
}

export interface ILogsClient {
    streamLogs(request: ondewo_nlu_logs_pb.StreamLogsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_logs_pb.StreamLogsResponse>;
    streamLogs(request: ondewo_nlu_logs_pb.StreamLogsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_logs_pb.StreamLogsResponse>;
    listLogs(request: ondewo_nlu_logs_pb.ListLogsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_logs_pb.ListLogsResponse) => void): grpc.ClientUnaryCall;
    listLogs(request: ondewo_nlu_logs_pb.ListLogsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_logs_pb.ListLogsResponse) => void): grpc.ClientUnaryCall;
    listLogs(request: ondewo_nlu_logs_pb.ListLogsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_logs_pb.ListLogsResponse) => void): grpc.ClientUnaryCall;
    getLogStream(request: ondewo_nlu_logs_pb.GetLogStreamRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_logs_pb.CaiLogStream) => void): grpc.ClientUnaryCall;
    getLogStream(request: ondewo_nlu_logs_pb.GetLogStreamRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_logs_pb.CaiLogStream) => void): grpc.ClientUnaryCall;
    getLogStream(request: ondewo_nlu_logs_pb.GetLogStreamRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_logs_pb.CaiLogStream) => void): grpc.ClientUnaryCall;
    listLogStreams(request: ondewo_nlu_logs_pb.ListLogStreamsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_logs_pb.ListLogStreamsResponse) => void): grpc.ClientUnaryCall;
    listLogStreams(request: ondewo_nlu_logs_pb.ListLogStreamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_logs_pb.ListLogStreamsResponse) => void): grpc.ClientUnaryCall;
    listLogStreams(request: ondewo_nlu_logs_pb.ListLogStreamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_logs_pb.ListLogStreamsResponse) => void): grpc.ClientUnaryCall;
    exportLogs(request: ondewo_nlu_logs_pb.ExportLogsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_logs_pb.ExportLogsResponse>;
    exportLogs(request: ondewo_nlu_logs_pb.ExportLogsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_logs_pb.ExportLogsResponse>;
    deleteLogs(request: ondewo_nlu_logs_pb.DeleteLogsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_logs_pb.DeleteLogsResponse) => void): grpc.ClientUnaryCall;
    deleteLogs(request: ondewo_nlu_logs_pb.DeleteLogsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_logs_pb.DeleteLogsResponse) => void): grpc.ClientUnaryCall;
    deleteLogs(request: ondewo_nlu_logs_pb.DeleteLogsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_logs_pb.DeleteLogsResponse) => void): grpc.ClientUnaryCall;
}

export class LogsClient extends grpc.Client implements ILogsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public streamLogs(request: ondewo_nlu_logs_pb.StreamLogsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_logs_pb.StreamLogsResponse>;
    public streamLogs(request: ondewo_nlu_logs_pb.StreamLogsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_logs_pb.StreamLogsResponse>;
    public listLogs(request: ondewo_nlu_logs_pb.ListLogsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_logs_pb.ListLogsResponse) => void): grpc.ClientUnaryCall;
    public listLogs(request: ondewo_nlu_logs_pb.ListLogsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_logs_pb.ListLogsResponse) => void): grpc.ClientUnaryCall;
    public listLogs(request: ondewo_nlu_logs_pb.ListLogsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_logs_pb.ListLogsResponse) => void): grpc.ClientUnaryCall;
    public getLogStream(request: ondewo_nlu_logs_pb.GetLogStreamRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_logs_pb.CaiLogStream) => void): grpc.ClientUnaryCall;
    public getLogStream(request: ondewo_nlu_logs_pb.GetLogStreamRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_logs_pb.CaiLogStream) => void): grpc.ClientUnaryCall;
    public getLogStream(request: ondewo_nlu_logs_pb.GetLogStreamRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_logs_pb.CaiLogStream) => void): grpc.ClientUnaryCall;
    public listLogStreams(request: ondewo_nlu_logs_pb.ListLogStreamsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_logs_pb.ListLogStreamsResponse) => void): grpc.ClientUnaryCall;
    public listLogStreams(request: ondewo_nlu_logs_pb.ListLogStreamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_logs_pb.ListLogStreamsResponse) => void): grpc.ClientUnaryCall;
    public listLogStreams(request: ondewo_nlu_logs_pb.ListLogStreamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_logs_pb.ListLogStreamsResponse) => void): grpc.ClientUnaryCall;
    public exportLogs(request: ondewo_nlu_logs_pb.ExportLogsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_logs_pb.ExportLogsResponse>;
    public exportLogs(request: ondewo_nlu_logs_pb.ExportLogsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_logs_pb.ExportLogsResponse>;
    public deleteLogs(request: ondewo_nlu_logs_pb.DeleteLogsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_logs_pb.DeleteLogsResponse) => void): grpc.ClientUnaryCall;
    public deleteLogs(request: ondewo_nlu_logs_pb.DeleteLogsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_logs_pb.DeleteLogsResponse) => void): grpc.ClientUnaryCall;
    public deleteLogs(request: ondewo_nlu_logs_pb.DeleteLogsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_logs_pb.DeleteLogsResponse) => void): grpc.ClientUnaryCall;
}
