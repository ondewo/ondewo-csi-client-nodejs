// package: ondewo.nlu
// file: ondewo/nlu/utility.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from 'google-protobuf';
import * as ondewo_nlu_intent_pb from '../../ondewo/nlu/intent_pb';
import * as ondewo_nlu_entity_type_pb from '../../ondewo/nlu/entity_type_pb';

export class ValidateRegexRequest extends jspb.Message {
	getRegex(): string;
	setRegex(value: string): ValidateRegexRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ValidateRegexRequest.AsObject;
	static toObject(includeInstance: boolean, msg: ValidateRegexRequest): ValidateRegexRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: ValidateRegexRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ValidateRegexRequest;
	static deserializeBinaryFromReader(message: ValidateRegexRequest, reader: jspb.BinaryReader): ValidateRegexRequest;
}

export namespace ValidateRegexRequest {
	export type AsObject = {
		regex: string;
	};
}

export class ValidateRegexResponse extends jspb.Message {
	clearErrorMessagesList(): void;
	getErrorMessagesList(): Array<string>;
	setErrorMessagesList(value: Array<string>): ValidateRegexResponse;
	addErrorMessages(value: string, index?: number): string;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ValidateRegexResponse.AsObject;
	static toObject(includeInstance: boolean, msg: ValidateRegexResponse): ValidateRegexResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: ValidateRegexResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ValidateRegexResponse;
	static deserializeBinaryFromReader(message: ValidateRegexResponse, reader: jspb.BinaryReader): ValidateRegexResponse;
}

export namespace ValidateRegexResponse {
	export type AsObject = {
		errorMessagesList: Array<string>;
	};
}

export class ValidateEmbeddedRegexRequest extends jspb.Message {
	hasEntityType(): boolean;
	clearEntityType(): void;
	getEntityType(): ondewo_nlu_entity_type_pb.EntityType.Entity | undefined;
	setEntityType(value?: ondewo_nlu_entity_type_pb.EntityType.Entity): ValidateEmbeddedRegexRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ValidateEmbeddedRegexRequest.AsObject;
	static toObject(includeInstance: boolean, msg: ValidateEmbeddedRegexRequest): ValidateEmbeddedRegexRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: ValidateEmbeddedRegexRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ValidateEmbeddedRegexRequest;
	static deserializeBinaryFromReader(
		message: ValidateEmbeddedRegexRequest,
		reader: jspb.BinaryReader
	): ValidateEmbeddedRegexRequest;
}

export namespace ValidateEmbeddedRegexRequest {
	export type AsObject = {
		entityType?: ondewo_nlu_entity_type_pb.EntityType.Entity.AsObject;
	};
}

export class ValidateEmbeddedRegexResponse extends jspb.Message {
	clearErrorMessagesList(): void;
	getErrorMessagesList(): Array<string>;
	setErrorMessagesList(value: Array<string>): ValidateEmbeddedRegexResponse;
	addErrorMessages(value: string, index?: number): string;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ValidateEmbeddedRegexResponse.AsObject;
	static toObject(includeInstance: boolean, msg: ValidateEmbeddedRegexResponse): ValidateEmbeddedRegexResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: ValidateEmbeddedRegexResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ValidateEmbeddedRegexResponse;
	static deserializeBinaryFromReader(
		message: ValidateEmbeddedRegexResponse,
		reader: jspb.BinaryReader
	): ValidateEmbeddedRegexResponse;
}

export namespace ValidateEmbeddedRegexResponse {
	export type AsObject = {
		errorMessagesList: Array<string>;
	};
}

export class CleanAllIntentsRequest extends jspb.Message {
	getParent(): string;
	setParent(value: string): CleanAllIntentsRequest;
	getLanguageCode(): string;
	setLanguageCode(value: string): CleanAllIntentsRequest;
	getSpecialCharacters(): string;
	setSpecialCharacters(value: string): CleanAllIntentsRequest;
	clearSubstringWhiteListList(): void;
	getSubstringWhiteListList(): Array<string>;
	setSubstringWhiteListList(value: Array<string>): CleanAllIntentsRequest;
	addSubstringWhiteList(value: string, index?: number): string;
	getDryRun(): boolean;
	setDryRun(value: boolean): CleanAllIntentsRequest;

