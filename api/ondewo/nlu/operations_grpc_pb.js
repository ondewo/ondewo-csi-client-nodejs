// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2022 ONDEWO GmbH
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
'use strict';
var grpc = require('@grpc/grpc-js');
var ondewo_nlu_operations_pb = require('../../ondewo/nlu/operations_pb.js');
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_rpc_status_pb = require('../../google/rpc/status_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var ondewo_nlu_operation_metadata_pb = require('../../ondewo/nlu/operation_metadata_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CancelOperationRequest(arg) {
  if (!(arg instanceof ondewo_nlu_operations_pb.CancelOperationRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.CancelOperationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CancelOperationRequest(buffer_arg) {
  return ondewo_nlu_operations_pb.CancelOperationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DeleteOperationRequest(arg) {
  if (!(arg instanceof ondewo_nlu_operations_pb.DeleteOperationRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.DeleteOperationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteOperationRequest(buffer_arg) {
  return ondewo_nlu_operations_pb.DeleteOperationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetOperationRequest(arg) {
  if (!(arg instanceof ondewo_nlu_operations_pb.GetOperationRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetOperationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetOperationRequest(buffer_arg) {
  return ondewo_nlu_operations_pb.GetOperationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListOperationsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_operations_pb.ListOperationsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListOperationsRequest(buffer_arg) {
  return ondewo_nlu_operations_pb.ListOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListOperationsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_operations_pb.ListOperationsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListOperationsResponse(buffer_arg) {
  return ondewo_nlu_operations_pb.ListOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_Operation(arg) {
  if (!(arg instanceof ondewo_nlu_operations_pb.Operation)) {
    throw new Error('Expected argument of type ondewo.nlu.Operation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_Operation(buffer_arg) {
  return ondewo_nlu_operations_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
}


// Manages long-running operations with an API service.
//
// When an API method normally takes long time to complete, it can be designed
// to return [Operation][ondewo.nlu.Operation] to the client, and the client can use this
// interface to receive the real response asynchronously by polling the
// operation resource, or pass the operation resource to another API (such as
// Google Cloud Pub/Sub API) to receive the response.  Any API service that
// returns long-running operations should implement the `Operations` interface
// so developers can have a consistent client experience.
var OperationsService = exports.OperationsService = {
  // Lists operations that match the specified filter in the request. If the
// server doesn't support this method, it returns `UNIMPLEMENTED`.
//
// NOTE: the `name` binding below allows API services to override the binding
// to use different resource name schemes, such as `users/*/operations`.
listOperations: {
    path: '/ondewo.nlu.Operations/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_operations_pb.ListOperationsRequest,
    responseType: ondewo_nlu_operations_pb.ListOperationsResponse,
    requestSerialize: serialize_ondewo_nlu_ListOperationsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListOperationsRequest,
    responseSerialize: serialize_ondewo_nlu_ListOperationsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListOperationsResponse,
  },
  // Gets the latest state of a long-running operation.  Clients can use this
// method to poll the operation result at intervals as recommended by the API
// service.
getOperation: {
    path: '/ondewo.nlu.Operations/GetOperation',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_operations_pb.GetOperationRequest,
    responseType: ondewo_nlu_operations_pb.Operation,
    requestSerialize: serialize_ondewo_nlu_GetOperationRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetOperationRequest,
    responseSerialize: serialize_ondewo_nlu_Operation,
    responseDeserialize: deserialize_ondewo_nlu_Operation,
  },
  // Deletes a long-running operation. This method indicates that the client is
// no longer interested in the operation result. It does not cancel the
// operation. If the server doesn't support this method, it returns
// `google.rpc.Code.UNIMPLEMENTED`.
deleteOperation: {
    path: '/ondewo.nlu.Operations/DeleteOperation',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_operations_pb.DeleteOperationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_nlu_DeleteOperationRequest,
    requestDeserialize: deserialize_ondewo_nlu_DeleteOperationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Starts asynchronous cancellation on a long-running operation.  The server
// makes a best effort to cancel the operation, but success is not
// guaranteed.  If the server doesn't support this method, it returns
// `google.rpc.Code.UNIMPLEMENTED`.  Clients can use
// [Operations.GetOperation][ondewo.nlu.Operations.GetOperation] or
// other methods to check whether the cancellation succeeded or whether the
// operation completed despite cancellation. On successful cancellation,
// the operation is not deleted; instead, it becomes an operation with
// an [Operation.error][ondewo.nlu.Operation.error] value with a [google.rpc.Status.code][google.rpc.Status.code] of 1,
// corresponding to `Code.CANCELLED`.
cancelOperation: {
    path: '/ondewo.nlu.Operations/CancelOperation',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_operations_pb.CancelOperationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_nlu_CancelOperationRequest,
    requestDeserialize: deserialize_ondewo_nlu_CancelOperationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.OperationsClient = grpc.makeGenericClientConstructor(OperationsService);
