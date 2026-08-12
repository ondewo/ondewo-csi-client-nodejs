// package: ondewo.nlu
// file: ondewo/nlu/user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ondewo_nlu_user_pb from "../../ondewo/nlu/user_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ondewo_nlu_project_role_pb from "../../ondewo/nlu/project_role_pb";
import * as ondewo_nlu_common_pb from "../../ondewo/nlu/common_pb";

interface IUsersService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createUser: IUsersService_ICreateUser;
    getUser: IUsersService_IGetUser;
    getUserInfo: IUsersService_IGetUserInfo;
    deleteUser: IUsersService_IDeleteUser;
    updateUser: IUsersService_IUpdateUser;
    listUsers: IUsersService_IListUsers;
    listUserInfos: IUsersService_IListUserInfos;
    createServerRole: IUsersService_ICreateServerRole;
    getServerRole: IUsersService_IGetServerRole;
    deleteServerRole: IUsersService_IDeleteServerRole;
    updateServerRole: IUsersService_IUpdateServerRole;
    listServerRoles: IUsersService_IListServerRoles;
    listServerPermissions: IUsersService_IListServerPermissions;
    checkLogin: IUsersService_ICheckLogin;
    listNotifications: IUsersService_IListNotifications;
    setNotificationsFlaggedStatus: IUsersService_ISetNotificationsFlaggedStatus;
    setNotificationsReadStatus: IUsersService_ISetNotificationsReadStatus;
    addNotifications: IUsersService_IAddNotifications;
    getNotification: IUsersService_IGetNotification;
    updateNotification: IUsersService_IUpdateNotification;
    deleteNotifications: IUsersService_IDeleteNotifications;
    streamNotifications: IUsersService_IStreamNotifications;
    getUserPreferences: IUsersService_IGetUserPreferences;
    setUserPreferences: IUsersService_ISetUserPreferences;
    deleteUserPreferences: IUsersService_IDeleteUserPreferences;
    deleteAllUserPreferences: IUsersService_IDeleteAllUserPreferences;
}

