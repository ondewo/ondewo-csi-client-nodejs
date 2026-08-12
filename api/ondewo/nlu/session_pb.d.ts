// package: ondewo.nlu
// file: ondewo/nlu/session.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_rpc_status_pb from "../../google/rpc/status_pb";
import * as google_type_latlng_pb from "../../google/type/latlng_pb";
import * as ondewo_nlu_ccai_project_pb from "../../ondewo/nlu/ccai_project_pb";
import * as ondewo_nlu_common_pb from "../../ondewo/nlu/common_pb";
import * as ondewo_nlu_context_pb from "../../ondewo/nlu/context_pb";
import * as ondewo_nlu_entity_type_pb from "../../ondewo/nlu/entity_type_pb";
import * as ondewo_nlu_intent_pb from "../../ondewo/nlu/intent_pb";
import * as ondewo_nlu_llm_evaluation_pb from "../../ondewo/nlu/llm_evaluation_pb";

export class DetectIntentRequest extends jspb.Message { 
    getSession(): string;
    setSession(value: string): DetectIntentRequest;

    hasQueryParams(): boolean;
    clearQueryParams(): void;
    getQueryParams(): QueryParameters | undefined;
    setQueryParams(value?: QueryParameters): DetectIntentRequest;

    hasQueryInput(): boolean;
    clearQueryInput(): void;
    getQueryInput(): QueryInput | undefined;
    setQueryInput(value?: QueryInput): DetectIntentRequest;
    getInputAudio(): Uint8Array | string;
    getInputAudio_asU8(): Uint8Array;
    getInputAudio_asB64(): string;
    setInputAudio(value: Uint8Array | string): DetectIntentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DetectIntentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DetectIntentRequest): DetectIntentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DetectIntentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DetectIntentRequest;
    static deserializeBinaryFromReader(message: DetectIntentRequest, reader: jspb.BinaryReader): DetectIntentRequest;
}

export namespace DetectIntentRequest {
    export type AsObject = {
        session: string,
        queryParams?: QueryParameters.AsObject,
        queryInput?: QueryInput.AsObject,
        inputAudio: Uint8Array | string,
    }
}

export class DetectIntentResponse extends jspb.Message { 
    getResponseId(): string;
    setResponseId(value: string): DetectIntentResponse;

    hasQueryResult(): boolean;
    clearQueryResult(): void;
    getQueryResult(): QueryResult | undefined;
    setQueryResult(value?: QueryResult): DetectIntentResponse;

    hasWebhookStatus(): boolean;
    clearWebhookStatus(): void;
    getWebhookStatus(): google_rpc_status_pb.Status | undefined;
    setWebhookStatus(value?: google_rpc_status_pb.Status): DetectIntentResponse;

    hasLlmTelemetryReport(): boolean;
    clearLlmTelemetryReport(): void;
    getLlmTelemetryReport(): LlmTelemetryReport | undefined;
    setLlmTelemetryReport(value?: LlmTelemetryReport): DetectIntentResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DetectIntentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DetectIntentResponse): DetectIntentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DetectIntentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DetectIntentResponse;
    static deserializeBinaryFromReader(message: DetectIntentResponse, reader: jspb.BinaryReader): DetectIntentResponse;
}

export namespace DetectIntentResponse {
    export type AsObject = {
        responseId: string,
        queryResult?: QueryResult.AsObject,
        webhookStatus?: google_rpc_status_pb.Status.AsObject,
        llmTelemetryReport?: LlmTelemetryReport.AsObject,
    }
}

export class QueryParameters extends jspb.Message { 
    getTimeZone(): string;
    setTimeZone(value: string): QueryParameters;

    hasGeoLocation(): boolean;
    clearGeoLocation(): void;
    getGeoLocation(): google_type_latlng_pb.LatLng | undefined;
    setGeoLocation(value?: google_type_latlng_pb.LatLng): QueryParameters;
    clearContextsList(): void;
    getContextsList(): Array<ondewo_nlu_context_pb.Context>;
    setContextsList(value: Array<ondewo_nlu_context_pb.Context>): QueryParameters;
    addContexts(value?: ondewo_nlu_context_pb.Context, index?: number): ondewo_nlu_context_pb.Context;
    getResetContexts(): boolean;
    setResetContexts(value: boolean): QueryParameters;

    hasPayload(): boolean;
    clearPayload(): void;
    getPayload(): google_protobuf_struct_pb.Struct | undefined;
    setPayload(value?: google_protobuf_struct_pb.Struct): QueryParameters;
    clearLabelsList(): void;
    getLabelsList(): Array<string>;
    setLabelsList(value: Array<string>): QueryParameters;
    addLabels(value: string, index?: number): string;
    clearPlatformsList(): void;
    getPlatformsList(): Array<ondewo_nlu_intent_pb.Intent.Message.Platform>;
    setPlatformsList(value: Array<ondewo_nlu_intent_pb.Intent.Message.Platform>): QueryParameters;
    addPlatforms(value: ondewo_nlu_intent_pb.Intent.Message.Platform, index?: number): ondewo_nlu_intent_pb.Intent.Message.Platform;
    getAccountId(): string;
    setAccountId(value: string): QueryParameters;
    getPropertyId(): string;
    setPropertyId(value: string): QueryParameters;
    getDatastreamId(): string;
    setDatastreamId(value: string): QueryParameters;
    getOriginId(): string;
    setOriginId(value: string): QueryParameters;
    getIdentifiedUserId(): string;
    setIdentifiedUserId(value: string): QueryParameters;
    clearTranscriptionsList(): void;
    getTranscriptionsList(): Array<S2tTranscription>;
    setTranscriptionsList(value: Array<S2tTranscription>): QueryParameters;
    addTranscriptions(value?: S2tTranscription, index?: number): S2tTranscription;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryParameters.AsObject;
    static toObject(includeInstance: boolean, msg: QueryParameters): QueryParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryParameters;
    static deserializeBinaryFromReader(message: QueryParameters, reader: jspb.BinaryReader): QueryParameters;
}

export namespace QueryParameters {
    export type AsObject = {
        timeZone: string,
        geoLocation?: google_type_latlng_pb.LatLng.AsObject,
        contextsList: Array<ondewo_nlu_context_pb.Context.AsObject>,
        resetContexts: boolean,
        payload?: google_protobuf_struct_pb.Struct.AsObject,
        labelsList: Array<string>,
        platformsList: Array<ondewo_nlu_intent_pb.Intent.Message.Platform>,
        accountId: string,
        propertyId: string,
        datastreamId: string,
        originId: string,
        identifiedUserId: string,
        transcriptionsList: Array<S2tTranscription.AsObject>,
    }
}

export class S2tTranscription extends jspb.Message { 
    getName(): string;
    setName(value: string): S2tTranscription;
    getText(): string;
    setText(value: string): S2tTranscription;
    getScore(): number;
    setScore(value: number): S2tTranscription;
    getLanguageCode(): string;
    setLanguageCode(value: string): S2tTranscription;
    getAudioResourceName(): string;
    setAudioResourceName(value: string): S2tTranscription;
    getPipelineId(): string;
    setPipelineId(value: string): S2tTranscription;
    getDurationInS(): number;
    setDurationInS(value: number): S2tTranscription;
    getTranscriptionType(): TranscriptionType;
    setTranscriptionType(value: TranscriptionType): S2tTranscription;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): S2tTranscription;

    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): S2tTranscription;
    getCreatedBy(): string;
    setCreatedBy(value: string): S2tTranscription;
    getModifiedBy(): string;
    setModifiedBy(value: string): S2tTranscription;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): S2tTranscription.AsObject;
    static toObject(includeInstance: boolean, msg: S2tTranscription): S2tTranscription.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: S2tTranscription, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): S2tTranscription;
    static deserializeBinaryFromReader(message: S2tTranscription, reader: jspb.BinaryReader): S2tTranscription;
}

export namespace S2tTranscription {
    export type AsObject = {
        name: string,
        text: string,
        score: number,
        languageCode: string,
        audioResourceName: string,
        pipelineId: string,
        durationInS: number,
        transcriptionType: TranscriptionType,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdBy: string,
        modifiedBy: string,
    }
}

export class QueryInput extends jspb.Message { 

    hasAudioConfig(): boolean;
    clearAudioConfig(): void;
    getAudioConfig(): InputAudioConfig | undefined;
    setAudioConfig(value?: InputAudioConfig): QueryInput;

    hasText(): boolean;
    clearText(): void;
    getText(): TextInput | undefined;
    setText(value?: TextInput): QueryInput;

    hasEvent(): boolean;
    clearEvent(): void;
    getEvent(): EventInput | undefined;
    setEvent(value?: EventInput): QueryInput;
    clearFileResourcesList(): void;
    getFileResourcesList(): Array<FileResource>;
    setFileResourcesList(value: Array<FileResource>): QueryInput;
    addFileResources(value?: FileResource, index?: number): FileResource;

    getInputCase(): QueryInput.InputCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryInput.AsObject;
    static toObject(includeInstance: boolean, msg: QueryInput): QueryInput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryInput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryInput;
    static deserializeBinaryFromReader(message: QueryInput, reader: jspb.BinaryReader): QueryInput;
}

export namespace QueryInput {
    export type AsObject = {
        audioConfig?: InputAudioConfig.AsObject,
        text?: TextInput.AsObject,
        event?: EventInput.AsObject,
        fileResourcesList: Array<FileResource.AsObject>,
    }

    export enum InputCase {
        INPUT_NOT_SET = 0,
        AUDIO_CONFIG = 1,
        TEXT = 2,
        EVENT = 3,
    }

}

export class LlmTokenUsage extends jspb.Message { 
    getTotalTokens(): number;
    setTotalTokens(value: number): LlmTokenUsage;
    getInputTokens(): number;
    setInputTokens(value: number): LlmTokenUsage;
    getOutputTokens(): number;
    setOutputTokens(value: number): LlmTokenUsage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmTokenUsage.AsObject;
    static toObject(includeInstance: boolean, msg: LlmTokenUsage): LlmTokenUsage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmTokenUsage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmTokenUsage;
    static deserializeBinaryFromReader(message: LlmTokenUsage, reader: jspb.BinaryReader): LlmTokenUsage;
}

export namespace LlmTokenUsage {
    export type AsObject = {
        totalTokens: number,
        inputTokens: number,
        outputTokens: number,
    }
}

export class LlmToolCallMetadata extends jspb.Message { 
    getToolCallId(): string;
    setToolCallId(value: string): LlmToolCallMetadata;
    getToolName(): string;
    setToolName(value: string): LlmToolCallMetadata;

    hasStartTime(): boolean;
    clearStartTime(): void;
    getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): LlmToolCallMetadata;

    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): LlmToolCallMetadata;
    getDurationInS(): number;
    setDurationInS(value: number): LlmToolCallMetadata;

    hasLlmTokenUsage(): boolean;
    clearLlmTokenUsage(): void;
    getLlmTokenUsage(): LlmTokenUsage | undefined;
    setLlmTokenUsage(value?: LlmTokenUsage): LlmToolCallMetadata;

    hasArguments(): boolean;
    clearArguments(): void;
    getArguments(): google_protobuf_struct_pb.Struct | undefined;
    setArguments(value?: google_protobuf_struct_pb.Struct): LlmToolCallMetadata;

    hasResult(): boolean;
    clearResult(): void;
    getResult(): google_protobuf_struct_pb.Struct | undefined;
    setResult(value?: google_protobuf_struct_pb.Struct): LlmToolCallMetadata;
    getErrorMessage(): string;
    setErrorMessage(value: string): LlmToolCallMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmToolCallMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: LlmToolCallMetadata): LlmToolCallMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmToolCallMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmToolCallMetadata;
    static deserializeBinaryFromReader(message: LlmToolCallMetadata, reader: jspb.BinaryReader): LlmToolCallMetadata;
}

export namespace LlmToolCallMetadata {
    export type AsObject = {
        toolCallId: string,
        toolName: string,
        startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        durationInS: number,
        llmTokenUsage?: LlmTokenUsage.AsObject,
        arguments?: google_protobuf_struct_pb.Struct.AsObject,
        result?: google_protobuf_struct_pb.Struct.AsObject,
        errorMessage: string,
    }
}

export class LlmThinkingMetadata extends jspb.Message { 

    hasLlmTokenUsage(): boolean;
    clearLlmTokenUsage(): void;
    getLlmTokenUsage(): LlmTokenUsage | undefined;
    setLlmTokenUsage(value?: LlmTokenUsage): LlmThinkingMetadata;

    hasStartTime(): boolean;
    clearStartTime(): void;
    getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): LlmThinkingMetadata;

    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): LlmThinkingMetadata;
    getDurationInS(): number;
    setDurationInS(value: number): LlmThinkingMetadata;
    getThinkingText(): string;
    setThinkingText(value: string): LlmThinkingMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmThinkingMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: LlmThinkingMetadata): LlmThinkingMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmThinkingMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmThinkingMetadata;
    static deserializeBinaryFromReader(message: LlmThinkingMetadata, reader: jspb.BinaryReader): LlmThinkingMetadata;
}

export namespace LlmThinkingMetadata {
    export type AsObject = {
        llmTokenUsage?: LlmTokenUsage.AsObject,
        startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        durationInS: number,
        thinkingText: string,
    }
}

export class LlmTelemetry extends jspb.Message { 
    getProvider(): string;
    setProvider(value: string): LlmTelemetry;
    getModelName(): string;
    setModelName(value: string): LlmTelemetry;
    getAgentName(): string;
    setAgentName(value: string): LlmTelemetry;

    hasLlmTokenUsage(): boolean;
    clearLlmTokenUsage(): void;
    getLlmTokenUsage(): LlmTokenUsage | undefined;
    setLlmTokenUsage(value?: LlmTokenUsage): LlmTelemetry;
    clearLlmToolCallMetadatasList(): void;
    getLlmToolCallMetadatasList(): Array<LlmToolCallMetadata>;
    setLlmToolCallMetadatasList(value: Array<LlmToolCallMetadata>): LlmTelemetry;
    addLlmToolCallMetadatas(value?: LlmToolCallMetadata, index?: number): LlmToolCallMetadata;
    getToolCallCount(): number;
    setToolCallCount(value: number): LlmTelemetry;

    hasLlmThinkingMetadata(): boolean;
    clearLlmThinkingMetadata(): void;
    getLlmThinkingMetadata(): LlmThinkingMetadata | undefined;
    setLlmThinkingMetadata(value?: LlmThinkingMetadata): LlmTelemetry;

    hasStartTime(): boolean;
    clearStartTime(): void;
    getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): LlmTelemetry;

    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): LlmTelemetry;
    getDurationInS(): number;
    setDurationInS(value: number): LlmTelemetry;
    getRunId(): string;
    setRunId(value: string): LlmTelemetry;
    getParentRunId(): string;
    setParentRunId(value: string): LlmTelemetry;
    getRunType(): string;
    setRunType(value: string): LlmTelemetry;
    getComponentName(): string;
    setComponentName(value: string): LlmTelemetry;
    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): LlmTelemetry;
    addTags(value: string, index?: number): string;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): google_protobuf_struct_pb.Struct | undefined;
    setMetadata(value?: google_protobuf_struct_pb.Struct): LlmTelemetry;

    hasInputs(): boolean;
    clearInputs(): void;
    getInputs(): google_protobuf_struct_pb.Struct | undefined;
    setInputs(value?: google_protobuf_struct_pb.Struct): LlmTelemetry;

    hasOutputs(): boolean;
    clearOutputs(): void;
    getOutputs(): google_protobuf_struct_pb.Struct | undefined;
    setOutputs(value?: google_protobuf_struct_pb.Struct): LlmTelemetry;
    getErrorClass(): string;
    setErrorClass(value: string): LlmTelemetry;
    getErrorMessage(): string;
    setErrorMessage(value: string): LlmTelemetry;
    getTraceback(): string;
    setTraceback(value: string): LlmTelemetry;
    getStreamingChunkCount(): number;
    setStreamingChunkCount(value: number): LlmTelemetry;
    getFirstTokenLatencySeconds(): number;
    setFirstTokenLatencySeconds(value: number): LlmTelemetry;
    getSystemFingerprint(): string;
    setSystemFingerprint(value: string): LlmTelemetry;
    getCached(): boolean;
    setCached(value: boolean): LlmTelemetry;
    getRetryCount(): number;
    setRetryCount(value: number): LlmTelemetry;
    getFallbackDepth(): number;
    setFallbackDepth(value: number): LlmTelemetry;
    getTemperature(): number;
    setTemperature(value: number): LlmTelemetry;
    getTopP(): number;
    setTopP(value: number): LlmTelemetry;
    getMaxTokens(): number;
    setMaxTokens(value: number): LlmTelemetry;
    getNGenerations(): number;
    setNGenerations(value: number): LlmTelemetry;
    clearFinishReasonsList(): void;
    getFinishReasonsList(): Array<string>;
    setFinishReasonsList(value: Array<string>): LlmTelemetry;
    addFinishReasons(value: string, index?: number): string;
    getCachedInputTokens(): number;
    setCachedInputTokens(value: number): LlmTelemetry;
    getCacheCreationInputTokens(): number;
    setCacheCreationInputTokens(value: number): LlmTelemetry;
    getLangsmithRunUrl(): string;
    setLangsmithRunUrl(value: string): LlmTelemetry;
    getTeamName(): string;
    setTeamName(value: string): LlmTelemetry;
    getTeamId(): string;
    setTeamId(value: string): LlmTelemetry;
    getAgentRole(): string;
    setAgentRole(value: string): LlmTelemetry;
    getSenderAgent(): string;
    setSenderAgent(value: string): LlmTelemetry;
    getRecipientAgent(): string;
    setRecipientAgent(value: string): LlmTelemetry;
    getTurnIndex(): number;
    setTurnIndex(value: number): LlmTelemetry;
    getReflectionIterations(): number;
    setReflectionIterations(value: number): LlmTelemetry;
    getTerminationReason(): string;
    setTerminationReason(value: string): LlmTelemetry;
    getEvaluatorRunsJoinKey(): string;
    setEvaluatorRunsJoinKey(value: string): LlmTelemetry;
    clearLlmEvaluationFeedbacksList(): void;
    getLlmEvaluationFeedbacksList(): Array<ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback>;
    setLlmEvaluationFeedbacksList(value: Array<ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback>): LlmTelemetry;
    addLlmEvaluationFeedbacks(value?: ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback, index?: number): ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback;
    getCcaiServiceName(): string;
    setCcaiServiceName(value: string): LlmTelemetry;
    getBaseUrl(): string;
    setBaseUrl(value: string): LlmTelemetry;

    hasDefaultHeaders(): boolean;
    clearDefaultHeaders(): void;
    getDefaultHeaders(): google_protobuf_struct_pb.Struct | undefined;
    setDefaultHeaders(value?: google_protobuf_struct_pb.Struct): LlmTelemetry;

    hasDefaultQuery(): boolean;
    clearDefaultQuery(): void;
    getDefaultQuery(): google_protobuf_struct_pb.Struct | undefined;
    setDefaultQuery(value?: google_protobuf_struct_pb.Struct): LlmTelemetry;

    hasFrequencyPenalty(): boolean;
    clearFrequencyPenalty(): void;
    getFrequencyPenalty(): number | undefined;
    setFrequencyPenalty(value: number): LlmTelemetry;

    hasOpenaiMetadata(): boolean;
    clearOpenaiMetadata(): void;
    getOpenaiMetadata(): google_protobuf_struct_pb.Struct | undefined;
    setOpenaiMetadata(value?: google_protobuf_struct_pb.Struct): LlmTelemetry;

    hasPresencePenalty(): boolean;
    clearPresencePenalty(): void;
    getPresencePenalty(): number | undefined;
    setPresencePenalty(value: number): LlmTelemetry;

    hasReasoningEffort(): boolean;
    clearReasoningEffort(): void;
    getReasoningEffort(): ReasoningEffort | undefined;
    setReasoningEffort(value: ReasoningEffort): LlmTelemetry;

    hasUser(): boolean;
    clearUser(): void;
    getUser(): string | undefined;
    setUser(value: string): LlmTelemetry;

    hasTimeout(): boolean;
    clearTimeout(): void;
    getTimeout(): number | undefined;
    setTimeout(value: number): LlmTelemetry;

    hasStrictResponseValidation(): boolean;
    clearStrictResponseValidation(): void;
    getStrictResponseValidation(): boolean | undefined;
    setStrictResponseValidation(value: boolean): LlmTelemetry;

    hasExtraHeaders(): boolean;
    clearExtraHeaders(): void;
    getExtraHeaders(): google_protobuf_struct_pb.Struct | undefined;
    setExtraHeaders(value?: google_protobuf_struct_pb.Struct): LlmTelemetry;

    hasExtraQuery(): boolean;
    clearExtraQuery(): void;
    getExtraQuery(): google_protobuf_struct_pb.Struct | undefined;
    setExtraQuery(value?: google_protobuf_struct_pb.Struct): LlmTelemetry;

    hasExtraBody(): boolean;
    clearExtraBody(): void;
    getExtraBody(): google_protobuf_struct_pb.Struct | undefined;
    setExtraBody(value?: google_protobuf_struct_pb.Struct): LlmTelemetry;
    getCcaiServiceProvider(): ondewo_nlu_ccai_project_pb.CcaiServiceProvider;
    setCcaiServiceProvider(value: ondewo_nlu_ccai_project_pb.CcaiServiceProvider): LlmTelemetry;

    hasLlmSafetyAssessment(): boolean;
    clearLlmSafetyAssessment(): void;
    getLlmSafetyAssessment(): LlmSafetyAssessment | undefined;
    setLlmSafetyAssessment(value?: LlmSafetyAssessment): LlmTelemetry;

    hasLlmRetrievalMetadata(): boolean;
    clearLlmRetrievalMetadata(): void;
    getLlmRetrievalMetadata(): LlmRetrievalMetadata | undefined;
    setLlmRetrievalMetadata(value?: LlmRetrievalMetadata): LlmTelemetry;
    getLlmCallId(): string;
    setLlmCallId(value: string): LlmTelemetry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmTelemetry.AsObject;
    static toObject(includeInstance: boolean, msg: LlmTelemetry): LlmTelemetry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmTelemetry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmTelemetry;
    static deserializeBinaryFromReader(message: LlmTelemetry, reader: jspb.BinaryReader): LlmTelemetry;
}

