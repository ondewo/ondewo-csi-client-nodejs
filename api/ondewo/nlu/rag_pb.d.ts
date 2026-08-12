// package: ondewo.nlu
// file: ondewo/nlu/rag.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ondewo_nlu_common_pb from "../../ondewo/nlu/common_pb";
import * as ondewo_nlu_operation_metadata_pb from "../../ondewo/nlu/operation_metadata_pb";
import * as ondewo_nlu_operations_pb from "../../ondewo/nlu/operations_pb";
import * as ondewo_nlu_session_pb from "../../ondewo/nlu/session_pb";

export class RagFileMetadata extends jspb.Message { 
    getFileName(): string;
    setFileName(value: string): RagFileMetadata;
    getContentType(): string;
    setContentType(value: string): RagFileMetadata;
    getSize(): number;
    setSize(value: number): RagFileMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagFileMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: RagFileMetadata): RagFileMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagFileMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagFileMetadata;
    static deserializeBinaryFromReader(message: RagFileMetadata, reader: jspb.BinaryReader): RagFileMetadata;
}

export namespace RagFileMetadata {
    export type AsObject = {
        fileName: string,
        contentType: string,
        size: number,
    }
}

export class RagPartialSuccess extends jspb.Message { 
    getSuccessCount(): number;
    setSuccessCount(value: number): RagPartialSuccess;
    clearErrorsList(): void;
    getErrorsList(): Array<string>;
    setErrorsList(value: Array<string>): RagPartialSuccess;
    addErrors(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagPartialSuccess.AsObject;
    static toObject(includeInstance: boolean, msg: RagPartialSuccess): RagPartialSuccess.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagPartialSuccess, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagPartialSuccess;
    static deserializeBinaryFromReader(message: RagPartialSuccess, reader: jspb.BinaryReader): RagPartialSuccess;
}

export namespace RagPartialSuccess {
    export type AsObject = {
        successCount: number,
        errorsList: Array<string>,
    }
}

export class RagCreateDatasetRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagCreateDatasetRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagCreateDatasetRequest;
    getName(): string;
    setName(value: string): RagCreateDatasetRequest;
    getDescription(): string;
    setDescription(value: string): RagCreateDatasetRequest;
    getAvatar(): string;
    setAvatar(value: string): RagCreateDatasetRequest;
    getChunkMethod(): RagChunkMethod;
    setChunkMethod(value: RagChunkMethod): RagCreateDatasetRequest;

    hasParserConfig(): boolean;
    clearParserConfig(): void;
    getParserConfig(): RagParserConfig | undefined;
    setParserConfig(value?: RagParserConfig): RagCreateDatasetRequest;
    getEmbeddingModelCcaiServiceName(): string;
    setEmbeddingModelCcaiServiceName(value: string): RagCreateDatasetRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCreateDatasetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagCreateDatasetRequest): RagCreateDatasetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCreateDatasetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCreateDatasetRequest;
    static deserializeBinaryFromReader(message: RagCreateDatasetRequest, reader: jspb.BinaryReader): RagCreateDatasetRequest;
}

export namespace RagCreateDatasetRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        name: string,
        description: string,
        avatar: string,
        chunkMethod: RagChunkMethod,
        parserConfig?: RagParserConfig.AsObject,
        embeddingModelCcaiServiceName: string,
    }
}

export class RagParserConfig extends jspb.Message { 

    hasAutoKeywords(): boolean;
    clearAutoKeywords(): void;
    getAutoKeywords(): number | undefined;
    setAutoKeywords(value: number): RagParserConfig;

    hasAutoQuestions(): boolean;
    clearAutoQuestions(): void;
    getAutoQuestions(): number | undefined;
    setAutoQuestions(value: number): RagParserConfig;
    getChunkTokenNum(): number;
    setChunkTokenNum(value: number): RagParserConfig;
    getDelimiter(): string;
    setDelimiter(value: string): RagParserConfig;

    hasHtml4excel(): boolean;
    clearHtml4excel(): void;
    getHtml4excel(): boolean | undefined;
    setHtml4excel(value: boolean): RagParserConfig;
    getLayoutRecognize(): string;
    setLayoutRecognize(value: string): RagParserConfig;
    clearTagKbIdsList(): void;
    getTagKbIdsList(): Array<string>;
    setTagKbIdsList(value: Array<string>): RagParserConfig;
    addTagKbIds(value: string, index?: number): string;
    getTopnTags(): number;
    setTopnTags(value: number): RagParserConfig;

    hasFilenameEmbdWeight(): boolean;
    clearFilenameEmbdWeight(): void;
    getFilenameEmbdWeight(): number | undefined;
    setFilenameEmbdWeight(value: number): RagParserConfig;
    getTaskPageSize(): number;
    setTaskPageSize(value: number): RagParserConfig;

    hasRaptor(): boolean;
    clearRaptor(): void;
    getRaptor(): RagRaptorConfig | undefined;
    setRaptor(value?: RagRaptorConfig): RagParserConfig;

    hasGraphrag(): boolean;
    clearGraphrag(): void;
    getGraphrag(): RagGraphRagConfig | undefined;
    setGraphrag(value?: RagGraphRagConfig): RagParserConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagParserConfig.AsObject;
    static toObject(includeInstance: boolean, msg: RagParserConfig): RagParserConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagParserConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagParserConfig;
    static deserializeBinaryFromReader(message: RagParserConfig, reader: jspb.BinaryReader): RagParserConfig;
}

export namespace RagParserConfig {
    export type AsObject = {
        autoKeywords?: number,
        autoQuestions?: number,
        chunkTokenNum: number,
        delimiter: string,
        html4excel?: boolean,
        layoutRecognize: string,
        tagKbIdsList: Array<string>,
        topnTags: number,
        filenameEmbdWeight?: number,
        taskPageSize: number,
        raptor?: RagRaptorConfig.AsObject,
        graphrag?: RagGraphRagConfig.AsObject,
    }
}

export class RagRaptorConfig extends jspb.Message { 

    hasUseRaptor(): boolean;
    clearUseRaptor(): void;
    getUseRaptor(): boolean | undefined;
    setUseRaptor(value: boolean): RagRaptorConfig;
    getPrompt(): string;
    setPrompt(value: string): RagRaptorConfig;
    getMaxToken(): number;
    setMaxToken(value: number): RagRaptorConfig;

    hasThreshold(): boolean;
    clearThreshold(): void;
    getThreshold(): number | undefined;
    setThreshold(value: number): RagRaptorConfig;
    getMaxCluster(): number;
    setMaxCluster(value: number): RagRaptorConfig;

    hasRandomSeed(): boolean;
    clearRandomSeed(): void;
    getRandomSeed(): number | undefined;
    setRandomSeed(value: number): RagRaptorConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagRaptorConfig.AsObject;
    static toObject(includeInstance: boolean, msg: RagRaptorConfig): RagRaptorConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagRaptorConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagRaptorConfig;
    static deserializeBinaryFromReader(message: RagRaptorConfig, reader: jspb.BinaryReader): RagRaptorConfig;
}

export namespace RagRaptorConfig {
    export type AsObject = {
        useRaptor?: boolean,
        prompt: string,
        maxToken: number,
        threshold?: number,
        maxCluster: number,
        randomSeed?: number,
    }
}

export class RagGraphRagConfig extends jspb.Message { 

    hasUseGraphrag(): boolean;
    clearUseGraphrag(): void;
    getUseGraphrag(): boolean | undefined;
    setUseGraphrag(value: boolean): RagGraphRagConfig;
    clearEntityTypesList(): void;
    getEntityTypesList(): Array<string>;
    setEntityTypesList(value: Array<string>): RagGraphRagConfig;
    addEntityTypes(value: string, index?: number): string;
    getMethod(): RagGraphRagMethod;
    setMethod(value: RagGraphRagMethod): RagGraphRagConfig;

    hasCommunity(): boolean;
    clearCommunity(): void;
    getCommunity(): boolean | undefined;
    setCommunity(value: boolean): RagGraphRagConfig;

    hasResolution(): boolean;
    clearResolution(): void;
    getResolution(): boolean | undefined;
    setResolution(value: boolean): RagGraphRagConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagGraphRagConfig.AsObject;
    static toObject(includeInstance: boolean, msg: RagGraphRagConfig): RagGraphRagConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagGraphRagConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagGraphRagConfig;
    static deserializeBinaryFromReader(message: RagGraphRagConfig, reader: jspb.BinaryReader): RagGraphRagConfig;
}

export namespace RagGraphRagConfig {
    export type AsObject = {
        useGraphrag?: boolean,
        entityTypesList: Array<string>,
        method: RagGraphRagMethod,
        community?: boolean,
        resolution?: boolean,
    }
}

export class RagDataset extends jspb.Message { 
    getId(): string;
    setId(value: string): RagDataset;
    getAvatar(): string;
    setAvatar(value: string): RagDataset;
    getName(): string;
    setName(value: string): RagDataset;
    getDescription(): string;
    setDescription(value: string): RagDataset;

    hasDocumentCount(): boolean;
    clearDocumentCount(): void;
    getDocumentCount(): number | undefined;
    setDocumentCount(value: number): RagDataset;

    hasTokenNum(): boolean;
    clearTokenNum(): void;
    getTokenNum(): number | undefined;
    setTokenNum(value: number): RagDataset;

    hasChunkCount(): boolean;
    clearChunkCount(): void;
    getChunkCount(): number | undefined;
    setChunkCount(value: number): RagDataset;
    getChunkMethod(): RagChunkMethod;
    setChunkMethod(value: RagChunkMethod): RagDataset;

    hasParserConfig(): boolean;
    clearParserConfig(): void;
    getParserConfig(): RagParserConfig | undefined;
    setParserConfig(value?: RagParserConfig): RagDataset;

    hasPagerank(): boolean;
    clearPagerank(): void;
    getPagerank(): number | undefined;
    setPagerank(value: number): RagDataset;

    hasParsingStatus(): boolean;
    clearParsingStatus(): void;
    getParsingStatus(): RagDatasetParsingStatus | undefined;
    setParsingStatus(value?: RagDatasetParsingStatus): RagDataset;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): RagDataset;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): RagDataset;
    getEmbeddingModelCcaiServiceName(): string;
    setEmbeddingModelCcaiServiceName(value: string): RagDataset;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDataset.AsObject;
    static toObject(includeInstance: boolean, msg: RagDataset): RagDataset.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDataset, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDataset;
    static deserializeBinaryFromReader(message: RagDataset, reader: jspb.BinaryReader): RagDataset;
}

export namespace RagDataset {
    export type AsObject = {
        id: string,
        avatar: string,
        name: string,
        description: string,
        documentCount?: number,
        tokenNum?: number,
        chunkCount?: number,
        chunkMethod: RagChunkMethod,
        parserConfig?: RagParserConfig.AsObject,
        pagerank?: number,
        parsingStatus?: RagDatasetParsingStatus.AsObject,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        embeddingModelCcaiServiceName: string,
    }
}

export class RagDatasetParsingStatus extends jspb.Message { 
    getUnstart(): number;
    setUnstart(value: number): RagDatasetParsingStatus;
    getRunning(): number;
    setRunning(value: number): RagDatasetParsingStatus;
    getCancel(): number;
    setCancel(value: number): RagDatasetParsingStatus;
    getDone(): number;
    setDone(value: number): RagDatasetParsingStatus;
    getFail(): number;
    setFail(value: number): RagDatasetParsingStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDatasetParsingStatus.AsObject;
    static toObject(includeInstance: boolean, msg: RagDatasetParsingStatus): RagDatasetParsingStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDatasetParsingStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDatasetParsingStatus;
    static deserializeBinaryFromReader(message: RagDatasetParsingStatus, reader: jspb.BinaryReader): RagDatasetParsingStatus;
}

export namespace RagDatasetParsingStatus {
    export type AsObject = {
        unstart: number,
        running: number,
        cancel: number,
        done: number,
        fail: number,
    }
}

