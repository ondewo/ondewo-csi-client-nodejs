// package: ondewo.nlu
// file: ondewo/nlu/entity_type.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ondewo_nlu_common_pb from "../../ondewo/nlu/common_pb";
import * as ondewo_nlu_operations_pb from "../../ondewo/nlu/operations_pb";

export class EntityType extends jspb.Message { 
    getName(): string;
    setName(value: string): EntityType;
    getDisplayName(): string;
    setDisplayName(value: string): EntityType;
    getKind(): EntityType.Kind;
    setKind(value: EntityType.Kind): EntityType;
    getAutoExpansionMode(): EntityType.AutoExpansionMode;
    setAutoExpansionMode(value: EntityType.AutoExpansionMode): EntityType;
    clearEntitiesList(): void;
    getEntitiesList(): Array<EntityType.Entity>;
    setEntitiesList(value: Array<EntityType.Entity>): EntityType;
    addEntities(value?: EntityType.Entity, index?: number): EntityType.Entity;
    getNextPageToken(): string;
    setNextPageToken(value: string): EntityType;
    getEntityCount(): number;
    setEntityCount(value: number): EntityType;
    getStatus(): EntityType.EntityTypeStatus;
    setStatus(value: EntityType.EntityTypeStatus): EntityType;
    getSynonymCount(): number;
    setSynonymCount(value: number): EntityType;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): EntityType;

    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): EntityType;
    getCreatedBy(): string;
    setCreatedBy(value: string): EntityType;
    getModifiedBy(): string;
    setModifiedBy(value: string): EntityType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EntityType.AsObject;
    static toObject(includeInstance: boolean, msg: EntityType): EntityType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EntityType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EntityType;
    static deserializeBinaryFromReader(message: EntityType, reader: jspb.BinaryReader): EntityType;
}

export namespace EntityType {
    export type AsObject = {
        name: string,
        displayName: string,
        kind: EntityType.Kind,
        autoExpansionMode: EntityType.AutoExpansionMode,
        entitiesList: Array<EntityType.Entity.AsObject>,
        nextPageToken: string,
        entityCount: number,
        status: EntityType.EntityTypeStatus,
        synonymCount: number,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdBy: string,
        modifiedBy: string,
    }


    export class Entity extends jspb.Message { 
        getValue(): string;
        setValue(value: string): Entity;
        clearSynonymsList(): void;
        getSynonymsList(): Array<string>;
        setSynonymsList(value: Array<string>): Entity;
        addSynonyms(value: string, index?: number): string;
        getName(): string;
        setName(value: string): Entity;
        getDisplayName(): string;
        setDisplayName(value: string): Entity;
        getSynonymCount(): number;
        setSynonymCount(value: number): Entity;
        getLanguageCode(): string;
        setLanguageCode(value: string): Entity;

        hasCreatedAt(): boolean;
        clearCreatedAt(): void;
        getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Entity;

        hasModifiedAt(): boolean;
        clearModifiedAt(): void;
        getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): Entity;
        getCreatedBy(): string;
        setCreatedBy(value: string): Entity;
        getModifiedBy(): string;
        setModifiedBy(value: string): Entity;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Entity.AsObject;
        static toObject(includeInstance: boolean, msg: Entity): Entity.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Entity, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Entity;
        static deserializeBinaryFromReader(message: Entity, reader: jspb.BinaryReader): Entity;
    }

    export namespace Entity {
        export type AsObject = {
            value: string,
            synonymsList: Array<string>,
            name: string,
            displayName: string,
            synonymCount: number,
            languageCode: string,
            createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            createdBy: string,
            modifiedBy: string,
        }
    }


    export enum Kind {
    KIND_UNSPECIFIED = 0,
    KIND_MAP = 1,
    KIND_LIST = 2,
    }

    export enum EntityTypeStatus {
    ACTIVE = 0,
    INACTIVE = 1,
    }

    export enum AutoExpansionMode {
    AUTO_EXPANSION_MODE_UNSPECIFIED = 0,
    AUTO_EXPANSION_MODE_DEFAULT = 1,
    }

}

