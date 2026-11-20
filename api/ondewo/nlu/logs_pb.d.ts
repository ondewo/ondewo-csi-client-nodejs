// package: ondewo.nlu
// file: ondewo/nlu/logs.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ondewo_nlu_common_pb from "../../ondewo/nlu/common_pb";
import * as ondewo_nlu_operation_metadata_pb from "../../ondewo/nlu/operation_metadata_pb";

export class CaiLogEntry extends jspb.Message { 
    getSeq(): number;
    setSeq(value: number): CaiLogEntry;

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): CaiLogEntry;
    getTimestampIsExact(): boolean;
    setTimestampIsExact(value: boolean): CaiLogEntry;
    getLevel(): ondewo_nlu_common_pb.LogSeverity;
    setLevel(value: ondewo_nlu_common_pb.LogSeverity): CaiLogEntry;
    getMessage(): string;
    setMessage(value: string): CaiLogEntry;
    getLogSource(): CaiLogSource;
    setLogSource(value: CaiLogSource): CaiLogEntry;
    getChannel(): CaiLogStreamChannel;
    setChannel(value: CaiLogStreamChannel): CaiLogEntry;
    getEmitter(): string;
    setEmitter(value: string): CaiLogEntry;
    getThreadName(): string;
    setThreadName(value: string): CaiLogEntry;
    getProcessName(): string;
    setProcessName(value: string): CaiLogEntry;
    getLogStream(): string;
    setLogStream(value: string): CaiLogEntry;
    getOperationName(): string;
    setOperationName(value: string): CaiLogEntry;
    getProjectParent(): string;
    setProjectParent(value: string): CaiLogEntry;
    getContainerId(): string;
    setContainerId(value: string): CaiLogEntry;
    getContainerName(): string;
    setContainerName(value: string): CaiLogEntry;
    getReplicaId(): string;
    setReplicaId(value: string): CaiLogEntry;
    getTraceId(): string;
    setTraceId(value: string): CaiLogEntry;
    getPhysicalLineCount(): number;
    setPhysicalLineCount(value: number): CaiLogEntry;
    getOperationType(): ondewo_nlu_operation_metadata_pb.OperationMetadata.OperationType;
    setOperationType(value: ondewo_nlu_operation_metadata_pb.OperationMetadata.OperationType): CaiLogEntry;
    getPhase(): string;
    setPhase(value: string): CaiLogEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CaiLogEntry.AsObject;
    static toObject(includeInstance: boolean, msg: CaiLogEntry): CaiLogEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CaiLogEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CaiLogEntry;
    static deserializeBinaryFromReader(message: CaiLogEntry, reader: jspb.BinaryReader): CaiLogEntry;
}

export namespace CaiLogEntry {
    export type AsObject = {
        seq: number,
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        timestampIsExact: boolean,
        level: ondewo_nlu_common_pb.LogSeverity,
        message: string,
        logSource: CaiLogSource,
        channel: CaiLogStreamChannel,
        emitter: string,
        threadName: string,
        processName: string,
        logStream: string,
        operationName: string,
        projectParent: string,
        containerId: string,
        containerName: string,
        replicaId: string,
        traceId: string,
        physicalLineCount: number,
        operationType: ondewo_nlu_operation_metadata_pb.OperationMetadata.OperationType,
        phase: string,
    }
}

