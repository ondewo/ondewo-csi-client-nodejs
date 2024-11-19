// package: ondewo.nlu
// file: ondewo/nlu/ccai_project.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ondewo_nlu_ccai_project_pb from "../../ondewo/nlu/ccai_project_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ondewo_nlu_common_pb from "../../ondewo/nlu/common_pb";

interface ICcaiProjectsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getCcaiProject: ICcaiProjectsService_IGetCcaiProject;
    createCcaiProject: ICcaiProjectsService_ICreateCcaiProject;
    deleteCcaiProject: ICcaiProjectsService_IDeleteCcaiProject;
    listCcaiProjects: ICcaiProjectsService_IListCcaiProjects;
    updateCcaiProject: ICcaiProjectsService_IUpdateCcaiProject;
    getCcaiService: ICcaiProjectsService_IGetCcaiService;
}

interface ICcaiProjectsService_IGetCcaiProject extends grpc.MethodDefinition<ondewo_nlu_ccai_project_pb.GetCcaiProjectRequest, ondewo_nlu_ccai_project_pb.CcaiProject> {
    path: "/ondewo.nlu.CcaiProjects/GetCcaiProject";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_ccai_project_pb.GetCcaiProjectRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_ccai_project_pb.GetCcaiProjectRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_ccai_project_pb.CcaiProject>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_ccai_project_pb.CcaiProject>;
}
interface ICcaiProjectsService_ICreateCcaiProject extends grpc.MethodDefinition<ondewo_nlu_ccai_project_pb.CreateCcaiProjectRequest, ondewo_nlu_ccai_project_pb.CreateCcaiProjectResponse> {
    path: "/ondewo.nlu.CcaiProjects/CreateCcaiProject";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_ccai_project_pb.CreateCcaiProjectRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_ccai_project_pb.CreateCcaiProjectRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_ccai_project_pb.CreateCcaiProjectResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_ccai_project_pb.CreateCcaiProjectResponse>;
}
interface ICcaiProjectsService_IDeleteCcaiProject extends grpc.MethodDefinition<ondewo_nlu_ccai_project_pb.DeleteCcaiProjectRequest, ondewo_nlu_ccai_project_pb.DeleteCcaiProjectResponse> {
    path: "/ondewo.nlu.CcaiProjects/DeleteCcaiProject";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_ccai_project_pb.DeleteCcaiProjectRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_ccai_project_pb.DeleteCcaiProjectRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_ccai_project_pb.DeleteCcaiProjectResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_ccai_project_pb.DeleteCcaiProjectResponse>;
}
interface ICcaiProjectsService_IListCcaiProjects extends grpc.MethodDefinition<ondewo_nlu_ccai_project_pb.ListCcaiProjectsRequest, ondewo_nlu_ccai_project_pb.ListCcaiProjectsResponse> {
    path: "/ondewo.nlu.CcaiProjects/ListCcaiProjects";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_ccai_project_pb.ListCcaiProjectsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_ccai_project_pb.ListCcaiProjectsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_ccai_project_pb.ListCcaiProjectsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_ccai_project_pb.ListCcaiProjectsResponse>;
}
interface ICcaiProjectsService_IUpdateCcaiProject extends grpc.MethodDefinition<ondewo_nlu_ccai_project_pb.UpdateCcaiProjectRequest, ondewo_nlu_ccai_project_pb.UpdateCcaiProjectResponse> {
    path: "/ondewo.nlu.CcaiProjects/UpdateCcaiProject";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_ccai_project_pb.UpdateCcaiProjectRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_ccai_project_pb.UpdateCcaiProjectRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_ccai_project_pb.UpdateCcaiProjectResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_ccai_project_pb.UpdateCcaiProjectResponse>;
}
interface ICcaiProjectsService_IGetCcaiService extends grpc.MethodDefinition<ondewo_nlu_ccai_project_pb.GetCcaiServiceRequest, ondewo_nlu_ccai_project_pb.CcaiService> {
    path: "/ondewo.nlu.CcaiProjects/GetCcaiService";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_ccai_project_pb.GetCcaiServiceRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_ccai_project_pb.GetCcaiServiceRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_ccai_project_pb.CcaiService>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_ccai_project_pb.CcaiService>;
}

export const CcaiProjectsService: ICcaiProjectsService;