export namespace LlmTelemetry {
    export type AsObject = {
        provider: string,
        modelName: string,
        agentName: string,
        llmTokenUsage?: LlmTokenUsage.AsObject,
        llmToolCallMetadatasList: Array<LlmToolCallMetadata.AsObject>,
        toolCallCount: number,
        llmThinkingMetadata?: LlmThinkingMetadata.AsObject,
        startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        durationInS: number,
        runId: string,
        parentRunId: string,
        runType: string,
        componentName: string,
        tagsList: Array<string>,
        metadata?: google_protobuf_struct_pb.Struct.AsObject,
        inputs?: google_protobuf_struct_pb.Struct.AsObject,
        outputs?: google_protobuf_struct_pb.Struct.AsObject,
        errorClass: string,
        errorMessage: string,
        traceback: string,
        streamingChunkCount: number,
        firstTokenLatencySeconds: number,
        systemFingerprint: string,
        cached: boolean,
        retryCount: number,
        fallbackDepth: number,
        temperature: number,
        topP: number,
        maxTokens: number,
        nGenerations: number,
        finishReasonsList: Array<string>,
        cachedInputTokens: number,
        cacheCreationInputTokens: number,
        langsmithRunUrl: string,
        teamName: string,
        teamId: string,
        agentRole: string,
        senderAgent: string,
        recipientAgent: string,
        turnIndex: number,
        reflectionIterations: number,
        terminationReason: string,
        evaluatorRunsJoinKey: string,
        llmEvaluationFeedbacksList: Array<ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback.AsObject>,
        ccaiServiceName: string,
        baseUrl: string,
        defaultHeaders?: google_protobuf_struct_pb.Struct.AsObject,
        defaultQuery?: google_protobuf_struct_pb.Struct.AsObject,
        frequencyPenalty?: number,
        openaiMetadata?: google_protobuf_struct_pb.Struct.AsObject,
        presencePenalty?: number,
        reasoningEffort?: ReasoningEffort,
        user?: string,
        timeout?: number,
        strictResponseValidation?: boolean,
        extraHeaders?: google_protobuf_struct_pb.Struct.AsObject,
        extraQuery?: google_protobuf_struct_pb.Struct.AsObject,
        extraBody?: google_protobuf_struct_pb.Struct.AsObject,
        ccaiServiceProvider: ondewo_nlu_ccai_project_pb.CcaiServiceProvider,
        llmSafetyAssessment?: LlmSafetyAssessment.AsObject,
        llmRetrievalMetadata?: LlmRetrievalMetadata.AsObject,
        llmCallId: string,
    }
}

export class LlmSafetyFinding extends jspb.Message { 
    getCategory(): string;
    setCategory(value: string): LlmSafetyFinding;
    getSeverity(): string;
    setSeverity(value: string): LlmSafetyFinding;
    getMatchedPattern(): string;
    setMatchedPattern(value: string): LlmSafetyFinding;
    getLocation(): LlmSafetyLocation;
    setLocation(value: LlmSafetyLocation): LlmSafetyFinding;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmSafetyFinding.AsObject;
    static toObject(includeInstance: boolean, msg: LlmSafetyFinding): LlmSafetyFinding.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmSafetyFinding, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmSafetyFinding;
    static deserializeBinaryFromReader(message: LlmSafetyFinding, reader: jspb.BinaryReader): LlmSafetyFinding;
}

export namespace LlmSafetyFinding {
    export type AsObject = {
        category: string,
        severity: string,
        matchedPattern: string,
        location: LlmSafetyLocation,
    }
}

export class LlmSafetyAssessment extends jspb.Message { 
    clearFlaggedCategoriesList(): void;
    getFlaggedCategoriesList(): Array<string>;
    setFlaggedCategoriesList(value: Array<string>): LlmSafetyAssessment;
    addFlaggedCategories(value: string, index?: number): string;
    getHasPii(): boolean;
    setHasPii(value: boolean): LlmSafetyAssessment;
    getHasInjectionAttempt(): boolean;
    setHasInjectionAttempt(value: boolean): LlmSafetyAssessment;
    getHasJailbreakAttempt(): boolean;
    setHasJailbreakAttempt(value: boolean): LlmSafetyAssessment;
    getSafetyScore(): number;
    setSafetyScore(value: number): LlmSafetyAssessment;
    clearFindingsList(): void;
    getFindingsList(): Array<LlmSafetyFinding>;
    setFindingsList(value: Array<LlmSafetyFinding>): LlmSafetyAssessment;
    addFindings(value?: LlmSafetyFinding, index?: number): LlmSafetyFinding;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmSafetyAssessment.AsObject;
    static toObject(includeInstance: boolean, msg: LlmSafetyAssessment): LlmSafetyAssessment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmSafetyAssessment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmSafetyAssessment;
    static deserializeBinaryFromReader(message: LlmSafetyAssessment, reader: jspb.BinaryReader): LlmSafetyAssessment;
}

export namespace LlmSafetyAssessment {
    export type AsObject = {
        flaggedCategoriesList: Array<string>,
        hasPii: boolean,
        hasInjectionAttempt: boolean,
        hasJailbreakAttempt: boolean,
        safetyScore: number,
        findingsList: Array<LlmSafetyFinding.AsObject>,
    }
}

export class LlmRetrievedChunk extends jspb.Message { 
    getDocumentId(): string;
    setDocumentId(value: string): LlmRetrievedChunk;
    getChunkId(): string;
    setChunkId(value: string): LlmRetrievedChunk;
    getScore(): number;
    setScore(value: number): LlmRetrievedChunk;
    getText(): string;
    setText(value: string): LlmRetrievedChunk;
    getSourceUri(): string;
    setSourceUri(value: string): LlmRetrievedChunk;
    getRank(): number;
    setRank(value: number): LlmRetrievedChunk;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmRetrievedChunk.AsObject;
    static toObject(includeInstance: boolean, msg: LlmRetrievedChunk): LlmRetrievedChunk.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmRetrievedChunk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmRetrievedChunk;
    static deserializeBinaryFromReader(message: LlmRetrievedChunk, reader: jspb.BinaryReader): LlmRetrievedChunk;
}

export namespace LlmRetrievedChunk {
    export type AsObject = {
        documentId: string,
        chunkId: string,
        score: number,
        text: string,
        sourceUri: string,
        rank: number,
    }
}

export class LlmRetrievalMetadata extends jspb.Message { 
    clearChunksList(): void;
    getChunksList(): Array<LlmRetrievedChunk>;
    setChunksList(value: Array<LlmRetrievedChunk>): LlmRetrievalMetadata;
    addChunks(value?: LlmRetrievedChunk, index?: number): LlmRetrievedChunk;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmRetrievalMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: LlmRetrievalMetadata): LlmRetrievalMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmRetrievalMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmRetrievalMetadata;
    static deserializeBinaryFromReader(message: LlmRetrievalMetadata, reader: jspb.BinaryReader): LlmRetrievalMetadata;
}

export namespace LlmRetrievalMetadata {
    export type AsObject = {
        chunksList: Array<LlmRetrievedChunk.AsObject>,
    }
}

export class LlmLatencyStats extends jspb.Message { 
    getCallCount(): number;
    setCallCount(value: number): LlmLatencyStats;
    getMeanDurationSeconds(): number;
    setMeanDurationSeconds(value: number): LlmLatencyStats;
    getP50DurationSeconds(): number;
    setP50DurationSeconds(value: number): LlmLatencyStats;
    getP95DurationSeconds(): number;
    setP95DurationSeconds(value: number): LlmLatencyStats;
    getP99DurationSeconds(): number;
    setP99DurationSeconds(value: number): LlmLatencyStats;
    getMaxDurationSeconds(): number;
    setMaxDurationSeconds(value: number): LlmLatencyStats;
    getMeanFirstTokenLatencySeconds(): number;
    setMeanFirstTokenLatencySeconds(value: number): LlmLatencyStats;
    getP95FirstTokenLatencySeconds(): number;
    setP95FirstTokenLatencySeconds(value: number): LlmLatencyStats;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmLatencyStats.AsObject;
    static toObject(includeInstance: boolean, msg: LlmLatencyStats): LlmLatencyStats.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmLatencyStats, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmLatencyStats;
    static deserializeBinaryFromReader(message: LlmLatencyStats, reader: jspb.BinaryReader): LlmLatencyStats;
}

export namespace LlmLatencyStats {
    export type AsObject = {
        callCount: number,
        meanDurationSeconds: number,
        p50DurationSeconds: number,
        p95DurationSeconds: number,
        p99DurationSeconds: number,
        maxDurationSeconds: number,
        meanFirstTokenLatencySeconds: number,
        p95FirstTokenLatencySeconds: number,
    }
}

export class LlmCacheStats extends jspb.Message { 
    getCachedInputTokens(): number;
    setCachedInputTokens(value: number): LlmCacheStats;
    getCacheCreationInputTokens(): number;
    setCacheCreationInputTokens(value: number): LlmCacheStats;
    getUncachedInputTokens(): number;
    setUncachedInputTokens(value: number): LlmCacheStats;
    getCacheHitRate(): number;
    setCacheHitRate(value: number): LlmCacheStats;
    getTokenSavings(): number;
    setTokenSavings(value: number): LlmCacheStats;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmCacheStats.AsObject;
    static toObject(includeInstance: boolean, msg: LlmCacheStats): LlmCacheStats.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmCacheStats, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmCacheStats;
    static deserializeBinaryFromReader(message: LlmCacheStats, reader: jspb.BinaryReader): LlmCacheStats;
}

export namespace LlmCacheStats {
    export type AsObject = {
        cachedInputTokens: number,
        cacheCreationInputTokens: number,
        uncachedInputTokens: number,
        cacheHitRate: number,
        tokenSavings: number,
    }
}

export class LlmModelUsage extends jspb.Message { 
    getModelName(): string;
    setModelName(value: string): LlmModelUsage;
    getProvider(): string;
    setProvider(value: string): LlmModelUsage;
    getCallCount(): number;
    setCallCount(value: number): LlmModelUsage;

    hasLlmTokenUsage(): boolean;
    clearLlmTokenUsage(): void;
    getLlmTokenUsage(): LlmTokenUsage | undefined;
    setLlmTokenUsage(value?: LlmTokenUsage): LlmModelUsage;
    getToolCallCount(): number;
    setToolCallCount(value: number): LlmModelUsage;
    getErrorCount(): number;
    setErrorCount(value: number): LlmModelUsage;
    getDurationSecondsTotal(): number;
    setDurationSecondsTotal(value: number): LlmModelUsage;

    hasCacheStats(): boolean;
    clearCacheStats(): void;
    getCacheStats(): LlmCacheStats | undefined;
    setCacheStats(value?: LlmCacheStats): LlmModelUsage;
    getCcaiServiceName(): string;
    setCcaiServiceName(value: string): LlmModelUsage;
    getCcaiServiceProvider(): ondewo_nlu_ccai_project_pb.CcaiServiceProvider;
    setCcaiServiceProvider(value: ondewo_nlu_ccai_project_pb.CcaiServiceProvider): LlmModelUsage;
    getBaseUrl(): string;
    setBaseUrl(value: string): LlmModelUsage;
    getThinkingTokensTotal(): number;
    setThinkingTokensTotal(value: number): LlmModelUsage;
    getThinkingDurationSecondsTotal(): number;
    setThinkingDurationSecondsTotal(value: number): LlmModelUsage;
    getToolCallTokensTotal(): number;
    setToolCallTokensTotal(value: number): LlmModelUsage;
    getToolCallDurationSecondsTotal(): number;
    setToolCallDurationSecondsTotal(value: number): LlmModelUsage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmModelUsage.AsObject;
    static toObject(includeInstance: boolean, msg: LlmModelUsage): LlmModelUsage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmModelUsage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmModelUsage;
    static deserializeBinaryFromReader(message: LlmModelUsage, reader: jspb.BinaryReader): LlmModelUsage;
}

export namespace LlmModelUsage {
    export type AsObject = {
        modelName: string,
        provider: string,
        callCount: number,
        llmTokenUsage?: LlmTokenUsage.AsObject,
        toolCallCount: number,
        errorCount: number,
        durationSecondsTotal: number,
        cacheStats?: LlmCacheStats.AsObject,
        ccaiServiceName: string,
        ccaiServiceProvider: ondewo_nlu_ccai_project_pb.CcaiServiceProvider,
        baseUrl: string,
        thinkingTokensTotal: number,
        thinkingDurationSecondsTotal: number,
        toolCallTokensTotal: number,
        toolCallDurationSecondsTotal: number,
    }
}

export class LlmProviderUsage extends jspb.Message { 
    getProvider(): string;
    setProvider(value: string): LlmProviderUsage;
    getCallCount(): number;
    setCallCount(value: number): LlmProviderUsage;

    hasLlmTokenUsage(): boolean;
    clearLlmTokenUsage(): void;
    getLlmTokenUsage(): LlmTokenUsage | undefined;
    setLlmTokenUsage(value?: LlmTokenUsage): LlmProviderUsage;
    getErrorCount(): number;
    setErrorCount(value: number): LlmProviderUsage;
    getDurationSecondsTotal(): number;
    setDurationSecondsTotal(value: number): LlmProviderUsage;
    clearModelNamesList(): void;
    getModelNamesList(): Array<string>;
    setModelNamesList(value: Array<string>): LlmProviderUsage;
    addModelNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmProviderUsage.AsObject;
    static toObject(includeInstance: boolean, msg: LlmProviderUsage): LlmProviderUsage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmProviderUsage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmProviderUsage;
    static deserializeBinaryFromReader(message: LlmProviderUsage, reader: jspb.BinaryReader): LlmProviderUsage;
}

export namespace LlmProviderUsage {
    export type AsObject = {
        provider: string,
        callCount: number,
        llmTokenUsage?: LlmTokenUsage.AsObject,
        errorCount: number,
        durationSecondsTotal: number,
        modelNamesList: Array<string>,
    }
}

export class LlmCcaiServiceUsage extends jspb.Message { 
    getCcaiServiceProvider(): ondewo_nlu_ccai_project_pb.CcaiServiceProvider;
    setCcaiServiceProvider(value: ondewo_nlu_ccai_project_pb.CcaiServiceProvider): LlmCcaiServiceUsage;
    getCcaiServiceName(): string;
    setCcaiServiceName(value: string): LlmCcaiServiceUsage;
    getCallCount(): number;
    setCallCount(value: number): LlmCcaiServiceUsage;

    hasLlmTokenUsage(): boolean;
    clearLlmTokenUsage(): void;
    getLlmTokenUsage(): LlmTokenUsage | undefined;
    setLlmTokenUsage(value?: LlmTokenUsage): LlmCcaiServiceUsage;
    getBaseUrl(): string;
    setBaseUrl(value: string): LlmCcaiServiceUsage;
    clearModelNamesList(): void;
    getModelNamesList(): Array<string>;
    setModelNamesList(value: Array<string>): LlmCcaiServiceUsage;
    addModelNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmCcaiServiceUsage.AsObject;
    static toObject(includeInstance: boolean, msg: LlmCcaiServiceUsage): LlmCcaiServiceUsage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmCcaiServiceUsage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmCcaiServiceUsage;
    static deserializeBinaryFromReader(message: LlmCcaiServiceUsage, reader: jspb.BinaryReader): LlmCcaiServiceUsage;
}

export namespace LlmCcaiServiceUsage {
    export type AsObject = {
        ccaiServiceProvider: ondewo_nlu_ccai_project_pb.CcaiServiceProvider,
        ccaiServiceName: string,
        callCount: number,
        llmTokenUsage?: LlmTokenUsage.AsObject,
        baseUrl: string,
        modelNamesList: Array<string>,
    }
}

export class LlmAgentUsage extends jspb.Message { 
    getAgentName(): string;
    setAgentName(value: string): LlmAgentUsage;
    getAgentRole(): string;
    setAgentRole(value: string): LlmAgentUsage;
    getTeamName(): string;
    setTeamName(value: string): LlmAgentUsage;
    getCallCount(): number;
    setCallCount(value: number): LlmAgentUsage;

    hasLlmTokenUsage(): boolean;
    clearLlmTokenUsage(): void;
    getLlmTokenUsage(): LlmTokenUsage | undefined;
    setLlmTokenUsage(value?: LlmTokenUsage): LlmAgentUsage;
    getToolCallCount(): number;
    setToolCallCount(value: number): LlmAgentUsage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmAgentUsage.AsObject;
    static toObject(includeInstance: boolean, msg: LlmAgentUsage): LlmAgentUsage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmAgentUsage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmAgentUsage;
    static deserializeBinaryFromReader(message: LlmAgentUsage, reader: jspb.BinaryReader): LlmAgentUsage;
}

export namespace LlmAgentUsage {
    export type AsObject = {
        agentName: string,
        agentRole: string,
        teamName: string,
        callCount: number,
        llmTokenUsage?: LlmTokenUsage.AsObject,
        toolCallCount: number,
    }
}

export class LlmToolUsage extends jspb.Message { 
    getToolName(): string;
    setToolName(value: string): LlmToolUsage;
    getCallCount(): number;
    setCallCount(value: number): LlmToolUsage;
    getErrorCount(): number;
    setErrorCount(value: number): LlmToolUsage;
    getErrorRate(): number;
    setErrorRate(value: number): LlmToolUsage;
    getDurationSecondsTotal(): number;
    setDurationSecondsTotal(value: number): LlmToolUsage;
    getMeanDurationSeconds(): number;
    setMeanDurationSeconds(value: number): LlmToolUsage;

    hasLlmTokenUsage(): boolean;
    clearLlmTokenUsage(): void;
    getLlmTokenUsage(): LlmTokenUsage | undefined;
    setLlmTokenUsage(value?: LlmTokenUsage): LlmToolUsage;

    hasArguments(): boolean;
    clearArguments(): void;
    getArguments(): google_protobuf_struct_pb.Struct | undefined;
    setArguments(value?: google_protobuf_struct_pb.Struct): LlmToolUsage;
    getLlmCallId(): string;
    setLlmCallId(value: string): LlmToolUsage;
    getToolCallId(): string;
    setToolCallId(value: string): LlmToolUsage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmToolUsage.AsObject;
    static toObject(includeInstance: boolean, msg: LlmToolUsage): LlmToolUsage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmToolUsage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmToolUsage;
    static deserializeBinaryFromReader(message: LlmToolUsage, reader: jspb.BinaryReader): LlmToolUsage;
}

export namespace LlmToolUsage {
    export type AsObject = {
        toolName: string,
        callCount: number,
        errorCount: number,
        errorRate: number,
        durationSecondsTotal: number,
        meanDurationSeconds: number,
        llmTokenUsage?: LlmTokenUsage.AsObject,
        arguments?: google_protobuf_struct_pb.Struct.AsObject,
        llmCallId: string,
        toolCallId: string,
    }
}

export class LlmErrorStat extends jspb.Message { 
    getErrorClass(): string;
    setErrorClass(value: string): LlmErrorStat;
    getCount(): number;
    setCount(value: number): LlmErrorStat;
    getRate(): number;
    setRate(value: number): LlmErrorStat;
    getSampleMessage(): string;
    setSampleMessage(value: string): LlmErrorStat;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmErrorStat.AsObject;
    static toObject(includeInstance: boolean, msg: LlmErrorStat): LlmErrorStat.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmErrorStat, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmErrorStat;
    static deserializeBinaryFromReader(message: LlmErrorStat, reader: jspb.BinaryReader): LlmErrorStat;
}

export namespace LlmErrorStat {
    export type AsObject = {
        errorClass: string,
        count: number,
        rate: number,
        sampleMessage: string,
    }
}

export class LlmErrorStats extends jspb.Message { 
    getTotalErrorCount(): number;
    setTotalErrorCount(value: number): LlmErrorStats;
    getOverallErrorRate(): number;
    setOverallErrorRate(value: number): LlmErrorStats;
    clearErrorsByClassList(): void;
    getErrorsByClassList(): Array<LlmErrorStat>;
    setErrorsByClassList(value: Array<LlmErrorStat>): LlmErrorStats;
    addErrorsByClass(value?: LlmErrorStat, index?: number): LlmErrorStat;
    getRetryCountTotal(): number;
    setRetryCountTotal(value: number): LlmErrorStats;
    getMaxFallbackDepth(): number;
    setMaxFallbackDepth(value: number): LlmErrorStats;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmErrorStats.AsObject;
    static toObject(includeInstance: boolean, msg: LlmErrorStats): LlmErrorStats.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmErrorStats, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmErrorStats;
    static deserializeBinaryFromReader(message: LlmErrorStats, reader: jspb.BinaryReader): LlmErrorStats;
}

export namespace LlmErrorStats {
    export type AsObject = {
        totalErrorCount: number,
        overallErrorRate: number,
        errorsByClassList: Array<LlmErrorStat.AsObject>,
        retryCountTotal: number,
        maxFallbackDepth: number,
    }
}

export class LlmFinishReasonStat extends jspb.Message { 
    getFinishReason(): string;
    setFinishReason(value: string): LlmFinishReasonStat;
    getCount(): number;
    setCount(value: number): LlmFinishReasonStat;
    getRate(): number;
    setRate(value: number): LlmFinishReasonStat;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmFinishReasonStat.AsObject;
    static toObject(includeInstance: boolean, msg: LlmFinishReasonStat): LlmFinishReasonStat.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmFinishReasonStat, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmFinishReasonStat;
    static deserializeBinaryFromReader(message: LlmFinishReasonStat, reader: jspb.BinaryReader): LlmFinishReasonStat;
}

export namespace LlmFinishReasonStat {
    export type AsObject = {
        finishReason: string,
        count: number,
        rate: number,
    }
}

export class LlmReasoningEffortStat extends jspb.Message { 
    getReasoningEffort(): ReasoningEffort;
    setReasoningEffort(value: ReasoningEffort): LlmReasoningEffortStat;
    getCount(): number;
    setCount(value: number): LlmReasoningEffortStat;
    getRate(): number;
    setRate(value: number): LlmReasoningEffortStat;

    hasLlmTokenUsage(): boolean;
    clearLlmTokenUsage(): void;
    getLlmTokenUsage(): LlmTokenUsage | undefined;
    setLlmTokenUsage(value?: LlmTokenUsage): LlmReasoningEffortStat;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmReasoningEffortStat.AsObject;
    static toObject(includeInstance: boolean, msg: LlmReasoningEffortStat): LlmReasoningEffortStat.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmReasoningEffortStat, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmReasoningEffortStat;
    static deserializeBinaryFromReader(message: LlmReasoningEffortStat, reader: jspb.BinaryReader): LlmReasoningEffortStat;
}

export namespace LlmReasoningEffortStat {
    export type AsObject = {
        reasoningEffort: ReasoningEffort,
        count: number,
        rate: number,
        llmTokenUsage?: LlmTokenUsage.AsObject,
    }
}

export class LlmTelemetryReport extends jspb.Message { 