	hasTrainingPhraseCleanerOptions(): boolean;
	clearTrainingPhraseCleanerOptions(): void;
	getTrainingPhraseCleanerOptions(): TrainingPhraseCleanerOptions | undefined;
	setTrainingPhraseCleanerOptions(value?: TrainingPhraseCleanerOptions): CleanAllIntentsRequest;
	getReannotateEntitiesOptions(): ReannotateEntitiesOptions;
	setReannotateEntitiesOptions(value: ReannotateEntitiesOptions): CleanAllIntentsRequest;
	getNumberOfWorkers(): number;
	setNumberOfWorkers(value: number): CleanAllIntentsRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): CleanAllIntentsRequest.AsObject;
	static toObject(includeInstance: boolean, msg: CleanAllIntentsRequest): CleanAllIntentsRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: CleanAllIntentsRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): CleanAllIntentsRequest;
	static deserializeBinaryFromReader(
		message: CleanAllIntentsRequest,
		reader: jspb.BinaryReader
	): CleanAllIntentsRequest;
}

export namespace CleanAllIntentsRequest {
	export type AsObject = {
		parent: string;
		languageCode: string;
		specialCharacters: string;
		substringWhiteListList: Array<string>;
		dryRun: boolean;
		trainingPhraseCleanerOptions?: TrainingPhraseCleanerOptions.AsObject;
		reannotateEntitiesOptions: ReannotateEntitiesOptions;
		numberOfWorkers: number;
	};
}

export class CleanAllIntentsResponse extends jspb.Message {
	clearCleanedIntentsList(): void;
	getCleanedIntentsList(): Array<ondewo_nlu_intent_pb.Intent>;
	setCleanedIntentsList(value: Array<ondewo_nlu_intent_pb.Intent>): CleanAllIntentsResponse;
	addCleanedIntents(value?: ondewo_nlu_intent_pb.Intent, index?: number): ondewo_nlu_intent_pb.Intent;
	clearIntentUpdateListList(): void;
	getIntentUpdateListList(): Array<IntentUpdate>;
	setIntentUpdateListList(value: Array<IntentUpdate>): CleanAllIntentsResponse;
	addIntentUpdateList(value?: IntentUpdate, index?: number): IntentUpdate;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): CleanAllIntentsResponse.AsObject;
	static toObject(includeInstance: boolean, msg: CleanAllIntentsResponse): CleanAllIntentsResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: CleanAllIntentsResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): CleanAllIntentsResponse;
	static deserializeBinaryFromReader(
		message: CleanAllIntentsResponse,
		reader: jspb.BinaryReader
	): CleanAllIntentsResponse;
}

export namespace CleanAllIntentsResponse {
	export type AsObject = {
		cleanedIntentsList: Array<ondewo_nlu_intent_pb.Intent.AsObject>;
		intentUpdateListList: Array<IntentUpdate.AsObject>;
	};
}

export class CleanIntentRequest extends jspb.Message {
	getParent(): string;
	setParent(value: string): CleanIntentRequest;
	getIntentName(): string;
	setIntentName(value: string): CleanIntentRequest;
	getLanguageCode(): string;
	setLanguageCode(value: string): CleanIntentRequest;
	getSpecialCharacters(): string;
	setSpecialCharacters(value: string): CleanIntentRequest;
	clearSubstringWhiteListList(): void;
	getSubstringWhiteListList(): Array<string>;
	setSubstringWhiteListList(value: Array<string>): CleanIntentRequest;
	addSubstringWhiteList(value: string, index?: number): string;
	getDryRun(): boolean;
	setDryRun(value: boolean): CleanIntentRequest;

