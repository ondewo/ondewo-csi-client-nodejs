// package: ondewo.nlu
// file: ondewo/nlu/operations.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from 'grpc';
import * as ondewo_nlu_operations_pb from '../../ondewo/nlu/operations_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_rpc_status_pb from '../../google/rpc/status_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as ondewo_nlu_operation_metadata_pb from '../../ondewo/nlu/operation_metadata_pb';

interface IOperationsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
	listOperations: IOperationsService_IListOperations;
	getOperation: IOperationsService_IGetOperation;
	deleteOperation: IOperationsService_IDeleteOperation;
	cancelOperation: IOperationsService_ICancelOperation;
}

interface IOperationsService_IListOperations
	extends grpc.MethodDefinition<
		ondewo_nlu_operations_pb.ListOperationsRequest,
		ondewo_nlu_operations_pb.ListOperationsResponse
	> {
	path: '/ondewo.nlu.Operations/ListOperations';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_operations_pb.ListOperationsRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_operations_pb.ListOperationsRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_operations_pb.ListOperationsResponse>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_operations_pb.ListOperationsResponse>;
}
interface IOperationsService_IGetOperation
	extends grpc.MethodDefinition<ondewo_nlu_operations_pb.GetOperationRequest, ondewo_nlu_operations_pb.Operation> {
	path: '/ondewo.nlu.Operations/GetOperation';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_operations_pb.GetOperationRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_operations_pb.GetOperationRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_operations_pb.Operation>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_operations_pb.Operation>;
}
interface IOperationsService_IDeleteOperation
	extends grpc.MethodDefinition<ondewo_nlu_operations_pb.DeleteOperationRequest, google_protobuf_empty_pb.Empty> {
	path: '/ondewo.nlu.Operations/DeleteOperation';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_operations_pb.DeleteOperationRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_operations_pb.DeleteOperationRequest>;
	responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
	responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IOperationsService_ICancelOperation
	extends grpc.MethodDefinition<ondewo_nlu_operations_pb.CancelOperationRequest, google_protobuf_empty_pb.Empty> {
	path: '/ondewo.nlu.Operations/CancelOperation';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_operations_pb.CancelOperationRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_operations_pb.CancelOperationRequest>;
	responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
	responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const OperationsService: IOperationsService;

export interface IOperationsServer {
	listOperations: grpc.handleUnaryCall<
		ondewo_nlu_operations_pb.ListOperationsRequest,
		ondewo_nlu_operations_pb.ListOperationsResponse
	>;
	getOperation: grpc.handleUnaryCall<ondewo_nlu_operations_pb.GetOperationRequest, ondewo_nlu_operations_pb.Operation>;
	deleteOperation: grpc.handleUnaryCall<
		ondewo_nlu_operations_pb.DeleteOperationRequest,
		google_protobuf_empty_pb.Empty
	>;
	cancelOperation: grpc.handleUnaryCall<
		ondewo_nlu_operations_pb.CancelOperationRequest,
		google_protobuf_empty_pb.Empty
	>;
}

export interface IOperationsClient {
	listOperations(
		request: ondewo_nlu_operations_pb.ListOperationsRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.ListOperationsResponse) => void
	): grpc.ClientUnaryCall;
	listOperations(
		request: ondewo_nlu_operations_pb.ListOperationsRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.ListOperationsResponse) => void
	): grpc.ClientUnaryCall;
	listOperations(
		request: ondewo_nlu_operations_pb.ListOperationsRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.ListOperationsResponse) => void
	): grpc.ClientUnaryCall;
	getOperation(
		request: ondewo_nlu_operations_pb.GetOperationRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	getOperation(
		request: ondewo_nlu_operations_pb.GetOperationRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	getOperation(
		request: ondewo_nlu_operations_pb.GetOperationRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	deleteOperation(
		request: ondewo_nlu_operations_pb.DeleteOperationRequest,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	deleteOperation(
		request: ondewo_nlu_operations_pb.DeleteOperationRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	deleteOperation(
		request: ondewo_nlu_operations_pb.DeleteOperationRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	cancelOperation(
		request: ondewo_nlu_operations_pb.CancelOperationRequest,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	cancelOperation(
		request: ondewo_nlu_operations_pb.CancelOperationRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	cancelOperation(
		request: ondewo_nlu_operations_pb.CancelOperationRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
}

export class OperationsClient extends grpc.Client implements IOperationsClient {
	constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
	public listOperations(
		request: ondewo_nlu_operations_pb.ListOperationsRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.ListOperationsResponse) => void
	): grpc.ClientUnaryCall;
	public listOperations(
		request: ondewo_nlu_operations_pb.ListOperationsRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.ListOperationsResponse) => void
	): grpc.ClientUnaryCall;
	public listOperations(
		request: ondewo_nlu_operations_pb.ListOperationsRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.ListOperationsResponse) => void
	): grpc.ClientUnaryCall;
	public getOperation(
		request: ondewo_nlu_operations_pb.GetOperationRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	public getOperation(
		request: ondewo_nlu_operations_pb.GetOperationRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	public getOperation(
		request: ondewo_nlu_operations_pb.GetOperationRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void
	): grpc.ClientUnaryCall;
	public deleteOperation(
		request: ondewo_nlu_operations_pb.DeleteOperationRequest,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	public deleteOperation(
		request: ondewo_nlu_operations_pb.DeleteOperationRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	public deleteOperation(
		request: ondewo_nlu_operations_pb.DeleteOperationRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	public cancelOperation(
		request: ondewo_nlu_operations_pb.CancelOperationRequest,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	public cancelOperation(
		request: ondewo_nlu_operations_pb.CancelOperationRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	public cancelOperation(
		request: ondewo_nlu_operations_pb.CancelOperationRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
}
