// package: ondewo.nlu
// file: ondewo/nlu/session.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ondewo_nlu_session_pb from "../../ondewo/nlu/session_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_rpc_status_pb from "../../google/rpc/status_pb";
import * as google_type_latlng_pb from "../../google/type/latlng_pb";
import * as ondewo_nlu_context_pb from "../../ondewo/nlu/context_pb";
import * as ondewo_nlu_intent_pb from "../../ondewo/nlu/intent_pb";
import * as ondewo_nlu_entity_type_pb from "../../ondewo/nlu/entity_type_pb";

interface ISessionsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    detectIntent: ISessionsService_IDetectIntent;
    streamingDetectIntent: ISessionsService_IStreamingDetectIntent;
    listSessions: ISessionsService_IListSessions;
    getSession: ISessionsService_IGetSession;
    createSession: ISessionsService_ICreateSession;
    trackSessionStep: ISessionsService_ITrackSessionStep;
    deleteSession: ISessionsService_IDeleteSession;
    listSessionLabels: ISessionsService_IListSessionLabels;
    addSessionLabels: ISessionsService_IAddSessionLabels;
    removeSessionLabels: ISessionsService_IRemoveSessionLabels;
    listSessionReviews: ISessionsService_IListSessionReviews;
    getSessionReview: ISessionsService_IGetSessionReview;
    getLatestSessionReview: ISessionsService_IGetLatestSessionReview;
    createSessionReview: ISessionsService_ICreateSessionReview;
}

