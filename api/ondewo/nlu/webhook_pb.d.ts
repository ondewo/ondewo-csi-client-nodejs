// package: ondewo.nlu
// file: ondewo/nlu/webhook.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from 'google-protobuf';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as ondewo_nlu_entity_type_pb from '../../ondewo/nlu/entity_type_pb';
import * as ondewo_nlu_context_pb from '../../ondewo/nlu/context_pb';
import * as ondewo_nlu_intent_pb from '../../ondewo/nlu/intent_pb';
import * as ondewo_nlu_session_pb from '../../ondewo/nlu/session_pb';

export class PingRequest extends jspb.Message {
	getSession(): string;
	setSession(value: string): PingRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): PingRequest.AsObject;
	static toObject(includeInstance: boolean, msg: PingRequest): PingRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: PingRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): PingRequest;
	static deserializeBinaryFromReader(message: PingRequest, reader: jspb.BinaryReader): PingRequest;
}

export namespace PingRequest {
	export type AsObject = {
		session: string;
	};
}

export class WebhookRequest extends jspb.Message {
	getResponseId(): string;
	setResponseId(value: string): WebhookRequest;

	hasQueryResult(): boolean;
	clearQueryResult(): void;
	getQueryResult(): ondewo_nlu_session_pb.QueryResult | undefined;
	setQueryResult(value?: ondewo_nlu_session_pb.QueryResult): WebhookRequest;

	hasOriginalDetectIntentRequest(): boolean;
	clearOriginalDetectIntentRequest(): void;
	getOriginalDetectIntentRequest(): OriginalDetectIntentRequest | undefined;
	setOriginalDetectIntentRequest(value?: OriginalDetectIntentRequest): WebhookRequest;
	getSession(): string;
	setSession(value: string): WebhookRequest;

	hasHeaders(): boolean;
	clearHeaders(): void;
	getHeaders(): google_protobuf_struct_pb.Struct | undefined;
	setHeaders(value?: google_protobuf_struct_pb.Struct): WebhookRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): WebhookRequest.AsObject;
	static toObject(includeInstance: boolean, msg: WebhookRequest): WebhookRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: WebhookRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): WebhookRequest;
	static deserializeBinaryFromReader(message: WebhookRequest, reader: jspb.BinaryReader): WebhookRequest;
}

export namespace WebhookRequest {
	export type AsObject = {
		responseId: string;
		queryResult?: ondewo_nlu_session_pb.QueryResult.AsObject;
		originalDetectIntentRequest?: OriginalDetectIntentRequest.AsObject;
		session: string;
		headers?: google_protobuf_struct_pb.Struct.AsObject;
	};
}

export class WebhookResponse extends jspb.Message {
	getFulfillmentText(): string;
	setFulfillmentText(value: string): WebhookResponse;
	clearFulfillmentMessagesList(): void;
	getFulfillmentMessagesList(): Array<ondewo_nlu_intent_pb.Intent.Message>;
	setFulfillmentMessagesList(value: Array<ondewo_nlu_intent_pb.Intent.Message>): WebhookResponse;
	addFulfillmentMessages(
		value?: ondewo_nlu_intent_pb.Intent.Message,
		index?: number
	): ondewo_nlu_intent_pb.Intent.Message;
	getSource(): string;
	setSource(value: string): WebhookResponse;

	hasPayload(): boolean;
	clearPayload(): void;
	getPayload(): google_protobuf_struct_pb.Struct | undefined;
	setPayload(value?: google_protobuf_struct_pb.Struct): WebhookResponse;
	clearOutputContextsList(): void;
	getOutputContextsList(): Array<ondewo_nlu_context_pb.Context>;
	setOutputContextsList(value: Array<ondewo_nlu_context_pb.Context>): WebhookResponse;
	addOutputContexts(value?: ondewo_nlu_context_pb.Context, index?: number): ondewo_nlu_context_pb.Context;

	hasFollowupEventInput(): boolean;
	clearFollowupEventInput(): void;
	getFollowupEventInput(): ondewo_nlu_session_pb.EventInput | undefined;
	setFollowupEventInput(value?: ondewo_nlu_session_pb.EventInput): WebhookResponse;
	clearSessionEntityTypesList(): void;
	getSessionEntityTypesList(): Array<SessionEntityType>;
	setSessionEntityTypesList(value: Array<SessionEntityType>): WebhookResponse;
	addSessionEntityTypes(value?: SessionEntityType, index?: number): SessionEntityType;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): WebhookResponse.AsObject;
	static toObject(includeInstance: boolean, msg: WebhookResponse): WebhookResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: WebhookResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): WebhookResponse;
	static deserializeBinaryFromReader(message: WebhookResponse, reader: jspb.BinaryReader): WebhookResponse;
}

