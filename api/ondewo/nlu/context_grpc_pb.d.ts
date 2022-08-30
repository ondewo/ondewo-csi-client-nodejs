// package: ondewo.nlu
// file: ondewo/nlu/context.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ondewo_nlu_context_pb from "../../ondewo/nlu/context_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

interface IContextsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listContexts: IContextsService_IListContexts;
    getContext: IContextsService_IGetContext;
    createContext: IContextsService_ICreateContext;
    updateContext: IContextsService_IUpdateContext;
    deleteContext: IContextsService_IDeleteContext;
    deleteAllContexts: IContextsService_IDeleteAllContexts;
}

interface IContextsService_IListContexts extends grpc.MethodDefinition<ondewo_nlu_context_pb.ListContextsRequest, ondewo_nlu_context_pb.ListContextsResponse> {
    path: "/ondewo.nlu.Contexts/ListContexts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_context_pb.ListContextsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_context_pb.ListContextsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_context_pb.ListContextsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_context_pb.ListContextsResponse>;
}
interface IContextsService_IGetContext extends grpc.MethodDefinition<ondewo_nlu_context_pb.GetContextRequest, ondewo_nlu_context_pb.Context> {
    path: "/ondewo.nlu.Contexts/GetContext";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_context_pb.GetContextRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_context_pb.GetContextRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_context_pb.Context>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_context_pb.Context>;
}
interface IContextsService_ICreateContext extends grpc.MethodDefinition<ondewo_nlu_context_pb.CreateContextRequest, ondewo_nlu_context_pb.Context> {
    path: "/ondewo.nlu.Contexts/CreateContext";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_context_pb.CreateContextRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_context_pb.CreateContextRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_context_pb.Context>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_context_pb.Context>;
}
interface IContextsService_IUpdateContext extends grpc.MethodDefinition<ondewo_nlu_context_pb.UpdateContextRequest, ondewo_nlu_context_pb.Context> {
    path: "/ondewo.nlu.Contexts/UpdateContext";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_context_pb.UpdateContextRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_context_pb.UpdateContextRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_context_pb.Context>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_context_pb.Context>;
}
interface IContextsService_IDeleteContext extends grpc.MethodDefinition<ondewo_nlu_context_pb.DeleteContextRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.Contexts/DeleteContext";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_context_pb.DeleteContextRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_context_pb.DeleteContextRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IContextsService_IDeleteAllContexts extends grpc.MethodDefinition<ondewo_nlu_context_pb.DeleteAllContextsRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.Contexts/DeleteAllContexts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_context_pb.DeleteAllContextsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_context_pb.DeleteAllContextsRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const ContextsService: IContextsService;

export interface IContextsServer {
    listContexts: grpc.handleUnaryCall<ondewo_nlu_context_pb.ListContextsRequest, ondewo_nlu_context_pb.ListContextsResponse>;
    getContext: grpc.handleUnaryCall<ondewo_nlu_context_pb.GetContextRequest, ondewo_nlu_context_pb.Context>;
    createContext: grpc.handleUnaryCall<ondewo_nlu_context_pb.CreateContextRequest, ondewo_nlu_context_pb.Context>;
    updateContext: grpc.handleUnaryCall<ondewo_nlu_context_pb.UpdateContextRequest, ondewo_nlu_context_pb.Context>;
    deleteContext: grpc.handleUnaryCall<ondewo_nlu_context_pb.DeleteContextRequest, google_protobuf_empty_pb.Empty>;
    deleteAllContexts: grpc.handleUnaryCall<ondewo_nlu_context_pb.DeleteAllContextsRequest, google_protobuf_empty_pb.Empty>;
}

