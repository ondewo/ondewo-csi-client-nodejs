// package: ondewo.nlu
// file: ondewo/nlu/utility.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ondewo_nlu_utility_pb from "../../ondewo/nlu/utility_pb";
import * as ondewo_nlu_intent_pb from "../../ondewo/nlu/intent_pb";
import * as ondewo_nlu_entity_type_pb from "../../ondewo/nlu/entity_type_pb";

interface IUtilitiesService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    validateRegex: IUtilitiesService_IValidateRegex;
    validateEmbeddedRegex: IUtilitiesService_IValidateEmbeddedRegex;
    cleanAllIntents: IUtilitiesService_ICleanAllIntents;
    cleanIntent: IUtilitiesService_ICleanIntent;
    cleanAllEntityTypes: IUtilitiesService_ICleanAllEntityTypes;
    cleanEntityType: IUtilitiesService_ICleanEntityType;
    addTrainingPhrases: IUtilitiesService_IAddTrainingPhrases;
    addTrainingPhrasesFromCSV: IUtilitiesService_IAddTrainingPhrasesFromCSV;
}

interface IUtilitiesService_IValidateRegex extends grpc.MethodDefinition<ondewo_nlu_utility_pb.ValidateRegexRequest, ondewo_nlu_utility_pb.ValidateRegexResponse> {
    path: "/ondewo.nlu.Utilities/ValidateRegex";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_utility_pb.ValidateRegexRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_utility_pb.ValidateRegexRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_utility_pb.ValidateRegexResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_utility_pb.ValidateRegexResponse>;
}
interface IUtilitiesService_IValidateEmbeddedRegex extends grpc.MethodDefinition<ondewo_nlu_utility_pb.ValidateEmbeddedRegexRequest, ondewo_nlu_utility_pb.ValidateEmbeddedRegexResponse> {
    path: "/ondewo.nlu.Utilities/ValidateEmbeddedRegex";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_utility_pb.ValidateEmbeddedRegexRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_utility_pb.ValidateEmbeddedRegexRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_utility_pb.ValidateEmbeddedRegexResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_utility_pb.ValidateEmbeddedRegexResponse>;
}
interface IUtilitiesService_ICleanAllIntents extends grpc.MethodDefinition<ondewo_nlu_utility_pb.CleanAllIntentsRequest, ondewo_nlu_utility_pb.CleanAllIntentsResponse> {
    path: "/ondewo.nlu.Utilities/CleanAllIntents";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_utility_pb.CleanAllIntentsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_utility_pb.CleanAllIntentsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_utility_pb.CleanAllIntentsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_utility_pb.CleanAllIntentsResponse>;
}
interface IUtilitiesService_ICleanIntent extends grpc.MethodDefinition<ondewo_nlu_utility_pb.CleanIntentRequest, ondewo_nlu_utility_pb.CleanIntentResponse> {
    path: "/ondewo.nlu.Utilities/CleanIntent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_utility_pb.CleanIntentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_utility_pb.CleanIntentRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_utility_pb.CleanIntentResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_utility_pb.CleanIntentResponse>;
}
interface IUtilitiesService_ICleanAllEntityTypes extends grpc.MethodDefinition<ondewo_nlu_utility_pb.CleanAllEntityTypesRequest, ondewo_nlu_utility_pb.CleanAllEntityTypesResponse> {
    path: "/ondewo.nlu.Utilities/CleanAllEntityTypes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_utility_pb.CleanAllEntityTypesRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_utility_pb.CleanAllEntityTypesRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_utility_pb.CleanAllEntityTypesResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_utility_pb.CleanAllEntityTypesResponse>;
}
interface IUtilitiesService_ICleanEntityType extends grpc.MethodDefinition<ondewo_nlu_utility_pb.CleanEntityTypeRequest, ondewo_nlu_utility_pb.CleanEntityTypeResponse> {
    path: "/ondewo.nlu.Utilities/CleanEntityType";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_utility_pb.CleanEntityTypeRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_utility_pb.CleanEntityTypeRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_utility_pb.CleanEntityTypeResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_utility_pb.CleanEntityTypeResponse>;
}
interface IUtilitiesService_IAddTrainingPhrases extends grpc.MethodDefinition<ondewo_nlu_utility_pb.AddTrainingPhrasesRequest, ondewo_nlu_utility_pb.AddTrainingPhrasesResponse> {
    path: "/ondewo.nlu.Utilities/AddTrainingPhrases";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_utility_pb.AddTrainingPhrasesRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_utility_pb.AddTrainingPhrasesRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_utility_pb.AddTrainingPhrasesResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_utility_pb.AddTrainingPhrasesResponse>;
}
interface IUtilitiesService_IAddTrainingPhrasesFromCSV extends grpc.MethodDefinition<ondewo_nlu_utility_pb.AddTrainingPhrasesFromCSVRequest, ondewo_nlu_utility_pb.AddTrainingPhrasesResponse> {
    path: "/ondewo.nlu.Utilities/AddTrainingPhrasesFromCSV";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_utility_pb.AddTrainingPhrasesFromCSVRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_utility_pb.AddTrainingPhrasesFromCSVRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_utility_pb.AddTrainingPhrasesResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_utility_pb.AddTrainingPhrasesResponse>;
}