export class CaiLogFilter extends jspb.Message { 
    clearLogStreamNamesList(): void;
    getLogStreamNamesList(): Array<string>;
    setLogStreamNamesList(value: Array<string>): CaiLogFilter;
    addLogStreamNames(value: string, index?: number): string;
    clearOperationNamesList(): void;
    getOperationNamesList(): Array<string>;
    setOperationNamesList(value: Array<string>): CaiLogFilter;
    addOperationNames(value: string, index?: number): string;
    getIncludeSubOperations(): boolean;
    setIncludeSubOperations(value: boolean): CaiLogFilter;
    clearProjectParentsList(): void;
    getProjectParentsList(): Array<string>;
    setProjectParentsList(value: Array<string>): CaiLogFilter;
    addProjectParents(value: string, index?: number): string;
    clearContainerIdsList(): void;
    getContainerIdsList(): Array<string>;
    setContainerIdsList(value: Array<string>): CaiLogFilter;
    addContainerIds(value: string, index?: number): string;
    clearContainerNamesList(): void;
    getContainerNamesList(): Array<string>;
    setContainerNamesList(value: Array<string>): CaiLogFilter;
    addContainerNames(value: string, index?: number): string;
    clearReplicaIdsList(): void;
    getReplicaIdsList(): Array<string>;
    setReplicaIdsList(value: Array<string>): CaiLogFilter;
    addReplicaIds(value: string, index?: number): string;
    clearOperationTypesList(): void;
    getOperationTypesList(): Array<ondewo_nlu_operation_metadata_pb.OperationMetadata.OperationType>;
    setOperationTypesList(value: Array<ondewo_nlu_operation_metadata_pb.OperationMetadata.OperationType>): CaiLogFilter;
    addOperationTypes(value: ondewo_nlu_operation_metadata_pb.OperationMetadata.OperationType, index?: number): ondewo_nlu_operation_metadata_pb.OperationMetadata.OperationType;
    clearPhasesList(): void;
    getPhasesList(): Array<string>;
    setPhasesList(value: Array<string>): CaiLogFilter;
    addPhases(value: string, index?: number): string;
    clearLogSourcesList(): void;
    getLogSourcesList(): Array<CaiLogSource>;
    setLogSourcesList(value: Array<CaiLogSource>): CaiLogFilter;
    addLogSources(value: CaiLogSource, index?: number): CaiLogSource;
    clearChannelsList(): void;
    getChannelsList(): Array<CaiLogStreamChannel>;
    setChannelsList(value: Array<CaiLogStreamChannel>): CaiLogFilter;
    addChannels(value: CaiLogStreamChannel, index?: number): CaiLogStreamChannel;
    getMinLogLevel(): ondewo_nlu_common_pb.LogSeverity;
    setMinLogLevel(value: ondewo_nlu_common_pb.LogSeverity): CaiLogFilter;
    clearLogLevelsList(): void;
    getLogLevelsList(): Array<ondewo_nlu_common_pb.LogSeverity>;
    setLogLevelsList(value: Array<ondewo_nlu_common_pb.LogSeverity>): CaiLogFilter;
    addLogLevels(value: ondewo_nlu_common_pb.LogSeverity, index?: number): ondewo_nlu_common_pb.LogSeverity;

    hasIncludeUnleveledLines(): boolean;
    clearIncludeUnleveledLines(): void;
    getIncludeUnleveledLines(): boolean | undefined;
    setIncludeUnleveledLines(value: boolean): CaiLogFilter;

    hasText(): boolean;
    clearText(): void;
    getText(): string | undefined;
    setText(value: string): CaiLogFilter;

    hasRegex(): boolean;
    clearRegex(): void;
    getRegex(): string | undefined;
    setRegex(value: string): CaiLogFilter;
    clearEmitterPrefixesList(): void;
    getEmitterPrefixesList(): Array<string>;
    setEmitterPrefixesList(value: Array<string>): CaiLogFilter;
    addEmitterPrefixes(value: string, index?: number): string;
    clearThreadNamesList(): void;
    getThreadNamesList(): Array<string>;
    setThreadNamesList(value: Array<string>): CaiLogFilter;
    addThreadNames(value: string, index?: number): string;
    clearProcessNamesList(): void;
    getProcessNamesList(): Array<string>;
    setProcessNamesList(value: Array<string>): CaiLogFilter;
    addProcessNames(value: string, index?: number): string;
    clearTraceIdsList(): void;
    getTraceIdsList(): Array<string>;
    setTraceIdsList(value: Array<string>): CaiLogFilter;
    addTraceIds(value: string, index?: number): string;