export namespace WebhookResponse {
	export type AsObject = {
		fulfillmentText: string;
		fulfillmentMessagesList: Array<ondewo_nlu_intent_pb.Intent.Message.AsObject>;
		source: string;
		payload?: google_protobuf_struct_pb.Struct.AsObject;
		outputContextsList: Array<ondewo_nlu_context_pb.Context.AsObject>;
		followupEventInput?: ondewo_nlu_session_pb.EventInput.AsObject;
		sessionEntityTypesList: Array<SessionEntityType.AsObject>;
	};
}

export class OriginalDetectIntentRequest extends jspb.Message {
	getSource(): string;
	setSource(value: string): OriginalDetectIntentRequest;

	hasPayload(): boolean;
	clearPayload(): void;
	getPayload(): google_protobuf_struct_pb.Struct | undefined;
	setPayload(value?: google_protobuf_struct_pb.Struct): OriginalDetectIntentRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): OriginalDetectIntentRequest.AsObject;
	static toObject(includeInstance: boolean, msg: OriginalDetectIntentRequest): OriginalDetectIntentRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: OriginalDetectIntentRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): OriginalDetectIntentRequest;
	static deserializeBinaryFromReader(
		message: OriginalDetectIntentRequest,
		reader: jspb.BinaryReader
	): OriginalDetectIntentRequest;
}

export namespace OriginalDetectIntentRequest {
	export type AsObject = {
		source: string;
		payload?: google_protobuf_struct_pb.Struct.AsObject;
	};
}

export class PingResponse extends jspb.Message {
	getIsReachable(): boolean;
	setIsReachable(value: boolean): PingResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): PingResponse.AsObject;
	static toObject(includeInstance: boolean, msg: PingResponse): PingResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: PingResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): PingResponse;
	static deserializeBinaryFromReader(message: PingResponse, reader: jspb.BinaryReader): PingResponse;
}

export namespace PingResponse {
	export type AsObject = {
		isReachable: boolean;
	};
}

export class SessionEntityType extends jspb.Message {
	getName(): string;
	setName(value: string): SessionEntityType;
	getEntityOverrideMode(): SessionEntityType.EntityOverrideMode;
	setEntityOverrideMode(value: SessionEntityType.EntityOverrideMode): SessionEntityType;
	clearEntitiesList(): void;
	getEntitiesList(): Array<ondewo_nlu_entity_type_pb.EntityType.Entity>;
	setEntitiesList(value: Array<ondewo_nlu_entity_type_pb.EntityType.Entity>): SessionEntityType;
	addEntities(
		value?: ondewo_nlu_entity_type_pb.EntityType.Entity,
		index?: number
	): ondewo_nlu_entity_type_pb.EntityType.Entity;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): SessionEntityType.AsObject;
	static toObject(includeInstance: boolean, msg: SessionEntityType): SessionEntityType.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: SessionEntityType, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): SessionEntityType;
	static deserializeBinaryFromReader(message: SessionEntityType, reader: jspb.BinaryReader): SessionEntityType;
}

export namespace SessionEntityType {
	export type AsObject = {
		name: string;
		entityOverrideMode: SessionEntityType.EntityOverrideMode;
		entitiesList: Array<ondewo_nlu_entity_type_pb.EntityType.Entity.AsObject>;
	};

	export enum EntityOverrideMode {
		ENTITY_OVERRIDE_MODE_UNSPECIFIED = 0,
		ENTITY_OVERRIDE_MODE_OVERRIDE = 1,
		ENTITY_OVERRIDE_MODE_SUPPLEMENT = 2
	}
}

export class ListSessionEntityTypesRequest extends jspb.Message {
	getParent(): string;
	setParent(value: string): ListSessionEntityTypesRequest;
	getPageSize(): number;
	setPageSize(value: number): ListSessionEntityTypesRequest;
	getPageToken(): string;
	setPageToken(value: string): ListSessionEntityTypesRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListSessionEntityTypesRequest.AsObject;
	static toObject(includeInstance: boolean, msg: ListSessionEntityTypesRequest): ListSessionEntityTypesRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: ListSessionEntityTypesRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListSessionEntityTypesRequest;
	static deserializeBinaryFromReader(
		message: ListSessionEntityTypesRequest,
		reader: jspb.BinaryReader
	): ListSessionEntityTypesRequest;
}

