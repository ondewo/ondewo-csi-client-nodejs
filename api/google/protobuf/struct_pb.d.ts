// package: google.protobuf
// file: google/protobuf/struct.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from 'google-protobuf';

export class Struct extends jspb.Message {
	getFieldsMap(): jspb.Map<string, Value>;
	clearFieldsMap(): void;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Struct.AsObject;
	static toObject(includeInstance: boolean, msg: Struct): Struct.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: Struct, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): Struct;
	static deserializeBinaryFromReader(message: Struct, reader: jspb.BinaryReader): Struct;
}

export namespace Struct {
	export type AsObject = {
		fieldsMap: Array<[string, Value.AsObject]>;
	};
}

export class Value extends jspb.Message {
	hasNullValue(): boolean;
	clearNullValue(): void;
	getNullValue(): NullValue;
	setNullValue(value: NullValue): Value;

	hasNumberValue(): boolean;
	clearNumberValue(): void;
	getNumberValue(): number;
	setNumberValue(value: number): Value;

	hasStringValue(): boolean;
	clearStringValue(): void;
	getStringValue(): string;
	setStringValue(value: string): Value;

	hasBoolValue(): boolean;
	clearBoolValue(): void;
	getBoolValue(): boolean;
	setBoolValue(value: boolean): Value;

	hasStructValue(): boolean;
	clearStructValue(): void;
	getStructValue(): Struct | undefined;
	setStructValue(value?: Struct): Value;

	hasListValue(): boolean;
	clearListValue(): void;
	getListValue(): ListValue | undefined;
	setListValue(value?: ListValue): Value;

	getKindCase(): Value.KindCase;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Value.AsObject;
	static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): Value;
	static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
}

export namespace Value {
	export type AsObject = {
		nullValue: NullValue;
		numberValue: number;
		stringValue: string;
		boolValue: boolean;
		structValue?: Struct.AsObject;
		listValue?: ListValue.AsObject;
	};

	export enum KindCase {
		KIND_NOT_SET = 0,
		NULL_VALUE = 1,
		NUMBER_VALUE = 2,
		STRING_VALUE = 3,
		BOOL_VALUE = 4,
		STRUCT_VALUE = 5,
		LIST_VALUE = 6
	}
}

export class ListValue extends jspb.Message {
	clearValuesList(): void;
	getValuesList(): Array<Value>;
	setValuesList(value: Array<Value>): ListValue;
	addValues(value?: Value, index?: number): Value;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListValue.AsObject;
	static toObject(includeInstance: boolean, msg: ListValue): ListValue.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: ListValue, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListValue;
	static deserializeBinaryFromReader(message: ListValue, reader: jspb.BinaryReader): ListValue;
}

export namespace ListValue {
	export type AsObject = {
		valuesList: Array<Value.AsObject>;
	};
}

export enum NullValue {
	NULL_VALUE = 0
}
