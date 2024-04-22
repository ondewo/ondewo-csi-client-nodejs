// package: ondewo.nlu
// file: ondewo/nlu/user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ondewo_nlu_project_role_pb from "../../ondewo/nlu/project_role_pb";
import * as ondewo_nlu_common_pb from "../../ondewo/nlu/common_pb";

export class User extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): User;
    getDisplayName(): string;
    setDisplayName(value: string): User;
    getServerRoleId(): number;
    setServerRoleId(value: number): User;
    getUserEmail(): string;
    setUserEmail(value: string): User;
    getUserProfilePicture(): Uint8Array | string;
    getUserProfilePicture_asU8(): Uint8Array;
    getUserProfilePicture_asB64(): string;
    setUserProfilePicture(value: Uint8Array | string): User;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): User;

    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): User;
    getCreatedBy(): string;
    setCreatedBy(value: string): User;
    getModifiedBy(): string;
    setModifiedBy(value: string): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        userId: string,
        displayName: string,
        serverRoleId: number,
        userEmail: string,
        userProfilePicture: Uint8Array | string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdBy: string,
        modifiedBy: string,
    }
}

export class UserInfo extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): User | undefined;
    setUser(value?: User): UserInfo;

    getProjectRolesMap(): jspb.Map<string, ondewo_nlu_project_role_pb.ProjectRole>;
    clearProjectRolesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserInfo.AsObject;
    static toObject(includeInstance: boolean, msg: UserInfo): UserInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserInfo;
    static deserializeBinaryFromReader(message: UserInfo, reader: jspb.BinaryReader): UserInfo;
}

export namespace UserInfo {
    export type AsObject = {
        user?: User.AsObject,

        projectRolesMap: Array<[string, ondewo_nlu_project_role_pb.ProjectRole.AsObject]>,
    }
}

export class CreateUserRequest extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): User | undefined;
    setUser(value?: User): CreateUserRequest;
    getPassword(): string;
    setPassword(value: string): CreateUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateUserRequest): CreateUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
    static deserializeBinaryFromReader(message: CreateUserRequest, reader: jspb.BinaryReader): CreateUserRequest;
}

export namespace CreateUserRequest {
    export type AsObject = {
        user?: User.AsObject,
        password: string,
    }
}

export class UpdateUserRequest extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): User | undefined;
    setUser(value?: User): UpdateUserRequest;
    getPassword(): string;
    setPassword(value: string): UpdateUserRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateUserRequest): UpdateUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateUserRequest;
    static deserializeBinaryFromReader(message: UpdateUserRequest, reader: jspb.BinaryReader): UpdateUserRequest;
}

export namespace UpdateUserRequest {
    export type AsObject = {
        user?: User.AsObject,
        password: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class GetUserRequest extends jspb.Message { 

    hasUserId(): boolean;
    clearUserId(): void;
    getUserId(): string;
    setUserId(value: string): GetUserRequest;

    hasUserEmail(): boolean;
    clearUserEmail(): void;
    getUserEmail(): string;
    setUserEmail(value: string): GetUserRequest;

    getUserIdentifierCase(): GetUserRequest.UserIdentifierCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserRequest;
    static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
    export type AsObject = {
        userId: string,
        userEmail: string,
    }

    export enum UserIdentifierCase {
        USER_IDENTIFIER_NOT_SET = 0,
        USER_ID = 1,
        USER_EMAIL = 3,
    }

}

export class DeleteUserRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): DeleteUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteUserRequest): DeleteUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteUserRequest;
    static deserializeBinaryFromReader(message: DeleteUserRequest, reader: jspb.BinaryReader): DeleteUserRequest;
}

export namespace DeleteUserRequest {
    export type AsObject = {
        userId: string,
    }
}

export class ListUsersRequest extends jspb.Message { 
    getPageToken(): string;
    setPageToken(value: string): ListUsersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListUsersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListUsersRequest): ListUsersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListUsersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListUsersRequest;
    static deserializeBinaryFromReader(message: ListUsersRequest, reader: jspb.BinaryReader): ListUsersRequest;
}

export namespace ListUsersRequest {
    export type AsObject = {
        pageToken: string,
    }
}

