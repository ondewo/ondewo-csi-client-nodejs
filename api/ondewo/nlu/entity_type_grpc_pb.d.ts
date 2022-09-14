// package: ondewo.nlu
// file: ondewo/nlu/entity_type.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from 'grpc';
import * as ondewo_nlu_entity_type_pb from '../../ondewo/nlu/entity_type_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as ondewo_nlu_common_pb from '../../ondewo/nlu/common_pb';
import * as ondewo_nlu_operations_pb from '../../ondewo/nlu/operations_pb';

interface IEntityTypesService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
	listEntityTypes: IEntityTypesService_IListEntityTypes;
	getEntityType: IEntityTypesService_IGetEntityType;
	createEntityType: IEntityTypesService_ICreateEntityType;
	updateEntityType: IEntityTypesService_IUpdateEntityType;
	deleteEntityType: IEntityTypesService_IDeleteEntityType;
	batchUpdateEntityTypes: IEntityTypesService_IBatchUpdateEntityTypes;
	batchDeleteEntityTypes: IEntityTypesService_IBatchDeleteEntityTypes;
	batchCreateEntities: IEntityTypesService_IBatchCreateEntities;
	batchUpdateEntities: IEntityTypesService_IBatchUpdateEntities;
	batchGetEntities: IEntityTypesService_IBatchGetEntities;
	batchDeleteEntities: IEntityTypesService_IBatchDeleteEntities;
	listEntities: IEntityTypesService_IListEntities;
}