export class RagUpdateDatasetRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagUpdateDatasetRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagUpdateDatasetRequest;
    getDatasetId(): string;
    setDatasetId(value: string): RagUpdateDatasetRequest;
    getName(): string;
    setName(value: string): RagUpdateDatasetRequest;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): string | undefined;
    setDescription(value: string): RagUpdateDatasetRequest;

    hasAvatar(): boolean;
    clearAvatar(): void;
    getAvatar(): string | undefined;
    setAvatar(value: string): RagUpdateDatasetRequest;
    getChunkMethod(): RagChunkMethod;
    setChunkMethod(value: RagChunkMethod): RagUpdateDatasetRequest;

    hasParserConfig(): boolean;
    clearParserConfig(): void;
    getParserConfig(): RagParserConfig | undefined;
    setParserConfig(value?: RagParserConfig): RagUpdateDatasetRequest;

    hasPagerank(): boolean;
    clearPagerank(): void;
    getPagerank(): number | undefined;
    setPagerank(value: number): RagUpdateDatasetRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): RagUpdateDatasetRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): RagUpdateDatasetRequest;
    getEmbeddingModelCcaiServiceName(): string;
    setEmbeddingModelCcaiServiceName(value: string): RagUpdateDatasetRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagUpdateDatasetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagUpdateDatasetRequest): RagUpdateDatasetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagUpdateDatasetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagUpdateDatasetRequest;
    static deserializeBinaryFromReader(message: RagUpdateDatasetRequest, reader: jspb.BinaryReader): RagUpdateDatasetRequest;
}

export namespace RagUpdateDatasetRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        datasetId: string,
        name: string,
        description?: string,
        avatar?: string,
        chunkMethod: RagChunkMethod,
        parserConfig?: RagParserConfig.AsObject,
        pagerank?: number,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        embeddingModelCcaiServiceName: string,
    }
}

export class RagDeleteRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagDeleteRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagDeleteRequest;
    clearIdsList(): void;
    getIdsList(): Array<string>;
    setIdsList(value: Array<string>): RagDeleteRequest;
    addIds(value: string, index?: number): string;
    getDeleteAll(): boolean;
    setDeleteAll(value: boolean): RagDeleteRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagDeleteRequest): RagDeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDeleteRequest;
    static deserializeBinaryFromReader(message: RagDeleteRequest, reader: jspb.BinaryReader): RagDeleteRequest;
}

export namespace RagDeleteRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        idsList: Array<string>,
        deleteAll: boolean,
    }
}

export class RagListDatasetsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagListDatasetsRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagListDatasetsRequest;
    getPageToken(): string;
    setPageToken(value: string): RagListDatasetsRequest;
    getId(): string;
    setId(value: string): RagListDatasetsRequest;
    getName(): string;
    setName(value: string): RagListDatasetsRequest;
    getOrderby(): string;
    setOrderby(value: string): RagListDatasetsRequest;

    hasDesc(): boolean;
    clearDesc(): void;
    getDesc(): boolean | undefined;
    setDesc(value: boolean): RagListDatasetsRequest;
    getSortingMode(): ondewo_nlu_common_pb.SortingMode;
    setSortingMode(value: ondewo_nlu_common_pb.SortingMode): RagListDatasetsRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): RagListDatasetsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagListDatasetsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagListDatasetsRequest): RagListDatasetsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagListDatasetsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagListDatasetsRequest;
    static deserializeBinaryFromReader(message: RagListDatasetsRequest, reader: jspb.BinaryReader): RagListDatasetsRequest;
}

export namespace RagListDatasetsRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        pageToken: string,
        id: string,
        name: string,
        orderby: string,
        desc?: boolean,
        sortingMode: ondewo_nlu_common_pb.SortingMode,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class RagDatasetList extends jspb.Message { 
    clearDatasetsList(): void;
    getDatasetsList(): Array<RagDataset>;
    setDatasetsList(value: Array<RagDataset>): RagDatasetList;
    addDatasets(value?: RagDataset, index?: number): RagDataset;
    getTotal(): number;
    setTotal(value: number): RagDatasetList;
    getNextPageToken(): string;
    setNextPageToken(value: string): RagDatasetList;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDatasetList.AsObject;
    static toObject(includeInstance: boolean, msg: RagDatasetList): RagDatasetList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDatasetList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDatasetList;
    static deserializeBinaryFromReader(message: RagDatasetList, reader: jspb.BinaryReader): RagDatasetList;
}

export namespace RagDatasetList {
    export type AsObject = {
        datasetsList: Array<RagDataset.AsObject>,
        total: number,
        nextPageToken: string,
    }
}

export class RagUploadDocumentRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagUploadDocumentRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagUploadDocumentRequest;
    getDatasetId(): string;
    setDatasetId(value: string): RagUploadDocumentRequest;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): RagFileMetadata | undefined;
    setMetadata(value?: RagFileMetadata): RagUploadDocumentRequest;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): RagUploadDocumentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagUploadDocumentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagUploadDocumentRequest): RagUploadDocumentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagUploadDocumentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagUploadDocumentRequest;
    static deserializeBinaryFromReader(message: RagUploadDocumentRequest, reader: jspb.BinaryReader): RagUploadDocumentRequest;
}

export namespace RagUploadDocumentRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        datasetId: string,
        metadata?: RagFileMetadata.AsObject,
        data: Uint8Array | string,
    }
}

export class RagDocument extends jspb.Message { 
    getId(): string;
    setId(value: string): RagDocument;
    getThumbnail(): string;
    setThumbnail(value: string): RagDocument;
    getDatasetId(): string;
    setDatasetId(value: string): RagDocument;
    getChunkMethod(): RagChunkMethod;
    setChunkMethod(value: RagChunkMethod): RagDocument;

    hasParserConfig(): boolean;
    clearParserConfig(): void;
    getParserConfig(): RagParserConfig | undefined;
    setParserConfig(value?: RagParserConfig): RagDocument;
    getType(): RagDocumentType;
    setType(value: RagDocumentType): RagDocument;
    getName(): string;
    setName(value: string): RagDocument;

    hasSize(): boolean;
    clearSize(): void;
    getSize(): number | undefined;
    setSize(value: number): RagDocument;

    hasChunkCount(): boolean;
    clearChunkCount(): void;
    getChunkCount(): number | undefined;
    setChunkCount(value: number): RagDocument;

    hasTokenCount(): boolean;
    clearTokenCount(): void;
    getTokenCount(): number | undefined;
    setTokenCount(value: number): RagDocument;

    hasProgress(): boolean;
    clearProgress(): void;
    getProgress(): number | undefined;
    setProgress(value: number): RagDocument;
    getProgressMsg(): string;
    setProgressMsg(value: string): RagDocument;

    hasProcessBeginAt(): boolean;
    clearProcessBeginAt(): void;
    getProcessBeginAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setProcessBeginAt(value?: google_protobuf_timestamp_pb.Timestamp): RagDocument;

    hasProcessDuration(): boolean;
    clearProcessDuration(): void;
    getProcessDuration(): number | undefined;
    setProcessDuration(value: number): RagDocument;

    hasMetaFields(): boolean;
    clearMetaFields(): void;
    getMetaFields(): google_protobuf_struct_pb.Struct | undefined;
    setMetaFields(value?: google_protobuf_struct_pb.Struct): RagDocument;
    getRun(): RagDocumentStatus;
    setRun(value: RagDocumentStatus): RagDocument;
    getStatus(): string;
    setStatus(value: string): RagDocument;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): RagDocument;

    hasUpdateTime(): boolean;
    clearUpdateTime(): void;
    getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): RagDocument;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDocument.AsObject;
    static toObject(includeInstance: boolean, msg: RagDocument): RagDocument.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDocument, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDocument;
    static deserializeBinaryFromReader(message: RagDocument, reader: jspb.BinaryReader): RagDocument;
}

export namespace RagDocument {
    export type AsObject = {
        id: string,
        thumbnail: string,
        datasetId: string,
        chunkMethod: RagChunkMethod,
        parserConfig?: RagParserConfig.AsObject,
        type: RagDocumentType,
        name: string,
        size?: number,
        chunkCount?: number,
        tokenCount?: number,
        progress?: number,
        progressMsg: string,
        processBeginAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        processDuration?: number,
        metaFields?: google_protobuf_struct_pb.Struct.AsObject,
        run: RagDocumentStatus,
        status: string,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class RagUpdateDocumentRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagUpdateDocumentRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagUpdateDocumentRequest;
    getDatasetId(): string;
    setDatasetId(value: string): RagUpdateDocumentRequest;
    getDocumentId(): string;
    setDocumentId(value: string): RagUpdateDocumentRequest;
    getName(): string;
    setName(value: string): RagUpdateDocumentRequest;
    getChunkMethod(): RagChunkMethod;
    setChunkMethod(value: RagChunkMethod): RagUpdateDocumentRequest;

    hasParserConfig(): boolean;
    clearParserConfig(): void;
    getParserConfig(): RagParserConfig | undefined;
    setParserConfig(value?: RagParserConfig): RagUpdateDocumentRequest;

    hasEnabled(): boolean;
    clearEnabled(): void;
    getEnabled(): boolean | undefined;
    setEnabled(value: boolean): RagUpdateDocumentRequest;

    hasMetaFields(): boolean;
    clearMetaFields(): void;
    getMetaFields(): google_protobuf_struct_pb.Struct | undefined;
    setMetaFields(value?: google_protobuf_struct_pb.Struct): RagUpdateDocumentRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): RagUpdateDocumentRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): RagUpdateDocumentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagUpdateDocumentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagUpdateDocumentRequest): RagUpdateDocumentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagUpdateDocumentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagUpdateDocumentRequest;
    static deserializeBinaryFromReader(message: RagUpdateDocumentRequest, reader: jspb.BinaryReader): RagUpdateDocumentRequest;
}

export namespace RagUpdateDocumentRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        datasetId: string,
        documentId: string,
        name: string,
        chunkMethod: RagChunkMethod,
        parserConfig?: RagParserConfig.AsObject,
        enabled?: boolean,
        metaFields?: google_protobuf_struct_pb.Struct.AsObject,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class RagDownloadDocumentRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagDownloadDocumentRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagDownloadDocumentRequest;
    getDatasetId(): string;
    setDatasetId(value: string): RagDownloadDocumentRequest;
    getDocumentId(): string;
    setDocumentId(value: string): RagDownloadDocumentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDownloadDocumentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagDownloadDocumentRequest): RagDownloadDocumentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDownloadDocumentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDownloadDocumentRequest;
    static deserializeBinaryFromReader(message: RagDownloadDocumentRequest, reader: jspb.BinaryReader): RagDownloadDocumentRequest;
}

export namespace RagDownloadDocumentRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        datasetId: string,
        documentId: string,
    }
}

export class RagFileChunk extends jspb.Message { 

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): RagFileMetadata | undefined;
    setMetadata(value?: RagFileMetadata): RagFileChunk;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): RagFileChunk;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagFileChunk.AsObject;
    static toObject(includeInstance: boolean, msg: RagFileChunk): RagFileChunk.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagFileChunk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagFileChunk;
    static deserializeBinaryFromReader(message: RagFileChunk, reader: jspb.BinaryReader): RagFileChunk;
}

export namespace RagFileChunk {
    export type AsObject = {
        metadata?: RagFileMetadata.AsObject,
        data: Uint8Array | string,
    }
}

export class RagListDocumentsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagListDocumentsRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagListDocumentsRequest;
    getDatasetId(): string;
    setDatasetId(value: string): RagListDocumentsRequest;
    getId(): string;
    setId(value: string): RagListDocumentsRequest;
    getName(): string;
    setName(value: string): RagListDocumentsRequest;
    getPageToken(): string;
    setPageToken(value: string): RagListDocumentsRequest;
    getOrderby(): string;
    setOrderby(value: string): RagListDocumentsRequest;

    hasDesc(): boolean;
    clearDesc(): void;
    getDesc(): boolean | undefined;
    setDesc(value: boolean): RagListDocumentsRequest;
    getKeywords(): string;
    setKeywords(value: string): RagListDocumentsRequest;
    clearSuffixList(): void;
    getSuffixList(): Array<string>;
    setSuffixList(value: Array<string>): RagListDocumentsRequest;
    addSuffix(value: string, index?: number): string;
    clearRunStatusList(): void;
    getRunStatusList(): Array<RagDocumentStatus>;
    setRunStatusList(value: Array<RagDocumentStatus>): RagListDocumentsRequest;
    addRunStatus(value: RagDocumentStatus, index?: number): RagDocumentStatus;

    hasCreateTimeFrom(): boolean;
    clearCreateTimeFrom(): void;
    getCreateTimeFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTimeFrom(value?: google_protobuf_timestamp_pb.Timestamp): RagListDocumentsRequest;

    hasCreateTimeTo(): boolean;
    clearCreateTimeTo(): void;
    getCreateTimeTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTimeTo(value?: google_protobuf_timestamp_pb.Timestamp): RagListDocumentsRequest;

    hasMetadataCondition(): boolean;
    clearMetadataCondition(): void;
    getMetadataCondition(): RagMetadataConditions | undefined;
    setMetadataCondition(value?: RagMetadataConditions): RagListDocumentsRequest;
    getSortingMode(): ondewo_nlu_common_pb.SortingMode;
    setSortingMode(value: ondewo_nlu_common_pb.SortingMode): RagListDocumentsRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): RagListDocumentsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagListDocumentsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagListDocumentsRequest): RagListDocumentsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagListDocumentsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagListDocumentsRequest;
    static deserializeBinaryFromReader(message: RagListDocumentsRequest, reader: jspb.BinaryReader): RagListDocumentsRequest;
}