	hasTrainingPhraseCleanerOptions(): boolean;
	clearTrainingPhraseCleanerOptions(): void;
	getTrainingPhraseCleanerOptions(): TrainingPhraseCleanerOptions | undefined;
	setTrainingPhraseCleanerOptions(value?: TrainingPhraseCleanerOptions): CleanIntentRequest;
	getReannotateEntitiesOptions(): ReannotateEntitiesOptions;
	setReannotateEntitiesOptions(value: ReannotateEntitiesOptions): CleanIntentRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): CleanIntentRequest.AsObject;
	static toObject(includeInstance: boolean, msg: CleanIntentRequest): CleanIntentRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: CleanIntentRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): CleanIntentRequest;
	static deserializeBinaryFromReader(message: CleanIntentRequest, reader: jspb.BinaryReader): CleanIntentRequest;
}

export namespace CleanIntentRequest {
	export type AsObject = {
		parent: string;
		intentName: string;
		languageCode: string;
		specialCharacters: string;
		substringWhiteListList: Array<string>;
		dryRun: boolean;
		trainingPhraseCleanerOptions?: TrainingPhraseCleanerOptions.AsObject;
		reannotateEntitiesOptions: ReannotateEntitiesOptions;
	};
}

export class CleanIntentResponse extends jspb.Message {
	hasCleanedIntent(): boolean;
	clearCleanedIntent(): void;
	getCleanedIntent(): ondewo_nlu_intent_pb.Intent | undefined;
	setCleanedIntent(value?: ondewo_nlu_intent_pb.Intent): CleanIntentResponse;

	hasIntentUpdate(): boolean;
	clearIntentUpdate(): void;
	getIntentUpdate(): IntentUpdate | undefined;
	setIntentUpdate(value?: IntentUpdate): CleanIntentResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): CleanIntentResponse.AsObject;
	static toObject(includeInstance: boolean, msg: CleanIntentResponse): CleanIntentResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: CleanIntentResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): CleanIntentResponse;
	static deserializeBinaryFromReader(message: CleanIntentResponse, reader: jspb.BinaryReader): CleanIntentResponse;
}

export namespace CleanIntentResponse {
	export type AsObject = {
		cleanedIntent?: ondewo_nlu_intent_pb.Intent.AsObject;
		intentUpdate?: IntentUpdate.AsObject;
	};
}

export class TrainingPhraseCleanerOptions extends jspb.Message {
	getDeleteRepeatedWhitespaces(): boolean;
	setDeleteRepeatedWhitespaces(value: boolean): TrainingPhraseCleanerOptions;
	getDeleteLeadingSpecialCharacters(): boolean;
	setDeleteLeadingSpecialCharacters(value: boolean): TrainingPhraseCleanerOptions;
	getDeleteTrailingSpecialCharacters(): boolean;
	setDeleteTrailingSpecialCharacters(value: boolean): TrainingPhraseCleanerOptions;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): TrainingPhraseCleanerOptions.AsObject;
	static toObject(includeInstance: boolean, msg: TrainingPhraseCleanerOptions): TrainingPhraseCleanerOptions.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: TrainingPhraseCleanerOptions, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): TrainingPhraseCleanerOptions;
	static deserializeBinaryFromReader(
		message: TrainingPhraseCleanerOptions,
		reader: jspb.BinaryReader
	): TrainingPhraseCleanerOptions;
}

export namespace TrainingPhraseCleanerOptions {
	export type AsObject = {
		deleteRepeatedWhitespaces: boolean;
		deleteLeadingSpecialCharacters: boolean;
		deleteTrailingSpecialCharacters: boolean;
	};
}

export class StringUpdate extends jspb.Message {
	getNew(): string;
	setNew(value: string): StringUpdate;
	getOld(): string;
	setOld(value: string): StringUpdate;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): StringUpdate.AsObject;
	static toObject(includeInstance: boolean, msg: StringUpdate): StringUpdate.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: StringUpdate, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): StringUpdate;
	static deserializeBinaryFromReader(message: StringUpdate, reader: jspb.BinaryReader): StringUpdate;
}

export namespace StringUpdate {
	export type AsObject = {
		pb_new: string;
		old: string;
	};
}