export class ListEntityTypesRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ListEntityTypesRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): ListEntityTypesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListEntityTypesRequest;
    getEntityTypeView(): EntityTypeView;
    setEntityTypeView(value: EntityTypeView): ListEntityTypesRequest;
    getFilterByCategory(): EntityTypeCategory;
    setFilterByCategory(value: EntityTypeCategory): ListEntityTypesRequest;

    hasSortByField(): boolean;
    clearSortByField(): void;
    getSortByField(): EntityTypeSorting | undefined;
    setSortByField(value?: EntityTypeSorting): ListEntityTypesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListEntityTypesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListEntityTypesRequest): ListEntityTypesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListEntityTypesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListEntityTypesRequest;
    static deserializeBinaryFromReader(message: ListEntityTypesRequest, reader: jspb.BinaryReader): ListEntityTypesRequest;
}

export namespace ListEntityTypesRequest {
    export type AsObject = {
        parent: string,
        languageCode: string,
        pageToken: string,
        entityTypeView: EntityTypeView,
        filterByCategory: EntityTypeCategory,
        sortByField?: EntityTypeSorting.AsObject,
    }
}

export class ListEntityTypesResponse extends jspb.Message { 
    clearEntityTypesList(): void;
    getEntityTypesList(): Array<EntityType>;
    setEntityTypesList(value: Array<EntityType>): ListEntityTypesResponse;
    addEntityTypes(value?: EntityType, index?: number): EntityType;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListEntityTypesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListEntityTypesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListEntityTypesResponse): ListEntityTypesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListEntityTypesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListEntityTypesResponse;
    static deserializeBinaryFromReader(message: ListEntityTypesResponse, reader: jspb.BinaryReader): ListEntityTypesResponse;
}

export namespace ListEntityTypesResponse {
    export type AsObject = {
        entityTypesList: Array<EntityType.AsObject>,
        nextPageToken: string,
    }
}

export class GetEntityTypeRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GetEntityTypeRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): GetEntityTypeRequest;
    getPageToken(): string;
    setPageToken(value: string): GetEntityTypeRequest;
    getEntityTypeView(): EntityTypeView;
    setEntityTypeView(value: EntityTypeView): GetEntityTypeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetEntityTypeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetEntityTypeRequest): GetEntityTypeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetEntityTypeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetEntityTypeRequest;
    static deserializeBinaryFromReader(message: GetEntityTypeRequest, reader: jspb.BinaryReader): GetEntityTypeRequest;
}

export namespace GetEntityTypeRequest {
    export type AsObject = {
        name: string,
        languageCode: string,
        pageToken: string,
        entityTypeView: EntityTypeView,
    }
}

export class CreateEntityTypeRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): CreateEntityTypeRequest;

    hasEntityType(): boolean;
    clearEntityType(): void;
    getEntityType(): EntityType | undefined;
    setEntityType(value?: EntityType): CreateEntityTypeRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): CreateEntityTypeRequest;
    getEntityTypeView(): EntityTypeView;
    setEntityTypeView(value: EntityTypeView): CreateEntityTypeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateEntityTypeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateEntityTypeRequest): CreateEntityTypeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateEntityTypeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateEntityTypeRequest;
    static deserializeBinaryFromReader(message: CreateEntityTypeRequest, reader: jspb.BinaryReader): CreateEntityTypeRequest;
}

export namespace CreateEntityTypeRequest {
    export type AsObject = {
        parent: string,
        entityType?: EntityType.AsObject,
        languageCode: string,
        entityTypeView: EntityTypeView,
    }
}

export class UpdateEntityTypeRequest extends jspb.Message { 