    hasLlmTokenUsage(): boolean;
    clearLlmTokenUsage(): void;
    getLlmTokenUsage(): LlmTokenUsage | undefined;
    setLlmTokenUsage(value?: LlmTokenUsage): LlmTelemetryReport;
    getToolCallCountTotal(): number;
    setToolCallCountTotal(value: number): LlmTelemetryReport;
    getLlmCallCount(): number;
    setLlmCallCount(value: number): LlmTelemetryReport;
    clearLlmTelemetriesList(): void;
    getLlmTelemetriesList(): Array<LlmTelemetry>;
    setLlmTelemetriesList(value: Array<LlmTelemetry>): LlmTelemetryReport;
    addLlmTelemetries(value?: LlmTelemetry, index?: number): LlmTelemetry;
    getDurationSecondsTotal(): number;
    setDurationSecondsTotal(value: number): LlmTelemetryReport;
    clearModelsUsedList(): void;
    getModelsUsedList(): Array<LlmModelUsage>;
    setModelsUsedList(value: Array<LlmModelUsage>): LlmTelemetryReport;
    addModelsUsed(value?: LlmModelUsage, index?: number): LlmModelUsage;
    clearProvidersUsedList(): void;
    getProvidersUsedList(): Array<LlmProviderUsage>;
    setProvidersUsedList(value: Array<LlmProviderUsage>): LlmTelemetryReport;
    addProvidersUsed(value?: LlmProviderUsage, index?: number): LlmProviderUsage;
    clearCcaiServicesUsedList(): void;
    getCcaiServicesUsedList(): Array<LlmCcaiServiceUsage>;
    setCcaiServicesUsedList(value: Array<LlmCcaiServiceUsage>): LlmTelemetryReport;
    addCcaiServicesUsed(value?: LlmCcaiServiceUsage, index?: number): LlmCcaiServiceUsage;
    clearAgentsUsedList(): void;
    getAgentsUsedList(): Array<LlmAgentUsage>;
    setAgentsUsedList(value: Array<LlmAgentUsage>): LlmTelemetryReport;
    addAgentsUsed(value?: LlmAgentUsage, index?: number): LlmAgentUsage;
    clearToolsUsedList(): void;
    getToolsUsedList(): Array<LlmToolUsage>;
    setToolsUsedList(value: Array<LlmToolUsage>): LlmTelemetryReport;
    addToolsUsed(value?: LlmToolUsage, index?: number): LlmToolUsage;

    hasLatencyStats(): boolean;
    clearLatencyStats(): void;
    getLatencyStats(): LlmLatencyStats | undefined;
    setLatencyStats(value?: LlmLatencyStats): LlmTelemetryReport;

    hasCacheStats(): boolean;
    clearCacheStats(): void;
    getCacheStats(): LlmCacheStats | undefined;
    setCacheStats(value?: LlmCacheStats): LlmTelemetryReport;

    hasErrorStats(): boolean;
    clearErrorStats(): void;
    getErrorStats(): LlmErrorStats | undefined;
    setErrorStats(value?: LlmErrorStats): LlmTelemetryReport;
    clearFinishReasonDistributionList(): void;
    getFinishReasonDistributionList(): Array<LlmFinishReasonStat>;
    setFinishReasonDistributionList(value: Array<LlmFinishReasonStat>): LlmTelemetryReport;
    addFinishReasonDistribution(value?: LlmFinishReasonStat, index?: number): LlmFinishReasonStat;
    clearReasoningEffortDistributionList(): void;
    getReasoningEffortDistributionList(): Array<LlmReasoningEffortStat>;
    setReasoningEffortDistributionList(value: Array<LlmReasoningEffortStat>): LlmTelemetryReport;
    addReasoningEffortDistribution(value?: LlmReasoningEffortStat, index?: number): LlmReasoningEffortStat;
    getThinkingTokensTotal(): number;
    setThinkingTokensTotal(value: number): LlmTelemetryReport;
    getThinkingDurationSecondsTotal(): number;
    setThinkingDurationSecondsTotal(value: number): LlmTelemetryReport;
    getToolCallTokensTotal(): number;
    setToolCallTokensTotal(value: number): LlmTelemetryReport;
    getToolCallDurationSecondsTotal(): number;
    setToolCallDurationSecondsTotal(value: number): LlmTelemetryReport;

    hasSafetyStats(): boolean;
    clearSafetyStats(): void;
    getSafetyStats(): LlmSafetyStats | undefined;
    setSafetyStats(value?: LlmSafetyStats): LlmTelemetryReport;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmTelemetryReport.AsObject;
    static toObject(includeInstance: boolean, msg: LlmTelemetryReport): LlmTelemetryReport.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmTelemetryReport, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmTelemetryReport;
    static deserializeBinaryFromReader(message: LlmTelemetryReport, reader: jspb.BinaryReader): LlmTelemetryReport;
}

export namespace LlmTelemetryReport {
    export type AsObject = {
        llmTokenUsage?: LlmTokenUsage.AsObject,
        toolCallCountTotal: number,
        llmCallCount: number,
        llmTelemetriesList: Array<LlmTelemetry.AsObject>,
        durationSecondsTotal: number,
        modelsUsedList: Array<LlmModelUsage.AsObject>,
        providersUsedList: Array<LlmProviderUsage.AsObject>,
        ccaiServicesUsedList: Array<LlmCcaiServiceUsage.AsObject>,
        agentsUsedList: Array<LlmAgentUsage.AsObject>,
        toolsUsedList: Array<LlmToolUsage.AsObject>,
        latencyStats?: LlmLatencyStats.AsObject,
        cacheStats?: LlmCacheStats.AsObject,
        errorStats?: LlmErrorStats.AsObject,
        finishReasonDistributionList: Array<LlmFinishReasonStat.AsObject>,
        reasoningEffortDistributionList: Array<LlmReasoningEffortStat.AsObject>,
        thinkingTokensTotal: number,
        thinkingDurationSecondsTotal: number,
        toolCallTokensTotal: number,
        toolCallDurationSecondsTotal: number,
        safetyStats?: LlmSafetyStats.AsObject,
    }
}

export class LlmSafetyCategoryStat extends jspb.Message { 
    getCategory(): string;
    setCategory(value: string): LlmSafetyCategoryStat;
    getCount(): number;
    setCount(value: number): LlmSafetyCategoryStat;
    getRate(): number;
    setRate(value: number): LlmSafetyCategoryStat;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmSafetyCategoryStat.AsObject;
    static toObject(includeInstance: boolean, msg: LlmSafetyCategoryStat): LlmSafetyCategoryStat.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmSafetyCategoryStat, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmSafetyCategoryStat;
    static deserializeBinaryFromReader(message: LlmSafetyCategoryStat, reader: jspb.BinaryReader): LlmSafetyCategoryStat;
}

export namespace LlmSafetyCategoryStat {
    export type AsObject = {
        category: string,
        count: number,
        rate: number,
    }
}

export class LlmSafetyStats extends jspb.Message { 
    getTotalAssessed(): number;
    setTotalAssessed(value: number): LlmSafetyStats;
    getFlaggedCount(): number;
    setFlaggedCount(value: number): LlmSafetyStats;
    getOverallSafetyScore(): number;
    setOverallSafetyScore(value: number): LlmSafetyStats;
    clearCategoryStatsList(): void;
    getCategoryStatsList(): Array<LlmSafetyCategoryStat>;
    setCategoryStatsList(value: Array<LlmSafetyCategoryStat>): LlmSafetyStats;
    addCategoryStats(value?: LlmSafetyCategoryStat, index?: number): LlmSafetyCategoryStat;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmSafetyStats.AsObject;
    static toObject(includeInstance: boolean, msg: LlmSafetyStats): LlmSafetyStats.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmSafetyStats, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmSafetyStats;
    static deserializeBinaryFromReader(message: LlmSafetyStats, reader: jspb.BinaryReader): LlmSafetyStats;
}

export namespace LlmSafetyStats {
    export type AsObject = {
        totalAssessed: number,
        flaggedCount: number,
        overallSafetyScore: number,
        categoryStatsList: Array<LlmSafetyCategoryStat.AsObject>,
    }
}

export class LlmCallStartedEvent extends jspb.Message { 
    getLlmCallId(): string;
    setLlmCallId(value: string): LlmCallStartedEvent;
    getProvider(): string;
    setProvider(value: string): LlmCallStartedEvent;
    getModelName(): string;
    setModelName(value: string): LlmCallStartedEvent;
    getAgentName(): string;
    setAgentName(value: string): LlmCallStartedEvent;

    hasStartTime(): boolean;
    clearStartTime(): void;
    getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): LlmCallStartedEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmCallStartedEvent.AsObject;
    static toObject(includeInstance: boolean, msg: LlmCallStartedEvent): LlmCallStartedEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmCallStartedEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmCallStartedEvent;
    static deserializeBinaryFromReader(message: LlmCallStartedEvent, reader: jspb.BinaryReader): LlmCallStartedEvent;
}

export namespace LlmCallStartedEvent {
    export type AsObject = {
        llmCallId: string,
        provider: string,
        modelName: string,
        agentName: string,
        startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class LlmCallFinishedEvent extends jspb.Message { 
    getLlmCallId(): string;
    setLlmCallId(value: string): LlmCallFinishedEvent;

    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): LlmCallFinishedEvent;
    getDurationInS(): number;
    setDurationInS(value: number): LlmCallFinishedEvent;

    hasLlmTokenUsage(): boolean;
    clearLlmTokenUsage(): void;
    getLlmTokenUsage(): LlmTokenUsage | undefined;
    setLlmTokenUsage(value?: LlmTokenUsage): LlmCallFinishedEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmCallFinishedEvent.AsObject;
    static toObject(includeInstance: boolean, msg: LlmCallFinishedEvent): LlmCallFinishedEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmCallFinishedEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmCallFinishedEvent;
    static deserializeBinaryFromReader(message: LlmCallFinishedEvent, reader: jspb.BinaryReader): LlmCallFinishedEvent;
}

export namespace LlmCallFinishedEvent {
    export type AsObject = {
        llmCallId: string,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        durationInS: number,
        llmTokenUsage?: LlmTokenUsage.AsObject,
    }
}

export class LlmToolCallStartedEvent extends jspb.Message { 
    getToolCallId(): string;
    setToolCallId(value: string): LlmToolCallStartedEvent;
    getToolName(): string;
    setToolName(value: string): LlmToolCallStartedEvent;

    hasArguments(): boolean;
    clearArguments(): void;
    getArguments(): google_protobuf_struct_pb.Struct | undefined;
    setArguments(value?: google_protobuf_struct_pb.Struct): LlmToolCallStartedEvent;

    hasStartTime(): boolean;
    clearStartTime(): void;
    getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): LlmToolCallStartedEvent;
    getLlmCallId(): string;
    setLlmCallId(value: string): LlmToolCallStartedEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmToolCallStartedEvent.AsObject;
    static toObject(includeInstance: boolean, msg: LlmToolCallStartedEvent): LlmToolCallStartedEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmToolCallStartedEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmToolCallStartedEvent;
    static deserializeBinaryFromReader(message: LlmToolCallStartedEvent, reader: jspb.BinaryReader): LlmToolCallStartedEvent;
}

export namespace LlmToolCallStartedEvent {
    export type AsObject = {
        toolCallId: string,
        toolName: string,
        arguments?: google_protobuf_struct_pb.Struct.AsObject,
        startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        llmCallId: string,
    }
}

export class LlmToolCallFinishedEvent extends jspb.Message { 
    getToolCallId(): string;
    setToolCallId(value: string): LlmToolCallFinishedEvent;

    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): LlmToolCallFinishedEvent;
    getDurationInS(): number;
    setDurationInS(value: number): LlmToolCallFinishedEvent;

    hasLlmTokenUsage(): boolean;
    clearLlmTokenUsage(): void;
    getLlmTokenUsage(): LlmTokenUsage | undefined;
    setLlmTokenUsage(value?: LlmTokenUsage): LlmToolCallFinishedEvent;

    hasResult(): boolean;
    clearResult(): void;
    getResult(): google_protobuf_struct_pb.Struct | undefined;
    setResult(value?: google_protobuf_struct_pb.Struct): LlmToolCallFinishedEvent;
    getErrorMessage(): string;
    setErrorMessage(value: string): LlmToolCallFinishedEvent;
    getLlmCallId(): string;
    setLlmCallId(value: string): LlmToolCallFinishedEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmToolCallFinishedEvent.AsObject;
    static toObject(includeInstance: boolean, msg: LlmToolCallFinishedEvent): LlmToolCallFinishedEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmToolCallFinishedEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmToolCallFinishedEvent;
    static deserializeBinaryFromReader(message: LlmToolCallFinishedEvent, reader: jspb.BinaryReader): LlmToolCallFinishedEvent;
}

export namespace LlmToolCallFinishedEvent {
    export type AsObject = {
        toolCallId: string,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        durationInS: number,
        llmTokenUsage?: LlmTokenUsage.AsObject,
        result?: google_protobuf_struct_pb.Struct.AsObject,
        errorMessage: string,
        llmCallId: string,
    }
}

export class LlmThinkingDeltaEvent extends jspb.Message { 
    getLlmCallId(): string;
    setLlmCallId(value: string): LlmThinkingDeltaEvent;
    getTextDelta(): string;
    setTextDelta(value: string): LlmThinkingDeltaEvent;

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): LlmThinkingDeltaEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmThinkingDeltaEvent.AsObject;
    static toObject(includeInstance: boolean, msg: LlmThinkingDeltaEvent): LlmThinkingDeltaEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmThinkingDeltaEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmThinkingDeltaEvent;
    static deserializeBinaryFromReader(message: LlmThinkingDeltaEvent, reader: jspb.BinaryReader): LlmThinkingDeltaEvent;
}

export namespace LlmThinkingDeltaEvent {
    export type AsObject = {
        llmCallId: string,
        textDelta: string,
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class LlmTokenUsageUpdateEvent extends jspb.Message { 
    getLlmCallId(): string;
    setLlmCallId(value: string): LlmTokenUsageUpdateEvent;

    hasLlmTokenUsage(): boolean;
    clearLlmTokenUsage(): void;
    getLlmTokenUsage(): LlmTokenUsage | undefined;
    setLlmTokenUsage(value?: LlmTokenUsage): LlmTokenUsageUpdateEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmTokenUsageUpdateEvent.AsObject;
    static toObject(includeInstance: boolean, msg: LlmTokenUsageUpdateEvent): LlmTokenUsageUpdateEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmTokenUsageUpdateEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmTokenUsageUpdateEvent;
    static deserializeBinaryFromReader(message: LlmTokenUsageUpdateEvent, reader: jspb.BinaryReader): LlmTokenUsageUpdateEvent;
}

export namespace LlmTokenUsageUpdateEvent {
    export type AsObject = {
        llmCallId: string,
        llmTokenUsage?: LlmTokenUsage.AsObject,
    }
}

export class ReferencedChunk extends jspb.Message { 
    getReferenceIndex(): number;
    setReferenceIndex(value: number): ReferencedChunk;
    getDatasetId(): string;
    setDatasetId(value: string): ReferencedChunk;
    getDocumentId(): string;
    setDocumentId(value: string): ReferencedChunk;
    getChunkId(): string;
    setChunkId(value: string): ReferencedChunk;
    getDocumentName(): string;
    setDocumentName(value: string): ReferencedChunk;
    getContent(): string;
    setContent(value: string): ReferencedChunk;
    getSimilarity(): number;
    setSimilarity(value: number): ReferencedChunk;
    getDocumentUrl(): string;
    setDocumentUrl(value: string): ReferencedChunk;
    getDeepLinkUrl(): string;
    setDeepLinkUrl(value: string): ReferencedChunk;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReferencedChunk.AsObject;
    static toObject(includeInstance: boolean, msg: ReferencedChunk): ReferencedChunk.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReferencedChunk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReferencedChunk;
    static deserializeBinaryFromReader(message: ReferencedChunk, reader: jspb.BinaryReader): ReferencedChunk;
}

export namespace ReferencedChunk {
    export type AsObject = {
        referenceIndex: number,
        datasetId: string,
        documentId: string,
        chunkId: string,
        documentName: string,
        content: string,
        similarity: number,
        documentUrl: string,
        deepLinkUrl: string,
    }
}

export class QueryResult extends jspb.Message { 
    getQueryText(): string;
    setQueryText(value: string): QueryResult;
    getSpeechRecognitionConfidence(): number;
    setSpeechRecognitionConfidence(value: number): QueryResult;
    getAction(): string;
    setAction(value: string): QueryResult;

    hasParameters(): boolean;
    clearParameters(): void;
    getParameters(): google_protobuf_struct_pb.Struct | undefined;
    setParameters(value?: google_protobuf_struct_pb.Struct): QueryResult;
    getAllRequiredParamsPresent(): boolean;
    setAllRequiredParamsPresent(value: boolean): QueryResult;
    getFulfillmentText(): string;
    setFulfillmentText(value: string): QueryResult;
    clearFulfillmentMessagesList(): void;
    getFulfillmentMessagesList(): Array<ondewo_nlu_intent_pb.Intent.Message>;
    setFulfillmentMessagesList(value: Array<ondewo_nlu_intent_pb.Intent.Message>): QueryResult;
    addFulfillmentMessages(value?: ondewo_nlu_intent_pb.Intent.Message, index?: number): ondewo_nlu_intent_pb.Intent.Message;
    getWebhookSource(): string;
    setWebhookSource(value: string): QueryResult;

    hasWebhookPayload(): boolean;
    clearWebhookPayload(): void;
    getWebhookPayload(): google_protobuf_struct_pb.Struct | undefined;
    setWebhookPayload(value?: google_protobuf_struct_pb.Struct): QueryResult;
    clearOutputContextsList(): void;
    getOutputContextsList(): Array<ondewo_nlu_context_pb.Context>;
    setOutputContextsList(value: Array<ondewo_nlu_context_pb.Context>): QueryResult;
    addOutputContexts(value?: ondewo_nlu_context_pb.Context, index?: number): ondewo_nlu_context_pb.Context;

    hasIntent(): boolean;
    clearIntent(): void;
    getIntent(): ondewo_nlu_intent_pb.Intent | undefined;
    setIntent(value?: ondewo_nlu_intent_pb.Intent): QueryResult;
    getIntentDetectionConfidence(): number;
    setIntentDetectionConfidence(value: number): QueryResult;
    getQueryTextOriginal(): string;
    setQueryTextOriginal(value: string): QueryResult;

    hasDiagnosticInfo(): boolean;
    clearDiagnosticInfo(): void;
    getDiagnosticInfo(): google_protobuf_struct_pb.Struct | undefined;
    setDiagnosticInfo(value?: google_protobuf_struct_pb.Struct): QueryResult;
    getLanguageCode(): string;
    setLanguageCode(value: string): QueryResult;
    clearFileResourcesList(): void;
    getFileResourcesList(): Array<FileResource>;
    setFileResourcesList(value: Array<FileResource>): QueryResult;
    addFileResources(value?: FileResource, index?: number): FileResource;

    hasLlmTelemetryReport(): boolean;
    clearLlmTelemetryReport(): void;
    getLlmTelemetryReport(): LlmTelemetryReport | undefined;
    setLlmTelemetryReport(value?: LlmTelemetryReport): QueryResult;
    clearReferencedChunksList(): void;
    getReferencedChunksList(): Array<ReferencedChunk>;
    setReferencedChunksList(value: Array<ReferencedChunk>): QueryResult;
    addReferencedChunks(value?: ReferencedChunk, index?: number): ReferencedChunk;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryResult.AsObject;
    static toObject(includeInstance: boolean, msg: QueryResult): QueryResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryResult;
    static deserializeBinaryFromReader(message: QueryResult, reader: jspb.BinaryReader): QueryResult;
}

export namespace QueryResult {
    export type AsObject = {
        queryText: string,
        speechRecognitionConfidence: number,
        action: string,
        parameters?: google_protobuf_struct_pb.Struct.AsObject,
        allRequiredParamsPresent: boolean,
        fulfillmentText: string,
        fulfillmentMessagesList: Array<ondewo_nlu_intent_pb.Intent.Message.AsObject>,
        webhookSource: string,
        webhookPayload?: google_protobuf_struct_pb.Struct.AsObject,
        outputContextsList: Array<ondewo_nlu_context_pb.Context.AsObject>,
        intent?: ondewo_nlu_intent_pb.Intent.AsObject,
        intentDetectionConfidence: number,
        queryTextOriginal: string,
        diagnosticInfo?: google_protobuf_struct_pb.Struct.AsObject,
        languageCode: string,
        fileResourcesList: Array<FileResource.AsObject>,
        llmTelemetryReport?: LlmTelemetryReport.AsObject,
        referencedChunksList: Array<ReferencedChunk.AsObject>,
    }
}

export class StreamingDetectIntentRequest extends jspb.Message { 
    getSession(): string;
    setSession(value: string): StreamingDetectIntentRequest;

    hasQueryParams(): boolean;
    clearQueryParams(): void;
    getQueryParams(): QueryParameters | undefined;
    setQueryParams(value?: QueryParameters): StreamingDetectIntentRequest;

    hasQueryInput(): boolean;
    clearQueryInput(): void;
    getQueryInput(): QueryInput | undefined;
    setQueryInput(value?: QueryInput): StreamingDetectIntentRequest;
    getSingleUtterance(): boolean;
    setSingleUtterance(value: boolean): StreamingDetectIntentRequest;
    getInputAudio(): Uint8Array | string;
    getInputAudio_asU8(): Uint8Array;
    getInputAudio_asB64(): string;
    setInputAudio(value: Uint8Array | string): StreamingDetectIntentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamingDetectIntentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StreamingDetectIntentRequest): StreamingDetectIntentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamingDetectIntentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamingDetectIntentRequest;
    static deserializeBinaryFromReader(message: StreamingDetectIntentRequest, reader: jspb.BinaryReader): StreamingDetectIntentRequest;
}

export namespace StreamingDetectIntentRequest {
    export type AsObject = {
        session: string,
        queryParams?: QueryParameters.AsObject,
        queryInput?: QueryInput.AsObject,
        singleUtterance: boolean,
        inputAudio: Uint8Array | string,
    }
}

export class StreamingDetectIntentResponse extends jspb.Message { 
    getResponseId(): string;
    setResponseId(value: string): StreamingDetectIntentResponse;

    hasRecognitionResult(): boolean;
    clearRecognitionResult(): void;
    getRecognitionResult(): StreamingRecognitionResult | undefined;
    setRecognitionResult(value?: StreamingRecognitionResult): StreamingDetectIntentResponse;

    hasQueryResult(): boolean;
    clearQueryResult(): void;
    getQueryResult(): QueryResult | undefined;
    setQueryResult(value?: QueryResult): StreamingDetectIntentResponse;

    hasWebhookStatus(): boolean;
    clearWebhookStatus(): void;
    getWebhookStatus(): google_rpc_status_pb.Status | undefined;
    setWebhookStatus(value?: google_rpc_status_pb.Status): StreamingDetectIntentResponse;

    hasLlmCallStarted(): boolean;
    clearLlmCallStarted(): void;
    getLlmCallStarted(): LlmCallStartedEvent | undefined;
    setLlmCallStarted(value?: LlmCallStartedEvent): StreamingDetectIntentResponse;

    hasLlmCallFinished(): boolean;
    clearLlmCallFinished(): void;
    getLlmCallFinished(): LlmCallFinishedEvent | undefined;
    setLlmCallFinished(value?: LlmCallFinishedEvent): StreamingDetectIntentResponse;

    hasLlmToolCallStarted(): boolean;
    clearLlmToolCallStarted(): void;
    getLlmToolCallStarted(): LlmToolCallStartedEvent | undefined;
    setLlmToolCallStarted(value?: LlmToolCallStartedEvent): StreamingDetectIntentResponse;

    hasLlmToolCallFinished(): boolean;
    clearLlmToolCallFinished(): void;
    getLlmToolCallFinished(): LlmToolCallFinishedEvent | undefined;
    setLlmToolCallFinished(value?: LlmToolCallFinishedEvent): StreamingDetectIntentResponse;

    hasLlmThinkingDelta(): boolean;
    clearLlmThinkingDelta(): void;
    getLlmThinkingDelta(): LlmThinkingDeltaEvent | undefined;
    setLlmThinkingDelta(value?: LlmThinkingDeltaEvent): StreamingDetectIntentResponse;