interface ISessionsService_IDetectIntent extends grpc.MethodDefinition<ondewo_nlu_session_pb.DetectIntentRequest, ondewo_nlu_session_pb.DetectIntentResponse> {
    path: "/ondewo.nlu.Sessions/DetectIntent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_session_pb.DetectIntentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_session_pb.DetectIntentRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_session_pb.DetectIntentResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_session_pb.DetectIntentResponse>;
}
interface ISessionsService_IStreamingDetectIntent extends grpc.MethodDefinition<ondewo_nlu_session_pb.StreamingDetectIntentRequest, ondewo_nlu_session_pb.StreamingDetectIntentResponse> {
    path: "/ondewo.nlu.Sessions/StreamingDetectIntent";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<ondewo_nlu_session_pb.StreamingDetectIntentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_session_pb.StreamingDetectIntentRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_session_pb.StreamingDetectIntentResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_session_pb.StreamingDetectIntentResponse>;
}
interface ISessionsService_IListSessions extends grpc.MethodDefinition<ondewo_nlu_session_pb.ListSessionsRequest, ondewo_nlu_session_pb.ListSessionsResponse> {
    path: "/ondewo.nlu.Sessions/ListSessions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_session_pb.ListSessionsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_session_pb.ListSessionsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_session_pb.ListSessionsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_session_pb.ListSessionsResponse>;
}
interface ISessionsService_IGetSession extends grpc.MethodDefinition<ondewo_nlu_session_pb.GetSessionRequest, ondewo_nlu_session_pb.Session> {
    path: "/ondewo.nlu.Sessions/GetSession";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_session_pb.GetSessionRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_session_pb.GetSessionRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_session_pb.Session>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_session_pb.Session>;
}
interface ISessionsService_ICreateSession extends grpc.MethodDefinition<ondewo_nlu_session_pb.CreateSessionRequest, ondewo_nlu_session_pb.Session> {
    path: "/ondewo.nlu.Sessions/CreateSession";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_session_pb.CreateSessionRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_session_pb.CreateSessionRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_session_pb.Session>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_session_pb.Session>;
}
interface ISessionsService_ITrackSessionStep extends grpc.MethodDefinition<ondewo_nlu_session_pb.TrackSessionStepRequest, ondewo_nlu_session_pb.Session> {
    path: "/ondewo.nlu.Sessions/TrackSessionStep";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_session_pb.TrackSessionStepRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_session_pb.TrackSessionStepRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_session_pb.Session>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_session_pb.Session>;
}
interface ISessionsService_IDeleteSession extends grpc.MethodDefinition<ondewo_nlu_session_pb.DeleteSessionRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.Sessions/DeleteSession";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_session_pb.DeleteSessionRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_session_pb.DeleteSessionRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ISessionsService_IListSessionLabels extends grpc.MethodDefinition<ondewo_nlu_session_pb.ListSessionLabelsRequest, ondewo_nlu_session_pb.ListSessionLabelsResponse> {
    path: "/ondewo.nlu.Sessions/ListSessionLabels";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_session_pb.ListSessionLabelsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_session_pb.ListSessionLabelsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_session_pb.ListSessionLabelsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_session_pb.ListSessionLabelsResponse>;
}
interface ISessionsService_IAddSessionLabels extends grpc.MethodDefinition<ondewo_nlu_session_pb.AddSessionLabelsRequest, ondewo_nlu_session_pb.Session> {
    path: "/ondewo.nlu.Sessions/AddSessionLabels";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_session_pb.AddSessionLabelsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_session_pb.AddSessionLabelsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_session_pb.Session>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_session_pb.Session>;
}
interface ISessionsService_IRemoveSessionLabels extends grpc.MethodDefinition<ondewo_nlu_session_pb.RemoveSessionLabelsRequest, ondewo_nlu_session_pb.Session> {
    path: "/ondewo.nlu.Sessions/RemoveSessionLabels";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_session_pb.RemoveSessionLabelsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_session_pb.RemoveSessionLabelsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_session_pb.Session>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_session_pb.Session>;
}
interface ISessionsService_IListSessionReviews extends grpc.MethodDefinition<ondewo_nlu_session_pb.ListSessionReviewsRequest, ondewo_nlu_session_pb.ListSessionReviewsResponse> {
    path: "/ondewo.nlu.Sessions/ListSessionReviews";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_session_pb.ListSessionReviewsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_session_pb.ListSessionReviewsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_session_pb.ListSessionReviewsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_session_pb.ListSessionReviewsResponse>;
}
interface ISessionsService_IGetSessionReview extends grpc.MethodDefinition<ondewo_nlu_session_pb.GetSessionReviewRequest, ondewo_nlu_session_pb.SessionReview> {
    path: "/ondewo.nlu.Sessions/GetSessionReview";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_session_pb.GetSessionReviewRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_session_pb.GetSessionReviewRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_session_pb.SessionReview>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_session_pb.SessionReview>;
}
interface ISessionsService_IGetLatestSessionReview extends grpc.MethodDefinition<ondewo_nlu_session_pb.GetLatestSessionReviewRequest, ondewo_nlu_session_pb.SessionReview> {
    path: "/ondewo.nlu.Sessions/GetLatestSessionReview";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_session_pb.GetLatestSessionReviewRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_session_pb.GetLatestSessionReviewRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_session_pb.SessionReview>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_session_pb.SessionReview>;
}
interface ISessionsService_ICreateSessionReview extends grpc.MethodDefinition<ondewo_nlu_session_pb.CreateSessionReviewRequest, ondewo_nlu_session_pb.SessionReview> {
    path: "/ondewo.nlu.Sessions/CreateSessionReview";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_session_pb.CreateSessionReviewRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_session_pb.CreateSessionReviewRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_session_pb.SessionReview>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_session_pb.SessionReview>;
}

export const SessionsService: ISessionsService;