    hasEntityType(): boolean;
    clearEntityType(): void;
    getEntityType(): EntityType | undefined;
    setEntityType(value?: EntityType): UpdateEntityTypeRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): UpdateEntityTypeRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateEntityTypeRequest;
    getEntityTypeView(): EntityTypeView;
    setEntityTypeView(value: EntityTypeView): UpdateEntityTypeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateEntityTypeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateEntityTypeRequest): UpdateEntityTypeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateEntityTypeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateEntityTypeRequest;
    static deserializeBinaryFromReader(message: UpdateEntityTypeRequest, reader: jspb.BinaryReader): UpdateEntityTypeRequest;
}

export namespace UpdateEntityTypeRequest {
    export type AsObject = {
        entityType?: EntityType.AsObject,
        languageCode: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        entityTypeView: EntityTypeView,
    }
}

export class DeleteEntityTypeRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): DeleteEntityTypeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteEntityTypeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteEntityTypeRequest): DeleteEntityTypeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteEntityTypeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteEntityTypeRequest;
    static deserializeBinaryFromReader(message: DeleteEntityTypeRequest, reader: jspb.BinaryReader): DeleteEntityTypeRequest;
}

export namespace DeleteEntityTypeRequest {
    export type AsObject = {
        name: string,
    }
}

export class BatchUpdateEntityTypesRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): BatchUpdateEntityTypesRequest;

    hasEntityTypeBatchUri(): boolean;
    clearEntityTypeBatchUri(): void;
    getEntityTypeBatchUri(): string;
    setEntityTypeBatchUri(value: string): BatchUpdateEntityTypesRequest;

    hasEntityTypeBatchInline(): boolean;
    clearEntityTypeBatchInline(): void;
    getEntityTypeBatchInline(): EntityTypeBatch | undefined;
    setEntityTypeBatchInline(value?: EntityTypeBatch): BatchUpdateEntityTypesRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): BatchUpdateEntityTypesRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): BatchUpdateEntityTypesRequest;

    getEntityTypeBatchCase(): BatchUpdateEntityTypesRequest.EntityTypeBatchCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchUpdateEntityTypesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BatchUpdateEntityTypesRequest): BatchUpdateEntityTypesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchUpdateEntityTypesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchUpdateEntityTypesRequest;
    static deserializeBinaryFromReader(message: BatchUpdateEntityTypesRequest, reader: jspb.BinaryReader): BatchUpdateEntityTypesRequest;
}

export namespace BatchUpdateEntityTypesRequest {
    export type AsObject = {
        parent: string,
        entityTypeBatchUri: string,
        entityTypeBatchInline?: EntityTypeBatch.AsObject,
        languageCode: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }

    export enum EntityTypeBatchCase {
        ENTITY_TYPE_BATCH_NOT_SET = 0,
        ENTITY_TYPE_BATCH_URI = 2,
        ENTITY_TYPE_BATCH_INLINE = 3,
    }

}

export class BatchUpdateEntityTypesResponse extends jspb.Message { 
    clearEntityTypesList(): void;
    getEntityTypesList(): Array<EntityType>;
    setEntityTypesList(value: Array<EntityType>): BatchUpdateEntityTypesResponse;
    addEntityTypes(value?: EntityType, index?: number): EntityType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchUpdateEntityTypesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BatchUpdateEntityTypesResponse): BatchUpdateEntityTypesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchUpdateEntityTypesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchUpdateEntityTypesResponse;
    static deserializeBinaryFromReader(message: BatchUpdateEntityTypesResponse, reader: jspb.BinaryReader): BatchUpdateEntityTypesResponse;
}

export namespace BatchUpdateEntityTypesResponse {
    export type AsObject = {
        entityTypesList: Array<EntityType.AsObject>,
    }
}

export class BatchDeleteEntityTypesRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): BatchDeleteEntityTypesRequest;
    clearEntityTypeNamesList(): void;
    getEntityTypeNamesList(): Array<string>;
    setEntityTypeNamesList(value: Array<string>): BatchDeleteEntityTypesRequest;
    addEntityTypeNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchDeleteEntityTypesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BatchDeleteEntityTypesRequest): BatchDeleteEntityTypesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchDeleteEntityTypesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchDeleteEntityTypesRequest;
    static deserializeBinaryFromReader(message: BatchDeleteEntityTypesRequest, reader: jspb.BinaryReader): BatchDeleteEntityTypesRequest;
}

export namespace BatchDeleteEntityTypesRequest {
    export type AsObject = {
        parent: string,
        entityTypeNamesList: Array<string>,
    }
}

export class EntityTypeBatch extends jspb.Message { 
    clearEntityTypesList(): void;
    getEntityTypesList(): Array<EntityType>;
    setEntityTypesList(value: Array<EntityType>): EntityTypeBatch;
    addEntityTypes(value?: EntityType, index?: number): EntityType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EntityTypeBatch.AsObject;
    static toObject(includeInstance: boolean, msg: EntityTypeBatch): EntityTypeBatch.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EntityTypeBatch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EntityTypeBatch;
    static deserializeBinaryFromReader(message: EntityTypeBatch, reader: jspb.BinaryReader): EntityTypeBatch;
}

export namespace EntityTypeBatch {
    export type AsObject = {
        entityTypesList: Array<EntityType.AsObject>,
    }
}

export class EntityTypeSorting extends jspb.Message { 
    getSortingField(): EntityTypeSorting.EntityTypeSortingField;
    setSortingField(value: EntityTypeSorting.EntityTypeSortingField): EntityTypeSorting;
    getSortingMode(): ondewo_nlu_common_pb.SortingMode;
    setSortingMode(value: ondewo_nlu_common_pb.SortingMode): EntityTypeSorting;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EntityTypeSorting.AsObject;
    static toObject(includeInstance: boolean, msg: EntityTypeSorting): EntityTypeSorting.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EntityTypeSorting, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EntityTypeSorting;
    static deserializeBinaryFromReader(message: EntityTypeSorting, reader: jspb.BinaryReader): EntityTypeSorting;
}

export namespace EntityTypeSorting {
    export type AsObject = {
        sortingField: EntityTypeSorting.EntityTypeSortingField,
        sortingMode: ondewo_nlu_common_pb.SortingMode,
    }

    export enum EntityTypeSortingField {
    NO_ENTITY_TYPE_SORTING = 0,
    SORT_ENTITY_TYPE_BY_NAME = 1,
    SORT_ENTITY_TYPE_BY_CREATION_DATE = 2,
    SORT_ENTITY_TYPE_BY_LAST_UPDATED = 3,
    SORT_ENTITY_TYPE_BY_ENTITY_VALUE_COUNT = 4,
    SORT_ENTITY_TYPE_BY_SYNONYM_COUNT = 5,
    }

}

export class EntityStatus extends jspb.Message { 

    hasEntity(): boolean;
    clearEntity(): void;
    getEntity(): EntityType.Entity | undefined;
    setEntity(value?: EntityType.Entity): EntityStatus;

    hasErrorMessage(): boolean;
    clearErrorMessage(): void;
    getErrorMessage(): string;
    setErrorMessage(value: string): EntityStatus;

    getEntityOrStatusCase(): EntityStatus.EntityOrStatusCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EntityStatus.AsObject;
    static toObject(includeInstance: boolean, msg: EntityStatus): EntityStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EntityStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EntityStatus;
    static deserializeBinaryFromReader(message: EntityStatus, reader: jspb.BinaryReader): EntityStatus;
}

export namespace EntityStatus {
    export type AsObject = {
        entity?: EntityType.Entity.AsObject,
        errorMessage: string,
    }

    export enum EntityOrStatusCase {
        ENTITY_OR_STATUS_NOT_SET = 0,
        ENTITY = 1,
        ERROR_MESSAGE = 2,
    }

}