export const UtilitiesService: IUtilitiesService;

export interface IUtilitiesServer {
    validateRegex: grpc.handleUnaryCall<ondewo_nlu_utility_pb.ValidateRegexRequest, ondewo_nlu_utility_pb.ValidateRegexResponse>;
    validateEmbeddedRegex: grpc.handleUnaryCall<ondewo_nlu_utility_pb.ValidateEmbeddedRegexRequest, ondewo_nlu_utility_pb.ValidateEmbeddedRegexResponse>;
    cleanAllIntents: grpc.handleUnaryCall<ondewo_nlu_utility_pb.CleanAllIntentsRequest, ondewo_nlu_utility_pb.CleanAllIntentsResponse>;
    cleanIntent: grpc.handleUnaryCall<ondewo_nlu_utility_pb.CleanIntentRequest, ondewo_nlu_utility_pb.CleanIntentResponse>;
    cleanAllEntityTypes: grpc.handleUnaryCall<ondewo_nlu_utility_pb.CleanAllEntityTypesRequest, ondewo_nlu_utility_pb.CleanAllEntityTypesResponse>;
    cleanEntityType: grpc.handleUnaryCall<ondewo_nlu_utility_pb.CleanEntityTypeRequest, ondewo_nlu_utility_pb.CleanEntityTypeResponse>;
    addTrainingPhrases: grpc.handleUnaryCall<ondewo_nlu_utility_pb.AddTrainingPhrasesRequest, ondewo_nlu_utility_pb.AddTrainingPhrasesResponse>;
    addTrainingPhrasesFromCSV: grpc.handleUnaryCall<ondewo_nlu_utility_pb.AddTrainingPhrasesFromCSVRequest, ondewo_nlu_utility_pb.AddTrainingPhrasesResponse>;
}