export class IntentUpdate extends jspb.Message {
	getIntentDisplayName(): string;
	setIntentDisplayName(value: string): IntentUpdate;
	clearTrainingPhraseUpdateListList(): void;
	getTrainingPhraseUpdateListList(): Array<IntentUpdate.TrainingPhraseUpdate>;
	setTrainingPhraseUpdateListList(value: Array<IntentUpdate.TrainingPhraseUpdate>): IntentUpdate;
	addTrainingPhraseUpdateList(
		value?: IntentUpdate.TrainingPhraseUpdate,
		index?: number
	): IntentUpdate.TrainingPhraseUpdate;
	clearDeletedParametersList(): void;
	getDeletedParametersList(): Array<string>;
	setDeletedParametersList(value: Array<string>): IntentUpdate;
	addDeletedParameters(value: string, index?: number): string;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): IntentUpdate.AsObject;
	static toObject(includeInstance: boolean, msg: IntentUpdate): IntentUpdate.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: IntentUpdate, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): IntentUpdate;
	static deserializeBinaryFromReader(message: IntentUpdate, reader: jspb.BinaryReader): IntentUpdate;
}

export namespace IntentUpdate {
	export type AsObject = {
		intentDisplayName: string;
		trainingPhraseUpdateListList: Array<IntentUpdate.TrainingPhraseUpdate.AsObject>;
		deletedParametersList: Array<string>;
	};

	export class TrainingPhraseUpdate extends jspb.Message {
		hasTrainingPhraseUpdate(): boolean;
		clearTrainingPhraseUpdate(): void;
		getTrainingPhraseUpdate(): StringUpdate | undefined;
		setTrainingPhraseUpdate(value?: StringUpdate): TrainingPhraseUpdate;
		clearEntityUpdatesList(): void;
		getEntityUpdatesList(): Array<StringUpdate>;
		setEntityUpdatesList(value: Array<StringUpdate>): TrainingPhraseUpdate;
		addEntityUpdates(value?: StringUpdate, index?: number): StringUpdate;
		clearEntitiesReannotatedList(): void;
		getEntitiesReannotatedList(): Array<string>;
		setEntitiesReannotatedList(value: Array<string>): TrainingPhraseUpdate;
		addEntitiesReannotated(value: string, index?: number): string;
		getContainsUpdateVariable(): boolean;
		setContainsUpdateVariable(value: boolean): TrainingPhraseUpdate;

		serializeBinary(): Uint8Array;
		toObject(includeInstance?: boolean): TrainingPhraseUpdate.AsObject;
		static toObject(includeInstance: boolean, msg: TrainingPhraseUpdate): TrainingPhraseUpdate.AsObject;
		static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
		static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
		static serializeBinaryToWriter(message: TrainingPhraseUpdate, writer: jspb.BinaryWriter): void;
		static deserializeBinary(bytes: Uint8Array): TrainingPhraseUpdate;
		static deserializeBinaryFromReader(message: TrainingPhraseUpdate, reader: jspb.BinaryReader): TrainingPhraseUpdate;
	}

	export namespace TrainingPhraseUpdate {
		export type AsObject = {
			trainingPhraseUpdate?: StringUpdate.AsObject;
			entityUpdatesList: Array<StringUpdate.AsObject>;
			entitiesReannotatedList: Array<string>;
			containsUpdateVariable: boolean;
		};
	}
}

export class EntityTypeUpdate extends jspb.Message {
	getEntityTypeName(): string;
	setEntityTypeName(value: string): EntityTypeUpdate;
	clearValuesUpdateListList(): void;
	getValuesUpdateListList(): Array<EntityTypeUpdate.EntityUpdate>;
	setValuesUpdateListList(value: Array<EntityTypeUpdate.EntityUpdate>): EntityTypeUpdate;
	addValuesUpdateList(value?: EntityTypeUpdate.EntityUpdate, index?: number): EntityTypeUpdate.EntityUpdate;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): EntityTypeUpdate.AsObject;
	static toObject(includeInstance: boolean, msg: EntityTypeUpdate): EntityTypeUpdate.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: EntityTypeUpdate, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): EntityTypeUpdate;
	static deserializeBinaryFromReader(message: EntityTypeUpdate, reader: jspb.BinaryReader): EntityTypeUpdate;
}

export namespace EntityTypeUpdate {
	export type AsObject = {
		entityTypeName: string;
		valuesUpdateListList: Array<EntityTypeUpdate.EntityUpdate.AsObject>;
	};