export class BatchEntitiesResponse extends jspb.Message { 
    clearEntityStatusesList(): void;
    getEntityStatusesList(): Array<EntityStatus>;
    setEntityStatusesList(value: Array<EntityStatus>): BatchEntitiesResponse;
    addEntityStatuses(value?: EntityStatus, index?: number): EntityStatus;
    getHasErrors(): boolean;
    setHasErrors(value: boolean): BatchEntitiesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchEntitiesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BatchEntitiesResponse): BatchEntitiesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchEntitiesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchEntitiesResponse;
    static deserializeBinaryFromReader(message: BatchEntitiesResponse, reader: jspb.BinaryReader): BatchEntitiesResponse;
}

export namespace BatchEntitiesResponse {
    export type AsObject = {
        entityStatusesList: Array<EntityStatus.AsObject>,
        hasErrors: boolean,
    }
}

export class CreateEntityRequest extends jspb.Message { 
    getEntityTypeName(): string;
    setEntityTypeName(value: string): CreateEntityRequest;

    hasEntity(): boolean;
    clearEntity(): void;
    getEntity(): EntityType.Entity | undefined;
    setEntity(value?: EntityType.Entity): CreateEntityRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateEntityRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateEntityRequest): CreateEntityRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateEntityRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateEntityRequest;
    static deserializeBinaryFromReader(message: CreateEntityRequest, reader: jspb.BinaryReader): CreateEntityRequest;
}

export namespace CreateEntityRequest {
    export type AsObject = {
        entityTypeName: string,
        entity?: EntityType.Entity.AsObject,
    }
}

export class BatchCreateEntitiesRequest extends jspb.Message { 
    clearCreateEntityRequestsList(): void;
    getCreateEntityRequestsList(): Array<CreateEntityRequest>;
    setCreateEntityRequestsList(value: Array<CreateEntityRequest>): BatchCreateEntitiesRequest;
    addCreateEntityRequests(value?: CreateEntityRequest, index?: number): CreateEntityRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchCreateEntitiesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BatchCreateEntitiesRequest): BatchCreateEntitiesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchCreateEntitiesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchCreateEntitiesRequest;
    static deserializeBinaryFromReader(message: BatchCreateEntitiesRequest, reader: jspb.BinaryReader): BatchCreateEntitiesRequest;
}

export namespace BatchCreateEntitiesRequest {
    export type AsObject = {
        createEntityRequestsList: Array<CreateEntityRequest.AsObject>,
    }
}

export class BatchUpdateEntitiesRequest extends jspb.Message { 
    clearEntitiesList(): void;
    getEntitiesList(): Array<EntityType.Entity>;
    setEntitiesList(value: Array<EntityType.Entity>): BatchUpdateEntitiesRequest;
    addEntities(value?: EntityType.Entity, index?: number): EntityType.Entity;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchUpdateEntitiesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BatchUpdateEntitiesRequest): BatchUpdateEntitiesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchUpdateEntitiesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchUpdateEntitiesRequest;
    static deserializeBinaryFromReader(message: BatchUpdateEntitiesRequest, reader: jspb.BinaryReader): BatchUpdateEntitiesRequest;
}

export namespace BatchUpdateEntitiesRequest {
    export type AsObject = {
        entitiesList: Array<EntityType.Entity.AsObject>,
    }
}

export class UpdateEntityRequest extends jspb.Message { 

    hasEntity(): boolean;
    clearEntity(): void;
    getEntity(): EntityType.Entity | undefined;
    setEntity(value?: EntityType.Entity): UpdateEntityRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateEntityRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateEntityRequest): UpdateEntityRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateEntityRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateEntityRequest;
    static deserializeBinaryFromReader(message: UpdateEntityRequest, reader: jspb.BinaryReader): UpdateEntityRequest;
}

export namespace UpdateEntityRequest {
    export type AsObject = {
        entity?: EntityType.Entity.AsObject,
    }
}

