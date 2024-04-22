// package: ondewo.nlu
// file: ondewo/nlu/aiservices.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ondewo_nlu_aiservices_pb from "../../ondewo/nlu/aiservices_pb";
import * as ondewo_nlu_intent_pb from "../../ondewo/nlu/intent_pb";
import * as ondewo_nlu_entity_type_pb from "../../ondewo/nlu/entity_type_pb";

interface IAiServicesService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    extractEntities: IAiServicesService_IExtractEntities;
    generateUserSays: IAiServicesService_IGenerateUserSays;
    generateResponses: IAiServicesService_IGenerateResponses;
    getAlternativeSentences: IAiServicesService_IGetAlternativeSentences;
    getAlternativeTrainingPhrases: IAiServicesService_IGetAlternativeTrainingPhrases;
    getSynonyms: IAiServicesService_IGetSynonyms;
    classifyIntents: IAiServicesService_IClassifyIntents;
    extractEntitiesFuzzy: IAiServicesService_IExtractEntitiesFuzzy;
}

interface IAiServicesService_IExtractEntities extends grpc.MethodDefinition<ondewo_nlu_aiservices_pb.ExtractEntitiesRequest, ondewo_nlu_aiservices_pb.ExtractEntitiesResponse> {
    path: "/ondewo.nlu.AiServices/ExtractEntities";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_aiservices_pb.ExtractEntitiesRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_aiservices_pb.ExtractEntitiesRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_aiservices_pb.ExtractEntitiesResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_aiservices_pb.ExtractEntitiesResponse>;
}
interface IAiServicesService_IGenerateUserSays extends grpc.MethodDefinition<ondewo_nlu_aiservices_pb.GenerateUserSaysRequest, ondewo_nlu_aiservices_pb.GenerateUserSaysResponse> {
    path: "/ondewo.nlu.AiServices/GenerateUserSays";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_aiservices_pb.GenerateUserSaysRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_aiservices_pb.GenerateUserSaysRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_aiservices_pb.GenerateUserSaysResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_aiservices_pb.GenerateUserSaysResponse>;
}
interface IAiServicesService_IGenerateResponses extends grpc.MethodDefinition<ondewo_nlu_aiservices_pb.GenerateResponsesRequest, ondewo_nlu_aiservices_pb.GenerateResponsesResponse> {
    path: "/ondewo.nlu.AiServices/GenerateResponses";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_aiservices_pb.GenerateResponsesRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_aiservices_pb.GenerateResponsesRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_aiservices_pb.GenerateResponsesResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_aiservices_pb.GenerateResponsesResponse>;
}
interface IAiServicesService_IGetAlternativeSentences extends grpc.MethodDefinition<ondewo_nlu_aiservices_pb.GetAlternativeSentencesRequest, ondewo_nlu_aiservices_pb.GetAlternativeSentencesResponse> {
    path: "/ondewo.nlu.AiServices/GetAlternativeSentences";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_aiservices_pb.GetAlternativeSentencesRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_aiservices_pb.GetAlternativeSentencesRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_aiservices_pb.GetAlternativeSentencesResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_aiservices_pb.GetAlternativeSentencesResponse>;
}
interface IAiServicesService_IGetAlternativeTrainingPhrases extends grpc.MethodDefinition<ondewo_nlu_aiservices_pb.GetAlternativeTrainingPhrasesRequest, ondewo_nlu_aiservices_pb.GetAlternativeTrainingPhrasesResponse> {
    path: "/ondewo.nlu.AiServices/GetAlternativeTrainingPhrases";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_aiservices_pb.GetAlternativeTrainingPhrasesRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_aiservices_pb.GetAlternativeTrainingPhrasesRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_aiservices_pb.GetAlternativeTrainingPhrasesResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_aiservices_pb.GetAlternativeTrainingPhrasesResponse>;
}
interface IAiServicesService_IGetSynonyms extends grpc.MethodDefinition<ondewo_nlu_aiservices_pb.GetSynonymsRequest, ondewo_nlu_aiservices_pb.GetSynonymsResponse> {
    path: "/ondewo.nlu.AiServices/GetSynonyms";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_aiservices_pb.GetSynonymsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_aiservices_pb.GetSynonymsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_aiservices_pb.GetSynonymsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_aiservices_pb.GetSynonymsResponse>;
}
interface IAiServicesService_IClassifyIntents extends grpc.MethodDefinition<ondewo_nlu_aiservices_pb.ClassifyIntentsRequest, ondewo_nlu_aiservices_pb.ClassifyIntentsResponse> {
    path: "/ondewo.nlu.AiServices/ClassifyIntents";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_aiservices_pb.ClassifyIntentsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_aiservices_pb.ClassifyIntentsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_aiservices_pb.ClassifyIntentsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_aiservices_pb.ClassifyIntentsResponse>;
}
interface IAiServicesService_IExtractEntitiesFuzzy extends grpc.MethodDefinition<ondewo_nlu_aiservices_pb.ExtractEntitiesFuzzyRequest, ondewo_nlu_aiservices_pb.ExtractEntitiesResponse> {
    path: "/ondewo.nlu.AiServices/ExtractEntitiesFuzzy";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_aiservices_pb.ExtractEntitiesFuzzyRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_aiservices_pb.ExtractEntitiesFuzzyRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_aiservices_pb.ExtractEntitiesResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_aiservices_pb.ExtractEntitiesResponse>;
}