	export class EntityUpdate extends jspb.Message {
		hasEntityValueUpdate(): boolean;
		clearEntityValueUpdate(): void;
		getEntityValueUpdate(): StringUpdate | undefined;
		setEntityValueUpdate(value?: StringUpdate): EntityUpdate;
		clearEntitySynonymUpdatesList(): void;
		getEntitySynonymUpdatesList(): Array<StringUpdate>;
		setEntitySynonymUpdatesList(value: Array<StringUpdate>): EntityUpdate;
		addEntitySynonymUpdates(value?: StringUpdate, index?: number): StringUpdate;

		serializeBinary(): Uint8Array;
		toObject(includeInstance?: boolean): EntityUpdate.AsObject;
		static toObject(includeInstance: boolean, msg: EntityUpdate): EntityUpdate.AsObject;
		static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
		static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
		static serializeBinaryToWriter(message: EntityUpdate, writer: jspb.BinaryWriter): void;
		static deserializeBinary(bytes: Uint8Array): EntityUpdate;
		static deserializeBinaryFromReader(message: EntityUpdate, reader: jspb.BinaryReader): EntityUpdate;
	}

	export namespace EntityUpdate {
		export type AsObject = {
			entityValueUpdate?: StringUpdate.AsObject;
			entitySynonymUpdatesList: Array<StringUpdate.AsObject>;
		};
	}
}

export class CleanAllEntityTypesRequest extends jspb.Message {
	getParent(): string;
	setParent(value: string): CleanAllEntityTypesRequest;
	getLanguageCode(): string;
	setLanguageCode(value: string): CleanAllEntityTypesRequest;
	getSpecialCharacters(): string;
	setSpecialCharacters(value: string): CleanAllEntityTypesRequest;
	clearSubstringWhiteListList(): void;
	getSubstringWhiteListList(): Array<string>;
	setSubstringWhiteListList(value: Array<string>): CleanAllEntityTypesRequest;
	addSubstringWhiteList(value: string, index?: number): string;
	getMaxEntityCountUpdate(): number;
	setMaxEntityCountUpdate(value: number): CleanAllEntityTypesRequest;
	clearForbiddenEntityTypePatternsList(): void;
	getForbiddenEntityTypePatternsList(): Array<string>;
	setForbiddenEntityTypePatternsList(value: Array<string>): CleanAllEntityTypesRequest;
	addForbiddenEntityTypePatterns(value: string, index?: number): string;
	getDryRun(): boolean;
	setDryRun(value: boolean): CleanAllEntityTypesRequest;
	getNumberOfWorkers(): number;
	setNumberOfWorkers(value: number): CleanAllEntityTypesRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): CleanAllEntityTypesRequest.AsObject;
	static toObject(includeInstance: boolean, msg: CleanAllEntityTypesRequest): CleanAllEntityTypesRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: CleanAllEntityTypesRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): CleanAllEntityTypesRequest;
	static deserializeBinaryFromReader(
		message: CleanAllEntityTypesRequest,
		reader: jspb.BinaryReader
	): CleanAllEntityTypesRequest;
}

export namespace CleanAllEntityTypesRequest {
	export type AsObject = {
		parent: string;
		languageCode: string;
		specialCharacters: string;
		substringWhiteListList: Array<string>;
		maxEntityCountUpdate: number;
		forbiddenEntityTypePatternsList: Array<string>;
		dryRun: boolean;
		numberOfWorkers: number;
	};
}

