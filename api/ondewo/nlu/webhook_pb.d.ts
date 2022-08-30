// package: ondewo.nlu
// file: ondewo/nlu/webhook.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as ondewo_nlu_context_pb from "../../ondewo/nlu/context_pb";
import * as ondewo_nlu_intent_pb from "../../ondewo/nlu/intent_pb";
import * as ondewo_nlu_session_pb from "../../ondewo/nlu/session_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class PingRequest extends jspb.Message { 
    getSession(): string;
    setSession(value: string): PingRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PingRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PingRequest): PingRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PingRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PingRequest;
    static deserializeBinaryFromReader(message: PingRequest, reader: jspb.BinaryReader): PingRequest;
}

export namespace PingRequest {
    export type AsObject = {
        session: string,
    }
}

export class WebhookRequest extends jspb.Message { 
    getSession(): string;
    setSession(value: string): WebhookRequest;
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

    hasHeaders(): boolean;
    clearHeaders(): void;
    getHeaders(): google_protobuf_struct_pb.Struct | undefined;
    setHeaders(value?: google_protobuf_struct_pb.Struct): WebhookRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebhookRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WebhookRequest): WebhookRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebhookRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebhookRequest;
    static deserializeBinaryFromReader(message: WebhookRequest, reader: jspb.BinaryReader): WebhookRequest;
}

export namespace WebhookRequest {
    export type AsObject = {
        session: string,
        responseId: string,
        queryResult?: ondewo_nlu_session_pb.QueryResult.AsObject,
        originalDetectIntentRequest?: OriginalDetectIntentRequest.AsObject,
        headers?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class WebhookResponse extends jspb.Message { 
    getFulfillmentText(): string;
    setFulfillmentText(value: string): WebhookResponse;
    clearFulfillmentMessagesList(): void;
    getFulfillmentMessagesList(): Array<ondewo_nlu_intent_pb.Intent.Message>;
    setFulfillmentMessagesList(value: Array<ondewo_nlu_intent_pb.Intent.Message>): WebhookResponse;
    addFulfillmentMessages(value?: ondewo_nlu_intent_pb.Intent.Message, index?: number): ondewo_nlu_intent_pb.Intent.Message;
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

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebhookResponse.AsObject;
    static toObject(includeInstance: boolean, msg: WebhookResponse): WebhookResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebhookResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebhookResponse;
    static deserializeBinaryFromReader(message: WebhookResponse, reader: jspb.BinaryReader): WebhookResponse;
}

export namespace WebhookResponse {
    export type AsObject = {
        fulfillmentText: string,
        fulfillmentMessagesList: Array<ondewo_nlu_intent_pb.Intent.Message.AsObject>,
        source: string,
        payload?: google_protobuf_struct_pb.Struct.AsObject,
        outputContextsList: Array<ondewo_nlu_context_pb.Context.AsObject>,
        followupEventInput?: ondewo_nlu_session_pb.EventInput.AsObject,
    }
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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OriginalDetectIntentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OriginalDetectIntentRequest;
    static deserializeBinaryFromReader(message: OriginalDetectIntentRequest, reader: jspb.BinaryReader): OriginalDetectIntentRequest;
}

export namespace OriginalDetectIntentRequest {
    export type AsObject = {
        source: string,
        payload?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class PingResponse extends jspb.Message { 
    getIsReachable(): boolean;
    setIsReachable(value: boolean): PingResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PingResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PingResponse): PingResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PingResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PingResponse;
    static deserializeBinaryFromReader(message: PingResponse, reader: jspb.BinaryReader): PingResponse;
}

export namespace PingResponse {
    export type AsObject = {
        isReachable: boolean,
    }
}