export namespace ListSessionEntityTypesRequest {
	export type AsObject = {
		parent: string;
		pageSize: number;
		pageToken: string;
	};
}

export class ListSessionEntityTypesResponse extends jspb.Message {
	clearSessionEntityTypesList(): void;
	getSessionEntityTypesList(): Array<SessionEntityType>;
	setSessionEntityTypesList(value: Array<SessionEntityType>): ListSessionEntityTypesResponse;
	addSessionEntityTypes(value?: SessionEntityType, index?: number): SessionEntityType;
	getNextPageToken(): string;
	setNextPageToken(value: string): ListSessionEntityTypesResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListSessionEntityTypesResponse.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: ListSessionEntityTypesResponse
	): ListSessionEntityTypesResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: ListSessionEntityTypesResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListSessionEntityTypesResponse;
	static deserializeBinaryFromReader(
		message: ListSessionEntityTypesResponse,
		reader: jspb.BinaryReader
	): ListSessionEntityTypesResponse;
}

export namespace ListSessionEntityTypesResponse {
	export type AsObject = {
		sessionEntityTypesList: Array<SessionEntityType.AsObject>;
		nextPageToken: string;
	};
}

export class GetSessionEntityTypeRequest extends jspb.Message {
	getName(): string;
	setName(value: string): GetSessionEntityTypeRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): GetSessionEntityTypeRequest.AsObject;
	static toObject(includeInstance: boolean, msg: GetSessionEntityTypeRequest): GetSessionEntityTypeRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: GetSessionEntityTypeRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): GetSessionEntityTypeRequest;
	static deserializeBinaryFromReader(
		message: GetSessionEntityTypeRequest,
		reader: jspb.BinaryReader
	): GetSessionEntityTypeRequest;
}

export namespace GetSessionEntityTypeRequest {
	export type AsObject = {
		name: string;
	};
}

export class CreateSessionEntityTypeRequest extends jspb.Message {
	getParent(): string;
	setParent(value: string): CreateSessionEntityTypeRequest;

	hasSessionEntityType(): boolean;
	clearSessionEntityType(): void;
	getSessionEntityType(): SessionEntityType | undefined;
	setSessionEntityType(value?: SessionEntityType): CreateSessionEntityTypeRequest;
	getSessionId(): string;
	setSessionId(value: string): CreateSessionEntityTypeRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): CreateSessionEntityTypeRequest.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: CreateSessionEntityTypeRequest
	): CreateSessionEntityTypeRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: CreateSessionEntityTypeRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): CreateSessionEntityTypeRequest;
	static deserializeBinaryFromReader(
		message: CreateSessionEntityTypeRequest,
		reader: jspb.BinaryReader
	): CreateSessionEntityTypeRequest;
}

export namespace CreateSessionEntityTypeRequest {
	export type AsObject = {
		parent: string;
		sessionEntityType?: SessionEntityType.AsObject;
		sessionId: string;
	};
}

export class UpdateSessionEntityTypeRequest extends jspb.Message {
	hasSessionEntityType(): boolean;
	clearSessionEntityType(): void;
	getSessionEntityType(): SessionEntityType | undefined;
	setSessionEntityType(value?: SessionEntityType): UpdateSessionEntityTypeRequest;

	hasUpdateMask(): boolean;
	clearUpdateMask(): void;
	getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
	setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateSessionEntityTypeRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): UpdateSessionEntityTypeRequest.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: UpdateSessionEntityTypeRequest
	): UpdateSessionEntityTypeRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: UpdateSessionEntityTypeRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): UpdateSessionEntityTypeRequest;
	static deserializeBinaryFromReader(
		message: UpdateSessionEntityTypeRequest,
		reader: jspb.BinaryReader
	): UpdateSessionEntityTypeRequest;
}

export namespace UpdateSessionEntityTypeRequest {
	export type AsObject = {
		sessionEntityType?: SessionEntityType.AsObject;
		updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject;
	};
}

export class DeleteSessionEntityTypeRequest extends jspb.Message {
	getName(): string;
	setName(value: string): DeleteSessionEntityTypeRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): DeleteSessionEntityTypeRequest.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: DeleteSessionEntityTypeRequest
	): DeleteSessionEntityTypeRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: DeleteSessionEntityTypeRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): DeleteSessionEntityTypeRequest;
	static deserializeBinaryFromReader(
		message: DeleteSessionEntityTypeRequest,
		reader: jspb.BinaryReader
	): DeleteSessionEntityTypeRequest;
}

export namespace DeleteSessionEntityTypeRequest {
	export type AsObject = {
		name: string;
	};
}