export class CleanAllEntityTypesResponse extends jspb.Message {
	clearCleanedEntityTypesList(): void;
	getCleanedEntityTypesList(): Array<ondewo_nlu_entity_type_pb.EntityType>;
	setCleanedEntityTypesList(value: Array<ondewo_nlu_entity_type_pb.EntityType>): CleanAllEntityTypesResponse;
	addCleanedEntityTypes(
		value?: ondewo_nlu_entity_type_pb.EntityType,
		index?: number
	): ondewo_nlu_entity_type_pb.EntityType;
	clearDeletedEntityTypesList(): void;
	getDeletedEntityTypesList(): Array<ondewo_nlu_entity_type_pb.EntityType>;
	setDeletedEntityTypesList(value: Array<ondewo_nlu_entity_type_pb.EntityType>): CleanAllEntityTypesResponse;
	addDeletedEntityTypes(
		value?: ondewo_nlu_entity_type_pb.EntityType,
		index?: number
	): ondewo_nlu_entity_type_pb.EntityType;
	clearEntityTypeUpdatesList(): void;
	getEntityTypeUpdatesList(): Array<EntityTypeUpdate>;
	setEntityTypeUpdatesList(value: Array<EntityTypeUpdate>): CleanAllEntityTypesResponse;
	addEntityTypeUpdates(value?: EntityTypeUpdate, index?: number): EntityTypeUpdate;
	clearEntityTypeDeletionsList(): void;
	getEntityTypeDeletionsList(): Array<EntityTypeUpdate>;
	setEntityTypeDeletionsList(value: Array<EntityTypeUpdate>): CleanAllEntityTypesResponse;
	addEntityTypeDeletions(value?: EntityTypeUpdate, index?: number): EntityTypeUpdate;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): CleanAllEntityTypesResponse.AsObject;
	static toObject(includeInstance: boolean, msg: CleanAllEntityTypesResponse): CleanAllEntityTypesResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: CleanAllEntityTypesResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): CleanAllEntityTypesResponse;
	static deserializeBinaryFromReader(
		message: CleanAllEntityTypesResponse,
		reader: jspb.BinaryReader
	): CleanAllEntityTypesResponse;
}

export namespace CleanAllEntityTypesResponse {
	export type AsObject = {
		cleanedEntityTypesList: Array<ondewo_nlu_entity_type_pb.EntityType.AsObject>;
		deletedEntityTypesList: Array<ondewo_nlu_entity_type_pb.EntityType.AsObject>;
		entityTypeUpdatesList: Array<EntityTypeUpdate.AsObject>;
		entityTypeDeletionsList: Array<EntityTypeUpdate.AsObject>;
	};
}

export class CleanEntityTypeRequest extends jspb.Message {
	getParent(): string;
	setParent(value: string): CleanEntityTypeRequest;
	getEntityTypeName(): string;
	setEntityTypeName(value: string): CleanEntityTypeRequest;
	getLanguageCode(): string;
	setLanguageCode(value: string): CleanEntityTypeRequest;
	getSpecialCharacters(): string;
	setSpecialCharacters(value: string): CleanEntityTypeRequest;
	clearSubstringWhiteListList(): void;
	getSubstringWhiteListList(): Array<string>;
	setSubstringWhiteListList(value: Array<string>): CleanEntityTypeRequest;
	addSubstringWhiteList(value: string, index?: number): string;
	getMaxEntityCountUpdate(): number;
	setMaxEntityCountUpdate(value: number): CleanEntityTypeRequest;
	getDryRun(): boolean;
	setDryRun(value: boolean): CleanEntityTypeRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): CleanEntityTypeRequest.AsObject;
	static toObject(includeInstance: boolean, msg: CleanEntityTypeRequest): CleanEntityTypeRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: CleanEntityTypeRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): CleanEntityTypeRequest;
	static deserializeBinaryFromReader(
		message: CleanEntityTypeRequest,
		reader: jspb.BinaryReader
	): CleanEntityTypeRequest;
}

export namespace CleanEntityTypeRequest {
	export type AsObject = {
		parent: string;
		entityTypeName: string;
		languageCode: string;
		specialCharacters: string;
		substringWhiteListList: Array<string>;
		maxEntityCountUpdate: number;
		dryRun: boolean;
	};
}

export class CleanEntityTypeResponse extends jspb.Message {
	hasCleanedEntityType(): boolean;
	clearCleanedEntityType(): void;
	getCleanedEntityType(): ondewo_nlu_entity_type_pb.EntityType | undefined;
	setCleanedEntityType(value?: ondewo_nlu_entity_type_pb.EntityType): CleanEntityTypeResponse;