export namespace RagListDocumentsRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        datasetId: string,
        id: string,
        name: string,
        pageToken: string,
        orderby: string,
        desc?: boolean,
        keywords: string,
        suffixList: Array<string>,
        runStatusList: Array<RagDocumentStatus>,
        createTimeFrom?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createTimeTo?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        metadataCondition?: RagMetadataConditions.AsObject,
        sortingMode: ondewo_nlu_common_pb.SortingMode,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class RagMetadataConditions extends jspb.Message { 
    getLogic(): RagLogic;
    setLogic(value: RagLogic): RagMetadataConditions;
    clearConditionsList(): void;
    getConditionsList(): Array<RagMetadataCondition>;
    setConditionsList(value: Array<RagMetadataCondition>): RagMetadataConditions;
    addConditions(value?: RagMetadataCondition, index?: number): RagMetadataCondition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagMetadataConditions.AsObject;
    static toObject(includeInstance: boolean, msg: RagMetadataConditions): RagMetadataConditions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagMetadataConditions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagMetadataConditions;
    static deserializeBinaryFromReader(message: RagMetadataConditions, reader: jspb.BinaryReader): RagMetadataConditions;
}

export namespace RagMetadataConditions {
    export type AsObject = {
        logic: RagLogic,
        conditionsList: Array<RagMetadataCondition.AsObject>,
    }
}

export class RagMetadataCondition extends jspb.Message { 
    getName(): string;
    setName(value: string): RagMetadataCondition;
    getComparisonOperator(): RagComparisonOperator;
    setComparisonOperator(value: RagComparisonOperator): RagMetadataCondition;
    getValue(): string;
    setValue(value: string): RagMetadataCondition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagMetadataCondition.AsObject;
    static toObject(includeInstance: boolean, msg: RagMetadataCondition): RagMetadataCondition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagMetadataCondition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagMetadataCondition;
    static deserializeBinaryFromReader(message: RagMetadataCondition, reader: jspb.BinaryReader): RagMetadataCondition;
}

export namespace RagMetadataCondition {
    export type AsObject = {
        name: string,
        comparisonOperator: RagComparisonOperator,
        value: string,
    }
}

export class RagDocumentList extends jspb.Message { 
    clearDocumentsList(): void;
    getDocumentsList(): Array<RagDocument>;
    setDocumentsList(value: Array<RagDocument>): RagDocumentList;
    addDocuments(value?: RagDocument, index?: number): RagDocument;
    getTotal(): number;
    setTotal(value: number): RagDocumentList;
    getNextPageToken(): string;
    setNextPageToken(value: string): RagDocumentList;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDocumentList.AsObject;
    static toObject(includeInstance: boolean, msg: RagDocumentList): RagDocumentList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDocumentList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDocumentList;
    static deserializeBinaryFromReader(message: RagDocumentList, reader: jspb.BinaryReader): RagDocumentList;
}

export namespace RagDocumentList {
    export type AsObject = {
        documentsList: Array<RagDocument.AsObject>,
        total: number,
        nextPageToken: string,
    }
}

export class RagDeleteDocumentsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagDeleteDocumentsRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagDeleteDocumentsRequest;
    getDatasetId(): string;
    setDatasetId(value: string): RagDeleteDocumentsRequest;
    clearIdsList(): void;
    getIdsList(): Array<string>;
    setIdsList(value: Array<string>): RagDeleteDocumentsRequest;
    addIds(value: string, index?: number): string;
    getDeleteAll(): boolean;
    setDeleteAll(value: boolean): RagDeleteDocumentsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDeleteDocumentsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagDeleteDocumentsRequest): RagDeleteDocumentsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDeleteDocumentsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDeleteDocumentsRequest;
    static deserializeBinaryFromReader(message: RagDeleteDocumentsRequest, reader: jspb.BinaryReader): RagDeleteDocumentsRequest;
}

export namespace RagDeleteDocumentsRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        datasetId: string,
        idsList: Array<string>,
        deleteAll: boolean,
    }
}

export class RagDocumentIdsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagDocumentIdsRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagDocumentIdsRequest;
    getDatasetId(): string;
    setDatasetId(value: string): RagDocumentIdsRequest;
    clearDocumentIdsList(): void;
    getDocumentIdsList(): Array<string>;
    setDocumentIdsList(value: Array<string>): RagDocumentIdsRequest;
    addDocumentIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDocumentIdsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagDocumentIdsRequest): RagDocumentIdsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDocumentIdsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDocumentIdsRequest;
    static deserializeBinaryFromReader(message: RagDocumentIdsRequest, reader: jspb.BinaryReader): RagDocumentIdsRequest;
}

export namespace RagDocumentIdsRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        datasetId: string,
        documentIdsList: Array<string>,
    }
}

export class RagRetrievalRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagRetrievalRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagRetrievalRequest;
    clearDatasetIdsList(): void;
    getDatasetIdsList(): Array<string>;
    setDatasetIdsList(value: Array<string>): RagRetrievalRequest;
    addDatasetIds(value: string, index?: number): string;
    getPageToken(): string;
    setPageToken(value: string): RagRetrievalRequest;
    getQuestion(): string;
    setQuestion(value: string): RagRetrievalRequest;
    clearDocumentIdsList(): void;
    getDocumentIdsList(): Array<string>;
    setDocumentIdsList(value: Array<string>): RagRetrievalRequest;
    addDocumentIds(value: string, index?: number): string;

    hasUseKg(): boolean;
    clearUseKg(): void;
    getUseKg(): boolean | undefined;
    setUseKg(value: boolean): RagRetrievalRequest;
    clearCrossLanguagesList(): void;
    getCrossLanguagesList(): Array<string>;
    setCrossLanguagesList(value: Array<string>): RagRetrievalRequest;
    addCrossLanguages(value: string, index?: number): string;

    hasMetadataCondition(): boolean;
    clearMetadataCondition(): void;
    getMetadataCondition(): RagMetadataConditions | undefined;
    setMetadataCondition(value?: RagMetadataConditions): RagRetrievalRequest;

    hasSimilarityThreshold(): boolean;
    clearSimilarityThreshold(): void;
    getSimilarityThreshold(): number | undefined;
    setSimilarityThreshold(value: number): RagRetrievalRequest;

    hasVectorSimilarityWeight(): boolean;
    clearVectorSimilarityWeight(): void;
    getVectorSimilarityWeight(): number | undefined;
    setVectorSimilarityWeight(value: number): RagRetrievalRequest;
    getTopK(): number;
    setTopK(value: number): RagRetrievalRequest;

    hasHighlight(): boolean;
    clearHighlight(): void;
    getHighlight(): boolean | undefined;
    setHighlight(value: boolean): RagRetrievalRequest;

    hasKeyword(): boolean;
    clearKeyword(): void;
    getKeyword(): boolean | undefined;
    setKeyword(value: boolean): RagRetrievalRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): RagRetrievalRequest;

    hasRerankModelCcaiServiceName(): boolean;
    clearRerankModelCcaiServiceName(): void;
    getRerankModelCcaiServiceName(): string | undefined;
    setRerankModelCcaiServiceName(value: string): RagRetrievalRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagRetrievalRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagRetrievalRequest): RagRetrievalRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagRetrievalRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagRetrievalRequest;
    static deserializeBinaryFromReader(message: RagRetrievalRequest, reader: jspb.BinaryReader): RagRetrievalRequest;
}

export namespace RagRetrievalRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        datasetIdsList: Array<string>,
        pageToken: string,
        question: string,
        documentIdsList: Array<string>,
        useKg?: boolean,
        crossLanguagesList: Array<string>,
        metadataCondition?: RagMetadataConditions.AsObject,
        similarityThreshold?: number,
        vectorSimilarityWeight?: number,
        topK: number,
        highlight?: boolean,
        keyword?: boolean,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        rerankModelCcaiServiceName?: string,
    }
}

export class RagRetrievalResponse extends jspb.Message { 
    clearChunksList(): void;
    getChunksList(): Array<RagChunk>;
    setChunksList(value: Array<RagChunk>): RagRetrievalResponse;
    addChunks(value?: RagChunk, index?: number): RagChunk;
    clearDocAggsList(): void;
    getDocAggsList(): Array<RagDocAgg>;
    setDocAggsList(value: Array<RagDocAgg>): RagRetrievalResponse;
    addDocAggs(value?: RagDocAgg, index?: number): RagDocAgg;
    getTotal(): number;
    setTotal(value: number): RagRetrievalResponse;
    getNextPageToken(): string;
    setNextPageToken(value: string): RagRetrievalResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagRetrievalResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagRetrievalResponse): RagRetrievalResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagRetrievalResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagRetrievalResponse;
    static deserializeBinaryFromReader(message: RagRetrievalResponse, reader: jspb.BinaryReader): RagRetrievalResponse;
}

export namespace RagRetrievalResponse {
    export type AsObject = {
        chunksList: Array<RagChunk.AsObject>,
        docAggsList: Array<RagDocAgg.AsObject>,
        total: number,
        nextPageToken: string,
    }
}

export class RagChunk extends jspb.Message { 
    getId(): string;
    setId(value: string): RagChunk;
    getDatasetId(): string;
    setDatasetId(value: string): RagChunk;
    getDocumentId(): string;
    setDocumentId(value: string): RagChunk;
    getContent(): string;
    setContent(value: string): RagChunk;
    clearImportantKeywordsList(): void;
    getImportantKeywordsList(): Array<string>;
    setImportantKeywordsList(value: Array<string>): RagChunk;
    addImportantKeywords(value: string, index?: number): string;
    clearQuestionsList(): void;
    getQuestionsList(): Array<string>;
    setQuestionsList(value: Array<string>): RagChunk;
    addQuestions(value: string, index?: number): string;
    getImageId(): string;
    setImageId(value: string): RagChunk;
    clearPositionsList(): void;
    getPositionsList(): Array<google_protobuf_struct_pb.ListValue>;
    setPositionsList(value: Array<google_protobuf_struct_pb.ListValue>): RagChunk;
    addPositions(value?: google_protobuf_struct_pb.ListValue, index?: number): google_protobuf_struct_pb.ListValue;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): RagChunk;
    getDocumentKeyword(): string;
    setDocumentKeyword(value: string): RagChunk;

    hasSimilarity(): boolean;
    clearSimilarity(): void;
    getSimilarity(): number | undefined;
    setSimilarity(value: number): RagChunk;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagChunk.AsObject;
    static toObject(includeInstance: boolean, msg: RagChunk): RagChunk.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagChunk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagChunk;
    static deserializeBinaryFromReader(message: RagChunk, reader: jspb.BinaryReader): RagChunk;
}

export namespace RagChunk {
    export type AsObject = {
        id: string,
        datasetId: string,
        documentId: string,
        content: string,
        importantKeywordsList: Array<string>,
        questionsList: Array<string>,
        imageId: string,
        positionsList: Array<google_protobuf_struct_pb.ListValue.AsObject>,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        documentKeyword: string,
        similarity?: number,
    }
}

export class RagDocAgg extends jspb.Message { 
    getDocName(): string;
    setDocName(value: string): RagDocAgg;
    getDocId(): string;
    setDocId(value: string): RagDocAgg;
    getCount(): number;
    setCount(value: number): RagDocAgg;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDocAgg.AsObject;
    static toObject(includeInstance: boolean, msg: RagDocAgg): RagDocAgg.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDocAgg, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDocAgg;
    static deserializeBinaryFromReader(message: RagDocAgg, reader: jspb.BinaryReader): RagDocAgg;
}