export interface IUtilitiesClient {
    validateRegex(request: ondewo_nlu_utility_pb.ValidateRegexRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.ValidateRegexResponse) => void): grpc.ClientUnaryCall;
    validateRegex(request: ondewo_nlu_utility_pb.ValidateRegexRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.ValidateRegexResponse) => void): grpc.ClientUnaryCall;
    validateRegex(request: ondewo_nlu_utility_pb.ValidateRegexRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.ValidateRegexResponse) => void): grpc.ClientUnaryCall;
    validateEmbeddedRegex(request: ondewo_nlu_utility_pb.ValidateEmbeddedRegexRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.ValidateEmbeddedRegexResponse) => void): grpc.ClientUnaryCall;
    validateEmbeddedRegex(request: ondewo_nlu_utility_pb.ValidateEmbeddedRegexRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.ValidateEmbeddedRegexResponse) => void): grpc.ClientUnaryCall;
    validateEmbeddedRegex(request: ondewo_nlu_utility_pb.ValidateEmbeddedRegexRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.ValidateEmbeddedRegexResponse) => void): grpc.ClientUnaryCall;
    cleanAllIntents(request: ondewo_nlu_utility_pb.CleanAllIntentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.CleanAllIntentsResponse) => void): grpc.ClientUnaryCall;
    cleanAllIntents(request: ondewo_nlu_utility_pb.CleanAllIntentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.CleanAllIntentsResponse) => void): grpc.ClientUnaryCall;
    cleanAllIntents(request: ondewo_nlu_utility_pb.CleanAllIntentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.CleanAllIntentsResponse) => void): grpc.ClientUnaryCall;
    cleanIntent(request: ondewo_nlu_utility_pb.CleanIntentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.CleanIntentResponse) => void): grpc.ClientUnaryCall;
    cleanIntent(request: ondewo_nlu_utility_pb.CleanIntentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.CleanIntentResponse) => void): grpc.ClientUnaryCall;
    cleanIntent(request: ondewo_nlu_utility_pb.CleanIntentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.CleanIntentResponse) => void): grpc.ClientUnaryCall;
    cleanAllEntityTypes(request: ondewo_nlu_utility_pb.CleanAllEntityTypesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.CleanAllEntityTypesResponse) => void): grpc.ClientUnaryCall;
    cleanAllEntityTypes(request: ondewo_nlu_utility_pb.CleanAllEntityTypesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.CleanAllEntityTypesResponse) => void): grpc.ClientUnaryCall;
    cleanAllEntityTypes(request: ondewo_nlu_utility_pb.CleanAllEntityTypesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.CleanAllEntityTypesResponse) => void): grpc.ClientUnaryCall;
    cleanEntityType(request: ondewo_nlu_utility_pb.CleanEntityTypeRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.CleanEntityTypeResponse) => void): grpc.ClientUnaryCall;
    cleanEntityType(request: ondewo_nlu_utility_pb.CleanEntityTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.CleanEntityTypeResponse) => void): grpc.ClientUnaryCall;
    cleanEntityType(request: ondewo_nlu_utility_pb.CleanEntityTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.CleanEntityTypeResponse) => void): grpc.ClientUnaryCall;
    addTrainingPhrases(request: ondewo_nlu_utility_pb.AddTrainingPhrasesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.AddTrainingPhrasesResponse) => void): grpc.ClientUnaryCall;
    addTrainingPhrases(request: ondewo_nlu_utility_pb.AddTrainingPhrasesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.AddTrainingPhrasesResponse) => void): grpc.ClientUnaryCall;
    addTrainingPhrases(request: ondewo_nlu_utility_pb.AddTrainingPhrasesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.AddTrainingPhrasesResponse) => void): grpc.ClientUnaryCall;
    addTrainingPhrasesFromCSV(request: ondewo_nlu_utility_pb.AddTrainingPhrasesFromCSVRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.AddTrainingPhrasesResponse) => void): grpc.ClientUnaryCall;
    addTrainingPhrasesFromCSV(request: ondewo_nlu_utility_pb.AddTrainingPhrasesFromCSVRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.AddTrainingPhrasesResponse) => void): grpc.ClientUnaryCall;
    addTrainingPhrasesFromCSV(request: ondewo_nlu_utility_pb.AddTrainingPhrasesFromCSVRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.AddTrainingPhrasesResponse) => void): grpc.ClientUnaryCall;
}