    hasStartTime(): boolean;
    clearStartTime(): void;
    getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): CaiLogFilter;

    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): CaiLogFilter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CaiLogFilter.AsObject;
    static toObject(includeInstance: boolean, msg: CaiLogFilter): CaiLogFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CaiLogFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CaiLogFilter;
    static deserializeBinaryFromReader(message: CaiLogFilter, reader: jspb.BinaryReader): CaiLogFilter;
}

export namespace CaiLogFilter {
    export type AsObject = {
        logStreamNamesList: Array<string>,
        operationNamesList: Array<string>,
        includeSubOperations: boolean,
        projectParentsList: Array<string>,
        containerIdsList: Array<string>,
        containerNamesList: Array<string>,
        replicaIdsList: Array<string>,
        operationTypesList: Array<ondewo_nlu_operation_metadata_pb.OperationMetadata.OperationType>,
        phasesList: Array<string>,
        logSourcesList: Array<CaiLogSource>,
        channelsList: Array<CaiLogStreamChannel>,
        minLogLevel: ondewo_nlu_common_pb.LogSeverity,
        logLevelsList: Array<ondewo_nlu_common_pb.LogSeverity>,
        includeUnleveledLines?: boolean,
        text?: string,
        regex?: string,
        emitterPrefixesList: Array<string>,
        threadNamesList: Array<string>,
        processNamesList: Array<string>,
        traceIdsList: Array<string>,
        startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class CaiLogStream extends jspb.Message { 
    getName(): string;
    setName(value: string): CaiLogStream;
    getLogSource(): CaiLogSource;
    setLogSource(value: CaiLogSource): CaiLogStream;
    getChannel(): CaiLogStreamChannel;
    setChannel(value: CaiLogStreamChannel): CaiLogStream;
    getProjectParent(): string;
    setProjectParent(value: string): CaiLogStream;
    getOperationName(): string;
    setOperationName(value: string): CaiLogStream;
    getContainerId(): string;
    setContainerId(value: string): CaiLogStream;
    getContainerName(): string;
    setContainerName(value: string): CaiLogStream;
    getHost(): string;
    setHost(value: string): CaiLogStream;
    getReplicaId(): string;
    setReplicaId(value: string): CaiLogStream;
    getProcessName(): string;
    setProcessName(value: string): CaiLogStream;
    getPhase(): string;
    setPhase(value: string): CaiLogStream;
    getCaptureState(): CaiLogCaptureState;
    setCaptureState(value: CaiLogCaptureState): CaiLogStream;
    getCaptureError(): string;
    setCaptureError(value: string): CaiLogStream;

    hasCaptureStartedAt(): boolean;
    clearCaptureStartedAt(): void;
    getCaptureStartedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCaptureStartedAt(value?: google_protobuf_timestamp_pb.Timestamp): CaiLogStream;

    hasCaptureFinishedAt(): boolean;
    clearCaptureFinishedAt(): void;
    getCaptureFinishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCaptureFinishedAt(value?: google_protobuf_timestamp_pb.Timestamp): CaiLogStream;
    getPartialCapture(): boolean;
    setPartialCapture(value: boolean): CaiLogStream;
    getMinAvailableSeq(): number;
    setMinAvailableSeq(value: number): CaiLogStream;
    getMaxAvailableSeq(): number;
    setMaxAvailableSeq(value: number): CaiLogStream;
    getLineCount(): number;
    setLineCount(value: number): CaiLogStream;
    getDroppedLineCount(): number;
    setDroppedLineCount(value: number): CaiLogStream;
    getOperationType(): ondewo_nlu_operation_metadata_pb.OperationMetadata.OperationType;
    setOperationType(value: ondewo_nlu_operation_metadata_pb.OperationMetadata.OperationType): CaiLogStream;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CaiLogStream.AsObject;
    static toObject(includeInstance: boolean, msg: CaiLogStream): CaiLogStream.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CaiLogStream, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CaiLogStream;
    static deserializeBinaryFromReader(message: CaiLogStream, reader: jspb.BinaryReader): CaiLogStream;
}

export namespace CaiLogStream {
    export type AsObject = {
        name: string,
        logSource: CaiLogSource,
        channel: CaiLogStreamChannel,
        projectParent: string,
        operationName: string,
        containerId: string,
        containerName: string,
        host: string,
        replicaId: string,
        processName: string,
        phase: string,
        captureState: CaiLogCaptureState,
        captureError: string,
        captureStartedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        captureFinishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        partialCapture: boolean,
        minAvailableSeq: number,
        maxAvailableSeq: number,
        lineCount: number,
        droppedLineCount: number,
        operationType: ondewo_nlu_operation_metadata_pb.OperationMetadata.OperationType,
    }
}

export class StreamLogsRequest extends jspb.Message { 

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): CaiLogFilter | undefined;
    setFilter(value?: CaiLogFilter): StreamLogsRequest;

    hasTailLines(): boolean;
    clearTailLines(): void;
    getTailLines(): number | undefined;
    setTailLines(value: number): StreamLogsRequest;

    hasResumeToken(): boolean;
    clearResumeToken(): void;
    getResumeToken(): string | undefined;
    setResumeToken(value: string): StreamLogsRequest;

    hasAfterSeq(): boolean;
    clearAfterSeq(): void;
    getAfterSeq(): number | undefined;
    setAfterSeq(value: number): StreamLogsRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): StreamLogsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamLogsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StreamLogsRequest): StreamLogsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamLogsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamLogsRequest;
    static deserializeBinaryFromReader(message: StreamLogsRequest, reader: jspb.BinaryReader): StreamLogsRequest;
}