export namespace RagDocAgg {
    export type AsObject = {
        docName: string,
        docId: string,
        count: number,
    }
}

export class RagCreateCrawlerRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagCreateCrawlerRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagCreateCrawlerRequest;

    hasCrawler(): boolean;
    clearCrawler(): void;
    getCrawler(): RagCrawler | undefined;
    setCrawler(value?: RagCrawler): RagCreateCrawlerRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): RagCreateCrawlerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCreateCrawlerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagCreateCrawlerRequest): RagCreateCrawlerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCreateCrawlerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCreateCrawlerRequest;
    static deserializeBinaryFromReader(message: RagCreateCrawlerRequest, reader: jspb.BinaryReader): RagCreateCrawlerRequest;
}

export namespace RagCreateCrawlerRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        crawler?: RagCrawler.AsObject,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class RagDeleteCrawlerRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): RagDeleteCrawlerRequest;
    getParent(): string;
    setParent(value: string): RagDeleteCrawlerRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagDeleteCrawlerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDeleteCrawlerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagDeleteCrawlerRequest): RagDeleteCrawlerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDeleteCrawlerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDeleteCrawlerRequest;
    static deserializeBinaryFromReader(message: RagDeleteCrawlerRequest, reader: jspb.BinaryReader): RagDeleteCrawlerRequest;
}

export namespace RagDeleteCrawlerRequest {
    export type AsObject = {
        name: string,
        parent: string,
        languageCode: string,
    }
}

export class RagDeleteCrawlerResponse extends jspb.Message { 
    getName(): string;
    setName(value: string): RagDeleteCrawlerResponse;
    getErrorMessage(): string;
    setErrorMessage(value: string): RagDeleteCrawlerResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDeleteCrawlerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagDeleteCrawlerResponse): RagDeleteCrawlerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDeleteCrawlerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDeleteCrawlerResponse;
    static deserializeBinaryFromReader(message: RagDeleteCrawlerResponse, reader: jspb.BinaryReader): RagDeleteCrawlerResponse;
}

export namespace RagDeleteCrawlerResponse {
    export type AsObject = {
        name: string,
        errorMessage: string,
    }
}

export class RagDeleteCrawlersRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagDeleteCrawlersRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagDeleteCrawlersRequest;
    clearNamesList(): void;
    getNamesList(): Array<string>;
    setNamesList(value: Array<string>): RagDeleteCrawlersRequest;
    addNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDeleteCrawlersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagDeleteCrawlersRequest): RagDeleteCrawlersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDeleteCrawlersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDeleteCrawlersRequest;
    static deserializeBinaryFromReader(message: RagDeleteCrawlersRequest, reader: jspb.BinaryReader): RagDeleteCrawlersRequest;
}

export namespace RagDeleteCrawlersRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        namesList: Array<string>,
    }
}

export class RagDeleteCrawlersResponse extends jspb.Message { 
    clearDeleteCrawlerResponsesList(): void;
    getDeleteCrawlerResponsesList(): Array<RagDeleteCrawlerResponse>;
    setDeleteCrawlerResponsesList(value: Array<RagDeleteCrawlerResponse>): RagDeleteCrawlersResponse;
    addDeleteCrawlerResponses(value?: RagDeleteCrawlerResponse, index?: number): RagDeleteCrawlerResponse;
    getErrorMessage(): string;
    setErrorMessage(value: string): RagDeleteCrawlersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDeleteCrawlersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagDeleteCrawlersResponse): RagDeleteCrawlersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDeleteCrawlersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDeleteCrawlersResponse;
    static deserializeBinaryFromReader(message: RagDeleteCrawlersResponse, reader: jspb.BinaryReader): RagDeleteCrawlersResponse;
}

export namespace RagDeleteCrawlersResponse {
    export type AsObject = {
        deleteCrawlerResponsesList: Array<RagDeleteCrawlerResponse.AsObject>,
        errorMessage: string,
    }
}

export class RagListCrawlersRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagListCrawlersRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagListCrawlersRequest;
    getPageToken(): string;
    setPageToken(value: string): RagListCrawlersRequest;
    getDatasetName(): string;
    setDatasetName(value: string): RagListCrawlersRequest;
    getCrawlerName(): string;
    setCrawlerName(value: string): RagListCrawlersRequest;
    getOrderby(): string;
    setOrderby(value: string): RagListCrawlersRequest;

    hasSortingMode(): boolean;
    clearSortingMode(): void;
    getSortingMode(): ondewo_nlu_common_pb.SortingMode | undefined;
    setSortingMode(value: ondewo_nlu_common_pb.SortingMode): RagListCrawlersRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): RagListCrawlersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagListCrawlersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagListCrawlersRequest): RagListCrawlersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagListCrawlersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagListCrawlersRequest;
    static deserializeBinaryFromReader(message: RagListCrawlersRequest, reader: jspb.BinaryReader): RagListCrawlersRequest;
}

export namespace RagListCrawlersRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        pageToken: string,
        datasetName: string,
        crawlerName: string,
        orderby: string,
        sortingMode?: ondewo_nlu_common_pb.SortingMode,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class RagListCrawlersResponse extends jspb.Message { 
    clearCrawlersList(): void;
    getCrawlersList(): Array<RagCrawler>;
    setCrawlersList(value: Array<RagCrawler>): RagListCrawlersResponse;
    addCrawlers(value?: RagCrawler, index?: number): RagCrawler;
    getNextPageToken(): string;
    setNextPageToken(value: string): RagListCrawlersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagListCrawlersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagListCrawlersResponse): RagListCrawlersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagListCrawlersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagListCrawlersResponse;
    static deserializeBinaryFromReader(message: RagListCrawlersResponse, reader: jspb.BinaryReader): RagListCrawlersResponse;
}

export namespace RagListCrawlersResponse {
    export type AsObject = {
        crawlersList: Array<RagCrawler.AsObject>,
        nextPageToken: string,
    }
}

export class RagGetCrawlerRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): RagGetCrawlerRequest;
    getParent(): string;
    setParent(value: string): RagGetCrawlerRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagGetCrawlerRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): RagGetCrawlerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagGetCrawlerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagGetCrawlerRequest): RagGetCrawlerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagGetCrawlerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagGetCrawlerRequest;
    static deserializeBinaryFromReader(message: RagGetCrawlerRequest, reader: jspb.BinaryReader): RagGetCrawlerRequest;
}

export namespace RagGetCrawlerRequest {
    export type AsObject = {
        name: string,
        parent: string,
        languageCode: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class RagUpdateCrawlerRequest extends jspb.Message { 

    hasCrawler(): boolean;
    clearCrawler(): void;
    getCrawler(): RagCrawler | undefined;
    setCrawler(value?: RagCrawler): RagUpdateCrawlerRequest;
    getParent(): string;
    setParent(value: string): RagUpdateCrawlerRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagUpdateCrawlerRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): RagUpdateCrawlerRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): RagUpdateCrawlerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagUpdateCrawlerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagUpdateCrawlerRequest): RagUpdateCrawlerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagUpdateCrawlerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagUpdateCrawlerRequest;
    static deserializeBinaryFromReader(message: RagUpdateCrawlerRequest, reader: jspb.BinaryReader): RagUpdateCrawlerRequest;
}

export namespace RagUpdateCrawlerRequest {
    export type AsObject = {
        crawler?: RagCrawler.AsObject,
        parent: string,
        languageCode: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class RagCrawler extends jspb.Message { 
    getName(): string;
    setName(value: string): RagCrawler;
    getDisplayName(): string;
    setDisplayName(value: string): RagCrawler;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): RagCrawler;

    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): RagCrawler;
    getCreatedBy(): string;
    setCreatedBy(value: string): RagCrawler;
    getModifiedBy(): string;
    setModifiedBy(value: string): RagCrawler;

    hasCrawlerSources(): boolean;
    clearCrawlerSources(): void;
    getCrawlerSources(): RagCrawlerSources | undefined;
    setCrawlerSources(value?: RagCrawlerSources): RagCrawler;

    hasCrawlerSeedUrlFilters(): boolean;
    clearCrawlerSeedUrlFilters(): void;
    getCrawlerSeedUrlFilters(): RagCrawlerSeedUrlFilters | undefined;
    setCrawlerSeedUrlFilters(value?: RagCrawlerSeedUrlFilters): RagCrawler;

    hasCrawlerAuth(): boolean;
    clearCrawlerAuth(): void;
    getCrawlerAuth(): RagCrawlerAuth | undefined;
    setCrawlerAuth(value?: RagCrawlerAuth): RagCrawler;

    hasCrawlerBrowserConfig(): boolean;
    clearCrawlerBrowserConfig(): void;
    getCrawlerBrowserConfig(): RagCrawlerBrowserConfig | undefined;
    setCrawlerBrowserConfig(value?: RagCrawlerBrowserConfig): RagCrawler;

    hasCrawlerConfig(): boolean;
    clearCrawlerConfig(): void;
    getCrawlerConfig(): RagCrawlerConfig | undefined;
    setCrawlerConfig(value?: RagCrawlerConfig): RagCrawler;

    hasRetryConfig(): boolean;
    clearRetryConfig(): void;
    getRetryConfig(): RagCrawlerRetryConfig | undefined;
    setRetryConfig(value?: RagCrawlerRetryConfig): RagCrawler;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawler.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawler): RagCrawler.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawler, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawler;
    static deserializeBinaryFromReader(message: RagCrawler, reader: jspb.BinaryReader): RagCrawler;
}

export namespace RagCrawler {
    export type AsObject = {
        name: string,
        displayName: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdBy: string,
        modifiedBy: string,
        crawlerSources?: RagCrawlerSources.AsObject,
        crawlerSeedUrlFilters?: RagCrawlerSeedUrlFilters.AsObject,
        crawlerAuth?: RagCrawlerAuth.AsObject,
        crawlerBrowserConfig?: RagCrawlerBrowserConfig.AsObject,
        crawlerConfig?: RagCrawlerConfig.AsObject,
        retryConfig?: RagCrawlerRetryConfig.AsObject,
    }
}

export class RagCrawlerSources extends jspb.Message { 
    clearUrlsList(): void;
    getUrlsList(): Array<string>;
    setUrlsList(value: Array<string>): RagCrawlerSources;
    addUrls(value: string, index?: number): string;
    clearSitemapsList(): void;
    getSitemapsList(): Array<string>;
    setSitemapsList(value: Array<string>): RagCrawlerSources;
    addSitemaps(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerSources.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerSources): RagCrawlerSources.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerSources, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerSources;
    static deserializeBinaryFromReader(message: RagCrawlerSources, reader: jspb.BinaryReader): RagCrawlerSources;
}

export namespace RagCrawlerSources {
    export type AsObject = {
        urlsList: Array<string>,
        sitemapsList: Array<string>,
    }
}

export class RagCrawlerFilters extends jspb.Message { 
    clearAllowedDomainsList(): void;
    getAllowedDomainsList(): Array<string>;
    setAllowedDomainsList(value: Array<string>): RagCrawlerFilters;
    addAllowedDomains(value: string, index?: number): string;
    clearDisallowedDomainsList(): void;
    getDisallowedDomainsList(): Array<string>;
    setDisallowedDomainsList(value: Array<string>): RagCrawlerFilters;
    addDisallowedDomains(value: string, index?: number): string;
    getAllowInternalLinks(): boolean;
    setAllowInternalLinks(value: boolean): RagCrawlerFilters;
    getAllowExternalLinks(): boolean;
    setAllowExternalLinks(value: boolean): RagCrawlerFilters;
    getAllowSocialMediaLinks(): boolean;
    setAllowSocialMediaLinks(value: boolean): RagCrawlerFilters;
    clearAllowedRegexList(): void;
    getAllowedRegexList(): Array<string>;
    setAllowedRegexList(value: Array<string>): RagCrawlerFilters;
    addAllowedRegex(value: string, index?: number): string;
    clearDisallowedRegexList(): void;
    getDisallowedRegexList(): Array<string>;
    setDisallowedRegexList(value: Array<string>): RagCrawlerFilters;
    addDisallowedRegex(value: string, index?: number): string;
    clearAllowedPathsList(): void;
    getAllowedPathsList(): Array<string>;
    setAllowedPathsList(value: Array<string>): RagCrawlerFilters;
    addAllowedPaths(value: string, index?: number): string;
    clearDisallowedPathsList(): void;
    getDisallowedPathsList(): Array<string>;
    setDisallowedPathsList(value: Array<string>): RagCrawlerFilters;
    addDisallowedPaths(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerFilters.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerFilters): RagCrawlerFilters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerFilters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerFilters;
    static deserializeBinaryFromReader(message: RagCrawlerFilters, reader: jspb.BinaryReader): RagCrawlerFilters;
}