	hasEntityTypeUpdate(): boolean;
	clearEntityTypeUpdate(): void;
	getEntityTypeUpdate(): EntityTypeUpdate | undefined;
	setEntityTypeUpdate(value?: EntityTypeUpdate): CleanEntityTypeResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): CleanEntityTypeResponse.AsObject;
	static toObject(includeInstance: boolean, msg: CleanEntityTypeResponse): CleanEntityTypeResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: CleanEntityTypeResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): CleanEntityTypeResponse;
	static deserializeBinaryFromReader(
		message: CleanEntityTypeResponse,
		reader: jspb.BinaryReader
	): CleanEntityTypeResponse;
}

export namespace CleanEntityTypeResponse {
	export type AsObject = {
		cleanedEntityType?: ondewo_nlu_entity_type_pb.EntityType.AsObject;
		entityTypeUpdate?: EntityTypeUpdate.AsObject;
	};
}

export class AddTrainingPhrasesRequest extends jspb.Message {
	getParent(): string;
	setParent(value: string): AddTrainingPhrasesRequest;
	getLanguageCode(): string;
	setLanguageCode(value: string): AddTrainingPhrasesRequest;
	clearTrainingPhraseListList(): void;
	getTrainingPhraseListList(): Array<AddTrainingPhrasesRequest.TrainingPhraseForIntent>;
	setTrainingPhraseListList(value: Array<AddTrainingPhrasesRequest.TrainingPhraseForIntent>): AddTrainingPhrasesRequest;
	addTrainingPhraseList(
		value?: AddTrainingPhrasesRequest.TrainingPhraseForIntent,
		index?: number
	): AddTrainingPhrasesRequest.TrainingPhraseForIntent;
	getExtractEntities(): boolean;
	setExtractEntities(value: boolean): AddTrainingPhrasesRequest;
	getSpecialCharacters(): string;
	setSpecialCharacters(value: string): AddTrainingPhrasesRequest;

	hasTrainingPhraseCleanerOptions(): boolean;
	clearTrainingPhraseCleanerOptions(): void;
	getTrainingPhraseCleanerOptions(): TrainingPhraseCleanerOptions | undefined;
	setTrainingPhraseCleanerOptions(value?: TrainingPhraseCleanerOptions): AddTrainingPhrasesRequest;
	getNumberOfWorkers(): number;
	setNumberOfWorkers(value: number): AddTrainingPhrasesRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): AddTrainingPhrasesRequest.AsObject;
	static toObject(includeInstance: boolean, msg: AddTrainingPhrasesRequest): AddTrainingPhrasesRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: AddTrainingPhrasesRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): AddTrainingPhrasesRequest;
	static deserializeBinaryFromReader(
		message: AddTrainingPhrasesRequest,
		reader: jspb.BinaryReader
	): AddTrainingPhrasesRequest;
}

export namespace AddTrainingPhrasesRequest {
	export type AsObject = {
		parent: string;
		languageCode: string;
		trainingPhraseListList: Array<AddTrainingPhrasesRequest.TrainingPhraseForIntent.AsObject>;
		extractEntities: boolean;
		specialCharacters: string;
		trainingPhraseCleanerOptions?: TrainingPhraseCleanerOptions.AsObject;
		numberOfWorkers: number;
	};

	export class TrainingPhraseForIntent extends jspb.Message {
		getTrainingPhrase(): string;
		setTrainingPhrase(value: string): TrainingPhraseForIntent;
		getIntentDisplayName(): string;
		setIntentDisplayName(value: string): TrainingPhraseForIntent;
		clearEntitiesList(): void;
		getEntitiesList(): Array<ondewo_nlu_intent_pb.Intent.TrainingPhrase.Entity>;
		setEntitiesList(value: Array<ondewo_nlu_intent_pb.Intent.TrainingPhrase.Entity>): TrainingPhraseForIntent;
		addEntities(
			value?: ondewo_nlu_intent_pb.Intent.TrainingPhrase.Entity,
			index?: number
		): ondewo_nlu_intent_pb.Intent.TrainingPhrase.Entity;

