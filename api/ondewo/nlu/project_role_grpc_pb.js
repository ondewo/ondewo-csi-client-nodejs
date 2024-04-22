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
var ondewo_nlu_project_role_pb = require('../../ondewo/nlu/project_role_pb.js');
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_protobuf_Empty(arg) {
	if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
		throw new Error('Expected argument of type google.protobuf.Empty');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
	return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CreateProjectRoleRequest(arg) {
	if (!(arg instanceof ondewo_nlu_project_role_pb.CreateProjectRoleRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.CreateProjectRoleRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CreateProjectRoleRequest(buffer_arg) {
	return ondewo_nlu_project_role_pb.CreateProjectRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DeleteProjectRoleRequest(arg) {
	if (!(arg instanceof ondewo_nlu_project_role_pb.DeleteProjectRoleRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.DeleteProjectRoleRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteProjectRoleRequest(buffer_arg) {
	return ondewo_nlu_project_role_pb.DeleteProjectRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetProjectRoleRequest(arg) {
	if (!(arg instanceof ondewo_nlu_project_role_pb.GetProjectRoleRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.GetProjectRoleRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetProjectRoleRequest(buffer_arg) {
	return ondewo_nlu_project_role_pb.GetProjectRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListProjectRolesRequest(arg) {
	if (!(arg instanceof ondewo_nlu_project_role_pb.ListProjectRolesRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.ListProjectRolesRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListProjectRolesRequest(buffer_arg) {
	return ondewo_nlu_project_role_pb.ListProjectRolesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListProjectRolesResponse(arg) {
	if (!(arg instanceof ondewo_nlu_project_role_pb.ListProjectRolesResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.ListProjectRolesResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListProjectRolesResponse(buffer_arg) {
	return ondewo_nlu_project_role_pb.ListProjectRolesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ProjectRole(arg) {
	if (!(arg instanceof ondewo_nlu_project_role_pb.ProjectRole)) {
		throw new Error('Expected argument of type ondewo.nlu.ProjectRole');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ProjectRole(buffer_arg) {
	return ondewo_nlu_project_role_pb.ProjectRole.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_UpdateProjectRoleRequest(arg) {
	if (!(arg instanceof ondewo_nlu_project_role_pb.UpdateProjectRoleRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.UpdateProjectRoleRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_UpdateProjectRoleRequest(buffer_arg) {
	return ondewo_nlu_project_role_pb.UpdateProjectRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

// Project roles
var ProjectRolesService = (exports.ProjectRolesService = {
	// Creates a project role by creating the knowledge base master
	createProjectRole: {
		path: '/ondewo.nlu.ProjectRoles/CreateProjectRole',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_project_role_pb.CreateProjectRoleRequest,
		responseType: ondewo_nlu_project_role_pb.ProjectRole,
		requestSerialize: serialize_ondewo_nlu_CreateProjectRoleRequest,
		requestDeserialize: deserialize_ondewo_nlu_CreateProjectRoleRequest,
		responseSerialize: serialize_ondewo_nlu_ProjectRole,
		responseDeserialize: deserialize_ondewo_nlu_ProjectRole
	},
	// Creates a project role by getting the knowledge base master
	getProjectRole: {
		path: '/ondewo.nlu.ProjectRoles/GetProjectRole',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_project_role_pb.GetProjectRoleRequest,
		responseType: ondewo_nlu_project_role_pb.ProjectRole,
		requestSerialize: serialize_ondewo_nlu_GetProjectRoleRequest,
		requestDeserialize: deserialize_ondewo_nlu_GetProjectRoleRequest,
		responseSerialize: serialize_ondewo_nlu_ProjectRole,
		responseDeserialize: deserialize_ondewo_nlu_ProjectRole
	},
	// Deletes project role
	deleteProjectRole: {
		path: '/ondewo.nlu.ProjectRoles/DeleteProjectRole',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_project_role_pb.DeleteProjectRoleRequest,
		responseType: google_protobuf_empty_pb.Empty,
		requestSerialize: serialize_ondewo_nlu_DeleteProjectRoleRequest,
		requestDeserialize: deserialize_ondewo_nlu_DeleteProjectRoleRequest,
		responseSerialize: serialize_google_protobuf_Empty,
		responseDeserialize: deserialize_google_protobuf_Empty
	},
	// Updates project role
	updateProjectRole: {
		path: '/ondewo.nlu.ProjectRoles/UpdateProjectRole',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_project_role_pb.UpdateProjectRoleRequest,
		responseType: ondewo_nlu_project_role_pb.ProjectRole,
		requestSerialize: serialize_ondewo_nlu_UpdateProjectRoleRequest,
		requestDeserialize: deserialize_ondewo_nlu_UpdateProjectRoleRequest,
		responseSerialize: serialize_ondewo_nlu_ProjectRole,
		responseDeserialize: deserialize_ondewo_nlu_ProjectRole
	},
	// List project roles
	listProjectRoles: {
		path: '/ondewo.nlu.ProjectRoles/ListProjectRoles',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_project_role_pb.ListProjectRolesRequest,
		responseType: ondewo_nlu_project_role_pb.ListProjectRolesResponse,
		requestSerialize: serialize_ondewo_nlu_ListProjectRolesRequest,
		requestDeserialize: deserialize_ondewo_nlu_ListProjectRolesRequest,
		responseSerialize: serialize_ondewo_nlu_ListProjectRolesResponse,
		responseDeserialize: deserialize_ondewo_nlu_ListProjectRolesResponse
	}
});

exports.ProjectRolesClient = grpc.makeGenericClientConstructor(ProjectRolesService);