export namespace RagCrawlerFilters {
    export type AsObject = {
        allowedDomainsList: Array<string>,
        disallowedDomainsList: Array<string>,
        allowInternalLinks: boolean,
        allowExternalLinks: boolean,
        allowSocialMediaLinks: boolean,
        allowedRegexList: Array<string>,
        disallowedRegexList: Array<string>,
        allowedPathsList: Array<string>,
        disallowedPathsList: Array<string>,
    }
}

export class RagCrawlerSeedUrlFilters extends jspb.Message { 
    clearAllowedRegexList(): void;
    getAllowedRegexList(): Array<string>;
    setAllowedRegexList(value: Array<string>): RagCrawlerSeedUrlFilters;
    addAllowedRegex(value: string, index?: number): string;
    clearDisallowedRegexList(): void;
    getDisallowedRegexList(): Array<string>;
    setDisallowedRegexList(value: Array<string>): RagCrawlerSeedUrlFilters;
    addDisallowedRegex(value: string, index?: number): string;
    clearAllowedDomainsList(): void;
    getAllowedDomainsList(): Array<string>;
    setAllowedDomainsList(value: Array<string>): RagCrawlerSeedUrlFilters;
    addAllowedDomains(value: string, index?: number): string;
    clearDisallowedDomainsList(): void;
    getDisallowedDomainsList(): Array<string>;
    setDisallowedDomainsList(value: Array<string>): RagCrawlerSeedUrlFilters;
    addDisallowedDomains(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerSeedUrlFilters.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerSeedUrlFilters): RagCrawlerSeedUrlFilters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerSeedUrlFilters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerSeedUrlFilters;
    static deserializeBinaryFromReader(message: RagCrawlerSeedUrlFilters, reader: jspb.BinaryReader): RagCrawlerSeedUrlFilters;
}

export namespace RagCrawlerSeedUrlFilters {
    export type AsObject = {
        allowedRegexList: Array<string>,
        disallowedRegexList: Array<string>,
        allowedDomainsList: Array<string>,
        disallowedDomainsList: Array<string>,
    }
}

export class RagCrawlerAuth extends jspb.Message { 

    hasHttpAuth(): boolean;
    clearHttpAuth(): void;
    getHttpAuth(): RagCrawlerHttpAuth | undefined;
    setHttpAuth(value?: RagCrawlerHttpAuth): RagCrawlerAuth;

    hasHtmlAuth(): boolean;
    clearHtmlAuth(): void;
    getHtmlAuth(): RagCrawlerHtmlAuth | undefined;
    setHtmlAuth(value?: RagCrawlerHtmlAuth): RagCrawlerAuth;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerAuth.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerAuth): RagCrawlerAuth.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerAuth, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerAuth;
    static deserializeBinaryFromReader(message: RagCrawlerAuth, reader: jspb.BinaryReader): RagCrawlerAuth;
}

export namespace RagCrawlerAuth {
    export type AsObject = {
        httpAuth?: RagCrawlerHttpAuth.AsObject,
        htmlAuth?: RagCrawlerHtmlAuth.AsObject,
    }
}

export class RagCrawlerHtmlAuth extends jspb.Message { 
    getHtmlAuthBaseUrl(): string;
    setHtmlAuthBaseUrl(value: string): RagCrawlerHtmlAuth;
    getHtmlAuthUsernameSelectorType(): RagCrawlerSelectorType;
    setHtmlAuthUsernameSelectorType(value: RagCrawlerSelectorType): RagCrawlerHtmlAuth;
    getHtmlAuthUsernameSelector(): string;
    setHtmlAuthUsernameSelector(value: string): RagCrawlerHtmlAuth;
    getHtmlAuthUsername(): string;
    setHtmlAuthUsername(value: string): RagCrawlerHtmlAuth;
    getHtmlAuthPasswordSelectorType(): RagCrawlerSelectorType;
    setHtmlAuthPasswordSelectorType(value: RagCrawlerSelectorType): RagCrawlerHtmlAuth;
    getHtmlAuthPasswordSelector(): string;
    setHtmlAuthPasswordSelector(value: string): RagCrawlerHtmlAuth;
    getHtmlAuthPassword(): string;
    setHtmlAuthPassword(value: string): RagCrawlerHtmlAuth;
    getAuthenticationExecutionType(): RagCrawlerAuthenticationExecutionType;
    setAuthenticationExecutionType(value: RagCrawlerAuthenticationExecutionType): RagCrawlerHtmlAuth;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerHtmlAuth.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerHtmlAuth): RagCrawlerHtmlAuth.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerHtmlAuth, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerHtmlAuth;
    static deserializeBinaryFromReader(message: RagCrawlerHtmlAuth, reader: jspb.BinaryReader): RagCrawlerHtmlAuth;
}

export namespace RagCrawlerHtmlAuth {
    export type AsObject = {
        htmlAuthBaseUrl: string,
        htmlAuthUsernameSelectorType: RagCrawlerSelectorType,
        htmlAuthUsernameSelector: string,
        htmlAuthUsername: string,
        htmlAuthPasswordSelectorType: RagCrawlerSelectorType,
        htmlAuthPasswordSelector: string,
        htmlAuthPassword: string,
        authenticationExecutionType: RagCrawlerAuthenticationExecutionType,
    }
}

export class RagCrawlerHttpAuth extends jspb.Message { 
    getHttpAuthUsername(): string;
    setHttpAuthUsername(value: string): RagCrawlerHttpAuth;
    getHttpAuthPassword(): string;
    setHttpAuthPassword(value: string): RagCrawlerHttpAuth;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerHttpAuth.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerHttpAuth): RagCrawlerHttpAuth.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerHttpAuth, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerHttpAuth;
    static deserializeBinaryFromReader(message: RagCrawlerHttpAuth, reader: jspb.BinaryReader): RagCrawlerHttpAuth;
}

export namespace RagCrawlerHttpAuth {
    export type AsObject = {
        httpAuthUsername: string,
        httpAuthPassword: string,
    }
}

export class RagCrawlerBrowserConfig extends jspb.Message { 
    clearCrawlerHeadersList(): void;
    getCrawlerHeadersList(): Array<google_protobuf_struct_pb.Struct>;
    setCrawlerHeadersList(value: Array<google_protobuf_struct_pb.Struct>): RagCrawlerBrowserConfig;
    addCrawlerHeaders(value?: google_protobuf_struct_pb.Struct, index?: number): google_protobuf_struct_pb.Struct;
    clearCrawlerCookiesList(): void;
    getCrawlerCookiesList(): Array<RagCrawlerCookie>;
    setCrawlerCookiesList(value: Array<RagCrawlerCookie>): RagCrawlerBrowserConfig;
    addCrawlerCookies(value?: RagCrawlerCookie, index?: number): RagCrawlerCookie;

    hasCrawlerUserAgent(): boolean;
    clearCrawlerUserAgent(): void;
    getCrawlerUserAgent(): string | undefined;
    setCrawlerUserAgent(value: string): RagCrawlerBrowserConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerBrowserConfig.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerBrowserConfig): RagCrawlerBrowserConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerBrowserConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerBrowserConfig;
    static deserializeBinaryFromReader(message: RagCrawlerBrowserConfig, reader: jspb.BinaryReader): RagCrawlerBrowserConfig;
}

export namespace RagCrawlerBrowserConfig {
    export type AsObject = {
        crawlerHeadersList: Array<google_protobuf_struct_pb.Struct.AsObject>,
        crawlerCookiesList: Array<RagCrawlerCookie.AsObject>,
        crawlerUserAgent?: string,
    }
}

export class RagCrawlerCookie extends jspb.Message { 
    getCookieName(): string;
    setCookieName(value: string): RagCrawlerCookie;
    getCookieValue(): string;
    setCookieValue(value: string): RagCrawlerCookie;
    getCookieDomain(): string;
    setCookieDomain(value: string): RagCrawlerCookie;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerCookie.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerCookie): RagCrawlerCookie.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerCookie, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerCookie;
    static deserializeBinaryFromReader(message: RagCrawlerCookie, reader: jspb.BinaryReader): RagCrawlerCookie;
}

export namespace RagCrawlerCookie {
    export type AsObject = {
        cookieName: string,
        cookieValue: string,
        cookieDomain: string,
    }
}

export class RagCrawlerConcurrencyConfig extends jspb.Message { 
    getMaxConcurrentRequests(): number;
    setMaxConcurrentRequests(value: number): RagCrawlerConcurrencyConfig;
    getSlowCrawl(): boolean;
    setSlowCrawl(value: boolean): RagCrawlerConcurrencyConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerConcurrencyConfig.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerConcurrencyConfig): RagCrawlerConcurrencyConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerConcurrencyConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerConcurrencyConfig;
    static deserializeBinaryFromReader(message: RagCrawlerConcurrencyConfig, reader: jspb.BinaryReader): RagCrawlerConcurrencyConfig;
}

export namespace RagCrawlerConcurrencyConfig {
    export type AsObject = {
        maxConcurrentRequests: number,
        slowCrawl: boolean,
    }
}

export class RagCrawlerConfig extends jspb.Message { 

    hasConcurrencyConfig(): boolean;
    clearConcurrencyConfig(): void;
    getConcurrencyConfig(): RagCrawlerConcurrencyConfig | undefined;
    setConcurrencyConfig(value?: RagCrawlerConcurrencyConfig): RagCrawlerConfig;

    hasDeepCrawlerConfig(): boolean;
    clearDeepCrawlerConfig(): void;
    getDeepCrawlerConfig(): RagCrawlerDeepCrawlerConfig | undefined;
    setDeepCrawlerConfig(value?: RagCrawlerDeepCrawlerConfig): RagCrawlerConfig;

    hasOutputConfig(): boolean;
    clearOutputConfig(): void;
    getOutputConfig(): RagCrawlerResultsConfig | undefined;
    setOutputConfig(value?: RagCrawlerResultsConfig): RagCrawlerConfig;

    hasStatusFilter(): boolean;
    clearStatusFilter(): void;
    getStatusFilter(): RagCrawlerStatusFilter | undefined;
    setStatusFilter(value?: RagCrawlerStatusFilter): RagCrawlerConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerConfig.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerConfig): RagCrawlerConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerConfig;
    static deserializeBinaryFromReader(message: RagCrawlerConfig, reader: jspb.BinaryReader): RagCrawlerConfig;
}

export namespace RagCrawlerConfig {
    export type AsObject = {
        concurrencyConfig?: RagCrawlerConcurrencyConfig.AsObject,
        deepCrawlerConfig?: RagCrawlerDeepCrawlerConfig.AsObject,
        outputConfig?: RagCrawlerResultsConfig.AsObject,
        statusFilter?: RagCrawlerStatusFilter.AsObject,
    }
}

export class RagCrawlerDeepCrawlerConfig extends jspb.Message { 
    getIsActive(): boolean;
    setIsActive(value: boolean): RagCrawlerDeepCrawlerConfig;
    getCrawlStrategy(): RagCrawlerCrawlStrategy;
    setCrawlStrategy(value: RagCrawlerCrawlStrategy): RagCrawlerDeepCrawlerConfig;

    hasMaxDepth(): boolean;
    clearMaxDepth(): void;
    getMaxDepth(): number | undefined;
    setMaxDepth(value: number): RagCrawlerDeepCrawlerConfig;
    getMaxPages(): number;
    setMaxPages(value: number): RagCrawlerDeepCrawlerConfig;

    hasDeepCrawlerFilters(): boolean;
    clearDeepCrawlerFilters(): void;
    getDeepCrawlerFilters(): RagCrawlerFilters | undefined;
    setDeepCrawlerFilters(value?: RagCrawlerFilters): RagCrawlerDeepCrawlerConfig;

    hasNormalizeUrlCase(): boolean;
    clearNormalizeUrlCase(): void;
    getNormalizeUrlCase(): boolean | undefined;
    setNormalizeUrlCase(value: boolean): RagCrawlerDeepCrawlerConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerDeepCrawlerConfig.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerDeepCrawlerConfig): RagCrawlerDeepCrawlerConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerDeepCrawlerConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerDeepCrawlerConfig;
    static deserializeBinaryFromReader(message: RagCrawlerDeepCrawlerConfig, reader: jspb.BinaryReader): RagCrawlerDeepCrawlerConfig;
}