interface IUsersService_ICreateUser extends grpc.MethodDefinition<ondewo_nlu_user_pb.CreateUserRequest, ondewo_nlu_user_pb.User> {
    path: "/ondewo.nlu.Users/CreateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_user_pb.CreateUserRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_user_pb.CreateUserRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_user_pb.User>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_user_pb.User>;
}
interface IUsersService_IGetUser extends grpc.MethodDefinition<ondewo_nlu_user_pb.GetUserRequest, ondewo_nlu_user_pb.User> {
    path: "/ondewo.nlu.Users/GetUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_user_pb.GetUserRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_user_pb.GetUserRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_user_pb.User>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_user_pb.User>;
}
interface IUsersService_IGetUserInfo extends grpc.MethodDefinition<ondewo_nlu_user_pb.GetUserRequest, ondewo_nlu_user_pb.UserInfo> {
    path: "/ondewo.nlu.Users/GetUserInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_user_pb.GetUserRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_user_pb.GetUserRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_user_pb.UserInfo>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_user_pb.UserInfo>;
}
interface IUsersService_IDeleteUser extends grpc.MethodDefinition<ondewo_nlu_user_pb.GetUserRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.Users/DeleteUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_user_pb.GetUserRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_user_pb.GetUserRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IUsersService_IUpdateUser extends grpc.MethodDefinition<ondewo_nlu_user_pb.UpdateUserRequest, ondewo_nlu_user_pb.User> {
    path: "/ondewo.nlu.Users/UpdateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_user_pb.UpdateUserRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_user_pb.UpdateUserRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_user_pb.User>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_user_pb.User>;
}
interface IUsersService_IListUsers extends grpc.MethodDefinition<ondewo_nlu_user_pb.ListUsersRequest, ondewo_nlu_user_pb.ListUsersResponse> {
    path: "/ondewo.nlu.Users/ListUsers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_user_pb.ListUsersRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_user_pb.ListUsersRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_user_pb.ListUsersResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_user_pb.ListUsersResponse>;
}
interface IUsersService_IListUserInfos extends grpc.MethodDefinition<ondewo_nlu_user_pb.ListUsersRequest, ondewo_nlu_user_pb.ListUserInfosResponse> {
    path: "/ondewo.nlu.Users/ListUserInfos";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_user_pb.ListUsersRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_user_pb.ListUsersRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_user_pb.ListUserInfosResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_user_pb.ListUserInfosResponse>;
}
interface IUsersService_ICreateServerRole extends grpc.MethodDefinition<ondewo_nlu_user_pb.CreateServerRoleRequest, ondewo_nlu_user_pb.ServerRole> {
    path: "/ondewo.nlu.Users/CreateServerRole";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_user_pb.CreateServerRoleRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_user_pb.CreateServerRoleRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_user_pb.ServerRole>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_user_pb.ServerRole>;
}
interface IUsersService_IGetServerRole extends grpc.MethodDefinition<ondewo_nlu_user_pb.GetServerRoleRequest, ondewo_nlu_user_pb.ServerRole> {
    path: "/ondewo.nlu.Users/GetServerRole";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_user_pb.GetServerRoleRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_user_pb.GetServerRoleRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_user_pb.ServerRole>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_user_pb.ServerRole>;
}
interface IUsersService_IDeleteServerRole extends grpc.MethodDefinition<ondewo_nlu_user_pb.DeleteServerRoleRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.Users/DeleteServerRole";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_user_pb.DeleteServerRoleRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_user_pb.DeleteServerRoleRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IUsersService_IUpdateServerRole extends grpc.MethodDefinition<ondewo_nlu_user_pb.UpdateServerRoleRequest, ondewo_nlu_user_pb.ServerRole> {
    path: "/ondewo.nlu.Users/UpdateServerRole";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_user_pb.UpdateServerRoleRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_user_pb.UpdateServerRoleRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_user_pb.ServerRole>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_user_pb.ServerRole>;
}
interface IUsersService_IListServerRoles extends grpc.MethodDefinition<ondewo_nlu_user_pb.ListServerRolesRequest, ondewo_nlu_user_pb.ListServerRolesResponse> {
    path: "/ondewo.nlu.Users/ListServerRoles";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_user_pb.ListServerRolesRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_user_pb.ListServerRolesRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_user_pb.ListServerRolesResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_user_pb.ListServerRolesResponse>;
}
interface IUsersService_IListServerPermissions extends grpc.MethodDefinition<ondewo_nlu_user_pb.ListServerPermissionsRequest, ondewo_nlu_user_pb.ListServerPermissionsResponse> {
    path: "/ondewo.nlu.Users/ListServerPermissions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_user_pb.ListServerPermissionsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_user_pb.ListServerPermissionsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_user_pb.ListServerPermissionsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_user_pb.ListServerPermissionsResponse>;
}
interface IUsersService_ICheckLogin extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.Users/CheckLogin";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IUsersService_IListNotifications extends grpc.MethodDefinition<ondewo_nlu_common_pb.ListNotificationsRequest, ondewo_nlu_common_pb.ListNotificationsResponse> {
    path: "/ondewo.nlu.Users/ListNotifications";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_common_pb.ListNotificationsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_common_pb.ListNotificationsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_common_pb.ListNotificationsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_common_pb.ListNotificationsResponse>;
}
interface IUsersService_ISetNotificationsFlaggedStatus extends grpc.MethodDefinition<ondewo_nlu_common_pb.SetNotificationsFlaggedStatusRequest, ondewo_nlu_common_pb.ListNotificationsResponse> {
    path: "/ondewo.nlu.Users/SetNotificationsFlaggedStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_common_pb.SetNotificationsFlaggedStatusRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_common_pb.SetNotificationsFlaggedStatusRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_common_pb.ListNotificationsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_common_pb.ListNotificationsResponse>;
}
interface IUsersService_ISetNotificationsReadStatus extends grpc.MethodDefinition<ondewo_nlu_common_pb.SetNotificationsReadStatusRequest, ondewo_nlu_common_pb.ListNotificationsResponse> {
    path: "/ondewo.nlu.Users/SetNotificationsReadStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_common_pb.SetNotificationsReadStatusRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_common_pb.SetNotificationsReadStatusRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_common_pb.ListNotificationsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_common_pb.ListNotificationsResponse>;
}
interface IUsersService_IAddNotifications extends grpc.MethodDefinition<ondewo_nlu_common_pb.AddNotificationsRequest, ondewo_nlu_common_pb.AddNotificationsResponse> {
    path: "/ondewo.nlu.Users/AddNotifications";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_common_pb.AddNotificationsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_common_pb.AddNotificationsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_common_pb.AddNotificationsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_common_pb.AddNotificationsResponse>;
}
interface IUsersService_IGetNotification extends grpc.MethodDefinition<ondewo_nlu_common_pb.GetNotificationRequest, ondewo_nlu_common_pb.Notification> {
    path: "/ondewo.nlu.Users/GetNotification";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_common_pb.GetNotificationRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_common_pb.GetNotificationRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_common_pb.Notification>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_common_pb.Notification>;
}
interface IUsersService_IUpdateNotification extends grpc.MethodDefinition<ondewo_nlu_common_pb.UpdateNotificationRequest, ondewo_nlu_common_pb.Notification> {
    path: "/ondewo.nlu.Users/UpdateNotification";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_common_pb.UpdateNotificationRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_common_pb.UpdateNotificationRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_common_pb.Notification>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_common_pb.Notification>;
}
interface IUsersService_IDeleteNotifications extends grpc.MethodDefinition<ondewo_nlu_common_pb.DeleteNotificationsRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.Users/DeleteNotifications";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_common_pb.DeleteNotificationsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_common_pb.DeleteNotificationsRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IUsersService_IStreamNotifications extends grpc.MethodDefinition<ondewo_nlu_common_pb.StreamNotificationsRequest, ondewo_nlu_common_pb.Notification> {
    path: "/ondewo.nlu.Users/StreamNotifications";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<ondewo_nlu_common_pb.StreamNotificationsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_common_pb.StreamNotificationsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_common_pb.Notification>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_common_pb.Notification>;
}
interface IUsersService_IGetUserPreferences extends grpc.MethodDefinition<ondewo_nlu_user_pb.GetUserPreferencesRequest, ondewo_nlu_user_pb.GetUserPreferencesResponse> {
    path: "/ondewo.nlu.Users/GetUserPreferences";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_user_pb.GetUserPreferencesRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_user_pb.GetUserPreferencesRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_user_pb.GetUserPreferencesResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_user_pb.GetUserPreferencesResponse>;
}
interface IUsersService_ISetUserPreferences extends grpc.MethodDefinition<ondewo_nlu_user_pb.SetUserPreferencesRequest, ondewo_nlu_user_pb.SetUserPreferencesResponse> {
    path: "/ondewo.nlu.Users/SetUserPreferences";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_user_pb.SetUserPreferencesRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_user_pb.SetUserPreferencesRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_user_pb.SetUserPreferencesResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_user_pb.SetUserPreferencesResponse>;
}
interface IUsersService_IDeleteUserPreferences extends grpc.MethodDefinition<ondewo_nlu_user_pb.DeleteUserPreferencesRequest, ondewo_nlu_user_pb.DeleteUserPreferencesResponse> {
    path: "/ondewo.nlu.Users/DeleteUserPreferences";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_user_pb.DeleteUserPreferencesRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_user_pb.DeleteUserPreferencesRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_user_pb.DeleteUserPreferencesResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_user_pb.DeleteUserPreferencesResponse>;
}
interface IUsersService_IDeleteAllUserPreferences extends grpc.MethodDefinition<ondewo_nlu_user_pb.DeleteAllUserPreferencesRequest, ondewo_nlu_user_pb.DeleteUserPreferencesResponse> {
    path: "/ondewo.nlu.Users/DeleteAllUserPreferences";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_user_pb.DeleteAllUserPreferencesRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_user_pb.DeleteAllUserPreferencesRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_user_pb.DeleteUserPreferencesResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_user_pb.DeleteUserPreferencesResponse>;
}