export interface ISessionsServer {
    detectIntent: grpc.handleUnaryCall<ondewo_nlu_session_pb.DetectIntentRequest, ondewo_nlu_session_pb.DetectIntentResponse>;
    streamingDetectIntent: grpc.handleBidiStreamingCall<ondewo_nlu_session_pb.StreamingDetectIntentRequest, ondewo_nlu_session_pb.StreamingDetectIntentResponse>;
    listSessions: grpc.handleUnaryCall<ondewo_nlu_session_pb.ListSessionsRequest, ondewo_nlu_session_pb.ListSessionsResponse>;
    getSession: grpc.handleUnaryCall<ondewo_nlu_session_pb.GetSessionRequest, ondewo_nlu_session_pb.Session>;
    createSession: grpc.handleUnaryCall<ondewo_nlu_session_pb.CreateSessionRequest, ondewo_nlu_session_pb.Session>;
    trackSessionStep: grpc.handleUnaryCall<ondewo_nlu_session_pb.TrackSessionStepRequest, ondewo_nlu_session_pb.Session>;
    deleteSession: grpc.handleUnaryCall<ondewo_nlu_session_pb.DeleteSessionRequest, google_protobuf_empty_pb.Empty>;
    listSessionLabels: grpc.handleUnaryCall<ondewo_nlu_session_pb.ListSessionLabelsRequest, ondewo_nlu_session_pb.ListSessionLabelsResponse>;
    addSessionLabels: grpc.handleUnaryCall<ondewo_nlu_session_pb.AddSessionLabelsRequest, ondewo_nlu_session_pb.Session>;
    removeSessionLabels: grpc.handleUnaryCall<ondewo_nlu_session_pb.RemoveSessionLabelsRequest, ondewo_nlu_session_pb.Session>;
    listSessionReviews: grpc.handleUnaryCall<ondewo_nlu_session_pb.ListSessionReviewsRequest, ondewo_nlu_session_pb.ListSessionReviewsResponse>;
    getSessionReview: grpc.handleUnaryCall<ondewo_nlu_session_pb.GetSessionReviewRequest, ondewo_nlu_session_pb.SessionReview>;
    getLatestSessionReview: grpc.handleUnaryCall<ondewo_nlu_session_pb.GetLatestSessionReviewRequest, ondewo_nlu_session_pb.SessionReview>;
    createSessionReview: grpc.handleUnaryCall<ondewo_nlu_session_pb.CreateSessionReviewRequest, ondewo_nlu_session_pb.SessionReview>;
}

