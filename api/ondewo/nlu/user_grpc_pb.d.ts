// package: ondewo.nlu
// file: ondewo/nlu/user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ondewo_nlu_user_pb from "../../ondewo/nlu/user_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as ondewo_nlu_project_role_pb from "../../ondewo/nlu/project_role_pb";

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
    login: IUsersService_ILogin;
    checkLogin: IUsersService_ICheckLogin;
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
interface IUsersService_ILogin extends grpc.MethodDefinition<ondewo_nlu_user_pb.LoginRequest, ondewo_nlu_user_pb.LoginResponse> {
    path: "/ondewo.nlu.Users/Login";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_user_pb.LoginRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_user_pb.LoginRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_user_pb.LoginResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_user_pb.LoginResponse>;
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
    login: grpc.handleUnaryCall<ondewo_nlu_user_pb.LoginRequest, ondewo_nlu_user_pb.LoginResponse>;
    checkLogin: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty>;
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
    login(request: ondewo_nlu_user_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: ondewo_nlu_user_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: ondewo_nlu_user_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    checkLogin(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    checkLogin(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    checkLogin(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
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
    public login(request: ondewo_nlu_user_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: ondewo_nlu_user_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: ondewo_nlu_user_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_user_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public checkLogin(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public checkLogin(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public checkLogin(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
