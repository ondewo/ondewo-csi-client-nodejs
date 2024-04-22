// package: ondewo.nlu
// file: ondewo/nlu/session.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ondewo_nlu_session_pb from "../../ondewo/nlu/session_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_rpc_status_pb from "../../google/rpc/status_pb";
import * as google_type_latlng_pb from "../../google/type/latlng_pb";
import * as ondewo_nlu_common_pb from "../../ondewo/nlu/common_pb";
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
    listSessionLabelsOfAllSessions: ISessionsService_IListSessionLabelsOfAllSessions;
    listLanguageCodesOfAllSessions: ISessionsService_IListLanguageCodesOfAllSessions;
    listMatchedIntentsOfAllSessions: ISessionsService_IListMatchedIntentsOfAllSessions;
    listMatchedEntityTypesOfAllSessions: ISessionsService_IListMatchedEntityTypesOfAllSessions;
    listUserIdsOfAllSessions: ISessionsService_IListUserIdsOfAllSessions;
    listIdentifiedUserIdsOfAllSessions: ISessionsService_IListIdentifiedUserIdsOfAllSessions;
    listTagsOfAllSessions: ISessionsService_IListTagsOfAllSessions;
    listInputContextsOfAllSessions: ISessionsService_IListInputContextsOfAllSessions;
    listOutputContextsOfAllSessions: ISessionsService_IListOutputContextsOfAllSessions;
    listPlatformsOfAllSessions: ISessionsService_IListPlatformsOfAllSessions;
    listAccountIdsOfAllSessions: ISessionsService_IListAccountIdsOfAllSessions;
    listPropertyIdsOfAllSessions: ISessionsService_IListPropertyIdsOfAllSessions;
    listDatastreamIdsOfAllSessions: ISessionsService_IListDatastreamIdsOfAllSessions;
    listOriginIdsOfAllSessions: ISessionsService_IListOriginIdsOfAllSessions;
    addSessionLabels: ISessionsService_IAddSessionLabels;
    deleteSessionLabels: ISessionsService_IDeleteSessionLabels;
    addSessionComment: ISessionsService_IAddSessionComment;
    deleteSessionComments: ISessionsService_IDeleteSessionComments;
    updateSessionComments: ISessionsService_IUpdateSessionComments;
    listSessionComments: ISessionsService_IListSessionComments;
    listSessionReviews: ISessionsService_IListSessionReviews;
    getSessionReview: ISessionsService_IGetSessionReview;
    getLatestSessionReview: ISessionsService_IGetLatestSessionReview;
    createSessionReview: ISessionsService_ICreateSessionReview;
    getAudioFiles: ISessionsService_IGetAudioFiles;
    addAudioFiles: ISessionsService_IAddAudioFiles;
    deleteAudioFiles: ISessionsService_IDeleteAudioFiles;
    getAudioFileOfSession: ISessionsService_IGetAudioFileOfSession;
    listAudioFiles: ISessionsService_IListAudioFiles;
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
interface ISessionsService_IListSessionLabelsOfAllSessions extends grpc.MethodDefinition<ondewo_nlu_session_pb.ListSessionLabelsOfAllSessionsRequest, ondewo_nlu_session_pb.ListSessionLabelsResponse> {
    path: "/ondewo.nlu.Sessions/ListSessionLabelsOfAllSessions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_session_pb.ListSessionLabelsOfAllSessionsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_session_pb.ListSessionLabelsOfAllSessionsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_session_pb.ListSessionLabelsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_session_pb.ListSessionLabelsResponse>;
}
interface ISessionsService_IListLanguageCodesOfAllSessions extends grpc.MethodDefinition<ondewo_nlu_session_pb.ListLanguageCodesOfAllSessionsRequest, ondewo_nlu_session_pb.ListLanguageCodesResponse> {
    path: "/ondewo.nlu.Sessions/ListLanguageCodesOfAllSessions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_session_pb.ListLanguageCodesOfAllSessionsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_session_pb.ListLanguageCodesOfAllSessionsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_session_pb.ListLanguageCodesResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_session_pb.ListLanguageCodesResponse>;
}
interface ISessionsService_IListMatchedIntentsOfAllSessions extends grpc.MethodDefinition<ondewo_nlu_session_pb.ListMatchedIntentsOfAllSessionsRequest, ondewo_nlu_session_pb.ListMatchedIntentsResponse> {
    path: "/ondewo.nlu.Sessions/ListMatchedIntentsOfAllSessions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_session_pb.ListMatchedIntentsOfAllSessionsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_session_pb.ListMatchedIntentsOfAllSessionsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_session_pb.ListMatchedIntentsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_session_pb.ListMatchedIntentsResponse>;
}
interface ISessionsService_IListMatchedEntityTypesOfAllSessions extends grpc.MethodDefinition<ondewo_nlu_session_pb.ListMatchedEntityTypesOfAllSessionsRequest, ondewo_nlu_session_pb.ListMatchedEntityTypesResponse> {
    path: "/ondewo.nlu.Sessions/ListMatchedEntityTypesOfAllSessions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_session_pb.ListMatchedEntityTypesOfAllSessionsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_session_pb.ListMatchedEntityTypesOfAllSessionsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_session_pb.ListMatchedEntityTypesResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_session_pb.ListMatchedEntityTypesResponse>;
}
interface ISessionsService_IListUserIdsOfAllSessions extends grpc.MethodDefinition<ondewo_nlu_session_pb.ListUserIdsOfAllSessionsRequest, ondewo_nlu_session_pb.ListUserIdsResponse> {
    path: "/ondewo.nlu.Sessions/ListUserIdsOfAllSessions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_session_pb.ListUserIdsOfAllSessionsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_session_pb.ListUserIdsOfAllSessionsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_session_pb.ListUserIdsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_session_pb.ListUserIdsResponse>;
}
interface ISessionsService_IListIdentifiedUserIdsOfAllSessions extends grpc.MethodDefinition<ondewo_nlu_session_pb.ListIdentifiedUserIdsOfAllSessionsRequest, ondewo_nlu_session_pb.ListIdentifiedUserIdsResponse> {
    path: "/ondewo.nlu.Sessions/ListIdentifiedUserIdsOfAllSessions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_session_pb.ListIdentifiedUserIdsOfAllSessionsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_session_pb.ListIdentifiedUserIdsOfAllSessionsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_session_pb.ListIdentifiedUserIdsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_session_pb.ListIdentifiedUserIdsResponse>;
}
interface ISessionsService_IListTagsOfAllSessions extends grpc.MethodDefinition<ondewo_nlu_session_pb.ListTagsOfAllSessionsRequest, ondewo_nlu_session_pb.ListTagsResponse> {
    path: "/ondewo.nlu.Sessions/ListTagsOfAllSessions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_session_pb.ListTagsOfAllSessionsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_session_pb.ListTagsOfAllSessionsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_session_pb.ListTagsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_session_pb.ListTagsResponse>;
}
interface ISessionsService_IListInputContextsOfAllSessions extends grpc.MethodDefinition<ondewo_nlu_session_pb.ListInputContextsOfAllSessionsRequest, ondewo_nlu_session_pb.ListInputContextsResponse> {
    path: "/ondewo.nlu.Sessions/ListInputContextsOfAllSessions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_session_pb.ListInputContextsOfAllSessionsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_session_pb.ListInputContextsOfAllSessionsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_session_pb.ListInputContextsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_session_pb.ListInputContextsResponse>;
}
interface ISessionsService_IListOutputContextsOfAllSessions extends grpc.MethodDefinition<ondewo_nlu_session_pb.ListOutputContextsOfAllSessionsRequest, ondewo_nlu_session_pb.ListOutputContextsResponse> {
    path: "/ondewo.nlu.Sessions/ListOutputContextsOfAllSessions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_session_pb.ListOutputContextsOfAllSessionsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_session_pb.ListOutputContextsOfAllSessionsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_session_pb.ListOutputContextsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_session_pb.ListOutputContextsResponse>;
}
interface ISessionsService_IListPlatformsOfAllSessions extends grpc.MethodDefinition<ondewo_nlu_session_pb.ListPlatformsOfAllSessionsRequest, ondewo_nlu_session_pb.ListPlatformsResponse> {
    path: "/ondewo.nlu.Sessions/ListPlatformsOfAllSessions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_session_pb.ListPlatformsOfAllSessionsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_session_pb.ListPlatformsOfAllSessionsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_session_pb.ListPlatformsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_session_pb.ListPlatformsResponse>;
}
interface ISessionsService_IListAccountIdsOfAllSessions extends grpc.MethodDefinition<ondewo_nlu_session_pb.ListAccountIdsOfAllSessionsRequest, ondewo_nlu_session_pb.ListAccountIdsResponse> {
    path: "/ondewo.nlu.Sessions/ListAccountIdsOfAllSessions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_session_pb.ListAccountIdsOfAllSessionsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_session_pb.ListAccountIdsOfAllSessionsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_session_pb.ListAccountIdsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_session_pb.ListAccountIdsResponse>;
}
interface ISessionsService_IListPropertyIdsOfAllSessions extends grpc.MethodDefinition<ondewo_nlu_session_pb.ListPropertyIdsOfAllSessionsRequest, ondewo_nlu_session_pb.ListPropertyIdsResponse> {
    path: "/ondewo.nlu.Sessions/ListPropertyIdsOfAllSessions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_session_pb.ListPropertyIdsOfAllSessionsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_session_pb.ListPropertyIdsOfAllSessionsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_session_pb.ListPropertyIdsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_session_pb.ListPropertyIdsResponse>;
}
interface ISessionsService_IListDatastreamIdsOfAllSessions extends grpc.MethodDefinition<ondewo_nlu_session_pb.ListDatastreamIdsOfAllSessionsRequest, ondewo_nlu_session_pb.ListDatastreamIdsResponse> {
    path: "/ondewo.nlu.Sessions/ListDatastreamIdsOfAllSessions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_session_pb.ListDatastreamIdsOfAllSessionsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_session_pb.ListDatastreamIdsOfAllSessionsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_session_pb.ListDatastreamIdsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_session_pb.ListDatastreamIdsResponse>;
}
interface ISessionsService_IListOriginIdsOfAllSessions extends grpc.MethodDefinition<ondewo_nlu_session_pb.ListOriginIdsOfAllSessionsRequest, ondewo_nlu_session_pb.ListOriginIdsResponse> {
    path: "/ondewo.nlu.Sessions/ListOriginIdsOfAllSessions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_session_pb.ListOriginIdsOfAllSessionsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_session_pb.ListOriginIdsOfAllSessionsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_session_pb.ListOriginIdsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_session_pb.ListOriginIdsResponse>;
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
interface ISessionsService_IDeleteSessionLabels extends grpc.MethodDefinition<ondewo_nlu_session_pb.DeleteSessionLabelsRequest, ondewo_nlu_session_pb.Session> {
    path: "/ondewo.nlu.Sessions/DeleteSessionLabels";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_session_pb.DeleteSessionLabelsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_session_pb.DeleteSessionLabelsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_session_pb.Session>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_session_pb.Session>;
}
interface ISessionsService_IAddSessionComment extends grpc.MethodDefinition<ondewo_nlu_session_pb.AddSessionCommentRequest, ondewo_nlu_common_pb.Comment> {
    path: "/ondewo.nlu.Sessions/AddSessionComment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_session_pb.AddSessionCommentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_session_pb.AddSessionCommentRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_common_pb.Comment>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_common_pb.Comment>;
}
interface ISessionsService_IDeleteSessionComments extends grpc.MethodDefinition<ondewo_nlu_session_pb.DeleteSessionCommentsRequest, ondewo_nlu_session_pb.Session> {
    path: "/ondewo.nlu.Sessions/DeleteSessionComments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_session_pb.DeleteSessionCommentsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_session_pb.DeleteSessionCommentsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_session_pb.Session>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_session_pb.Session>;
}
interface ISessionsService_IUpdateSessionComments extends grpc.MethodDefinition<ondewo_nlu_session_pb.UpdateSessionCommentsRequest, ondewo_nlu_session_pb.Session> {
    path: "/ondewo.nlu.Sessions/UpdateSessionComments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_session_pb.UpdateSessionCommentsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_session_pb.UpdateSessionCommentsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_session_pb.Session>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_session_pb.Session>;
}
interface ISessionsService_IListSessionComments extends grpc.MethodDefinition<ondewo_nlu_session_pb.ListSessionCommentsRequest, ondewo_nlu_session_pb.ListSessionCommentsResponse> {
    path: "/ondewo.nlu.Sessions/ListSessionComments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_session_pb.ListSessionCommentsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_session_pb.ListSessionCommentsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_session_pb.ListSessionCommentsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_session_pb.ListSessionCommentsResponse>;
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
interface ISessionsService_IGetAudioFiles extends grpc.MethodDefinition<ondewo_nlu_session_pb.GetAudioFilesRequest, ondewo_nlu_session_pb.GetAudioFilesResponse> {
    path: "/ondewo.nlu.Sessions/GetAudioFiles";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_session_pb.GetAudioFilesRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_session_pb.GetAudioFilesRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_session_pb.GetAudioFilesResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_session_pb.GetAudioFilesResponse>;
}
interface ISessionsService_IAddAudioFiles extends grpc.MethodDefinition<ondewo_nlu_session_pb.AddAudioFilesRequest, ondewo_nlu_session_pb.AddAudioFilesResponse> {
    path: "/ondewo.nlu.Sessions/AddAudioFiles";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_session_pb.AddAudioFilesRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_session_pb.AddAudioFilesRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_session_pb.AddAudioFilesResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_session_pb.AddAudioFilesResponse>;
}
interface ISessionsService_IDeleteAudioFiles extends grpc.MethodDefinition<ondewo_nlu_session_pb.DeleteAudioFilesRequest, ondewo_nlu_session_pb.DeleteAudioFilesResponse> {
    path: "/ondewo.nlu.Sessions/DeleteAudioFiles";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_session_pb.DeleteAudioFilesRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_session_pb.DeleteAudioFilesRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_session_pb.DeleteAudioFilesResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_session_pb.DeleteAudioFilesResponse>;
}
interface ISessionsService_IGetAudioFileOfSession extends grpc.MethodDefinition<ondewo_nlu_session_pb.GetAudioFileOfSessionRequest, ondewo_nlu_session_pb.AudioFileResource> {
    path: "/ondewo.nlu.Sessions/GetAudioFileOfSession";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_session_pb.GetAudioFileOfSessionRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_session_pb.GetAudioFileOfSessionRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_session_pb.AudioFileResource>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_session_pb.AudioFileResource>;
}
interface ISessionsService_IListAudioFiles extends grpc.MethodDefinition<ondewo_nlu_session_pb.ListAudioFilesRequest, ondewo_nlu_session_pb.ListAudioFilesResponse> {
    path: "/ondewo.nlu.Sessions/ListAudioFiles";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_session_pb.ListAudioFilesRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_session_pb.ListAudioFilesRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_session_pb.ListAudioFilesResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_session_pb.ListAudioFilesResponse>;
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
    listSessionLabelsOfAllSessions: grpc.handleUnaryCall<ondewo_nlu_session_pb.ListSessionLabelsOfAllSessionsRequest, ondewo_nlu_session_pb.ListSessionLabelsResponse>;
    listLanguageCodesOfAllSessions: grpc.handleUnaryCall<ondewo_nlu_session_pb.ListLanguageCodesOfAllSessionsRequest, ondewo_nlu_session_pb.ListLanguageCodesResponse>;
    listMatchedIntentsOfAllSessions: grpc.handleUnaryCall<ondewo_nlu_session_pb.ListMatchedIntentsOfAllSessionsRequest, ondewo_nlu_session_pb.ListMatchedIntentsResponse>;
    listMatchedEntityTypesOfAllSessions: grpc.handleUnaryCall<ondewo_nlu_session_pb.ListMatchedEntityTypesOfAllSessionsRequest, ondewo_nlu_session_pb.ListMatchedEntityTypesResponse>;
    listUserIdsOfAllSessions: grpc.handleUnaryCall<ondewo_nlu_session_pb.ListUserIdsOfAllSessionsRequest, ondewo_nlu_session_pb.ListUserIdsResponse>;
    listIdentifiedUserIdsOfAllSessions: grpc.handleUnaryCall<ondewo_nlu_session_pb.ListIdentifiedUserIdsOfAllSessionsRequest, ondewo_nlu_session_pb.ListIdentifiedUserIdsResponse>;
    listTagsOfAllSessions: grpc.handleUnaryCall<ondewo_nlu_session_pb.ListTagsOfAllSessionsRequest, ondewo_nlu_session_pb.ListTagsResponse>;
    listInputContextsOfAllSessions: grpc.handleUnaryCall<ondewo_nlu_session_pb.ListInputContextsOfAllSessionsRequest, ondewo_nlu_session_pb.ListInputContextsResponse>;
    listOutputContextsOfAllSessions: grpc.handleUnaryCall<ondewo_nlu_session_pb.ListOutputContextsOfAllSessionsRequest, ondewo_nlu_session_pb.ListOutputContextsResponse>;
    listPlatformsOfAllSessions: grpc.handleUnaryCall<ondewo_nlu_session_pb.ListPlatformsOfAllSessionsRequest, ondewo_nlu_session_pb.ListPlatformsResponse>;
    listAccountIdsOfAllSessions: grpc.handleUnaryCall<ondewo_nlu_session_pb.ListAccountIdsOfAllSessionsRequest, ondewo_nlu_session_pb.ListAccountIdsResponse>;
    listPropertyIdsOfAllSessions: grpc.handleUnaryCall<ondewo_nlu_session_pb.ListPropertyIdsOfAllSessionsRequest, ondewo_nlu_session_pb.ListPropertyIdsResponse>;
    listDatastreamIdsOfAllSessions: grpc.handleUnaryCall<ondewo_nlu_session_pb.ListDatastreamIdsOfAllSessionsRequest, ondewo_nlu_session_pb.ListDatastreamIdsResponse>;
    listOriginIdsOfAllSessions: grpc.handleUnaryCall<ondewo_nlu_session_pb.ListOriginIdsOfAllSessionsRequest, ondewo_nlu_session_pb.ListOriginIdsResponse>;
    addSessionLabels: grpc.handleUnaryCall<ondewo_nlu_session_pb.AddSessionLabelsRequest, ondewo_nlu_session_pb.Session>;
    deleteSessionLabels: grpc.handleUnaryCall<ondewo_nlu_session_pb.DeleteSessionLabelsRequest, ondewo_nlu_session_pb.Session>;
    addSessionComment: grpc.handleUnaryCall<ondewo_nlu_session_pb.AddSessionCommentRequest, ondewo_nlu_common_pb.Comment>;
    deleteSessionComments: grpc.handleUnaryCall<ondewo_nlu_session_pb.DeleteSessionCommentsRequest, ondewo_nlu_session_pb.Session>;
    updateSessionComments: grpc.handleUnaryCall<ondewo_nlu_session_pb.UpdateSessionCommentsRequest, ondewo_nlu_session_pb.Session>;
    listSessionComments: grpc.handleUnaryCall<ondewo_nlu_session_pb.ListSessionCommentsRequest, ondewo_nlu_session_pb.ListSessionCommentsResponse>;
    listSessionReviews: grpc.handleUnaryCall<ondewo_nlu_session_pb.ListSessionReviewsRequest, ondewo_nlu_session_pb.ListSessionReviewsResponse>;
    getSessionReview: grpc.handleUnaryCall<ondewo_nlu_session_pb.GetSessionReviewRequest, ondewo_nlu_session_pb.SessionReview>;
    getLatestSessionReview: grpc.handleUnaryCall<ondewo_nlu_session_pb.GetLatestSessionReviewRequest, ondewo_nlu_session_pb.SessionReview>;
    createSessionReview: grpc.handleUnaryCall<ondewo_nlu_session_pb.CreateSessionReviewRequest, ondewo_nlu_session_pb.SessionReview>;
    getAudioFiles: grpc.handleUnaryCall<ondewo_nlu_session_pb.GetAudioFilesRequest, ondewo_nlu_session_pb.GetAudioFilesResponse>;
    addAudioFiles: grpc.handleUnaryCall<ondewo_nlu_session_pb.AddAudioFilesRequest, ondewo_nlu_session_pb.AddAudioFilesResponse>;
    deleteAudioFiles: grpc.handleUnaryCall<ondewo_nlu_session_pb.DeleteAudioFilesRequest, ondewo_nlu_session_pb.DeleteAudioFilesResponse>;
    getAudioFileOfSession: grpc.handleUnaryCall<ondewo_nlu_session_pb.GetAudioFileOfSessionRequest, ondewo_nlu_session_pb.AudioFileResource>;
    listAudioFiles: grpc.handleUnaryCall<ondewo_nlu_session_pb.ListAudioFilesRequest, ondewo_nlu_session_pb.ListAudioFilesResponse>;
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
    listSessionLabelsOfAllSessions(request: ondewo_nlu_session_pb.ListSessionLabelsOfAllSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListSessionLabelsResponse) => void): grpc.ClientUnaryCall;
    listSessionLabelsOfAllSessions(request: ondewo_nlu_session_pb.ListSessionLabelsOfAllSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListSessionLabelsResponse) => void): grpc.ClientUnaryCall;
    listSessionLabelsOfAllSessions(request: ondewo_nlu_session_pb.ListSessionLabelsOfAllSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListSessionLabelsResponse) => void): grpc.ClientUnaryCall;
    listLanguageCodesOfAllSessions(request: ondewo_nlu_session_pb.ListLanguageCodesOfAllSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListLanguageCodesResponse) => void): grpc.ClientUnaryCall;
    listLanguageCodesOfAllSessions(request: ondewo_nlu_session_pb.ListLanguageCodesOfAllSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListLanguageCodesResponse) => void): grpc.ClientUnaryCall;
    listLanguageCodesOfAllSessions(request: ondewo_nlu_session_pb.ListLanguageCodesOfAllSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListLanguageCodesResponse) => void): grpc.ClientUnaryCall;
    listMatchedIntentsOfAllSessions(request: ondewo_nlu_session_pb.ListMatchedIntentsOfAllSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListMatchedIntentsResponse) => void): grpc.ClientUnaryCall;
    listMatchedIntentsOfAllSessions(request: ondewo_nlu_session_pb.ListMatchedIntentsOfAllSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListMatchedIntentsResponse) => void): grpc.ClientUnaryCall;
    listMatchedIntentsOfAllSessions(request: ondewo_nlu_session_pb.ListMatchedIntentsOfAllSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListMatchedIntentsResponse) => void): grpc.ClientUnaryCall;
    listMatchedEntityTypesOfAllSessions(request: ondewo_nlu_session_pb.ListMatchedEntityTypesOfAllSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListMatchedEntityTypesResponse) => void): grpc.ClientUnaryCall;
    listMatchedEntityTypesOfAllSessions(request: ondewo_nlu_session_pb.ListMatchedEntityTypesOfAllSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListMatchedEntityTypesResponse) => void): grpc.ClientUnaryCall;
    listMatchedEntityTypesOfAllSessions(request: ondewo_nlu_session_pb.ListMatchedEntityTypesOfAllSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListMatchedEntityTypesResponse) => void): grpc.ClientUnaryCall;
    listUserIdsOfAllSessions(request: ondewo_nlu_session_pb.ListUserIdsOfAllSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListUserIdsResponse) => void): grpc.ClientUnaryCall;
    listUserIdsOfAllSessions(request: ondewo_nlu_session_pb.ListUserIdsOfAllSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListUserIdsResponse) => void): grpc.ClientUnaryCall;
    listUserIdsOfAllSessions(request: ondewo_nlu_session_pb.ListUserIdsOfAllSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListUserIdsResponse) => void): grpc.ClientUnaryCall;
    listIdentifiedUserIdsOfAllSessions(request: ondewo_nlu_session_pb.ListIdentifiedUserIdsOfAllSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListIdentifiedUserIdsResponse) => void): grpc.ClientUnaryCall;
    listIdentifiedUserIdsOfAllSessions(request: ondewo_nlu_session_pb.ListIdentifiedUserIdsOfAllSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListIdentifiedUserIdsResponse) => void): grpc.ClientUnaryCall;
    listIdentifiedUserIdsOfAllSessions(request: ondewo_nlu_session_pb.ListIdentifiedUserIdsOfAllSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListIdentifiedUserIdsResponse) => void): grpc.ClientUnaryCall;
    listTagsOfAllSessions(request: ondewo_nlu_session_pb.ListTagsOfAllSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListTagsResponse) => void): grpc.ClientUnaryCall;
    listTagsOfAllSessions(request: ondewo_nlu_session_pb.ListTagsOfAllSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListTagsResponse) => void): grpc.ClientUnaryCall;
    listTagsOfAllSessions(request: ondewo_nlu_session_pb.ListTagsOfAllSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListTagsResponse) => void): grpc.ClientUnaryCall;
    listInputContextsOfAllSessions(request: ondewo_nlu_session_pb.ListInputContextsOfAllSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListInputContextsResponse) => void): grpc.ClientUnaryCall;
    listInputContextsOfAllSessions(request: ondewo_nlu_session_pb.ListInputContextsOfAllSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListInputContextsResponse) => void): grpc.ClientUnaryCall;
    listInputContextsOfAllSessions(request: ondewo_nlu_session_pb.ListInputContextsOfAllSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListInputContextsResponse) => void): grpc.ClientUnaryCall;
    listOutputContextsOfAllSessions(request: ondewo_nlu_session_pb.ListOutputContextsOfAllSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListOutputContextsResponse) => void): grpc.ClientUnaryCall;
    listOutputContextsOfAllSessions(request: ondewo_nlu_session_pb.ListOutputContextsOfAllSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListOutputContextsResponse) => void): grpc.ClientUnaryCall;
    listOutputContextsOfAllSessions(request: ondewo_nlu_session_pb.ListOutputContextsOfAllSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListOutputContextsResponse) => void): grpc.ClientUnaryCall;
    listPlatformsOfAllSessions(request: ondewo_nlu_session_pb.ListPlatformsOfAllSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListPlatformsResponse) => void): grpc.ClientUnaryCall;
    listPlatformsOfAllSessions(request: ondewo_nlu_session_pb.ListPlatformsOfAllSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListPlatformsResponse) => void): grpc.ClientUnaryCall;
    listPlatformsOfAllSessions(request: ondewo_nlu_session_pb.ListPlatformsOfAllSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListPlatformsResponse) => void): grpc.ClientUnaryCall;
    listAccountIdsOfAllSessions(request: ondewo_nlu_session_pb.ListAccountIdsOfAllSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListAccountIdsResponse) => void): grpc.ClientUnaryCall;
    listAccountIdsOfAllSessions(request: ondewo_nlu_session_pb.ListAccountIdsOfAllSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListAccountIdsResponse) => void): grpc.ClientUnaryCall;
    listAccountIdsOfAllSessions(request: ondewo_nlu_session_pb.ListAccountIdsOfAllSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListAccountIdsResponse) => void): grpc.ClientUnaryCall;
    listPropertyIdsOfAllSessions(request: ondewo_nlu_session_pb.ListPropertyIdsOfAllSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListPropertyIdsResponse) => void): grpc.ClientUnaryCall;
    listPropertyIdsOfAllSessions(request: ondewo_nlu_session_pb.ListPropertyIdsOfAllSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListPropertyIdsResponse) => void): grpc.ClientUnaryCall;
    listPropertyIdsOfAllSessions(request: ondewo_nlu_session_pb.ListPropertyIdsOfAllSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListPropertyIdsResponse) => void): grpc.ClientUnaryCall;
    listDatastreamIdsOfAllSessions(request: ondewo_nlu_session_pb.ListDatastreamIdsOfAllSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListDatastreamIdsResponse) => void): grpc.ClientUnaryCall;
    listDatastreamIdsOfAllSessions(request: ondewo_nlu_session_pb.ListDatastreamIdsOfAllSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListDatastreamIdsResponse) => void): grpc.ClientUnaryCall;
    listDatastreamIdsOfAllSessions(request: ondewo_nlu_session_pb.ListDatastreamIdsOfAllSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListDatastreamIdsResponse) => void): grpc.ClientUnaryCall;
    listOriginIdsOfAllSessions(request: ondewo_nlu_session_pb.ListOriginIdsOfAllSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListOriginIdsResponse) => void): grpc.ClientUnaryCall;
    listOriginIdsOfAllSessions(request: ondewo_nlu_session_pb.ListOriginIdsOfAllSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListOriginIdsResponse) => void): grpc.ClientUnaryCall;
    listOriginIdsOfAllSessions(request: ondewo_nlu_session_pb.ListOriginIdsOfAllSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListOriginIdsResponse) => void): grpc.ClientUnaryCall;
    addSessionLabels(request: ondewo_nlu_session_pb.AddSessionLabelsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    addSessionLabels(request: ondewo_nlu_session_pb.AddSessionLabelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    addSessionLabels(request: ondewo_nlu_session_pb.AddSessionLabelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    deleteSessionLabels(request: ondewo_nlu_session_pb.DeleteSessionLabelsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    deleteSessionLabels(request: ondewo_nlu_session_pb.DeleteSessionLabelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    deleteSessionLabels(request: ondewo_nlu_session_pb.DeleteSessionLabelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    addSessionComment(request: ondewo_nlu_session_pb.AddSessionCommentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.Comment) => void): grpc.ClientUnaryCall;
    addSessionComment(request: ondewo_nlu_session_pb.AddSessionCommentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.Comment) => void): grpc.ClientUnaryCall;
    addSessionComment(request: ondewo_nlu_session_pb.AddSessionCommentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.Comment) => void): grpc.ClientUnaryCall;
    deleteSessionComments(request: ondewo_nlu_session_pb.DeleteSessionCommentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    deleteSessionComments(request: ondewo_nlu_session_pb.DeleteSessionCommentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    deleteSessionComments(request: ondewo_nlu_session_pb.DeleteSessionCommentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    updateSessionComments(request: ondewo_nlu_session_pb.UpdateSessionCommentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    updateSessionComments(request: ondewo_nlu_session_pb.UpdateSessionCommentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    updateSessionComments(request: ondewo_nlu_session_pb.UpdateSessionCommentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    listSessionComments(request: ondewo_nlu_session_pb.ListSessionCommentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListSessionCommentsResponse) => void): grpc.ClientUnaryCall;
    listSessionComments(request: ondewo_nlu_session_pb.ListSessionCommentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListSessionCommentsResponse) => void): grpc.ClientUnaryCall;
    listSessionComments(request: ondewo_nlu_session_pb.ListSessionCommentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListSessionCommentsResponse) => void): grpc.ClientUnaryCall;
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
    getAudioFiles(request: ondewo_nlu_session_pb.GetAudioFilesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.GetAudioFilesResponse) => void): grpc.ClientUnaryCall;
    getAudioFiles(request: ondewo_nlu_session_pb.GetAudioFilesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.GetAudioFilesResponse) => void): grpc.ClientUnaryCall;
    getAudioFiles(request: ondewo_nlu_session_pb.GetAudioFilesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.GetAudioFilesResponse) => void): grpc.ClientUnaryCall;
    addAudioFiles(request: ondewo_nlu_session_pb.AddAudioFilesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.AddAudioFilesResponse) => void): grpc.ClientUnaryCall;
    addAudioFiles(request: ondewo_nlu_session_pb.AddAudioFilesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.AddAudioFilesResponse) => void): grpc.ClientUnaryCall;
    addAudioFiles(request: ondewo_nlu_session_pb.AddAudioFilesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.AddAudioFilesResponse) => void): grpc.ClientUnaryCall;
    deleteAudioFiles(request: ondewo_nlu_session_pb.DeleteAudioFilesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.DeleteAudioFilesResponse) => void): grpc.ClientUnaryCall;
    deleteAudioFiles(request: ondewo_nlu_session_pb.DeleteAudioFilesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.DeleteAudioFilesResponse) => void): grpc.ClientUnaryCall;
    deleteAudioFiles(request: ondewo_nlu_session_pb.DeleteAudioFilesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.DeleteAudioFilesResponse) => void): grpc.ClientUnaryCall;
    getAudioFileOfSession(request: ondewo_nlu_session_pb.GetAudioFileOfSessionRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.AudioFileResource) => void): grpc.ClientUnaryCall;
    getAudioFileOfSession(request: ondewo_nlu_session_pb.GetAudioFileOfSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.AudioFileResource) => void): grpc.ClientUnaryCall;
    getAudioFileOfSession(request: ondewo_nlu_session_pb.GetAudioFileOfSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.AudioFileResource) => void): grpc.ClientUnaryCall;
    listAudioFiles(request: ondewo_nlu_session_pb.ListAudioFilesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListAudioFilesResponse) => void): grpc.ClientUnaryCall;
    listAudioFiles(request: ondewo_nlu_session_pb.ListAudioFilesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListAudioFilesResponse) => void): grpc.ClientUnaryCall;
    listAudioFiles(request: ondewo_nlu_session_pb.ListAudioFilesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListAudioFilesResponse) => void): grpc.ClientUnaryCall;
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
    public listSessionLabelsOfAllSessions(request: ondewo_nlu_session_pb.ListSessionLabelsOfAllSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListSessionLabelsResponse) => void): grpc.ClientUnaryCall;
    public listSessionLabelsOfAllSessions(request: ondewo_nlu_session_pb.ListSessionLabelsOfAllSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListSessionLabelsResponse) => void): grpc.ClientUnaryCall;
    public listSessionLabelsOfAllSessions(request: ondewo_nlu_session_pb.ListSessionLabelsOfAllSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListSessionLabelsResponse) => void): grpc.ClientUnaryCall;
    public listLanguageCodesOfAllSessions(request: ondewo_nlu_session_pb.ListLanguageCodesOfAllSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListLanguageCodesResponse) => void): grpc.ClientUnaryCall;
    public listLanguageCodesOfAllSessions(request: ondewo_nlu_session_pb.ListLanguageCodesOfAllSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListLanguageCodesResponse) => void): grpc.ClientUnaryCall;
    public listLanguageCodesOfAllSessions(request: ondewo_nlu_session_pb.ListLanguageCodesOfAllSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListLanguageCodesResponse) => void): grpc.ClientUnaryCall;
    public listMatchedIntentsOfAllSessions(request: ondewo_nlu_session_pb.ListMatchedIntentsOfAllSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListMatchedIntentsResponse) => void): grpc.ClientUnaryCall;
    public listMatchedIntentsOfAllSessions(request: ondewo_nlu_session_pb.ListMatchedIntentsOfAllSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListMatchedIntentsResponse) => void): grpc.ClientUnaryCall;
    public listMatchedIntentsOfAllSessions(request: ondewo_nlu_session_pb.ListMatchedIntentsOfAllSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListMatchedIntentsResponse) => void): grpc.ClientUnaryCall;
    public listMatchedEntityTypesOfAllSessions(request: ondewo_nlu_session_pb.ListMatchedEntityTypesOfAllSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListMatchedEntityTypesResponse) => void): grpc.ClientUnaryCall;
    public listMatchedEntityTypesOfAllSessions(request: ondewo_nlu_session_pb.ListMatchedEntityTypesOfAllSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListMatchedEntityTypesResponse) => void): grpc.ClientUnaryCall;
    public listMatchedEntityTypesOfAllSessions(request: ondewo_nlu_session_pb.ListMatchedEntityTypesOfAllSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListMatchedEntityTypesResponse) => void): grpc.ClientUnaryCall;
    public listUserIdsOfAllSessions(request: ondewo_nlu_session_pb.ListUserIdsOfAllSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListUserIdsResponse) => void): grpc.ClientUnaryCall;
    public listUserIdsOfAllSessions(request: ondewo_nlu_session_pb.ListUserIdsOfAllSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListUserIdsResponse) => void): grpc.ClientUnaryCall;
    public listUserIdsOfAllSessions(request: ondewo_nlu_session_pb.ListUserIdsOfAllSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListUserIdsResponse) => void): grpc.ClientUnaryCall;
    public listIdentifiedUserIdsOfAllSessions(request: ondewo_nlu_session_pb.ListIdentifiedUserIdsOfAllSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListIdentifiedUserIdsResponse) => void): grpc.ClientUnaryCall;
    public listIdentifiedUserIdsOfAllSessions(request: ondewo_nlu_session_pb.ListIdentifiedUserIdsOfAllSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListIdentifiedUserIdsResponse) => void): grpc.ClientUnaryCall;
    public listIdentifiedUserIdsOfAllSessions(request: ondewo_nlu_session_pb.ListIdentifiedUserIdsOfAllSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListIdentifiedUserIdsResponse) => void): grpc.ClientUnaryCall;
    public listTagsOfAllSessions(request: ondewo_nlu_session_pb.ListTagsOfAllSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListTagsResponse) => void): grpc.ClientUnaryCall;
    public listTagsOfAllSessions(request: ondewo_nlu_session_pb.ListTagsOfAllSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListTagsResponse) => void): grpc.ClientUnaryCall;
    public listTagsOfAllSessions(request: ondewo_nlu_session_pb.ListTagsOfAllSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListTagsResponse) => void): grpc.ClientUnaryCall;
    public listInputContextsOfAllSessions(request: ondewo_nlu_session_pb.ListInputContextsOfAllSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListInputContextsResponse) => void): grpc.ClientUnaryCall;
    public listInputContextsOfAllSessions(request: ondewo_nlu_session_pb.ListInputContextsOfAllSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListInputContextsResponse) => void): grpc.ClientUnaryCall;
    public listInputContextsOfAllSessions(request: ondewo_nlu_session_pb.ListInputContextsOfAllSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListInputContextsResponse) => void): grpc.ClientUnaryCall;
    public listOutputContextsOfAllSessions(request: ondewo_nlu_session_pb.ListOutputContextsOfAllSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListOutputContextsResponse) => void): grpc.ClientUnaryCall;
    public listOutputContextsOfAllSessions(request: ondewo_nlu_session_pb.ListOutputContextsOfAllSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListOutputContextsResponse) => void): grpc.ClientUnaryCall;
    public listOutputContextsOfAllSessions(request: ondewo_nlu_session_pb.ListOutputContextsOfAllSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListOutputContextsResponse) => void): grpc.ClientUnaryCall;
    public listPlatformsOfAllSessions(request: ondewo_nlu_session_pb.ListPlatformsOfAllSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListPlatformsResponse) => void): grpc.ClientUnaryCall;
    public listPlatformsOfAllSessions(request: ondewo_nlu_session_pb.ListPlatformsOfAllSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListPlatformsResponse) => void): grpc.ClientUnaryCall;
    public listPlatformsOfAllSessions(request: ondewo_nlu_session_pb.ListPlatformsOfAllSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListPlatformsResponse) => void): grpc.ClientUnaryCall;
    public listAccountIdsOfAllSessions(request: ondewo_nlu_session_pb.ListAccountIdsOfAllSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListAccountIdsResponse) => void): grpc.ClientUnaryCall;
    public listAccountIdsOfAllSessions(request: ondewo_nlu_session_pb.ListAccountIdsOfAllSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListAccountIdsResponse) => void): grpc.ClientUnaryCall;
    public listAccountIdsOfAllSessions(request: ondewo_nlu_session_pb.ListAccountIdsOfAllSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListAccountIdsResponse) => void): grpc.ClientUnaryCall;
    public listPropertyIdsOfAllSessions(request: ondewo_nlu_session_pb.ListPropertyIdsOfAllSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListPropertyIdsResponse) => void): grpc.ClientUnaryCall;
    public listPropertyIdsOfAllSessions(request: ondewo_nlu_session_pb.ListPropertyIdsOfAllSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListPropertyIdsResponse) => void): grpc.ClientUnaryCall;
    public listPropertyIdsOfAllSessions(request: ondewo_nlu_session_pb.ListPropertyIdsOfAllSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListPropertyIdsResponse) => void): grpc.ClientUnaryCall;
    public listDatastreamIdsOfAllSessions(request: ondewo_nlu_session_pb.ListDatastreamIdsOfAllSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListDatastreamIdsResponse) => void): grpc.ClientUnaryCall;
    public listDatastreamIdsOfAllSessions(request: ondewo_nlu_session_pb.ListDatastreamIdsOfAllSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListDatastreamIdsResponse) => void): grpc.ClientUnaryCall;
    public listDatastreamIdsOfAllSessions(request: ondewo_nlu_session_pb.ListDatastreamIdsOfAllSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListDatastreamIdsResponse) => void): grpc.ClientUnaryCall;
    public listOriginIdsOfAllSessions(request: ondewo_nlu_session_pb.ListOriginIdsOfAllSessionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListOriginIdsResponse) => void): grpc.ClientUnaryCall;
    public listOriginIdsOfAllSessions(request: ondewo_nlu_session_pb.ListOriginIdsOfAllSessionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListOriginIdsResponse) => void): grpc.ClientUnaryCall;
    public listOriginIdsOfAllSessions(request: ondewo_nlu_session_pb.ListOriginIdsOfAllSessionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListOriginIdsResponse) => void): grpc.ClientUnaryCall;
    public addSessionLabels(request: ondewo_nlu_session_pb.AddSessionLabelsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    public addSessionLabels(request: ondewo_nlu_session_pb.AddSessionLabelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    public addSessionLabels(request: ondewo_nlu_session_pb.AddSessionLabelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    public deleteSessionLabels(request: ondewo_nlu_session_pb.DeleteSessionLabelsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    public deleteSessionLabels(request: ondewo_nlu_session_pb.DeleteSessionLabelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    public deleteSessionLabels(request: ondewo_nlu_session_pb.DeleteSessionLabelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    public addSessionComment(request: ondewo_nlu_session_pb.AddSessionCommentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.Comment) => void): grpc.ClientUnaryCall;
    public addSessionComment(request: ondewo_nlu_session_pb.AddSessionCommentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.Comment) => void): grpc.ClientUnaryCall;
    public addSessionComment(request: ondewo_nlu_session_pb.AddSessionCommentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.Comment) => void): grpc.ClientUnaryCall;
    public deleteSessionComments(request: ondewo_nlu_session_pb.DeleteSessionCommentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    public deleteSessionComments(request: ondewo_nlu_session_pb.DeleteSessionCommentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    public deleteSessionComments(request: ondewo_nlu_session_pb.DeleteSessionCommentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    public updateSessionComments(request: ondewo_nlu_session_pb.UpdateSessionCommentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    public updateSessionComments(request: ondewo_nlu_session_pb.UpdateSessionCommentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    public updateSessionComments(request: ondewo_nlu_session_pb.UpdateSessionCommentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.Session) => void): grpc.ClientUnaryCall;
    public listSessionComments(request: ondewo_nlu_session_pb.ListSessionCommentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListSessionCommentsResponse) => void): grpc.ClientUnaryCall;
    public listSessionComments(request: ondewo_nlu_session_pb.ListSessionCommentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListSessionCommentsResponse) => void): grpc.ClientUnaryCall;
    public listSessionComments(request: ondewo_nlu_session_pb.ListSessionCommentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListSessionCommentsResponse) => void): grpc.ClientUnaryCall;
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
    public getAudioFiles(request: ondewo_nlu_session_pb.GetAudioFilesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.GetAudioFilesResponse) => void): grpc.ClientUnaryCall;
    public getAudioFiles(request: ondewo_nlu_session_pb.GetAudioFilesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.GetAudioFilesResponse) => void): grpc.ClientUnaryCall;
    public getAudioFiles(request: ondewo_nlu_session_pb.GetAudioFilesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.GetAudioFilesResponse) => void): grpc.ClientUnaryCall;
    public addAudioFiles(request: ondewo_nlu_session_pb.AddAudioFilesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.AddAudioFilesResponse) => void): grpc.ClientUnaryCall;
    public addAudioFiles(request: ondewo_nlu_session_pb.AddAudioFilesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.AddAudioFilesResponse) => void): grpc.ClientUnaryCall;
    public addAudioFiles(request: ondewo_nlu_session_pb.AddAudioFilesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.AddAudioFilesResponse) => void): grpc.ClientUnaryCall;
    public deleteAudioFiles(request: ondewo_nlu_session_pb.DeleteAudioFilesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.DeleteAudioFilesResponse) => void): grpc.ClientUnaryCall;
    public deleteAudioFiles(request: ondewo_nlu_session_pb.DeleteAudioFilesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.DeleteAudioFilesResponse) => void): grpc.ClientUnaryCall;
    public deleteAudioFiles(request: ondewo_nlu_session_pb.DeleteAudioFilesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.DeleteAudioFilesResponse) => void): grpc.ClientUnaryCall;
    public getAudioFileOfSession(request: ondewo_nlu_session_pb.GetAudioFileOfSessionRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.AudioFileResource) => void): grpc.ClientUnaryCall;
    public getAudioFileOfSession(request: ondewo_nlu_session_pb.GetAudioFileOfSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.AudioFileResource) => void): grpc.ClientUnaryCall;
    public getAudioFileOfSession(request: ondewo_nlu_session_pb.GetAudioFileOfSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.AudioFileResource) => void): grpc.ClientUnaryCall;
    public listAudioFiles(request: ondewo_nlu_session_pb.ListAudioFilesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListAudioFilesResponse) => void): grpc.ClientUnaryCall;
    public listAudioFiles(request: ondewo_nlu_session_pb.ListAudioFilesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListAudioFilesResponse) => void): grpc.ClientUnaryCall;
    public listAudioFiles(request: ondewo_nlu_session_pb.ListAudioFilesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_session_pb.ListAudioFilesResponse) => void): grpc.ClientUnaryCall;
}
