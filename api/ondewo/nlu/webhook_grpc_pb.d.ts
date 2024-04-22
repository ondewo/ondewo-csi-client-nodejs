// package: ondewo.nlu
// file: ondewo/nlu/webhook.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ondewo_nlu_webhook_pb from "../../ondewo/nlu/webhook_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as ondewo_nlu_entity_type_pb from "../../ondewo/nlu/entity_type_pb";
import * as ondewo_nlu_context_pb from "../../ondewo/nlu/context_pb";
import * as ondewo_nlu_intent_pb from "../../ondewo/nlu/intent_pb";
import * as ondewo_nlu_session_pb from "../../ondewo/nlu/session_pb";

interface IWebhookService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    responseRefinement: IWebhookService_IResponseRefinement;
    slotFilling: IWebhookService_ISlotFilling;
    ping: IWebhookService_IPing;
    createSessionEntityType: IWebhookService_ICreateSessionEntityType;
    updateSessionEntityType: IWebhookService_IUpdateSessionEntityType;
    deleteSessionEntityType: IWebhookService_IDeleteSessionEntityType;
}

interface IWebhookService_IResponseRefinement extends grpc.MethodDefinition<ondewo_nlu_webhook_pb.WebhookRequest, ondewo_nlu_webhook_pb.WebhookResponse> {
    path: "/ondewo.nlu.Webhook/ResponseRefinement";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_webhook_pb.WebhookRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_webhook_pb.WebhookRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_webhook_pb.WebhookResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_webhook_pb.WebhookResponse>;
}
interface IWebhookService_ISlotFilling extends grpc.MethodDefinition<ondewo_nlu_webhook_pb.WebhookRequest, ondewo_nlu_webhook_pb.WebhookResponse> {
    path: "/ondewo.nlu.Webhook/SlotFilling";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_webhook_pb.WebhookRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_webhook_pb.WebhookRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_webhook_pb.WebhookResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_webhook_pb.WebhookResponse>;
}
interface IWebhookService_IPing extends grpc.MethodDefinition<ondewo_nlu_webhook_pb.PingRequest, ondewo_nlu_webhook_pb.PingResponse> {
    path: "/ondewo.nlu.Webhook/Ping";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_webhook_pb.PingRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_webhook_pb.PingRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_webhook_pb.PingResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_webhook_pb.PingResponse>;
}
interface IWebhookService_ICreateSessionEntityType extends grpc.MethodDefinition<ondewo_nlu_webhook_pb.CreateSessionEntityTypeRequest, ondewo_nlu_webhook_pb.SessionEntityType> {
    path: "/ondewo.nlu.Webhook/CreateSessionEntityType";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_webhook_pb.CreateSessionEntityTypeRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_webhook_pb.CreateSessionEntityTypeRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_webhook_pb.SessionEntityType>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_webhook_pb.SessionEntityType>;
}
interface IWebhookService_IUpdateSessionEntityType extends grpc.MethodDefinition<ondewo_nlu_webhook_pb.UpdateSessionEntityTypeRequest, ondewo_nlu_webhook_pb.SessionEntityType> {
    path: "/ondewo.nlu.Webhook/UpdateSessionEntityType";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_webhook_pb.UpdateSessionEntityTypeRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_webhook_pb.UpdateSessionEntityTypeRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_webhook_pb.SessionEntityType>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_webhook_pb.SessionEntityType>;
}
interface IWebhookService_IDeleteSessionEntityType extends grpc.MethodDefinition<ondewo_nlu_webhook_pb.DeleteSessionEntityTypeRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.Webhook/DeleteSessionEntityType";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_webhook_pb.DeleteSessionEntityTypeRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_webhook_pb.DeleteSessionEntityTypeRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const WebhookService: IWebhookService;

export interface IWebhookServer {
    responseRefinement: grpc.handleUnaryCall<ondewo_nlu_webhook_pb.WebhookRequest, ondewo_nlu_webhook_pb.WebhookResponse>;
    slotFilling: grpc.handleUnaryCall<ondewo_nlu_webhook_pb.WebhookRequest, ondewo_nlu_webhook_pb.WebhookResponse>;
    ping: grpc.handleUnaryCall<ondewo_nlu_webhook_pb.PingRequest, ondewo_nlu_webhook_pb.PingResponse>;
    createSessionEntityType: grpc.handleUnaryCall<ondewo_nlu_webhook_pb.CreateSessionEntityTypeRequest, ondewo_nlu_webhook_pb.SessionEntityType>;
    updateSessionEntityType: grpc.handleUnaryCall<ondewo_nlu_webhook_pb.UpdateSessionEntityTypeRequest, ondewo_nlu_webhook_pb.SessionEntityType>;
    deleteSessionEntityType: grpc.handleUnaryCall<ondewo_nlu_webhook_pb.DeleteSessionEntityTypeRequest, google_protobuf_empty_pb.Empty>;
}