export class GetEntityRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GetEntityRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetEntityRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetEntityRequest): GetEntityRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetEntityRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetEntityRequest;
    static deserializeBinaryFromReader(message: GetEntityRequest, reader: jspb.BinaryReader): GetEntityRequest;
}

export namespace GetEntityRequest {
    export type AsObject = {
        name: string,
    }
}

export class BatchGetEntitiesRequest extends jspb.Message { 
    clearNamesList(): void;
    getNamesList(): Array<string>;
    setNamesList(value: Array<string>): BatchGetEntitiesRequest;
    addNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchGetEntitiesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BatchGetEntitiesRequest): BatchGetEntitiesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchGetEntitiesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchGetEntitiesRequest;
    static deserializeBinaryFromReader(message: BatchGetEntitiesRequest, reader: jspb.BinaryReader): BatchGetEntitiesRequest;
}

export namespace BatchGetEntitiesRequest {
    export type AsObject = {
        namesList: Array<string>,
    }
}

export class BatchDeleteEntitiesRequest extends jspb.Message { 
    clearNamesList(): void;
    getNamesList(): Array<string>;
    setNamesList(value: Array<string>): BatchDeleteEntitiesRequest;
    addNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchDeleteEntitiesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BatchDeleteEntitiesRequest): BatchDeleteEntitiesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchDeleteEntitiesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchDeleteEntitiesRequest;
    static deserializeBinaryFromReader(message: BatchDeleteEntitiesRequest, reader: jspb.BinaryReader): BatchDeleteEntitiesRequest;
}

export namespace BatchDeleteEntitiesRequest {
    export type AsObject = {
        namesList: Array<string>,
    }
}

export class DeleteEntityRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): DeleteEntityRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteEntityRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteEntityRequest): DeleteEntityRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteEntityRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteEntityRequest;
    static deserializeBinaryFromReader(message: DeleteEntityRequest, reader: jspb.BinaryReader): DeleteEntityRequest;
}

export namespace DeleteEntityRequest {
    export type AsObject = {
        name: string,
    }
}

export class DeleteEntityStatus extends jspb.Message { 

    hasSuccessfullyDeleted(): boolean;
    clearSuccessfullyDeleted(): void;
    getSuccessfullyDeleted(): google_protobuf_empty_pb.Empty | undefined;
    setSuccessfullyDeleted(value?: google_protobuf_empty_pb.Empty): DeleteEntityStatus;

    hasErrorMessage(): boolean;
    clearErrorMessage(): void;
    getErrorMessage(): string;
    setErrorMessage(value: string): DeleteEntityStatus;

    getDeleteStatusCase(): DeleteEntityStatus.DeleteStatusCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteEntityStatus.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteEntityStatus): DeleteEntityStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteEntityStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteEntityStatus;
    static deserializeBinaryFromReader(message: DeleteEntityStatus, reader: jspb.BinaryReader): DeleteEntityStatus;
}

export namespace DeleteEntityStatus {
    export type AsObject = {
        successfullyDeleted?: google_protobuf_empty_pb.Empty.AsObject,
        errorMessage: string,
    }

    export enum DeleteStatusCase {
        DELETE_STATUS_NOT_SET = 0,
        SUCCESSFULLY_DELETED = 1,
        ERROR_MESSAGE = 2,
    }

}

export class BatchDeleteEntitiesResponse extends jspb.Message { 
    clearDeleteStatusesList(): void;
    getDeleteStatusesList(): Array<DeleteEntityStatus>;
    setDeleteStatusesList(value: Array<DeleteEntityStatus>): BatchDeleteEntitiesResponse;
    addDeleteStatuses(value?: DeleteEntityStatus, index?: number): DeleteEntityStatus;
    getHasErrors(): boolean;
    setHasErrors(value: boolean): BatchDeleteEntitiesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchDeleteEntitiesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BatchDeleteEntitiesResponse): BatchDeleteEntitiesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchDeleteEntitiesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchDeleteEntitiesResponse;
    static deserializeBinaryFromReader(message: BatchDeleteEntitiesResponse, reader: jspb.BinaryReader): BatchDeleteEntitiesResponse;
}