export namespace StreamLogsRequest {
    export type AsObject = {
        filter?: CaiLogFilter.AsObject,
        tailLines?: number,
        resumeToken?: string,
        afterSeq?: number,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class StreamLogsResponse extends jspb.Message { 
    clearLogEntriesList(): void;
    getLogEntriesList(): Array<CaiLogEntry>;
    setLogEntriesList(value: Array<CaiLogEntry>): StreamLogsResponse;
    addLogEntries(value?: CaiLogEntry, index?: number): CaiLogEntry;
    getCaptureState(): CaiLogCaptureState;
    setCaptureState(value: CaiLogCaptureState): StreamLogsResponse;
    getCaptureError(): string;
    setCaptureError(value: string): StreamLogsResponse;
    getDroppedLineCount(): number;
    setDroppedLineCount(value: number): StreamLogsResponse;
    getResumeToken(): string;
    setResumeToken(value: string): StreamLogsResponse;
    getEndReason(): string;
    setEndReason(value: string): StreamLogsResponse;
    getEndReasonCode(): CaiLogStreamEndReason;
    setEndReasonCode(value: CaiLogStreamEndReason): StreamLogsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamLogsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StreamLogsResponse): StreamLogsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamLogsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamLogsResponse;
    static deserializeBinaryFromReader(message: StreamLogsResponse, reader: jspb.BinaryReader): StreamLogsResponse;
}

export namespace StreamLogsResponse {
    export type AsObject = {
        logEntriesList: Array<CaiLogEntry.AsObject>,
        captureState: CaiLogCaptureState,
        captureError: string,
        droppedLineCount: number,
        resumeToken: string,
        endReason: string,
        endReasonCode: CaiLogStreamEndReason,
    }
}

export class ListLogsRequest extends jspb.Message { 

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): CaiLogFilter | undefined;
    setFilter(value?: CaiLogFilter): ListLogsRequest;