export class ListUsersResponse extends jspb.Message { 
    clearUsersList(): void;
    getUsersList(): Array<User>;
    setUsersList(value: Array<User>): ListUsersResponse;
    addUsers(value?: User, index?: number): User;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListUsersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListUsersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListUsersResponse): ListUsersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListUsersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListUsersResponse;
    static deserializeBinaryFromReader(message: ListUsersResponse, reader: jspb.BinaryReader): ListUsersResponse;
}

export namespace ListUsersResponse {
    export type AsObject = {
        usersList: Array<User.AsObject>,
        nextPageToken: string,
    }
}

export class ListUserInfosResponse extends jspb.Message { 
    clearUsersList(): void;
    getUsersList(): Array<UserInfo>;
    setUsersList(value: Array<UserInfo>): ListUserInfosResponse;
    addUsers(value?: UserInfo, index?: number): UserInfo;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListUserInfosResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListUserInfosResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListUserInfosResponse): ListUserInfosResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListUserInfosResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListUserInfosResponse;
    static deserializeBinaryFromReader(message: ListUserInfosResponse, reader: jspb.BinaryReader): ListUserInfosResponse;
}

export namespace ListUserInfosResponse {
    export type AsObject = {
        usersList: Array<UserInfo.AsObject>,
        nextPageToken: string,
    }
}

export class ServerRole extends jspb.Message { 
    getRoleId(): number;
    setRoleId(value: number): ServerRole;
    getName(): string;
    setName(value: string): ServerRole;
    clearPermissionsList(): void;
    getPermissionsList(): Array<string>;
    setPermissionsList(value: Array<string>): ServerRole;
    addPermissions(value: string, index?: number): string;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ServerRole;

    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): ServerRole;
    getCreatedBy(): string;
    setCreatedBy(value: string): ServerRole;
    getModifiedBy(): string;
    setModifiedBy(value: string): ServerRole;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServerRole.AsObject;
    static toObject(includeInstance: boolean, msg: ServerRole): ServerRole.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServerRole, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServerRole;
    static deserializeBinaryFromReader(message: ServerRole, reader: jspb.BinaryReader): ServerRole;
}

export namespace ServerRole {
    export type AsObject = {
        roleId: number,
        name: string,
        permissionsList: Array<string>,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdBy: string,
        modifiedBy: string,
    }
}

export class CreateServerRoleRequest extends jspb.Message { 

    hasRole(): boolean;
    clearRole(): void;
    getRole(): ServerRole | undefined;
    setRole(value?: ServerRole): CreateServerRoleRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateServerRoleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateServerRoleRequest): CreateServerRoleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateServerRoleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateServerRoleRequest;
    static deserializeBinaryFromReader(message: CreateServerRoleRequest, reader: jspb.BinaryReader): CreateServerRoleRequest;
}

export namespace CreateServerRoleRequest {
    export type AsObject = {
        role?: ServerRole.AsObject,
    }
}

export class UpdateServerRoleRequest extends jspb.Message { 

    hasRole(): boolean;
    clearRole(): void;
    getRole(): ServerRole | undefined;
    setRole(value?: ServerRole): UpdateServerRoleRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateServerRoleRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateServerRoleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateServerRoleRequest): UpdateServerRoleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateServerRoleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateServerRoleRequest;
    static deserializeBinaryFromReader(message: UpdateServerRoleRequest, reader: jspb.BinaryReader): UpdateServerRoleRequest;
}

export namespace UpdateServerRoleRequest {
    export type AsObject = {
        role?: ServerRole.AsObject,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class DeleteServerRoleRequest extends jspb.Message { 
    getRoleId(): number;
    setRoleId(value: number): DeleteServerRoleRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteServerRoleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteServerRoleRequest): DeleteServerRoleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteServerRoleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteServerRoleRequest;
    static deserializeBinaryFromReader(message: DeleteServerRoleRequest, reader: jspb.BinaryReader): DeleteServerRoleRequest;
}

export namespace DeleteServerRoleRequest {
    export type AsObject = {
        roleId: number,
    }
}

export class GetServerRoleRequest extends jspb.Message { 

