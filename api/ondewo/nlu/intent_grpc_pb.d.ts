// package: ondewo.nlu
// file: ondewo/nlu/intent.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ondewo_nlu_intent_pb from "../../ondewo/nlu/intent_pb";
import * as ondewo_nlu_context_pb from "../../ondewo/nlu/context_pb";
import * as ondewo_nlu_common_pb from "../../ondewo/nlu/common_pb";
import * as ondewo_nlu_operations_pb from "../../ondewo/nlu/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

interface IIntentsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listIntents: IIntentsService_IListIntents;
    getIntent: IIntentsService_IGetIntent;
    createIntent: IIntentsService_ICreateIntent;
    updateIntent: IIntentsService_IUpdateIntent;
    deleteIntent: IIntentsService_IDeleteIntent;
    batchUpdateIntents: IIntentsService_IBatchUpdateIntents;
    batchDeleteIntents: IIntentsService_IBatchDeleteIntents;
    tagIntent: IIntentsService_ITagIntent;
    deleteIntentTag: IIntentsService_IDeleteIntentTag;
    getIntentTags: IIntentsService_IGetIntentTags;
    getAllIntentTags: IIntentsService_IGetAllIntentTags;
    batchCreateTrainingPhrases: IIntentsService_IBatchCreateTrainingPhrases;
    batchGetTrainingPhrases: IIntentsService_IBatchGetTrainingPhrases;
    batchUpdateTrainingPhrases: IIntentsService_IBatchUpdateTrainingPhrases;
    batchDeleteTrainingPhrases: IIntentsService_IBatchDeleteTrainingPhrases;
    listTrainingPhrases: IIntentsService_IListTrainingPhrases;
    batchCreateResponseMessages: IIntentsService_IBatchCreateResponseMessages;
    batchGetResponseMessages: IIntentsService_IBatchGetResponseMessages;
    batchUpdateResponseMessages: IIntentsService_IBatchUpdateResponseMessages;
    batchDeleteResponseMessages: IIntentsService_IBatchDeleteResponseMessages;
    listResponseMessages: IIntentsService_IListResponseMessages;
    batchCreateParameters: IIntentsService_IBatchCreateParameters;
    batchGetParameters: IIntentsService_IBatchGetParameters;
    batchUpdateParameters: IIntentsService_IBatchUpdateParameters;
    batchDeleteParameters: IIntentsService_IBatchDeleteParameters;
    listParameters: IIntentsService_IListParameters;
    listTrainingPhrasesofIntentsWithEnrichment: IIntentsService_IListTrainingPhrasesofIntentsWithEnrichment;
}