export interface ICcaiProjectsServer {
    getCcaiProject: grpc.handleUnaryCall<ondewo_nlu_ccai_project_pb.GetCcaiProjectRequest, ondewo_nlu_ccai_project_pb.CcaiProject>;
    createCcaiProject: grpc.handleUnaryCall<ondewo_nlu_ccai_project_pb.CreateCcaiProjectRequest, ondewo_nlu_ccai_project_pb.CreateCcaiProjectResponse>;
    deleteCcaiProject: grpc.handleUnaryCall<ondewo_nlu_ccai_project_pb.DeleteCcaiProjectRequest, ondewo_nlu_ccai_project_pb.DeleteCcaiProjectResponse>;
    listCcaiProjects: grpc.handleUnaryCall<ondewo_nlu_ccai_project_pb.ListCcaiProjectsRequest, ondewo_nlu_ccai_project_pb.ListCcaiProjectsResponse>;
    updateCcaiProject: grpc.handleUnaryCall<ondewo_nlu_ccai_project_pb.UpdateCcaiProjectRequest, ondewo_nlu_ccai_project_pb.UpdateCcaiProjectResponse>;
    getCcaiService: grpc.handleUnaryCall<ondewo_nlu_ccai_project_pb.GetCcaiServiceRequest, ondewo_nlu_ccai_project_pb.CcaiService>;
}

export interface ICcaiProjectsClient {
    getCcaiProject(request: ondewo_nlu_ccai_project_pb.GetCcaiProjectRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_ccai_project_pb.CcaiProject) => void): grpc.ClientUnaryCall;
    getCcaiProject(request: ondewo_nlu_ccai_project_pb.GetCcaiProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_ccai_project_pb.CcaiProject) => void): grpc.ClientUnaryCall;
    getCcaiProject(request: ondewo_nlu_ccai_project_pb.GetCcaiProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_ccai_project_pb.CcaiProject) => void): grpc.ClientUnaryCall;
    createCcaiProject(request: ondewo_nlu_ccai_project_pb.CreateCcaiProjectRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_ccai_project_pb.CreateCcaiProjectResponse) => void): grpc.ClientUnaryCall;
    createCcaiProject(request: ondewo_nlu_ccai_project_pb.CreateCcaiProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_ccai_project_pb.CreateCcaiProjectResponse) => void): grpc.ClientUnaryCall;
    createCcaiProject(request: ondewo_nlu_ccai_project_pb.CreateCcaiProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_ccai_project_pb.CreateCcaiProjectResponse) => void): grpc.ClientUnaryCall;
    deleteCcaiProject(request: ondewo_nlu_ccai_project_pb.DeleteCcaiProjectRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_ccai_project_pb.DeleteCcaiProjectResponse) => void): grpc.ClientUnaryCall;
    deleteCcaiProject(request: ondewo_nlu_ccai_project_pb.DeleteCcaiProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_ccai_project_pb.DeleteCcaiProjectResponse) => void): grpc.ClientUnaryCall;
    deleteCcaiProject(request: ondewo_nlu_ccai_project_pb.DeleteCcaiProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_ccai_project_pb.DeleteCcaiProjectResponse) => void): grpc.ClientUnaryCall;
    listCcaiProjects(request: ondewo_nlu_ccai_project_pb.ListCcaiProjectsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_ccai_project_pb.ListCcaiProjectsResponse) => void): grpc.ClientUnaryCall;
    listCcaiProjects(request: ondewo_nlu_ccai_project_pb.ListCcaiProjectsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_ccai_project_pb.ListCcaiProjectsResponse) => void): grpc.ClientUnaryCall;
    listCcaiProjects(request: ondewo_nlu_ccai_project_pb.ListCcaiProjectsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_ccai_project_pb.ListCcaiProjectsResponse) => void): grpc.ClientUnaryCall;
    updateCcaiProject(request: ondewo_nlu_ccai_project_pb.UpdateCcaiProjectRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_ccai_project_pb.UpdateCcaiProjectResponse) => void): grpc.ClientUnaryCall;
    updateCcaiProject(request: ondewo_nlu_ccai_project_pb.UpdateCcaiProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_ccai_project_pb.UpdateCcaiProjectResponse) => void): grpc.ClientUnaryCall;
    updateCcaiProject(request: ondewo_nlu_ccai_project_pb.UpdateCcaiProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_ccai_project_pb.UpdateCcaiProjectResponse) => void): grpc.ClientUnaryCall;
    getCcaiService(request: ondewo_nlu_ccai_project_pb.GetCcaiServiceRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_ccai_project_pb.CcaiService) => void): grpc.ClientUnaryCall;
    getCcaiService(request: ondewo_nlu_ccai_project_pb.GetCcaiServiceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_ccai_project_pb.CcaiService) => void): grpc.ClientUnaryCall;
    getCcaiService(request: ondewo_nlu_ccai_project_pb.GetCcaiServiceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_ccai_project_pb.CcaiService) => void): grpc.ClientUnaryCall;
}