export namespace RagCrawlerDeepCrawlerConfig {
    export type AsObject = {
        isActive: boolean,
        crawlStrategy: RagCrawlerCrawlStrategy,
        maxDepth?: number,
        maxPages: number,
        deepCrawlerFilters?: RagCrawlerFilters.AsObject,
        normalizeUrlCase?: boolean,
    }
}

export class RagCrawlerResultsConfig extends jspb.Message { 

    hasInjectFrontmatter(): boolean;
    clearInjectFrontmatter(): void;
    getInjectFrontmatter(): boolean | undefined;
    setInjectFrontmatter(value: boolean): RagCrawlerResultsConfig;
    clearMetaDataExtractorsList(): void;
    getMetaDataExtractorsList(): Array<RagCrawlerMetaDataExtractor>;
    setMetaDataExtractorsList(value: Array<RagCrawlerMetaDataExtractor>): RagCrawlerResultsConfig;
    addMetaDataExtractors(value?: RagCrawlerMetaDataExtractor, index?: number): RagCrawlerMetaDataExtractor;

    hasContentScope(): boolean;
    clearContentScope(): void;
    getContentScope(): RagCrawlerContentScope | undefined;
    setContentScope(value?: RagCrawlerContentScope): RagCrawlerResultsConfig;

    hasDensityPruning(): boolean;
    clearDensityPruning(): void;
    getDensityPruning(): RagCrawlerDensityPruning | undefined;
    setDensityPruning(value?: RagCrawlerDensityPruning): RagCrawlerResultsConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerResultsConfig.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerResultsConfig): RagCrawlerResultsConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerResultsConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerResultsConfig;
    static deserializeBinaryFromReader(message: RagCrawlerResultsConfig, reader: jspb.BinaryReader): RagCrawlerResultsConfig;
}

export namespace RagCrawlerResultsConfig {
    export type AsObject = {
        injectFrontmatter?: boolean,
        metaDataExtractorsList: Array<RagCrawlerMetaDataExtractor.AsObject>,
        contentScope?: RagCrawlerContentScope.AsObject,
        densityPruning?: RagCrawlerDensityPruning.AsObject,
    }
}

export class RagCrawlerContentScope extends jspb.Message { 
    clearIncludeSelectorsList(): void;
    getIncludeSelectorsList(): Array<string>;
    setIncludeSelectorsList(value: Array<string>): RagCrawlerContentScope;
    addIncludeSelectors(value: string, index?: number): string;
    clearExcludeSelectorsList(): void;
    getExcludeSelectorsList(): Array<string>;
    setExcludeSelectorsList(value: Array<string>): RagCrawlerContentScope;
    addExcludeSelectors(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerContentScope.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerContentScope): RagCrawlerContentScope.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerContentScope, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerContentScope;
    static deserializeBinaryFromReader(message: RagCrawlerContentScope, reader: jspb.BinaryReader): RagCrawlerContentScope;
}

export namespace RagCrawlerContentScope {
    export type AsObject = {
        includeSelectorsList: Array<string>,
        excludeSelectorsList: Array<string>,
    }
}

export class RagCrawlerDensityPruning extends jspb.Message { 

    hasIsActive(): boolean;
    clearIsActive(): void;
    getIsActive(): boolean | undefined;
    setIsActive(value: boolean): RagCrawlerDensityPruning;

    hasThreshold(): boolean;
    clearThreshold(): void;
    getThreshold(): number | undefined;
    setThreshold(value: number): RagCrawlerDensityPruning;

    hasThresholdType(): boolean;
    clearThresholdType(): void;
    getThresholdType(): RagCrawlerPruningThresholdType | undefined;
    setThresholdType(value: RagCrawlerPruningThresholdType): RagCrawlerDensityPruning;

    hasMinWordThreshold(): boolean;
    clearMinWordThreshold(): void;
    getMinWordThreshold(): number | undefined;
    setMinWordThreshold(value: number): RagCrawlerDensityPruning;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerDensityPruning.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerDensityPruning): RagCrawlerDensityPruning.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerDensityPruning, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerDensityPruning;
    static deserializeBinaryFromReader(message: RagCrawlerDensityPruning, reader: jspb.BinaryReader): RagCrawlerDensityPruning;
}

export namespace RagCrawlerDensityPruning {
    export type AsObject = {
        isActive?: boolean,
        threshold?: number,
        thresholdType?: RagCrawlerPruningThresholdType,
        minWordThreshold?: number,
    }
}

export class RagCrawlerMetaDataExtractor extends jspb.Message { 
    getType(): RagCrawlerMetaDataExtractorType;
    setType(value: RagCrawlerMetaDataExtractorType): RagCrawlerMetaDataExtractor;
    getValue(): string;
    setValue(value: string): RagCrawlerMetaDataExtractor;
    getKey(): string;
    setKey(value: string): RagCrawlerMetaDataExtractor;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerMetaDataExtractor.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerMetaDataExtractor): RagCrawlerMetaDataExtractor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerMetaDataExtractor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerMetaDataExtractor;
    static deserializeBinaryFromReader(message: RagCrawlerMetaDataExtractor, reader: jspb.BinaryReader): RagCrawlerMetaDataExtractor;
}

export namespace RagCrawlerMetaDataExtractor {
    export type AsObject = {
        type: RagCrawlerMetaDataExtractorType,
        value: string,
        key: string,
    }
}

export class RagCrawlerRetryConfig extends jspb.Message { 

    hasPageLoadTimeoutSeconds(): boolean;
    clearPageLoadTimeoutSeconds(): void;
    getPageLoadTimeoutSeconds(): number | undefined;
    setPageLoadTimeoutSeconds(value: number): RagCrawlerRetryConfig;

    hasRetryMaxAttempts(): boolean;
    clearRetryMaxAttempts(): void;
    getRetryMaxAttempts(): number | undefined;
    setRetryMaxAttempts(value: number): RagCrawlerRetryConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerRetryConfig.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerRetryConfig): RagCrawlerRetryConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerRetryConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerRetryConfig;
    static deserializeBinaryFromReader(message: RagCrawlerRetryConfig, reader: jspb.BinaryReader): RagCrawlerRetryConfig;
}

export namespace RagCrawlerRetryConfig {
    export type AsObject = {
        pageLoadTimeoutSeconds?: number,
        retryMaxAttempts?: number,
    }
}

export class RagCrawlerStatusFilter extends jspb.Message { 

    hasIsActive(): boolean;
    clearIsActive(): void;
    getIsActive(): boolean | undefined;
    setIsActive(value: boolean): RagCrawlerStatusFilter;
    clearAcceptedStatusCodesList(): void;
    getAcceptedStatusCodesList(): Array<number>;
    setAcceptedStatusCodesList(value: Array<number>): RagCrawlerStatusFilter;
    addAcceptedStatusCodes(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerStatusFilter.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerStatusFilter): RagCrawlerStatusFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerStatusFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerStatusFilter;
    static deserializeBinaryFromReader(message: RagCrawlerStatusFilter, reader: jspb.BinaryReader): RagCrawlerStatusFilter;
}

export namespace RagCrawlerStatusFilter {
    export type AsObject = {
        isActive?: boolean,
        acceptedStatusCodesList: Array<number>,
    }
}

export class RagCrawlerContentResult extends jspb.Message { 

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): google_protobuf_struct_pb.Struct | undefined;
    setMetadata(value?: google_protobuf_struct_pb.Struct): RagCrawlerContentResult;

    hasMarkdown(): boolean;
    clearMarkdown(): void;
    getMarkdown(): string | undefined;
    setMarkdown(value: string): RagCrawlerContentResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerContentResult.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerContentResult): RagCrawlerContentResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerContentResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerContentResult;
    static deserializeBinaryFromReader(message: RagCrawlerContentResult, reader: jspb.BinaryReader): RagCrawlerContentResult;
}

export namespace RagCrawlerContentResult {
    export type AsObject = {
        metadata?: google_protobuf_struct_pb.Struct.AsObject,
        markdown?: string,
    }
}

export class RagCrawlerExecutionInfo extends jspb.Message { 

    hasSslCertificate(): boolean;
    clearSslCertificate(): void;
    getSslCertificate(): google_protobuf_struct_pb.Struct | undefined;
    setSslCertificate(value?: google_protobuf_struct_pb.Struct): RagCrawlerExecutionInfo;

    hasSuccess(): boolean;
    clearSuccess(): void;
    getSuccess(): boolean | undefined;
    setSuccess(value: boolean): RagCrawlerExecutionInfo;

    hasErrorMessage(): boolean;
    clearErrorMessage(): void;
    getErrorMessage(): string | undefined;
    setErrorMessage(value: string): RagCrawlerExecutionInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerExecutionInfo.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerExecutionInfo): RagCrawlerExecutionInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerExecutionInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerExecutionInfo;
    static deserializeBinaryFromReader(message: RagCrawlerExecutionInfo, reader: jspb.BinaryReader): RagCrawlerExecutionInfo;
}

export namespace RagCrawlerExecutionInfo {
    export type AsObject = {
        sslCertificate?: google_protobuf_struct_pb.Struct.AsObject,
        success?: boolean,
        errorMessage?: string,
    }
}

export class RagCrawlerResult extends jspb.Message { 
    getName(): string;
    setName(value: string): RagCrawlerResult;
    getCrawlerName(): string;
    setCrawlerName(value: string): RagCrawlerResult;
    getOperationName(): string;
    setOperationName(value: string): RagCrawlerResult;
    getSourceUrl(): string;
    setSourceUrl(value: string): RagCrawlerResult;

    hasFileResource(): boolean;
    clearFileResource(): void;
    getFileResource(): ondewo_nlu_session_pb.FileResource | undefined;
    setFileResource(value?: ondewo_nlu_session_pb.FileResource): RagCrawlerResult;

    hasLastCrawledDate(): boolean;
    clearLastCrawledDate(): void;
    getLastCrawledDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastCrawledDate(value?: google_protobuf_timestamp_pb.Timestamp): RagCrawlerResult;

    hasContentResult(): boolean;
    clearContentResult(): void;
    getContentResult(): RagCrawlerContentResult | undefined;
    setContentResult(value?: RagCrawlerContentResult): RagCrawlerResult;

    hasPageLastUpdatedDate(): boolean;
    clearPageLastUpdatedDate(): void;
    getPageLastUpdatedDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPageLastUpdatedDate(value?: google_protobuf_timestamp_pb.Timestamp): RagCrawlerResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagCrawlerResult.AsObject;
    static toObject(includeInstance: boolean, msg: RagCrawlerResult): RagCrawlerResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagCrawlerResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagCrawlerResult;
    static deserializeBinaryFromReader(message: RagCrawlerResult, reader: jspb.BinaryReader): RagCrawlerResult;
}

export namespace RagCrawlerResult {
    export type AsObject = {
        name: string,
        crawlerName: string,
        operationName: string,
        sourceUrl: string,
        fileResource?: ondewo_nlu_session_pb.FileResource.AsObject,
        lastCrawledDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        contentResult?: RagCrawlerContentResult.AsObject,
        pageLastUpdatedDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class RagStartCrawlerRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagStartCrawlerRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagStartCrawlerRequest;
    getCrawlerName(): string;
    setCrawlerName(value: string): RagStartCrawlerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagStartCrawlerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagStartCrawlerRequest): RagStartCrawlerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagStartCrawlerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagStartCrawlerRequest;
    static deserializeBinaryFromReader(message: RagStartCrawlerRequest, reader: jspb.BinaryReader): RagStartCrawlerRequest;
}

export namespace RagStartCrawlerRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        crawlerName: string,
    }
}

export class RagGetCrawlerRunRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagGetCrawlerRunRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagGetCrawlerRunRequest;
    getCrawlerRunName(): string;
    setCrawlerRunName(value: string): RagGetCrawlerRunRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagGetCrawlerRunRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagGetCrawlerRunRequest): RagGetCrawlerRunRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagGetCrawlerRunRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagGetCrawlerRunRequest;
    static deserializeBinaryFromReader(message: RagGetCrawlerRunRequest, reader: jspb.BinaryReader): RagGetCrawlerRunRequest;
}