    hasLlmTokenUsageUpdate(): boolean;
    clearLlmTokenUsageUpdate(): void;
    getLlmTokenUsageUpdate(): LlmTokenUsageUpdateEvent | undefined;
    setLlmTokenUsageUpdate(value?: LlmTokenUsageUpdateEvent): StreamingDetectIntentResponse;

    getTelemetryEventCase(): StreamingDetectIntentResponse.TelemetryEventCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamingDetectIntentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StreamingDetectIntentResponse): StreamingDetectIntentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamingDetectIntentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamingDetectIntentResponse;
    static deserializeBinaryFromReader(message: StreamingDetectIntentResponse, reader: jspb.BinaryReader): StreamingDetectIntentResponse;
}

export namespace StreamingDetectIntentResponse {
    export type AsObject = {
        responseId: string,
        recognitionResult?: StreamingRecognitionResult.AsObject,
        queryResult?: QueryResult.AsObject,
        webhookStatus?: google_rpc_status_pb.Status.AsObject,
        llmCallStarted?: LlmCallStartedEvent.AsObject,
        llmCallFinished?: LlmCallFinishedEvent.AsObject,
        llmToolCallStarted?: LlmToolCallStartedEvent.AsObject,
        llmToolCallFinished?: LlmToolCallFinishedEvent.AsObject,
        llmThinkingDelta?: LlmThinkingDeltaEvent.AsObject,
        llmTokenUsageUpdate?: LlmTokenUsageUpdateEvent.AsObject,
    }

    export enum TelemetryEventCase {
        TELEMETRY_EVENT_NOT_SET = 0,
        LLM_CALL_STARTED = 5,
        LLM_CALL_FINISHED = 6,
        LLM_TOOL_CALL_STARTED = 7,
        LLM_TOOL_CALL_FINISHED = 8,
        LLM_THINKING_DELTA = 9,
        LLM_TOKEN_USAGE_UPDATE = 10,
    }

}

export class StreamingRecognitionResult extends jspb.Message { 
    getMessageType(): StreamingRecognitionResult.MessageType;
    setMessageType(value: StreamingRecognitionResult.MessageType): StreamingRecognitionResult;
    getTranscript(): string;
    setTranscript(value: string): StreamingRecognitionResult;
    getIsFinal(): boolean;
    setIsFinal(value: boolean): StreamingRecognitionResult;
    getConfidence(): number;
    setConfidence(value: number): StreamingRecognitionResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamingRecognitionResult.AsObject;
    static toObject(includeInstance: boolean, msg: StreamingRecognitionResult): StreamingRecognitionResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamingRecognitionResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamingRecognitionResult;
    static deserializeBinaryFromReader(message: StreamingRecognitionResult, reader: jspb.BinaryReader): StreamingRecognitionResult;
}

export namespace StreamingRecognitionResult {
    export type AsObject = {
        messageType: StreamingRecognitionResult.MessageType,
        transcript: string,
        isFinal: boolean,
        confidence: number,
    }

    export enum MessageType {
    MESSAGE_TYPE_UNSPECIFIED = 0,
    TRANSCRIPT = 1,
    END_OF_SINGLE_UTTERANCE = 2,
    }

}

export class InputAudioConfig extends jspb.Message { 
    getAudioEncoding(): AudioEncoding;
    setAudioEncoding(value: AudioEncoding): InputAudioConfig;
    getSampleRateHertz(): number;
    setSampleRateHertz(value: number): InputAudioConfig;
    getLanguageCode(): string;
    setLanguageCode(value: string): InputAudioConfig;
    clearPhraseHintsList(): void;
    getPhraseHintsList(): Array<string>;
    setPhraseHintsList(value: Array<string>): InputAudioConfig;
    addPhraseHints(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InputAudioConfig.AsObject;
    static toObject(includeInstance: boolean, msg: InputAudioConfig): InputAudioConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InputAudioConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InputAudioConfig;
    static deserializeBinaryFromReader(message: InputAudioConfig, reader: jspb.BinaryReader): InputAudioConfig;
}

export namespace InputAudioConfig {
    export type AsObject = {
        audioEncoding: AudioEncoding,
        sampleRateHertz: number,
        languageCode: string,
        phraseHintsList: Array<string>,
    }
}

export class TextInput extends jspb.Message { 
    getText(): string;
    setText(value: string): TextInput;
    getLanguageCode(): string;
    setLanguageCode(value: string): TextInput;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TextInput.AsObject;
    static toObject(includeInstance: boolean, msg: TextInput): TextInput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TextInput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TextInput;
    static deserializeBinaryFromReader(message: TextInput, reader: jspb.BinaryReader): TextInput;
}

export namespace TextInput {
    export type AsObject = {
        text: string,
        languageCode: string,
    }
}

export class EventInput extends jspb.Message { 
    getName(): string;
    setName(value: string): EventInput;

    hasParameters(): boolean;
    clearParameters(): void;
    getParameters(): google_protobuf_struct_pb.Struct | undefined;
    setParameters(value?: google_protobuf_struct_pb.Struct): EventInput;
    getLanguageCode(): string;
    setLanguageCode(value: string): EventInput;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventInput.AsObject;
    static toObject(includeInstance: boolean, msg: EventInput): EventInput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventInput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventInput;
    static deserializeBinaryFromReader(message: EventInput, reader: jspb.BinaryReader): EventInput;
}

export namespace EventInput {
    export type AsObject = {
        name: string,
        parameters?: google_protobuf_struct_pb.Struct.AsObject,
        languageCode: string,
    }
}

export class Session extends jspb.Message { 
    getName(): string;
    setName(value: string): Session;
    clearSessionStepsList(): void;
    getSessionStepsList(): Array<SessionStep>;
    setSessionStepsList(value: Array<SessionStep>): Session;
    addSessionSteps(value?: SessionStep, index?: number): SessionStep;

    hasSessionInfo(): boolean;
    clearSessionInfo(): void;
    getSessionInfo(): SessionInfo | undefined;
    setSessionInfo(value?: SessionInfo): Session;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Session;

    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): Session;
    getCreatedBy(): string;
    setCreatedBy(value: string): Session;
    getModifiedBy(): string;
    setModifiedBy(value: string): Session;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Session.AsObject;
    static toObject(includeInstance: boolean, msg: Session): Session.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Session, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Session;
    static deserializeBinaryFromReader(message: Session, reader: jspb.BinaryReader): Session;
}

export namespace Session {
    export type AsObject = {
        name: string,
        sessionStepsList: Array<SessionStep.AsObject>,
        sessionInfo?: SessionInfo.AsObject,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdBy: string,
        modifiedBy: string,
    }

    export enum View {
    VIEW_UNSPECIFIED = 0,
    VIEW_FULL = 1,
    VIEW_SPARSE = 2,
    }

}

export class SessionStep extends jspb.Message { 
    getName(): string;
    setName(value: string): SessionStep;

    hasDetectIntentRequest(): boolean;
    clearDetectIntentRequest(): void;
    getDetectIntentRequest(): DetectIntentRequest | undefined;
    setDetectIntentRequest(value?: DetectIntentRequest): SessionStep;

    hasDetectIntentResponse(): boolean;
    clearDetectIntentResponse(): void;
    getDetectIntentResponse(): DetectIntentResponse | undefined;
    setDetectIntentResponse(value?: DetectIntentResponse): SessionStep;
    clearContextsList(): void;
    getContextsList(): Array<ondewo_nlu_context_pb.Context>;
    setContextsList(value: Array<ondewo_nlu_context_pb.Context>): SessionStep;
    addContexts(value?: ondewo_nlu_context_pb.Context, index?: number): ondewo_nlu_context_pb.Context;

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): SessionStep;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): SessionStep;

    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): SessionStep;
    getCreatedBy(): string;
    setCreatedBy(value: string): SessionStep;
    getModifiedBy(): string;
    setModifiedBy(value: string): SessionStep;
    clearAudioFileResourcesList(): void;
    getAudioFileResourcesList(): Array<AudioFileResource>;
    setAudioFileResourcesList(value: Array<AudioFileResource>): SessionStep;
    addAudioFileResources(value?: AudioFileResource, index?: number): AudioFileResource;

    hasLlmTelemetryReport(): boolean;
    clearLlmTelemetryReport(): void;
    getLlmTelemetryReport(): LlmTelemetryReport | undefined;
    setLlmTelemetryReport(value?: LlmTelemetryReport): SessionStep;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SessionStep.AsObject;
    static toObject(includeInstance: boolean, msg: SessionStep): SessionStep.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SessionStep, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SessionStep;
    static deserializeBinaryFromReader(message: SessionStep, reader: jspb.BinaryReader): SessionStep;
}

export namespace SessionStep {
    export type AsObject = {
        name: string,
        detectIntentRequest?: DetectIntentRequest.AsObject,
        detectIntentResponse?: DetectIntentResponse.AsObject,
        contextsList: Array<ondewo_nlu_context_pb.Context.AsObject>,
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdBy: string,
        modifiedBy: string,
        audioFileResourcesList: Array<AudioFileResource.AsObject>,
        llmTelemetryReport?: LlmTelemetryReport.AsObject,
    }
}

export class GetSessionStepRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GetSessionStepRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetSessionStepRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSessionStepRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSessionStepRequest): GetSessionStepRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSessionStepRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSessionStepRequest;
    static deserializeBinaryFromReader(message: GetSessionStepRequest, reader: jspb.BinaryReader): GetSessionStepRequest;
}

export namespace GetSessionStepRequest {
    export type AsObject = {
        name: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class UpdateSessionStepRequest extends jspb.Message { 

    hasSessionStep(): boolean;
    clearSessionStep(): void;
    getSessionStep(): SessionStep | undefined;
    setSessionStep(value?: SessionStep): UpdateSessionStepRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateSessionStepRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateSessionStepRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSessionStepRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSessionStepRequest): UpdateSessionStepRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSessionStepRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSessionStepRequest;
    static deserializeBinaryFromReader(message: UpdateSessionStepRequest, reader: jspb.BinaryReader): UpdateSessionStepRequest;
}

export namespace UpdateSessionStepRequest {
    export type AsObject = {
        sessionStep?: SessionStep.AsObject,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class DeleteSessionStepRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): DeleteSessionStepRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSessionStepRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSessionStepRequest): DeleteSessionStepRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSessionStepRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSessionStepRequest;
    static deserializeBinaryFromReader(message: DeleteSessionStepRequest, reader: jspb.BinaryReader): DeleteSessionStepRequest;
}

export namespace DeleteSessionStepRequest {
    export type AsObject = {
        name: string,
    }
}

export class CreateSessionStepRequest extends jspb.Message { 
    getSessionId(): string;
    setSessionId(value: string): CreateSessionStepRequest;

    hasSessionStep(): boolean;
    clearSessionStep(): void;
    getSessionStep(): SessionStep | undefined;
    setSessionStep(value?: SessionStep): CreateSessionStepRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): CreateSessionStepRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateSessionStepRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateSessionStepRequest): CreateSessionStepRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateSessionStepRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateSessionStepRequest;
    static deserializeBinaryFromReader(message: CreateSessionStepRequest, reader: jspb.BinaryReader): CreateSessionStepRequest;
}

export namespace CreateSessionStepRequest {
    export type AsObject = {
        sessionId: string,
        sessionStep?: SessionStep.AsObject,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class ListSessionsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ListSessionsRequest;
    getSessionView(): Session.View;
    setSessionView(value: Session.View): ListSessionsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListSessionsRequest;

    hasSessionFilter(): boolean;
    clearSessionFilter(): void;
    getSessionFilter(): SessionFilter | undefined;
    setSessionFilter(value?: SessionFilter): ListSessionsRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListSessionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSessionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSessionsRequest): ListSessionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSessionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSessionsRequest;
    static deserializeBinaryFromReader(message: ListSessionsRequest, reader: jspb.BinaryReader): ListSessionsRequest;
}

export namespace ListSessionsRequest {
    export type AsObject = {
        parent: string,
        sessionView: Session.View,
        pageToken: string,
        sessionFilter?: SessionFilter.AsObject,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class ContextFilter extends jspb.Message { 
    getContextName(): string;
    setContextName(value: string): ContextFilter;
    getKey(): string;
    setKey(value: string): ContextFilter;
    getValue(): string;
    setValue(value: string): ContextFilter;
    getOperator(): ComparisonOperator;
    setOperator(value: ComparisonOperator): ContextFilter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContextFilter.AsObject;
    static toObject(includeInstance: boolean, msg: ContextFilter): ContextFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContextFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContextFilter;
    static deserializeBinaryFromReader(message: ContextFilter, reader: jspb.BinaryReader): ContextFilter;
}

export namespace ContextFilter {
    export type AsObject = {
        contextName: string,
        key: string,
        value: string,
        operator: ComparisonOperator,
    }
}

export class SessionFilter extends jspb.Message { 
    clearLanguageCodesList(): void;
    getLanguageCodesList(): Array<string>;
    setLanguageCodesList(value: Array<string>): SessionFilter;
    addLanguageCodes(value: string, index?: number): string;
    clearMatchedIntentsList(): void;
    getMatchedIntentsList(): Array<ondewo_nlu_intent_pb.Intent>;
    setMatchedIntentsList(value: Array<ondewo_nlu_intent_pb.Intent>): SessionFilter;
    addMatchedIntents(value?: ondewo_nlu_intent_pb.Intent, index?: number): ondewo_nlu_intent_pb.Intent;
    clearMatchedEntityTypesList(): void;
    getMatchedEntityTypesList(): Array<ondewo_nlu_entity_type_pb.EntityType>;
    setMatchedEntityTypesList(value: Array<ondewo_nlu_entity_type_pb.EntityType>): SessionFilter;
    addMatchedEntityTypes(value?: ondewo_nlu_entity_type_pb.EntityType, index?: number): ondewo_nlu_entity_type_pb.EntityType;
    getMinIntentsConfidenceMin(): number;
    setMinIntentsConfidenceMin(value: number): SessionFilter;
    getMinIntentsConfidenceMax(): number;
    setMinIntentsConfidenceMax(value: number): SessionFilter;
    getMinEntityTypesConfidenceMin(): number;
    setMinEntityTypesConfidenceMin(value: number): SessionFilter;
    getMinEntityTypesConfidenceMax(): number;
    setMinEntityTypesConfidenceMax(value: number): SessionFilter;
    getEarliest(): number;
    setEarliest(value: number): SessionFilter;
    getLatest(): number;
    setLatest(value: number): SessionFilter;
    getMinNumberTurns(): number;
    setMinNumberTurns(value: number): SessionFilter;
    getMaxNumberTurns(): number;
    setMaxNumberTurns(value: number): SessionFilter;
    clearLabelsList(): void;
    getLabelsList(): Array<string>;
    setLabelsList(value: Array<string>): SessionFilter;
    addLabels(value: string, index?: number): string;
    clearUserIdsList(): void;
    getUserIdsList(): Array<string>;
    setUserIdsList(value: Array<string>): SessionFilter;
    addUserIds(value: string, index?: number): string;
    clearIntentTagsList(): void;
    getIntentTagsList(): Array<string>;
    setIntentTagsList(value: Array<string>): SessionFilter;
    addIntentTags(value: string, index?: number): string;
    clearSessionIdsList(): void;
    getSessionIdsList(): Array<string>;
    setSessionIdsList(value: Array<string>): SessionFilter;
    addSessionIds(value: string, index?: number): string;
    clearInputContextsList(): void;
    getInputContextsList(): Array<ondewo_nlu_context_pb.Context>;
    setInputContextsList(value: Array<ondewo_nlu_context_pb.Context>): SessionFilter;
    addInputContexts(value?: ondewo_nlu_context_pb.Context, index?: number): ondewo_nlu_context_pb.Context;
    clearOutputContextsList(): void;
    getOutputContextsList(): Array<ondewo_nlu_context_pb.Context>;
    setOutputContextsList(value: Array<ondewo_nlu_context_pb.Context>): SessionFilter;
    addOutputContexts(value?: ondewo_nlu_context_pb.Context, index?: number): ondewo_nlu_context_pb.Context;
    getDurationInSMin(): number;
    setDurationInSMin(value: number): SessionFilter;
    getDurationInSMax(): number;
    setDurationInSMax(value: number): SessionFilter;
    getDurationInMMin(): number;
    setDurationInMMin(value: number): SessionFilter;
    getDurationInMMax(): number;
    setDurationInMMax(value: number): SessionFilter;
    getDurationInMRoundedMin(): number;
    setDurationInMRoundedMin(value: number): SessionFilter;
    getDurationInMRoundedMax(): number;
    setDurationInMRoundedMax(value: number): SessionFilter;
    getDurationInterval15sRoundedMin(): number;
    setDurationInterval15sRoundedMin(value: number): SessionFilter;
    getDurationInterval15sRoundedMax(): number;
    setDurationInterval15sRoundedMax(value: number): SessionFilter;
    getDurationInterval30sRoundedMin(): number;
    setDurationInterval30sRoundedMin(value: number): SessionFilter;
    getDurationInterval30sRoundedMax(): number;
    setDurationInterval30sRoundedMax(value: number): SessionFilter;
    getDurationInterval45sRoundedMin(): number;
    setDurationInterval45sRoundedMin(value: number): SessionFilter;
    getDurationInterval45sRoundedMax(): number;
    setDurationInterval45sRoundedMax(value: number): SessionFilter;
    getStartedTimeSlotPerHourMin(): string;
    setStartedTimeSlotPerHourMin(value: string): SessionFilter;
    getStartedTimeSlotPerHourMax(): string;
    setStartedTimeSlotPerHourMax(value: string): SessionFilter;
    getStartedTimeSlotPerQuarterHourMin(): string;
    setStartedTimeSlotPerQuarterHourMin(value: string): SessionFilter;
    getStartedTimeSlotPerQuarterHourMax(): string;
    setStartedTimeSlotPerQuarterHourMax(value: string): SessionFilter;
    getStartedTimeSlotPerHalfHourMin(): string;
    setStartedTimeSlotPerHalfHourMin(value: string): SessionFilter;
    getStartedTimeSlotPerHalfHourMax(): string;
    setStartedTimeSlotPerHalfHourMax(value: string): SessionFilter;
    getStartedTimeSlotPerDayPhaseMin(): string;
    setStartedTimeSlotPerDayPhaseMin(value: string): SessionFilter;
    getStartedTimeSlotPerDayPhaseMax(): string;
    setStartedTimeSlotPerDayPhaseMax(value: string): SessionFilter;
    getStartedTimeSlotPerMinuteMin(): string;
    setStartedTimeSlotPerMinuteMin(value: string): SessionFilter;
    getStartedTimeSlotPerMinuteMax(): string;
    setStartedTimeSlotPerMinuteMax(value: string): SessionFilter;
    getDurationInSRoundedMin(): number;
    setDurationInSRoundedMin(value: number): SessionFilter;
    getDurationInSRoundedMax(): number;
    setDurationInSRoundedMax(value: number): SessionFilter;
    clearPlatformsList(): void;
    getPlatformsList(): Array<ondewo_nlu_intent_pb.Intent.Message.Platform>;
    setPlatformsList(value: Array<ondewo_nlu_intent_pb.Intent.Message.Platform>): SessionFilter;
    addPlatforms(value: ondewo_nlu_intent_pb.Intent.Message.Platform, index?: number): ondewo_nlu_intent_pb.Intent.Message.Platform;
    clearAccountIdsList(): void;
    getAccountIdsList(): Array<string>;
    setAccountIdsList(value: Array<string>): SessionFilter;
    addAccountIds(value: string, index?: number): string;
    clearPropertyIdsList(): void;
    getPropertyIdsList(): Array<string>;
    setPropertyIdsList(value: Array<string>): SessionFilter;
    addPropertyIds(value: string, index?: number): string;
    clearDatastreamIdsList(): void;
    getDatastreamIdsList(): Array<string>;
    setDatastreamIdsList(value: Array<string>): SessionFilter;
    addDatastreamIds(value: string, index?: number): string;
    clearOriginIdsList(): void;
    getOriginIdsList(): Array<string>;
    setOriginIdsList(value: Array<string>): SessionFilter;
    addOriginIds(value: string, index?: number): string;
    clearIdentifiedUserIdsList(): void;
    getIdentifiedUserIdsList(): Array<string>;
    setIdentifiedUserIdsList(value: Array<string>): SessionFilter;
    addIdentifiedUserIds(value: string, index?: number): string;
    getDurationInterval60sRoundedMin(): number;
    setDurationInterval60sRoundedMin(value: number): SessionFilter;
    getDurationInterval60sRoundedMax(): number;
    setDurationInterval60sRoundedMax(value: number): SessionFilter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SessionFilter.AsObject;
    static toObject(includeInstance: boolean, msg: SessionFilter): SessionFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SessionFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SessionFilter;
    static deserializeBinaryFromReader(message: SessionFilter, reader: jspb.BinaryReader): SessionFilter;
}

export namespace SessionFilter {
    export type AsObject = {
        languageCodesList: Array<string>,
        matchedIntentsList: Array<ondewo_nlu_intent_pb.Intent.AsObject>,
        matchedEntityTypesList: Array<ondewo_nlu_entity_type_pb.EntityType.AsObject>,
        minIntentsConfidenceMin: number,
        minIntentsConfidenceMax: number,
        minEntityTypesConfidenceMin: number,
        minEntityTypesConfidenceMax: number,
        earliest: number,
        latest: number,
        minNumberTurns: number,
        maxNumberTurns: number,
        labelsList: Array<string>,
        userIdsList: Array<string>,
        intentTagsList: Array<string>,
        sessionIdsList: Array<string>,
        inputContextsList: Array<ondewo_nlu_context_pb.Context.AsObject>,
        outputContextsList: Array<ondewo_nlu_context_pb.Context.AsObject>,
        durationInSMin: number,
        durationInSMax: number,
        durationInMMin: number,
        durationInMMax: number,
        durationInMRoundedMin: number,
        durationInMRoundedMax: number,
        durationInterval15sRoundedMin: number,
        durationInterval15sRoundedMax: number,
        durationInterval30sRoundedMin: number,
        durationInterval30sRoundedMax: number,
        durationInterval45sRoundedMin: number,
        durationInterval45sRoundedMax: number,
        startedTimeSlotPerHourMin: string,
        startedTimeSlotPerHourMax: string,
        startedTimeSlotPerQuarterHourMin: string,
        startedTimeSlotPerQuarterHourMax: string,
        startedTimeSlotPerHalfHourMin: string,
        startedTimeSlotPerHalfHourMax: string,
        startedTimeSlotPerDayPhaseMin: string,
        startedTimeSlotPerDayPhaseMax: string,
        startedTimeSlotPerMinuteMin: string,
        startedTimeSlotPerMinuteMax: string,
        durationInSRoundedMin: number,
        durationInSRoundedMax: number,
        platformsList: Array<ondewo_nlu_intent_pb.Intent.Message.Platform>,
        accountIdsList: Array<string>,
        propertyIdsList: Array<string>,
        datastreamIdsList: Array<string>,
        originIdsList: Array<string>,
        identifiedUserIdsList: Array<string>,
        durationInterval60sRoundedMin: number,
        durationInterval60sRoundedMax: number,
    }
}

export class SessionInfo extends jspb.Message { 
    clearLanguageCodesList(): void;
    getLanguageCodesList(): Array<string>;
    setLanguageCodesList(value: Array<string>): SessionInfo;
    addLanguageCodes(value: string, index?: number): string;
    clearMatchedIntentsList(): void;
    getMatchedIntentsList(): Array<ondewo_nlu_intent_pb.Intent>;
    setMatchedIntentsList(value: Array<ondewo_nlu_intent_pb.Intent>): SessionInfo;
    addMatchedIntents(value?: ondewo_nlu_intent_pb.Intent, index?: number): ondewo_nlu_intent_pb.Intent;
    clearMatchedEntityTypesList(): void;
    getMatchedEntityTypesList(): Array<ondewo_nlu_entity_type_pb.EntityType>;
    setMatchedEntityTypesList(value: Array<ondewo_nlu_entity_type_pb.EntityType>): SessionInfo;
    addMatchedEntityTypes(value?: ondewo_nlu_entity_type_pb.EntityType, index?: number): ondewo_nlu_entity_type_pb.EntityType;
    getMinIntentsConfidence(): number;
    setMinIntentsConfidence(value: number): SessionInfo;
    getMinEntityTypesConfidence(): number;
    setMinEntityTypesConfidence(value: number): SessionInfo;
    getEarliest(): number;
    setEarliest(value: number): SessionInfo;
    getLatest(): number;
    setLatest(value: number): SessionInfo;
    getNumberTurns(): number;
    setNumberTurns(value: number): SessionInfo;
    clearLabelsList(): void;
    getLabelsList(): Array<string>;
    setLabelsList(value: Array<string>): SessionInfo;
    addLabels(value: string, index?: number): string;
    clearUserIdsList(): void;
    getUserIdsList(): Array<string>;
    setUserIdsList(value: Array<string>): SessionInfo;
    addUserIds(value: string, index?: number): string;
    clearIntentTagsList(): void;
    getIntentTagsList(): Array<string>;
    setIntentTagsList(value: Array<string>): SessionInfo;
    addIntentTags(value: string, index?: number): string;
    clearInputContextStepsList(): void;
    getInputContextStepsList(): Array<SessionInfo.ContextSteps>;
    setInputContextStepsList(value: Array<SessionInfo.ContextSteps>): SessionInfo;
    addInputContextSteps(value?: SessionInfo.ContextSteps, index?: number): SessionInfo.ContextSteps;
    clearOutputContextStepsList(): void;
    getOutputContextStepsList(): Array<SessionInfo.ContextSteps>;
    setOutputContextStepsList(value: Array<SessionInfo.ContextSteps>): SessionInfo;
    addOutputContextSteps(value?: SessionInfo.ContextSteps, index?: number): SessionInfo.ContextSteps;
    getDurationInS(): number;
    setDurationInS(value: number): SessionInfo;
    getDurationInM(): number;
    setDurationInM(value: number): SessionInfo;
    getDurationInMRounded(): number;
    setDurationInMRounded(value: number): SessionInfo;
    getDurationInterval15sRounded(): number;
    setDurationInterval15sRounded(value: number): SessionInfo;
    getDurationInterval30sRounded(): number;
    setDurationInterval30sRounded(value: number): SessionInfo;
    getDurationInterval45sRounded(): number;
    setDurationInterval45sRounded(value: number): SessionInfo;
    getStartedTimeSlotPerHour(): string;
    setStartedTimeSlotPerHour(value: string): SessionInfo;
    getStartedTimeSlotPerQuarterHour(): string;
    setStartedTimeSlotPerQuarterHour(value: string): SessionInfo;
    getStartedTimeSlotPerHalfHour(): string;
    setStartedTimeSlotPerHalfHour(value: string): SessionInfo;
    getStartedTimeSlotPerDayPhase(): string;
    setStartedTimeSlotPerDayPhase(value: string): SessionInfo;
    getStartedTimeSlotPerMinute(): string;
    setStartedTimeSlotPerMinute(value: string): SessionInfo;
    getDurationInSRounded(): number;
    setDurationInSRounded(value: number): SessionInfo;
    clearPlatformsList(): void;
    getPlatformsList(): Array<ondewo_nlu_intent_pb.Intent.Message.Platform>;
    setPlatformsList(value: Array<ondewo_nlu_intent_pb.Intent.Message.Platform>): SessionInfo;
    addPlatforms(value: ondewo_nlu_intent_pb.Intent.Message.Platform, index?: number): ondewo_nlu_intent_pb.Intent.Message.Platform;
    clearAccountIdsList(): void;
    getAccountIdsList(): Array<string>;
    setAccountIdsList(value: Array<string>): SessionInfo;
    addAccountIds(value: string, index?: number): string;
    clearPropertyIdsList(): void;
    getPropertyIdsList(): Array<string>;
    setPropertyIdsList(value: Array<string>): SessionInfo;
    addPropertyIds(value: string, index?: number): string;
    clearDatastreamIdsList(): void;
    getDatastreamIdsList(): Array<string>;
    setDatastreamIdsList(value: Array<string>): SessionInfo;
    addDatastreamIds(value: string, index?: number): string;
    clearOriginIdsList(): void;
    getOriginIdsList(): Array<string>;
    setOriginIdsList(value: Array<string>): SessionInfo;
    addOriginIds(value: string, index?: number): string;
    clearIdentifiedUserIdsList(): void;
    getIdentifiedUserIdsList(): Array<string>;
    setIdentifiedUserIdsList(value: Array<string>): SessionInfo;
    addIdentifiedUserIds(value: string, index?: number): string;
    getDurationInterval60sRounded(): number;
    setDurationInterval60sRounded(value: number): SessionInfo;
    clearParentCommentList(): void;
    getParentCommentList(): Array<ondewo_nlu_common_pb.Comment>;
    setParentCommentList(value: Array<ondewo_nlu_common_pb.Comment>): SessionInfo;
    addParentComment(value?: ondewo_nlu_common_pb.Comment, index?: number): ondewo_nlu_common_pb.Comment;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SessionInfo.AsObject;
    static toObject(includeInstance: boolean, msg: SessionInfo): SessionInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SessionInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SessionInfo;
    static deserializeBinaryFromReader(message: SessionInfo, reader: jspb.BinaryReader): SessionInfo;
}

export namespace SessionInfo {
    export type AsObject = {
        languageCodesList: Array<string>,
        matchedIntentsList: Array<ondewo_nlu_intent_pb.Intent.AsObject>,
        matchedEntityTypesList: Array<ondewo_nlu_entity_type_pb.EntityType.AsObject>,
        minIntentsConfidence: number,
        minEntityTypesConfidence: number,
        earliest: number,
        latest: number,
        numberTurns: number,
        labelsList: Array<string>,
        userIdsList: Array<string>,
        intentTagsList: Array<string>,
        inputContextStepsList: Array<SessionInfo.ContextSteps.AsObject>,
        outputContextStepsList: Array<SessionInfo.ContextSteps.AsObject>,
        durationInS: number,
        durationInM: number,
        durationInMRounded: number,
        durationInterval15sRounded: number,
        durationInterval30sRounded: number,
        durationInterval45sRounded: number,
        startedTimeSlotPerHour: string,
        startedTimeSlotPerQuarterHour: string,
        startedTimeSlotPerHalfHour: string,
        startedTimeSlotPerDayPhase: string,
        startedTimeSlotPerMinute: string,
        durationInSRounded: number,
        platformsList: Array<ondewo_nlu_intent_pb.Intent.Message.Platform>,
        accountIdsList: Array<string>,
        propertyIdsList: Array<string>,
        datastreamIdsList: Array<string>,
        originIdsList: Array<string>,
        identifiedUserIdsList: Array<string>,
        durationInterval60sRounded: number,
        parentCommentList: Array<ondewo_nlu_common_pb.Comment.AsObject>,
    }


    export class ContextSteps extends jspb.Message { 
        clearContextsList(): void;
        getContextsList(): Array<ondewo_nlu_context_pb.Context>;
        setContextsList(value: Array<ondewo_nlu_context_pb.Context>): ContextSteps;
        addContexts(value?: ondewo_nlu_context_pb.Context, index?: number): ondewo_nlu_context_pb.Context;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ContextSteps.AsObject;
        static toObject(includeInstance: boolean, msg: ContextSteps): ContextSteps.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ContextSteps, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ContextSteps;
        static deserializeBinaryFromReader(message: ContextSteps, reader: jspb.BinaryReader): ContextSteps;
    }

    export namespace ContextSteps {
        export type AsObject = {
            contextsList: Array<ondewo_nlu_context_pb.Context.AsObject>,
        }
    }

}

export class ListSessionsResponse extends jspb.Message { 
    clearSessionsList(): void;
    getSessionsList(): Array<Session>;
    setSessionsList(value: Array<Session>): ListSessionsResponse;
    addSessions(value?: Session, index?: number): Session;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListSessionsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSessionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListSessionsResponse): ListSessionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSessionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSessionsResponse;
    static deserializeBinaryFromReader(message: ListSessionsResponse, reader: jspb.BinaryReader): ListSessionsResponse;
}

export namespace ListSessionsResponse {
    export type AsObject = {
        sessionsList: Array<Session.AsObject>,
        nextPageToken: string,
    }
}

export class GetSessionRequest extends jspb.Message { 
    getSessionId(): string;
    setSessionId(value: string): GetSessionRequest;
    getSessionView(): Session.View;
    setSessionView(value: Session.View): GetSessionRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetSessionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSessionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSessionRequest): GetSessionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSessionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSessionRequest;
    static deserializeBinaryFromReader(message: GetSessionRequest, reader: jspb.BinaryReader): GetSessionRequest;
}