interface IIntentsService_IListIntents extends grpc.MethodDefinition<ondewo_nlu_intent_pb.ListIntentsRequest, ondewo_nlu_intent_pb.ListIntentsResponse> {
    path: "/ondewo.nlu.Intents/ListIntents";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_intent_pb.ListIntentsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.ListIntentsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_intent_pb.ListIntentsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.ListIntentsResponse>;
}
interface IIntentsService_IGetIntent extends grpc.MethodDefinition<ondewo_nlu_intent_pb.GetIntentRequest, ondewo_nlu_intent_pb.Intent> {
    path: "/ondewo.nlu.Intents/GetIntent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_intent_pb.GetIntentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.GetIntentRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_intent_pb.Intent>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.Intent>;
}
interface IIntentsService_ICreateIntent extends grpc.MethodDefinition<ondewo_nlu_intent_pb.CreateIntentRequest, ondewo_nlu_intent_pb.Intent> {
    path: "/ondewo.nlu.Intents/CreateIntent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_intent_pb.CreateIntentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.CreateIntentRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_intent_pb.Intent>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.Intent>;
}
interface IIntentsService_IUpdateIntent extends grpc.MethodDefinition<ondewo_nlu_intent_pb.UpdateIntentRequest, ondewo_nlu_intent_pb.Intent> {
    path: "/ondewo.nlu.Intents/UpdateIntent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_intent_pb.UpdateIntentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.UpdateIntentRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_intent_pb.Intent>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.Intent>;
}
interface IIntentsService_IDeleteIntent extends grpc.MethodDefinition<ondewo_nlu_intent_pb.DeleteIntentRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.Intents/DeleteIntent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_intent_pb.DeleteIntentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.DeleteIntentRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IIntentsService_IBatchUpdateIntents extends grpc.MethodDefinition<ondewo_nlu_intent_pb.BatchUpdateIntentsRequest, ondewo_nlu_intent_pb.BatchUpdateIntentsResponse> {
    path: "/ondewo.nlu.Intents/BatchUpdateIntents";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_intent_pb.BatchUpdateIntentsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.BatchUpdateIntentsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_intent_pb.BatchUpdateIntentsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.BatchUpdateIntentsResponse>;
}
interface IIntentsService_IBatchDeleteIntents extends grpc.MethodDefinition<ondewo_nlu_intent_pb.BatchDeleteIntentsRequest, ondewo_nlu_operations_pb.Operation> {
    path: "/ondewo.nlu.Intents/BatchDeleteIntents";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_intent_pb.BatchDeleteIntentsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.BatchDeleteIntentsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_operations_pb.Operation>;
}
interface IIntentsService_ITagIntent extends grpc.MethodDefinition<ondewo_nlu_intent_pb.IntentTagRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.Intents/TagIntent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_intent_pb.IntentTagRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.IntentTagRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IIntentsService_IDeleteIntentTag extends grpc.MethodDefinition<ondewo_nlu_intent_pb.IntentTagRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.Intents/DeleteIntentTag";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_intent_pb.IntentTagRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.IntentTagRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IIntentsService_IGetIntentTags extends grpc.MethodDefinition<ondewo_nlu_intent_pb.GetIntentTagsRequest, ondewo_nlu_intent_pb.GetIntentTagsResponse> {
    path: "/ondewo.nlu.Intents/GetIntentTags";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_intent_pb.GetIntentTagsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.GetIntentTagsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_intent_pb.GetIntentTagsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.GetIntentTagsResponse>;
}
interface IIntentsService_IGetAllIntentTags extends grpc.MethodDefinition<ondewo_nlu_intent_pb.GetAllIntentTagsRequest, ondewo_nlu_intent_pb.GetIntentTagsResponse> {
    path: "/ondewo.nlu.Intents/GetAllIntentTags";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_intent_pb.GetAllIntentTagsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.GetAllIntentTagsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_intent_pb.GetIntentTagsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.GetIntentTagsResponse>;
}
interface IIntentsService_IBatchCreateTrainingPhrases extends grpc.MethodDefinition<ondewo_nlu_intent_pb.BatchCreateTrainingPhrasesRequest, ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse> {
    path: "/ondewo.nlu.Intents/BatchCreateTrainingPhrases";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_intent_pb.BatchCreateTrainingPhrasesRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.BatchCreateTrainingPhrasesRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse>;
}
interface IIntentsService_IBatchGetTrainingPhrases extends grpc.MethodDefinition<ondewo_nlu_intent_pb.BatchGetTrainingPhrasesRequest, ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse> {
    path: "/ondewo.nlu.Intents/BatchGetTrainingPhrases";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_intent_pb.BatchGetTrainingPhrasesRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.BatchGetTrainingPhrasesRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse>;
}
interface IIntentsService_IBatchUpdateTrainingPhrases extends grpc.MethodDefinition<ondewo_nlu_intent_pb.BatchUpdateTrainingPhrasesRequest, ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse> {
    path: "/ondewo.nlu.Intents/BatchUpdateTrainingPhrases";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_intent_pb.BatchUpdateTrainingPhrasesRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.BatchUpdateTrainingPhrasesRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse>;
}
interface IIntentsService_IBatchDeleteTrainingPhrases extends grpc.MethodDefinition<ondewo_nlu_intent_pb.BatchDeleteTrainingPhrasesRequest, ondewo_nlu_intent_pb.BatchDeleteTrainingPhrasesResponse> {
    path: "/ondewo.nlu.Intents/BatchDeleteTrainingPhrases";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_intent_pb.BatchDeleteTrainingPhrasesRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.BatchDeleteTrainingPhrasesRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_intent_pb.BatchDeleteTrainingPhrasesResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.BatchDeleteTrainingPhrasesResponse>;
}
interface IIntentsService_IListTrainingPhrases extends grpc.MethodDefinition<ondewo_nlu_intent_pb.ListTrainingPhrasesRequest, ondewo_nlu_intent_pb.ListTrainingPhrasesResponse> {
    path: "/ondewo.nlu.Intents/ListTrainingPhrases";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_intent_pb.ListTrainingPhrasesRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.ListTrainingPhrasesRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_intent_pb.ListTrainingPhrasesResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.ListTrainingPhrasesResponse>;
}
interface IIntentsService_IBatchCreateResponseMessages extends grpc.MethodDefinition<ondewo_nlu_intent_pb.BatchCreateResponseMessagesRequest, ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse> {
    path: "/ondewo.nlu.Intents/BatchCreateResponseMessages";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_intent_pb.BatchCreateResponseMessagesRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.BatchCreateResponseMessagesRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse>;
}
interface IIntentsService_IBatchGetResponseMessages extends grpc.MethodDefinition<ondewo_nlu_intent_pb.BatchGetResponseMessagesRequest, ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse> {
    path: "/ondewo.nlu.Intents/BatchGetResponseMessages";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_intent_pb.BatchGetResponseMessagesRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.BatchGetResponseMessagesRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse>;
}
interface IIntentsService_IBatchUpdateResponseMessages extends grpc.MethodDefinition<ondewo_nlu_intent_pb.BatchUpdateResponseMessagesRequest, ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse> {
    path: "/ondewo.nlu.Intents/BatchUpdateResponseMessages";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_intent_pb.BatchUpdateResponseMessagesRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.BatchUpdateResponseMessagesRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse>;
}
interface IIntentsService_IBatchDeleteResponseMessages extends grpc.MethodDefinition<ondewo_nlu_intent_pb.BatchDeleteResponseMessagesRequest, ondewo_nlu_intent_pb.BatchDeleteResponseMessagesResponse> {
    path: "/ondewo.nlu.Intents/BatchDeleteResponseMessages";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_intent_pb.BatchDeleteResponseMessagesRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.BatchDeleteResponseMessagesRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_intent_pb.BatchDeleteResponseMessagesResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.BatchDeleteResponseMessagesResponse>;
}
interface IIntentsService_IListResponseMessages extends grpc.MethodDefinition<ondewo_nlu_intent_pb.ListResponseMessagesRequest, ondewo_nlu_intent_pb.ListResponseMessagesResponse> {
    path: "/ondewo.nlu.Intents/ListResponseMessages";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_intent_pb.ListResponseMessagesRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.ListResponseMessagesRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_intent_pb.ListResponseMessagesResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.ListResponseMessagesResponse>;
}
interface IIntentsService_IBatchCreateParameters extends grpc.MethodDefinition<ondewo_nlu_intent_pb.BatchCreateParametersRequest, ondewo_nlu_intent_pb.BatchParametersStatusResponse> {
    path: "/ondewo.nlu.Intents/BatchCreateParameters";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_intent_pb.BatchCreateParametersRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.BatchCreateParametersRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_intent_pb.BatchParametersStatusResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.BatchParametersStatusResponse>;
}
interface IIntentsService_IBatchGetParameters extends grpc.MethodDefinition<ondewo_nlu_intent_pb.BatchGetParametersRequest, ondewo_nlu_intent_pb.BatchParametersStatusResponse> {
    path: "/ondewo.nlu.Intents/BatchGetParameters";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_intent_pb.BatchGetParametersRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.BatchGetParametersRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_intent_pb.BatchParametersStatusResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.BatchParametersStatusResponse>;
}
interface IIntentsService_IBatchUpdateParameters extends grpc.MethodDefinition<ondewo_nlu_intent_pb.BatchUpdateParametersRequest, ondewo_nlu_intent_pb.BatchParametersStatusResponse> {
    path: "/ondewo.nlu.Intents/BatchUpdateParameters";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_intent_pb.BatchUpdateParametersRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.BatchUpdateParametersRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_intent_pb.BatchParametersStatusResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.BatchParametersStatusResponse>;
}
interface IIntentsService_IBatchDeleteParameters extends grpc.MethodDefinition<ondewo_nlu_intent_pb.BatchDeleteParametersRequest, ondewo_nlu_intent_pb.BatchDeleteParametersResponse> {
    path: "/ondewo.nlu.Intents/BatchDeleteParameters";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_intent_pb.BatchDeleteParametersRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.BatchDeleteParametersRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_intent_pb.BatchDeleteParametersResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.BatchDeleteParametersResponse>;
}
interface IIntentsService_IListParameters extends grpc.MethodDefinition<ondewo_nlu_intent_pb.ListParametersRequest, ondewo_nlu_intent_pb.ListParametersResponse> {
    path: "/ondewo.nlu.Intents/ListParameters";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_intent_pb.ListParametersRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.ListParametersRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_intent_pb.ListParametersResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.ListParametersResponse>;
}
interface IIntentsService_IListTrainingPhrasesofIntentsWithEnrichment extends grpc.MethodDefinition<ondewo_nlu_intent_pb.ListTrainingPhrasesofIntentsWithEnrichmentRequest, ondewo_nlu_intent_pb.ListTrainingPhrasesofIntentsWithEnrichmentResponse> {
    path: "/ondewo.nlu.Intents/ListTrainingPhrasesofIntentsWithEnrichment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_intent_pb.ListTrainingPhrasesofIntentsWithEnrichmentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.ListTrainingPhrasesofIntentsWithEnrichmentRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_intent_pb.ListTrainingPhrasesofIntentsWithEnrichmentResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_intent_pb.ListTrainingPhrasesofIntentsWithEnrichmentResponse>;
}