export interface IContextsClient {
    listContexts(request: ondewo_nlu_context_pb.ListContextsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_context_pb.ListContextsResponse) => void): grpc.ClientUnaryCall;
    listContexts(request: ondewo_nlu_context_pb.ListContextsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_context_pb.ListContextsResponse) => void): grpc.ClientUnaryCall;
    listContexts(request: ondewo_nlu_context_pb.ListContextsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_context_pb.ListContextsResponse) => void): grpc.ClientUnaryCall;
    getContext(request: ondewo_nlu_context_pb.GetContextRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_context_pb.Context) => void): grpc.ClientUnaryCall;
    getContext(request: ondewo_nlu_context_pb.GetContextRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_context_pb.Context) => void): grpc.ClientUnaryCall;
    getContext(request: ondewo_nlu_context_pb.GetContextRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_context_pb.Context) => void): grpc.ClientUnaryCall;
    createContext(request: ondewo_nlu_context_pb.CreateContextRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_context_pb.Context) => void): grpc.ClientUnaryCall;
    createContext(request: ondewo_nlu_context_pb.CreateContextRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_context_pb.Context) => void): grpc.ClientUnaryCall;
    createContext(request: ondewo_nlu_context_pb.CreateContextRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_context_pb.Context) => void): grpc.ClientUnaryCall;
    updateContext(request: ondewo_nlu_context_pb.UpdateContextRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_context_pb.Context) => void): grpc.ClientUnaryCall;
    updateContext(request: ondewo_nlu_context_pb.UpdateContextRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_context_pb.Context) => void): grpc.ClientUnaryCall;
    updateContext(request: ondewo_nlu_context_pb.UpdateContextRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_context_pb.Context) => void): grpc.ClientUnaryCall;
    deleteContext(request: ondewo_nlu_context_pb.DeleteContextRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteContext(request: ondewo_nlu_context_pb.DeleteContextRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteContext(request: ondewo_nlu_context_pb.DeleteContextRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteAllContexts(request: ondewo_nlu_context_pb.DeleteAllContextsRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteAllContexts(request: ondewo_nlu_context_pb.DeleteAllContextsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteAllContexts(request: ondewo_nlu_context_pb.DeleteAllContextsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class ContextsClient extends grpc.Client implements IContextsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public listContexts(request: ondewo_nlu_context_pb.ListContextsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_context_pb.ListContextsResponse) => void): grpc.ClientUnaryCall;
    public listContexts(request: ondewo_nlu_context_pb.ListContextsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_context_pb.ListContextsResponse) => void): grpc.ClientUnaryCall;
    public listContexts(request: ondewo_nlu_context_pb.ListContextsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_context_pb.ListContextsResponse) => void): grpc.ClientUnaryCall;
    public getContext(request: ondewo_nlu_context_pb.GetContextRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_context_pb.Context) => void): grpc.ClientUnaryCall;
    public getContext(request: ondewo_nlu_context_pb.GetContextRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_context_pb.Context) => void): grpc.ClientUnaryCall;
    public getContext(request: ondewo_nlu_context_pb.GetContextRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_context_pb.Context) => void): grpc.ClientUnaryCall;
    public createContext(request: ondewo_nlu_context_pb.CreateContextRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_context_pb.Context) => void): grpc.ClientUnaryCall;
    public createContext(request: ondewo_nlu_context_pb.CreateContextRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_context_pb.Context) => void): grpc.ClientUnaryCall;
    public createContext(request: ondewo_nlu_context_pb.CreateContextRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_context_pb.Context) => void): grpc.ClientUnaryCall;
    public updateContext(request: ondewo_nlu_context_pb.UpdateContextRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_context_pb.Context) => void): grpc.ClientUnaryCall;
    public updateContext(request: ondewo_nlu_context_pb.UpdateContextRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_context_pb.Context) => void): grpc.ClientUnaryCall;
    public updateContext(request: ondewo_nlu_context_pb.UpdateContextRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_context_pb.Context) => void): grpc.ClientUnaryCall;
    public deleteContext(request: ondewo_nlu_context_pb.DeleteContextRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteContext(request: ondewo_nlu_context_pb.DeleteContextRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteContext(request: ondewo_nlu_context_pb.DeleteContextRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteAllContexts(request: ondewo_nlu_context_pb.DeleteAllContextsRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteAllContexts(request: ondewo_nlu_context_pb.DeleteAllContextsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteAllContexts(request: ondewo_nlu_context_pb.DeleteAllContextsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