export namespace GetSessionRequest {
    export type AsObject = {
        sessionId: string,
        sessionView: Session.View,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class CreateSessionRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): CreateSessionRequest;
    getSessionUuid(): string;
    setSessionUuid(value: string): CreateSessionRequest;
    clearLabelsList(): void;
    getLabelsList(): Array<string>;
    setLabelsList(value: Array<string>): CreateSessionRequest;
    addLabels(value: string, index?: number): string;
    clearContextsList(): void;
    getContextsList(): Array<ondewo_nlu_context_pb.Context>;
    setContextsList(value: Array<ondewo_nlu_context_pb.Context>): CreateSessionRequest;
    addContexts(value?: ondewo_nlu_context_pb.Context, index?: number): ondewo_nlu_context_pb.Context;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateSessionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateSessionRequest): CreateSessionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateSessionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateSessionRequest;
    static deserializeBinaryFromReader(message: CreateSessionRequest, reader: jspb.BinaryReader): CreateSessionRequest;
}

export namespace CreateSessionRequest {
    export type AsObject = {
        parent: string,
        sessionUuid: string,
        labelsList: Array<string>,
        contextsList: Array<ondewo_nlu_context_pb.Context.AsObject>,
    }
}

export class DeleteSessionRequest extends jspb.Message { 
    getSessionId(): string;
    setSessionId(value: string): DeleteSessionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSessionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSessionRequest): DeleteSessionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSessionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSessionRequest;
    static deserializeBinaryFromReader(message: DeleteSessionRequest, reader: jspb.BinaryReader): DeleteSessionRequest;
}

export namespace DeleteSessionRequest {
    export type AsObject = {
        sessionId: string,
    }
}

export class CreateSessionReviewRequest extends jspb.Message { 
    getSessionId(): string;
    setSessionId(value: string): CreateSessionReviewRequest;
    getParentReviewId(): string;
    setParentReviewId(value: string): CreateSessionReviewRequest;

    hasSessionReview(): boolean;
    clearSessionReview(): void;
    getSessionReview(): SessionReview | undefined;
    setSessionReview(value?: SessionReview): CreateSessionReviewRequest;
    getSessionReviewView(): SessionReview.View;
    setSessionReviewView(value: SessionReview.View): CreateSessionReviewRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateSessionReviewRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateSessionReviewRequest): CreateSessionReviewRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateSessionReviewRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateSessionReviewRequest;
    static deserializeBinaryFromReader(message: CreateSessionReviewRequest, reader: jspb.BinaryReader): CreateSessionReviewRequest;
}

export namespace CreateSessionReviewRequest {
    export type AsObject = {
        sessionId: string,
        parentReviewId: string,
        sessionReview?: SessionReview.AsObject,
        sessionReviewView: SessionReview.View,
    }
}

export class SessionReview extends jspb.Message { 
    getName(): string;
    setName(value: string): SessionReview;
    clearSessionReviewStepsList(): void;
    getSessionReviewStepsList(): Array<SessionReviewStep>;
    setSessionReviewStepsList(value: Array<SessionReviewStep>): SessionReview;
    addSessionReviewSteps(value?: SessionReviewStep, index?: number): SessionReviewStep;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): SessionReview;

    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): SessionReview;
    getCreatedBy(): string;
    setCreatedBy(value: string): SessionReview;
    getModifiedBy(): string;
    setModifiedBy(value: string): SessionReview;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SessionReview.AsObject;
    static toObject(includeInstance: boolean, msg: SessionReview): SessionReview.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SessionReview, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SessionReview;
    static deserializeBinaryFromReader(message: SessionReview, reader: jspb.BinaryReader): SessionReview;
}

export namespace SessionReview {
    export type AsObject = {
        name: string,
        sessionReviewStepsList: Array<SessionReviewStep.AsObject>,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdBy: string,
        modifiedBy: string,
    }

    export enum View {
    VIEW_UNSPECIFIED = 0,
    VIEW_FULL = 1,
    VIEW_SPARSE = 2,
    }

}

export class SessionReviewStep extends jspb.Message { 
    getName(): string;
    setName(value: string): SessionReviewStep;

    hasAnnotatedUsersays(): boolean;
    clearAnnotatedUsersays(): void;
    getAnnotatedUsersays(): ondewo_nlu_intent_pb.Intent.TrainingPhrase | undefined;
    setAnnotatedUsersays(value?: ondewo_nlu_intent_pb.Intent.TrainingPhrase): SessionReviewStep;
    getLanguageCode(): string;
    setLanguageCode(value: string): SessionReviewStep;
    clearDetectedIntentsList(): void;
    getDetectedIntentsList(): Array<DetectedIntent>;
    setDetectedIntentsList(value: Array<DetectedIntent>): SessionReviewStep;
    addDetectedIntents(value?: DetectedIntent, index?: number): DetectedIntent;
    clearContextsList(): void;
    getContextsList(): Array<ondewo_nlu_context_pb.Context>;
    setContextsList(value: Array<ondewo_nlu_context_pb.Context>): SessionReviewStep;
    addContexts(value?: ondewo_nlu_context_pb.Context, index?: number): ondewo_nlu_context_pb.Context;
    clearContextsOutList(): void;
    getContextsOutList(): Array<ondewo_nlu_context_pb.Context>;
    setContextsOutList(value: Array<ondewo_nlu_context_pb.Context>): SessionReviewStep;
    addContextsOut(value?: ondewo_nlu_context_pb.Context, index?: number): ondewo_nlu_context_pb.Context;
    getQueryTextOriginal(): string;
    setQueryTextOriginal(value: string): SessionReviewStep;
    clearPlatformsList(): void;
    getPlatformsList(): Array<ondewo_nlu_intent_pb.Intent.Message.Platform>;
    setPlatformsList(value: Array<ondewo_nlu_intent_pb.Intent.Message.Platform>): SessionReviewStep;
    addPlatforms(value: ondewo_nlu_intent_pb.Intent.Message.Platform, index?: number): ondewo_nlu_intent_pb.Intent.Message.Platform;

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): SessionReviewStep;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): SessionReviewStep;

    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): SessionReviewStep;
    getCreatedBy(): string;
    setCreatedBy(value: string): SessionReviewStep;
    getModifiedBy(): string;
    setModifiedBy(value: string): SessionReviewStep;
    clearAudioFileResourcesList(): void;
    getAudioFileResourcesList(): Array<AudioFileResource>;
    setAudioFileResourcesList(value: Array<AudioFileResource>): SessionReviewStep;
    addAudioFileResources(value?: AudioFileResource, index?: number): AudioFileResource;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SessionReviewStep.AsObject;
    static toObject(includeInstance: boolean, msg: SessionReviewStep): SessionReviewStep.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SessionReviewStep, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SessionReviewStep;
    static deserializeBinaryFromReader(message: SessionReviewStep, reader: jspb.BinaryReader): SessionReviewStep;
}

export namespace SessionReviewStep {
    export type AsObject = {
        name: string,
        annotatedUsersays?: ondewo_nlu_intent_pb.Intent.TrainingPhrase.AsObject,
        languageCode: string,
        detectedIntentsList: Array<DetectedIntent.AsObject>,
        contextsList: Array<ondewo_nlu_context_pb.Context.AsObject>,
        contextsOutList: Array<ondewo_nlu_context_pb.Context.AsObject>,
        queryTextOriginal: string,
        platformsList: Array<ondewo_nlu_intent_pb.Intent.Message.Platform>,
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdBy: string,
        modifiedBy: string,
        audioFileResourcesList: Array<AudioFileResource.AsObject>,
    }
}

export class DetectedIntent extends jspb.Message { 

    hasIntent(): boolean;
    clearIntent(): void;
    getIntent(): ondewo_nlu_intent_pb.Intent | undefined;
    setIntent(value?: ondewo_nlu_intent_pb.Intent): DetectedIntent;
    getScore(): number;
    setScore(value: number): DetectedIntent;
    getAlgorithm(): string;
    setAlgorithm(value: string): DetectedIntent;
    clearFulfillmentMessagesList(): void;
    getFulfillmentMessagesList(): Array<ondewo_nlu_intent_pb.Intent.Message>;
    setFulfillmentMessagesList(value: Array<ondewo_nlu_intent_pb.Intent.Message>): DetectedIntent;
    addFulfillmentMessages(value?: ondewo_nlu_intent_pb.Intent.Message, index?: number): ondewo_nlu_intent_pb.Intent.Message;
    getRequiredParamMissing(): boolean;
    setRequiredParamMissing(value: boolean): DetectedIntent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DetectedIntent.AsObject;
    static toObject(includeInstance: boolean, msg: DetectedIntent): DetectedIntent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DetectedIntent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DetectedIntent;
    static deserializeBinaryFromReader(message: DetectedIntent, reader: jspb.BinaryReader): DetectedIntent;
}

export namespace DetectedIntent {
    export type AsObject = {
        intent?: ondewo_nlu_intent_pb.Intent.AsObject,
        score: number,
        algorithm: string,
        fulfillmentMessagesList: Array<ondewo_nlu_intent_pb.Intent.Message.AsObject>,
        requiredParamMissing: boolean,
    }
}

export class ListSessionLabelsRequest extends jspb.Message { 
    getSessionId(): string;
    setSessionId(value: string): ListSessionLabelsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSessionLabelsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSessionLabelsRequest): ListSessionLabelsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSessionLabelsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSessionLabelsRequest;
    static deserializeBinaryFromReader(message: ListSessionLabelsRequest, reader: jspb.BinaryReader): ListSessionLabelsRequest;
}

export namespace ListSessionLabelsRequest {
    export type AsObject = {
        sessionId: string,
    }
}

export class ListSessionLabelsOfAllSessionsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ListSessionLabelsOfAllSessionsRequest;

    hasSessionFilter(): boolean;
    clearSessionFilter(): void;
    getSessionFilter(): SessionFilter | undefined;
    setSessionFilter(value?: SessionFilter): ListSessionLabelsOfAllSessionsRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListSessionLabelsOfAllSessionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSessionLabelsOfAllSessionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSessionLabelsOfAllSessionsRequest): ListSessionLabelsOfAllSessionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSessionLabelsOfAllSessionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSessionLabelsOfAllSessionsRequest;
    static deserializeBinaryFromReader(message: ListSessionLabelsOfAllSessionsRequest, reader: jspb.BinaryReader): ListSessionLabelsOfAllSessionsRequest;
}

export namespace ListSessionLabelsOfAllSessionsRequest {
    export type AsObject = {
        parent: string,
        sessionFilter?: SessionFilter.AsObject,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class ListSessionLabelsResponse extends jspb.Message { 
    clearLabelsList(): void;
    getLabelsList(): Array<string>;
    setLabelsList(value: Array<string>): ListSessionLabelsResponse;
    addLabels(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSessionLabelsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListSessionLabelsResponse): ListSessionLabelsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSessionLabelsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSessionLabelsResponse;
    static deserializeBinaryFromReader(message: ListSessionLabelsResponse, reader: jspb.BinaryReader): ListSessionLabelsResponse;
}

export namespace ListSessionLabelsResponse {
    export type AsObject = {
        labelsList: Array<string>,
    }
}

export class ListLanguageCodesOfAllSessionsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ListLanguageCodesOfAllSessionsRequest;

    hasSessionFilter(): boolean;
    clearSessionFilter(): void;
    getSessionFilter(): SessionFilter | undefined;
    setSessionFilter(value?: SessionFilter): ListLanguageCodesOfAllSessionsRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListLanguageCodesOfAllSessionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLanguageCodesOfAllSessionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListLanguageCodesOfAllSessionsRequest): ListLanguageCodesOfAllSessionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLanguageCodesOfAllSessionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLanguageCodesOfAllSessionsRequest;
    static deserializeBinaryFromReader(message: ListLanguageCodesOfAllSessionsRequest, reader: jspb.BinaryReader): ListLanguageCodesOfAllSessionsRequest;
}

export namespace ListLanguageCodesOfAllSessionsRequest {
    export type AsObject = {
        parent: string,
        sessionFilter?: SessionFilter.AsObject,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class ListLanguageCodesResponse extends jspb.Message { 
    clearLanguageCodesList(): void;
    getLanguageCodesList(): Array<string>;
    setLanguageCodesList(value: Array<string>): ListLanguageCodesResponse;
    addLanguageCodes(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLanguageCodesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListLanguageCodesResponse): ListLanguageCodesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLanguageCodesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLanguageCodesResponse;
    static deserializeBinaryFromReader(message: ListLanguageCodesResponse, reader: jspb.BinaryReader): ListLanguageCodesResponse;
}

export namespace ListLanguageCodesResponse {
    export type AsObject = {
        languageCodesList: Array<string>,
    }
}

export class ListMatchedIntentsOfAllSessionsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ListMatchedIntentsOfAllSessionsRequest;

    hasSessionFilter(): boolean;
    clearSessionFilter(): void;
    getSessionFilter(): SessionFilter | undefined;
    setSessionFilter(value?: SessionFilter): ListMatchedIntentsOfAllSessionsRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListMatchedIntentsOfAllSessionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListMatchedIntentsOfAllSessionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListMatchedIntentsOfAllSessionsRequest): ListMatchedIntentsOfAllSessionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListMatchedIntentsOfAllSessionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListMatchedIntentsOfAllSessionsRequest;
    static deserializeBinaryFromReader(message: ListMatchedIntentsOfAllSessionsRequest, reader: jspb.BinaryReader): ListMatchedIntentsOfAllSessionsRequest;
}

