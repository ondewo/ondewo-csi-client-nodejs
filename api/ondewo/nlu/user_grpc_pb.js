// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2021 ONDEWO GmbH
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
var ondewo_nlu_project_role_pb = require('../../ondewo/nlu/project_role_pb.js');

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

function serialize_ondewo_nlu_DeleteServerRoleRequest(arg) {
  if (!(arg instanceof ondewo_nlu_user_pb.DeleteServerRoleRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.DeleteServerRoleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteServerRoleRequest(buffer_arg) {
  return ondewo_nlu_user_pb.DeleteServerRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_ondewo_nlu_GetUserRequest(arg) {
  if (!(arg instanceof ondewo_nlu_user_pb.GetUserRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetUserRequest(buffer_arg) {
  return ondewo_nlu_user_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


var UsersService = exports.UsersService = {
  createUser: {
    path: '/ondewo.nlu.Users/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_user_pb.CreateUserRequest,
    responseType: ondewo_nlu_user_pb.User,
    requestSerialize: serialize_ondewo_nlu_CreateUserRequest,
    requestDeserialize: deserialize_ondewo_nlu_CreateUserRequest,
    responseSerialize: serialize_ondewo_nlu_User,
    responseDeserialize: deserialize_ondewo_nlu_User,
  },
  getUser: {
    path: '/ondewo.nlu.Users/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_user_pb.GetUserRequest,
    responseType: ondewo_nlu_user_pb.User,
    requestSerialize: serialize_ondewo_nlu_GetUserRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetUserRequest,
    responseSerialize: serialize_ondewo_nlu_User,
    responseDeserialize: deserialize_ondewo_nlu_User,
  },
  getUserInfo: {
    path: '/ondewo.nlu.Users/GetUserInfo',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_user_pb.GetUserRequest,
    responseType: ondewo_nlu_user_pb.UserInfo,
    requestSerialize: serialize_ondewo_nlu_GetUserRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetUserRequest,
    responseSerialize: serialize_ondewo_nlu_UserInfo,
    responseDeserialize: deserialize_ondewo_nlu_UserInfo,
  },
  deleteUser: {
    path: '/ondewo.nlu.Users/DeleteUser',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_user_pb.GetUserRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_nlu_GetUserRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetUserRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  updateUser: {
    path: '/ondewo.nlu.Users/UpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_user_pb.UpdateUserRequest,
    responseType: ondewo_nlu_user_pb.User,
    requestSerialize: serialize_ondewo_nlu_UpdateUserRequest,
    requestDeserialize: deserialize_ondewo_nlu_UpdateUserRequest,
    responseSerialize: serialize_ondewo_nlu_User,
    responseDeserialize: deserialize_ondewo_nlu_User,
  },
  listUsers: {
    path: '/ondewo.nlu.Users/ListUsers',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_user_pb.ListUsersRequest,
    responseType: ondewo_nlu_user_pb.ListUsersResponse,
    requestSerialize: serialize_ondewo_nlu_ListUsersRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListUsersRequest,
    responseSerialize: serialize_ondewo_nlu_ListUsersResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListUsersResponse,
  },
  listUserInfos: {
    path: '/ondewo.nlu.Users/ListUserInfos',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_user_pb.ListUsersRequest,
    responseType: ondewo_nlu_user_pb.ListUserInfosResponse,
    requestSerialize: serialize_ondewo_nlu_ListUsersRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListUsersRequest,
    responseSerialize: serialize_ondewo_nlu_ListUserInfosResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListUserInfosResponse,
  },
  createServerRole: {
    path: '/ondewo.nlu.Users/CreateServerRole',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_user_pb.CreateServerRoleRequest,
    responseType: ondewo_nlu_user_pb.ServerRole,
    requestSerialize: serialize_ondewo_nlu_CreateServerRoleRequest,
    requestDeserialize: deserialize_ondewo_nlu_CreateServerRoleRequest,
    responseSerialize: serialize_ondewo_nlu_ServerRole,
    responseDeserialize: deserialize_ondewo_nlu_ServerRole,
  },
  getServerRole: {
    path: '/ondewo.nlu.Users/GetServerRole',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_user_pb.GetServerRoleRequest,
    responseType: ondewo_nlu_user_pb.ServerRole,
    requestSerialize: serialize_ondewo_nlu_GetServerRoleRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetServerRoleRequest,
    responseSerialize: serialize_ondewo_nlu_ServerRole,
    responseDeserialize: deserialize_ondewo_nlu_ServerRole,
  },
  deleteServerRole: {
    path: '/ondewo.nlu.Users/DeleteServerRole',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_user_pb.DeleteServerRoleRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_nlu_DeleteServerRoleRequest,
    requestDeserialize: deserialize_ondewo_nlu_DeleteServerRoleRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  updateServerRole: {
    path: '/ondewo.nlu.Users/UpdateServerRole',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_user_pb.UpdateServerRoleRequest,
    responseType: ondewo_nlu_user_pb.ServerRole,
    requestSerialize: serialize_ondewo_nlu_UpdateServerRoleRequest,
    requestDeserialize: deserialize_ondewo_nlu_UpdateServerRoleRequest,
    responseSerialize: serialize_ondewo_nlu_ServerRole,
    responseDeserialize: deserialize_ondewo_nlu_ServerRole,
  },
  listServerRoles: {
    path: '/ondewo.nlu.Users/ListServerRoles',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_user_pb.ListServerRolesRequest,
    responseType: ondewo_nlu_user_pb.ListServerRolesResponse,
    requestSerialize: serialize_ondewo_nlu_ListServerRolesRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListServerRolesRequest,
    responseSerialize: serialize_ondewo_nlu_ListServerRolesResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListServerRolesResponse,
  },
  listServerPermissions: {
    path: '/ondewo.nlu.Users/ListServerPermissions',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_user_pb.ListServerPermissionsRequest,
    responseType: ondewo_nlu_user_pb.ListServerPermissionsResponse,
    requestSerialize: serialize_ondewo_nlu_ListServerPermissionsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListServerPermissionsRequest,
    responseSerialize: serialize_ondewo_nlu_ListServerPermissionsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListServerPermissionsResponse,
  },
  login: {
    path: '/ondewo.nlu.Users/Login',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_user_pb.LoginRequest,
    responseType: ondewo_nlu_user_pb.LoginResponse,
    requestSerialize: serialize_ondewo_nlu_LoginRequest,
    requestDeserialize: deserialize_ondewo_nlu_LoginRequest,
    responseSerialize: serialize_ondewo_nlu_LoginResponse,
    responseDeserialize: deserialize_ondewo_nlu_LoginResponse,
  },
  checkLogin: {
    path: '/ondewo.nlu.Users/CheckLogin',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.UsersClient = grpc.makeGenericClientConstructor(UsersService);