interface IEntityTypesService_IListEntityTypes
	extends grpc.MethodDefinition<
		ondewo_nlu_entity_type_pb.ListEntityTypesRequest,
		ondewo_nlu_entity_type_pb.ListEntityTypesResponse
	> {
	path: '/ondewo.nlu.EntityTypes/ListEntityTypes';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_entity_type_pb.ListEntityTypesRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_entity_type_pb.ListEntityTypesRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_entity_type_pb.ListEntityTypesResponse>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_entity_type_pb.ListEntityTypesResponse>;
}
interface IEntityTypesService_IGetEntityType
	extends grpc.MethodDefinition<ondewo_nlu_entity_type_pb.GetEntityTypeRequest, ondewo_nlu_entity_type_pb.EntityType> {
	path: '/ondewo.nlu.EntityTypes/GetEntityType';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_entity_type_pb.GetEntityTypeRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_entity_type_pb.GetEntityTypeRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_entity_type_pb.EntityType>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_entity_type_pb.EntityType>;
}
interface IEntityTypesService_ICreateEntityType
	extends grpc.MethodDefinition<
		ondewo_nlu_entity_type_pb.CreateEntityTypeRequest,
		ondewo_nlu_entity_type_pb.EntityType
	> {
	path: '/ondewo.nlu.EntityTypes/CreateEntityType';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_entity_type_pb.CreateEntityTypeRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_entity_type_pb.CreateEntityTypeRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_entity_type_pb.EntityType>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_entity_type_pb.EntityType>;
}
interface IEntityTypesService_IUpdateEntityType
	extends grpc.MethodDefinition<
		ondewo_nlu_entity_type_pb.UpdateEntityTypeRequest,
		ondewo_nlu_entity_type_pb.EntityType
	> {
	path: '/ondewo.nlu.EntityTypes/UpdateEntityType';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_entity_type_pb.UpdateEntityTypeRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_entity_type_pb.UpdateEntityTypeRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_entity_type_pb.EntityType>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_entity_type_pb.EntityType>;
}
interface IEntityTypesService_IDeleteEntityType
	extends grpc.MethodDefinition<ondewo_nlu_entity_type_pb.DeleteEntityTypeRequest, google_protobuf_empty_pb.Empty> {
	path: '/ondewo.nlu.EntityTypes/DeleteEntityType';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_entity_type_pb.DeleteEntityTypeRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_entity_type_pb.DeleteEntityTypeRequest>;
	responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
	responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IEntityTypesService_IBatchUpdateEntityTypes
	extends grpc.MethodDefinition<
		ondewo_nlu_entity_type_pb.BatchUpdateEntityTypesRequest,
		ondewo_nlu_operations_pb.Operation
	> {
	path: '/ondewo.nlu.EntityTypes/BatchUpdateEntityTypes';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_entity_type_pb.BatchUpdateEntityTypesRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_entity_type_pb.BatchUpdateEntityTypesRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_operations_pb.Operation>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_operations_pb.Operation>;
}
interface IEntityTypesService_IBatchDeleteEntityTypes
	extends grpc.MethodDefinition<
		ondewo_nlu_entity_type_pb.BatchDeleteEntityTypesRequest,
		ondewo_nlu_operations_pb.Operation
	> {
	path: '/ondewo.nlu.EntityTypes/BatchDeleteEntityTypes';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_entity_type_pb.BatchDeleteEntityTypesRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_entity_type_pb.BatchDeleteEntityTypesRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_operations_pb.Operation>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_operations_pb.Operation>;
}
interface IEntityTypesService_IBatchCreateEntities
	extends grpc.MethodDefinition<
		ondewo_nlu_entity_type_pb.BatchCreateEntitiesRequest,
		ondewo_nlu_entity_type_pb.BatchEntitiesResponse
	> {
	path: '/ondewo.nlu.EntityTypes/BatchCreateEntities';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_entity_type_pb.BatchCreateEntitiesRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_entity_type_pb.BatchCreateEntitiesRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_entity_type_pb.BatchEntitiesResponse>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_entity_type_pb.BatchEntitiesResponse>;
}
interface IEntityTypesService_IBatchUpdateEntities
	extends grpc.MethodDefinition<
		ondewo_nlu_entity_type_pb.BatchUpdateEntitiesRequest,
		ondewo_nlu_entity_type_pb.BatchEntitiesResponse
	> {
	path: '/ondewo.nlu.EntityTypes/BatchUpdateEntities';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_entity_type_pb.BatchUpdateEntitiesRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_entity_type_pb.BatchUpdateEntitiesRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_entity_type_pb.BatchEntitiesResponse>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_entity_type_pb.BatchEntitiesResponse>;
}
interface IEntityTypesService_IBatchGetEntities
	extends grpc.MethodDefinition<
		ondewo_nlu_entity_type_pb.BatchGetEntitiesRequest,
		ondewo_nlu_entity_type_pb.BatchEntitiesResponse
	> {
	path: '/ondewo.nlu.EntityTypes/BatchGetEntities';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_entity_type_pb.BatchGetEntitiesRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_entity_type_pb.BatchGetEntitiesRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_entity_type_pb.BatchEntitiesResponse>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_entity_type_pb.BatchEntitiesResponse>;
}
interface IEntityTypesService_IBatchDeleteEntities
	extends grpc.MethodDefinition<
		ondewo_nlu_entity_type_pb.BatchDeleteEntitiesRequest,
		ondewo_nlu_entity_type_pb.BatchDeleteEntitiesResponse
	> {
	path: '/ondewo.nlu.EntityTypes/BatchDeleteEntities';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_entity_type_pb.BatchDeleteEntitiesRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_entity_type_pb.BatchDeleteEntitiesRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_entity_type_pb.BatchDeleteEntitiesResponse>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_entity_type_pb.BatchDeleteEntitiesResponse>;
}
interface IEntityTypesService_IListEntities
	extends grpc.MethodDefinition<
		ondewo_nlu_entity_type_pb.ListEntitiesRequest,
		ondewo_nlu_entity_type_pb.ListEntitiesResponse
	> {
	path: '/ondewo.nlu.EntityTypes/ListEntities';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_entity_type_pb.ListEntitiesRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_entity_type_pb.ListEntitiesRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_entity_type_pb.ListEntitiesResponse>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_entity_type_pb.ListEntitiesResponse>;
}

export const EntityTypesService: IEntityTypesService;

export interface IEntityTypesServer {
	listEntityTypes: grpc.handleUnaryCall<
		ondewo_nlu_entity_type_pb.ListEntityTypesRequest,
		ondewo_nlu_entity_type_pb.ListEntityTypesResponse
	>;
	getEntityType: grpc.handleUnaryCall<
		ondewo_nlu_entity_type_pb.GetEntityTypeRequest,
		ondewo_nlu_entity_type_pb.EntityType
	>;
	createEntityType: grpc.handleUnaryCall<
		ondewo_nlu_entity_type_pb.CreateEntityTypeRequest,
		ondewo_nlu_entity_type_pb.EntityType
	>;
	updateEntityType: grpc.handleUnaryCall<
		ondewo_nlu_entity_type_pb.UpdateEntityTypeRequest,
		ondewo_nlu_entity_type_pb.EntityType
	>;
	deleteEntityType: grpc.handleUnaryCall<
		ondewo_nlu_entity_type_pb.DeleteEntityTypeRequest,
		google_protobuf_empty_pb.Empty
	>;
	batchUpdateEntityTypes: grpc.handleUnaryCall<
		ondewo_nlu_entity_type_pb.BatchUpdateEntityTypesRequest,
		ondewo_nlu_operations_pb.Operation
	>;
	batchDeleteEntityTypes: grpc.handleUnaryCall<
		ondewo_nlu_entity_type_pb.BatchDeleteEntityTypesRequest,
		ondewo_nlu_operations_pb.Operation
	>;
	batchCreateEntities: grpc.handleUnaryCall<
		ondewo_nlu_entity_type_pb.BatchCreateEntitiesRequest,
		ondewo_nlu_entity_type_pb.BatchEntitiesResponse
	>;
	batchUpdateEntities: grpc.handleUnaryCall<
		ondewo_nlu_entity_type_pb.BatchUpdateEntitiesRequest,
		ondewo_nlu_entity_type_pb.BatchEntitiesResponse
	>;
	batchGetEntities: grpc.handleUnaryCall<
		ondewo_nlu_entity_type_pb.BatchGetEntitiesRequest,
		ondewo_nlu_entity_type_pb.BatchEntitiesResponse
	>;
	batchDeleteEntities: grpc.handleUnaryCall<
		ondewo_nlu_entity_type_pb.BatchDeleteEntitiesRequest,
		ondewo_nlu_entity_type_pb.BatchDeleteEntitiesResponse
	>;
	listEntities: grpc.handleUnaryCall<
		ondewo_nlu_entity_type_pb.ListEntitiesRequest,
		ondewo_nlu_entity_type_pb.ListEntitiesResponse
	>;
}

export interface IEntityTypesClient {
	listEntityTypes(
		request: ondewo_nlu_entity_type_pb.ListEntityTypesRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.ListEntityTypesResponse) => void
	): grpc.ClientUnaryCall;
	listEntityTypes(
		request: ondewo_nlu_entity_type_pb.ListEntityTypesRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.ListEntityTypesResponse) => void
	): grpc.ClientUnaryCall;
	listEntityTypes(
		request: ondewo_nlu_entity_type_pb.ListEntityTypesRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.ListEntityTypesResponse) => void
	): grpc.ClientUnaryCall;
	getEntityType(
		request: ondewo_nlu_entity_type_pb.GetEntityTypeRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.EntityType) => void
	): grpc.ClientUnaryCall;
	getEntityType(
		request: ondewo_nlu_entity_type_pb.GetEntityTypeRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.EntityType) => void
	): grpc.ClientUnaryCall;
	getEntityType(
		request: ondewo_nlu_entity_type_pb.GetEntityTypeRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.EntityType) => void
	): grpc.ClientUnaryCall;
	createEntityType(
		request: ondewo_nlu_entity_type_pb.CreateEntityTypeRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.EntityType) => void
	): grpc.ClientUnaryCall;
	createEntityType(
		request: ondewo_nlu_entity_type_pb.CreateEntityTypeRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.EntityType) => void
	): grpc.ClientUnaryCall;
	createEntityType(
		request: ondewo_nlu_entity_type_pb.CreateEntityTypeRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.EntityType) => void
	): grpc.ClientUnaryCall;
	updateEntityType(
		request: ondewo_nlu_entity_type_pb.UpdateEntityTypeRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.EntityType) => void
	): grpc.ClientUnaryCall;
	updateEntityType(
		request: ondewo_nlu_entity_type_pb.UpdateEntityTypeRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.EntityType) => void
	): grpc.ClientUnaryCall;
	updateEntityType(
		request: ondewo_nlu_entity_type_pb.UpdateEntityTypeRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.EntityType) => void
	): grpc.ClientUnaryCall;
	deleteEntityType(
		request: ondewo_nlu_entity_type_pb.DeleteEntityTypeRequest,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	deleteEntityType(
		request: ondewo_nlu_entity_type_pb.DeleteEntityTypeRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	deleteEntityType(
		request: ondewo_nlu_entity_type_pb.DeleteEntityTypeRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	batchUpdateEntityTypes(
		request: ondewo_nlu_entity_type_pb.BatchUpdateEntityTypesRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	batchUpdateEntityTypes(
		request: ondewo_nlu_entity_type_pb.BatchUpdateEntityTypesRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	batchUpdateEntityTypes(
		request: ondewo_nlu_entity_type_pb.BatchUpdateEntityTypesRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	batchDeleteEntityTypes(
		request: ondewo_nlu_entity_type_pb.BatchDeleteEntityTypesRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	batchDeleteEntityTypes(
		request: ondewo_nlu_entity_type_pb.BatchDeleteEntityTypesRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	batchDeleteEntityTypes(
		request: ondewo_nlu_entity_type_pb.BatchDeleteEntityTypesRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	batchCreateEntities(
		request: ondewo_nlu_entity_type_pb.BatchCreateEntitiesRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.BatchEntitiesResponse) => void
	): grpc.ClientUnaryCall;
	batchCreateEntities(
		request: ondewo_nlu_entity_type_pb.BatchCreateEntitiesRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.BatchEntitiesResponse) => void
	): grpc.ClientUnaryCall;
	batchCreateEntities(
		request: ondewo_nlu_entity_type_pb.BatchCreateEntitiesRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.BatchEntitiesResponse) => void
	): grpc.ClientUnaryCall;
	batchUpdateEntities(
		request: ondewo_nlu_entity_type_pb.BatchUpdateEntitiesRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.BatchEntitiesResponse) => void
	): grpc.ClientUnaryCall;
	batchUpdateEntities(
		request: ondewo_nlu_entity_type_pb.BatchUpdateEntitiesRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.BatchEntitiesResponse) => void
	): grpc.ClientUnaryCall;
	batchUpdateEntities(
		request: ondewo_nlu_entity_type_pb.BatchUpdateEntitiesRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.BatchEntitiesResponse) => void
	): grpc.ClientUnaryCall;
	batchGetEntities(
		request: ondewo_nlu_entity_type_pb.BatchGetEntitiesRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.BatchEntitiesResponse) => void
	): grpc.ClientUnaryCall;
	batchGetEntities(
		request: ondewo_nlu_entity_type_pb.BatchGetEntitiesRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.BatchEntitiesResponse) => void
	): grpc.ClientUnaryCall;
	batchGetEntities(
		request: ondewo_nlu_entity_type_pb.BatchGetEntitiesRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.BatchEntitiesResponse) => void
	): grpc.ClientUnaryCall;
	batchDeleteEntities(
		request: ondewo_nlu_entity_type_pb.BatchDeleteEntitiesRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.BatchDeleteEntitiesResponse) => void
	): grpc.ClientUnaryCall;
	batchDeleteEntities(
		request: ondewo_nlu_entity_type_pb.BatchDeleteEntitiesRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.BatchDeleteEntitiesResponse) => void
	): grpc.ClientUnaryCall;
	batchDeleteEntities(
		request: ondewo_nlu_entity_type_pb.BatchDeleteEntitiesRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.BatchDeleteEntitiesResponse) => void
	): grpc.ClientUnaryCall;
	listEntities(
		request: ondewo_nlu_entity_type_pb.ListEntitiesRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.ListEntitiesResponse) => void
	): grpc.ClientUnaryCall;
	listEntities(
		request: ondewo_nlu_entity_type_pb.ListEntitiesRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.ListEntitiesResponse) => void
	): grpc.ClientUnaryCall;
	listEntities(
		request: ondewo_nlu_entity_type_pb.ListEntitiesRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.ListEntitiesResponse) => void
	): grpc.ClientUnaryCall;
}

