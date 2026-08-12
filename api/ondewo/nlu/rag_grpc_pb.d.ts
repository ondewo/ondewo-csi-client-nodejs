// package: ondewo.nlu
// file: ondewo/nlu/rag.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ondewo_nlu_rag_pb from "../../ondewo/nlu/rag_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ondewo_nlu_common_pb from "../../ondewo/nlu/common_pb";
import * as ondewo_nlu_operation_metadata_pb from "../../ondewo/nlu/operation_metadata_pb";
import * as ondewo_nlu_operations_pb from "../../ondewo/nlu/operations_pb";
import * as ondewo_nlu_session_pb from "../../ondewo/nlu/session_pb";

interface IRagsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    ragCreateDataset: IRagsService_IRagCreateDataset;
    ragUpdateDataset: IRagsService_IRagUpdateDataset;
    ragDeleteDatasets: IRagsService_IRagDeleteDatasets;
    ragListDatasets: IRagsService_IRagListDatasets;
    ragUploadDocument: IRagsService_IRagUploadDocument;
    ragUpdateDocument: IRagsService_IRagUpdateDocument;
    ragDownloadDocument: IRagsService_IRagDownloadDocument;
    ragListDocuments: IRagsService_IRagListDocuments;
    ragDeleteDocuments: IRagsService_IRagDeleteDocuments;
    ragRetrieval: IRagsService_IRagRetrieval;
    ragParseDocuments: IRagsService_IRagParseDocuments;
    ragStopParsing: IRagsService_IRagStopParsing;
    ragCreateCrawler: IRagsService_IRagCreateCrawler;
    ragGetCrawler: IRagsService_IRagGetCrawler;
    ragListCrawlers: IRagsService_IRagListCrawlers;
    ragUpdateCrawler: IRagsService_IRagUpdateCrawler;
    ragDeleteCrawler: IRagsService_IRagDeleteCrawler;
    ragStartCrawler: IRagsService_IRagStartCrawler;
    ragStopCrawler: IRagsService_IRagStopCrawler;
    ragGetCrawlerRun: IRagsService_IRagGetCrawlerRun;
    ragListCrawlerRuns: IRagsService_IRagListCrawlerRuns;
    ragDeleteCrawlerRuns: IRagsService_IRagDeleteCrawlerRuns;
    ragGetCrawlerResult: IRagsService_IRagGetCrawlerResult;
    ragGetCrawlerResults: IRagsService_IRagGetCrawlerResults;
    ragAddCrawlerResultsToDatasets: IRagsService_IRagAddCrawlerResultsToDatasets;
    ragRemoveCrawlerResultsFromDatasets: IRagsService_IRagRemoveCrawlerResultsFromDatasets;
    ragGetCrawlerAttachedDatasets: IRagsService_IRagGetCrawlerAttachedDatasets;
    ragDeleteCrawlers: IRagsService_IRagDeleteCrawlers;
    ragGetCrawlerRunLogs: IRagsService_IRagGetCrawlerRunLogs;
}