export namespace ListMatchedIntentsOfAllSessionsRequest {
    export type AsObject = {
        parent: string,
        sessionFilter?: SessionFilter.AsObject,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class ListMatchedIntentsResponse extends jspb.Message { 
    clearMatchedIntentsList(): void;
    getMatchedIntentsList(): Array<string>;
    setMatchedIntentsList(value: Array<string>): ListMatchedIntentsResponse;
    addMatchedIntents(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListMatchedIntentsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListMatchedIntentsResponse): ListMatchedIntentsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListMatchedIntentsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListMatchedIntentsResponse;
    static deserializeBinaryFromReader(message: ListMatchedIntentsResponse, reader: jspb.BinaryReader): ListMatchedIntentsResponse;
}

export namespace ListMatchedIntentsResponse {
    export type AsObject = {
        matchedIntentsList: Array<string>,
    }
}

export class ListMatchedEntityTypesOfAllSessionsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ListMatchedEntityTypesOfAllSessionsRequest;

    hasSessionFilter(): boolean;
    clearSessionFilter(): void;
    getSessionFilter(): SessionFilter | undefined;
    setSessionFilter(value?: SessionFilter): ListMatchedEntityTypesOfAllSessionsRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListMatchedEntityTypesOfAllSessionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListMatchedEntityTypesOfAllSessionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListMatchedEntityTypesOfAllSessionsRequest): ListMatchedEntityTypesOfAllSessionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListMatchedEntityTypesOfAllSessionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListMatchedEntityTypesOfAllSessionsRequest;
    static deserializeBinaryFromReader(message: ListMatchedEntityTypesOfAllSessionsRequest, reader: jspb.BinaryReader): ListMatchedEntityTypesOfAllSessionsRequest;
}

export namespace ListMatchedEntityTypesOfAllSessionsRequest {
    export type AsObject = {
        parent: string,
        sessionFilter?: SessionFilter.AsObject,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class ListMatchedEntityTypesResponse extends jspb.Message { 
    clearMatchedEntityTypesList(): void;
    getMatchedEntityTypesList(): Array<string>;
    setMatchedEntityTypesList(value: Array<string>): ListMatchedEntityTypesResponse;
    addMatchedEntityTypes(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListMatchedEntityTypesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListMatchedEntityTypesResponse): ListMatchedEntityTypesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListMatchedEntityTypesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListMatchedEntityTypesResponse;
    static deserializeBinaryFromReader(message: ListMatchedEntityTypesResponse, reader: jspb.BinaryReader): ListMatchedEntityTypesResponse;
}

export namespace ListMatchedEntityTypesResponse {
    export type AsObject = {
        matchedEntityTypesList: Array<string>,
    }
}

export class ListUserIdsOfAllSessionsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ListUserIdsOfAllSessionsRequest;

    hasSessionFilter(): boolean;
    clearSessionFilter(): void;
    getSessionFilter(): SessionFilter | undefined;
    setSessionFilter(value?: SessionFilter): ListUserIdsOfAllSessionsRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListUserIdsOfAllSessionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListUserIdsOfAllSessionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListUserIdsOfAllSessionsRequest): ListUserIdsOfAllSessionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListUserIdsOfAllSessionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListUserIdsOfAllSessionsRequest;
    static deserializeBinaryFromReader(message: ListUserIdsOfAllSessionsRequest, reader: jspb.BinaryReader): ListUserIdsOfAllSessionsRequest;
}

export namespace ListUserIdsOfAllSessionsRequest {
    export type AsObject = {
        parent: string,
        sessionFilter?: SessionFilter.AsObject,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class ListUserIdsResponse extends jspb.Message { 
    clearUserIdsList(): void;
    getUserIdsList(): Array<string>;
    setUserIdsList(value: Array<string>): ListUserIdsResponse;
    addUserIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListUserIdsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListUserIdsResponse): ListUserIdsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListUserIdsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListUserIdsResponse;
    static deserializeBinaryFromReader(message: ListUserIdsResponse, reader: jspb.BinaryReader): ListUserIdsResponse;
}

export namespace ListUserIdsResponse {
    export type AsObject = {
        userIdsList: Array<string>,
    }
}

export class ListIdentifiedUserIdsOfAllSessionsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ListIdentifiedUserIdsOfAllSessionsRequest;

    hasSessionFilter(): boolean;
    clearSessionFilter(): void;
    getSessionFilter(): SessionFilter | undefined;
    setSessionFilter(value?: SessionFilter): ListIdentifiedUserIdsOfAllSessionsRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListIdentifiedUserIdsOfAllSessionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListIdentifiedUserIdsOfAllSessionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListIdentifiedUserIdsOfAllSessionsRequest): ListIdentifiedUserIdsOfAllSessionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListIdentifiedUserIdsOfAllSessionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListIdentifiedUserIdsOfAllSessionsRequest;
    static deserializeBinaryFromReader(message: ListIdentifiedUserIdsOfAllSessionsRequest, reader: jspb.BinaryReader): ListIdentifiedUserIdsOfAllSessionsRequest;
}

export namespace ListIdentifiedUserIdsOfAllSessionsRequest {
    export type AsObject = {
        parent: string,
        sessionFilter?: SessionFilter.AsObject,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class ListIdentifiedUserIdsResponse extends jspb.Message { 
    clearIdentifiedUserIdsList(): void;
    getIdentifiedUserIdsList(): Array<string>;
    setIdentifiedUserIdsList(value: Array<string>): ListIdentifiedUserIdsResponse;
    addIdentifiedUserIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListIdentifiedUserIdsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListIdentifiedUserIdsResponse): ListIdentifiedUserIdsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListIdentifiedUserIdsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListIdentifiedUserIdsResponse;
    static deserializeBinaryFromReader(message: ListIdentifiedUserIdsResponse, reader: jspb.BinaryReader): ListIdentifiedUserIdsResponse;
}

export namespace ListIdentifiedUserIdsResponse {
    export type AsObject = {
        identifiedUserIdsList: Array<string>,
    }
}

export class ListTagsOfAllSessionsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ListTagsOfAllSessionsRequest;

    hasSessionFilter(): boolean;
    clearSessionFilter(): void;
    getSessionFilter(): SessionFilter | undefined;
    setSessionFilter(value?: SessionFilter): ListTagsOfAllSessionsRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListTagsOfAllSessionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTagsOfAllSessionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListTagsOfAllSessionsRequest): ListTagsOfAllSessionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTagsOfAllSessionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTagsOfAllSessionsRequest;
    static deserializeBinaryFromReader(message: ListTagsOfAllSessionsRequest, reader: jspb.BinaryReader): ListTagsOfAllSessionsRequest;
}

export namespace ListTagsOfAllSessionsRequest {
    export type AsObject = {
        parent: string,
        sessionFilter?: SessionFilter.AsObject,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class ListTagsResponse extends jspb.Message { 
    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): ListTagsResponse;
    addTags(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTagsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListTagsResponse): ListTagsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTagsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTagsResponse;
    static deserializeBinaryFromReader(message: ListTagsResponse, reader: jspb.BinaryReader): ListTagsResponse;
}

export namespace ListTagsResponse {
    export type AsObject = {
        tagsList: Array<string>,
    }
}

export class ListInputContextsOfAllSessionsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ListInputContextsOfAllSessionsRequest;

    hasSessionFilter(): boolean;
    clearSessionFilter(): void;
    getSessionFilter(): SessionFilter | undefined;
    setSessionFilter(value?: SessionFilter): ListInputContextsOfAllSessionsRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListInputContextsOfAllSessionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListInputContextsOfAllSessionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListInputContextsOfAllSessionsRequest): ListInputContextsOfAllSessionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListInputContextsOfAllSessionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListInputContextsOfAllSessionsRequest;
    static deserializeBinaryFromReader(message: ListInputContextsOfAllSessionsRequest, reader: jspb.BinaryReader): ListInputContextsOfAllSessionsRequest;
}

export namespace ListInputContextsOfAllSessionsRequest {
    export type AsObject = {
        parent: string,
        sessionFilter?: SessionFilter.AsObject,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class ListInputContextsResponse extends jspb.Message { 
    clearInputContextsList(): void;
    getInputContextsList(): Array<string>;
    setInputContextsList(value: Array<string>): ListInputContextsResponse;
    addInputContexts(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListInputContextsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListInputContextsResponse): ListInputContextsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListInputContextsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListInputContextsResponse;
    static deserializeBinaryFromReader(message: ListInputContextsResponse, reader: jspb.BinaryReader): ListInputContextsResponse;
}

export namespace ListInputContextsResponse {
    export type AsObject = {
        inputContextsList: Array<string>,
    }
}

export class ListOutputContextsOfAllSessionsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ListOutputContextsOfAllSessionsRequest;

    hasSessionFilter(): boolean;
    clearSessionFilter(): void;
    getSessionFilter(): SessionFilter | undefined;
    setSessionFilter(value?: SessionFilter): ListOutputContextsOfAllSessionsRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListOutputContextsOfAllSessionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListOutputContextsOfAllSessionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListOutputContextsOfAllSessionsRequest): ListOutputContextsOfAllSessionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListOutputContextsOfAllSessionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListOutputContextsOfAllSessionsRequest;
    static deserializeBinaryFromReader(message: ListOutputContextsOfAllSessionsRequest, reader: jspb.BinaryReader): ListOutputContextsOfAllSessionsRequest;
}

export namespace ListOutputContextsOfAllSessionsRequest {
    export type AsObject = {
        parent: string,
        sessionFilter?: SessionFilter.AsObject,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class ListOutputContextsResponse extends jspb.Message { 
    clearOutputContextsList(): void;
    getOutputContextsList(): Array<string>;
    setOutputContextsList(value: Array<string>): ListOutputContextsResponse;
    addOutputContexts(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListOutputContextsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListOutputContextsResponse): ListOutputContextsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListOutputContextsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListOutputContextsResponse;
    static deserializeBinaryFromReader(message: ListOutputContextsResponse, reader: jspb.BinaryReader): ListOutputContextsResponse;
}

export namespace ListOutputContextsResponse {
    export type AsObject = {
        outputContextsList: Array<string>,
    }
}

export class ListPlatformsOfAllSessionsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ListPlatformsOfAllSessionsRequest;

    hasSessionFilter(): boolean;
    clearSessionFilter(): void;
    getSessionFilter(): SessionFilter | undefined;
    setSessionFilter(value?: SessionFilter): ListPlatformsOfAllSessionsRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListPlatformsOfAllSessionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPlatformsOfAllSessionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListPlatformsOfAllSessionsRequest): ListPlatformsOfAllSessionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPlatformsOfAllSessionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPlatformsOfAllSessionsRequest;
    static deserializeBinaryFromReader(message: ListPlatformsOfAllSessionsRequest, reader: jspb.BinaryReader): ListPlatformsOfAllSessionsRequest;
}

export namespace ListPlatformsOfAllSessionsRequest {
    export type AsObject = {
        parent: string,
        sessionFilter?: SessionFilter.AsObject,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class ListPlatformsResponse extends jspb.Message { 
    clearPlatformsList(): void;
    getPlatformsList(): Array<string>;
    setPlatformsList(value: Array<string>): ListPlatformsResponse;
    addPlatforms(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPlatformsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListPlatformsResponse): ListPlatformsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPlatformsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPlatformsResponse;
    static deserializeBinaryFromReader(message: ListPlatformsResponse, reader: jspb.BinaryReader): ListPlatformsResponse;
}

export namespace ListPlatformsResponse {
    export type AsObject = {
        platformsList: Array<string>,
    }
}

export class ListAccountIdsOfAllSessionsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ListAccountIdsOfAllSessionsRequest;

    hasSessionFilter(): boolean;
    clearSessionFilter(): void;
    getSessionFilter(): SessionFilter | undefined;
    setSessionFilter(value?: SessionFilter): ListAccountIdsOfAllSessionsRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListAccountIdsOfAllSessionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAccountIdsOfAllSessionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListAccountIdsOfAllSessionsRequest): ListAccountIdsOfAllSessionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAccountIdsOfAllSessionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAccountIdsOfAllSessionsRequest;
    static deserializeBinaryFromReader(message: ListAccountIdsOfAllSessionsRequest, reader: jspb.BinaryReader): ListAccountIdsOfAllSessionsRequest;
}

export namespace ListAccountIdsOfAllSessionsRequest {
    export type AsObject = {
        parent: string,
        sessionFilter?: SessionFilter.AsObject,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class ListAccountIdsResponse extends jspb.Message { 
    clearAccountIdsList(): void;
    getAccountIdsList(): Array<string>;
    setAccountIdsList(value: Array<string>): ListAccountIdsResponse;
    addAccountIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAccountIdsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListAccountIdsResponse): ListAccountIdsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAccountIdsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAccountIdsResponse;
    static deserializeBinaryFromReader(message: ListAccountIdsResponse, reader: jspb.BinaryReader): ListAccountIdsResponse;
}

export namespace ListAccountIdsResponse {
    export type AsObject = {
        accountIdsList: Array<string>,
    }
}

export class ListPropertyIdsOfAllSessionsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ListPropertyIdsOfAllSessionsRequest;

    hasSessionFilter(): boolean;
    clearSessionFilter(): void;
    getSessionFilter(): SessionFilter | undefined;
    setSessionFilter(value?: SessionFilter): ListPropertyIdsOfAllSessionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPropertyIdsOfAllSessionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListPropertyIdsOfAllSessionsRequest): ListPropertyIdsOfAllSessionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPropertyIdsOfAllSessionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPropertyIdsOfAllSessionsRequest;
    static deserializeBinaryFromReader(message: ListPropertyIdsOfAllSessionsRequest, reader: jspb.BinaryReader): ListPropertyIdsOfAllSessionsRequest;
}

export namespace ListPropertyIdsOfAllSessionsRequest {
    export type AsObject = {
        parent: string,
        sessionFilter?: SessionFilter.AsObject,
    }
}

export class ListPropertyIdsResponse extends jspb.Message { 
    clearPropertyIdsList(): void;
    getPropertyIdsList(): Array<string>;
    setPropertyIdsList(value: Array<string>): ListPropertyIdsResponse;
    addPropertyIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPropertyIdsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListPropertyIdsResponse): ListPropertyIdsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPropertyIdsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPropertyIdsResponse;
    static deserializeBinaryFromReader(message: ListPropertyIdsResponse, reader: jspb.BinaryReader): ListPropertyIdsResponse;
}

export namespace ListPropertyIdsResponse {
    export type AsObject = {
        propertyIdsList: Array<string>,
    }
}

export class ListDatastreamIdsOfAllSessionsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ListDatastreamIdsOfAllSessionsRequest;

    hasSessionFilter(): boolean;
    clearSessionFilter(): void;
    getSessionFilter(): SessionFilter | undefined;
    setSessionFilter(value?: SessionFilter): ListDatastreamIdsOfAllSessionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDatastreamIdsOfAllSessionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListDatastreamIdsOfAllSessionsRequest): ListDatastreamIdsOfAllSessionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDatastreamIdsOfAllSessionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDatastreamIdsOfAllSessionsRequest;
    static deserializeBinaryFromReader(message: ListDatastreamIdsOfAllSessionsRequest, reader: jspb.BinaryReader): ListDatastreamIdsOfAllSessionsRequest;
}

export namespace ListDatastreamIdsOfAllSessionsRequest {
    export type AsObject = {
        parent: string,
        sessionFilter?: SessionFilter.AsObject,
    }
}

export class ListDatastreamIdsResponse extends jspb.Message { 
    clearDatastreamIdsList(): void;
    getDatastreamIdsList(): Array<string>;
    setDatastreamIdsList(value: Array<string>): ListDatastreamIdsResponse;
    addDatastreamIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDatastreamIdsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListDatastreamIdsResponse): ListDatastreamIdsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDatastreamIdsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDatastreamIdsResponse;
    static deserializeBinaryFromReader(message: ListDatastreamIdsResponse, reader: jspb.BinaryReader): ListDatastreamIdsResponse;
}

export namespace ListDatastreamIdsResponse {
    export type AsObject = {
        datastreamIdsList: Array<string>,
    }
}

export class ListOriginIdsOfAllSessionsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ListOriginIdsOfAllSessionsRequest;

    hasSessionFilter(): boolean;
    clearSessionFilter(): void;
    getSessionFilter(): SessionFilter | undefined;
    setSessionFilter(value?: SessionFilter): ListOriginIdsOfAllSessionsRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListOriginIdsOfAllSessionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListOriginIdsOfAllSessionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListOriginIdsOfAllSessionsRequest): ListOriginIdsOfAllSessionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListOriginIdsOfAllSessionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListOriginIdsOfAllSessionsRequest;
    static deserializeBinaryFromReader(message: ListOriginIdsOfAllSessionsRequest, reader: jspb.BinaryReader): ListOriginIdsOfAllSessionsRequest;
}

export namespace ListOriginIdsOfAllSessionsRequest {
    export type AsObject = {
        parent: string,
        sessionFilter?: SessionFilter.AsObject,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class ListOriginIdsResponse extends jspb.Message { 
    clearOriginIdsList(): void;
    getOriginIdsList(): Array<string>;
    setOriginIdsList(value: Array<string>): ListOriginIdsResponse;
    addOriginIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListOriginIdsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListOriginIdsResponse): ListOriginIdsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListOriginIdsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListOriginIdsResponse;
    static deserializeBinaryFromReader(message: ListOriginIdsResponse, reader: jspb.BinaryReader): ListOriginIdsResponse;
}

export namespace ListOriginIdsResponse {
    export type AsObject = {
        originIdsList: Array<string>,
    }
}

export class AddSessionLabelsRequest extends jspb.Message { 
    getSessionId(): string;
    setSessionId(value: string): AddSessionLabelsRequest;
    clearLabelsList(): void;
    getLabelsList(): Array<string>;
    setLabelsList(value: Array<string>): AddSessionLabelsRequest;
    addLabels(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddSessionLabelsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddSessionLabelsRequest): AddSessionLabelsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddSessionLabelsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddSessionLabelsRequest;
    static deserializeBinaryFromReader(message: AddSessionLabelsRequest, reader: jspb.BinaryReader): AddSessionLabelsRequest;
}

export namespace AddSessionLabelsRequest {
    export type AsObject = {
        sessionId: string,
        labelsList: Array<string>,
    }
}

export class DeleteSessionLabelsRequest extends jspb.Message { 
    getSessionId(): string;
    setSessionId(value: string): DeleteSessionLabelsRequest;
    clearLabelsList(): void;
    getLabelsList(): Array<string>;
    setLabelsList(value: Array<string>): DeleteSessionLabelsRequest;
    addLabels(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSessionLabelsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSessionLabelsRequest): DeleteSessionLabelsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSessionLabelsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSessionLabelsRequest;
    static deserializeBinaryFromReader(message: DeleteSessionLabelsRequest, reader: jspb.BinaryReader): DeleteSessionLabelsRequest;
}

export namespace DeleteSessionLabelsRequest {
    export type AsObject = {
        sessionId: string,
        labelsList: Array<string>,
    }
}

export class AddSessionCommentRequest extends jspb.Message { 
    getSessionId(): string;
    setSessionId(value: string): AddSessionCommentRequest;

    hasComment(): boolean;
    clearComment(): void;
    getComment(): ondewo_nlu_common_pb.Comment | undefined;
    setComment(value?: ondewo_nlu_common_pb.Comment): AddSessionCommentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddSessionCommentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddSessionCommentRequest): AddSessionCommentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddSessionCommentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddSessionCommentRequest;
    static deserializeBinaryFromReader(message: AddSessionCommentRequest, reader: jspb.BinaryReader): AddSessionCommentRequest;
}

export namespace AddSessionCommentRequest {
    export type AsObject = {
        sessionId: string,
        comment?: ondewo_nlu_common_pb.Comment.AsObject,
    }
}

export class DeleteSessionCommentsRequest extends jspb.Message { 
    getSessionId(): string;
    setSessionId(value: string): DeleteSessionCommentsRequest;
    clearCommentNamesList(): void;
    getCommentNamesList(): Array<string>;
    setCommentNamesList(value: Array<string>): DeleteSessionCommentsRequest;
    addCommentNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSessionCommentsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSessionCommentsRequest): DeleteSessionCommentsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSessionCommentsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSessionCommentsRequest;
    static deserializeBinaryFromReader(message: DeleteSessionCommentsRequest, reader: jspb.BinaryReader): DeleteSessionCommentsRequest;
}

export namespace DeleteSessionCommentsRequest {
    export type AsObject = {
        sessionId: string,
        commentNamesList: Array<string>,
    }
}

export class UpdateSessionCommentsRequest extends jspb.Message { 
    getSessionId(): string;
    setSessionId(value: string): UpdateSessionCommentsRequest;

    hasComment(): boolean;
    clearComment(): void;
    getComment(): ondewo_nlu_common_pb.Comment | undefined;
    setComment(value?: ondewo_nlu_common_pb.Comment): UpdateSessionCommentsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSessionCommentsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSessionCommentsRequest): UpdateSessionCommentsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSessionCommentsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSessionCommentsRequest;
    static deserializeBinaryFromReader(message: UpdateSessionCommentsRequest, reader: jspb.BinaryReader): UpdateSessionCommentsRequest;
}

export namespace UpdateSessionCommentsRequest {
    export type AsObject = {
        sessionId: string,
        comment?: ondewo_nlu_common_pb.Comment.AsObject,
    }
}

export class ListSessionCommentsRequest extends jspb.Message { 
    getSessionId(): string;
    setSessionId(value: string): ListSessionCommentsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListSessionCommentsRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListSessionCommentsRequest;

    hasIsResolved(): boolean;
    clearIsResolved(): void;
    getIsResolved(): boolean | undefined;
    setIsResolved(value: boolean): ListSessionCommentsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSessionCommentsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSessionCommentsRequest): ListSessionCommentsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSessionCommentsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSessionCommentsRequest;
    static deserializeBinaryFromReader(message: ListSessionCommentsRequest, reader: jspb.BinaryReader): ListSessionCommentsRequest;
}

export namespace ListSessionCommentsRequest {
    export type AsObject = {
        sessionId: string,
        pageToken: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        isResolved?: boolean,
    }
}

export class ListSessionCommentsOfAllSessionsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ListSessionCommentsOfAllSessionsRequest;

    hasSessionFilter(): boolean;
    clearSessionFilter(): void;
    getSessionFilter(): SessionFilter | undefined;
    setSessionFilter(value?: SessionFilter): ListSessionCommentsOfAllSessionsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListSessionCommentsOfAllSessionsRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListSessionCommentsOfAllSessionsRequest;

    hasIsResolved(): boolean;
    clearIsResolved(): void;
    getIsResolved(): boolean | undefined;
    setIsResolved(value: boolean): ListSessionCommentsOfAllSessionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSessionCommentsOfAllSessionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSessionCommentsOfAllSessionsRequest): ListSessionCommentsOfAllSessionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSessionCommentsOfAllSessionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSessionCommentsOfAllSessionsRequest;
    static deserializeBinaryFromReader(message: ListSessionCommentsOfAllSessionsRequest, reader: jspb.BinaryReader): ListSessionCommentsOfAllSessionsRequest;
}

export namespace ListSessionCommentsOfAllSessionsRequest {
    export type AsObject = {
        parent: string,
        sessionFilter?: SessionFilter.AsObject,
        pageToken: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        isResolved?: boolean,
    }
}

