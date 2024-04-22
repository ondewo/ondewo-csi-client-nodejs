// package: ondewo.csi
// file: ondewo/csi/conversation.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ondewo_csi_conversation_pb from "../../ondewo/csi/conversation_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_rpc_status_pb from "../../google/rpc/status_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as ondewo_nlu_session_pb from "../../ondewo/nlu/session_pb";
import * as ondewo_t2s_text_to_speech_pb from "../../ondewo/t2s/text-to-speech_pb";
import * as ondewo_s2t_speech_to_text_pb from "../../ondewo/s2t/speech-to-text_pb";
import * as ondewo_nlu_context_pb from "../../ondewo/nlu/context_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

interface IConversationsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createS2sPipeline: IConversationsService_ICreateS2sPipeline;
    getS2sPipeline: IConversationsService_IGetS2sPipeline;
    updateS2sPipeline: IConversationsService_IUpdateS2sPipeline;
    deleteS2sPipeline: IConversationsService_IDeleteS2sPipeline;
    listS2sPipelines: IConversationsService_IListS2sPipelines;
    s2sStream: IConversationsService_IS2sStream;
    checkUpstreamHealth: IConversationsService_ICheckUpstreamHealth;
    getControlStream: IConversationsService_IGetControlStream;
    setControlStatus: IConversationsService_ISetControlStatus;
}

interface IConversationsService_ICreateS2sPipeline extends grpc.MethodDefinition<ondewo_csi_conversation_pb.S2sPipeline, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.csi.Conversations/CreateS2sPipeline";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_csi_conversation_pb.S2sPipeline>;
    requestDeserialize: grpc.deserialize<ondewo_csi_conversation_pb.S2sPipeline>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IConversationsService_IGetS2sPipeline extends grpc.MethodDefinition<ondewo_csi_conversation_pb.S2sPipelineId, ondewo_csi_conversation_pb.S2sPipeline> {
    path: "/ondewo.csi.Conversations/GetS2sPipeline";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_csi_conversation_pb.S2sPipelineId>;
    requestDeserialize: grpc.deserialize<ondewo_csi_conversation_pb.S2sPipelineId>;
    responseSerialize: grpc.serialize<ondewo_csi_conversation_pb.S2sPipeline>;
    responseDeserialize: grpc.deserialize<ondewo_csi_conversation_pb.S2sPipeline>;
}
interface IConversationsService_IUpdateS2sPipeline extends grpc.MethodDefinition<ondewo_csi_conversation_pb.S2sPipeline, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.csi.Conversations/UpdateS2sPipeline";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_csi_conversation_pb.S2sPipeline>;
    requestDeserialize: grpc.deserialize<ondewo_csi_conversation_pb.S2sPipeline>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IConversationsService_IDeleteS2sPipeline extends grpc.MethodDefinition<ondewo_csi_conversation_pb.S2sPipelineId, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.csi.Conversations/DeleteS2sPipeline";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_csi_conversation_pb.S2sPipelineId>;
    requestDeserialize: grpc.deserialize<ondewo_csi_conversation_pb.S2sPipelineId>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IConversationsService_IListS2sPipelines extends grpc.MethodDefinition<ondewo_csi_conversation_pb.ListS2sPipelinesRequest, ondewo_csi_conversation_pb.ListS2sPipelinesResponse> {
    path: "/ondewo.csi.Conversations/ListS2sPipelines";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_csi_conversation_pb.ListS2sPipelinesRequest>;
    requestDeserialize: grpc.deserialize<ondewo_csi_conversation_pb.ListS2sPipelinesRequest>;
    responseSerialize: grpc.serialize<ondewo_csi_conversation_pb.ListS2sPipelinesResponse>;
    responseDeserialize: grpc.deserialize<ondewo_csi_conversation_pb.ListS2sPipelinesResponse>;
}
interface IConversationsService_IS2sStream extends grpc.MethodDefinition<ondewo_csi_conversation_pb.S2sStreamRequest, ondewo_csi_conversation_pb.S2sStreamResponse> {
    path: "/ondewo.csi.Conversations/S2sStream";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<ondewo_csi_conversation_pb.S2sStreamRequest>;
    requestDeserialize: grpc.deserialize<ondewo_csi_conversation_pb.S2sStreamRequest>;
    responseSerialize: grpc.serialize<ondewo_csi_conversation_pb.S2sStreamResponse>;
    responseDeserialize: grpc.deserialize<ondewo_csi_conversation_pb.S2sStreamResponse>;
}
interface IConversationsService_ICheckUpstreamHealth extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, ondewo_csi_conversation_pb.CheckUpstreamHealthResponse> {
    path: "/ondewo.csi.Conversations/CheckUpstreamHealth";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<ondewo_csi_conversation_pb.CheckUpstreamHealthResponse>;
    responseDeserialize: grpc.deserialize<ondewo_csi_conversation_pb.CheckUpstreamHealthResponse>;
}
interface IConversationsService_IGetControlStream extends grpc.MethodDefinition<ondewo_csi_conversation_pb.ControlStreamRequest, ondewo_csi_conversation_pb.ControlStreamResponse> {
    path: "/ondewo.csi.Conversations/GetControlStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<ondewo_csi_conversation_pb.ControlStreamRequest>;
    requestDeserialize: grpc.deserialize<ondewo_csi_conversation_pb.ControlStreamRequest>;
    responseSerialize: grpc.serialize<ondewo_csi_conversation_pb.ControlStreamResponse>;
    responseDeserialize: grpc.deserialize<ondewo_csi_conversation_pb.ControlStreamResponse>;
}
interface IConversationsService_ISetControlStatus extends grpc.MethodDefinition<ondewo_csi_conversation_pb.SetControlStatusRequest, ondewo_csi_conversation_pb.SetControlStatusResponse> {
    path: "/ondewo.csi.Conversations/SetControlStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_csi_conversation_pb.SetControlStatusRequest>;
    requestDeserialize: grpc.deserialize<ondewo_csi_conversation_pb.SetControlStatusRequest>;
    responseSerialize: grpc.serialize<ondewo_csi_conversation_pb.SetControlStatusResponse>;
    responseDeserialize: grpc.deserialize<ondewo_csi_conversation_pb.SetControlStatusResponse>;
}