    hasRoleId(): boolean;
    clearRoleId(): void;
    getRoleId(): number;
    setRoleId(value: number): GetServerRoleRequest;

    hasRoleName(): boolean;
    clearRoleName(): void;
    getRoleName(): string;
    setRoleName(value: string): GetServerRoleRequest;

    getServerRoleIdentifierCase(): GetServerRoleRequest.ServerRoleIdentifierCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetServerRoleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetServerRoleRequest): GetServerRoleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetServerRoleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetServerRoleRequest;
    static deserializeBinaryFromReader(message: GetServerRoleRequest, reader: jspb.BinaryReader): GetServerRoleRequest;
}

export namespace GetServerRoleRequest {
    export type AsObject = {
        roleId: number,
        roleName: string,
    }

    export enum ServerRoleIdentifierCase {
        SERVER_ROLE_IDENTIFIER_NOT_SET = 0,
        ROLE_ID = 1,
        ROLE_NAME = 2,
    }

}

export class ListServerRolesRequest extends jspb.Message { 
    getPageToken(): string;
    setPageToken(value: string): ListServerRolesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListServerRolesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListServerRolesRequest): ListServerRolesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListServerRolesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListServerRolesRequest;
    static deserializeBinaryFromReader(message: ListServerRolesRequest, reader: jspb.BinaryReader): ListServerRolesRequest;
}

export namespace ListServerRolesRequest {
    export type AsObject = {
        pageToken: string,
    }
}

export class ListServerRolesResponse extends jspb.Message { 
    clearServerRolesList(): void;
    getServerRolesList(): Array<ServerRole>;
    setServerRolesList(value: Array<ServerRole>): ListServerRolesResponse;
    addServerRoles(value?: ServerRole, index?: number): ServerRole;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListServerRolesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListServerRolesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListServerRolesResponse): ListServerRolesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListServerRolesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListServerRolesResponse;
    static deserializeBinaryFromReader(message: ListServerRolesResponse, reader: jspb.BinaryReader): ListServerRolesResponse;
}

export namespace ListServerRolesResponse {
    export type AsObject = {
        serverRolesList: Array<ServerRole.AsObject>,
        nextPageToken: string,
    }
}

export class ListServerPermissionsRequest extends jspb.Message { 
    getPageToken(): string;
    setPageToken(value: string): ListServerPermissionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListServerPermissionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListServerPermissionsRequest): ListServerPermissionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListServerPermissionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListServerPermissionsRequest;
    static deserializeBinaryFromReader(message: ListServerPermissionsRequest, reader: jspb.BinaryReader): ListServerPermissionsRequest;
}

export namespace ListServerPermissionsRequest {
    export type AsObject = {
        pageToken: string,
    }
}

export class ListServerPermissionsResponse extends jspb.Message { 
    clearPermissionsList(): void;
    getPermissionsList(): Array<string>;
    setPermissionsList(value: Array<string>): ListServerPermissionsResponse;
    addPermissions(value: string, index?: number): string;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListServerPermissionsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListServerPermissionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListServerPermissionsResponse): ListServerPermissionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListServerPermissionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListServerPermissionsResponse;
    static deserializeBinaryFromReader(message: ListServerPermissionsResponse, reader: jspb.BinaryReader): ListServerPermissionsResponse;
}

export namespace ListServerPermissionsResponse {
    export type AsObject = {
        permissionsList: Array<string>,
        nextPageToken: string,
    }
}

export class LoginRequest extends jspb.Message { 
    getUserEmail(): string;
    setUserEmail(value: string): LoginRequest;
    getPassword(): string;
    setPassword(value: string): LoginRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginRequest;
    static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
    export type AsObject = {
        userEmail: string,
        password: string,
    }
}

export class LoginResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): User | undefined;
    setUser(value?: User): LoginResponse;
    getAuthToken(): string;
    setAuthToken(value: string): LoginResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginResponse;
    static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
    export type AsObject = {
        user?: User.AsObject,
        authToken: string,
    }
}