export const UsersService: IUsersService;

export interface IUsersServer {
    createUser: grpc.handleUnaryCall<ondewo_nlu_user_pb.CreateUserRequest, ondewo_nlu_user_pb.User>;
    getUser: grpc.handleUnaryCall<ondewo_nlu_user_pb.GetUserRequest, ondewo_nlu_user_pb.User>;
    getUserInfo: grpc.handleUnaryCall<ondewo_nlu_user_pb.GetUserRequest, ondewo_nlu_user_pb.UserInfo>;
    deleteUser: grpc.handleUnaryCall<ondewo_nlu_user_pb.GetUserRequest, google_protobuf_empty_pb.Empty>;
    updateUser: grpc.handleUnaryCall<ondewo_nlu_user_pb.UpdateUserRequest, ondewo_nlu_user_pb.User>;
    listUsers: grpc.handleUnaryCall<ondewo_nlu_user_pb.ListUsersRequest, ondewo_nlu_user_pb.ListUsersResponse>;
    listUserInfos: grpc.handleUnaryCall<ondewo_nlu_user_pb.ListUsersRequest, ondewo_nlu_user_pb.ListUserInfosResponse>;
    createServerRole: grpc.handleUnaryCall<ondewo_nlu_user_pb.CreateServerRoleRequest, ondewo_nlu_user_pb.ServerRole>;
    getServerRole: grpc.handleUnaryCall<ondewo_nlu_user_pb.GetServerRoleRequest, ondewo_nlu_user_pb.ServerRole>;
    deleteServerRole: grpc.handleUnaryCall<ondewo_nlu_user_pb.DeleteServerRoleRequest, google_protobuf_empty_pb.Empty>;
    updateServerRole: grpc.handleUnaryCall<ondewo_nlu_user_pb.UpdateServerRoleRequest, ondewo_nlu_user_pb.ServerRole>;
    listServerRoles: grpc.handleUnaryCall<ondewo_nlu_user_pb.ListServerRolesRequest, ondewo_nlu_user_pb.ListServerRolesResponse>;
    listServerPermissions: grpc.handleUnaryCall<ondewo_nlu_user_pb.ListServerPermissionsRequest, ondewo_nlu_user_pb.ListServerPermissionsResponse>;
    checkLogin: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty>;
    listNotifications: grpc.handleUnaryCall<ondewo_nlu_common_pb.ListNotificationsRequest, ondewo_nlu_common_pb.ListNotificationsResponse>;
    setNotificationsFlaggedStatus: grpc.handleUnaryCall<ondewo_nlu_common_pb.SetNotificationsFlaggedStatusRequest, ondewo_nlu_common_pb.ListNotificationsResponse>;
    setNotificationsReadStatus: grpc.handleUnaryCall<ondewo_nlu_common_pb.SetNotificationsReadStatusRequest, ondewo_nlu_common_pb.ListNotificationsResponse>;
    addNotifications: grpc.handleUnaryCall<ondewo_nlu_common_pb.AddNotificationsRequest, ondewo_nlu_common_pb.AddNotificationsResponse>;
    getNotification: grpc.handleUnaryCall<ondewo_nlu_common_pb.GetNotificationRequest, ondewo_nlu_common_pb.Notification>;
    updateNotification: grpc.handleUnaryCall<ondewo_nlu_common_pb.UpdateNotificationRequest, ondewo_nlu_common_pb.Notification>;
    deleteNotifications: grpc.handleUnaryCall<ondewo_nlu_common_pb.DeleteNotificationsRequest, google_protobuf_empty_pb.Empty>;
    streamNotifications: grpc.handleServerStreamingCall<ondewo_nlu_common_pb.StreamNotificationsRequest, ondewo_nlu_common_pb.Notification>;
    getUserPreferences: grpc.handleUnaryCall<ondewo_nlu_user_pb.GetUserPreferencesRequest, ondewo_nlu_user_pb.GetUserPreferencesResponse>;
    setUserPreferences: grpc.handleUnaryCall<ondewo_nlu_user_pb.SetUserPreferencesRequest, ondewo_nlu_user_pb.SetUserPreferencesResponse>;
    deleteUserPreferences: grpc.handleUnaryCall<ondewo_nlu_user_pb.DeleteUserPreferencesRequest, ondewo_nlu_user_pb.DeleteUserPreferencesResponse>;
    deleteAllUserPreferences: grpc.handleUnaryCall<ondewo_nlu_user_pb.DeleteAllUserPreferencesRequest, ondewo_nlu_user_pb.DeleteUserPreferencesResponse>;
}