    hasMaxLines(): boolean;
    clearMaxLines(): void;
    getMaxLines(): number | undefined;
    setMaxLines(value: number): ListLogsRequest;

    hasBeforeSeq(): boolean;
    clearBeforeSeq(): void;
    getBeforeSeq(): number | undefined;
    setBeforeSeq(value: number): ListLogsRequest;

    hasAfterSeq(): boolean;
    clearAfterSeq(): void;
    getAfterSeq(): number | undefined;
    setAfterSeq(value: number): ListLogsRequest;

    hasResumeToken(): boolean;
    clearResumeToken(): void;
    getResumeToken(): string | undefined;
    setResumeToken(value: string): ListLogsRequest;

    hasOldestFirst(): boolean;
    clearOldestFirst(): void;
    getOldestFirst(): boolean | undefined;
    setOldestFirst(value: boolean): ListLogsRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListLogsRequest;
    getIncludeCounts(): boolean;
    setIncludeCounts(value: boolean): ListLogsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLogsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListLogsRequest): ListLogsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLogsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLogsRequest;
    static deserializeBinaryFromReader(message: ListLogsRequest, reader: jspb.BinaryReader): ListLogsRequest;
}

export namespace ListLogsRequest {
    export type AsObject = {
        filter?: CaiLogFilter.AsObject,
        maxLines?: number,
        beforeSeq?: number,
        afterSeq?: number,
        resumeToken?: string,
        oldestFirst?: boolean,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        includeCounts: boolean,
    }
}

export class ListLogsResponse extends jspb.Message { 
    clearLogEntriesList(): void;
    getLogEntriesList(): Array<CaiLogEntry>;
    setLogEntriesList(value: Array<CaiLogEntry>): ListLogsResponse;
    addLogEntries(value?: CaiLogEntry, index?: number): CaiLogEntry;
    getTruncated(): boolean;
    setTruncated(value: boolean): ListLogsResponse;
    getMinAvailableSeq(): number;
    setMinAvailableSeq(value: number): ListLogsResponse;
    getMaxAvailableSeq(): number;
    setMaxAvailableSeq(value: number): ListLogsResponse;
    getHasMoreOlder(): boolean;
    setHasMoreOlder(value: boolean): ListLogsResponse;
    getHasMoreNewer(): boolean;
    setHasMoreNewer(value: boolean): ListLogsResponse;
    getNextResumeToken(): string;
    setNextResumeToken(value: string): ListLogsResponse;
    clearScopeLimitedFiltersList(): void;
    getScopeLimitedFiltersList(): Array<CaiLogFilterField>;
    setScopeLimitedFiltersList(value: Array<CaiLogFilterField>): ListLogsResponse;
    addScopeLimitedFilters(value: CaiLogFilterField, index?: number): CaiLogFilterField;

    hasTotalMatchingCount(): boolean;
    clearTotalMatchingCount(): void;
    getTotalMatchingCount(): number | undefined;
    setTotalMatchingCount(value: number): ListLogsResponse;

    getCountByLevelMap(): jspb.Map<string, number>;
    clearCountByLevelMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLogsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListLogsResponse): ListLogsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLogsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLogsResponse;
    static deserializeBinaryFromReader(message: ListLogsResponse, reader: jspb.BinaryReader): ListLogsResponse;
}

export namespace ListLogsResponse {
    export type AsObject = {
        logEntriesList: Array<CaiLogEntry.AsObject>,
        truncated: boolean,
        minAvailableSeq: number,
        maxAvailableSeq: number,
        hasMoreOlder: boolean,
        hasMoreNewer: boolean,
        nextResumeToken: string,
        scopeLimitedFiltersList: Array<CaiLogFilterField>,
        totalMatchingCount?: number,

        countByLevelMap: Array<[string, number]>,
    }
}