export namespace BatchDeleteEntitiesResponse {
    export type AsObject = {
        deleteStatusesList: Array<DeleteEntityStatus.AsObject>,
        hasErrors: boolean,
    }
}

export class ListEntitiesRequest extends jspb.Message { 
    getEntityTypeName(): string;
    setEntityTypeName(value: string): ListEntitiesRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): ListEntitiesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListEntitiesRequest;

    hasSortByField(): boolean;
    clearSortByField(): void;
    getSortByField(): EntityValueSorting | undefined;
    setSortByField(value?: EntityValueSorting): ListEntitiesRequest;
    getSearchByPattern(): string;
    setSearchByPattern(value: string): ListEntitiesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListEntitiesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListEntitiesRequest): ListEntitiesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListEntitiesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListEntitiesRequest;
    static deserializeBinaryFromReader(message: ListEntitiesRequest, reader: jspb.BinaryReader): ListEntitiesRequest;
}

export namespace ListEntitiesRequest {
    export type AsObject = {
        entityTypeName: string,
        languageCode: string,
        pageToken: string,
        sortByField?: EntityValueSorting.AsObject,
        searchByPattern: string,
    }
}

export class ListEntitiesResponse extends jspb.Message { 
    clearEntitiesList(): void;
    getEntitiesList(): Array<EntityType.Entity>;
    setEntitiesList(value: Array<EntityType.Entity>): ListEntitiesResponse;
    addEntities(value?: EntityType.Entity, index?: number): EntityType.Entity;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListEntitiesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListEntitiesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListEntitiesResponse): ListEntitiesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListEntitiesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListEntitiesResponse;
    static deserializeBinaryFromReader(message: ListEntitiesResponse, reader: jspb.BinaryReader): ListEntitiesResponse;
}

export namespace ListEntitiesResponse {
    export type AsObject = {
        entitiesList: Array<EntityType.Entity.AsObject>,
        nextPageToken: string,
    }
}

export class EntityValueSorting extends jspb.Message { 
    getSortingField(): EntityValueSorting.EntityValueSortingField;
    setSortingField(value: EntityValueSorting.EntityValueSortingField): EntityValueSorting;
    getSortingMode(): ondewo_nlu_common_pb.SortingMode;
    setSortingMode(value: ondewo_nlu_common_pb.SortingMode): EntityValueSorting;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EntityValueSorting.AsObject;
    static toObject(includeInstance: boolean, msg: EntityValueSorting): EntityValueSorting.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EntityValueSorting, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EntityValueSorting;
    static deserializeBinaryFromReader(message: EntityValueSorting, reader: jspb.BinaryReader): EntityValueSorting;
}

export namespace EntityValueSorting {
    export type AsObject = {
        sortingField: EntityValueSorting.EntityValueSortingField,
        sortingMode: ondewo_nlu_common_pb.SortingMode,
    }

    export enum EntityValueSortingField {
    NO_ENTITY_VALUE_SORTING = 0,
    SORT_ENTITY_VALUE_BY_DISPLAY_NAME = 1,
    SORT_ENTITY_VALUE_BY_VALUE = 2,
    SORT_ENTITY_VALUE_BY_SYNONYM_COUNT = 3,
    }

}

export enum EntityTypeView {
    ENTITY_TYPE_VIEW_UNSPECIFIED = 0,
    ENTITY_TYPE_VIEW_FULL = 1,
    ENTITY_TYPE_VIEW_PARTIAL = 2,
    ENTITY_TYPE_VIEW_SHALLOW = 3,
    ENTITY_TYPE_VIEW_MINIMUM = 4,
}

export enum EntityTypeCategory {
    ALL_ENTITY_TYPES = 0,
    DEFAULT_ENTITY_TYPES = 1,
    USER_DEFINED_ENTITY_TYPES = 2,
}