export class GetUserPreferencesRequest extends jspb.Message { 
    getUserName(): string;
    setUserName(value: string): GetUserPreferencesRequest;
    clearKeysList(): void;
    getKeysList(): Array<string>;
    setKeysList(value: Array<string>): GetUserPreferencesRequest;
    addKeys(value: string, index?: number): string;
    getRegexInclude(): string;
    setRegexInclude(value: string): GetUserPreferencesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserPreferencesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserPreferencesRequest): GetUserPreferencesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserPreferencesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserPreferencesRequest;
    static deserializeBinaryFromReader(message: GetUserPreferencesRequest, reader: jspb.BinaryReader): GetUserPreferencesRequest;
}

export namespace GetUserPreferencesRequest {
    export type AsObject = {
        userName: string,
        keysList: Array<string>,
        regexInclude: string,
    }
}

export class GetUserPreferencesResponse extends jspb.Message { 
    getUserName(): string;
    setUserName(value: string): GetUserPreferencesResponse;
    clearKeyValuePairsList(): void;
    getKeyValuePairsList(): Array<ondewo_nlu_common_pb.KeyValuePair>;
    setKeyValuePairsList(value: Array<ondewo_nlu_common_pb.KeyValuePair>): GetUserPreferencesResponse;
    addKeyValuePairs(value?: ondewo_nlu_common_pb.KeyValuePair, index?: number): ondewo_nlu_common_pb.KeyValuePair;
    getErrorMessage(): string;
    setErrorMessage(value: string): GetUserPreferencesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserPreferencesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserPreferencesResponse): GetUserPreferencesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserPreferencesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserPreferencesResponse;
    static deserializeBinaryFromReader(message: GetUserPreferencesResponse, reader: jspb.BinaryReader): GetUserPreferencesResponse;
}

export namespace GetUserPreferencesResponse {
    export type AsObject = {
        userName: string,
        keyValuePairsList: Array<ondewo_nlu_common_pb.KeyValuePair.AsObject>,
        errorMessage: string,
    }
}

export class SetUserPreferencesRequest extends jspb.Message { 
    getUserName(): string;
    setUserName(value: string): SetUserPreferencesRequest;
    clearKeyValuePairsList(): void;
    getKeyValuePairsList(): Array<ondewo_nlu_common_pb.KeyValuePair>;
    setKeyValuePairsList(value: Array<ondewo_nlu_common_pb.KeyValuePair>): SetUserPreferencesRequest;
    addKeyValuePairs(value?: ondewo_nlu_common_pb.KeyValuePair, index?: number): ondewo_nlu_common_pb.KeyValuePair;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetUserPreferencesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetUserPreferencesRequest): SetUserPreferencesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetUserPreferencesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetUserPreferencesRequest;
    static deserializeBinaryFromReader(message: SetUserPreferencesRequest, reader: jspb.BinaryReader): SetUserPreferencesRequest;
}

export namespace SetUserPreferencesRequest {
    export type AsObject = {
        userName: string,
        keyValuePairsList: Array<ondewo_nlu_common_pb.KeyValuePair.AsObject>,
    }
}

export class SetUserPreferencesResponse extends jspb.Message { 
    getUserName(): string;
    setUserName(value: string): SetUserPreferencesResponse;
    clearKeysList(): void;
    getKeysList(): Array<string>;
    setKeysList(value: Array<string>): SetUserPreferencesResponse;
    addKeys(value: string, index?: number): string;
    getErrorMessage(): string;
    setErrorMessage(value: string): SetUserPreferencesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetUserPreferencesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetUserPreferencesResponse): SetUserPreferencesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetUserPreferencesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetUserPreferencesResponse;
    static deserializeBinaryFromReader(message: SetUserPreferencesResponse, reader: jspb.BinaryReader): SetUserPreferencesResponse;
}

export namespace SetUserPreferencesResponse {
    export type AsObject = {
        userName: string,
        keysList: Array<string>,
        errorMessage: string,
    }
}

export class DeleteUserPreferencesRequest extends jspb.Message { 
    getUserName(): string;
    setUserName(value: string): DeleteUserPreferencesRequest;
    clearKeysList(): void;
    getKeysList(): Array<string>;
    setKeysList(value: Array<string>): DeleteUserPreferencesRequest;
    addKeys(value: string, index?: number): string;
    getRegexInclude(): string;
    setRegexInclude(value: string): DeleteUserPreferencesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteUserPreferencesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteUserPreferencesRequest): DeleteUserPreferencesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteUserPreferencesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteUserPreferencesRequest;
    static deserializeBinaryFromReader(message: DeleteUserPreferencesRequest, reader: jspb.BinaryReader): DeleteUserPreferencesRequest;
}