export class GetLogStreamRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GetLogStreamRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetLogStreamRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLogStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetLogStreamRequest): GetLogStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLogStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLogStreamRequest;
    static deserializeBinaryFromReader(message: GetLogStreamRequest, reader: jspb.BinaryReader): GetLogStreamRequest;
}

export namespace GetLogStreamRequest {
    export type AsObject = {
        name: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class ListLogStreamsRequest extends jspb.Message { 

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): CaiLogFilter | undefined;
    setFilter(value?: CaiLogFilter): ListLogStreamsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListLogStreamsRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListLogStreamsRequest;
    clearCaptureStatesList(): void;
    getCaptureStatesList(): Array<CaiLogCaptureState>;
    setCaptureStatesList(value: Array<CaiLogCaptureState>): ListLogStreamsRequest;
    addCaptureStates(value: CaiLogCaptureState, index?: number): CaiLogCaptureState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLogStreamsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListLogStreamsRequest): ListLogStreamsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLogStreamsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLogStreamsRequest;
    static deserializeBinaryFromReader(message: ListLogStreamsRequest, reader: jspb.BinaryReader): ListLogStreamsRequest;
}

export namespace ListLogStreamsRequest {
    export type AsObject = {
        filter?: CaiLogFilter.AsObject,
        pageToken: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        captureStatesList: Array<CaiLogCaptureState>,
    }
}

export class ListLogStreamsResponse extends jspb.Message { 
    clearLogStreamsList(): void;
    getLogStreamsList(): Array<CaiLogStream>;
    setLogStreamsList(value: Array<CaiLogStream>): ListLogStreamsResponse;
    addLogStreams(value?: CaiLogStream, index?: number): CaiLogStream;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListLogStreamsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLogStreamsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListLogStreamsResponse): ListLogStreamsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLogStreamsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLogStreamsResponse;
    static deserializeBinaryFromReader(message: ListLogStreamsResponse, reader: jspb.BinaryReader): ListLogStreamsResponse;
}

export namespace ListLogStreamsResponse {
    export type AsObject = {
        logStreamsList: Array<CaiLogStream.AsObject>,
        nextPageToken: string,
    }
}

export class ExportLogsRequest extends jspb.Message { 

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): CaiLogFilter | undefined;
    setFilter(value?: CaiLogFilter): ExportLogsRequest;
    getFormat(): CaiLogExportFormat;
    setFormat(value: CaiLogExportFormat): ExportLogsRequest;
    getIncludeMetadata(): boolean;
    setIncludeMetadata(value: boolean): ExportLogsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExportLogsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ExportLogsRequest): ExportLogsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExportLogsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExportLogsRequest;
    static deserializeBinaryFromReader(message: ExportLogsRequest, reader: jspb.BinaryReader): ExportLogsRequest;
}

export namespace ExportLogsRequest {
    export type AsObject = {
        filter?: CaiLogFilter.AsObject,
        format: CaiLogExportFormat,
        includeMetadata: boolean,
    }
}

export class ExportLogsResponse extends jspb.Message { 
    getChunk(): Uint8Array | string;
    getChunk_asU8(): Uint8Array;
    getChunk_asB64(): string;
    setChunk(value: Uint8Array | string): ExportLogsResponse;
    getEntryCount(): number;
    setEntryCount(value: number): ExportLogsResponse;
    getLast(): boolean;
    setLast(value: boolean): ExportLogsResponse;
    getTruncated(): boolean;
    setTruncated(value: boolean): ExportLogsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExportLogsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ExportLogsResponse): ExportLogsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExportLogsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExportLogsResponse;
    static deserializeBinaryFromReader(message: ExportLogsResponse, reader: jspb.BinaryReader): ExportLogsResponse;
}

export namespace ExportLogsResponse {
    export type AsObject = {
        chunk: Uint8Array | string,
        entryCount: number,
        last: boolean,
        truncated: boolean,
    }
}