interface IRagsService_IRagCreateDataset extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagCreateDatasetRequest, ondewo_nlu_rag_pb.RagDataset> {
    path: "/ondewo.nlu.Rags/RagCreateDataset";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagCreateDatasetRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagCreateDatasetRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDataset>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDataset>;
}
interface IRagsService_IRagUpdateDataset extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagUpdateDatasetRequest, ondewo_nlu_rag_pb.RagDataset> {
    path: "/ondewo.nlu.Rags/RagUpdateDataset";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagUpdateDatasetRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagUpdateDatasetRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDataset>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDataset>;
}
interface IRagsService_IRagDeleteDatasets extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagDeleteRequest, ondewo_nlu_rag_pb.RagPartialSuccess> {
    path: "/ondewo.nlu.Rags/RagDeleteDatasets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDeleteRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDeleteRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagPartialSuccess>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagPartialSuccess>;
}
interface IRagsService_IRagListDatasets extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagListDatasetsRequest, ondewo_nlu_rag_pb.RagDatasetList> {
    path: "/ondewo.nlu.Rags/RagListDatasets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagListDatasetsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagListDatasetsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDatasetList>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDatasetList>;
}
interface IRagsService_IRagUploadDocument extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagUploadDocumentRequest, ondewo_nlu_rag_pb.RagDocument> {
    path: "/ondewo.nlu.Rags/RagUploadDocument";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagUploadDocumentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagUploadDocumentRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDocument>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDocument>;
}
interface IRagsService_IRagUpdateDocument extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagUpdateDocumentRequest, ondewo_nlu_rag_pb.RagDocument> {
    path: "/ondewo.nlu.Rags/RagUpdateDocument";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagUpdateDocumentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagUpdateDocumentRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDocument>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDocument>;
}
interface IRagsService_IRagDownloadDocument extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagDownloadDocumentRequest, ondewo_nlu_rag_pb.RagFileChunk> {
    path: "/ondewo.nlu.Rags/RagDownloadDocument";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDownloadDocumentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDownloadDocumentRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagFileChunk>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagFileChunk>;
}
interface IRagsService_IRagListDocuments extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagListDocumentsRequest, ondewo_nlu_rag_pb.RagDocumentList> {
    path: "/ondewo.nlu.Rags/RagListDocuments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagListDocumentsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagListDocumentsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDocumentList>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDocumentList>;
}
interface IRagsService_IRagDeleteDocuments extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagDeleteDocumentsRequest, ondewo_nlu_rag_pb.RagPartialSuccess> {
    path: "/ondewo.nlu.Rags/RagDeleteDocuments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDeleteDocumentsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDeleteDocumentsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagPartialSuccess>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagPartialSuccess>;
}
interface IRagsService_IRagRetrieval extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagRetrievalRequest, ondewo_nlu_rag_pb.RagRetrievalResponse> {
    path: "/ondewo.nlu.Rags/RagRetrieval";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagRetrievalRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagRetrievalRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagRetrievalResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagRetrievalResponse>;
}
interface IRagsService_IRagParseDocuments extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagDocumentIdsRequest, ondewo_nlu_rag_pb.RagPartialSuccess> {
    path: "/ondewo.nlu.Rags/RagParseDocuments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDocumentIdsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDocumentIdsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagPartialSuccess>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagPartialSuccess>;
}
interface IRagsService_IRagStopParsing extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagDocumentIdsRequest, ondewo_nlu_rag_pb.RagPartialSuccess> {
    path: "/ondewo.nlu.Rags/RagStopParsing";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDocumentIdsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDocumentIdsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagPartialSuccess>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagPartialSuccess>;
}
interface IRagsService_IRagCreateCrawler extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagCreateCrawlerRequest, ondewo_nlu_rag_pb.RagCrawler> {
    path: "/ondewo.nlu.Rags/RagCreateCrawler";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagCreateCrawlerRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagCreateCrawlerRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagCrawler>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagCrawler>;
}
interface IRagsService_IRagGetCrawler extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagGetCrawlerRequest, ondewo_nlu_rag_pb.RagCrawler> {
    path: "/ondewo.nlu.Rags/RagGetCrawler";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagGetCrawlerRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagGetCrawlerRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagCrawler>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagCrawler>;
}
interface IRagsService_IRagListCrawlers extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagListCrawlersRequest, ondewo_nlu_rag_pb.RagListCrawlersResponse> {
    path: "/ondewo.nlu.Rags/RagListCrawlers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagListCrawlersRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagListCrawlersRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagListCrawlersResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagListCrawlersResponse>;
}
interface IRagsService_IRagUpdateCrawler extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagUpdateCrawlerRequest, ondewo_nlu_rag_pb.RagCrawler> {
    path: "/ondewo.nlu.Rags/RagUpdateCrawler";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagUpdateCrawlerRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagUpdateCrawlerRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagCrawler>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagCrawler>;
}
interface IRagsService_IRagDeleteCrawler extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagDeleteCrawlerRequest, ondewo_nlu_rag_pb.RagDeleteCrawlerResponse> {
    path: "/ondewo.nlu.Rags/RagDeleteCrawler";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDeleteCrawlerRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDeleteCrawlerRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDeleteCrawlerResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDeleteCrawlerResponse>;
}
interface IRagsService_IRagStartCrawler extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagStartCrawlerRequest, ondewo_nlu_operations_pb.Operation> {
    path: "/ondewo.nlu.Rags/RagStartCrawler";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagStartCrawlerRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagStartCrawlerRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_operations_pb.Operation>;
}
interface IRagsService_IRagStopCrawler extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagStopCrawlerRequest, ondewo_nlu_rag_pb.RagStopCrawlerResponse> {
    path: "/ondewo.nlu.Rags/RagStopCrawler";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagStopCrawlerRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagStopCrawlerRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagStopCrawlerResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagStopCrawlerResponse>;
}
interface IRagsService_IRagGetCrawlerRun extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagGetCrawlerRunRequest, ondewo_nlu_operations_pb.Operation> {
    path: "/ondewo.nlu.Rags/RagGetCrawlerRun";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagGetCrawlerRunRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagGetCrawlerRunRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_operations_pb.Operation>;
}
interface IRagsService_IRagListCrawlerRuns extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagListCrawlerRunsRequest, ondewo_nlu_rag_pb.RagListCrawlerRunsResponse> {
    path: "/ondewo.nlu.Rags/RagListCrawlerRuns";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagListCrawlerRunsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagListCrawlerRunsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagListCrawlerRunsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagListCrawlerRunsResponse>;
}
interface IRagsService_IRagDeleteCrawlerRuns extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagDeleteCrawlerRunsRequest, ondewo_nlu_rag_pb.RagDeleteCrawlerRunsResponse> {
    path: "/ondewo.nlu.Rags/RagDeleteCrawlerRuns";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDeleteCrawlerRunsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDeleteCrawlerRunsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDeleteCrawlerRunsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDeleteCrawlerRunsResponse>;
}
interface IRagsService_IRagGetCrawlerResult extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagGetCrawlerResultRequest, ondewo_nlu_rag_pb.RagCrawlerResult> {
    path: "/ondewo.nlu.Rags/RagGetCrawlerResult";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagGetCrawlerResultRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagGetCrawlerResultRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagCrawlerResult>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagCrawlerResult>;
}
interface IRagsService_IRagGetCrawlerResults extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagGetCrawlerResultsRequest, ondewo_nlu_rag_pb.RagGetCrawlerResultsResponse> {
    path: "/ondewo.nlu.Rags/RagGetCrawlerResults";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagGetCrawlerResultsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagGetCrawlerResultsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagGetCrawlerResultsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagGetCrawlerResultsResponse>;
}
interface IRagsService_IRagAddCrawlerResultsToDatasets extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagAddCrawlerResultsToDatasetsRequest, ondewo_nlu_operations_pb.Operation> {
    path: "/ondewo.nlu.Rags/RagAddCrawlerResultsToDatasets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagAddCrawlerResultsToDatasetsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagAddCrawlerResultsToDatasetsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_operations_pb.Operation>;
}
interface IRagsService_IRagRemoveCrawlerResultsFromDatasets extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagRemoveCrawlerResultsFromDatasetsRequest, ondewo_nlu_operations_pb.Operation> {
    path: "/ondewo.nlu.Rags/RagRemoveCrawlerResultsFromDatasets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagRemoveCrawlerResultsFromDatasetsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagRemoveCrawlerResultsFromDatasetsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_operations_pb.Operation>;
}
interface IRagsService_IRagGetCrawlerAttachedDatasets extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsRequest, ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsResponse> {
    path: "/ondewo.nlu.Rags/RagGetCrawlerAttachedDatasets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsResponse>;
}
interface IRagsService_IRagDeleteCrawlers extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagDeleteCrawlersRequest, ondewo_nlu_rag_pb.RagDeleteCrawlersResponse> {
    path: "/ondewo.nlu.Rags/RagDeleteCrawlers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDeleteCrawlersRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDeleteCrawlersRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagDeleteCrawlersResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagDeleteCrawlersResponse>;
}
interface IRagsService_IRagGetCrawlerRunLogs extends grpc.MethodDefinition<ondewo_nlu_rag_pb.RagGetCrawlerRunLogsRequest, ondewo_nlu_rag_pb.RagGetCrawlerRunLogsResponse> {
    path: "/ondewo.nlu.Rags/RagGetCrawlerRunLogs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagGetCrawlerRunLogsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagGetCrawlerRunLogsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_rag_pb.RagGetCrawlerRunLogsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_rag_pb.RagGetCrawlerRunLogsResponse>;
}