export namespace DeleteUserPreferencesRequest {
    export type AsObject = {
        userName: string,
        keysList: Array<string>,
        regexInclude: string,
    }
}

export class DeleteUserPreferencesResponse extends jspb.Message { 
    getUserName(): string;
    setUserName(value: string): DeleteUserPreferencesResponse;
    clearKeysList(): void;
    getKeysList(): Array<string>;
    setKeysList(value: Array<string>): DeleteUserPreferencesResponse;
    addKeys(value: string, index?: number): string;
    getErrorMessage(): string;
    setErrorMessage(value: string): DeleteUserPreferencesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteUserPreferencesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteUserPreferencesResponse): DeleteUserPreferencesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteUserPreferencesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteUserPreferencesResponse;
    static deserializeBinaryFromReader(message: DeleteUserPreferencesResponse, reader: jspb.BinaryReader): DeleteUserPreferencesResponse;
}

export namespace DeleteUserPreferencesResponse {
    export type AsObject = {
        userName: string,
        keysList: Array<string>,
        errorMessage: string,
    }
}

export class DeleteAllUserPreferencesRequest extends jspb.Message { 
    getUserName(): string;
    setUserName(value: string): DeleteAllUserPreferencesRequest;
    getRegexFilter(): string;
    setRegexFilter(value: string): DeleteAllUserPreferencesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteAllUserPreferencesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteAllUserPreferencesRequest): DeleteAllUserPreferencesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteAllUserPreferencesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteAllUserPreferencesRequest;
    static deserializeBinaryFromReader(message: DeleteAllUserPreferencesRequest, reader: jspb.BinaryReader): DeleteAllUserPreferencesRequest;
}

export namespace DeleteAllUserPreferencesRequest {
    export type AsObject = {
        userName: string,
        regexFilter: string,
    }
}

export class ListUserPreferencesRequest extends jspb.Message { 
    getUserName(): string;
    setUserName(value: string): ListUserPreferencesRequest;
    getRegexFilter(): string;
    setRegexFilter(value: string): ListUserPreferencesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListUserPreferencesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListUserPreferencesRequest): ListUserPreferencesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListUserPreferencesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListUserPreferencesRequest;
    static deserializeBinaryFromReader(message: ListUserPreferencesRequest, reader: jspb.BinaryReader): ListUserPreferencesRequest;
}

export namespace ListUserPreferencesRequest {
    export type AsObject = {
        userName: string,
        regexFilter: string,
    }
}

export class ListUserPreferencesResponse extends jspb.Message { 
    getUserName(): string;
    setUserName(value: string): ListUserPreferencesResponse;
    clearKeyValuePairsList(): void;
    getKeyValuePairsList(): Array<ondewo_nlu_common_pb.KeyValuePair>;
    setKeyValuePairsList(value: Array<ondewo_nlu_common_pb.KeyValuePair>): ListUserPreferencesResponse;
    addKeyValuePairs(value?: ondewo_nlu_common_pb.KeyValuePair, index?: number): ondewo_nlu_common_pb.KeyValuePair;
    getErrorMessage(): string;
    setErrorMessage(value: string): ListUserPreferencesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListUserPreferencesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListUserPreferencesResponse): ListUserPreferencesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListUserPreferencesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListUserPreferencesResponse;
    static deserializeBinaryFromReader(message: ListUserPreferencesResponse, reader: jspb.BinaryReader): ListUserPreferencesResponse;
}

export namespace ListUserPreferencesResponse {
    export type AsObject = {
        userName: string,
        keyValuePairsList: Array<ondewo_nlu_common_pb.KeyValuePair.AsObject>,
        errorMessage: string,
    }
}

export enum DefaultServerRole {
    SERVER_UNSPECIFIED = 0,
    SERVER_USER = 1,
    SERVER_MANAGER = 2,
    SERVER_ADMIN = 3,
    SERVER_INACTIVE = 4,
}