export const AiServicesService: IAiServicesService;

export interface IAiServicesServer {
    extractEntities: grpc.handleUnaryCall<ondewo_nlu_aiservices_pb.ExtractEntitiesRequest, ondewo_nlu_aiservices_pb.ExtractEntitiesResponse>;
    generateUserSays: grpc.handleUnaryCall<ondewo_nlu_aiservices_pb.GenerateUserSaysRequest, ondewo_nlu_aiservices_pb.GenerateUserSaysResponse>;
    generateResponses: grpc.handleUnaryCall<ondewo_nlu_aiservices_pb.GenerateResponsesRequest, ondewo_nlu_aiservices_pb.GenerateResponsesResponse>;
    getAlternativeSentences: grpc.handleUnaryCall<ondewo_nlu_aiservices_pb.GetAlternativeSentencesRequest, ondewo_nlu_aiservices_pb.GetAlternativeSentencesResponse>;
    getAlternativeTrainingPhrases: grpc.handleUnaryCall<ondewo_nlu_aiservices_pb.GetAlternativeTrainingPhrasesRequest, ondewo_nlu_aiservices_pb.GetAlternativeTrainingPhrasesResponse>;
    getSynonyms: grpc.handleUnaryCall<ondewo_nlu_aiservices_pb.GetSynonymsRequest, ondewo_nlu_aiservices_pb.GetSynonymsResponse>;
    classifyIntents: grpc.handleUnaryCall<ondewo_nlu_aiservices_pb.ClassifyIntentsRequest, ondewo_nlu_aiservices_pb.ClassifyIntentsResponse>;
    extractEntitiesFuzzy: grpc.handleUnaryCall<ondewo_nlu_aiservices_pb.ExtractEntitiesFuzzyRequest, ondewo_nlu_aiservices_pb.ExtractEntitiesResponse>;
}