		serializeBinary(): Uint8Array;
		toObject(includeInstance?: boolean): TrainingPhraseForIntent.AsObject;
		static toObject(includeInstance: boolean, msg: TrainingPhraseForIntent): TrainingPhraseForIntent.AsObject;
		static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
		static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
		static serializeBinaryToWriter(message: TrainingPhraseForIntent, writer: jspb.BinaryWriter): void;
		static deserializeBinary(bytes: Uint8Array): TrainingPhraseForIntent;
		static deserializeBinaryFromReader(
			message: TrainingPhraseForIntent,
			reader: jspb.BinaryReader
		): TrainingPhraseForIntent;
	}

	export namespace TrainingPhraseForIntent {
		export type AsObject = {
			trainingPhrase: string;
			intentDisplayName: string;
			entitiesList: Array<ondewo_nlu_intent_pb.Intent.TrainingPhrase.Entity.AsObject>;
		};
	}
}

export class AddTrainingPhrasesResponse extends jspb.Message {
	clearErrorMessagesList(): void;
	getErrorMessagesList(): Array<string>;
	setErrorMessagesList(value: Array<string>): AddTrainingPhrasesResponse;
	addErrorMessages(value: string, index?: number): string;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): AddTrainingPhrasesResponse.AsObject;
	static toObject(includeInstance: boolean, msg: AddTrainingPhrasesResponse): AddTrainingPhrasesResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: AddTrainingPhrasesResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): AddTrainingPhrasesResponse;
	static deserializeBinaryFromReader(
		message: AddTrainingPhrasesResponse,
		reader: jspb.BinaryReader
	): AddTrainingPhrasesResponse;
}

export namespace AddTrainingPhrasesResponse {
	export type AsObject = {
		errorMessagesList: Array<string>;
	};
}

export class AddTrainingPhrasesFromCSVRequest extends jspb.Message {
	getParent(): string;
	setParent(value: string): AddTrainingPhrasesFromCSVRequest;
	getLanguageCode(): string;
	setLanguageCode(value: string): AddTrainingPhrasesFromCSVRequest;
	getCsvContents(): Uint8Array | string;
	getCsvContents_asU8(): Uint8Array;
	getCsvContents_asB64(): string;
	setCsvContents(value: Uint8Array | string): AddTrainingPhrasesFromCSVRequest;
	getExtractEntities(): boolean;
	setExtractEntities(value: boolean): AddTrainingPhrasesFromCSVRequest;
	getSpecialCharacters(): string;
	setSpecialCharacters(value: string): AddTrainingPhrasesFromCSVRequest;

	hasTrainingPhraseCleanerOptions(): boolean;
	clearTrainingPhraseCleanerOptions(): void;
	getTrainingPhraseCleanerOptions(): TrainingPhraseCleanerOptions | undefined;
	setTrainingPhraseCleanerOptions(value?: TrainingPhraseCleanerOptions): AddTrainingPhrasesFromCSVRequest;
	getNumberOfWorkers(): number;
	setNumberOfWorkers(value: number): AddTrainingPhrasesFromCSVRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): AddTrainingPhrasesFromCSVRequest.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: AddTrainingPhrasesFromCSVRequest
	): AddTrainingPhrasesFromCSVRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: AddTrainingPhrasesFromCSVRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): AddTrainingPhrasesFromCSVRequest;
	static deserializeBinaryFromReader(
		message: AddTrainingPhrasesFromCSVRequest,
		reader: jspb.BinaryReader
	): AddTrainingPhrasesFromCSVRequest;
}

export namespace AddTrainingPhrasesFromCSVRequest {
	export type AsObject = {
		parent: string;
		languageCode: string;
		csvContents: Uint8Array | string;
		extractEntities: boolean;
		specialCharacters: string;
		trainingPhraseCleanerOptions?: TrainingPhraseCleanerOptions.AsObject;
		numberOfWorkers: number;
	};
}

export enum ReannotateEntitiesOptions {
	REANNOTATE_NEVER = 0,
	REANNOTATE_ALWAYS = 1,
	REANNOTATE_IF_EMPTY = 2,
	REANNOTATE_AFTER_DELETION = 3,
	REANNOTATE_IF_EMPTY_OR_AFTER_DELETION = 4
}
