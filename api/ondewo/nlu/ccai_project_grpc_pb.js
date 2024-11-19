// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2020-2023 ONDEWO GmbH
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
var ondewo_nlu_ccai_project_pb = require('../../ondewo/nlu/ccai_project_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var ondewo_nlu_common_pb = require('../../ondewo/nlu/common_pb.js');

function serialize_ondewo_nlu_CcaiProject(arg) {
  if (!(arg instanceof ondewo_nlu_ccai_project_pb.CcaiProject)) {
    throw new Error('Expected argument of type ondewo.nlu.CcaiProject');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CcaiProject(buffer_arg) {
  return ondewo_nlu_ccai_project_pb.CcaiProject.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CcaiService(arg) {
  if (!(arg instanceof ondewo_nlu_ccai_project_pb.CcaiService)) {
    throw new Error('Expected argument of type ondewo.nlu.CcaiService');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CcaiService(buffer_arg) {
  return ondewo_nlu_ccai_project_pb.CcaiService.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CreateCcaiProjectRequest(arg) {
  if (!(arg instanceof ondewo_nlu_ccai_project_pb.CreateCcaiProjectRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.CreateCcaiProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CreateCcaiProjectRequest(buffer_arg) {
  return ondewo_nlu_ccai_project_pb.CreateCcaiProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CreateCcaiProjectResponse(arg) {
  if (!(arg instanceof ondewo_nlu_ccai_project_pb.CreateCcaiProjectResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.CreateCcaiProjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CreateCcaiProjectResponse(buffer_arg) {
  return ondewo_nlu_ccai_project_pb.CreateCcaiProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DeleteCcaiProjectRequest(arg) {
  if (!(arg instanceof ondewo_nlu_ccai_project_pb.DeleteCcaiProjectRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.DeleteCcaiProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteCcaiProjectRequest(buffer_arg) {
  return ondewo_nlu_ccai_project_pb.DeleteCcaiProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DeleteCcaiProjectResponse(arg) {
  if (!(arg instanceof ondewo_nlu_ccai_project_pb.DeleteCcaiProjectResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.DeleteCcaiProjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteCcaiProjectResponse(buffer_arg) {
  return ondewo_nlu_ccai_project_pb.DeleteCcaiProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetCcaiProjectRequest(arg) {
  if (!(arg instanceof ondewo_nlu_ccai_project_pb.GetCcaiProjectRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetCcaiProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetCcaiProjectRequest(buffer_arg) {
  return ondewo_nlu_ccai_project_pb.GetCcaiProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetCcaiServiceRequest(arg) {
  if (!(arg instanceof ondewo_nlu_ccai_project_pb.GetCcaiServiceRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetCcaiServiceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetCcaiServiceRequest(buffer_arg) {
  return ondewo_nlu_ccai_project_pb.GetCcaiServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListCcaiProjectsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_ccai_project_pb.ListCcaiProjectsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListCcaiProjectsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListCcaiProjectsRequest(buffer_arg) {
  return ondewo_nlu_ccai_project_pb.ListCcaiProjectsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListCcaiProjectsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_ccai_project_pb.ListCcaiProjectsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListCcaiProjectsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListCcaiProjectsResponse(buffer_arg) {
  return ondewo_nlu_ccai_project_pb.ListCcaiProjectsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_UpdateCcaiProjectRequest(arg) {
  if (!(arg instanceof ondewo_nlu_ccai_project_pb.UpdateCcaiProjectRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.UpdateCcaiProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_UpdateCcaiProjectRequest(buffer_arg) {
  return ondewo_nlu_ccai_project_pb.UpdateCcaiProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_UpdateCcaiProjectResponse(arg) {
  if (!(arg instanceof ondewo_nlu_ccai_project_pb.UpdateCcaiProjectResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.UpdateCcaiProjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_UpdateCcaiProjectResponse(buffer_arg) {
  return ondewo_nlu_ccai_project_pb.UpdateCcaiProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to manage Call Center AI (CCAI service) Projects.
var CcaiProjectsService = exports.CcaiProjectsService = {
  // Retrieves information about a specific CCAI service project.
getCcaiProject: {
    path: '/ondewo.nlu.CcaiProjects/GetCcaiProject',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_ccai_project_pb.GetCcaiProjectRequest,
    responseType: ondewo_nlu_ccai_project_pb.CcaiProject,
    requestSerialize: serialize_ondewo_nlu_GetCcaiProjectRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetCcaiProjectRequest,
    responseSerialize: serialize_ondewo_nlu_CcaiProject,
    responseDeserialize: deserialize_ondewo_nlu_CcaiProject,
  },
  // Creates a new CCAI service project based on the provided request.
createCcaiProject: {
    path: '/ondewo.nlu.CcaiProjects/CreateCcaiProject',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_ccai_project_pb.CreateCcaiProjectRequest,
    responseType: ondewo_nlu_ccai_project_pb.CreateCcaiProjectResponse,
    requestSerialize: serialize_ondewo_nlu_CreateCcaiProjectRequest,
    requestDeserialize: deserialize_ondewo_nlu_CreateCcaiProjectRequest,
    responseSerialize: serialize_ondewo_nlu_CreateCcaiProjectResponse,
    responseDeserialize: deserialize_ondewo_nlu_CreateCcaiProjectResponse,
  },
  // Deletes a CCAI service project identified by the provided request.
deleteCcaiProject: {
    path: '/ondewo.nlu.CcaiProjects/DeleteCcaiProject',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_ccai_project_pb.DeleteCcaiProjectRequest,
    responseType: ondewo_nlu_ccai_project_pb.DeleteCcaiProjectResponse,
    requestSerialize: serialize_ondewo_nlu_DeleteCcaiProjectRequest,
    requestDeserialize: deserialize_ondewo_nlu_DeleteCcaiProjectRequest,
    responseSerialize: serialize_ondewo_nlu_DeleteCcaiProjectResponse,
    responseDeserialize: deserialize_ondewo_nlu_DeleteCcaiProjectResponse,
  },
  // Lists all CCAI service projects based on the provided request.
listCcaiProjects: {
    path: '/ondewo.nlu.CcaiProjects/ListCcaiProjects',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_ccai_project_pb.ListCcaiProjectsRequest,
    responseType: ondewo_nlu_ccai_project_pb.ListCcaiProjectsResponse,
    requestSerialize: serialize_ondewo_nlu_ListCcaiProjectsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListCcaiProjectsRequest,
    responseSerialize: serialize_ondewo_nlu_ListCcaiProjectsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListCcaiProjectsResponse,
  },
  // Updates the information of an existing CCAI service project.
updateCcaiProject: {
    path: '/ondewo.nlu.CcaiProjects/UpdateCcaiProject',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_ccai_project_pb.UpdateCcaiProjectRequest,
    responseType: ondewo_nlu_ccai_project_pb.UpdateCcaiProjectResponse,
    requestSerialize: serialize_ondewo_nlu_UpdateCcaiProjectRequest,
    requestDeserialize: deserialize_ondewo_nlu_UpdateCcaiProjectRequest,
    responseSerialize: serialize_ondewo_nlu_UpdateCcaiProjectResponse,
    responseDeserialize: deserialize_ondewo_nlu_UpdateCcaiProjectResponse,
  },
  // Retrieves information about a specific CCAI service.
getCcaiService: {
    path: '/ondewo.nlu.CcaiProjects/GetCcaiService',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_ccai_project_pb.GetCcaiServiceRequest,
    responseType: ondewo_nlu_ccai_project_pb.CcaiService,
    requestSerialize: serialize_ondewo_nlu_GetCcaiServiceRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetCcaiServiceRequest,
    responseSerialize: serialize_ondewo_nlu_CcaiService,
    responseDeserialize: deserialize_ondewo_nlu_CcaiService,
  },
};

exports.CcaiProjectsClient = grpc.makeGenericClientConstructor(CcaiProjectsService);