export interface IAiServicesClient {
    extractEntities(request: ondewo_nlu_aiservices_pb.ExtractEntitiesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.ExtractEntitiesResponse) => void): grpc.ClientUnaryCall;
    extractEntities(request: ondewo_nlu_aiservices_pb.ExtractEntitiesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.ExtractEntitiesResponse) => void): grpc.ClientUnaryCall;
    extractEntities(request: ondewo_nlu_aiservices_pb.ExtractEntitiesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.ExtractEntitiesResponse) => void): grpc.ClientUnaryCall;
    generateUserSays(request: ondewo_nlu_aiservices_pb.GenerateUserSaysRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.GenerateUserSaysResponse) => void): grpc.ClientUnaryCall;
    generateUserSays(request: ondewo_nlu_aiservices_pb.GenerateUserSaysRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.GenerateUserSaysResponse) => void): grpc.ClientUnaryCall;
    generateUserSays(request: ondewo_nlu_aiservices_pb.GenerateUserSaysRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.GenerateUserSaysResponse) => void): grpc.ClientUnaryCall;
    generateResponses(request: ondewo_nlu_aiservices_pb.GenerateResponsesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.GenerateResponsesResponse) => void): grpc.ClientUnaryCall;
    generateResponses(request: ondewo_nlu_aiservices_pb.GenerateResponsesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.GenerateResponsesResponse) => void): grpc.ClientUnaryCall;
    generateResponses(request: ondewo_nlu_aiservices_pb.GenerateResponsesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.GenerateResponsesResponse) => void): grpc.ClientUnaryCall;
    getAlternativeSentences(request: ondewo_nlu_aiservices_pb.GetAlternativeSentencesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.GetAlternativeSentencesResponse) => void): grpc.ClientUnaryCall;
    getAlternativeSentences(request: ondewo_nlu_aiservices_pb.GetAlternativeSentencesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.GetAlternativeSentencesResponse) => void): grpc.ClientUnaryCall;
    getAlternativeSentences(request: ondewo_nlu_aiservices_pb.GetAlternativeSentencesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.GetAlternativeSentencesResponse) => void): grpc.ClientUnaryCall;
    getAlternativeTrainingPhrases(request: ondewo_nlu_aiservices_pb.GetAlternativeTrainingPhrasesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.GetAlternativeTrainingPhrasesResponse) => void): grpc.ClientUnaryCall;
    getAlternativeTrainingPhrases(request: ondewo_nlu_aiservices_pb.GetAlternativeTrainingPhrasesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.GetAlternativeTrainingPhrasesResponse) => void): grpc.ClientUnaryCall;
    getAlternativeTrainingPhrases(request: ondewo_nlu_aiservices_pb.GetAlternativeTrainingPhrasesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.GetAlternativeTrainingPhrasesResponse) => void): grpc.ClientUnaryCall;
    getSynonyms(request: ondewo_nlu_aiservices_pb.GetSynonymsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.GetSynonymsResponse) => void): grpc.ClientUnaryCall;
    getSynonyms(request: ondewo_nlu_aiservices_pb.GetSynonymsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.GetSynonymsResponse) => void): grpc.ClientUnaryCall;
    getSynonyms(request: ondewo_nlu_aiservices_pb.GetSynonymsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.GetSynonymsResponse) => void): grpc.ClientUnaryCall;
    classifyIntents(request: ondewo_nlu_aiservices_pb.ClassifyIntentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.ClassifyIntentsResponse) => void): grpc.ClientUnaryCall;
    classifyIntents(request: ondewo_nlu_aiservices_pb.ClassifyIntentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.ClassifyIntentsResponse) => void): grpc.ClientUnaryCall;
    classifyIntents(request: ondewo_nlu_aiservices_pb.ClassifyIntentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.ClassifyIntentsResponse) => void): grpc.ClientUnaryCall;
    extractEntitiesFuzzy(request: ondewo_nlu_aiservices_pb.ExtractEntitiesFuzzyRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.ExtractEntitiesResponse) => void): grpc.ClientUnaryCall;
    extractEntitiesFuzzy(request: ondewo_nlu_aiservices_pb.ExtractEntitiesFuzzyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.ExtractEntitiesResponse) => void): grpc.ClientUnaryCall;
    extractEntitiesFuzzy(request: ondewo_nlu_aiservices_pb.ExtractEntitiesFuzzyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.ExtractEntitiesResponse) => void): grpc.ClientUnaryCall;
}