export const ConversationsService: IConversationsService;

export interface IConversationsServer {
    createS2sPipeline: grpc.handleUnaryCall<ondewo_csi_conversation_pb.S2sPipeline, google_protobuf_empty_pb.Empty>;
    getS2sPipeline: grpc.handleUnaryCall<ondewo_csi_conversation_pb.S2sPipelineId, ondewo_csi_conversation_pb.S2sPipeline>;
    updateS2sPipeline: grpc.handleUnaryCall<ondewo_csi_conversation_pb.S2sPipeline, google_protobuf_empty_pb.Empty>;
    deleteS2sPipeline: grpc.handleUnaryCall<ondewo_csi_conversation_pb.S2sPipelineId, google_protobuf_empty_pb.Empty>;
    listS2sPipelines: grpc.handleUnaryCall<ondewo_csi_conversation_pb.ListS2sPipelinesRequest, ondewo_csi_conversation_pb.ListS2sPipelinesResponse>;
    s2sStream: grpc.handleBidiStreamingCall<ondewo_csi_conversation_pb.S2sStreamRequest, ondewo_csi_conversation_pb.S2sStreamResponse>;
    checkUpstreamHealth: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, ondewo_csi_conversation_pb.CheckUpstreamHealthResponse>;
    getControlStream: grpc.handleServerStreamingCall<ondewo_csi_conversation_pb.ControlStreamRequest, ondewo_csi_conversation_pb.ControlStreamResponse>;
    setControlStatus: grpc.handleUnaryCall<ondewo_csi_conversation_pb.SetControlStatusRequest, ondewo_csi_conversation_pb.SetControlStatusResponse>;
}