export interface IUsersClient {
    createUser(request: ondewo_nlu_user_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: ondewo_nlu_user_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: ondewo_nlu_user_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.User) => void): grpc.ClientUnaryCall;
    getUser(request: ondewo_nlu_user_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.User) => void): grpc.ClientUnaryCall;
    getUser(request: ondewo_nlu_user_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.User) => void): grpc.ClientUnaryCall;
    getUser(request: ondewo_nlu_user_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.User) => void): grpc.ClientUnaryCall;
    getUserInfo(request: ondewo_nlu_user_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.UserInfo) => void): grpc.ClientUnaryCall;
    getUserInfo(request: ondewo_nlu_user_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.UserInfo) => void): grpc.ClientUnaryCall;
    getUserInfo(request: ondewo_nlu_user_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.UserInfo) => void): grpc.ClientUnaryCall;
    deleteUser(request: ondewo_nlu_user_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteUser(request: ondewo_nlu_user_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteUser(request: ondewo_nlu_user_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateUser(request: ondewo_nlu_user_pb.UpdateUserRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.User) => void): grpc.ClientUnaryCall;
    updateUser(request: ondewo_nlu_user_pb.UpdateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.User) => void): grpc.ClientUnaryCall;
    updateUser(request: ondewo_nlu_user_pb.UpdateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.User) => void): grpc.ClientUnaryCall;
    listUsers(request: ondewo_nlu_user_pb.ListUsersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    listUsers(request: ondewo_nlu_user_pb.ListUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    listUsers(request: ondewo_nlu_user_pb.ListUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    listUserInfos(request: ondewo_nlu_user_pb.ListUsersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ListUserInfosResponse) => void): grpc.ClientUnaryCall;
    listUserInfos(request: ondewo_nlu_user_pb.ListUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ListUserInfosResponse) => void): grpc.ClientUnaryCall;
    listUserInfos(request: ondewo_nlu_user_pb.ListUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ListUserInfosResponse) => void): grpc.ClientUnaryCall;
    createServerRole(request: ondewo_nlu_user_pb.CreateServerRoleRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ServerRole) => void): grpc.ClientUnaryCall;
    createServerRole(request: ondewo_nlu_user_pb.CreateServerRoleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ServerRole) => void): grpc.ClientUnaryCall;
    createServerRole(request: ondewo_nlu_user_pb.CreateServerRoleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ServerRole) => void): grpc.ClientUnaryCall;
    getServerRole(request: ondewo_nlu_user_pb.GetServerRoleRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ServerRole) => void): grpc.ClientUnaryCall;
    getServerRole(request: ondewo_nlu_user_pb.GetServerRoleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ServerRole) => void): grpc.ClientUnaryCall;
    getServerRole(request: ondewo_nlu_user_pb.GetServerRoleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ServerRole) => void): grpc.ClientUnaryCall;
    deleteServerRole(request: ondewo_nlu_user_pb.DeleteServerRoleRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteServerRole(request: ondewo_nlu_user_pb.DeleteServerRoleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteServerRole(request: ondewo_nlu_user_pb.DeleteServerRoleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateServerRole(request: ondewo_nlu_user_pb.UpdateServerRoleRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ServerRole) => void): grpc.ClientUnaryCall;
    updateServerRole(request: ondewo_nlu_user_pb.UpdateServerRoleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ServerRole) => void): grpc.ClientUnaryCall;
    updateServerRole(request: ondewo_nlu_user_pb.UpdateServerRoleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ServerRole) => void): grpc.ClientUnaryCall;
    listServerRoles(request: ondewo_nlu_user_pb.ListServerRolesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ListServerRolesResponse) => void): grpc.ClientUnaryCall;
    listServerRoles(request: ondewo_nlu_user_pb.ListServerRolesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ListServerRolesResponse) => void): grpc.ClientUnaryCall;
    listServerRoles(request: ondewo_nlu_user_pb.ListServerRolesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ListServerRolesResponse) => void): grpc.ClientUnaryCall;
    listServerPermissions(request: ondewo_nlu_user_pb.ListServerPermissionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ListServerPermissionsResponse) => void): grpc.ClientUnaryCall;
    listServerPermissions(request: ondewo_nlu_user_pb.ListServerPermissionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ListServerPermissionsResponse) => void): grpc.ClientUnaryCall;
    listServerPermissions(request: ondewo_nlu_user_pb.ListServerPermissionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ListServerPermissionsResponse) => void): grpc.ClientUnaryCall;
    checkLogin(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    checkLogin(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    checkLogin(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    listNotifications(request: ondewo_nlu_common_pb.ListNotificationsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.ListNotificationsResponse) => void): grpc.ClientUnaryCall;
    listNotifications(request: ondewo_nlu_common_pb.ListNotificationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.ListNotificationsResponse) => void): grpc.ClientUnaryCall;
    listNotifications(request: ondewo_nlu_common_pb.ListNotificationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.ListNotificationsResponse) => void): grpc.ClientUnaryCall;
    setNotificationsFlaggedStatus(request: ondewo_nlu_common_pb.SetNotificationsFlaggedStatusRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.ListNotificationsResponse) => void): grpc.ClientUnaryCall;
    setNotificationsFlaggedStatus(request: ondewo_nlu_common_pb.SetNotificationsFlaggedStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.ListNotificationsResponse) => void): grpc.ClientUnaryCall;
    setNotificationsFlaggedStatus(request: ondewo_nlu_common_pb.SetNotificationsFlaggedStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.ListNotificationsResponse) => void): grpc.ClientUnaryCall;
    setNotificationsReadStatus(request: ondewo_nlu_common_pb.SetNotificationsReadStatusRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.ListNotificationsResponse) => void): grpc.ClientUnaryCall;
    setNotificationsReadStatus(request: ondewo_nlu_common_pb.SetNotificationsReadStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.ListNotificationsResponse) => void): grpc.ClientUnaryCall;
    setNotificationsReadStatus(request: ondewo_nlu_common_pb.SetNotificationsReadStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.ListNotificationsResponse) => void): grpc.ClientUnaryCall;
    addNotifications(request: ondewo_nlu_common_pb.AddNotificationsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.AddNotificationsResponse) => void): grpc.ClientUnaryCall;
    addNotifications(request: ondewo_nlu_common_pb.AddNotificationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.AddNotificationsResponse) => void): grpc.ClientUnaryCall;
    addNotifications(request: ondewo_nlu_common_pb.AddNotificationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.AddNotificationsResponse) => void): grpc.ClientUnaryCall;
    getNotification(request: ondewo_nlu_common_pb.GetNotificationRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.Notification) => void): grpc.ClientUnaryCall;
    getNotification(request: ondewo_nlu_common_pb.GetNotificationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.Notification) => void): grpc.ClientUnaryCall;
    getNotification(request: ondewo_nlu_common_pb.GetNotificationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.Notification) => void): grpc.ClientUnaryCall;
    updateNotification(request: ondewo_nlu_common_pb.UpdateNotificationRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.Notification) => void): grpc.ClientUnaryCall;
    updateNotification(request: ondewo_nlu_common_pb.UpdateNotificationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.Notification) => void): grpc.ClientUnaryCall;
    updateNotification(request: ondewo_nlu_common_pb.UpdateNotificationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.Notification) => void): grpc.ClientUnaryCall;
    deleteNotifications(request: ondewo_nlu_common_pb.DeleteNotificationsRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteNotifications(request: ondewo_nlu_common_pb.DeleteNotificationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteNotifications(request: ondewo_nlu_common_pb.DeleteNotificationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    streamNotifications(request: ondewo_nlu_common_pb.StreamNotificationsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_common_pb.Notification>;
    streamNotifications(request: ondewo_nlu_common_pb.StreamNotificationsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_common_pb.Notification>;
    getUserPreferences(request: ondewo_nlu_user_pb.GetUserPreferencesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.GetUserPreferencesResponse) => void): grpc.ClientUnaryCall;
    getUserPreferences(request: ondewo_nlu_user_pb.GetUserPreferencesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.GetUserPreferencesResponse) => void): grpc.ClientUnaryCall;
    getUserPreferences(request: ondewo_nlu_user_pb.GetUserPreferencesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.GetUserPreferencesResponse) => void): grpc.ClientUnaryCall;
    setUserPreferences(request: ondewo_nlu_user_pb.SetUserPreferencesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.SetUserPreferencesResponse) => void): grpc.ClientUnaryCall;
    setUserPreferences(request: ondewo_nlu_user_pb.SetUserPreferencesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.SetUserPreferencesResponse) => void): grpc.ClientUnaryCall;
    setUserPreferences(request: ondewo_nlu_user_pb.SetUserPreferencesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.SetUserPreferencesResponse) => void): grpc.ClientUnaryCall;
    deleteUserPreferences(request: ondewo_nlu_user_pb.DeleteUserPreferencesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.DeleteUserPreferencesResponse) => void): grpc.ClientUnaryCall;
    deleteUserPreferences(request: ondewo_nlu_user_pb.DeleteUserPreferencesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.DeleteUserPreferencesResponse) => void): grpc.ClientUnaryCall;
    deleteUserPreferences(request: ondewo_nlu_user_pb.DeleteUserPreferencesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.DeleteUserPreferencesResponse) => void): grpc.ClientUnaryCall;
    deleteAllUserPreferences(request: ondewo_nlu_user_pb.DeleteAllUserPreferencesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.DeleteUserPreferencesResponse) => void): grpc.ClientUnaryCall;
    deleteAllUserPreferences(request: ondewo_nlu_user_pb.DeleteAllUserPreferencesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.DeleteUserPreferencesResponse) => void): grpc.ClientUnaryCall;
    deleteAllUserPreferences(request: ondewo_nlu_user_pb.DeleteAllUserPreferencesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.DeleteUserPreferencesResponse) => void): grpc.ClientUnaryCall;
}