export class DeleteLogsRequest extends jspb.Message { 

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): CaiLogFilter | undefined;
    setFilter(value?: CaiLogFilter): DeleteLogsRequest;
    getValidateOnly(): boolean;
    setValidateOnly(value: boolean): DeleteLogsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteLogsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteLogsRequest): DeleteLogsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteLogsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteLogsRequest;
    static deserializeBinaryFromReader(message: DeleteLogsRequest, reader: jspb.BinaryReader): DeleteLogsRequest;
}

export namespace DeleteLogsRequest {
    export type AsObject = {
        filter?: CaiLogFilter.AsObject,
        validateOnly: boolean,
    }
}

export class DeleteLogsResponse extends jspb.Message { 
    getDeletedLogEntryCount(): number;
    setDeletedLogEntryCount(value: number): DeleteLogsResponse;
    getDeletedLogStreamCount(): number;
    setDeletedLogStreamCount(value: number): DeleteLogsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteLogsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteLogsResponse): DeleteLogsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteLogsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteLogsResponse;
    static deserializeBinaryFromReader(message: DeleteLogsResponse, reader: jspb.BinaryReader): DeleteLogsResponse;
}

export namespace DeleteLogsResponse {
    export type AsObject = {
        deletedLogEntryCount: number,
        deletedLogStreamCount: number,
    }
}

export enum CaiLogSource {
    CAI_LOG_SOURCE_UNSPECIFIED = 0,
    CAI_LOG_SOURCE_SERVER = 1,
    CAI_LOG_SOURCE_REMOTE_OPERATION_CONTAINER = 2,
    CAI_LOG_SOURCE_HELPER_CONTAINER = 3,
}

export enum CaiLogStreamChannel {
    CAI_LOG_STREAM_CHANNEL_UNSPECIFIED = 0,
    CAI_LOG_STREAM_CHANNEL_STDOUT = 1,
    CAI_LOG_STREAM_CHANNEL_STDERR = 2,
}

export enum CaiLogCaptureState {
    CAI_LOG_CAPTURE_STATE_UNSPECIFIED = 0,
    CAI_LOG_CAPTURE_STATE_CAPTURING = 1,
    CAI_LOG_CAPTURE_STATE_STOPPED = 2,
    CAI_LOG_CAPTURE_STATE_FAILED = 3,
    CAI_LOG_CAPTURE_STATE_DETACHED = 4,
}

export enum CaiLogFilterField {
    CAI_LOG_FILTER_FIELD_UNSPECIFIED = 0,
    CAI_LOG_FILTER_FIELD_TEXT = 1,
    CAI_LOG_FILTER_FIELD_REGEX = 2,
    CAI_LOG_FILTER_FIELD_LOG_SOURCES = 3,
    CAI_LOG_FILTER_FIELD_EMITTER_PREFIXES = 4,
    CAI_LOG_FILTER_FIELD_THREAD_NAMES = 5,
    CAI_LOG_FILTER_FIELD_PROCESS_NAMES = 6,
}

export enum CaiLogStreamEndReason {
    CAI_LOG_STREAM_END_REASON_UNSPECIFIED = 0,
    CAI_LOG_STREAM_END_REASON_ALL_CAPTURES_TERMINATED = 1,
    CAI_LOG_STREAM_END_REASON_MAX_DURATION = 2,
    CAI_LOG_STREAM_END_REASON_SERVER_SHUTDOWN = 3,
    CAI_LOG_STREAM_END_REASON_PERMISSION_REVOKED = 4,
    CAI_LOG_STREAM_END_REASON_CREDENTIALS_EXPIRED = 5,
}

export enum CaiLogExportFormat {
    CAI_LOG_EXPORT_FORMAT_UNSPECIFIED = 0,
    CAI_LOG_EXPORT_FORMAT_TEXT = 1,
    CAI_LOG_EXPORT_FORMAT_NDJSON = 2,
    CAI_LOG_EXPORT_FORMAT_CSV = 3,
}