export interface ISessionsClient {
    detectIntent(request: ondewo_nlu_session_pb.DetectIntentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.DetectIntentResponse) => void): grpc.ClientUnaryCall;
    detectIntent(request: ondewo_nlu_session_pb.DetectIntentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.DetectIntentResponse) => void): grpc.ClientUnaryCall;
    detectIntent(request: ondewo_nlu_session_pb.DetectIntentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.DetectIntentResponse) => void): grpc.ClientUnaryCall;
    streamingDetectIntent(): grpc.ClientDuplexStream<ondewo_nlu_session_pb.StreamingDetectIntentRequest, ondewo_nlu_session_pb.StreamingDetectIntentResponse>;
    streamingDetectIntent(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<ondewo_nlu_session_pb.StreamingDetectIntentRequest, ondewo_nlu_session_pb.StreamingDetectIntentResponse>;
    streamingDetectIntent(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<ondewo_nlu_session_pb.StreamingDetectIntentRequest, ondewo_nlu_session_pb.StreamingDetectIntentResponse>;
    listSessions(request: ondewo_nlu_session_pb.ListSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListSessionsResponse) => void): grpc.ClientUnaryCall;
    listSessions(request: ondewo_nlu_session_pb.ListSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListSessionsResponse) => void): grpc.ClientUnaryCall;
    listSessions(request: ondewo_nlu_session_pb.ListSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListSessionsResponse) => void): grpc.ClientUnaryCall;
    getSession(request: ondewo_nlu_session_pb.GetSessionRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    getSession(request: ondewo_nlu_session_pb.GetSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    getSession(request: ondewo_nlu_session_pb.GetSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    createSession(request: ondewo_nlu_session_pb.CreateSessionRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    createSession(request: ondewo_nlu_session_pb.CreateSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    createSession(request: ondewo_nlu_session_pb.CreateSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    trackSessionStep(request: ondewo_nlu_session_pb.TrackSessionStepRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    trackSessionStep(request: ondewo_nlu_session_pb.TrackSessionStepRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    trackSessionStep(request: ondewo_nlu_session_pb.TrackSessionStepRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    deleteSession(request: ondewo_nlu_session_pb.DeleteSessionRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteSession(request: ondewo_nlu_session_pb.DeleteSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteSession(request: ondewo_nlu_session_pb.DeleteSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    listSessionLabels(request: ondewo_nlu_session_pb.ListSessionLabelsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListSessionLabelsResponse) => void): grpc.ClientUnaryCall;
    listSessionLabels(request: ondewo_nlu_session_pb.ListSessionLabelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListSessionLabelsResponse) => void): grpc.ClientUnaryCall;
    listSessionLabels(request: ondewo_nlu_session_pb.ListSessionLabelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListSessionLabelsResponse) => void): grpc.ClientUnaryCall;
    addSessionLabels(request: ondewo_nlu_session_pb.AddSessionLabelsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    addSessionLabels(request: ondewo_nlu_session_pb.AddSessionLabelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    addSessionLabels(request: ondewo_nlu_session_pb.AddSessionLabelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    removeSessionLabels(request: ondewo_nlu_session_pb.RemoveSessionLabelsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    removeSessionLabels(request: ondewo_nlu_session_pb.RemoveSessionLabelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    removeSessionLabels(request: ondewo_nlu_session_pb.RemoveSessionLabelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    listSessionReviews(request: ondewo_nlu_session_pb.ListSessionReviewsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListSessionReviewsResponse) => void): grpc.ClientUnaryCall;
    listSessionReviews(request: ondewo_nlu_session_pb.ListSessionReviewsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListSessionReviewsResponse) => void): grpc.ClientUnaryCall;
    listSessionReviews(request: ondewo_nlu_session_pb.ListSessionReviewsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListSessionReviewsResponse) => void): grpc.ClientUnaryCall;
    getSessionReview(request: ondewo_nlu_session_pb.GetSessionReviewRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.SessionReview) => void): grpc.ClientUnaryCall;
    getSessionReview(request: ondewo_nlu_session_pb.GetSessionReviewRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.SessionReview) => void): grpc.ClientUnaryCall;
    getSessionReview(request: ondewo_nlu_session_pb.GetSessionReviewRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.SessionReview) => void): grpc.ClientUnaryCall;
    getLatestSessionReview(request: ondewo_nlu_session_pb.GetLatestSessionReviewRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.SessionReview) => void): grpc.ClientUnaryCall;
    getLatestSessionReview(request: ondewo_nlu_session_pb.GetLatestSessionReviewRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.SessionReview) => void): grpc.ClientUnaryCall;
    getLatestSessionReview(request: ondewo_nlu_session_pb.GetLatestSessionReviewRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.SessionReview) => void): grpc.ClientUnaryCall;
    createSessionReview(request: ondewo_nlu_session_pb.CreateSessionReviewRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.SessionReview) => void): grpc.ClientUnaryCall;
    createSessionReview(request: ondewo_nlu_session_pb.CreateSessionReviewRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.SessionReview) => void): grpc.ClientUnaryCall;
    createSessionReview(request: ondewo_nlu_session_pb.CreateSessionReviewRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.SessionReview) => void): grpc.ClientUnaryCall;
}

export class SessionsClient extends grpc.Client implements ISessionsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public detectIntent(request: ondewo_nlu_session_pb.DetectIntentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.DetectIntentResponse) => void): grpc.ClientUnaryCall;
    public detectIntent(request: ondewo_nlu_session_pb.DetectIntentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.DetectIntentResponse) => void): grpc.ClientUnaryCall;
    public detectIntent(request: ondewo_nlu_session_pb.DetectIntentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.DetectIntentResponse) => void): grpc.ClientUnaryCall;
    public streamingDetectIntent(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<ondewo_nlu_session_pb.StreamingDetectIntentRequest, ondewo_nlu_session_pb.StreamingDetectIntentResponse>;
    public streamingDetectIntent(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<ondewo_nlu_session_pb.StreamingDetectIntentRequest, ondewo_nlu_session_pb.StreamingDetectIntentResponse>;
    public listSessions(request: ondewo_nlu_session_pb.ListSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListSessionsResponse) => void): grpc.ClientUnaryCall;
    public listSessions(request: ondewo_nlu_session_pb.ListSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListSessionsResponse) => void): grpc.ClientUnaryCall;
    public listSessions(request: ondewo_nlu_session_pb.ListSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListSessionsResponse) => void): grpc.ClientUnaryCall;
    public getSession(request: ondewo_nlu_session_pb.GetSessionRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    public getSession(request: ondewo_nlu_session_pb.GetSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    public getSession(request: ondewo_nlu_session_pb.GetSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    public createSession(request: ondewo_nlu_session_pb.CreateSessionRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    public createSession(request: ondewo_nlu_session_pb.CreateSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    public createSession(request: ondewo_nlu_session_pb.CreateSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    public trackSessionStep(request: ondewo_nlu_session_pb.TrackSessionStepRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    public trackSessionStep(request: ondewo_nlu_session_pb.TrackSessionStepRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    public trackSessionStep(request: ondewo_nlu_session_pb.TrackSessionStepRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    public deleteSession(request: ondewo_nlu_session_pb.DeleteSessionRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteSession(request: ondewo_nlu_session_pb.DeleteSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteSession(request: ondewo_nlu_session_pb.DeleteSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public listSessionLabels(request: ondewo_nlu_session_pb.ListSessionLabelsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListSessionLabelsResponse) => void): grpc.ClientUnaryCall;
    public listSessionLabels(request: ondewo_nlu_session_pb.ListSessionLabelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListSessionLabelsResponse) => void): grpc.ClientUnaryCall;
    public listSessionLabels(request: ondewo_nlu_session_pb.ListSessionLabelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListSessionLabelsResponse) => void): grpc.ClientUnaryCall;
    public addSessionLabels(request: ondewo_nlu_session_pb.AddSessionLabelsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    public addSessionLabels(request: ondewo_nlu_session_pb.AddSessionLabelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    public addSessionLabels(request: ondewo_nlu_session_pb.AddSessionLabelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    public removeSessionLabels(request: ondewo_nlu_session_pb.RemoveSessionLabelsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    public removeSessionLabels(request: ondewo_nlu_session_pb.RemoveSessionLabelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    public removeSessionLabels(request: ondewo_nlu_session_pb.RemoveSessionLabelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    public listSessionReviews(request: ondewo_nlu_session_pb.ListSessionReviewsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListSessionReviewsResponse) => void): grpc.ClientUnaryCall;
    public listSessionReviews(request: ondewo_nlu_session_pb.ListSessionReviewsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListSessionReviewsResponse) => void): grpc.ClientUnaryCall;
    public listSessionReviews(request: ondewo_nlu_session_pb.ListSessionReviewsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListSessionReviewsResponse) => void): grpc.ClientUnaryCall;
    public getSessionReview(request: ondewo_nlu_session_pb.GetSessionReviewRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.SessionReview) => void): grpc.ClientUnaryCall;
    public getSessionReview(request: ondewo_nlu_session_pb.GetSessionReviewRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.SessionReview) => void): grpc.ClientUnaryCall;
    public getSessionReview(request: ondewo_nlu_session_pb.GetSessionReviewRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.SessionReview) => void): grpc.ClientUnaryCall;
    public getLatestSessionReview(request: ondewo_nlu_session_pb.GetLatestSessionReviewRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.SessionReview) => void): grpc.ClientUnaryCall;
    public getLatestSessionReview(request: ondewo_nlu_session_pb.GetLatestSessionReviewRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.SessionReview) => void): grpc.ClientUnaryCall;
    public getLatestSessionReview(request: ondewo_nlu_session_pb.GetLatestSessionReviewRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.SessionReview) => void): grpc.ClientUnaryCall;
    public createSessionReview(request: ondewo_nlu_session_pb.CreateSessionReviewRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.SessionReview) => void): grpc.ClientUnaryCall;
    public createSessionReview(request: ondewo_nlu_session_pb.CreateSessionReviewRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.SessionReview) => void): grpc.ClientUnaryCall;
    public createSessionReview(request: ondewo_nlu_session_pb.CreateSessionReviewRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.SessionReview) => void): grpc.ClientUnaryCall;
}
