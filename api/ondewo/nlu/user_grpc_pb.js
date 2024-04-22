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
var ondewo_nlu_user_pb = require('../../ondewo/nlu/user_pb.js');
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var ondewo_nlu_project_role_pb = require('../../ondewo/nlu/project_role_pb.js');
var ondewo_nlu_common_pb = require('../../ondewo/nlu/common_pb.js');

function serialize_google_protobuf_Empty(arg) {
	if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
		throw new Error('Expected argument of type google.protobuf.Empty');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
	return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CreateServerRoleRequest(arg) {
	if (!(arg instanceof ondewo_nlu_user_pb.CreateServerRoleRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.CreateServerRoleRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CreateServerRoleRequest(buffer_arg) {
	return ondewo_nlu_user_pb.CreateServerRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CreateUserRequest(arg) {
	if (!(arg instanceof ondewo_nlu_user_pb.CreateUserRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.CreateUserRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CreateUserRequest(buffer_arg) {
	return ondewo_nlu_user_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DeleteAllUserPreferencesRequest(arg) {
	if (!(arg instanceof ondewo_nlu_user_pb.DeleteAllUserPreferencesRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.DeleteAllUserPreferencesRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteAllUserPreferencesRequest(buffer_arg) {
	return ondewo_nlu_user_pb.DeleteAllUserPreferencesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DeleteServerRoleRequest(arg) {
	if (!(arg instanceof ondewo_nlu_user_pb.DeleteServerRoleRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.DeleteServerRoleRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteServerRoleRequest(buffer_arg) {
	return ondewo_nlu_user_pb.DeleteServerRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DeleteUserPreferencesRequest(arg) {
	if (!(arg instanceof ondewo_nlu_user_pb.DeleteUserPreferencesRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.DeleteUserPreferencesRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteUserPreferencesRequest(buffer_arg) {
	return ondewo_nlu_user_pb.DeleteUserPreferencesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DeleteUserPreferencesResponse(arg) {
	if (!(arg instanceof ondewo_nlu_user_pb.DeleteUserPreferencesResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.DeleteUserPreferencesResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteUserPreferencesResponse(buffer_arg) {
	return ondewo_nlu_user_pb.DeleteUserPreferencesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetServerRoleRequest(arg) {
	if (!(arg instanceof ondewo_nlu_user_pb.GetServerRoleRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.GetServerRoleRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetServerRoleRequest(buffer_arg) {
	return ondewo_nlu_user_pb.GetServerRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetUserPreferencesRequest(arg) {
	if (!(arg instanceof ondewo_nlu_user_pb.GetUserPreferencesRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.GetUserPreferencesRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetUserPreferencesRequest(buffer_arg) {
	return ondewo_nlu_user_pb.GetUserPreferencesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetUserPreferencesResponse(arg) {
	if (!(arg instanceof ondewo_nlu_user_pb.GetUserPreferencesResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.GetUserPreferencesResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetUserPreferencesResponse(buffer_arg) {
	return ondewo_nlu_user_pb.GetUserPreferencesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetUserRequest(arg) {
	if (!(arg instanceof ondewo_nlu_user_pb.GetUserRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.GetUserRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetUserRequest(buffer_arg) {
	return ondewo_nlu_user_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListNotificationsRequest(arg) {
	if (!(arg instanceof ondewo_nlu_common_pb.ListNotificationsRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.ListNotificationsRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListNotificationsRequest(buffer_arg) {
	return ondewo_nlu_common_pb.ListNotificationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListNotificationsResponse(arg) {
	if (!(arg instanceof ondewo_nlu_common_pb.ListNotificationsResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.ListNotificationsResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListNotificationsResponse(buffer_arg) {
	return ondewo_nlu_common_pb.ListNotificationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListServerPermissionsRequest(arg) {
	if (!(arg instanceof ondewo_nlu_user_pb.ListServerPermissionsRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.ListServerPermissionsRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListServerPermissionsRequest(buffer_arg) {
	return ondewo_nlu_user_pb.ListServerPermissionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListServerPermissionsResponse(arg) {
	if (!(arg instanceof ondewo_nlu_user_pb.ListServerPermissionsResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.ListServerPermissionsResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListServerPermissionsResponse(buffer_arg) {
	return ondewo_nlu_user_pb.ListServerPermissionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListServerRolesRequest(arg) {
	if (!(arg instanceof ondewo_nlu_user_pb.ListServerRolesRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.ListServerRolesRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListServerRolesRequest(buffer_arg) {
	return ondewo_nlu_user_pb.ListServerRolesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListServerRolesResponse(arg) {
	if (!(arg instanceof ondewo_nlu_user_pb.ListServerRolesResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.ListServerRolesResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListServerRolesResponse(buffer_arg) {
	return ondewo_nlu_user_pb.ListServerRolesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListUserInfosResponse(arg) {
	if (!(arg instanceof ondewo_nlu_user_pb.ListUserInfosResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.ListUserInfosResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListUserInfosResponse(buffer_arg) {
	return ondewo_nlu_user_pb.ListUserInfosResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListUsersRequest(arg) {
	if (!(arg instanceof ondewo_nlu_user_pb.ListUsersRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.ListUsersRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListUsersRequest(buffer_arg) {
	return ondewo_nlu_user_pb.ListUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListUsersResponse(arg) {
	if (!(arg instanceof ondewo_nlu_user_pb.ListUsersResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.ListUsersResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListUsersResponse(buffer_arg) {
	return ondewo_nlu_user_pb.ListUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_LoginRequest(arg) {
	if (!(arg instanceof ondewo_nlu_user_pb.LoginRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.LoginRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_LoginRequest(buffer_arg) {
	return ondewo_nlu_user_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_LoginResponse(arg) {
	if (!(arg instanceof ondewo_nlu_user_pb.LoginResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.LoginResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_LoginResponse(buffer_arg) {
	return ondewo_nlu_user_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ServerRole(arg) {
	if (!(arg instanceof ondewo_nlu_user_pb.ServerRole)) {
		throw new Error('Expected argument of type ondewo.nlu.ServerRole');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ServerRole(buffer_arg) {
	return ondewo_nlu_user_pb.ServerRole.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_SetNotificationsFlaggedStatusRequest(arg) {
	if (!(arg instanceof ondewo_nlu_common_pb.SetNotificationsFlaggedStatusRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.SetNotificationsFlaggedStatusRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_SetNotificationsFlaggedStatusRequest(buffer_arg) {
	return ondewo_nlu_common_pb.SetNotificationsFlaggedStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_SetNotificationsReadStatusRequest(arg) {
	if (!(arg instanceof ondewo_nlu_common_pb.SetNotificationsReadStatusRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.SetNotificationsReadStatusRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_SetNotificationsReadStatusRequest(buffer_arg) {
	return ondewo_nlu_common_pb.SetNotificationsReadStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_SetUserPreferencesRequest(arg) {
	if (!(arg instanceof ondewo_nlu_user_pb.SetUserPreferencesRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.SetUserPreferencesRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_SetUserPreferencesRequest(buffer_arg) {
	return ondewo_nlu_user_pb.SetUserPreferencesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_SetUserPreferencesResponse(arg) {
	if (!(arg instanceof ondewo_nlu_user_pb.SetUserPreferencesResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.SetUserPreferencesResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_SetUserPreferencesResponse(buffer_arg) {
	return ondewo_nlu_user_pb.SetUserPreferencesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_UpdateServerRoleRequest(arg) {
	if (!(arg instanceof ondewo_nlu_user_pb.UpdateServerRoleRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.UpdateServerRoleRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_UpdateServerRoleRequest(buffer_arg) {
	return ondewo_nlu_user_pb.UpdateServerRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_UpdateUserRequest(arg) {
	if (!(arg instanceof ondewo_nlu_user_pb.UpdateUserRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.UpdateUserRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_UpdateUserRequest(buffer_arg) {
	return ondewo_nlu_user_pb.UpdateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_User(arg) {
	if (!(arg instanceof ondewo_nlu_user_pb.User)) {
		throw new Error('Expected argument of type ondewo.nlu.User');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_User(buffer_arg) {
	return ondewo_nlu_user_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_UserInfo(arg) {
	if (!(arg instanceof ondewo_nlu_user_pb.UserInfo)) {
		throw new Error('Expected argument of type ondewo.nlu.UserInfo');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_UserInfo(buffer_arg) {
	return ondewo_nlu_user_pb.UserInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

// gRPC service for managing users and server roles.
var UsersService = (exports.UsersService = {
	// Creates a user.
	createUser: {
		path: '/ondewo.nlu.Users/CreateUser',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_user_pb.CreateUserRequest,
		responseType: ondewo_nlu_user_pb.User,
		requestSerialize: serialize_ondewo_nlu_CreateUserRequest,
		requestDeserialize: deserialize_ondewo_nlu_CreateUserRequest,
		responseSerialize: serialize_ondewo_nlu_User,
		responseDeserialize: deserialize_ondewo_nlu_User
	},
	// Retrieves a user by identifier.
	getUser: {
		path: '/ondewo.nlu.Users/GetUser',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_user_pb.GetUserRequest,
		responseType: ondewo_nlu_user_pb.User,
		requestSerialize: serialize_ondewo_nlu_GetUserRequest,
		requestDeserialize: deserialize_ondewo_nlu_GetUserRequest,
		responseSerialize: serialize_ondewo_nlu_User,
		responseDeserialize: deserialize_ondewo_nlu_User
	},
	// Retrieves user information by identifier.
	getUserInfo: {
		path: '/ondewo.nlu.Users/GetUserInfo',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_user_pb.GetUserRequest,
		responseType: ondewo_nlu_user_pb.UserInfo,
		requestSerialize: serialize_ondewo_nlu_GetUserRequest,
		requestDeserialize: deserialize_ondewo_nlu_GetUserRequest,
		responseSerialize: serialize_ondewo_nlu_UserInfo,
		responseDeserialize: deserialize_ondewo_nlu_UserInfo
	},
	// Deletes a user by identifier.
	deleteUser: {
		path: '/ondewo.nlu.Users/DeleteUser',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_user_pb.GetUserRequest,
		responseType: google_protobuf_empty_pb.Empty,
		requestSerialize: serialize_ondewo_nlu_GetUserRequest,
		requestDeserialize: deserialize_ondewo_nlu_GetUserRequest,
		responseSerialize: serialize_google_protobuf_Empty,
		responseDeserialize: deserialize_google_protobuf_Empty
	},
	// Updates a user.
	updateUser: {
		path: '/ondewo.nlu.Users/UpdateUser',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_user_pb.UpdateUserRequest,
		responseType: ondewo_nlu_user_pb.User,
		requestSerialize: serialize_ondewo_nlu_UpdateUserRequest,
		requestDeserialize: deserialize_ondewo_nlu_UpdateUserRequest,
		responseSerialize: serialize_ondewo_nlu_User,
		responseDeserialize: deserialize_ondewo_nlu_User
	},
	// Lists users.
	listUsers: {
		path: '/ondewo.nlu.Users/ListUsers',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_user_pb.ListUsersRequest,
		responseType: ondewo_nlu_user_pb.ListUsersResponse,
		requestSerialize: serialize_ondewo_nlu_ListUsersRequest,
		requestDeserialize: deserialize_ondewo_nlu_ListUsersRequest,
		responseSerialize: serialize_ondewo_nlu_ListUsersResponse,
		responseDeserialize: deserialize_ondewo_nlu_ListUsersResponse
	},
	// Lists user information.
	listUserInfos: {
		path: '/ondewo.nlu.Users/ListUserInfos',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_user_pb.ListUsersRequest,
		responseType: ondewo_nlu_user_pb.ListUserInfosResponse,
		requestSerialize: serialize_ondewo_nlu_ListUsersRequest,
		requestDeserialize: deserialize_ondewo_nlu_ListUsersRequest,
		responseSerialize: serialize_ondewo_nlu_ListUserInfosResponse,
		responseDeserialize: deserialize_ondewo_nlu_ListUserInfosResponse
	},
	// Creates a server role.
	createServerRole: {
		path: '/ondewo.nlu.Users/CreateServerRole',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_user_pb.CreateServerRoleRequest,
		responseType: ondewo_nlu_user_pb.ServerRole,
		requestSerialize: serialize_ondewo_nlu_CreateServerRoleRequest,
		requestDeserialize: deserialize_ondewo_nlu_CreateServerRoleRequest,
		responseSerialize: serialize_ondewo_nlu_ServerRole,
		responseDeserialize: deserialize_ondewo_nlu_ServerRole
	},
	// Retrieves a server role by ID.
	getServerRole: {
		path: '/ondewo.nlu.Users/GetServerRole',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_user_pb.GetServerRoleRequest,
		responseType: ondewo_nlu_user_pb.ServerRole,
		requestSerialize: serialize_ondewo_nlu_GetServerRoleRequest,
		requestDeserialize: deserialize_ondewo_nlu_GetServerRoleRequest,
		responseSerialize: serialize_ondewo_nlu_ServerRole,
		responseDeserialize: deserialize_ondewo_nlu_ServerRole
	},
	// Deletes a server role by ID.
	deleteServerRole: {
		path: '/ondewo.nlu.Users/DeleteServerRole',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_user_pb.DeleteServerRoleRequest,
		responseType: google_protobuf_empty_pb.Empty,
		requestSerialize: serialize_ondewo_nlu_DeleteServerRoleRequest,
		requestDeserialize: deserialize_ondewo_nlu_DeleteServerRoleRequest,
		responseSerialize: serialize_google_protobuf_Empty,
		responseDeserialize: deserialize_google_protobuf_Empty
	},
	// Updates a server role.
	updateServerRole: {
		path: '/ondewo.nlu.Users/UpdateServerRole',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_user_pb.UpdateServerRoleRequest,
		responseType: ondewo_nlu_user_pb.ServerRole,
		requestSerialize: serialize_ondewo_nlu_UpdateServerRoleRequest,
		requestDeserialize: deserialize_ondewo_nlu_UpdateServerRoleRequest,
		responseSerialize: serialize_ondewo_nlu_ServerRole,
		responseDeserialize: deserialize_ondewo_nlu_ServerRole
	},
	// Lists server roles.
	listServerRoles: {
		path: '/ondewo.nlu.Users/ListServerRoles',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_user_pb.ListServerRolesRequest,
		responseType: ondewo_nlu_user_pb.ListServerRolesResponse,
		requestSerialize: serialize_ondewo_nlu_ListServerRolesRequest,
		requestDeserialize: deserialize_ondewo_nlu_ListServerRolesRequest,
		responseSerialize: serialize_ondewo_nlu_ListServerRolesResponse,
		responseDeserialize: deserialize_ondewo_nlu_ListServerRolesResponse
	},
	// Lists server permissions.
	listServerPermissions: {
		path: '/ondewo.nlu.Users/ListServerPermissions',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_user_pb.ListServerPermissionsRequest,
		responseType: ondewo_nlu_user_pb.ListServerPermissionsResponse,
		requestSerialize: serialize_ondewo_nlu_ListServerPermissionsRequest,
		requestDeserialize: deserialize_ondewo_nlu_ListServerPermissionsRequest,
		responseSerialize: serialize_ondewo_nlu_ListServerPermissionsResponse,
		responseDeserialize: deserialize_ondewo_nlu_ListServerPermissionsResponse
	},
	// Requests login.
	login: {
		path: '/ondewo.nlu.Users/Login',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_user_pb.LoginRequest,
		responseType: ondewo_nlu_user_pb.LoginResponse,
		requestSerialize: serialize_ondewo_nlu_LoginRequest,
		requestDeserialize: deserialize_ondewo_nlu_LoginRequest,
		responseSerialize: serialize_ondewo_nlu_LoginResponse,
		responseDeserialize: deserialize_ondewo_nlu_LoginResponse
	},
	// Checks login.
	checkLogin: {
		path: '/ondewo.nlu.Users/CheckLogin',
		requestStream: false,
		responseStream: false,
		requestType: google_protobuf_empty_pb.Empty,
		responseType: google_protobuf_empty_pb.Empty,
		requestSerialize: serialize_google_protobuf_Empty,
		requestDeserialize: deserialize_google_protobuf_Empty,
		responseSerialize: serialize_google_protobuf_Empty,
		responseDeserialize: deserialize_google_protobuf_Empty
	},
	// Lists notifications based on specified filters.
	listNotifications: {
		path: '/ondewo.nlu.Users/ListNotifications',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_common_pb.ListNotificationsRequest,
		responseType: ondewo_nlu_common_pb.ListNotificationsResponse,
		requestSerialize: serialize_ondewo_nlu_ListNotificationsRequest,
		requestDeserialize: deserialize_ondewo_nlu_ListNotificationsRequest,
		responseSerialize: serialize_ondewo_nlu_ListNotificationsResponse,
		responseDeserialize: deserialize_ondewo_nlu_ListNotificationsResponse
	},
	// Sets the flagged status for multiple notifications.
	setNotificationsFlaggedStatus: {
		path: '/ondewo.nlu.Users/SetNotificationsFlaggedStatus',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_common_pb.SetNotificationsFlaggedStatusRequest,
		responseType: ondewo_nlu_common_pb.ListNotificationsResponse,
		requestSerialize: serialize_ondewo_nlu_SetNotificationsFlaggedStatusRequest,
		requestDeserialize: deserialize_ondewo_nlu_SetNotificationsFlaggedStatusRequest,
		responseSerialize: serialize_ondewo_nlu_ListNotificationsResponse,
		responseDeserialize: deserialize_ondewo_nlu_ListNotificationsResponse
	},
	// Sets the read status for multiple notifications.
	setNotificationsReadStatus: {
		path: '/ondewo.nlu.Users/SetNotificationsReadStatus',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_common_pb.SetNotificationsReadStatusRequest,
		responseType: ondewo_nlu_common_pb.ListNotificationsResponse,
		requestSerialize: serialize_ondewo_nlu_SetNotificationsReadStatusRequest,
		requestDeserialize: deserialize_ondewo_nlu_SetNotificationsReadStatusRequest,
		responseSerialize: serialize_ondewo_nlu_ListNotificationsResponse,
		responseDeserialize: deserialize_ondewo_nlu_ListNotificationsResponse
	},
	// Retrieves user preferences based on the provided request.
	getUserPreferences: {
		path: '/ondewo.nlu.Users/GetUserPreferences',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_user_pb.GetUserPreferencesRequest,
		responseType: ondewo_nlu_user_pb.GetUserPreferencesResponse,
		requestSerialize: serialize_ondewo_nlu_GetUserPreferencesRequest,
		requestDeserialize: deserialize_ondewo_nlu_GetUserPreferencesRequest,
		responseSerialize: serialize_ondewo_nlu_GetUserPreferencesResponse,
		responseDeserialize: deserialize_ondewo_nlu_GetUserPreferencesResponse
	},
	// Sets or updates user preferences based on the provided request.
	setUserPreferences: {
		path: '/ondewo.nlu.Users/SetUserPreferences',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_user_pb.SetUserPreferencesRequest,
		responseType: ondewo_nlu_user_pb.SetUserPreferencesResponse,
		requestSerialize: serialize_ondewo_nlu_SetUserPreferencesRequest,
		requestDeserialize: deserialize_ondewo_nlu_SetUserPreferencesRequest,
		responseSerialize: serialize_ondewo_nlu_SetUserPreferencesResponse,
		responseDeserialize: deserialize_ondewo_nlu_SetUserPreferencesResponse
	},
	// Deletes specific user preferences based on the provided request.
	deleteUserPreferences: {
		path: '/ondewo.nlu.Users/DeleteUserPreferences',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_user_pb.DeleteUserPreferencesRequest,
		responseType: ondewo_nlu_user_pb.DeleteUserPreferencesResponse,
		requestSerialize: serialize_ondewo_nlu_DeleteUserPreferencesRequest,
		requestDeserialize: deserialize_ondewo_nlu_DeleteUserPreferencesRequest,
		responseSerialize: serialize_ondewo_nlu_DeleteUserPreferencesResponse,
		responseDeserialize: deserialize_ondewo_nlu_DeleteUserPreferencesResponse
	},
	// Deletes all user preferences for a specific user, optionally filtered by a substring.
	deleteAllUserPreferences: {
		path: '/ondewo.nlu.Users/DeleteAllUserPreferences',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_user_pb.DeleteAllUserPreferencesRequest,
		responseType: ondewo_nlu_user_pb.DeleteUserPreferencesResponse,
		requestSerialize: serialize_ondewo_nlu_DeleteAllUserPreferencesRequest,
		requestDeserialize: deserialize_ondewo_nlu_DeleteAllUserPreferencesRequest,
		responseSerialize: serialize_ondewo_nlu_DeleteUserPreferencesResponse,
		responseDeserialize: deserialize_ondewo_nlu_DeleteUserPreferencesResponse
	}
});

exports.UsersClient = grpc.makeGenericClientConstructor(UsersService);
