// package: ondewo.nlu
// file: ondewo/nlu/common.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from 'google-protobuf';

export class StatResponse extends jspb.Message {
	getValue(): number;
	setValue(value: number): StatResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): StatResponse.AsObject;
	static toObject(includeInstance: boolean, msg: StatResponse): StatResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: StatResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): StatResponse;
	static deserializeBinaryFromReader(message: StatResponse, reader: jspb.BinaryReader): StatResponse;
}

export namespace StatResponse {
	export type AsObject = {
		value: number;
	};
}

export enum SortingMode {
	ASCENDING = 0,
	DESCENDING = 1
}