export const RagsService: IRagsService;

export interface IRagsServer {
    ragCreateDataset: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagCreateDatasetRequest, ondewo_nlu_rag_pb.RagDataset>;
    ragUpdateDataset: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagUpdateDatasetRequest, ondewo_nlu_rag_pb.RagDataset>;
    ragDeleteDatasets: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagDeleteRequest, ondewo_nlu_rag_pb.RagPartialSuccess>;
    ragListDatasets: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagListDatasetsRequest, ondewo_nlu_rag_pb.RagDatasetList>;
    ragUploadDocument: grpc.handleClientStreamingCall<ondewo_nlu_rag_pb.RagUploadDocumentRequest, ondewo_nlu_rag_pb.RagDocument>;
    ragUpdateDocument: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagUpdateDocumentRequest, ondewo_nlu_rag_pb.RagDocument>;
    ragDownloadDocument: grpc.handleServerStreamingCall<ondewo_nlu_rag_pb.RagDownloadDocumentRequest, ondewo_nlu_rag_pb.RagFileChunk>;
    ragListDocuments: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagListDocumentsRequest, ondewo_nlu_rag_pb.RagDocumentList>;
    ragDeleteDocuments: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagDeleteDocumentsRequest, ondewo_nlu_rag_pb.RagPartialSuccess>;
    ragRetrieval: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagRetrievalRequest, ondewo_nlu_rag_pb.RagRetrievalResponse>;
    ragParseDocuments: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagDocumentIdsRequest, ondewo_nlu_rag_pb.RagPartialSuccess>;
    ragStopParsing: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagDocumentIdsRequest, ondewo_nlu_rag_pb.RagPartialSuccess>;
    ragCreateCrawler: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagCreateCrawlerRequest, ondewo_nlu_rag_pb.RagCrawler>;
    ragGetCrawler: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagGetCrawlerRequest, ondewo_nlu_rag_pb.RagCrawler>;
    ragListCrawlers: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagListCrawlersRequest, ondewo_nlu_rag_pb.RagListCrawlersResponse>;
    ragUpdateCrawler: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagUpdateCrawlerRequest, ondewo_nlu_rag_pb.RagCrawler>;
    ragDeleteCrawler: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagDeleteCrawlerRequest, ondewo_nlu_rag_pb.RagDeleteCrawlerResponse>;
    ragStartCrawler: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagStartCrawlerRequest, ondewo_nlu_operations_pb.Operation>;
    ragStopCrawler: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagStopCrawlerRequest, ondewo_nlu_rag_pb.RagStopCrawlerResponse>;
    ragGetCrawlerRun: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagGetCrawlerRunRequest, ondewo_nlu_operations_pb.Operation>;
    ragListCrawlerRuns: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagListCrawlerRunsRequest, ondewo_nlu_rag_pb.RagListCrawlerRunsResponse>;
    ragDeleteCrawlerRuns: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagDeleteCrawlerRunsRequest, ondewo_nlu_rag_pb.RagDeleteCrawlerRunsResponse>;
    ragGetCrawlerResult: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagGetCrawlerResultRequest, ondewo_nlu_rag_pb.RagCrawlerResult>;
    ragGetCrawlerResults: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagGetCrawlerResultsRequest, ondewo_nlu_rag_pb.RagGetCrawlerResultsResponse>;
    ragAddCrawlerResultsToDatasets: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagAddCrawlerResultsToDatasetsRequest, ondewo_nlu_operations_pb.Operation>;
    ragRemoveCrawlerResultsFromDatasets: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagRemoveCrawlerResultsFromDatasetsRequest, ondewo_nlu_operations_pb.Operation>;
    ragGetCrawlerAttachedDatasets: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsRequest, ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsResponse>;
    ragDeleteCrawlers: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagDeleteCrawlersRequest, ondewo_nlu_rag_pb.RagDeleteCrawlersResponse>;
    ragGetCrawlerRunLogs: grpc.handleUnaryCall<ondewo_nlu_rag_pb.RagGetCrawlerRunLogsRequest, ondewo_nlu_rag_pb.RagGetCrawlerRunLogsResponse>;
}