export interface IConversationsClient {
    createS2sPipeline(request: ondewo_csi_conversation_pb.S2sPipeline, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createS2sPipeline(request: ondewo_csi_conversation_pb.S2sPipeline, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    createS2sPipeline(request: ondewo_csi_conversation_pb.S2sPipeline, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getS2sPipeline(request: ondewo_csi_conversation_pb.S2sPipelineId, callback: (error: grpc.ServiceError | null, response: ondewo_csi_conversation_pb.S2sPipeline) => void): grpc.ClientUnaryCall;
    getS2sPipeline(request: ondewo_csi_conversation_pb.S2sPipelineId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_csi_conversation_pb.S2sPipeline) => void): grpc.ClientUnaryCall;
    getS2sPipeline(request: ondewo_csi_conversation_pb.S2sPipelineId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_csi_conversation_pb.S2sPipeline) => void): grpc.ClientUnaryCall;
    updateS2sPipeline(request: ondewo_csi_conversation_pb.S2sPipeline, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateS2sPipeline(request: ondewo_csi_conversation_pb.S2sPipeline, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateS2sPipeline(request: ondewo_csi_conversation_pb.S2sPipeline, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteS2sPipeline(request: ondewo_csi_conversation_pb.S2sPipelineId, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteS2sPipeline(request: ondewo_csi_conversation_pb.S2sPipelineId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteS2sPipeline(request: ondewo_csi_conversation_pb.S2sPipelineId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    listS2sPipelines(request: ondewo_csi_conversation_pb.ListS2sPipelinesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_csi_conversation_pb.ListS2sPipelinesResponse) => void): grpc.ClientUnaryCall;
    listS2sPipelines(request: ondewo_csi_conversation_pb.ListS2sPipelinesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_csi_conversation_pb.ListS2sPipelinesResponse) => void): grpc.ClientUnaryCall;
    listS2sPipelines(request: ondewo_csi_conversation_pb.ListS2sPipelinesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_csi_conversation_pb.ListS2sPipelinesResponse) => void): grpc.ClientUnaryCall;
    s2sStream(): grpc.ClientDuplexStream<ondewo_csi_conversation_pb.S2sStreamRequest, ondewo_csi_conversation_pb.S2sStreamResponse>;
    s2sStream(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<ondewo_csi_conversation_pb.S2sStreamRequest, ondewo_csi_conversation_pb.S2sStreamResponse>;
    s2sStream(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<ondewo_csi_conversation_pb.S2sStreamRequest, ondewo_csi_conversation_pb.S2sStreamResponse>;
    checkUpstreamHealth(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: ondewo_csi_conversation_pb.CheckUpstreamHealthResponse) => void): grpc.ClientUnaryCall;
    checkUpstreamHealth(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_csi_conversation_pb.CheckUpstreamHealthResponse) => void): grpc.ClientUnaryCall;
    checkUpstreamHealth(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_csi_conversation_pb.CheckUpstreamHealthResponse) => void): grpc.ClientUnaryCall;
    getControlStream(request: ondewo_csi_conversation_pb.ControlStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_csi_conversation_pb.ControlStreamResponse>;
    getControlStream(request: ondewo_csi_conversation_pb.ControlStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_csi_conversation_pb.ControlStreamResponse>;
    setControlStatus(request: ondewo_csi_conversation_pb.SetControlStatusRequest, callback: (error: grpc.ServiceError | null, response: ondewo_csi_conversation_pb.SetControlStatusResponse) => void): grpc.ClientUnaryCall;
    setControlStatus(request: ondewo_csi_conversation_pb.SetControlStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_csi_conversation_pb.SetControlStatusResponse) => void): grpc.ClientUnaryCall;
    setControlStatus(request: ondewo_csi_conversation_pb.SetControlStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_csi_conversation_pb.SetControlStatusResponse) => void): grpc.ClientUnaryCall;
}

export class ConversationsClient extends grpc.Client implements IConversationsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createS2sPipeline(request: ondewo_csi_conversation_pb.S2sPipeline, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createS2sPipeline(request: ondewo_csi_conversation_pb.S2sPipeline, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public createS2sPipeline(request: ondewo_csi_conversation_pb.S2sPipeline, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getS2sPipeline(request: ondewo_csi_conversation_pb.S2sPipelineId, callback: (error: grpc.ServiceError | null, response: ondewo_csi_conversation_pb.S2sPipeline) => void): grpc.ClientUnaryCall;
    public getS2sPipeline(request: ondewo_csi_conversation_pb.S2sPipelineId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_csi_conversation_pb.S2sPipeline) => void): grpc.ClientUnaryCall;
    public getS2sPipeline(request: ondewo_csi_conversation_pb.S2sPipelineId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_csi_conversation_pb.S2sPipeline) => void): grpc.ClientUnaryCall;
    public updateS2sPipeline(request: ondewo_csi_conversation_pb.S2sPipeline, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateS2sPipeline(request: ondewo_csi_conversation_pb.S2sPipeline, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateS2sPipeline(request: ondewo_csi_conversation_pb.S2sPipeline, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteS2sPipeline(request: ondewo_csi_conversation_pb.S2sPipelineId, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteS2sPipeline(request: ondewo_csi_conversation_pb.S2sPipelineId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteS2sPipeline(request: ondewo_csi_conversation_pb.S2sPipelineId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public listS2sPipelines(request: ondewo_csi_conversation_pb.ListS2sPipelinesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_csi_conversation_pb.ListS2sPipelinesResponse) => void): grpc.ClientUnaryCall;
    public listS2sPipelines(request: ondewo_csi_conversation_pb.ListS2sPipelinesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_csi_conversation_pb.ListS2sPipelinesResponse) => void): grpc.ClientUnaryCall;
    public listS2sPipelines(request: ondewo_csi_conversation_pb.ListS2sPipelinesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_csi_conversation_pb.ListS2sPipelinesResponse) => void): grpc.ClientUnaryCall;
    public s2sStream(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<ondewo_csi_conversation_pb.S2sStreamRequest, ondewo_csi_conversation_pb.S2sStreamResponse>;
    public s2sStream(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<ondewo_csi_conversation_pb.S2sStreamRequest, ondewo_csi_conversation_pb.S2sStreamResponse>;
    public checkUpstreamHealth(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: ondewo_csi_conversation_pb.CheckUpstreamHealthResponse) => void): grpc.ClientUnaryCall;
    public checkUpstreamHealth(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_csi_conversation_pb.CheckUpstreamHealthResponse) => void): grpc.ClientUnaryCall;
    public checkUpstreamHealth(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_csi_conversation_pb.CheckUpstreamHealthResponse) => void): grpc.ClientUnaryCall;
    public getControlStream(request: ondewo_csi_conversation_pb.ControlStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_csi_conversation_pb.ControlStreamResponse>;
    public getControlStream(request: ondewo_csi_conversation_pb.ControlStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_csi_conversation_pb.ControlStreamResponse>;
    public setControlStatus(request: ondewo_csi_conversation_pb.SetControlStatusRequest, callback: (error: grpc.ServiceError | null, response: ondewo_csi_conversation_pb.SetControlStatusResponse) => void): grpc.ClientUnaryCall;
    public setControlStatus(request: ondewo_csi_conversation_pb.SetControlStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_csi_conversation_pb.SetControlStatusResponse) => void): grpc.ClientUnaryCall;
    public setControlStatus(request: ondewo_csi_conversation_pb.SetControlStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_csi_conversation_pb.SetControlStatusResponse) => void): grpc.ClientUnaryCall;
}