export class AiServicesClient extends grpc.Client implements IAiServicesClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public extractEntities(request: ondewo_nlu_aiservices_pb.ExtractEntitiesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.ExtractEntitiesResponse) => void): grpc.ClientUnaryCall;
    public extractEntities(request: ondewo_nlu_aiservices_pb.ExtractEntitiesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.ExtractEntitiesResponse) => void): grpc.ClientUnaryCall;
    public extractEntities(request: ondewo_nlu_aiservices_pb.ExtractEntitiesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.ExtractEntitiesResponse) => void): grpc.ClientUnaryCall;
    public generateUserSays(request: ondewo_nlu_aiservices_pb.GenerateUserSaysRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.GenerateUserSaysResponse) => void): grpc.ClientUnaryCall;
    public generateUserSays(request: ondewo_nlu_aiservices_pb.GenerateUserSaysRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.GenerateUserSaysResponse) => void): grpc.ClientUnaryCall;
    public generateUserSays(request: ondewo_nlu_aiservices_pb.GenerateUserSaysRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.GenerateUserSaysResponse) => void): grpc.ClientUnaryCall;
    public generateResponses(request: ondewo_nlu_aiservices_pb.GenerateResponsesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.GenerateResponsesResponse) => void): grpc.ClientUnaryCall;
    public generateResponses(request: ondewo_nlu_aiservices_pb.GenerateResponsesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.GenerateResponsesResponse) => void): grpc.ClientUnaryCall;
    public generateResponses(request: ondewo_nlu_aiservices_pb.GenerateResponsesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.GenerateResponsesResponse) => void): grpc.ClientUnaryCall;
    public getAlternativeSentences(request: ondewo_nlu_aiservices_pb.GetAlternativeSentencesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.GetAlternativeSentencesResponse) => void): grpc.ClientUnaryCall;
    public getAlternativeSentences(request: ondewo_nlu_aiservices_pb.GetAlternativeSentencesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.GetAlternativeSentencesResponse) => void): grpc.ClientUnaryCall;
    public getAlternativeSentences(request: ondewo_nlu_aiservices_pb.GetAlternativeSentencesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.GetAlternativeSentencesResponse) => void): grpc.ClientUnaryCall;
    public getAlternativeTrainingPhrases(request: ondewo_nlu_aiservices_pb.GetAlternativeTrainingPhrasesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.GetAlternativeTrainingPhrasesResponse) => void): grpc.ClientUnaryCall;
    public getAlternativeTrainingPhrases(request: ondewo_nlu_aiservices_pb.GetAlternativeTrainingPhrasesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.GetAlternativeTrainingPhrasesResponse) => void): grpc.ClientUnaryCall;
    public getAlternativeTrainingPhrases(request: ondewo_nlu_aiservices_pb.GetAlternativeTrainingPhrasesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.GetAlternativeTrainingPhrasesResponse) => void): grpc.ClientUnaryCall;
    public getSynonyms(request: ondewo_nlu_aiservices_pb.GetSynonymsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.GetSynonymsResponse) => void): grpc.ClientUnaryCall;
    public getSynonyms(request: ondewo_nlu_aiservices_pb.GetSynonymsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.GetSynonymsResponse) => void): grpc.ClientUnaryCall;
    public getSynonyms(request: ondewo_nlu_aiservices_pb.GetSynonymsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.GetSynonymsResponse) => void): grpc.ClientUnaryCall;
    public classifyIntents(request: ondewo_nlu_aiservices_pb.ClassifyIntentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.ClassifyIntentsResponse) => void): grpc.ClientUnaryCall;
    public classifyIntents(request: ondewo_nlu_aiservices_pb.ClassifyIntentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.ClassifyIntentsResponse) => void): grpc.ClientUnaryCall;
    public classifyIntents(request: ondewo_nlu_aiservices_pb.ClassifyIntentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.ClassifyIntentsResponse) => void): grpc.ClientUnaryCall;
    public extractEntitiesFuzzy(request: ondewo_nlu_aiservices_pb.ExtractEntitiesFuzzyRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.ExtractEntitiesResponse) => void): grpc.ClientUnaryCall;
    public extractEntitiesFuzzy(request: ondewo_nlu_aiservices_pb.ExtractEntitiesFuzzyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.ExtractEntitiesResponse) => void): grpc.ClientUnaryCall;
    public extractEntitiesFuzzy(request: ondewo_nlu_aiservices_pb.ExtractEntitiesFuzzyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_aiservices_pb.ExtractEntitiesResponse) => void): grpc.ClientUnaryCall;
}