export interface IRagsClient {
    ragCreateDataset(request: ondewo_nlu_rag_pb.RagCreateDatasetRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDataset) => void): grpc.ClientUnaryCall;
    ragCreateDataset(request: ondewo_nlu_rag_pb.RagCreateDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDataset) => void): grpc.ClientUnaryCall;
    ragCreateDataset(request: ondewo_nlu_rag_pb.RagCreateDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDataset) => void): grpc.ClientUnaryCall;
    ragUpdateDataset(request: ondewo_nlu_rag_pb.RagUpdateDatasetRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDataset) => void): grpc.ClientUnaryCall;
    ragUpdateDataset(request: ondewo_nlu_rag_pb.RagUpdateDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDataset) => void): grpc.ClientUnaryCall;
    ragUpdateDataset(request: ondewo_nlu_rag_pb.RagUpdateDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDataset) => void): grpc.ClientUnaryCall;
    ragDeleteDatasets(request: ondewo_nlu_rag_pb.RagDeleteRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragDeleteDatasets(request: ondewo_nlu_rag_pb.RagDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragDeleteDatasets(request: ondewo_nlu_rag_pb.RagDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragListDatasets(request: ondewo_nlu_rag_pb.RagListDatasetsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDatasetList) => void): grpc.ClientUnaryCall;
    ragListDatasets(request: ondewo_nlu_rag_pb.RagListDatasetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDatasetList) => void): grpc.ClientUnaryCall;
    ragListDatasets(request: ondewo_nlu_rag_pb.RagListDatasetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDatasetList) => void): grpc.ClientUnaryCall;
    ragUploadDocument(callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocument) => void): grpc.ClientWritableStream<ondewo_nlu_rag_pb.RagUploadDocumentRequest>;
    ragUploadDocument(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocument) => void): grpc.ClientWritableStream<ondewo_nlu_rag_pb.RagUploadDocumentRequest>;
    ragUploadDocument(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocument) => void): grpc.ClientWritableStream<ondewo_nlu_rag_pb.RagUploadDocumentRequest>;
    ragUploadDocument(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocument) => void): grpc.ClientWritableStream<ondewo_nlu_rag_pb.RagUploadDocumentRequest>;
    ragUpdateDocument(request: ondewo_nlu_rag_pb.RagUpdateDocumentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocument) => void): grpc.ClientUnaryCall;
    ragUpdateDocument(request: ondewo_nlu_rag_pb.RagUpdateDocumentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocument) => void): grpc.ClientUnaryCall;
    ragUpdateDocument(request: ondewo_nlu_rag_pb.RagUpdateDocumentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocument) => void): grpc.ClientUnaryCall;
    ragDownloadDocument(request: ondewo_nlu_rag_pb.RagDownloadDocumentRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagFileChunk>;
    ragDownloadDocument(request: ondewo_nlu_rag_pb.RagDownloadDocumentRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagFileChunk>;
    ragListDocuments(request: ondewo_nlu_rag_pb.RagListDocumentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocumentList) => void): grpc.ClientUnaryCall;
    ragListDocuments(request: ondewo_nlu_rag_pb.RagListDocumentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocumentList) => void): grpc.ClientUnaryCall;
    ragListDocuments(request: ondewo_nlu_rag_pb.RagListDocumentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocumentList) => void): grpc.ClientUnaryCall;
    ragDeleteDocuments(request: ondewo_nlu_rag_pb.RagDeleteDocumentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragDeleteDocuments(request: ondewo_nlu_rag_pb.RagDeleteDocumentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragDeleteDocuments(request: ondewo_nlu_rag_pb.RagDeleteDocumentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragRetrieval(request: ondewo_nlu_rag_pb.RagRetrievalRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagRetrievalResponse) => void): grpc.ClientUnaryCall;
    ragRetrieval(request: ondewo_nlu_rag_pb.RagRetrievalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagRetrievalResponse) => void): grpc.ClientUnaryCall;
    ragRetrieval(request: ondewo_nlu_rag_pb.RagRetrievalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagRetrievalResponse) => void): grpc.ClientUnaryCall;
    ragParseDocuments(request: ondewo_nlu_rag_pb.RagDocumentIdsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragParseDocuments(request: ondewo_nlu_rag_pb.RagDocumentIdsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragParseDocuments(request: ondewo_nlu_rag_pb.RagDocumentIdsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragStopParsing(request: ondewo_nlu_rag_pb.RagDocumentIdsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragStopParsing(request: ondewo_nlu_rag_pb.RagDocumentIdsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragStopParsing(request: ondewo_nlu_rag_pb.RagDocumentIdsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    ragCreateCrawler(request: ondewo_nlu_rag_pb.RagCreateCrawlerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawler) => void): grpc.ClientUnaryCall;
    ragCreateCrawler(request: ondewo_nlu_rag_pb.RagCreateCrawlerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawler) => void): grpc.ClientUnaryCall;
    ragCreateCrawler(request: ondewo_nlu_rag_pb.RagCreateCrawlerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawler) => void): grpc.ClientUnaryCall;
    ragGetCrawler(request: ondewo_nlu_rag_pb.RagGetCrawlerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawler) => void): grpc.ClientUnaryCall;
    ragGetCrawler(request: ondewo_nlu_rag_pb.RagGetCrawlerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawler) => void): grpc.ClientUnaryCall;
    ragGetCrawler(request: ondewo_nlu_rag_pb.RagGetCrawlerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawler) => void): grpc.ClientUnaryCall;
    ragListCrawlers(request: ondewo_nlu_rag_pb.RagListCrawlersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListCrawlersResponse) => void): grpc.ClientUnaryCall;
    ragListCrawlers(request: ondewo_nlu_rag_pb.RagListCrawlersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListCrawlersResponse) => void): grpc.ClientUnaryCall;
    ragListCrawlers(request: ondewo_nlu_rag_pb.RagListCrawlersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListCrawlersResponse) => void): grpc.ClientUnaryCall;
    ragUpdateCrawler(request: ondewo_nlu_rag_pb.RagUpdateCrawlerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawler) => void): grpc.ClientUnaryCall;
    ragUpdateCrawler(request: ondewo_nlu_rag_pb.RagUpdateCrawlerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawler) => void): grpc.ClientUnaryCall;
    ragUpdateCrawler(request: ondewo_nlu_rag_pb.RagUpdateCrawlerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawler) => void): grpc.ClientUnaryCall;
    ragDeleteCrawler(request: ondewo_nlu_rag_pb.RagDeleteCrawlerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDeleteCrawlerResponse) => void): grpc.ClientUnaryCall;
    ragDeleteCrawler(request: ondewo_nlu_rag_pb.RagDeleteCrawlerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDeleteCrawlerResponse) => void): grpc.ClientUnaryCall;
    ragDeleteCrawler(request: ondewo_nlu_rag_pb.RagDeleteCrawlerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDeleteCrawlerResponse) => void): grpc.ClientUnaryCall;
    ragStartCrawler(request: ondewo_nlu_rag_pb.RagStartCrawlerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    ragStartCrawler(request: ondewo_nlu_rag_pb.RagStartCrawlerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    ragStartCrawler(request: ondewo_nlu_rag_pb.RagStartCrawlerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    ragStopCrawler(request: ondewo_nlu_rag_pb.RagStopCrawlerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagStopCrawlerResponse) => void): grpc.ClientUnaryCall;
    ragStopCrawler(request: ondewo_nlu_rag_pb.RagStopCrawlerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagStopCrawlerResponse) => void): grpc.ClientUnaryCall;
    ragStopCrawler(request: ondewo_nlu_rag_pb.RagStopCrawlerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagStopCrawlerResponse) => void): grpc.ClientUnaryCall;
    ragGetCrawlerRun(request: ondewo_nlu_rag_pb.RagGetCrawlerRunRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    ragGetCrawlerRun(request: ondewo_nlu_rag_pb.RagGetCrawlerRunRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    ragGetCrawlerRun(request: ondewo_nlu_rag_pb.RagGetCrawlerRunRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    ragListCrawlerRuns(request: ondewo_nlu_rag_pb.RagListCrawlerRunsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListCrawlerRunsResponse) => void): grpc.ClientUnaryCall;
    ragListCrawlerRuns(request: ondewo_nlu_rag_pb.RagListCrawlerRunsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListCrawlerRunsResponse) => void): grpc.ClientUnaryCall;
    ragListCrawlerRuns(request: ondewo_nlu_rag_pb.RagListCrawlerRunsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListCrawlerRunsResponse) => void): grpc.ClientUnaryCall;
    ragDeleteCrawlerRuns(request: ondewo_nlu_rag_pb.RagDeleteCrawlerRunsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDeleteCrawlerRunsResponse) => void): grpc.ClientUnaryCall;
    ragDeleteCrawlerRuns(request: ondewo_nlu_rag_pb.RagDeleteCrawlerRunsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDeleteCrawlerRunsResponse) => void): grpc.ClientUnaryCall;
    ragDeleteCrawlerRuns(request: ondewo_nlu_rag_pb.RagDeleteCrawlerRunsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDeleteCrawlerRunsResponse) => void): grpc.ClientUnaryCall;
    ragGetCrawlerResult(request: ondewo_nlu_rag_pb.RagGetCrawlerResultRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawlerResult) => void): grpc.ClientUnaryCall;
    ragGetCrawlerResult(request: ondewo_nlu_rag_pb.RagGetCrawlerResultRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawlerResult) => void): grpc.ClientUnaryCall;
    ragGetCrawlerResult(request: ondewo_nlu_rag_pb.RagGetCrawlerResultRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawlerResult) => void): grpc.ClientUnaryCall;
    ragGetCrawlerResults(request: ondewo_nlu_rag_pb.RagGetCrawlerResultsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetCrawlerResultsResponse) => void): grpc.ClientUnaryCall;
    ragGetCrawlerResults(request: ondewo_nlu_rag_pb.RagGetCrawlerResultsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetCrawlerResultsResponse) => void): grpc.ClientUnaryCall;
    ragGetCrawlerResults(request: ondewo_nlu_rag_pb.RagGetCrawlerResultsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetCrawlerResultsResponse) => void): grpc.ClientUnaryCall;
    ragAddCrawlerResultsToDatasets(request: ondewo_nlu_rag_pb.RagAddCrawlerResultsToDatasetsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    ragAddCrawlerResultsToDatasets(request: ondewo_nlu_rag_pb.RagAddCrawlerResultsToDatasetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    ragAddCrawlerResultsToDatasets(request: ondewo_nlu_rag_pb.RagAddCrawlerResultsToDatasetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    ragRemoveCrawlerResultsFromDatasets(request: ondewo_nlu_rag_pb.RagRemoveCrawlerResultsFromDatasetsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    ragRemoveCrawlerResultsFromDatasets(request: ondewo_nlu_rag_pb.RagRemoveCrawlerResultsFromDatasetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    ragRemoveCrawlerResultsFromDatasets(request: ondewo_nlu_rag_pb.RagRemoveCrawlerResultsFromDatasetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    ragGetCrawlerAttachedDatasets(request: ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsResponse) => void): grpc.ClientUnaryCall;
    ragGetCrawlerAttachedDatasets(request: ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsResponse) => void): grpc.ClientUnaryCall;
    ragGetCrawlerAttachedDatasets(request: ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsResponse) => void): grpc.ClientUnaryCall;
    ragDeleteCrawlers(request: ondewo_nlu_rag_pb.RagDeleteCrawlersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDeleteCrawlersResponse) => void): grpc.ClientUnaryCall;
    ragDeleteCrawlers(request: ondewo_nlu_rag_pb.RagDeleteCrawlersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDeleteCrawlersResponse) => void): grpc.ClientUnaryCall;
    ragDeleteCrawlers(request: ondewo_nlu_rag_pb.RagDeleteCrawlersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDeleteCrawlersResponse) => void): grpc.ClientUnaryCall;
    ragGetCrawlerRunLogs(request: ondewo_nlu_rag_pb.RagGetCrawlerRunLogsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetCrawlerRunLogsResponse) => void): grpc.ClientUnaryCall;
    ragGetCrawlerRunLogs(request: ondewo_nlu_rag_pb.RagGetCrawlerRunLogsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetCrawlerRunLogsResponse) => void): grpc.ClientUnaryCall;
    ragGetCrawlerRunLogs(request: ondewo_nlu_rag_pb.RagGetCrawlerRunLogsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetCrawlerRunLogsResponse) => void): grpc.ClientUnaryCall;
}