export const IntentsService: IIntentsService;

export interface IIntentsServer {
    listIntents: grpc.handleUnaryCall<ondewo_nlu_intent_pb.ListIntentsRequest, ondewo_nlu_intent_pb.ListIntentsResponse>;
    getIntent: grpc.handleUnaryCall<ondewo_nlu_intent_pb.GetIntentRequest, ondewo_nlu_intent_pb.Intent>;
    createIntent: grpc.handleUnaryCall<ondewo_nlu_intent_pb.CreateIntentRequest, ondewo_nlu_intent_pb.Intent>;
    updateIntent: grpc.handleUnaryCall<ondewo_nlu_intent_pb.UpdateIntentRequest, ondewo_nlu_intent_pb.Intent>;
    deleteIntent: grpc.handleUnaryCall<ondewo_nlu_intent_pb.DeleteIntentRequest, google_protobuf_empty_pb.Empty>;
    batchUpdateIntents: grpc.handleUnaryCall<ondewo_nlu_intent_pb.BatchUpdateIntentsRequest, ondewo_nlu_intent_pb.BatchUpdateIntentsResponse>;
    batchDeleteIntents: grpc.handleUnaryCall<ondewo_nlu_intent_pb.BatchDeleteIntentsRequest, ondewo_nlu_operations_pb.Operation>;
    tagIntent: grpc.handleUnaryCall<ondewo_nlu_intent_pb.IntentTagRequest, google_protobuf_empty_pb.Empty>;
    deleteIntentTag: grpc.handleUnaryCall<ondewo_nlu_intent_pb.IntentTagRequest, google_protobuf_empty_pb.Empty>;
    getIntentTags: grpc.handleUnaryCall<ondewo_nlu_intent_pb.GetIntentTagsRequest, ondewo_nlu_intent_pb.GetIntentTagsResponse>;
    getAllIntentTags: grpc.handleUnaryCall<ondewo_nlu_intent_pb.GetAllIntentTagsRequest, ondewo_nlu_intent_pb.GetIntentTagsResponse>;
    batchCreateTrainingPhrases: grpc.handleUnaryCall<ondewo_nlu_intent_pb.BatchCreateTrainingPhrasesRequest, ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse>;
    batchGetTrainingPhrases: grpc.handleUnaryCall<ondewo_nlu_intent_pb.BatchGetTrainingPhrasesRequest, ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse>;
    batchUpdateTrainingPhrases: grpc.handleUnaryCall<ondewo_nlu_intent_pb.BatchUpdateTrainingPhrasesRequest, ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse>;
    batchDeleteTrainingPhrases: grpc.handleUnaryCall<ondewo_nlu_intent_pb.BatchDeleteTrainingPhrasesRequest, ondewo_nlu_intent_pb.BatchDeleteTrainingPhrasesResponse>;
    listTrainingPhrases: grpc.handleUnaryCall<ondewo_nlu_intent_pb.ListTrainingPhrasesRequest, ondewo_nlu_intent_pb.ListTrainingPhrasesResponse>;
    batchCreateResponseMessages: grpc.handleUnaryCall<ondewo_nlu_intent_pb.BatchCreateResponseMessagesRequest, ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse>;
    batchGetResponseMessages: grpc.handleUnaryCall<ondewo_nlu_intent_pb.BatchGetResponseMessagesRequest, ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse>;
    batchUpdateResponseMessages: grpc.handleUnaryCall<ondewo_nlu_intent_pb.BatchUpdateResponseMessagesRequest, ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse>;
    batchDeleteResponseMessages: grpc.handleUnaryCall<ondewo_nlu_intent_pb.BatchDeleteResponseMessagesRequest, ondewo_nlu_intent_pb.BatchDeleteResponseMessagesResponse>;
    listResponseMessages: grpc.handleUnaryCall<ondewo_nlu_intent_pb.ListResponseMessagesRequest, ondewo_nlu_intent_pb.ListResponseMessagesResponse>;
    batchCreateParameters: grpc.handleUnaryCall<ondewo_nlu_intent_pb.BatchCreateParametersRequest, ondewo_nlu_intent_pb.BatchParametersStatusResponse>;
    batchGetParameters: grpc.handleUnaryCall<ondewo_nlu_intent_pb.BatchGetParametersRequest, ondewo_nlu_intent_pb.BatchParametersStatusResponse>;
    batchUpdateParameters: grpc.handleUnaryCall<ondewo_nlu_intent_pb.BatchUpdateParametersRequest, ondewo_nlu_intent_pb.BatchParametersStatusResponse>;
    batchDeleteParameters: grpc.handleUnaryCall<ondewo_nlu_intent_pb.BatchDeleteParametersRequest, ondewo_nlu_intent_pb.BatchDeleteParametersResponse>;
    listParameters: grpc.handleUnaryCall<ondewo_nlu_intent_pb.ListParametersRequest, ondewo_nlu_intent_pb.ListParametersResponse>;
    listTrainingPhrasesofIntentsWithEnrichment: grpc.handleUnaryCall<ondewo_nlu_intent_pb.ListTrainingPhrasesofIntentsWithEnrichmentRequest, ondewo_nlu_intent_pb.ListTrainingPhrasesofIntentsWithEnrichmentResponse>;
}