export class ListSessionCommentsResponse extends jspb.Message { 
    clearCommentList(): void;
    getCommentList(): Array<ondewo_nlu_common_pb.Comment>;
    setCommentList(value: Array<ondewo_nlu_common_pb.Comment>): ListSessionCommentsResponse;
    addComment(value?: ondewo_nlu_common_pb.Comment, index?: number): ondewo_nlu_common_pb.Comment;
    getPageToken(): string;
    setPageToken(value: string): ListSessionCommentsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSessionCommentsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListSessionCommentsResponse): ListSessionCommentsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSessionCommentsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSessionCommentsResponse;
    static deserializeBinaryFromReader(message: ListSessionCommentsResponse, reader: jspb.BinaryReader): ListSessionCommentsResponse;
}

export namespace ListSessionCommentsResponse {
    export type AsObject = {
        commentList: Array<ondewo_nlu_common_pb.Comment.AsObject>,
        pageToken: string,
    }
}

export class SessionFeedback extends jspb.Message { 
    getName(): string;
    setName(value: string): SessionFeedback;
    getSessionId(): string;
    setSessionId(value: string): SessionFeedback;
    getSessionStepId(): string;
    setSessionStepId(value: string): SessionFeedback;
    getResponseId(): string;
    setResponseId(value: string): SessionFeedback;
    getSessionStepLlmTelemetryId(): string;
    setSessionStepLlmTelemetryId(value: string): SessionFeedback;
    getRating(): FeedbackRating;
    setRating(value: FeedbackRating): SessionFeedback;
    getCategoricalValue(): string;
    setCategoricalValue(value: string): SessionFeedback;

    hasScore(): boolean;
    clearScore(): void;
    getScore(): number | undefined;
    setScore(value: number): SessionFeedback;
    getComment(): string;
    setComment(value: string): SessionFeedback;
    getCriterion(): string;
    setCriterion(value: string): SessionFeedback;
    getAuthorType(): FeedbackAuthorType;
    setAuthorType(value: FeedbackAuthorType): SessionFeedback;
    getAnnotatorUserId(): string;
    setAnnotatorUserId(value: string): SessionFeedback;
    getOriginId(): string;
    setOriginId(value: string): SessionFeedback;
    getIdentifiedUserId(): string;
    setIdentifiedUserId(value: string): SessionFeedback;

    hasRaw(): boolean;
    clearRaw(): void;
    getRaw(): google_protobuf_struct_pb.Struct | undefined;
    setRaw(value?: google_protobuf_struct_pb.Struct): SessionFeedback;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): SessionFeedback;

    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): SessionFeedback;
    getCreatedBy(): string;
    setCreatedBy(value: string): SessionFeedback;
    getModifiedBy(): string;
    setModifiedBy(value: string): SessionFeedback;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SessionFeedback.AsObject;
    static toObject(includeInstance: boolean, msg: SessionFeedback): SessionFeedback.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SessionFeedback, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SessionFeedback;
    static deserializeBinaryFromReader(message: SessionFeedback, reader: jspb.BinaryReader): SessionFeedback;
}

export namespace SessionFeedback {
    export type AsObject = {
        name: string,
        sessionId: string,
        sessionStepId: string,
        responseId: string,
        sessionStepLlmTelemetryId: string,
        rating: FeedbackRating,
        categoricalValue: string,
        score?: number,
        comment: string,
        criterion: string,
        authorType: FeedbackAuthorType,
        annotatorUserId: string,
        originId: string,
        identifiedUserId: string,
        raw?: google_protobuf_struct_pb.Struct.AsObject,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdBy: string,
        modifiedBy: string,
    }
}

export class AddSessionFeedbackRequest extends jspb.Message { 
    getSessionId(): string;
    setSessionId(value: string): AddSessionFeedbackRequest;

    hasFeedback(): boolean;
    clearFeedback(): void;
    getFeedback(): SessionFeedback | undefined;
    setFeedback(value?: SessionFeedback): AddSessionFeedbackRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddSessionFeedbackRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddSessionFeedbackRequest): AddSessionFeedbackRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddSessionFeedbackRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddSessionFeedbackRequest;
    static deserializeBinaryFromReader(message: AddSessionFeedbackRequest, reader: jspb.BinaryReader): AddSessionFeedbackRequest;
}

export namespace AddSessionFeedbackRequest {
    export type AsObject = {
        sessionId: string,
        feedback?: SessionFeedback.AsObject,
    }
}

export class AddSessionStepFeedbackRequest extends jspb.Message { 
    getSessionId(): string;
    setSessionId(value: string): AddSessionStepFeedbackRequest;
    getSessionStepId(): string;
    setSessionStepId(value: string): AddSessionStepFeedbackRequest;

    hasFeedback(): boolean;
    clearFeedback(): void;
    getFeedback(): SessionFeedback | undefined;
    setFeedback(value?: SessionFeedback): AddSessionStepFeedbackRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddSessionStepFeedbackRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddSessionStepFeedbackRequest): AddSessionStepFeedbackRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddSessionStepFeedbackRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddSessionStepFeedbackRequest;
    static deserializeBinaryFromReader(message: AddSessionStepFeedbackRequest, reader: jspb.BinaryReader): AddSessionStepFeedbackRequest;
}

export namespace AddSessionStepFeedbackRequest {
    export type AsObject = {
        sessionId: string,
        sessionStepId: string,
        feedback?: SessionFeedback.AsObject,
    }
}

export class GetSessionFeedbackRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GetSessionFeedbackRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetSessionFeedbackRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSessionFeedbackRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSessionFeedbackRequest): GetSessionFeedbackRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSessionFeedbackRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSessionFeedbackRequest;
    static deserializeBinaryFromReader(message: GetSessionFeedbackRequest, reader: jspb.BinaryReader): GetSessionFeedbackRequest;
}

export namespace GetSessionFeedbackRequest {
    export type AsObject = {
        name: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class UpdateSessionFeedbackRequest extends jspb.Message { 

    hasFeedback(): boolean;
    clearFeedback(): void;
    getFeedback(): SessionFeedback | undefined;
    setFeedback(value?: SessionFeedback): UpdateSessionFeedbackRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateSessionFeedbackRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSessionFeedbackRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSessionFeedbackRequest): UpdateSessionFeedbackRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSessionFeedbackRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSessionFeedbackRequest;
    static deserializeBinaryFromReader(message: UpdateSessionFeedbackRequest, reader: jspb.BinaryReader): UpdateSessionFeedbackRequest;
}

export namespace UpdateSessionFeedbackRequest {
    export type AsObject = {
        feedback?: SessionFeedback.AsObject,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class DeleteSessionFeedbackRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): DeleteSessionFeedbackRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSessionFeedbackRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSessionFeedbackRequest): DeleteSessionFeedbackRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSessionFeedbackRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSessionFeedbackRequest;
    static deserializeBinaryFromReader(message: DeleteSessionFeedbackRequest, reader: jspb.BinaryReader): DeleteSessionFeedbackRequest;
}

export namespace DeleteSessionFeedbackRequest {
    export type AsObject = {
        name: string,
    }
}

export class ListSessionFeedbackRequest extends jspb.Message { 
    getSessionId(): string;
    setSessionId(value: string): ListSessionFeedbackRequest;
    getPageToken(): string;
    setPageToken(value: string): ListSessionFeedbackRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListSessionFeedbackRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSessionFeedbackRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSessionFeedbackRequest): ListSessionFeedbackRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSessionFeedbackRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSessionFeedbackRequest;
    static deserializeBinaryFromReader(message: ListSessionFeedbackRequest, reader: jspb.BinaryReader): ListSessionFeedbackRequest;
}

export namespace ListSessionFeedbackRequest {
    export type AsObject = {
        sessionId: string,
        pageToken: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class ListSessionFeedbackOfAllSessionsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ListSessionFeedbackOfAllSessionsRequest;

    hasSessionFilter(): boolean;
    clearSessionFilter(): void;
    getSessionFilter(): SessionFilter | undefined;
    setSessionFilter(value?: SessionFilter): ListSessionFeedbackOfAllSessionsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListSessionFeedbackOfAllSessionsRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListSessionFeedbackOfAllSessionsRequest;

    hasFeedbackFilter(): boolean;
    clearFeedbackFilter(): void;
    getFeedbackFilter(): FeedbackFilter | undefined;
    setFeedbackFilter(value?: FeedbackFilter): ListSessionFeedbackOfAllSessionsRequest;
    getOrderBy(): string;
    setOrderBy(value: string): ListSessionFeedbackOfAllSessionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSessionFeedbackOfAllSessionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSessionFeedbackOfAllSessionsRequest): ListSessionFeedbackOfAllSessionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSessionFeedbackOfAllSessionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSessionFeedbackOfAllSessionsRequest;
    static deserializeBinaryFromReader(message: ListSessionFeedbackOfAllSessionsRequest, reader: jspb.BinaryReader): ListSessionFeedbackOfAllSessionsRequest;
}

export namespace ListSessionFeedbackOfAllSessionsRequest {
    export type AsObject = {
        parent: string,
        sessionFilter?: SessionFilter.AsObject,
        pageToken: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        feedbackFilter?: FeedbackFilter.AsObject,
        orderBy: string,
    }
}

export class ListSessionFeedbackResponse extends jspb.Message { 
    clearFeedbackList(): void;
    getFeedbackList(): Array<SessionFeedback>;
    setFeedbackList(value: Array<SessionFeedback>): ListSessionFeedbackResponse;
    addFeedback(value?: SessionFeedback, index?: number): SessionFeedback;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListSessionFeedbackResponse;
    getTotalCount(): number;
    setTotalCount(value: number): ListSessionFeedbackResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSessionFeedbackResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListSessionFeedbackResponse): ListSessionFeedbackResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSessionFeedbackResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSessionFeedbackResponse;
    static deserializeBinaryFromReader(message: ListSessionFeedbackResponse, reader: jspb.BinaryReader): ListSessionFeedbackResponse;
}

export namespace ListSessionFeedbackResponse {
    export type AsObject = {
        feedbackList: Array<SessionFeedback.AsObject>,
        nextPageToken: string,
        totalCount: number,
    }
}

export class FeedbackFilter extends jspb.Message { 
    clearRatingsList(): void;
    getRatingsList(): Array<FeedbackRating>;
    setRatingsList(value: Array<FeedbackRating>): FeedbackFilter;
    addRatings(value: FeedbackRating, index?: number): FeedbackRating;
    clearAuthorTypesList(): void;
    getAuthorTypesList(): Array<FeedbackAuthorType>;
    setAuthorTypesList(value: Array<FeedbackAuthorType>): FeedbackFilter;
    addAuthorTypes(value: FeedbackAuthorType, index?: number): FeedbackAuthorType;

    hasHasComment(): boolean;
    clearHasComment(): void;
    getHasComment(): boolean | undefined;
    setHasComment(value: boolean): FeedbackFilter;

    hasEarliest(): boolean;
    clearEarliest(): void;
    getEarliest(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEarliest(value?: google_protobuf_timestamp_pb.Timestamp): FeedbackFilter;

    hasLatest(): boolean;
    clearLatest(): void;
    getLatest(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLatest(value?: google_protobuf_timestamp_pb.Timestamp): FeedbackFilter;
    clearCriteriaList(): void;
    getCriteriaList(): Array<string>;
    setCriteriaList(value: Array<string>): FeedbackFilter;
    addCriteria(value: string, index?: number): string;
    clearLanguageCodesList(): void;
    getLanguageCodesList(): Array<string>;
    setLanguageCodesList(value: Array<string>): FeedbackFilter;
    addLanguageCodes(value: string, index?: number): string;
    clearAnnotatorUserIdsList(): void;
    getAnnotatorUserIdsList(): Array<string>;
    setAnnotatorUserIdsList(value: Array<string>): FeedbackFilter;
    addAnnotatorUserIds(value: string, index?: number): string;
    clearOriginIdsList(): void;
    getOriginIdsList(): Array<string>;
    setOriginIdsList(value: Array<string>): FeedbackFilter;
    addOriginIds(value: string, index?: number): string;

    hasScoreMin(): boolean;
    clearScoreMin(): void;
    getScoreMin(): number | undefined;
    setScoreMin(value: number): FeedbackFilter;

    hasScoreMax(): boolean;
    clearScoreMax(): void;
    getScoreMax(): number | undefined;
    setScoreMax(value: number): FeedbackFilter;
    getScope(): FeedbackScope;
    setScope(value: FeedbackScope): FeedbackFilter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FeedbackFilter.AsObject;
    static toObject(includeInstance: boolean, msg: FeedbackFilter): FeedbackFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FeedbackFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FeedbackFilter;
    static deserializeBinaryFromReader(message: FeedbackFilter, reader: jspb.BinaryReader): FeedbackFilter;
}

export namespace FeedbackFilter {
    export type AsObject = {
        ratingsList: Array<FeedbackRating>,
        authorTypesList: Array<FeedbackAuthorType>,
        hasComment?: boolean,
        earliest?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        latest?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        criteriaList: Array<string>,
        languageCodesList: Array<string>,
        annotatorUserIdsList: Array<string>,
        originIdsList: Array<string>,
        scoreMin?: number,
        scoreMax?: number,
        scope: FeedbackScope,
    }
}

export class FeedbackBreakdownBucket extends jspb.Message { 
    getKey(): string;
    setKey(value: string): FeedbackBreakdownBucket;
    getThumbsUpCount(): number;
    setThumbsUpCount(value: number): FeedbackBreakdownBucket;
    getThumbsDownCount(): number;
    setThumbsDownCount(value: number): FeedbackBreakdownBucket;
    getTotal(): number;
    setTotal(value: number): FeedbackBreakdownBucket;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FeedbackBreakdownBucket.AsObject;
    static toObject(includeInstance: boolean, msg: FeedbackBreakdownBucket): FeedbackBreakdownBucket.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FeedbackBreakdownBucket, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FeedbackBreakdownBucket;
    static deserializeBinaryFromReader(message: FeedbackBreakdownBucket, reader: jspb.BinaryReader): FeedbackBreakdownBucket;
}

export namespace FeedbackBreakdownBucket {
    export type AsObject = {
        key: string,
        thumbsUpCount: number,
        thumbsDownCount: number,
        total: number,
    }
}

export class FeedbackStatistics extends jspb.Message { 
    getTotalFeedback(): number;
    setTotalFeedback(value: number): FeedbackStatistics;
    getThumbsUpCount(): number;
    setThumbsUpCount(value: number): FeedbackStatistics;
    getThumbsDownCount(): number;
    setThumbsDownCount(value: number): FeedbackStatistics;
    getSessionLevelCount(): number;
    setSessionLevelCount(value: number): FeedbackStatistics;
    getSessionStepLevelCount(): number;
    setSessionStepLevelCount(value: number): FeedbackStatistics;
    getCommentCount(): number;
    setCommentCount(value: number): FeedbackStatistics;
    getSessionReviewCount(): number;
    setSessionReviewCount(value: number): FeedbackStatistics;
    getSessionCommentCount(): number;
    setSessionCommentCount(value: number): FeedbackStatistics;
    clearByLanguageList(): void;
    getByLanguageList(): Array<FeedbackBreakdownBucket>;
    setByLanguageList(value: Array<FeedbackBreakdownBucket>): FeedbackStatistics;
    addByLanguage(value?: FeedbackBreakdownBucket, index?: number): FeedbackBreakdownBucket;
    clearByIntentList(): void;
    getByIntentList(): Array<FeedbackBreakdownBucket>;
    setByIntentList(value: Array<FeedbackBreakdownBucket>): FeedbackStatistics;
    addByIntent(value?: FeedbackBreakdownBucket, index?: number): FeedbackBreakdownBucket;
    clearByAuthorTypeList(): void;
    getByAuthorTypeList(): Array<FeedbackBreakdownBucket>;
    setByAuthorTypeList(value: Array<FeedbackBreakdownBucket>): FeedbackStatistics;
    addByAuthorType(value?: FeedbackBreakdownBucket, index?: number): FeedbackBreakdownBucket;
    getUnspecifiedRatingCount(): number;
    setUnspecifiedRatingCount(value: number): FeedbackStatistics;
    getScoredCount(): number;
    setScoredCount(value: number): FeedbackStatistics;
    getAverageScore(): number;
    setAverageScore(value: number): FeedbackStatistics;
    clearByOriginList(): void;
    getByOriginList(): Array<FeedbackBreakdownBucket>;
    setByOriginList(value: Array<FeedbackBreakdownBucket>): FeedbackStatistics;
    addByOrigin(value?: FeedbackBreakdownBucket, index?: number): FeedbackBreakdownBucket;
    clearByCriterionList(): void;
    getByCriterionList(): Array<FeedbackBreakdownBucket>;
    setByCriterionList(value: Array<FeedbackBreakdownBucket>): FeedbackStatistics;
    addByCriterion(value?: FeedbackBreakdownBucket, index?: number): FeedbackBreakdownBucket;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FeedbackStatistics.AsObject;
    static toObject(includeInstance: boolean, msg: FeedbackStatistics): FeedbackStatistics.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FeedbackStatistics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FeedbackStatistics;
    static deserializeBinaryFromReader(message: FeedbackStatistics, reader: jspb.BinaryReader): FeedbackStatistics;
}

export namespace FeedbackStatistics {
    export type AsObject = {
        totalFeedback: number,
        thumbsUpCount: number,
        thumbsDownCount: number,
        sessionLevelCount: number,
        sessionStepLevelCount: number,
        commentCount: number,
        sessionReviewCount: number,
        sessionCommentCount: number,
        byLanguageList: Array<FeedbackBreakdownBucket.AsObject>,
        byIntentList: Array<FeedbackBreakdownBucket.AsObject>,
        byAuthorTypeList: Array<FeedbackBreakdownBucket.AsObject>,
        unspecifiedRatingCount: number,
        scoredCount: number,
        averageScore: number,
        byOriginList: Array<FeedbackBreakdownBucket.AsObject>,
        byCriterionList: Array<FeedbackBreakdownBucket.AsObject>,
    }
}

export class GetFeedbackStatisticsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): GetFeedbackStatisticsRequest;

    hasSessionFilter(): boolean;
    clearSessionFilter(): void;
    getSessionFilter(): SessionFilter | undefined;
    setSessionFilter(value?: SessionFilter): GetFeedbackStatisticsRequest;
    getIncludeReviewAndCommentRollup(): boolean;
    setIncludeReviewAndCommentRollup(value: boolean): GetFeedbackStatisticsRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetFeedbackStatisticsRequest;

    hasFeedbackFilter(): boolean;
    clearFeedbackFilter(): void;
    getFeedbackFilter(): FeedbackFilter | undefined;
    setFeedbackFilter(value?: FeedbackFilter): GetFeedbackStatisticsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetFeedbackStatisticsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetFeedbackStatisticsRequest): GetFeedbackStatisticsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetFeedbackStatisticsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetFeedbackStatisticsRequest;
    static deserializeBinaryFromReader(message: GetFeedbackStatisticsRequest, reader: jspb.BinaryReader): GetFeedbackStatisticsRequest;
}

export namespace GetFeedbackStatisticsRequest {
    export type AsObject = {
        parent: string,
        sessionFilter?: SessionFilter.AsObject,
        includeReviewAndCommentRollup: boolean,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        feedbackFilter?: FeedbackFilter.AsObject,
    }
}

export class GetFeedbackStatisticsResponse extends jspb.Message { 

    hasStatistics(): boolean;
    clearStatistics(): void;
    getStatistics(): FeedbackStatistics | undefined;
    setStatistics(value?: FeedbackStatistics): GetFeedbackStatisticsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetFeedbackStatisticsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetFeedbackStatisticsResponse): GetFeedbackStatisticsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetFeedbackStatisticsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetFeedbackStatisticsResponse;
    static deserializeBinaryFromReader(message: GetFeedbackStatisticsResponse, reader: jspb.BinaryReader): GetFeedbackStatisticsResponse;
}

export namespace GetFeedbackStatisticsResponse {
    export type AsObject = {
        statistics?: FeedbackStatistics.AsObject,
    }
}

export class FeedbackTimeSeriesBucket extends jspb.Message { 

    hasBucketStart(): boolean;
    clearBucketStart(): void;
    getBucketStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setBucketStart(value?: google_protobuf_timestamp_pb.Timestamp): FeedbackTimeSeriesBucket;
    getThumbsUpCount(): number;
    setThumbsUpCount(value: number): FeedbackTimeSeriesBucket;
    getThumbsDownCount(): number;
    setThumbsDownCount(value: number): FeedbackTimeSeriesBucket;
    getTotal(): number;
    setTotal(value: number): FeedbackTimeSeriesBucket;

    hasBucketEnd(): boolean;
    clearBucketEnd(): void;
    getBucketEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setBucketEnd(value?: google_protobuf_timestamp_pb.Timestamp): FeedbackTimeSeriesBucket;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FeedbackTimeSeriesBucket.AsObject;
    static toObject(includeInstance: boolean, msg: FeedbackTimeSeriesBucket): FeedbackTimeSeriesBucket.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FeedbackTimeSeriesBucket, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FeedbackTimeSeriesBucket;
    static deserializeBinaryFromReader(message: FeedbackTimeSeriesBucket, reader: jspb.BinaryReader): FeedbackTimeSeriesBucket;
}

export namespace FeedbackTimeSeriesBucket {
    export type AsObject = {
        bucketStart?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        thumbsUpCount: number,
        thumbsDownCount: number,
        total: number,
        bucketEnd?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class GetFeedbackStatisticsTimeSeriesRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): GetFeedbackStatisticsTimeSeriesRequest;

    hasSessionFilter(): boolean;
    clearSessionFilter(): void;
    getSessionFilter(): SessionFilter | undefined;
    setSessionFilter(value?: SessionFilter): GetFeedbackStatisticsTimeSeriesRequest;
    getBucketWidthSeconds(): number;
    setBucketWidthSeconds(value: number): GetFeedbackStatisticsTimeSeriesRequest;
    getMaxBuckets(): number;
    setMaxBuckets(value: number): GetFeedbackStatisticsTimeSeriesRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetFeedbackStatisticsTimeSeriesRequest;

    hasFeedbackFilter(): boolean;
    clearFeedbackFilter(): void;
    getFeedbackFilter(): FeedbackFilter | undefined;
    setFeedbackFilter(value?: FeedbackFilter): GetFeedbackStatisticsTimeSeriesRequest;
    getGranularity(): FeedbackTimeGranularity;
    setGranularity(value: FeedbackTimeGranularity): GetFeedbackStatisticsTimeSeriesRequest;
    getTimeZone(): string;
    setTimeZone(value: string): GetFeedbackStatisticsTimeSeriesRequest;

    hasStart(): boolean;
    clearStart(): void;
    getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStart(value?: google_protobuf_timestamp_pb.Timestamp): GetFeedbackStatisticsTimeSeriesRequest;

    hasEnd(): boolean;
    clearEnd(): void;
    getEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEnd(value?: google_protobuf_timestamp_pb.Timestamp): GetFeedbackStatisticsTimeSeriesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetFeedbackStatisticsTimeSeriesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetFeedbackStatisticsTimeSeriesRequest): GetFeedbackStatisticsTimeSeriesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetFeedbackStatisticsTimeSeriesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetFeedbackStatisticsTimeSeriesRequest;
    static deserializeBinaryFromReader(message: GetFeedbackStatisticsTimeSeriesRequest, reader: jspb.BinaryReader): GetFeedbackStatisticsTimeSeriesRequest;
}