export namespace RagGetCrawlerRunRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        crawlerRunName: string,
    }
}

export class RagListCrawlerRunsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagListCrawlerRunsRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagListCrawlerRunsRequest;
    getCrawlerName(): string;
    setCrawlerName(value: string): RagListCrawlerRunsRequest;
    getPageToken(): string;
    setPageToken(value: string): RagListCrawlerRunsRequest;
    getStatus(): ondewo_nlu_operation_metadata_pb.OperationMetadata.Status;
    setStatus(value: ondewo_nlu_operation_metadata_pb.OperationMetadata.Status): RagListCrawlerRunsRequest;
    getOrderby(): string;
    setOrderby(value: string): RagListCrawlerRunsRequest;

    hasSortingMode(): boolean;
    clearSortingMode(): void;
    getSortingMode(): ondewo_nlu_common_pb.SortingMode | undefined;
    setSortingMode(value: ondewo_nlu_common_pb.SortingMode): RagListCrawlerRunsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagListCrawlerRunsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagListCrawlerRunsRequest): RagListCrawlerRunsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagListCrawlerRunsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagListCrawlerRunsRequest;
    static deserializeBinaryFromReader(message: RagListCrawlerRunsRequest, reader: jspb.BinaryReader): RagListCrawlerRunsRequest;
}

export namespace RagListCrawlerRunsRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        crawlerName: string,
        pageToken: string,
        status: ondewo_nlu_operation_metadata_pb.OperationMetadata.Status,
        orderby: string,
        sortingMode?: ondewo_nlu_common_pb.SortingMode,
    }
}

export class RagListCrawlerRunsResponse extends jspb.Message { 
    clearCrawlerRunsList(): void;
    getCrawlerRunsList(): Array<ondewo_nlu_operations_pb.Operation>;
    setCrawlerRunsList(value: Array<ondewo_nlu_operations_pb.Operation>): RagListCrawlerRunsResponse;
    addCrawlerRuns(value?: ondewo_nlu_operations_pb.Operation, index?: number): ondewo_nlu_operations_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): RagListCrawlerRunsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagListCrawlerRunsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagListCrawlerRunsResponse): RagListCrawlerRunsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagListCrawlerRunsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagListCrawlerRunsResponse;
    static deserializeBinaryFromReader(message: RagListCrawlerRunsResponse, reader: jspb.BinaryReader): RagListCrawlerRunsResponse;
}

export namespace RagListCrawlerRunsResponse {
    export type AsObject = {
        crawlerRunsList: Array<ondewo_nlu_operations_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}

export class RagDeleteCrawlerRunsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagDeleteCrawlerRunsRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagDeleteCrawlerRunsRequest;
    clearCrawlerRunNamesList(): void;
    getCrawlerRunNamesList(): Array<string>;
    setCrawlerRunNamesList(value: Array<string>): RagDeleteCrawlerRunsRequest;
    addCrawlerRunNames(value: string, index?: number): string;
    clearCrawlerNamesList(): void;
    getCrawlerNamesList(): Array<string>;
    setCrawlerNamesList(value: Array<string>): RagDeleteCrawlerRunsRequest;
    addCrawlerNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDeleteCrawlerRunsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagDeleteCrawlerRunsRequest): RagDeleteCrawlerRunsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDeleteCrawlerRunsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDeleteCrawlerRunsRequest;
    static deserializeBinaryFromReader(message: RagDeleteCrawlerRunsRequest, reader: jspb.BinaryReader): RagDeleteCrawlerRunsRequest;
}

export namespace RagDeleteCrawlerRunsRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        crawlerRunNamesList: Array<string>,
        crawlerNamesList: Array<string>,
    }
}

export class RagDeleteCrawlerRunsResponse extends jspb.Message { 
    getDeletedCount(): number;
    setDeletedCount(value: number): RagDeleteCrawlerRunsResponse;
    clearDeletedRunNamesList(): void;
    getDeletedRunNamesList(): Array<string>;
    setDeletedRunNamesList(value: Array<string>): RagDeleteCrawlerRunsResponse;
    addDeletedRunNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagDeleteCrawlerRunsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagDeleteCrawlerRunsResponse): RagDeleteCrawlerRunsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagDeleteCrawlerRunsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagDeleteCrawlerRunsResponse;
    static deserializeBinaryFromReader(message: RagDeleteCrawlerRunsResponse, reader: jspb.BinaryReader): RagDeleteCrawlerRunsResponse;
}

export namespace RagDeleteCrawlerRunsResponse {
    export type AsObject = {
        deletedCount: number,
        deletedRunNamesList: Array<string>,
    }
}

export class RagStopCrawlerRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagStopCrawlerRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagStopCrawlerRequest;
    getName(): string;
    setName(value: string): RagStopCrawlerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagStopCrawlerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagStopCrawlerRequest): RagStopCrawlerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagStopCrawlerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagStopCrawlerRequest;
    static deserializeBinaryFromReader(message: RagStopCrawlerRequest, reader: jspb.BinaryReader): RagStopCrawlerRequest;
}

export namespace RagStopCrawlerRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        name: string,
    }
}

export class RagStopCrawlerResponse extends jspb.Message { 
    getName(): string;
    setName(value: string): RagStopCrawlerResponse;
    getErrorMessage(): string;
    setErrorMessage(value: string): RagStopCrawlerResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagStopCrawlerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagStopCrawlerResponse): RagStopCrawlerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagStopCrawlerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagStopCrawlerResponse;
    static deserializeBinaryFromReader(message: RagStopCrawlerResponse, reader: jspb.BinaryReader): RagStopCrawlerResponse;
}

export namespace RagStopCrawlerResponse {
    export type AsObject = {
        name: string,
        errorMessage: string,
    }
}

export class RagGetCrawlerResultsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagGetCrawlerResultsRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagGetCrawlerResultsRequest;
    getOperationName(): string;
    setOperationName(value: string): RagGetCrawlerResultsRequest;
    getPageToken(): string;
    setPageToken(value: string): RagGetCrawlerResultsRequest;
    getUrlQuery(): string;
    setUrlQuery(value: string): RagGetCrawlerResultsRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): RagGetCrawlerResultsRequest;
    getOrderby(): string;
    setOrderby(value: string): RagGetCrawlerResultsRequest;

    hasSortingMode(): boolean;
    clearSortingMode(): void;
    getSortingMode(): ondewo_nlu_common_pb.SortingMode | undefined;
    setSortingMode(value: ondewo_nlu_common_pb.SortingMode): RagGetCrawlerResultsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagGetCrawlerResultsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagGetCrawlerResultsRequest): RagGetCrawlerResultsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagGetCrawlerResultsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagGetCrawlerResultsRequest;
    static deserializeBinaryFromReader(message: RagGetCrawlerResultsRequest, reader: jspb.BinaryReader): RagGetCrawlerResultsRequest;
}

export namespace RagGetCrawlerResultsRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        operationName: string,
        pageToken: string,
        urlQuery: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        orderby: string,
        sortingMode?: ondewo_nlu_common_pb.SortingMode,
    }
}

export class RagGetCrawlerResultsResponse extends jspb.Message { 
    clearCrawlerResultsList(): void;
    getCrawlerResultsList(): Array<RagCrawlerResult>;
    setCrawlerResultsList(value: Array<RagCrawlerResult>): RagGetCrawlerResultsResponse;
    addCrawlerResults(value?: RagCrawlerResult, index?: number): RagCrawlerResult;
    getNextPageToken(): string;
    setNextPageToken(value: string): RagGetCrawlerResultsResponse;
    getTotalSize(): number;
    setTotalSize(value: number): RagGetCrawlerResultsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagGetCrawlerResultsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagGetCrawlerResultsResponse): RagGetCrawlerResultsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagGetCrawlerResultsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagGetCrawlerResultsResponse;
    static deserializeBinaryFromReader(message: RagGetCrawlerResultsResponse, reader: jspb.BinaryReader): RagGetCrawlerResultsResponse;
}

export namespace RagGetCrawlerResultsResponse {
    export type AsObject = {
        crawlerResultsList: Array<RagCrawlerResult.AsObject>,
        nextPageToken: string,
        totalSize: number,
    }
}

export class RagGetCrawlerResultRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagGetCrawlerResultRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagGetCrawlerResultRequest;
    getOperationName(): string;
    setOperationName(value: string): RagGetCrawlerResultRequest;
    getUrl(): string;
    setUrl(value: string): RagGetCrawlerResultRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): RagGetCrawlerResultRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagGetCrawlerResultRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagGetCrawlerResultRequest): RagGetCrawlerResultRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagGetCrawlerResultRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagGetCrawlerResultRequest;
    static deserializeBinaryFromReader(message: RagGetCrawlerResultRequest, reader: jspb.BinaryReader): RagGetCrawlerResultRequest;
}

export namespace RagGetCrawlerResultRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        operationName: string,
        url: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class RagAddCrawlerResultsToDatasetsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagAddCrawlerResultsToDatasetsRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagAddCrawlerResultsToDatasetsRequest;
    clearCrawlerNamesList(): void;
    getCrawlerNamesList(): Array<string>;
    setCrawlerNamesList(value: Array<string>): RagAddCrawlerResultsToDatasetsRequest;
    addCrawlerNames(value: string, index?: number): string;
    clearCrawlerResultNamesList(): void;
    getCrawlerResultNamesList(): Array<string>;
    setCrawlerResultNamesList(value: Array<string>): RagAddCrawlerResultsToDatasetsRequest;
    addCrawlerResultNames(value: string, index?: number): string;
    clearDatasetIdsList(): void;
    getDatasetIdsList(): Array<string>;
    setDatasetIdsList(value: Array<string>): RagAddCrawlerResultsToDatasetsRequest;
    addDatasetIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagAddCrawlerResultsToDatasetsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagAddCrawlerResultsToDatasetsRequest): RagAddCrawlerResultsToDatasetsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagAddCrawlerResultsToDatasetsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagAddCrawlerResultsToDatasetsRequest;
    static deserializeBinaryFromReader(message: RagAddCrawlerResultsToDatasetsRequest, reader: jspb.BinaryReader): RagAddCrawlerResultsToDatasetsRequest;
}

export namespace RagAddCrawlerResultsToDatasetsRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        crawlerNamesList: Array<string>,
        crawlerResultNamesList: Array<string>,
        datasetIdsList: Array<string>,
    }
}

export class RagRemoveCrawlerResultsFromDatasetsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagRemoveCrawlerResultsFromDatasetsRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagRemoveCrawlerResultsFromDatasetsRequest;
    getCrawlerName(): string;
    setCrawlerName(value: string): RagRemoveCrawlerResultsFromDatasetsRequest;
    clearCrawlerResultNamesList(): void;
    getCrawlerResultNamesList(): Array<string>;
    setCrawlerResultNamesList(value: Array<string>): RagRemoveCrawlerResultsFromDatasetsRequest;
    addCrawlerResultNames(value: string, index?: number): string;
    clearDatasetIdsList(): void;
    getDatasetIdsList(): Array<string>;
    setDatasetIdsList(value: Array<string>): RagRemoveCrawlerResultsFromDatasetsRequest;
    addDatasetIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagRemoveCrawlerResultsFromDatasetsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagRemoveCrawlerResultsFromDatasetsRequest): RagRemoveCrawlerResultsFromDatasetsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagRemoveCrawlerResultsFromDatasetsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagRemoveCrawlerResultsFromDatasetsRequest;
    static deserializeBinaryFromReader(message: RagRemoveCrawlerResultsFromDatasetsRequest, reader: jspb.BinaryReader): RagRemoveCrawlerResultsFromDatasetsRequest;
}

export namespace RagRemoveCrawlerResultsFromDatasetsRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        crawlerName: string,
        crawlerResultNamesList: Array<string>,
        datasetIdsList: Array<string>,
    }
}

export class RagGetCrawlerAttachedDatasetsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagGetCrawlerAttachedDatasetsRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagGetCrawlerAttachedDatasetsRequest;
    getCrawlerName(): string;
    setCrawlerName(value: string): RagGetCrawlerAttachedDatasetsRequest;
    getPageSize(): number;
    setPageSize(value: number): RagGetCrawlerAttachedDatasetsRequest;
    getPageToken(): string;
    setPageToken(value: string): RagGetCrawlerAttachedDatasetsRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): RagGetCrawlerAttachedDatasetsRequest;
    getOrderby(): string;
    setOrderby(value: string): RagGetCrawlerAttachedDatasetsRequest;

    hasSortingMode(): boolean;
    clearSortingMode(): void;
    getSortingMode(): ondewo_nlu_common_pb.SortingMode | undefined;
    setSortingMode(value: ondewo_nlu_common_pb.SortingMode): RagGetCrawlerAttachedDatasetsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagGetCrawlerAttachedDatasetsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagGetCrawlerAttachedDatasetsRequest): RagGetCrawlerAttachedDatasetsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagGetCrawlerAttachedDatasetsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagGetCrawlerAttachedDatasetsRequest;
    static deserializeBinaryFromReader(message: RagGetCrawlerAttachedDatasetsRequest, reader: jspb.BinaryReader): RagGetCrawlerAttachedDatasetsRequest;
}

export namespace RagGetCrawlerAttachedDatasetsRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        crawlerName: string,
        pageSize: number,
        pageToken: string,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        orderby: string,
        sortingMode?: ondewo_nlu_common_pb.SortingMode,
    }
}

export class RagGetCrawlerAttachedDatasetsResponse extends jspb.Message { 
    clearDatasetsList(): void;
    getDatasetsList(): Array<RagDataset>;
    setDatasetsList(value: Array<RagDataset>): RagGetCrawlerAttachedDatasetsResponse;
    addDatasets(value?: RagDataset, index?: number): RagDataset;
    getNextPageToken(): string;
    setNextPageToken(value: string): RagGetCrawlerAttachedDatasetsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagGetCrawlerAttachedDatasetsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagGetCrawlerAttachedDatasetsResponse): RagGetCrawlerAttachedDatasetsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagGetCrawlerAttachedDatasetsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagGetCrawlerAttachedDatasetsResponse;
    static deserializeBinaryFromReader(message: RagGetCrawlerAttachedDatasetsResponse, reader: jspb.BinaryReader): RagGetCrawlerAttachedDatasetsResponse;
}

export namespace RagGetCrawlerAttachedDatasetsResponse {
    export type AsObject = {
        datasetsList: Array<RagDataset.AsObject>,
        nextPageToken: string,
    }
}

export class RagGetCrawlerRunLogsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): RagGetCrawlerRunLogsRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): RagGetCrawlerRunLogsRequest;
    getOperationName(): string;
    setOperationName(value: string): RagGetCrawlerRunLogsRequest;
    getPageToken(): string;
    setPageToken(value: string): RagGetCrawlerRunLogsRequest;
    getPageSize(): number;
    setPageSize(value: number): RagGetCrawlerRunLogsRequest;
    clearLevelFiltersList(): void;
    getLevelFiltersList(): Array<ondewo_nlu_common_pb.LogSeverity>;
    setLevelFiltersList(value: Array<ondewo_nlu_common_pb.LogSeverity>): RagGetCrawlerRunLogsRequest;
    addLevelFilters(value: ondewo_nlu_common_pb.LogSeverity, index?: number): ondewo_nlu_common_pb.LogSeverity;
    getPhaseFilter(): string;
    setPhaseFilter(value: string): RagGetCrawlerRunLogsRequest;
    getSearchQuery(): string;
    setSearchQuery(value: string): RagGetCrawlerRunLogsRequest;

    hasStartTime(): boolean;
    clearStartTime(): void;
    getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): RagGetCrawlerRunLogsRequest;

    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): RagGetCrawlerRunLogsRequest;
    getSourceUrlFilter(): string;
    setSourceUrlFilter(value: string): RagGetCrawlerRunLogsRequest;
    getOrderby(): string;
    setOrderby(value: string): RagGetCrawlerRunLogsRequest;

    hasSortingMode(): boolean;
    clearSortingMode(): void;
    getSortingMode(): ondewo_nlu_common_pb.SortingMode | undefined;
    setSortingMode(value: ondewo_nlu_common_pb.SortingMode): RagGetCrawlerRunLogsRequest;

    hasFieldMask(): boolean;
    clearFieldMask(): void;
    getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): RagGetCrawlerRunLogsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagGetCrawlerRunLogsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RagGetCrawlerRunLogsRequest): RagGetCrawlerRunLogsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagGetCrawlerRunLogsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagGetCrawlerRunLogsRequest;
    static deserializeBinaryFromReader(message: RagGetCrawlerRunLogsRequest, reader: jspb.BinaryReader): RagGetCrawlerRunLogsRequest;
}

export namespace RagGetCrawlerRunLogsRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        operationName: string,
        pageToken: string,
        pageSize: number,
        levelFiltersList: Array<ondewo_nlu_common_pb.LogSeverity>,
        phaseFilter: string,
        searchQuery: string,
        startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        sourceUrlFilter: string,
        orderby: string,
        sortingMode?: ondewo_nlu_common_pb.SortingMode,
        fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class RagGetCrawlerRunLogsResponse extends jspb.Message { 
    getOperationName(): string;
    setOperationName(value: string): RagGetCrawlerRunLogsResponse;
    getCrawlerName(): string;
    setCrawlerName(value: string): RagGetCrawlerRunLogsResponse;
    getStatus(): ondewo_nlu_operation_metadata_pb.OperationMetadata.Status;
    setStatus(value: ondewo_nlu_operation_metadata_pb.OperationMetadata.Status): RagGetCrawlerRunLogsResponse;
    clearEntriesList(): void;
    getEntriesList(): Array<ondewo_nlu_common_pb.LogEntry>;
    setEntriesList(value: Array<ondewo_nlu_common_pb.LogEntry>): RagGetCrawlerRunLogsResponse;
    addEntries(value?: ondewo_nlu_common_pb.LogEntry, index?: number): ondewo_nlu_common_pb.LogEntry;
    getNextPageToken(): string;
    setNextPageToken(value: string): RagGetCrawlerRunLogsResponse;
    getTotalLogEntries(): number;
    setTotalLogEntries(value: number): RagGetCrawlerRunLogsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RagGetCrawlerRunLogsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RagGetCrawlerRunLogsResponse): RagGetCrawlerRunLogsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RagGetCrawlerRunLogsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RagGetCrawlerRunLogsResponse;
    static deserializeBinaryFromReader(message: RagGetCrawlerRunLogsResponse, reader: jspb.BinaryReader): RagGetCrawlerRunLogsResponse;
}

export namespace RagGetCrawlerRunLogsResponse {
    export type AsObject = {
        operationName: string,
        crawlerName: string,
        status: ondewo_nlu_operation_metadata_pb.OperationMetadata.Status,
        entriesList: Array<ondewo_nlu_common_pb.LogEntry.AsObject>,
        nextPageToken: string,
        totalLogEntries: number,
    }
}

export enum RagChunkMethod {
    RAG_CHUNK_METHOD_UNSPECIFIED = 0,
    RAG_CHUNK_METHOD_NAIVE = 1,
    RAG_CHUNK_METHOD_BOOK = 2,
    RAG_CHUNK_METHOD_EMAIL = 3,
    RAG_CHUNK_METHOD_LAWS = 4,
    RAG_CHUNK_METHOD_MANUAL = 5,
    RAG_CHUNK_METHOD_ONE = 6,
    RAG_CHUNK_METHOD_PAPER = 7,
    RAG_CHUNK_METHOD_PICTURE = 8,
    RAG_CHUNK_METHOD_PRESENTATION = 9,
    RAG_CHUNK_METHOD_QA = 10,
    RAG_CHUNK_METHOD_TABLE = 11,
    RAG_CHUNK_METHOD_TAG = 12,
}

export enum RagGraphRagMethod {
    RAG_GRAPH_RAG_METHOD_UNSPECIFIED = 0,
    RAG_GRAPH_RAG_METHOD_LIGHT = 1,
    RAG_GRAPH_RAG_METHOD_GENERAL = 2,
}

export enum RagDocumentType {
    RAG_DOCUMENT_TYPE_UNSPECIFIED = 0,
    RAG_DOCUMENT_TYPE_PDF = 1,
    RAG_DOCUMENT_TYPE_DOC = 2,
    RAG_DOCUMENT_TYPE_VISUAL = 3,
    RAG_DOCUMENT_TYPE_AURAL = 4,
    RAG_DOCUMENT_TYPE_VIRTUAL = 5,
    RAG_DOCUMENT_TYPE_FOLDER = 6,
    RAG_DOCUMENT_TYPE_OTHER = 7,
}

export enum RagDocumentStatus {
    RAG_DOCUMENT_STATUS_UNSPECIFIED = 0,
    RAG_DOCUMENT_STATUS_UNSTART = 1,
    RAG_DOCUMENT_STATUS_RUNNING = 2,
    RAG_DOCUMENT_STATUS_CANCEL = 3,
    RAG_DOCUMENT_STATUS_DONE = 4,
    RAG_DOCUMENT_STATUS_FAIL = 5,
}

export enum RagLogic {
    RAG_LOGIC_UNSPECIFIED = 0,
    RAG_LOGIC_AND = 1,
    RAG_LOGIC_OR = 2,
}

export enum RagComparisonOperator {
    RAG_COMPARISON_OPERATOR_UNSPECIFIED = 0,
    RAG_COMPARISON_OPERATOR_CONTAINS = 1,
    RAG_COMPARISON_OPERATOR_NOT_CONTAINS = 2,
    RAG_COMPARISON_OPERATOR_IN = 3,
    RAG_COMPARISON_OPERATOR_NOT_IN = 4,
    RAG_COMPARISON_OPERATOR_START_WITH = 5,
    RAG_COMPARISON_OPERATOR_END_WITH = 6,
    RAG_COMPARISON_OPERATOR_EMPTY = 7,
    RAG_COMPARISON_OPERATOR_NOT_EMPTY = 8,
    RAG_COMPARISON_OPERATOR_EQ = 9,
    RAG_COMPARISON_OPERATOR_NEQ = 10,
    RAG_COMPARISON_OPERATOR_GT = 11,
    RAG_COMPARISON_OPERATOR_LT = 12,
    RAG_COMPARISON_OPERATOR_GEQ = 13,
    RAG_COMPARISON_OPERATOR_LEQ = 14,
}

export enum RagCrawlerSelectorType {
    RAG_CRAWLER_SELECTOR_TYPE_UNSPECIFIED = 0,
    RAG_CRAWLER_SELECTOR_TYPE_ID = 1,
    RAG_CRAWLER_SELECTOR_TYPE_CSS_CLASS = 2,
    RAG_CRAWLER_SELECTOR_TYPE_XPATH = 3,
}

export enum RagCrawlerAuthenticationExecutionType {
    RAG_CRAWLER_AUTHENTICATION_EXECUTION_TYPE_UNSPECIFIED = 0,
    RAG_CRAWLER_AUTHENTICATION_EXECUTION_TYPE_SERVER_SIDE = 1,
    RAG_CRAWLER_AUTHENTICATION_EXECUTION_TYPE_CLIENT_SIDE = 2,
}

export enum RagCrawlerPruningThresholdType {
    RAG_CRAWLER_PRUNING_THRESHOLD_TYPE_UNSPECIFIED = 0,
    RAG_CRAWLER_PRUNING_THRESHOLD_TYPE_FIXED = 1,
    RAG_CRAWLER_PRUNING_THRESHOLD_TYPE_DYNAMIC = 2,
}

export enum RagCrawlerMetaDataExtractorType {
    RAG_CRAWLER_META_DATA_EXTRACTOR_TPYE_UNSPECIFIED = 0,
    RAG_CRAWLER_META_DATA_EXTRACTOR_TYPE_REGEX = 1,
    RAG_CRAWLER_META_DATA_EXTRACTOR_TYPE_FIXED_VALUE = 2,
    RAG_CRAWLER_META_DATA_EXTRACTOR_TYPE_CSS_SELECTOR = 3,
    RAG_CRAWLER_META_DATA_EXTRACTOR_TYPE_XPATH_SELECTOR = 4,
    RAG_CRAWLER_META_DATA_EXTRACTOR_TYPE_ID_SELECTOR = 5,
}

export enum RagCrawlerCrawlStrategy {
    RAG_CRAWLER_CRAWL_STRATEGY_UNSPECIFIED = 0,
    RAG_CRAWLER_CRAWL_STRATEGY_BFS = 1,
    RAG_CRAWLER_CRAWL_STRATEGY_DFS = 2,
    RAG_CRAWLER_CRAWL_STRATEGY_BEST_FIRST = 3,
}