export class UsersClient extends grpc.Client implements IUsersClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createUser(request: ondewo_nlu_user_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: ondewo_nlu_user_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: ondewo_nlu_user_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.User) => void): grpc.ClientUnaryCall;
    public getUser(request: ondewo_nlu_user_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.User) => void): grpc.ClientUnaryCall;
    public getUser(request: ondewo_nlu_user_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.User) => void): grpc.ClientUnaryCall;
    public getUser(request: ondewo_nlu_user_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.User) => void): grpc.ClientUnaryCall;
    public getUserInfo(request: ondewo_nlu_user_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.UserInfo) => void): grpc.ClientUnaryCall;
    public getUserInfo(request: ondewo_nlu_user_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.UserInfo) => void): grpc.ClientUnaryCall;
    public getUserInfo(request: ondewo_nlu_user_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.UserInfo) => void): grpc.ClientUnaryCall;
    public deleteUser(request: ondewo_nlu_user_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteUser(request: ondewo_nlu_user_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteUser(request: ondewo_nlu_user_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateUser(request: ondewo_nlu_user_pb.UpdateUserRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.User) => void): grpc.ClientUnaryCall;
    public updateUser(request: ondewo_nlu_user_pb.UpdateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.User) => void): grpc.ClientUnaryCall;
    public updateUser(request: ondewo_nlu_user_pb.UpdateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.User) => void): grpc.ClientUnaryCall;
    public listUsers(request: ondewo_nlu_user_pb.ListUsersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    public listUsers(request: ondewo_nlu_user_pb.ListUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    public listUsers(request: ondewo_nlu_user_pb.ListUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    public listUserInfos(request: ondewo_nlu_user_pb.ListUsersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ListUserInfosResponse) => void): grpc.ClientUnaryCall;
    public listUserInfos(request: ondewo_nlu_user_pb.ListUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ListUserInfosResponse) => void): grpc.ClientUnaryCall;
    public listUserInfos(request: ondewo_nlu_user_pb.ListUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ListUserInfosResponse) => void): grpc.ClientUnaryCall;
    public createServerRole(request: ondewo_nlu_user_pb.CreateServerRoleRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ServerRole) => void): grpc.ClientUnaryCall;
    public createServerRole(request: ondewo_nlu_user_pb.CreateServerRoleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ServerRole) => void): grpc.ClientUnaryCall;
    public createServerRole(request: ondewo_nlu_user_pb.CreateServerRoleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ServerRole) => void): grpc.ClientUnaryCall;
    public getServerRole(request: ondewo_nlu_user_pb.GetServerRoleRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ServerRole) => void): grpc.ClientUnaryCall;
    public getServerRole(request: ondewo_nlu_user_pb.GetServerRoleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ServerRole) => void): grpc.ClientUnaryCall;
    public getServerRole(request: ondewo_nlu_user_pb.GetServerRoleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ServerRole) => void): grpc.ClientUnaryCall;
    public deleteServerRole(request: ondewo_nlu_user_pb.DeleteServerRoleRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteServerRole(request: ondewo_nlu_user_pb.DeleteServerRoleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteServerRole(request: ondewo_nlu_user_pb.DeleteServerRoleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateServerRole(request: ondewo_nlu_user_pb.UpdateServerRoleRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ServerRole) => void): grpc.ClientUnaryCall;
    public updateServerRole(request: ondewo_nlu_user_pb.UpdateServerRoleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ServerRole) => void): grpc.ClientUnaryCall;
    public updateServerRole(request: ondewo_nlu_user_pb.UpdateServerRoleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ServerRole) => void): grpc.ClientUnaryCall;
    public listServerRoles(request: ondewo_nlu_user_pb.ListServerRolesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ListServerRolesResponse) => void): grpc.ClientUnaryCall;
    public listServerRoles(request: ondewo_nlu_user_pb.ListServerRolesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ListServerRolesResponse) => void): grpc.ClientUnaryCall;
    public listServerRoles(request: ondewo_nlu_user_pb.ListServerRolesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ListServerRolesResponse) => void): grpc.ClientUnaryCall;
    public listServerPermissions(request: ondewo_nlu_user_pb.ListServerPermissionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ListServerPermissionsResponse) => void): grpc.ClientUnaryCall;
    public listServerPermissions(request: ondewo_nlu_user_pb.ListServerPermissionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ListServerPermissionsResponse) => void): grpc.ClientUnaryCall;
    public listServerPermissions(request: ondewo_nlu_user_pb.ListServerPermissionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.ListServerPermissionsResponse) => void): grpc.ClientUnaryCall;
    public checkLogin(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public checkLogin(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public checkLogin(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public listNotifications(request: ondewo_nlu_common_pb.ListNotificationsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.ListNotificationsResponse) => void): grpc.ClientUnaryCall;
    public listNotifications(request: ondewo_nlu_common_pb.ListNotificationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.ListNotificationsResponse) => void): grpc.ClientUnaryCall;
    public listNotifications(request: ondewo_nlu_common_pb.ListNotificationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.ListNotificationsResponse) => void): grpc.ClientUnaryCall;
    public setNotificationsFlaggedStatus(request: ondewo_nlu_common_pb.SetNotificationsFlaggedStatusRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.ListNotificationsResponse) => void): grpc.ClientUnaryCall;
    public setNotificationsFlaggedStatus(request: ondewo_nlu_common_pb.SetNotificationsFlaggedStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.ListNotificationsResponse) => void): grpc.ClientUnaryCall;
    public setNotificationsFlaggedStatus(request: ondewo_nlu_common_pb.SetNotificationsFlaggedStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.ListNotificationsResponse) => void): grpc.ClientUnaryCall;
    public setNotificationsReadStatus(request: ondewo_nlu_common_pb.SetNotificationsReadStatusRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.ListNotificationsResponse) => void): grpc.ClientUnaryCall;
    public setNotificationsReadStatus(request: ondewo_nlu_common_pb.SetNotificationsReadStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.ListNotificationsResponse) => void): grpc.ClientUnaryCall;
    public setNotificationsReadStatus(request: ondewo_nlu_common_pb.SetNotificationsReadStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.ListNotificationsResponse) => void): grpc.ClientUnaryCall;
    public addNotifications(request: ondewo_nlu_common_pb.AddNotificationsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.AddNotificationsResponse) => void): grpc.ClientUnaryCall;
    public addNotifications(request: ondewo_nlu_common_pb.AddNotificationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.AddNotificationsResponse) => void): grpc.ClientUnaryCall;
    public addNotifications(request: ondewo_nlu_common_pb.AddNotificationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.AddNotificationsResponse) => void): grpc.ClientUnaryCall;
    public getNotification(request: ondewo_nlu_common_pb.GetNotificationRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.Notification) => void): grpc.ClientUnaryCall;
    public getNotification(request: ondewo_nlu_common_pb.GetNotificationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.Notification) => void): grpc.ClientUnaryCall;
    public getNotification(request: ondewo_nlu_common_pb.GetNotificationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.Notification) => void): grpc.ClientUnaryCall;
    public updateNotification(request: ondewo_nlu_common_pb.UpdateNotificationRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.Notification) => void): grpc.ClientUnaryCall;
    public updateNotification(request: ondewo_nlu_common_pb.UpdateNotificationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.Notification) => void): grpc.ClientUnaryCall;
    public updateNotification(request: ondewo_nlu_common_pb.UpdateNotificationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_common_pb.Notification) => void): grpc.ClientUnaryCall;
    public deleteNotifications(request: ondewo_nlu_common_pb.DeleteNotificationsRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteNotifications(request: ondewo_nlu_common_pb.DeleteNotificationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteNotifications(request: ondewo_nlu_common_pb.DeleteNotificationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public streamNotifications(request: ondewo_nlu_common_pb.StreamNotificationsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_common_pb.Notification>;
    public streamNotifications(request: ondewo_nlu_common_pb.StreamNotificationsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_common_pb.Notification>;
    public getUserPreferences(request: ondewo_nlu_user_pb.GetUserPreferencesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.GetUserPreferencesResponse) => void): grpc.ClientUnaryCall;
    public getUserPreferences(request: ondewo_nlu_user_pb.GetUserPreferencesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.GetUserPreferencesResponse) => void): grpc.ClientUnaryCall;
    public getUserPreferences(request: ondewo_nlu_user_pb.GetUserPreferencesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.GetUserPreferencesResponse) => void): grpc.ClientUnaryCall;
    public setUserPreferences(request: ondewo_nlu_user_pb.SetUserPreferencesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.SetUserPreferencesResponse) => void): grpc.ClientUnaryCall;
    public setUserPreferences(request: ondewo_nlu_user_pb.SetUserPreferencesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.SetUserPreferencesResponse) => void): grpc.ClientUnaryCall;
    public setUserPreferences(request: ondewo_nlu_user_pb.SetUserPreferencesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.SetUserPreferencesResponse) => void): grpc.ClientUnaryCall;
    public deleteUserPreferences(request: ondewo_nlu_user_pb.DeleteUserPreferencesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.DeleteUserPreferencesResponse) => void): grpc.ClientUnaryCall;
    public deleteUserPreferences(request: ondewo_nlu_user_pb.DeleteUserPreferencesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.DeleteUserPreferencesResponse) => void): grpc.ClientUnaryCall;
    public deleteUserPreferences(request: ondewo_nlu_user_pb.DeleteUserPreferencesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.DeleteUserPreferencesResponse) => void): grpc.ClientUnaryCall;
    public deleteAllUserPreferences(request: ondewo_nlu_user_pb.DeleteAllUserPreferencesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.DeleteUserPreferencesResponse) => void): grpc.ClientUnaryCall;
    public deleteAllUserPreferences(request: ondewo_nlu_user_pb.DeleteAllUserPreferencesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.DeleteUserPreferencesResponse) => void): grpc.ClientUnaryCall;
    public deleteAllUserPreferences(request: ondewo_nlu_user_pb.DeleteAllUserPreferencesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.DeleteUserPreferencesResponse) => void): grpc.ClientUnaryCall;
}