export namespace GetFeedbackStatisticsTimeSeriesRequest {
    export type AsObject = {
        parent: string,
        sessionFilter?: SessionFilter.AsObject,
        bucketWidthSeconds: number,
        maxBuckets: number,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        feedbackFilter?: FeedbackFilter.AsObject,
        granularity: FeedbackTimeGranularity,
        timeZone: string,
        start?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        end?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class GetFeedbackStatisticsTimeSeriesResponse extends jspb.Message { 
    clearBucketsList(): void;
    getBucketsList(): Array<FeedbackTimeSeriesBucket>;
    setBucketsList(value: Array<FeedbackTimeSeriesBucket>): GetFeedbackStatisticsTimeSeriesResponse;
    addBuckets(value?: FeedbackTimeSeriesBucket, index?: number): FeedbackTimeSeriesBucket;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetFeedbackStatisticsTimeSeriesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetFeedbackStatisticsTimeSeriesResponse): GetFeedbackStatisticsTimeSeriesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetFeedbackStatisticsTimeSeriesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetFeedbackStatisticsTimeSeriesResponse;
    static deserializeBinaryFromReader(message: GetFeedbackStatisticsTimeSeriesResponse, reader: jspb.BinaryReader): GetFeedbackStatisticsTimeSeriesResponse;
}

export namespace GetFeedbackStatisticsTimeSeriesResponse {
    export type AsObject = {
        bucketsList: Array<FeedbackTimeSeriesBucket.AsObject>,
    }
}

export class ListSessionReviewsRequest extends jspb.Message { 
    getSessionId(): string;
    setSessionId(value: string): ListSessionReviewsRequest;
    getSessionReviewView(): SessionReview.View;
    setSessionReviewView(value: SessionReview.View): ListSessionReviewsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListSessionReviewsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSessionReviewsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSessionReviewsRequest): ListSessionReviewsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSessionReviewsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSessionReviewsRequest;
    static deserializeBinaryFromReader(message: ListSessionReviewsRequest, reader: jspb.BinaryReader): ListSessionReviewsRequest;
}

export namespace ListSessionReviewsRequest {
    export type AsObject = {
        sessionId: string,
        sessionReviewView: SessionReview.View,
        pageToken: string,
    }
}

export class ListSessionReviewsResponse extends jspb.Message { 
    clearSessionReviewsList(): void;
    getSessionReviewsList(): Array<SessionReview>;
    setSessionReviewsList(value: Array<SessionReview>): ListSessionReviewsResponse;
    addSessionReviews(value?: SessionReview, index?: number): SessionReview;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListSessionReviewsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSessionReviewsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListSessionReviewsResponse): ListSessionReviewsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSessionReviewsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSessionReviewsResponse;
    static deserializeBinaryFromReader(message: ListSessionReviewsResponse, reader: jspb.BinaryReader): ListSessionReviewsResponse;
}

export namespace ListSessionReviewsResponse {
    export type AsObject = {
        sessionReviewsList: Array<SessionReview.AsObject>,
        nextPageToken: string,
    }
}

export class GetSessionReviewRequest extends jspb.Message { 
    getSessionReviewId(): string;
    setSessionReviewId(value: string): GetSessionReviewRequest;
    getSessionReviewView(): SessionReview.View;
    setSessionReviewView(value: SessionReview.View): GetSessionReviewRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetSessionReviewRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSessionReviewRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSessionReviewRequest): GetSessionReviewRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSessionReviewRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSessionReviewRequest;
    static deserializeBinaryFromReader(message: GetSessionReviewRequest, reader: jspb.BinaryReader): GetSessionReviewRequest;
}

export namespace GetSessionReviewRequest {
    export type AsObject = {
        sessionReviewId: string,
        sessionReviewView: SessionReview.View,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class GetLatestSessionReviewRequest extends jspb.Message { 
    getSessionId(): string;
    setSessionId(value: string): GetLatestSessionReviewRequest;
    getSessionReviewView(): SessionReview.View;
    setSessionReviewView(value: SessionReview.View): GetLatestSessionReviewRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetLatestSessionReviewRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLatestSessionReviewRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetLatestSessionReviewRequest): GetLatestSessionReviewRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLatestSessionReviewRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLatestSessionReviewRequest;
    static deserializeBinaryFromReader(message: GetLatestSessionReviewRequest, reader: jspb.BinaryReader): GetLatestSessionReviewRequest;
}

export namespace GetLatestSessionReviewRequest {
    export type AsObject = {
        sessionId: string,
        sessionReviewView: SessionReview.View,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class FileResource extends jspb.Message { 

    hasDocumentFileResource(): boolean;
    clearDocumentFileResource(): void;
    getDocumentFileResource(): DocumentFileResource | undefined;
    setDocumentFileResource(value?: DocumentFileResource): FileResource;

    hasAudioFileResource(): boolean;
    clearAudioFileResource(): void;
    getAudioFileResource(): AudioFileResource | undefined;
    setAudioFileResource(value?: AudioFileResource): FileResource;

    hasImageFileResource(): boolean;
    clearImageFileResource(): void;
    getImageFileResource(): ImageFileResource | undefined;
    setImageFileResource(value?: ImageFileResource): FileResource;

    hasVideoFileResource(): boolean;
    clearVideoFileResource(): void;
    getVideoFileResource(): VideoFileResource | undefined;
    setVideoFileResource(value?: VideoFileResource): FileResource;

    getFileResourceCase(): FileResource.FileResourceCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileResource.AsObject;
    static toObject(includeInstance: boolean, msg: FileResource): FileResource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileResource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileResource;
    static deserializeBinaryFromReader(message: FileResource, reader: jspb.BinaryReader): FileResource;
}

export namespace FileResource {
    export type AsObject = {
        documentFileResource?: DocumentFileResource.AsObject,
        audioFileResource?: AudioFileResource.AsObject,
        imageFileResource?: ImageFileResource.AsObject,
        videoFileResource?: VideoFileResource.AsObject,
    }

    export enum FileResourceCase {
        FILE_RESOURCE_NOT_SET = 0,
        DOCUMENT_FILE_RESOURCE = 1,
        AUDIO_FILE_RESOURCE = 2,
        IMAGE_FILE_RESOURCE = 3,
        VIDEO_FILE_RESOURCE = 4,
    }

}

export class DocumentFileResource extends jspb.Message { 
    getName(): string;
    setName(value: string): DocumentFileResource;
    getDisplayName(): string;
    setDisplayName(value: string): DocumentFileResource;
    getBytes(): Uint8Array | string;
    getBytes_asU8(): Uint8Array;
    getBytes_asB64(): string;
    setBytes(value: Uint8Array | string): DocumentFileResource;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): DocumentFileResource;

    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): DocumentFileResource;
    getCreatedBy(): string;
    setCreatedBy(value: string): DocumentFileResource;
    getModifiedBy(): string;
    setModifiedBy(value: string): DocumentFileResource;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DocumentFileResource.AsObject;
    static toObject(includeInstance: boolean, msg: DocumentFileResource): DocumentFileResource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DocumentFileResource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DocumentFileResource;
    static deserializeBinaryFromReader(message: DocumentFileResource, reader: jspb.BinaryReader): DocumentFileResource;
}

export namespace DocumentFileResource {
    export type AsObject = {
        name: string,
        displayName: string,
        bytes: Uint8Array | string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdBy: string,
        modifiedBy: string,
    }
}

export class ImageFileResource extends jspb.Message { 
    getName(): string;
    setName(value: string): ImageFileResource;
    getDisplayName(): string;
    setDisplayName(value: string): ImageFileResource;
    getBytes(): Uint8Array | string;
    getBytes_asU8(): Uint8Array;
    getBytes_asB64(): string;
    setBytes(value: Uint8Array | string): ImageFileResource;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ImageFileResource;

    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): ImageFileResource;
    getCreatedBy(): string;
    setCreatedBy(value: string): ImageFileResource;
    getModifiedBy(): string;
    setModifiedBy(value: string): ImageFileResource;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImageFileResource.AsObject;
    static toObject(includeInstance: boolean, msg: ImageFileResource): ImageFileResource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImageFileResource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImageFileResource;
    static deserializeBinaryFromReader(message: ImageFileResource, reader: jspb.BinaryReader): ImageFileResource;
}

export namespace ImageFileResource {
    export type AsObject = {
        name: string,
        displayName: string,
        bytes: Uint8Array | string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdBy: string,
        modifiedBy: string,
    }
}

export class AudioFileResource extends jspb.Message { 
    getName(): string;
    setName(value: string): AudioFileResource;
    getBytes(): Uint8Array | string;
    getBytes_asU8(): Uint8Array;
    getBytes_asB64(): string;
    setBytes(value: Uint8Array | string): AudioFileResource;
    getLanguage(): string;
    setLanguage(value: string): AudioFileResource;
    getDurationInS(): number;
    setDurationInS(value: number): AudioFileResource;
    getSampleRate(): number;
    setSampleRate(value: number): AudioFileResource;
    getAudioFileResourceType(): AudioFileResourceType;
    setAudioFileResourceType(value: AudioFileResourceType): AudioFileResource;
    clearTranscriptionsList(): void;
    getTranscriptionsList(): Array<S2tTranscription>;
    setTranscriptionsList(value: Array<S2tTranscription>): AudioFileResource;
    addTranscriptions(value?: S2tTranscription, index?: number): S2tTranscription;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): AudioFileResource;

    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): AudioFileResource;
    getCreatedBy(): string;
    setCreatedBy(value: string): AudioFileResource;
    getModifiedBy(): string;
    setModifiedBy(value: string): AudioFileResource;
    getDisplayName(): string;
    setDisplayName(value: string): AudioFileResource;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AudioFileResource.AsObject;
    static toObject(includeInstance: boolean, msg: AudioFileResource): AudioFileResource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AudioFileResource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AudioFileResource;
    static deserializeBinaryFromReader(message: AudioFileResource, reader: jspb.BinaryReader): AudioFileResource;
}

export namespace AudioFileResource {
    export type AsObject = {
        name: string,
        bytes: Uint8Array | string,
        language: string,
        durationInS: number,
        sampleRate: number,
        audioFileResourceType: AudioFileResourceType,
        transcriptionsList: Array<S2tTranscription.AsObject>,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdBy: string,
        modifiedBy: string,
        displayName: string,
    }
}

export class VideoFileResource extends jspb.Message { 
    getName(): string;
    setName(value: string): VideoFileResource;
    getDisplayName(): string;
    setDisplayName(value: string): VideoFileResource;
    getBytes(): Uint8Array | string;
    getBytes_asU8(): Uint8Array;
    getBytes_asB64(): string;
    setBytes(value: Uint8Array | string): VideoFileResource;
    getDurationInS(): number;
    setDurationInS(value: number): VideoFileResource;
    getResolution(): string;
    setResolution(value: string): VideoFileResource;
    getFrameRate(): number;
    setFrameRate(value: number): VideoFileResource;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): VideoFileResource;

    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): VideoFileResource;
    getCreatedBy(): string;
    setCreatedBy(value: string): VideoFileResource;
    getModifiedBy(): string;
    setModifiedBy(value: string): VideoFileResource;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VideoFileResource.AsObject;
    static toObject(includeInstance: boolean, msg: VideoFileResource): VideoFileResource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VideoFileResource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VideoFileResource;
    static deserializeBinaryFromReader(message: VideoFileResource, reader: jspb.BinaryReader): VideoFileResource;
}

export namespace VideoFileResource {
    export type AsObject = {
        name: string,
        displayName: string,
        bytes: Uint8Array | string,
        durationInS: number,
        resolution: string,
        frameRate: number,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdBy: string,
        modifiedBy: string,
    }
}

export class GetAudioFilesRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): GetAudioFilesRequest;
    clearNamesList(): void;
    getNamesList(): Array<string>;
    setNamesList(value: Array<string>): GetAudioFilesRequest;
    addNames(value: string, index?: number): string;
    getResourceView(): ResourceView;
    setResourceView(value: ResourceView): GetAudioFilesRequest;
    getPageToken(): string;
    setPageToken(value: string): GetAudioFilesRequest;
    getSortingMode(): ondewo_nlu_common_pb.SortingMode;
    setSortingMode(value: ondewo_nlu_common_pb.SortingMode): GetAudioFilesRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetAudioFilesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAudioFilesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAudioFilesRequest): GetAudioFilesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAudioFilesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAudioFilesRequest;
    static deserializeBinaryFromReader(message: GetAudioFilesRequest, reader: jspb.BinaryReader): GetAudioFilesRequest;
}

export namespace GetAudioFilesRequest {
    export type AsObject = {
        parent: string,
        namesList: Array<string>,
        resourceView: ResourceView,
        pageToken: string,
        sortingMode: ondewo_nlu_common_pb.SortingMode,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class GetAudioFilesResponse extends jspb.Message { 
    clearAudioFilesList(): void;
    getAudioFilesList(): Array<AudioFileResource>;
    setAudioFilesList(value: Array<AudioFileResource>): GetAudioFilesResponse;
    addAudioFiles(value?: AudioFileResource, index?: number): AudioFileResource;
    getErrorMessage(): string;
    setErrorMessage(value: string): GetAudioFilesResponse;
    getNextPageToken(): string;
    setNextPageToken(value: string): GetAudioFilesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAudioFilesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAudioFilesResponse): GetAudioFilesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAudioFilesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAudioFilesResponse;
    static deserializeBinaryFromReader(message: GetAudioFilesResponse, reader: jspb.BinaryReader): GetAudioFilesResponse;
}

export namespace GetAudioFilesResponse {
    export type AsObject = {
        audioFilesList: Array<AudioFileResource.AsObject>,
        errorMessage: string,
        nextPageToken: string,
    }
}

export class AddAudioFilesRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): AddAudioFilesRequest;
    getSessionId(): string;
    setSessionId(value: string): AddAudioFilesRequest;
    clearAudioFileResourcesList(): void;
    getAudioFileResourcesList(): Array<AudioFileResource>;
    setAudioFileResourcesList(value: Array<AudioFileResource>): AddAudioFilesRequest;
    addAudioFileResources(value?: AudioFileResource, index?: number): AudioFileResource;
    getSessionStepId(): string;
    setSessionStepId(value: string): AddAudioFilesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddAudioFilesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddAudioFilesRequest): AddAudioFilesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddAudioFilesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddAudioFilesRequest;
    static deserializeBinaryFromReader(message: AddAudioFilesRequest, reader: jspb.BinaryReader): AddAudioFilesRequest;
}

export namespace AddAudioFilesRequest {
    export type AsObject = {
        parent: string,
        sessionId: string,
        audioFileResourcesList: Array<AudioFileResource.AsObject>,
        sessionStepId: string,
    }
}

export class AddAudioFilesResponse extends jspb.Message { 
    clearAudioFileResourcesList(): void;
    getAudioFileResourcesList(): Array<AudioFileResource>;
    setAudioFileResourcesList(value: Array<AudioFileResource>): AddAudioFilesResponse;
    addAudioFileResources(value?: AudioFileResource, index?: number): AudioFileResource;
    getErrorMessage(): string;
    setErrorMessage(value: string): AddAudioFilesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddAudioFilesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddAudioFilesResponse): AddAudioFilesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddAudioFilesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddAudioFilesResponse;
    static deserializeBinaryFromReader(message: AddAudioFilesResponse, reader: jspb.BinaryReader): AddAudioFilesResponse;
}

export namespace AddAudioFilesResponse {
    export type AsObject = {
        audioFileResourcesList: Array<AudioFileResource.AsObject>,
        errorMessage: string,
    }
}

export class DeleteAudioFilesRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): DeleteAudioFilesRequest;
    clearNamesList(): void;
    getNamesList(): Array<string>;
    setNamesList(value: Array<string>): DeleteAudioFilesRequest;
    addNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteAudioFilesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteAudioFilesRequest): DeleteAudioFilesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteAudioFilesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteAudioFilesRequest;
    static deserializeBinaryFromReader(message: DeleteAudioFilesRequest, reader: jspb.BinaryReader): DeleteAudioFilesRequest;
}

export namespace DeleteAudioFilesRequest {
    export type AsObject = {
        parent: string,
        namesList: Array<string>,
    }
}

export class DeleteAudioFilesResponse extends jspb.Message { 
    clearNamesList(): void;
    getNamesList(): Array<string>;
    setNamesList(value: Array<string>): DeleteAudioFilesResponse;
    addNames(value: string, index?: number): string;
    getErrorMessage(): string;
    setErrorMessage(value: string): DeleteAudioFilesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteAudioFilesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteAudioFilesResponse): DeleteAudioFilesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteAudioFilesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteAudioFilesResponse;
    static deserializeBinaryFromReader(message: DeleteAudioFilesResponse, reader: jspb.BinaryReader): DeleteAudioFilesResponse;
}

export namespace DeleteAudioFilesResponse {
    export type AsObject = {
        namesList: Array<string>,
        errorMessage: string,
    }
}

export class ListAudioFilesRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ListAudioFilesRequest;
    getSessionId(): string;
    setSessionId(value: string): ListAudioFilesRequest;
    getResourceView(): ResourceView;
    setResourceView(value: ResourceView): ListAudioFilesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListAudioFilesRequest;
    getSortingMode(): ondewo_nlu_common_pb.SortingMode;
    setSortingMode(value: ondewo_nlu_common_pb.SortingMode): ListAudioFilesRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListAudioFilesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAudioFilesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListAudioFilesRequest): ListAudioFilesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAudioFilesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAudioFilesRequest;
    static deserializeBinaryFromReader(message: ListAudioFilesRequest, reader: jspb.BinaryReader): ListAudioFilesRequest;
}

export namespace ListAudioFilesRequest {
    export type AsObject = {
        parent: string,
        sessionId: string,
        resourceView: ResourceView,
        pageToken: string,
        sortingMode: ondewo_nlu_common_pb.SortingMode,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class ListAudioFilesResponse extends jspb.Message { 
    clearAudioFilesList(): void;
    getAudioFilesList(): Array<AudioFileResource>;
    setAudioFilesList(value: Array<AudioFileResource>): ListAudioFilesResponse;
    addAudioFiles(value?: AudioFileResource, index?: number): AudioFileResource;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListAudioFilesResponse;
    getErrorMessage(): string;
    setErrorMessage(value: string): ListAudioFilesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAudioFilesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListAudioFilesResponse): ListAudioFilesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAudioFilesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAudioFilesResponse;
    static deserializeBinaryFromReader(message: ListAudioFilesResponse, reader: jspb.BinaryReader): ListAudioFilesResponse;
}

export namespace ListAudioFilesResponse {
    export type AsObject = {
        audioFilesList: Array<AudioFileResource.AsObject>,
        nextPageToken: string,
        errorMessage: string,
    }
}

export class GetAudioFileOfSessionRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): GetAudioFileOfSessionRequest;
    getSessionId(): string;
    setSessionId(value: string): GetAudioFileOfSessionRequest;
    getResourceView(): ResourceView;
    setResourceView(value: ResourceView): GetAudioFileOfSessionRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetAudioFileOfSessionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAudioFileOfSessionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAudioFileOfSessionRequest): GetAudioFileOfSessionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAudioFileOfSessionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAudioFileOfSessionRequest;
    static deserializeBinaryFromReader(message: GetAudioFileOfSessionRequest, reader: jspb.BinaryReader): GetAudioFileOfSessionRequest;
}

export namespace GetAudioFileOfSessionRequest {
    export type AsObject = {
        parent: string,
        sessionId: string,
        resourceView: ResourceView,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export enum TranscriptionType {
    TRANSCRIPTION_TYPE_UNSPECIFIED = 0,
    TRANSCRIPTION_TYPE_S2T = 1,
    TRANSCRIPTION_TYPE_HUMAN = 2,
}

export enum ReasoningEffort {
    REASONING_EFFORT_UNSPECIFIED = 0,
    REASONING_EFFORT_MINIMAL = 1,
    REASONING_EFFORT_LOW = 2,
    REASONING_EFFORT_MEDIUM = 3,
    REASONING_EFFORT_HIGH = 4,
}

export enum LlmSafetyLocation {
    LLM_SAFETY_LOCATION_UNSPECIFIED = 0,
    LLM_SAFETY_LOCATION_INPUT = 1,
    LLM_SAFETY_LOCATION_OUTPUT = 2,
}

export enum AudioEncoding {
    AUDIO_ENCODING_UNSPECIFIED = 0,
    AUDIO_ENCODING_LINEAR_16 = 1,
    AUDIO_ENCODING_FLAC = 2,
    AUDIO_ENCODING_MULAW = 3,
    AUDIO_ENCODING_AMR = 4,
    AUDIO_ENCODING_AMR_WB = 5,
    AUDIO_ENCODING_OGG_OPUS = 6,
    AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE = 7,
}

export enum ComparisonOperator {
    EQUAL = 0,
    GREATER = 1,
    GREATER_OR_EQUAL = 2,
    LESS_OR_EQUAL = 3,
    CONTAINS = 4,
    STARTS_WITH = 5,
    ENDS_WITH = 6,
}

export enum FeedbackRating {
    FEEDBACK_RATING_UNSPECIFIED = 0,
    FEEDBACK_RATING_THUMBS_UP = 1,
    FEEDBACK_RATING_THUMBS_DOWN = 2,
}

export enum FeedbackAuthorType {
    FEEDBACK_AUTHOR_TYPE_UNSPECIFIED = 0,
    FEEDBACK_AUTHOR_TYPE_HUMAN_REVIEWER = 1,
    FEEDBACK_AUTHOR_TYPE_TECHNICAL_USER = 2,
    FEEDBACK_AUTHOR_TYPE_END_USER_ANONYMOUS = 3,
}

export enum FeedbackScope {
    FEEDBACK_SCOPE_UNSPECIFIED = 0,
    FEEDBACK_SCOPE_SESSION_LEVEL = 1,
    FEEDBACK_SCOPE_STEP_LEVEL = 2,
}

export enum FeedbackTimeGranularity {
    FEEDBACK_TIME_GRANULARITY_UNSPECIFIED = 0,
    FEEDBACK_TIME_GRANULARITY_HOUR = 1,
    FEEDBACK_TIME_GRANULARITY_DAY = 2,
    FEEDBACK_TIME_GRANULARITY_WEEK = 3,
    FEEDBACK_TIME_GRANULARITY_MONTH = 4,
    FEEDBACK_TIME_GRANULARITY_YEAR = 5,
}

export enum ResourceView {
    RESOURCE_VIEW_UNSPECIFIED = 0,
    RESOURCE_VIEW_FULL = 1,
    RESOURCE_VIEW_PARTIAL = 2,
    RESOURCE_VIEW_MINIMUM = 3,
}

export enum AudioFileResourceType {
    AUDIO_FILE_RESOURCE_TYPE_UNSPECIFIED = 0,
    AUDIO_FILE_RESOURCE_TYPE_T2S = 1,
    AUDIO_FILE_RESOURCE_TYPE_S2T = 2,
    AUDIO_FILE_RESOURCE_TYPE_S2T_AND_T2S = 3,
}