export class RagsClient extends grpc.Client implements IRagsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public ragCreateDataset(request: ondewo_nlu_rag_pb.RagCreateDatasetRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDataset) => void): grpc.ClientUnaryCall;
    public ragCreateDataset(request: ondewo_nlu_rag_pb.RagCreateDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDataset) => void): grpc.ClientUnaryCall;
    public ragCreateDataset(request: ondewo_nlu_rag_pb.RagCreateDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDataset) => void): grpc.ClientUnaryCall;
    public ragUpdateDataset(request: ondewo_nlu_rag_pb.RagUpdateDatasetRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDataset) => void): grpc.ClientUnaryCall;
    public ragUpdateDataset(request: ondewo_nlu_rag_pb.RagUpdateDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDataset) => void): grpc.ClientUnaryCall;
    public ragUpdateDataset(request: ondewo_nlu_rag_pb.RagUpdateDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDataset) => void): grpc.ClientUnaryCall;
    public ragDeleteDatasets(request: ondewo_nlu_rag_pb.RagDeleteRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragDeleteDatasets(request: ondewo_nlu_rag_pb.RagDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragDeleteDatasets(request: ondewo_nlu_rag_pb.RagDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragListDatasets(request: ondewo_nlu_rag_pb.RagListDatasetsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDatasetList) => void): grpc.ClientUnaryCall;
    public ragListDatasets(request: ondewo_nlu_rag_pb.RagListDatasetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDatasetList) => void): grpc.ClientUnaryCall;
    public ragListDatasets(request: ondewo_nlu_rag_pb.RagListDatasetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDatasetList) => void): grpc.ClientUnaryCall;
    public ragUploadDocument(callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocument) => void): grpc.ClientWritableStream<ondewo_nlu_rag_pb.RagUploadDocumentRequest>;
    public ragUploadDocument(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocument) => void): grpc.ClientWritableStream<ondewo_nlu_rag_pb.RagUploadDocumentRequest>;
    public ragUploadDocument(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocument) => void): grpc.ClientWritableStream<ondewo_nlu_rag_pb.RagUploadDocumentRequest>;
    public ragUploadDocument(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocument) => void): grpc.ClientWritableStream<ondewo_nlu_rag_pb.RagUploadDocumentRequest>;
    public ragUpdateDocument(request: ondewo_nlu_rag_pb.RagUpdateDocumentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocument) => void): grpc.ClientUnaryCall;
    public ragUpdateDocument(request: ondewo_nlu_rag_pb.RagUpdateDocumentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocument) => void): grpc.ClientUnaryCall;
    public ragUpdateDocument(request: ondewo_nlu_rag_pb.RagUpdateDocumentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocument) => void): grpc.ClientUnaryCall;
    public ragDownloadDocument(request: ondewo_nlu_rag_pb.RagDownloadDocumentRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagFileChunk>;
    public ragDownloadDocument(request: ondewo_nlu_rag_pb.RagDownloadDocumentRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<ondewo_nlu_rag_pb.RagFileChunk>;
    public ragListDocuments(request: ondewo_nlu_rag_pb.RagListDocumentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocumentList) => void): grpc.ClientUnaryCall;
    public ragListDocuments(request: ondewo_nlu_rag_pb.RagListDocumentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocumentList) => void): grpc.ClientUnaryCall;
    public ragListDocuments(request: ondewo_nlu_rag_pb.RagListDocumentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDocumentList) => void): grpc.ClientUnaryCall;
    public ragDeleteDocuments(request: ondewo_nlu_rag_pb.RagDeleteDocumentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragDeleteDocuments(request: ondewo_nlu_rag_pb.RagDeleteDocumentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragDeleteDocuments(request: ondewo_nlu_rag_pb.RagDeleteDocumentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragRetrieval(request: ondewo_nlu_rag_pb.RagRetrievalRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagRetrievalResponse) => void): grpc.ClientUnaryCall;
    public ragRetrieval(request: ondewo_nlu_rag_pb.RagRetrievalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagRetrievalResponse) => void): grpc.ClientUnaryCall;
    public ragRetrieval(request: ondewo_nlu_rag_pb.RagRetrievalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagRetrievalResponse) => void): grpc.ClientUnaryCall;
    public ragParseDocuments(request: ondewo_nlu_rag_pb.RagDocumentIdsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragParseDocuments(request: ondewo_nlu_rag_pb.RagDocumentIdsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragParseDocuments(request: ondewo_nlu_rag_pb.RagDocumentIdsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragStopParsing(request: ondewo_nlu_rag_pb.RagDocumentIdsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragStopParsing(request: ondewo_nlu_rag_pb.RagDocumentIdsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragStopParsing(request: ondewo_nlu_rag_pb.RagDocumentIdsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagPartialSuccess) => void): grpc.ClientUnaryCall;
    public ragCreateCrawler(request: ondewo_nlu_rag_pb.RagCreateCrawlerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawler) => void): grpc.ClientUnaryCall;
    public ragCreateCrawler(request: ondewo_nlu_rag_pb.RagCreateCrawlerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawler) => void): grpc.ClientUnaryCall;
    public ragCreateCrawler(request: ondewo_nlu_rag_pb.RagCreateCrawlerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawler) => void): grpc.ClientUnaryCall;
    public ragGetCrawler(request: ondewo_nlu_rag_pb.RagGetCrawlerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawler) => void): grpc.ClientUnaryCall;
    public ragGetCrawler(request: ondewo_nlu_rag_pb.RagGetCrawlerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawler) => void): grpc.ClientUnaryCall;
    public ragGetCrawler(request: ondewo_nlu_rag_pb.RagGetCrawlerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawler) => void): grpc.ClientUnaryCall;
    public ragListCrawlers(request: ondewo_nlu_rag_pb.RagListCrawlersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListCrawlersResponse) => void): grpc.ClientUnaryCall;
    public ragListCrawlers(request: ondewo_nlu_rag_pb.RagListCrawlersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListCrawlersResponse) => void): grpc.ClientUnaryCall;
    public ragListCrawlers(request: ondewo_nlu_rag_pb.RagListCrawlersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListCrawlersResponse) => void): grpc.ClientUnaryCall;
    public ragUpdateCrawler(request: ondewo_nlu_rag_pb.RagUpdateCrawlerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawler) => void): grpc.ClientUnaryCall;
    public ragUpdateCrawler(request: ondewo_nlu_rag_pb.RagUpdateCrawlerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawler) => void): grpc.ClientUnaryCall;
    public ragUpdateCrawler(request: ondewo_nlu_rag_pb.RagUpdateCrawlerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawler) => void): grpc.ClientUnaryCall;
    public ragDeleteCrawler(request: ondewo_nlu_rag_pb.RagDeleteCrawlerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDeleteCrawlerResponse) => void): grpc.ClientUnaryCall;
    public ragDeleteCrawler(request: ondewo_nlu_rag_pb.RagDeleteCrawlerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDeleteCrawlerResponse) => void): grpc.ClientUnaryCall;
    public ragDeleteCrawler(request: ondewo_nlu_rag_pb.RagDeleteCrawlerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDeleteCrawlerResponse) => void): grpc.ClientUnaryCall;
    public ragStartCrawler(request: ondewo_nlu_rag_pb.RagStartCrawlerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public ragStartCrawler(request: ondewo_nlu_rag_pb.RagStartCrawlerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public ragStartCrawler(request: ondewo_nlu_rag_pb.RagStartCrawlerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public ragStopCrawler(request: ondewo_nlu_rag_pb.RagStopCrawlerRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagStopCrawlerResponse) => void): grpc.ClientUnaryCall;
    public ragStopCrawler(request: ondewo_nlu_rag_pb.RagStopCrawlerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagStopCrawlerResponse) => void): grpc.ClientUnaryCall;
    public ragStopCrawler(request: ondewo_nlu_rag_pb.RagStopCrawlerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagStopCrawlerResponse) => void): grpc.ClientUnaryCall;
    public ragGetCrawlerRun(request: ondewo_nlu_rag_pb.RagGetCrawlerRunRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public ragGetCrawlerRun(request: ondewo_nlu_rag_pb.RagGetCrawlerRunRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public ragGetCrawlerRun(request: ondewo_nlu_rag_pb.RagGetCrawlerRunRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public ragListCrawlerRuns(request: ondewo_nlu_rag_pb.RagListCrawlerRunsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListCrawlerRunsResponse) => void): grpc.ClientUnaryCall;
    public ragListCrawlerRuns(request: ondewo_nlu_rag_pb.RagListCrawlerRunsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListCrawlerRunsResponse) => void): grpc.ClientUnaryCall;
    public ragListCrawlerRuns(request: ondewo_nlu_rag_pb.RagListCrawlerRunsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagListCrawlerRunsResponse) => void): grpc.ClientUnaryCall;
    public ragDeleteCrawlerRuns(request: ondewo_nlu_rag_pb.RagDeleteCrawlerRunsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDeleteCrawlerRunsResponse) => void): grpc.ClientUnaryCall;
    public ragDeleteCrawlerRuns(request: ondewo_nlu_rag_pb.RagDeleteCrawlerRunsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDeleteCrawlerRunsResponse) => void): grpc.ClientUnaryCall;
    public ragDeleteCrawlerRuns(request: ondewo_nlu_rag_pb.RagDeleteCrawlerRunsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDeleteCrawlerRunsResponse) => void): grpc.ClientUnaryCall;
    public ragGetCrawlerResult(request: ondewo_nlu_rag_pb.RagGetCrawlerResultRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawlerResult) => void): grpc.ClientUnaryCall;
    public ragGetCrawlerResult(request: ondewo_nlu_rag_pb.RagGetCrawlerResultRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawlerResult) => void): grpc.ClientUnaryCall;
    public ragGetCrawlerResult(request: ondewo_nlu_rag_pb.RagGetCrawlerResultRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagCrawlerResult) => void): grpc.ClientUnaryCall;
    public ragGetCrawlerResults(request: ondewo_nlu_rag_pb.RagGetCrawlerResultsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetCrawlerResultsResponse) => void): grpc.ClientUnaryCall;
    public ragGetCrawlerResults(request: ondewo_nlu_rag_pb.RagGetCrawlerResultsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetCrawlerResultsResponse) => void): grpc.ClientUnaryCall;
    public ragGetCrawlerResults(request: ondewo_nlu_rag_pb.RagGetCrawlerResultsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetCrawlerResultsResponse) => void): grpc.ClientUnaryCall;
    public ragAddCrawlerResultsToDatasets(request: ondewo_nlu_rag_pb.RagAddCrawlerResultsToDatasetsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public ragAddCrawlerResultsToDatasets(request: ondewo_nlu_rag_pb.RagAddCrawlerResultsToDatasetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public ragAddCrawlerResultsToDatasets(request: ondewo_nlu_rag_pb.RagAddCrawlerResultsToDatasetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public ragRemoveCrawlerResultsFromDatasets(request: ondewo_nlu_rag_pb.RagRemoveCrawlerResultsFromDatasetsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public ragRemoveCrawlerResultsFromDatasets(request: ondewo_nlu_rag_pb.RagRemoveCrawlerResultsFromDatasetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public ragRemoveCrawlerResultsFromDatasets(request: ondewo_nlu_rag_pb.RagRemoveCrawlerResultsFromDatasetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public ragGetCrawlerAttachedDatasets(request: ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsResponse) => void): grpc.ClientUnaryCall;
    public ragGetCrawlerAttachedDatasets(request: ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsResponse) => void): grpc.ClientUnaryCall;
    public ragGetCrawlerAttachedDatasets(request: ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsResponse) => void): grpc.ClientUnaryCall;
    public ragDeleteCrawlers(request: ondewo_nlu_rag_pb.RagDeleteCrawlersRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDeleteCrawlersResponse) => void): grpc.ClientUnaryCall;
    public ragDeleteCrawlers(request: ondewo_nlu_rag_pb.RagDeleteCrawlersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDeleteCrawlersResponse) => void): grpc.ClientUnaryCall;
    public ragDeleteCrawlers(request: ondewo_nlu_rag_pb.RagDeleteCrawlersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagDeleteCrawlersResponse) => void): grpc.ClientUnaryCall;
    public ragGetCrawlerRunLogs(request: ondewo_nlu_rag_pb.RagGetCrawlerRunLogsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetCrawlerRunLogsResponse) => void): grpc.ClientUnaryCall;
    public ragGetCrawlerRunLogs(request: ondewo_nlu_rag_pb.RagGetCrawlerRunLogsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetCrawlerRunLogsResponse) => void): grpc.ClientUnaryCall;
    public ragGetCrawlerRunLogs(request: ondewo_nlu_rag_pb.RagGetCrawlerRunLogsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_rag_pb.RagGetCrawlerRunLogsResponse) => void): grpc.ClientUnaryCall;
}