export class CcaiProjectsClient extends grpc.Client implements ICcaiProjectsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getCcaiProject(request: ondewo_nlu_ccai_project_pb.GetCcaiProjectRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_ccai_project_pb.CcaiProject) => void): grpc.ClientUnaryCall;
    public getCcaiProject(request: ondewo_nlu_ccai_project_pb.GetCcaiProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_ccai_project_pb.CcaiProject) => void): grpc.ClientUnaryCall;
    public getCcaiProject(request: ondewo_nlu_ccai_project_pb.GetCcaiProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_ccai_project_pb.CcaiProject) => void): grpc.ClientUnaryCall;
    public createCcaiProject(request: ondewo_nlu_ccai_project_pb.CreateCcaiProjectRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_ccai_project_pb.CreateCcaiProjectResponse) => void): grpc.ClientUnaryCall;
    public createCcaiProject(request: ondewo_nlu_ccai_project_pb.CreateCcaiProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_ccai_project_pb.CreateCcaiProjectResponse) => void): grpc.ClientUnaryCall;
    public createCcaiProject(request: ondewo_nlu_ccai_project_pb.CreateCcaiProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_ccai_project_pb.CreateCcaiProjectResponse) => void): grpc.ClientUnaryCall;
    public deleteCcaiProject(request: ondewo_nlu_ccai_project_pb.DeleteCcaiProjectRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_ccai_project_pb.DeleteCcaiProjectResponse) => void): grpc.ClientUnaryCall;
    public deleteCcaiProject(request: ondewo_nlu_ccai_project_pb.DeleteCcaiProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_ccai_project_pb.DeleteCcaiProjectResponse) => void): grpc.ClientUnaryCall;
    public deleteCcaiProject(request: ondewo_nlu_ccai_project_pb.DeleteCcaiProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_ccai_project_pb.DeleteCcaiProjectResponse) => void): grpc.ClientUnaryCall;
    public listCcaiProjects(request: ondewo_nlu_ccai_project_pb.ListCcaiProjectsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_ccai_project_pb.ListCcaiProjectsResponse) => void): grpc.ClientUnaryCall;
    public listCcaiProjects(request: ondewo_nlu_ccai_project_pb.ListCcaiProjectsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_ccai_project_pb.ListCcaiProjectsResponse) => void): grpc.ClientUnaryCall;
    public listCcaiProjects(request: ondewo_nlu_ccai_project_pb.ListCcaiProjectsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_ccai_project_pb.ListCcaiProjectsResponse) => void): grpc.ClientUnaryCall;
    public updateCcaiProject(request: ondewo_nlu_ccai_project_pb.UpdateCcaiProjectRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_ccai_project_pb.UpdateCcaiProjectResponse) => void): grpc.ClientUnaryCall;
    public updateCcaiProject(request: ondewo_nlu_ccai_project_pb.UpdateCcaiProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_ccai_project_pb.UpdateCcaiProjectResponse) => void): grpc.ClientUnaryCall;
    public updateCcaiProject(request: ondewo_nlu_ccai_project_pb.UpdateCcaiProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_ccai_project_pb.UpdateCcaiProjectResponse) => void): grpc.ClientUnaryCall;
    public getCcaiService(request: ondewo_nlu_ccai_project_pb.GetCcaiServiceRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_ccai_project_pb.CcaiService) => void): grpc.ClientUnaryCall;
    public getCcaiService(request: ondewo_nlu_ccai_project_pb.GetCcaiServiceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_ccai_project_pb.CcaiService) => void): grpc.ClientUnaryCall;
    public getCcaiService(request: ondewo_nlu_ccai_project_pb.GetCcaiServiceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_ccai_project_pb.CcaiService) => void): grpc.ClientUnaryCall;
}