export interface IIntentsClient {
    listIntents(request: ondewo_nlu_intent_pb.ListIntentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.ListIntentsResponse) => void): grpc.ClientUnaryCall;
    listIntents(request: ondewo_nlu_intent_pb.ListIntentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.ListIntentsResponse) => void): grpc.ClientUnaryCall;
    listIntents(request: ondewo_nlu_intent_pb.ListIntentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.ListIntentsResponse) => void): grpc.ClientUnaryCall;
    getIntent(request: ondewo_nlu_intent_pb.GetIntentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent) => void): grpc.ClientUnaryCall;
    getIntent(request: ondewo_nlu_intent_pb.GetIntentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent) => void): grpc.ClientUnaryCall;
    getIntent(request: ondewo_nlu_intent_pb.GetIntentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent) => void): grpc.ClientUnaryCall;
    createIntent(request: ondewo_nlu_intent_pb.CreateIntentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent) => void): grpc.ClientUnaryCall;
    createIntent(request: ondewo_nlu_intent_pb.CreateIntentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent) => void): grpc.ClientUnaryCall;
    createIntent(request: ondewo_nlu_intent_pb.CreateIntentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent) => void): grpc.ClientUnaryCall;
    updateIntent(request: ondewo_nlu_intent_pb.UpdateIntentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent) => void): grpc.ClientUnaryCall;
    updateIntent(request: ondewo_nlu_intent_pb.UpdateIntentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent) => void): grpc.ClientUnaryCall;
    updateIntent(request: ondewo_nlu_intent_pb.UpdateIntentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent) => void): grpc.ClientUnaryCall;
    deleteIntent(request: ondewo_nlu_intent_pb.DeleteIntentRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteIntent(request: ondewo_nlu_intent_pb.DeleteIntentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteIntent(request: ondewo_nlu_intent_pb.DeleteIntentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    batchUpdateIntents(request: ondewo_nlu_intent_pb.BatchUpdateIntentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchUpdateIntentsResponse) => void): grpc.ClientUnaryCall;
    batchUpdateIntents(request: ondewo_nlu_intent_pb.BatchUpdateIntentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchUpdateIntentsResponse) => void): grpc.ClientUnaryCall;
    batchUpdateIntents(request: ondewo_nlu_intent_pb.BatchUpdateIntentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchUpdateIntentsResponse) => void): grpc.ClientUnaryCall;
    batchDeleteIntents(request: ondewo_nlu_intent_pb.BatchDeleteIntentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    batchDeleteIntents(request: ondewo_nlu_intent_pb.BatchDeleteIntentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    batchDeleteIntents(request: ondewo_nlu_intent_pb.BatchDeleteIntentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    tagIntent(request: ondewo_nlu_intent_pb.IntentTagRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    tagIntent(request: ondewo_nlu_intent_pb.IntentTagRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    tagIntent(request: ondewo_nlu_intent_pb.IntentTagRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteIntentTag(request: ondewo_nlu_intent_pb.IntentTagRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteIntentTag(request: ondewo_nlu_intent_pb.IntentTagRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteIntentTag(request: ondewo_nlu_intent_pb.IntentTagRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getIntentTags(request: ondewo_nlu_intent_pb.GetIntentTagsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.GetIntentTagsResponse) => void): grpc.ClientUnaryCall;
    getIntentTags(request: ondewo_nlu_intent_pb.GetIntentTagsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.GetIntentTagsResponse) => void): grpc.ClientUnaryCall;
    getIntentTags(request: ondewo_nlu_intent_pb.GetIntentTagsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.GetIntentTagsResponse) => void): grpc.ClientUnaryCall;
    getAllIntentTags(request: ondewo_nlu_intent_pb.GetAllIntentTagsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.GetIntentTagsResponse) => void): grpc.ClientUnaryCall;
    getAllIntentTags(request: ondewo_nlu_intent_pb.GetAllIntentTagsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.GetIntentTagsResponse) => void): grpc.ClientUnaryCall;
    getAllIntentTags(request: ondewo_nlu_intent_pb.GetAllIntentTagsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.GetIntentTagsResponse) => void): grpc.ClientUnaryCall;
    batchCreateTrainingPhrases(request: ondewo_nlu_intent_pb.BatchCreateTrainingPhrasesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse) => void): grpc.ClientUnaryCall;
    batchCreateTrainingPhrases(request: ondewo_nlu_intent_pb.BatchCreateTrainingPhrasesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse) => void): grpc.ClientUnaryCall;
    batchCreateTrainingPhrases(request: ondewo_nlu_intent_pb.BatchCreateTrainingPhrasesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse) => void): grpc.ClientUnaryCall;
    batchGetTrainingPhrases(request: ondewo_nlu_intent_pb.BatchGetTrainingPhrasesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse) => void): grpc.ClientUnaryCall;
    batchGetTrainingPhrases(request: ondewo_nlu_intent_pb.BatchGetTrainingPhrasesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse) => void): grpc.ClientUnaryCall;
    batchGetTrainingPhrases(request: ondewo_nlu_intent_pb.BatchGetTrainingPhrasesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse) => void): grpc.ClientUnaryCall;
    batchUpdateTrainingPhrases(request: ondewo_nlu_intent_pb.BatchUpdateTrainingPhrasesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse) => void): grpc.ClientUnaryCall;
    batchUpdateTrainingPhrases(request: ondewo_nlu_intent_pb.BatchUpdateTrainingPhrasesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse) => void): grpc.ClientUnaryCall;
    batchUpdateTrainingPhrases(request: ondewo_nlu_intent_pb.BatchUpdateTrainingPhrasesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse) => void): grpc.ClientUnaryCall;
    batchDeleteTrainingPhrases(request: ondewo_nlu_intent_pb.BatchDeleteTrainingPhrasesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchDeleteTrainingPhrasesResponse) => void): grpc.ClientUnaryCall;
    batchDeleteTrainingPhrases(request: ondewo_nlu_intent_pb.BatchDeleteTrainingPhrasesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchDeleteTrainingPhrasesResponse) => void): grpc.ClientUnaryCall;
    batchDeleteTrainingPhrases(request: ondewo_nlu_intent_pb.BatchDeleteTrainingPhrasesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchDeleteTrainingPhrasesResponse) => void): grpc.ClientUnaryCall;
    listTrainingPhrases(request: ondewo_nlu_intent_pb.ListTrainingPhrasesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.ListTrainingPhrasesResponse) => void): grpc.ClientUnaryCall;
    listTrainingPhrases(request: ondewo_nlu_intent_pb.ListTrainingPhrasesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.ListTrainingPhrasesResponse) => void): grpc.ClientUnaryCall;
    listTrainingPhrases(request: ondewo_nlu_intent_pb.ListTrainingPhrasesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.ListTrainingPhrasesResponse) => void): grpc.ClientUnaryCall;
    batchCreateResponseMessages(request: ondewo_nlu_intent_pb.BatchCreateResponseMessagesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse) => void): grpc.ClientUnaryCall;
    batchCreateResponseMessages(request: ondewo_nlu_intent_pb.BatchCreateResponseMessagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse) => void): grpc.ClientUnaryCall;
    batchCreateResponseMessages(request: ondewo_nlu_intent_pb.BatchCreateResponseMessagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse) => void): grpc.ClientUnaryCall;
    batchGetResponseMessages(request: ondewo_nlu_intent_pb.BatchGetResponseMessagesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse) => void): grpc.ClientUnaryCall;
    batchGetResponseMessages(request: ondewo_nlu_intent_pb.BatchGetResponseMessagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse) => void): grpc.ClientUnaryCall;
    batchGetResponseMessages(request: ondewo_nlu_intent_pb.BatchGetResponseMessagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse) => void): grpc.ClientUnaryCall;
    batchUpdateResponseMessages(request: ondewo_nlu_intent_pb.BatchUpdateResponseMessagesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse) => void): grpc.ClientUnaryCall;
    batchUpdateResponseMessages(request: ondewo_nlu_intent_pb.BatchUpdateResponseMessagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse) => void): grpc.ClientUnaryCall;
    batchUpdateResponseMessages(request: ondewo_nlu_intent_pb.BatchUpdateResponseMessagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse) => void): grpc.ClientUnaryCall;
    batchDeleteResponseMessages(request: ondewo_nlu_intent_pb.BatchDeleteResponseMessagesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchDeleteResponseMessagesResponse) => void): grpc.ClientUnaryCall;
    batchDeleteResponseMessages(request: ondewo_nlu_intent_pb.BatchDeleteResponseMessagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchDeleteResponseMessagesResponse) => void): grpc.ClientUnaryCall;
    batchDeleteResponseMessages(request: ondewo_nlu_intent_pb.BatchDeleteResponseMessagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchDeleteResponseMessagesResponse) => void): grpc.ClientUnaryCall;
    listResponseMessages(request: ondewo_nlu_intent_pb.ListResponseMessagesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.ListResponseMessagesResponse) => void): grpc.ClientUnaryCall;
    listResponseMessages(request: ondewo_nlu_intent_pb.ListResponseMessagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.ListResponseMessagesResponse) => void): grpc.ClientUnaryCall;
    listResponseMessages(request: ondewo_nlu_intent_pb.ListResponseMessagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.ListResponseMessagesResponse) => void): grpc.ClientUnaryCall;
    batchCreateParameters(request: ondewo_nlu_intent_pb.BatchCreateParametersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchParametersStatusResponse) => void): grpc.ClientUnaryCall;
    batchCreateParameters(request: ondewo_nlu_intent_pb.BatchCreateParametersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchParametersStatusResponse) => void): grpc.ClientUnaryCall;
    batchCreateParameters(request: ondewo_nlu_intent_pb.BatchCreateParametersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchParametersStatusResponse) => void): grpc.ClientUnaryCall;
    batchGetParameters(request: ondewo_nlu_intent_pb.BatchGetParametersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchParametersStatusResponse) => void): grpc.ClientUnaryCall;
    batchGetParameters(request: ondewo_nlu_intent_pb.BatchGetParametersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchParametersStatusResponse) => void): grpc.ClientUnaryCall;
    batchGetParameters(request: ondewo_nlu_intent_pb.BatchGetParametersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchParametersStatusResponse) => void): grpc.ClientUnaryCall;
    batchUpdateParameters(request: ondewo_nlu_intent_pb.BatchUpdateParametersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchParametersStatusResponse) => void): grpc.ClientUnaryCall;
    batchUpdateParameters(request: ondewo_nlu_intent_pb.BatchUpdateParametersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchParametersStatusResponse) => void): grpc.ClientUnaryCall;
    batchUpdateParameters(request: ondewo_nlu_intent_pb.BatchUpdateParametersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchParametersStatusResponse) => void): grpc.ClientUnaryCall;
    batchDeleteParameters(request: ondewo_nlu_intent_pb.BatchDeleteParametersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchDeleteParametersResponse) => void): grpc.ClientUnaryCall;
    batchDeleteParameters(request: ondewo_nlu_intent_pb.BatchDeleteParametersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchDeleteParametersResponse) => void): grpc.ClientUnaryCall;
    batchDeleteParameters(request: ondewo_nlu_intent_pb.BatchDeleteParametersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchDeleteParametersResponse) => void): grpc.ClientUnaryCall;
    listParameters(request: ondewo_nlu_intent_pb.ListParametersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.ListParametersResponse) => void): grpc.ClientUnaryCall;
    listParameters(request: ondewo_nlu_intent_pb.ListParametersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.ListParametersResponse) => void): grpc.ClientUnaryCall;
    listParameters(request: ondewo_nlu_intent_pb.ListParametersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.ListParametersResponse) => void): grpc.ClientUnaryCall;
    listTrainingPhrasesofIntentsWithEnrichment(request: ondewo_nlu_intent_pb.ListTrainingPhrasesofIntentsWithEnrichmentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.ListTrainingPhrasesofIntentsWithEnrichmentResponse) => void): grpc.ClientUnaryCall;
    listTrainingPhrasesofIntentsWithEnrichment(request: ondewo_nlu_intent_pb.ListTrainingPhrasesofIntentsWithEnrichmentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.ListTrainingPhrasesofIntentsWithEnrichmentResponse) => void): grpc.ClientUnaryCall;
    listTrainingPhrasesofIntentsWithEnrichment(request: ondewo_nlu_intent_pb.ListTrainingPhrasesofIntentsWithEnrichmentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.ListTrainingPhrasesofIntentsWithEnrichmentResponse) => void): grpc.ClientUnaryCall;
}