export interface IWebhookClient {
    responseRefinement(request: ondewo_nlu_webhook_pb.WebhookRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_webhook_pb.WebhookResponse) => void): grpc.ClientUnaryCall;
    responseRefinement(request: ondewo_nlu_webhook_pb.WebhookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_webhook_pb.WebhookResponse) => void): grpc.ClientUnaryCall;
    responseRefinement(request: ondewo_nlu_webhook_pb.WebhookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_webhook_pb.WebhookResponse) => void): grpc.ClientUnaryCall;
    slotFilling(request: ondewo_nlu_webhook_pb.WebhookRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_webhook_pb.WebhookResponse) => void): grpc.ClientUnaryCall;
    slotFilling(request: ondewo_nlu_webhook_pb.WebhookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_webhook_pb.WebhookResponse) => void): grpc.ClientUnaryCall;
    slotFilling(request: ondewo_nlu_webhook_pb.WebhookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_webhook_pb.WebhookResponse) => void): grpc.ClientUnaryCall;
    ping(request: ondewo_nlu_webhook_pb.PingRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_webhook_pb.PingResponse) => void): grpc.ClientUnaryCall;
    ping(request: ondewo_nlu_webhook_pb.PingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_webhook_pb.PingResponse) => void): grpc.ClientUnaryCall;
    ping(request: ondewo_nlu_webhook_pb.PingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_webhook_pb.PingResponse) => void): grpc.ClientUnaryCall;
    createSessionEntityType(request: ondewo_nlu_webhook_pb.CreateSessionEntityTypeRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_webhook_pb.SessionEntityType) => void): grpc.ClientUnaryCall;
    createSessionEntityType(request: ondewo_nlu_webhook_pb.CreateSessionEntityTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_webhook_pb.SessionEntityType) => void): grpc.ClientUnaryCall;
    createSessionEntityType(request: ondewo_nlu_webhook_pb.CreateSessionEntityTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_webhook_pb.SessionEntityType) => void): grpc.ClientUnaryCall;
    updateSessionEntityType(request: ondewo_nlu_webhook_pb.UpdateSessionEntityTypeRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_webhook_pb.SessionEntityType) => void): grpc.ClientUnaryCall;
    updateSessionEntityType(request: ondewo_nlu_webhook_pb.UpdateSessionEntityTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_webhook_pb.SessionEntityType) => void): grpc.ClientUnaryCall;
    updateSessionEntityType(request: ondewo_nlu_webhook_pb.UpdateSessionEntityTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_webhook_pb.SessionEntityType) => void): grpc.ClientUnaryCall;
    deleteSessionEntityType(request: ondewo_nlu_webhook_pb.DeleteSessionEntityTypeRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteSessionEntityType(request: ondewo_nlu_webhook_pb.DeleteSessionEntityTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteSessionEntityType(request: ondewo_nlu_webhook_pb.DeleteSessionEntityTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class WebhookClient extends grpc.Client implements IWebhookClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public responseRefinement(request: ondewo_nlu_webhook_pb.WebhookRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_webhook_pb.WebhookResponse) => void): grpc.ClientUnaryCall;
    public responseRefinement(request: ondewo_nlu_webhook_pb.WebhookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_webhook_pb.WebhookResponse) => void): grpc.ClientUnaryCall;
    public responseRefinement(request: ondewo_nlu_webhook_pb.WebhookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_webhook_pb.WebhookResponse) => void): grpc.ClientUnaryCall;
    public slotFilling(request: ondewo_nlu_webhook_pb.WebhookRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_webhook_pb.WebhookResponse) => void): grpc.ClientUnaryCall;
    public slotFilling(request: ondewo_nlu_webhook_pb.WebhookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_webhook_pb.WebhookResponse) => void): grpc.ClientUnaryCall;
    public slotFilling(request: ondewo_nlu_webhook_pb.WebhookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_webhook_pb.WebhookResponse) => void): grpc.ClientUnaryCall;
    public ping(request: ondewo_nlu_webhook_pb.PingRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_webhook_pb.PingResponse) => void): grpc.ClientUnaryCall;
    public ping(request: ondewo_nlu_webhook_pb.PingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_webhook_pb.PingResponse) => void): grpc.ClientUnaryCall;
    public ping(request: ondewo_nlu_webhook_pb.PingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_webhook_pb.PingResponse) => void): grpc.ClientUnaryCall;
    public createSessionEntityType(request: ondewo_nlu_webhook_pb.CreateSessionEntityTypeRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_webhook_pb.SessionEntityType) => void): grpc.ClientUnaryCall;
    public createSessionEntityType(request: ondewo_nlu_webhook_pb.CreateSessionEntityTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_webhook_pb.SessionEntityType) => void): grpc.ClientUnaryCall;
    public createSessionEntityType(request: ondewo_nlu_webhook_pb.CreateSessionEntityTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_webhook_pb.SessionEntityType) => void): grpc.ClientUnaryCall;
    public updateSessionEntityType(request: ondewo_nlu_webhook_pb.UpdateSessionEntityTypeRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_webhook_pb.SessionEntityType) => void): grpc.ClientUnaryCall;
    public updateSessionEntityType(request: ondewo_nlu_webhook_pb.UpdateSessionEntityTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_webhook_pb.SessionEntityType) => void): grpc.ClientUnaryCall;
    public updateSessionEntityType(request: ondewo_nlu_webhook_pb.UpdateSessionEntityTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_webhook_pb.SessionEntityType) => void): grpc.ClientUnaryCall;
    public deleteSessionEntityType(request: ondewo_nlu_webhook_pb.DeleteSessionEntityTypeRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteSessionEntityType(request: ondewo_nlu_webhook_pb.DeleteSessionEntityTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteSessionEntityType(request: ondewo_nlu_webhook_pb.DeleteSessionEntityTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