export class UtilitiesClient extends grpc.Client implements IUtilitiesClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public validateRegex(request: ondewo_nlu_utility_pb.ValidateRegexRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.ValidateRegexResponse) => void): grpc.ClientUnaryCall;
    public validateRegex(request: ondewo_nlu_utility_pb.ValidateRegexRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.ValidateRegexResponse) => void): grpc.ClientUnaryCall;
    public validateRegex(request: ondewo_nlu_utility_pb.ValidateRegexRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.ValidateRegexResponse) => void): grpc.ClientUnaryCall;
    public validateEmbeddedRegex(request: ondewo_nlu_utility_pb.ValidateEmbeddedRegexRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.ValidateEmbeddedRegexResponse) => void): grpc.ClientUnaryCall;
    public validateEmbeddedRegex(request: ondewo_nlu_utility_pb.ValidateEmbeddedRegexRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.ValidateEmbeddedRegexResponse) => void): grpc.ClientUnaryCall;
    public validateEmbeddedRegex(request: ondewo_nlu_utility_pb.ValidateEmbeddedRegexRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.ValidateEmbeddedRegexResponse) => void): grpc.ClientUnaryCall;
    public cleanAllIntents(request: ondewo_nlu_utility_pb.CleanAllIntentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.CleanAllIntentsResponse) => void): grpc.ClientUnaryCall;
    public cleanAllIntents(request: ondewo_nlu_utility_pb.CleanAllIntentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.CleanAllIntentsResponse) => void): grpc.ClientUnaryCall;
    public cleanAllIntents(request: ondewo_nlu_utility_pb.CleanAllIntentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.CleanAllIntentsResponse) => void): grpc.ClientUnaryCall;
    public cleanIntent(request: ondewo_nlu_utility_pb.CleanIntentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.CleanIntentResponse) => void): grpc.ClientUnaryCall;
    public cleanIntent(request: ondewo_nlu_utility_pb.CleanIntentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.CleanIntentResponse) => void): grpc.ClientUnaryCall;
    public cleanIntent(request: ondewo_nlu_utility_pb.CleanIntentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.CleanIntentResponse) => void): grpc.ClientUnaryCall;
    public cleanAllEntityTypes(request: ondewo_nlu_utility_pb.CleanAllEntityTypesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.CleanAllEntityTypesResponse) => void): grpc.ClientUnaryCall;
    public cleanAllEntityTypes(request: ondewo_nlu_utility_pb.CleanAllEntityTypesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.CleanAllEntityTypesResponse) => void): grpc.ClientUnaryCall;
    public cleanAllEntityTypes(request: ondewo_nlu_utility_pb.CleanAllEntityTypesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.CleanAllEntityTypesResponse) => void): grpc.ClientUnaryCall;
    public cleanEntityType(request: ondewo_nlu_utility_pb.CleanEntityTypeRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.CleanEntityTypeResponse) => void): grpc.ClientUnaryCall;
    public cleanEntityType(request: ondewo_nlu_utility_pb.CleanEntityTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.CleanEntityTypeResponse) => void): grpc.ClientUnaryCall;
    public cleanEntityType(request: ondewo_nlu_utility_pb.CleanEntityTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.CleanEntityTypeResponse) => void): grpc.ClientUnaryCall;
    public addTrainingPhrases(request: ondewo_nlu_utility_pb.AddTrainingPhrasesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.AddTrainingPhrasesResponse) => void): grpc.ClientUnaryCall;
    public addTrainingPhrases(request: ondewo_nlu_utility_pb.AddTrainingPhrasesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.AddTrainingPhrasesResponse) => void): grpc.ClientUnaryCall;
    public addTrainingPhrases(request: ondewo_nlu_utility_pb.AddTrainingPhrasesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.AddTrainingPhrasesResponse) => void): grpc.ClientUnaryCall;
    public addTrainingPhrasesFromCSV(request: ondewo_nlu_utility_pb.AddTrainingPhrasesFromCSVRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.AddTrainingPhrasesResponse) => void): grpc.ClientUnaryCall;
    public addTrainingPhrasesFromCSV(request: ondewo_nlu_utility_pb.AddTrainingPhrasesFromCSVRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.AddTrainingPhrasesResponse) => void): grpc.ClientUnaryCall;
    public addTrainingPhrasesFromCSV(request: ondewo_nlu_utility_pb.AddTrainingPhrasesFromCSVRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_utility_pb.AddTrainingPhrasesResponse) => void): grpc.ClientUnaryCall;
}