export class IntentsClient extends grpc.Client implements IIntentsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public listIntents(request: ondewo_nlu_intent_pb.ListIntentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.ListIntentsResponse) => void): grpc.ClientUnaryCall;
    public listIntents(request: ondewo_nlu_intent_pb.ListIntentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.ListIntentsResponse) => void): grpc.ClientUnaryCall;
    public listIntents(request: ondewo_nlu_intent_pb.ListIntentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.ListIntentsResponse) => void): grpc.ClientUnaryCall;
    public getIntent(request: ondewo_nlu_intent_pb.GetIntentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent) => void): grpc.ClientUnaryCall;
    public getIntent(request: ondewo_nlu_intent_pb.GetIntentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent) => void): grpc.ClientUnaryCall;
    public getIntent(request: ondewo_nlu_intent_pb.GetIntentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent) => void): grpc.ClientUnaryCall;
    public createIntent(request: ondewo_nlu_intent_pb.CreateIntentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent) => void): grpc.ClientUnaryCall;
    public createIntent(request: ondewo_nlu_intent_pb.CreateIntentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent) => void): grpc.ClientUnaryCall;
    public createIntent(request: ondewo_nlu_intent_pb.CreateIntentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent) => void): grpc.ClientUnaryCall;
    public updateIntent(request: ondewo_nlu_intent_pb.UpdateIntentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent) => void): grpc.ClientUnaryCall;
    public updateIntent(request: ondewo_nlu_intent_pb.UpdateIntentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent) => void): grpc.ClientUnaryCall;
    public updateIntent(request: ondewo_nlu_intent_pb.UpdateIntentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.Intent) => void): grpc.ClientUnaryCall;
    public deleteIntent(request: ondewo_nlu_intent_pb.DeleteIntentRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteIntent(request: ondewo_nlu_intent_pb.DeleteIntentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteIntent(request: ondewo_nlu_intent_pb.DeleteIntentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public batchUpdateIntents(request: ondewo_nlu_intent_pb.BatchUpdateIntentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchUpdateIntentsResponse) => void): grpc.ClientUnaryCall;
    public batchUpdateIntents(request: ondewo_nlu_intent_pb.BatchUpdateIntentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchUpdateIntentsResponse) => void): grpc.ClientUnaryCall;
    public batchUpdateIntents(request: ondewo_nlu_intent_pb.BatchUpdateIntentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchUpdateIntentsResponse) => void): grpc.ClientUnaryCall;
    public batchDeleteIntents(request: ondewo_nlu_intent_pb.BatchDeleteIntentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public batchDeleteIntents(request: ondewo_nlu_intent_pb.BatchDeleteIntentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public batchDeleteIntents(request: ondewo_nlu_intent_pb.BatchDeleteIntentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public tagIntent(request: ondewo_nlu_intent_pb.IntentTagRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public tagIntent(request: ondewo_nlu_intent_pb.IntentTagRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public tagIntent(request: ondewo_nlu_intent_pb.IntentTagRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteIntentTag(request: ondewo_nlu_intent_pb.IntentTagRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteIntentTag(request: ondewo_nlu_intent_pb.IntentTagRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteIntentTag(request: ondewo_nlu_intent_pb.IntentTagRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getIntentTags(request: ondewo_nlu_intent_pb.GetIntentTagsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.GetIntentTagsResponse) => void): grpc.ClientUnaryCall;
    public getIntentTags(request: ondewo_nlu_intent_pb.GetIntentTagsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.GetIntentTagsResponse) => void): grpc.ClientUnaryCall;
    public getIntentTags(request: ondewo_nlu_intent_pb.GetIntentTagsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.GetIntentTagsResponse) => void): grpc.ClientUnaryCall;
    public getAllIntentTags(request: ondewo_nlu_intent_pb.GetAllIntentTagsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.GetIntentTagsResponse) => void): grpc.ClientUnaryCall;
    public getAllIntentTags(request: ondewo_nlu_intent_pb.GetAllIntentTagsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.GetIntentTagsResponse) => void): grpc.ClientUnaryCall;
    public getAllIntentTags(request: ondewo_nlu_intent_pb.GetAllIntentTagsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.GetIntentTagsResponse) => void): grpc.ClientUnaryCall;
    public batchCreateTrainingPhrases(request: ondewo_nlu_intent_pb.BatchCreateTrainingPhrasesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse) => void): grpc.ClientUnaryCall;
    public batchCreateTrainingPhrases(request: ondewo_nlu_intent_pb.BatchCreateTrainingPhrasesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse) => void): grpc.ClientUnaryCall;
    public batchCreateTrainingPhrases(request: ondewo_nlu_intent_pb.BatchCreateTrainingPhrasesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse) => void): grpc.ClientUnaryCall;
    public batchGetTrainingPhrases(request: ondewo_nlu_intent_pb.BatchGetTrainingPhrasesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse) => void): grpc.ClientUnaryCall;
    public batchGetTrainingPhrases(request: ondewo_nlu_intent_pb.BatchGetTrainingPhrasesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse) => void): grpc.ClientUnaryCall;
    public batchGetTrainingPhrases(request: ondewo_nlu_intent_pb.BatchGetTrainingPhrasesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse) => void): grpc.ClientUnaryCall;
    public batchUpdateTrainingPhrases(request: ondewo_nlu_intent_pb.BatchUpdateTrainingPhrasesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse) => void): grpc.ClientUnaryCall;
    public batchUpdateTrainingPhrases(request: ondewo_nlu_intent_pb.BatchUpdateTrainingPhrasesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse) => void): grpc.ClientUnaryCall;
    public batchUpdateTrainingPhrases(request: ondewo_nlu_intent_pb.BatchUpdateTrainingPhrasesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse) => void): grpc.ClientUnaryCall;
    public batchDeleteTrainingPhrases(request: ondewo_nlu_intent_pb.BatchDeleteTrainingPhrasesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchDeleteTrainingPhrasesResponse) => void): grpc.ClientUnaryCall;
    public batchDeleteTrainingPhrases(request: ondewo_nlu_intent_pb.BatchDeleteTrainingPhrasesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchDeleteTrainingPhrasesResponse) => void): grpc.ClientUnaryCall;
    public batchDeleteTrainingPhrases(request: ondewo_nlu_intent_pb.BatchDeleteTrainingPhrasesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchDeleteTrainingPhrasesResponse) => void): grpc.ClientUnaryCall;
    public listTrainingPhrases(request: ondewo_nlu_intent_pb.ListTrainingPhrasesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.ListTrainingPhrasesResponse) => void): grpc.ClientUnaryCall;
    public listTrainingPhrases(request: ondewo_nlu_intent_pb.ListTrainingPhrasesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.ListTrainingPhrasesResponse) => void): grpc.ClientUnaryCall;
    public listTrainingPhrases(request: ondewo_nlu_intent_pb.ListTrainingPhrasesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.ListTrainingPhrasesResponse) => void): grpc.ClientUnaryCall;
    public batchCreateResponseMessages(request: ondewo_nlu_intent_pb.BatchCreateResponseMessagesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse) => void): grpc.ClientUnaryCall;
    public batchCreateResponseMessages(request: ondewo_nlu_intent_pb.BatchCreateResponseMessagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse) => void): grpc.ClientUnaryCall;
    public batchCreateResponseMessages(request: ondewo_nlu_intent_pb.BatchCreateResponseMessagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse) => void): grpc.ClientUnaryCall;
    public batchGetResponseMessages(request: ondewo_nlu_intent_pb.BatchGetResponseMessagesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse) => void): grpc.ClientUnaryCall;
    public batchGetResponseMessages(request: ondewo_nlu_intent_pb.BatchGetResponseMessagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse) => void): grpc.ClientUnaryCall;
    public batchGetResponseMessages(request: ondewo_nlu_intent_pb.BatchGetResponseMessagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse) => void): grpc.ClientUnaryCall;
    public batchUpdateResponseMessages(request: ondewo_nlu_intent_pb.BatchUpdateResponseMessagesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse) => void): grpc.ClientUnaryCall;
    public batchUpdateResponseMessages(request: ondewo_nlu_intent_pb.BatchUpdateResponseMessagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse) => void): grpc.ClientUnaryCall;
    public batchUpdateResponseMessages(request: ondewo_nlu_intent_pb.BatchUpdateResponseMessagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse) => void): grpc.ClientUnaryCall;
    public batchDeleteResponseMessages(request: ondewo_nlu_intent_pb.BatchDeleteResponseMessagesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchDeleteResponseMessagesResponse) => void): grpc.ClientUnaryCall;
    public batchDeleteResponseMessages(request: ondewo_nlu_intent_pb.BatchDeleteResponseMessagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchDeleteResponseMessagesResponse) => void): grpc.ClientUnaryCall;
    public batchDeleteResponseMessages(request: ondewo_nlu_intent_pb.BatchDeleteResponseMessagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchDeleteResponseMessagesResponse) => void): grpc.ClientUnaryCall;
    public listResponseMessages(request: ondewo_nlu_intent_pb.ListResponseMessagesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.ListResponseMessagesResponse) => void): grpc.ClientUnaryCall;
    public listResponseMessages(request: ondewo_nlu_intent_pb.ListResponseMessagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.ListResponseMessagesResponse) => void): grpc.ClientUnaryCall;
    public listResponseMessages(request: ondewo_nlu_intent_pb.ListResponseMessagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.ListResponseMessagesResponse) => void): grpc.ClientUnaryCall;
    public batchCreateParameters(request: ondewo_nlu_intent_pb.BatchCreateParametersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchParametersStatusResponse) => void): grpc.ClientUnaryCall;
    public batchCreateParameters(request: ondewo_nlu_intent_pb.BatchCreateParametersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchParametersStatusResponse) => void): grpc.ClientUnaryCall;
    public batchCreateParameters(request: ondewo_nlu_intent_pb.BatchCreateParametersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchParametersStatusResponse) => void): grpc.ClientUnaryCall;
    public batchGetParameters(request: ondewo_nlu_intent_pb.BatchGetParametersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchParametersStatusResponse) => void): grpc.ClientUnaryCall;
    public batchGetParameters(request: ondewo_nlu_intent_pb.BatchGetParametersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchParametersStatusResponse) => void): grpc.ClientUnaryCall;
    public batchGetParameters(request: ondewo_nlu_intent_pb.BatchGetParametersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchParametersStatusResponse) => void): grpc.ClientUnaryCall;
    public batchUpdateParameters(request: ondewo_nlu_intent_pb.BatchUpdateParametersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchParametersStatusResponse) => void): grpc.ClientUnaryCall;
    public batchUpdateParameters(request: ondewo_nlu_intent_pb.BatchUpdateParametersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchParametersStatusResponse) => void): grpc.ClientUnaryCall;
    public batchUpdateParameters(request: ondewo_nlu_intent_pb.BatchUpdateParametersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchParametersStatusResponse) => void): grpc.ClientUnaryCall;
    public batchDeleteParameters(request: ondewo_nlu_intent_pb.BatchDeleteParametersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchDeleteParametersResponse) => void): grpc.ClientUnaryCall;
    public batchDeleteParameters(request: ondewo_nlu_intent_pb.BatchDeleteParametersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchDeleteParametersResponse) => void): grpc.ClientUnaryCall;
    public batchDeleteParameters(request: ondewo_nlu_intent_pb.BatchDeleteParametersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.BatchDeleteParametersResponse) => void): grpc.ClientUnaryCall;
    public listParameters(request: ondewo_nlu_intent_pb.ListParametersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.ListParametersResponse) => void): grpc.ClientUnaryCall;
    public listParameters(request: ondewo_nlu_intent_pb.ListParametersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.ListParametersResponse) => void): grpc.ClientUnaryCall;
    public listParameters(request: ondewo_nlu_intent_pb.ListParametersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.ListParametersResponse) => void): grpc.ClientUnaryCall;
    public listTrainingPhrasesofIntentsWithEnrichment(request: ondewo_nlu_intent_pb.ListTrainingPhrasesofIntentsWithEnrichmentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.ListTrainingPhrasesofIntentsWithEnrichmentResponse) => void): grpc.ClientUnaryCall;
    public listTrainingPhrasesofIntentsWithEnrichment(request: ondewo_nlu_intent_pb.ListTrainingPhrasesofIntentsWithEnrichmentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.ListTrainingPhrasesofIntentsWithEnrichmentResponse) => void): grpc.ClientUnaryCall;
    public listTrainingPhrasesofIntentsWithEnrichment(request: ondewo_nlu_intent_pb.ListTrainingPhrasesofIntentsWithEnrichmentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_intent_pb.ListTrainingPhrasesofIntentsWithEnrichmentResponse) => void): grpc.ClientUnaryCall;
}
