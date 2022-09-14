// package: ondewo.nlu
// file: ondewo/nlu/project_role.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from 'grpc';
import * as ondewo_nlu_project_role_pb from '../../ondewo/nlu/project_role_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

interface IProjectRolesService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
	createProjectRole: IProjectRolesService_ICreateProjectRole;
	getProjectRole: IProjectRolesService_IGetProjectRole;
	deleteProjectRole: IProjectRolesService_IDeleteProjectRole;
	updateProjectRole: IProjectRolesService_IUpdateProjectRole;
	listProjectRoles: IProjectRolesService_IListProjectRoles;
}

interface IProjectRolesService_ICreateProjectRole
	extends grpc.MethodDefinition<
		ondewo_nlu_project_role_pb.CreateProjectRoleRequest,
		ondewo_nlu_project_role_pb.ProjectRole
	> {
	path: '/ondewo.nlu.ProjectRoles/CreateProjectRole';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_project_role_pb.CreateProjectRoleRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_project_role_pb.CreateProjectRoleRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_project_role_pb.ProjectRole>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_project_role_pb.ProjectRole>;
}
interface IProjectRolesService_IGetProjectRole
	extends grpc.MethodDefinition<
		ondewo_nlu_project_role_pb.GetProjectRoleRequest,
		ondewo_nlu_project_role_pb.ProjectRole
	> {
	path: '/ondewo.nlu.ProjectRoles/GetProjectRole';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_project_role_pb.GetProjectRoleRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_project_role_pb.GetProjectRoleRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_project_role_pb.ProjectRole>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_project_role_pb.ProjectRole>;
}
interface IProjectRolesService_IDeleteProjectRole
	extends grpc.MethodDefinition<ondewo_nlu_project_role_pb.DeleteProjectRoleRequest, google_protobuf_empty_pb.Empty> {
	path: '/ondewo.nlu.ProjectRoles/DeleteProjectRole';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_project_role_pb.DeleteProjectRoleRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_project_role_pb.DeleteProjectRoleRequest>;
	responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
	responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IProjectRolesService_IUpdateProjectRole
	extends grpc.MethodDefinition<
		ondewo_nlu_project_role_pb.UpdateProjectRoleRequest,
		ondewo_nlu_project_role_pb.ProjectRole
	> {
	path: '/ondewo.nlu.ProjectRoles/UpdateProjectRole';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_project_role_pb.UpdateProjectRoleRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_project_role_pb.UpdateProjectRoleRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_project_role_pb.ProjectRole>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_project_role_pb.ProjectRole>;
}
interface IProjectRolesService_IListProjectRoles
	extends grpc.MethodDefinition<
		ondewo_nlu_project_role_pb.ListProjectRolesRequest,
		ondewo_nlu_project_role_pb.ListProjectRolesResponse
	> {
	path: '/ondewo.nlu.ProjectRoles/ListProjectRoles';
	requestStream: false;
	responseStream: false;
	requestSerialize: grpc.serialize<ondewo_nlu_project_role_pb.ListProjectRolesRequest>;
	requestDeserialize: grpc.deserialize<ondewo_nlu_project_role_pb.ListProjectRolesRequest>;
	responseSerialize: grpc.serialize<ondewo_nlu_project_role_pb.ListProjectRolesResponse>;
	responseDeserialize: grpc.deserialize<ondewo_nlu_project_role_pb.ListProjectRolesResponse>;
}

export const ProjectRolesService: IProjectRolesService;

export interface IProjectRolesServer {
	createProjectRole: grpc.handleUnaryCall<
		ondewo_nlu_project_role_pb.CreateProjectRoleRequest,
		ondewo_nlu_project_role_pb.ProjectRole
	>;
	getProjectRole: grpc.handleUnaryCall<
		ondewo_nlu_project_role_pb.GetProjectRoleRequest,
		ondewo_nlu_project_role_pb.ProjectRole
	>;
	deleteProjectRole: grpc.handleUnaryCall<
		ondewo_nlu_project_role_pb.DeleteProjectRoleRequest,
		google_protobuf_empty_pb.Empty
	>;
	updateProjectRole: grpc.handleUnaryCall<
		ondewo_nlu_project_role_pb.UpdateProjectRoleRequest,
		ondewo_nlu_project_role_pb.ProjectRole
	>;
	listProjectRoles: grpc.handleUnaryCall<
		ondewo_nlu_project_role_pb.ListProjectRolesRequest,
		ondewo_nlu_project_role_pb.ListProjectRolesResponse
	>;
}

export interface IProjectRolesClient {
	createProjectRole(
		request: ondewo_nlu_project_role_pb.CreateProjectRoleRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_project_role_pb.ProjectRole) => void
	): grpc.ClientUnaryCall;
	createProjectRole(
		request: ondewo_nlu_project_role_pb.CreateProjectRoleRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_project_role_pb.ProjectRole) => void
	): grpc.ClientUnaryCall;
	createProjectRole(
		request: ondewo_nlu_project_role_pb.CreateProjectRoleRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_project_role_pb.ProjectRole) => void
	): grpc.ClientUnaryCall;
	getProjectRole(
		request: ondewo_nlu_project_role_pb.GetProjectRoleRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_project_role_pb.ProjectRole) => void
	): grpc.ClientUnaryCall;
	getProjectRole(
		request: ondewo_nlu_project_role_pb.GetProjectRoleRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_project_role_pb.ProjectRole) => void
	): grpc.ClientUnaryCall;
	getProjectRole(
		request: ondewo_nlu_project_role_pb.GetProjectRoleRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_project_role_pb.ProjectRole) => void
	): grpc.ClientUnaryCall;
	deleteProjectRole(
		request: ondewo_nlu_project_role_pb.DeleteProjectRoleRequest,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	deleteProjectRole(
		request: ondewo_nlu_project_role_pb.DeleteProjectRoleRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	deleteProjectRole(
		request: ondewo_nlu_project_role_pb.DeleteProjectRoleRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	updateProjectRole(
		request: ondewo_nlu_project_role_pb.UpdateProjectRoleRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_project_role_pb.ProjectRole) => void
	): grpc.ClientUnaryCall;
	updateProjectRole(
		request: ondewo_nlu_project_role_pb.UpdateProjectRoleRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_project_role_pb.ProjectRole) => void
	): grpc.ClientUnaryCall;
	updateProjectRole(
		request: ondewo_nlu_project_role_pb.UpdateProjectRoleRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_project_role_pb.ProjectRole) => void
	): grpc.ClientUnaryCall;
	listProjectRoles(
		request: ondewo_nlu_project_role_pb.ListProjectRolesRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_project_role_pb.ListProjectRolesResponse) => void
	): grpc.ClientUnaryCall;
	listProjectRoles(
		request: ondewo_nlu_project_role_pb.ListProjectRolesRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_project_role_pb.ListProjectRolesResponse) => void
	): grpc.ClientUnaryCall;
	listProjectRoles(
		request: ondewo_nlu_project_role_pb.ListProjectRolesRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_project_role_pb.ListProjectRolesResponse) => void
	): grpc.ClientUnaryCall;
}