export class EntityTypesClient extends grpc.Client implements IEntityTypesClient {
	constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
	public listEntityTypes(
		request: ondewo_nlu_entity_type_pb.ListEntityTypesRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.ListEntityTypesResponse) => void
	): grpc.ClientUnaryCall;
	public listEntityTypes(
		request: ondewo_nlu_entity_type_pb.ListEntityTypesRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.ListEntityTypesResponse) => void
	): grpc.ClientUnaryCall;
	public listEntityTypes(
		request: ondewo_nlu_entity_type_pb.ListEntityTypesRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.ListEntityTypesResponse) => void
	): grpc.ClientUnaryCall;
	public getEntityType(
		request: ondewo_nlu_entity_type_pb.GetEntityTypeRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.EntityType) => void
	): grpc.ClientUnaryCall;
	public getEntityType(
		request: ondewo_nlu_entity_type_pb.GetEntityTypeRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.EntityType) => void
	): grpc.ClientUnaryCall;
	public getEntityType(
		request: ondewo_nlu_entity_type_pb.GetEntityTypeRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.EntityType) => void
	): grpc.ClientUnaryCall;
	public createEntityType(
		request: ondewo_nlu_entity_type_pb.CreateEntityTypeRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.EntityType) => void
	): grpc.ClientUnaryCall;
	public createEntityType(
		request: ondewo_nlu_entity_type_pb.CreateEntityTypeRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.EntityType) => void
	): grpc.ClientUnaryCall;
	public createEntityType(
		request: ondewo_nlu_entity_type_pb.CreateEntityTypeRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.EntityType) => void
	): grpc.ClientUnaryCall;
	public updateEntityType(
		request: ondewo_nlu_entity_type_pb.UpdateEntityTypeRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.EntityType) => void
	): grpc.ClientUnaryCall;
	public updateEntityType(
		request: ondewo_nlu_entity_type_pb.UpdateEntityTypeRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.EntityType) => void
	): grpc.ClientUnaryCall;
	public updateEntityType(
		request: ondewo_nlu_entity_type_pb.UpdateEntityTypeRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.EntityType) => void
	): grpc.ClientUnaryCall;
	public deleteEntityType(
		request: ondewo_nlu_entity_type_pb.DeleteEntityTypeRequest,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	public deleteEntityType(
		request: ondewo_nlu_entity_type_pb.DeleteEntityTypeRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	public deleteEntityType(
		request: ondewo_nlu_entity_type_pb.DeleteEntityTypeRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	public batchUpdateEntityTypes(
		request: ondewo_nlu_entity_type_pb.BatchUpdateEntityTypesRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	public batchUpdateEntityTypes(
		request: ondewo_nlu_entity_type_pb.BatchUpdateEntityTypesRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	public batchUpdateEntityTypes(
		request: ondewo_nlu_entity_type_pb.BatchUpdateEntityTypesRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	public batchDeleteEntityTypes(
		request: ondewo_nlu_entity_type_pb.BatchDeleteEntityTypesRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	public batchDeleteEntityTypes(
		request: ondewo_nlu_entity_type_pb.BatchDeleteEntityTypesRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	public batchDeleteEntityTypes(
		request: ondewo_nlu_entity_type_pb.BatchDeleteEntityTypesRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	public batchCreateEntities(
		request: ondewo_nlu_entity_type_pb.BatchCreateEntitiesRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.BatchEntitiesResponse) => void
	): grpc.ClientUnaryCall;
	public batchCreateEntities(
		request: ondewo_nlu_entity_type_pb.BatchCreateEntitiesRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.BatchEntitiesResponse) => void
	): grpc.ClientUnaryCall;
	public batchCreateEntities(
		request: ondewo_nlu_entity_type_pb.BatchCreateEntitiesRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.BatchEntitiesResponse) => void
	): grpc.ClientUnaryCall;
	public batchUpdateEntities(
		request: ondewo_nlu_entity_type_pb.BatchUpdateEntitiesRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.BatchEntitiesResponse) => void
	): grpc.ClientUnaryCall;
	public batchUpdateEntities(
		request: ondewo_nlu_entity_type_pb.BatchUpdateEntitiesRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.BatchEntitiesResponse) => void
	): grpc.ClientUnaryCall;
	public batchUpdateEntities(
		request: ondewo_nlu_entity_type_pb.BatchUpdateEntitiesRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.BatchEntitiesResponse) => void
	): grpc.ClientUnaryCall;
	public batchGetEntities(
		request: ondewo_nlu_entity_type_pb.BatchGetEntitiesRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.BatchEntitiesResponse) => void
	): grpc.ClientUnaryCall;
	public batchGetEntities(
		request: ondewo_nlu_entity_type_pb.BatchGetEntitiesRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.BatchEntitiesResponse) => void
	): grpc.ClientUnaryCall;
	public batchGetEntities(
		request: ondewo_nlu_entity_type_pb.BatchGetEntitiesRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.BatchEntitiesResponse) => void
	): grpc.ClientUnaryCall;
	public batchDeleteEntities(
		request: ondewo_nlu_entity_type_pb.BatchDeleteEntitiesRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.BatchDeleteEntitiesResponse) => void
	): grpc.ClientUnaryCall;
	public batchDeleteEntities(
		request: ondewo_nlu_entity_type_pb.BatchDeleteEntitiesRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.BatchDeleteEntitiesResponse) => void
	): grpc.ClientUnaryCall;
	public batchDeleteEntities(
		request: ondewo_nlu_entity_type_pb.BatchDeleteEntitiesRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.BatchDeleteEntitiesResponse) => void
	): grpc.ClientUnaryCall;
	public listEntities(
		request: ondewo_nlu_entity_type_pb.ListEntitiesRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.ListEntitiesResponse) => void
	): grpc.ClientUnaryCall;
	public listEntities(
		request: ondewo_nlu_entity_type_pb.ListEntitiesRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.ListEntitiesResponse) => void
	): grpc.ClientUnaryCall;
	public listEntities(
		request: ondewo_nlu_entity_type_pb.ListEntitiesRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_entity_type_pb.ListEntitiesResponse) => void
	): grpc.ClientUnaryCall;
}