export class ProjectRolesClient extends grpc.Client implements IProjectRolesClient {
	constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
	public createProjectRole(
		request: ondewo_nlu_project_role_pb.CreateProjectRoleRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_project_role_pb.ProjectRole) => void
	): grpc.ClientUnaryCall;
	public createProjectRole(
		request: ondewo_nlu_project_role_pb.CreateProjectRoleRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_project_role_pb.ProjectRole) => void
	): grpc.ClientUnaryCall;
	public createProjectRole(
		request: ondewo_nlu_project_role_pb.CreateProjectRoleRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_project_role_pb.ProjectRole) => void
	): grpc.ClientUnaryCall;
	public getProjectRole(
		request: ondewo_nlu_project_role_pb.GetProjectRoleRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_project_role_pb.ProjectRole) => void
	): grpc.ClientUnaryCall;
	public getProjectRole(
		request: ondewo_nlu_project_role_pb.GetProjectRoleRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_project_role_pb.ProjectRole) => void
	): grpc.ClientUnaryCall;
	public getProjectRole(
		request: ondewo_nlu_project_role_pb.GetProjectRoleRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_project_role_pb.ProjectRole) => void
	): grpc.ClientUnaryCall;
	public deleteProjectRole(
		request: ondewo_nlu_project_role_pb.DeleteProjectRoleRequest,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	public deleteProjectRole(
		request: ondewo_nlu_project_role_pb.DeleteProjectRoleRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	public deleteProjectRole(
		request: ondewo_nlu_project_role_pb.DeleteProjectRoleRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void
	): grpc.ClientUnaryCall;
	public updateProjectRole(
		request: ondewo_nlu_project_role_pb.UpdateProjectRoleRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_project_role_pb.ProjectRole) => void
	): grpc.ClientUnaryCall;
	public updateProjectRole(
		request: ondewo_nlu_project_role_pb.UpdateProjectRoleRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_project_role_pb.ProjectRole) => void
	): grpc.ClientUnaryCall;
	public updateProjectRole(
		request: ondewo_nlu_project_role_pb.UpdateProjectRoleRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_project_role_pb.ProjectRole) => void
	): grpc.ClientUnaryCall;
	public listProjectRoles(
		request: ondewo_nlu_project_role_pb.ListProjectRolesRequest,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_project_role_pb.ListProjectRolesResponse) => void
	): grpc.ClientUnaryCall;
	public listProjectRoles(
		request: ondewo_nlu_project_role_pb.ListProjectRolesRequest,
		metadata: grpc.Metadata,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_project_role_pb.ListProjectRolesResponse) => void
	): grpc.ClientUnaryCall;
	public listProjectRoles(
		request: ondewo_nlu_project_role_pb.ListProjectRolesRequest,
		metadata: grpc.Metadata,
		options: Partial<grpc.CallOptions>,
		callback: (error: grpc.ServiceError | null, response: ondewo_nlu_project_role_pb.ListProjectRolesResponse) => void
	): grpc.ClientUnaryCall;
}
