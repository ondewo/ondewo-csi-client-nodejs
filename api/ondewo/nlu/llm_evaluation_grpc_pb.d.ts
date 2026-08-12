// package: ondewo.nlu
// file: ondewo/nlu/llm_evaluation.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ondewo_nlu_llm_evaluation_pb from "../../ondewo/nlu/llm_evaluation_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ondewo_nlu_operations_pb from "../../ondewo/nlu/operations_pb";

interface ILlmEvaluationsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    llmEvaluationCreateDataset: ILlmEvaluationsService_ILlmEvaluationCreateDataset;
    llmEvaluationGetDataset: ILlmEvaluationsService_ILlmEvaluationGetDataset;
    llmEvaluationListDatasets: ILlmEvaluationsService_ILlmEvaluationListDatasets;
    llmEvaluationUpdateDataset: ILlmEvaluationsService_ILlmEvaluationUpdateDataset;
    llmEvaluationDeleteDataset: ILlmEvaluationsService_ILlmEvaluationDeleteDataset;
    llmEvaluationAddExample: ILlmEvaluationsService_ILlmEvaluationAddExample;
    llmEvaluationAddExamples: ILlmEvaluationsService_ILlmEvaluationAddExamples;
    llmEvaluationGetExample: ILlmEvaluationsService_ILlmEvaluationGetExample;
    llmEvaluationListExamples: ILlmEvaluationsService_ILlmEvaluationListExamples;
    llmEvaluationUpdateExample: ILlmEvaluationsService_ILlmEvaluationUpdateExample;
    llmEvaluationDeleteExample: ILlmEvaluationsService_ILlmEvaluationDeleteExample;
    llmEvaluationRunExperiment: ILlmEvaluationsService_ILlmEvaluationRunExperiment;
    llmEvaluationGetExperiment: ILlmEvaluationsService_ILlmEvaluationGetExperiment;
    llmEvaluationListExperiments: ILlmEvaluationsService_ILlmEvaluationListExperiments;
    llmEvaluationUpdateExperiment: ILlmEvaluationsService_ILlmEvaluationUpdateExperiment;
    llmEvaluationDeleteExperiment: ILlmEvaluationsService_ILlmEvaluationDeleteExperiment;
    llmEvaluationCancelExperiment: ILlmEvaluationsService_ILlmEvaluationCancelExperiment;
    llmEvaluationCompareExperiments: ILlmEvaluationsService_ILlmEvaluationCompareExperiments;
    llmEvaluationSubmitFeedback: ILlmEvaluationsService_ILlmEvaluationSubmitFeedback;
    llmEvaluationListFeedback: ILlmEvaluationsService_ILlmEvaluationListFeedback;
    llmEvaluationDeleteFeedback: ILlmEvaluationsService_ILlmEvaluationDeleteFeedback;
    llmEvaluationUpdateFeedback: ILlmEvaluationsService_ILlmEvaluationUpdateFeedback;
    llmEvaluationCreateReleaseGate: ILlmEvaluationsService_ILlmEvaluationCreateReleaseGate;
    llmEvaluationGetReleaseGate: ILlmEvaluationsService_ILlmEvaluationGetReleaseGate;
    llmEvaluationListReleaseGates: ILlmEvaluationsService_ILlmEvaluationListReleaseGates;
    llmEvaluationUpdateReleaseGate: ILlmEvaluationsService_ILlmEvaluationUpdateReleaseGate;
    llmEvaluationDeleteReleaseGate: ILlmEvaluationsService_ILlmEvaluationDeleteReleaseGate;
    llmEvaluationRunReleaseGate: ILlmEvaluationsService_ILlmEvaluationRunReleaseGate;
    llmEvaluationGetReleaseGateRun: ILlmEvaluationsService_ILlmEvaluationGetReleaseGateRun;
    llmEvaluationListReleaseGateRuns: ILlmEvaluationsService_ILlmEvaluationListReleaseGateRuns;
    llmEvaluationCreateScorecard: ILlmEvaluationsService_ILlmEvaluationCreateScorecard;
    llmEvaluationGetScorecard: ILlmEvaluationsService_ILlmEvaluationGetScorecard;
    llmEvaluationListScorecards: ILlmEvaluationsService_ILlmEvaluationListScorecards;
    llmEvaluationUpdateScorecard: ILlmEvaluationsService_ILlmEvaluationUpdateScorecard;
    llmEvaluationDeleteScorecard: ILlmEvaluationsService_ILlmEvaluationDeleteScorecard;
    llmEvaluationGetProjectSettings: ILlmEvaluationsService_ILlmEvaluationGetProjectSettings;
    llmEvaluationUpdateProjectSettings: ILlmEvaluationsService_ILlmEvaluationUpdateProjectSettings;
    llmEvaluationListEvaluators: ILlmEvaluationsService_ILlmEvaluationListEvaluators;
    llmEvaluationCreateExamplesFromSession: ILlmEvaluationsService_ILlmEvaluationCreateExamplesFromSession;
    llmEvaluationSimulateConversations: ILlmEvaluationsService_ILlmEvaluationSimulateConversations;
    llmEvaluationCreateSchedule: ILlmEvaluationsService_ILlmEvaluationCreateSchedule;
    llmEvaluationGetSchedule: ILlmEvaluationsService_ILlmEvaluationGetSchedule;
    llmEvaluationListSchedules: ILlmEvaluationsService_ILlmEvaluationListSchedules;
    llmEvaluationUpdateSchedule: ILlmEvaluationsService_ILlmEvaluationUpdateSchedule;
    llmEvaluationDeleteSchedule: ILlmEvaluationsService_ILlmEvaluationDeleteSchedule;
    llmEvaluationCreateReport: ILlmEvaluationsService_ILlmEvaluationCreateReport;
    llmEvaluationGetReport: ILlmEvaluationsService_ILlmEvaluationGetReport;
    llmEvaluationListReports: ILlmEvaluationsService_ILlmEvaluationListReports;
    llmEvaluationDeleteReport: ILlmEvaluationsService_ILlmEvaluationDeleteReport;
    llmEvaluationCreateAbExperiment: ILlmEvaluationsService_ILlmEvaluationCreateAbExperiment;
    llmEvaluationGetAbExperiment: ILlmEvaluationsService_ILlmEvaluationGetAbExperiment;
    llmEvaluationListAbExperiments: ILlmEvaluationsService_ILlmEvaluationListAbExperiments;
    llmEvaluationUpdateAbExperiment: ILlmEvaluationsService_ILlmEvaluationUpdateAbExperiment;
    llmEvaluationDeleteAbExperiment: ILlmEvaluationsService_ILlmEvaluationDeleteAbExperiment;
    llmEvaluationStartAbExperiment: ILlmEvaluationsService_ILlmEvaluationStartAbExperiment;
    llmEvaluationStopAbExperiment: ILlmEvaluationsService_ILlmEvaluationStopAbExperiment;
    llmEvaluationGetAbExperimentResults: ILlmEvaluationsService_ILlmEvaluationGetAbExperimentResults;
    llmEvaluationGetAbRolloutRecommendation: ILlmEvaluationsService_ILlmEvaluationGetAbRolloutRecommendation;
    llmEvaluationApplyAbRollout: ILlmEvaluationsService_ILlmEvaluationApplyAbRollout;
    llmEvaluationGetAbRolloutDecision: ILlmEvaluationsService_ILlmEvaluationGetAbRolloutDecision;
    llmEvaluationListAbRolloutDecisions: ILlmEvaluationsService_ILlmEvaluationListAbRolloutDecisions;
    llmEvaluationCreateOnlineConfig: ILlmEvaluationsService_ILlmEvaluationCreateOnlineConfig;
    llmEvaluationGetOnlineConfig: ILlmEvaluationsService_ILlmEvaluationGetOnlineConfig;
    llmEvaluationListOnlineConfigs: ILlmEvaluationsService_ILlmEvaluationListOnlineConfigs;
    llmEvaluationUpdateOnlineConfig: ILlmEvaluationsService_ILlmEvaluationUpdateOnlineConfig;
    llmEvaluationDeleteOnlineConfig: ILlmEvaluationsService_ILlmEvaluationDeleteOnlineConfig;
    llmEvaluationGetOnlineResult: ILlmEvaluationsService_ILlmEvaluationGetOnlineResult;
    llmEvaluationListOnlineResults: ILlmEvaluationsService_ILlmEvaluationListOnlineResults;
    llmEvaluationGetAnnotationQueueItem: ILlmEvaluationsService_ILlmEvaluationGetAnnotationQueueItem;
    llmEvaluationListAnnotationQueueItems: ILlmEvaluationsService_ILlmEvaluationListAnnotationQueueItems;
    llmEvaluationUpdateAnnotationQueueItem: ILlmEvaluationsService_ILlmEvaluationUpdateAnnotationQueueItem;
    llmEvaluationPromoteAnnotationQueueItem: ILlmEvaluationsService_ILlmEvaluationPromoteAnnotationQueueItem;
}

interface ILlmEvaluationsService_ILlmEvaluationCreateDataset extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationDatasetRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationCreateDataset";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationDatasetRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationDatasetRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset>;
}
interface ILlmEvaluationsService_ILlmEvaluationGetDataset extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationDatasetRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationGetDataset";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationDatasetRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationDatasetRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset>;
}
interface ILlmEvaluationsService_ILlmEvaluationListDatasets extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsRequest, ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsResponse> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationListDatasets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsResponse>;
}
interface ILlmEvaluationsService_ILlmEvaluationUpdateDataset extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationDatasetRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateDataset";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationDatasetRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationDatasetRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset>;
}
interface ILlmEvaluationsService_ILlmEvaluationDeleteDataset extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationDatasetRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteDataset";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationDatasetRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationDatasetRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ILlmEvaluationsService_ILlmEvaluationAddExample extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExampleRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationAddExample";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExampleRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExampleRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample>;
}
interface ILlmEvaluationsService_ILlmEvaluationAddExamples extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesRequest, ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesResponse> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationAddExamples";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesResponse>;
}
interface ILlmEvaluationsService_ILlmEvaluationGetExample extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExampleRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationGetExample";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExampleRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExampleRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample>;
}
interface ILlmEvaluationsService_ILlmEvaluationListExamples extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesRequest, ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesResponse> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationListExamples";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesResponse>;
}
interface ILlmEvaluationsService_ILlmEvaluationUpdateExample extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExampleRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateExample";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExampleRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExampleRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample>;
}
interface ILlmEvaluationsService_ILlmEvaluationDeleteExample extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExampleRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteExample";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExampleRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExampleRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ILlmEvaluationsService_ILlmEvaluationRunExperiment extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationExperimentRequest, ondewo_nlu_operations_pb.Operation> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationRunExperiment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationExperimentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationExperimentRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_operations_pb.Operation>;
}
interface ILlmEvaluationsService_ILlmEvaluationGetExperiment extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExperimentRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationGetExperiment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExperimentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExperimentRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment>;
}
interface ILlmEvaluationsService_ILlmEvaluationListExperiments extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsRequest, ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsResponse> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationListExperiments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsResponse>;
}
interface ILlmEvaluationsService_ILlmEvaluationUpdateExperiment extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExperimentRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateExperiment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExperimentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExperimentRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment>;
}
interface ILlmEvaluationsService_ILlmEvaluationDeleteExperiment extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExperimentRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteExperiment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExperimentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExperimentRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ILlmEvaluationsService_ILlmEvaluationCancelExperiment extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.CancelLlmEvaluationExperimentRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationCancelExperiment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.CancelLlmEvaluationExperimentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.CancelLlmEvaluationExperimentRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment>;
}
interface ILlmEvaluationsService_ILlmEvaluationCompareExperiments extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.CompareLlmEvaluationExperimentsRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationComparison> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationCompareExperiments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.CompareLlmEvaluationExperimentsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.CompareLlmEvaluationExperimentsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationComparison>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationComparison>;
}
interface ILlmEvaluationsService_ILlmEvaluationSubmitFeedback extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.SubmitLlmEvaluationFeedbackRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationSubmitFeedback";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.SubmitLlmEvaluationFeedbackRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.SubmitLlmEvaluationFeedbackRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback>;
}
interface ILlmEvaluationsService_ILlmEvaluationListFeedback extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackRequest, ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackResponse> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationListFeedback";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackResponse>;
}
interface ILlmEvaluationsService_ILlmEvaluationDeleteFeedback extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationFeedbackRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteFeedback";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationFeedbackRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationFeedbackRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ILlmEvaluationsService_ILlmEvaluationUpdateFeedback extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationFeedbackRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateFeedback";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationFeedbackRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationFeedbackRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback>;
}
interface ILlmEvaluationsService_ILlmEvaluationCreateReleaseGate extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationReleaseGateRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationCreateReleaseGate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationReleaseGateRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationReleaseGateRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate>;
}
interface ILlmEvaluationsService_ILlmEvaluationGetReleaseGate extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReleaseGateRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationGetReleaseGate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReleaseGateRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReleaseGateRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate>;
}
interface ILlmEvaluationsService_ILlmEvaluationListReleaseGates extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGatesRequest, ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGatesResponse> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationListReleaseGates";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGatesRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGatesRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGatesResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGatesResponse>;
}
interface ILlmEvaluationsService_ILlmEvaluationUpdateReleaseGate extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationReleaseGateRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateReleaseGate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationReleaseGateRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationReleaseGateRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate>;
}
interface ILlmEvaluationsService_ILlmEvaluationDeleteReleaseGate extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationReleaseGateRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteReleaseGate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationReleaseGateRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationReleaseGateRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ILlmEvaluationsService_ILlmEvaluationRunReleaseGate extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationReleaseGateRequest, ondewo_nlu_operations_pb.Operation> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationRunReleaseGate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationReleaseGateRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationReleaseGateRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_operations_pb.Operation>;
}
interface ILlmEvaluationsService_ILlmEvaluationGetReleaseGateRun extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReleaseGateRunRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGateRun> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationGetReleaseGateRun";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReleaseGateRunRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReleaseGateRunRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGateRun>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGateRun>;
}
interface ILlmEvaluationsService_ILlmEvaluationListReleaseGateRuns extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGateRunsRequest, ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGateRunsResponse> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationListReleaseGateRuns";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGateRunsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGateRunsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGateRunsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGateRunsResponse>;
}
interface ILlmEvaluationsService_ILlmEvaluationCreateScorecard extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationScorecardRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationCreateScorecard";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationScorecardRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationScorecardRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard>;
}
interface ILlmEvaluationsService_ILlmEvaluationGetScorecard extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationScorecardRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationGetScorecard";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationScorecardRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationScorecardRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard>;
}
interface ILlmEvaluationsService_ILlmEvaluationListScorecards extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationScorecardsRequest, ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationScorecardsResponse> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationListScorecards";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationScorecardsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationScorecardsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationScorecardsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationScorecardsResponse>;
}
interface ILlmEvaluationsService_ILlmEvaluationUpdateScorecard extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationScorecardRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateScorecard";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationScorecardRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationScorecardRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard>;
}
interface ILlmEvaluationsService_ILlmEvaluationDeleteScorecard extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationScorecardRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteScorecard";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationScorecardRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationScorecardRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ILlmEvaluationsService_ILlmEvaluationGetProjectSettings extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationProjectSettingsRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationProjectSettings> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationGetProjectSettings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationProjectSettingsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationProjectSettingsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationProjectSettings>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationProjectSettings>;
}
interface ILlmEvaluationsService_ILlmEvaluationUpdateProjectSettings extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationProjectSettingsRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationProjectSettings> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateProjectSettings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationProjectSettingsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationProjectSettingsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationProjectSettings>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationProjectSettings>;
}
interface ILlmEvaluationsService_ILlmEvaluationListEvaluators extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationEvaluatorsRequest, ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationEvaluatorsResponse> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationListEvaluators";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationEvaluatorsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationEvaluatorsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationEvaluatorsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationEvaluatorsResponse>;
}
interface ILlmEvaluationsService_ILlmEvaluationCreateExamplesFromSession extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationExamplesFromSessionRequest, ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationExamplesFromSessionResponse> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationCreateExamplesFromSession";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationExamplesFromSessionRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationExamplesFromSessionRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationExamplesFromSessionResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationExamplesFromSessionResponse>;
}
interface ILlmEvaluationsService_ILlmEvaluationSimulateConversations extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.SimulateLlmEvaluationConversationsRequest, ondewo_nlu_operations_pb.Operation> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationSimulateConversations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.SimulateLlmEvaluationConversationsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.SimulateLlmEvaluationConversationsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_operations_pb.Operation>;
}
interface ILlmEvaluationsService_ILlmEvaluationCreateSchedule extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationScheduleRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationCreateSchedule";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationScheduleRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationScheduleRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule>;
}
interface ILlmEvaluationsService_ILlmEvaluationGetSchedule extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationScheduleRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationGetSchedule";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationScheduleRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationScheduleRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule>;
}
interface ILlmEvaluationsService_ILlmEvaluationListSchedules extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationSchedulesRequest, ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationSchedulesResponse> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationListSchedules";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationSchedulesRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationSchedulesRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationSchedulesResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationSchedulesResponse>;
}
interface ILlmEvaluationsService_ILlmEvaluationUpdateSchedule extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationScheduleRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateSchedule";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationScheduleRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationScheduleRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule>;
}
interface ILlmEvaluationsService_ILlmEvaluationDeleteSchedule extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationScheduleRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteSchedule";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationScheduleRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationScheduleRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ILlmEvaluationsService_ILlmEvaluationCreateReport extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationReportRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationReport> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationCreateReport";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationReportRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationReportRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationReport>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationReport>;
}
interface ILlmEvaluationsService_ILlmEvaluationGetReport extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReportRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationReport> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationGetReport";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReportRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReportRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationReport>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationReport>;
}
interface ILlmEvaluationsService_ILlmEvaluationListReports extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReportsRequest, ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReportsResponse> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationListReports";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReportsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReportsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReportsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReportsResponse>;
}
interface ILlmEvaluationsService_ILlmEvaluationDeleteReport extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationReportRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteReport";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationReportRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationReportRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ILlmEvaluationsService_ILlmEvaluationCreateAbExperiment extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationAbExperimentRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationCreateAbExperiment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationAbExperimentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationAbExperimentRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment>;
}
interface ILlmEvaluationsService_ILlmEvaluationGetAbExperiment extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationGetAbExperiment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment>;
}
interface ILlmEvaluationsService_ILlmEvaluationListAbExperiments extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbExperimentsRequest, ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbExperimentsResponse> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationListAbExperiments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbExperimentsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbExperimentsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbExperimentsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbExperimentsResponse>;
}
interface ILlmEvaluationsService_ILlmEvaluationUpdateAbExperiment extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationAbExperimentRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateAbExperiment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationAbExperimentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationAbExperimentRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment>;
}
interface ILlmEvaluationsService_ILlmEvaluationDeleteAbExperiment extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationAbExperimentRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteAbExperiment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationAbExperimentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationAbExperimentRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ILlmEvaluationsService_ILlmEvaluationStartAbExperiment extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.StartLlmEvaluationAbExperimentRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationStartAbExperiment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.StartLlmEvaluationAbExperimentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.StartLlmEvaluationAbExperimentRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment>;
}
interface ILlmEvaluationsService_ILlmEvaluationStopAbExperiment extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.StopLlmEvaluationAbExperimentRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationStopAbExperiment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.StopLlmEvaluationAbExperimentRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.StopLlmEvaluationAbExperimentRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment>;
}
interface ILlmEvaluationsService_ILlmEvaluationGetAbExperimentResults extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentResultsRequest, ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentResultsResponse> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationGetAbExperimentResults";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentResultsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentResultsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentResultsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentResultsResponse>;
}
interface ILlmEvaluationsService_ILlmEvaluationGetAbRolloutRecommendation extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbRolloutRecommendationRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutRecommendation> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationGetAbRolloutRecommendation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbRolloutRecommendationRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbRolloutRecommendationRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutRecommendation>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutRecommendation>;
}
interface ILlmEvaluationsService_ILlmEvaluationApplyAbRollout extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.ApplyLlmEvaluationAbRolloutRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutDecision> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationApplyAbRollout";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ApplyLlmEvaluationAbRolloutRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ApplyLlmEvaluationAbRolloutRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutDecision>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutDecision>;
}
interface ILlmEvaluationsService_ILlmEvaluationGetAbRolloutDecision extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbRolloutDecisionRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutDecision> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationGetAbRolloutDecision";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbRolloutDecisionRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbRolloutDecisionRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutDecision>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutDecision>;
}
interface ILlmEvaluationsService_ILlmEvaluationListAbRolloutDecisions extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbRolloutDecisionsRequest, ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbRolloutDecisionsResponse> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationListAbRolloutDecisions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbRolloutDecisionsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbRolloutDecisionsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbRolloutDecisionsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbRolloutDecisionsResponse>;
}
interface ILlmEvaluationsService_ILlmEvaluationCreateOnlineConfig extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationOnlineConfigRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationCreateOnlineConfig";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationOnlineConfigRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationOnlineConfigRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig>;
}
interface ILlmEvaluationsService_ILlmEvaluationGetOnlineConfig extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationOnlineConfigRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationGetOnlineConfig";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationOnlineConfigRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationOnlineConfigRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig>;
}
interface ILlmEvaluationsService_ILlmEvaluationListOnlineConfigs extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineConfigsRequest, ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineConfigsResponse> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationListOnlineConfigs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineConfigsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineConfigsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineConfigsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineConfigsResponse>;
}
interface ILlmEvaluationsService_ILlmEvaluationUpdateOnlineConfig extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationOnlineConfigRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateOnlineConfig";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationOnlineConfigRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationOnlineConfigRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig>;
}
interface ILlmEvaluationsService_ILlmEvaluationDeleteOnlineConfig extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationOnlineConfigRequest, google_protobuf_empty_pb.Empty> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteOnlineConfig";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationOnlineConfigRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationOnlineConfigRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ILlmEvaluationsService_ILlmEvaluationGetOnlineResult extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationOnlineResultRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineResult> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationGetOnlineResult";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationOnlineResultRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationOnlineResultRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineResult>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineResult>;
}
interface ILlmEvaluationsService_ILlmEvaluationListOnlineResults extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineResultsRequest, ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineResultsResponse> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationListOnlineResults";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineResultsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineResultsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineResultsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineResultsResponse>;
}
interface ILlmEvaluationsService_ILlmEvaluationGetAnnotationQueueItem extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAnnotationQueueItemRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationAnnotationQueueItem> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationGetAnnotationQueueItem";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAnnotationQueueItemRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAnnotationQueueItemRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAnnotationQueueItem>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAnnotationQueueItem>;
}
interface ILlmEvaluationsService_ILlmEvaluationListAnnotationQueueItems extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAnnotationQueueItemsRequest, ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAnnotationQueueItemsResponse> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationListAnnotationQueueItems";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAnnotationQueueItemsRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAnnotationQueueItemsRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAnnotationQueueItemsResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAnnotationQueueItemsResponse>;
}
interface ILlmEvaluationsService_ILlmEvaluationUpdateAnnotationQueueItem extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationAnnotationQueueItemRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationAnnotationQueueItem> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateAnnotationQueueItem";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationAnnotationQueueItemRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationAnnotationQueueItemRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAnnotationQueueItem>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAnnotationQueueItem>;
}
interface ILlmEvaluationsService_ILlmEvaluationPromoteAnnotationQueueItem extends grpc.MethodDefinition<ondewo_nlu_llm_evaluation_pb.PromoteLlmEvaluationAnnotationQueueItemRequest, ondewo_nlu_llm_evaluation_pb.PromoteLlmEvaluationAnnotationQueueItemResponse> {
    path: "/ondewo.nlu.LlmEvaluations/LlmEvaluationPromoteAnnotationQueueItem";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.PromoteLlmEvaluationAnnotationQueueItemRequest>;
    requestDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.PromoteLlmEvaluationAnnotationQueueItemRequest>;
    responseSerialize: grpc.serialize<ondewo_nlu_llm_evaluation_pb.PromoteLlmEvaluationAnnotationQueueItemResponse>;
    responseDeserialize: grpc.deserialize<ondewo_nlu_llm_evaluation_pb.PromoteLlmEvaluationAnnotationQueueItemResponse>;
}

export const LlmEvaluationsService: ILlmEvaluationsService;

export interface ILlmEvaluationsServer {
    llmEvaluationCreateDataset: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationDatasetRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset>;
    llmEvaluationGetDataset: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationDatasetRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset>;
    llmEvaluationListDatasets: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsRequest, ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsResponse>;
    llmEvaluationUpdateDataset: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationDatasetRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset>;
    llmEvaluationDeleteDataset: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationDatasetRequest, google_protobuf_empty_pb.Empty>;
    llmEvaluationAddExample: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExampleRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample>;
    llmEvaluationAddExamples: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesRequest, ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesResponse>;
    llmEvaluationGetExample: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExampleRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample>;
    llmEvaluationListExamples: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesRequest, ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesResponse>;
    llmEvaluationUpdateExample: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExampleRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample>;
    llmEvaluationDeleteExample: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExampleRequest, google_protobuf_empty_pb.Empty>;
    llmEvaluationRunExperiment: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationExperimentRequest, ondewo_nlu_operations_pb.Operation>;
    llmEvaluationGetExperiment: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExperimentRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment>;
    llmEvaluationListExperiments: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsRequest, ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsResponse>;
    llmEvaluationUpdateExperiment: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExperimentRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment>;
    llmEvaluationDeleteExperiment: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExperimentRequest, google_protobuf_empty_pb.Empty>;
    llmEvaluationCancelExperiment: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.CancelLlmEvaluationExperimentRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment>;
    llmEvaluationCompareExperiments: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.CompareLlmEvaluationExperimentsRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationComparison>;
    llmEvaluationSubmitFeedback: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.SubmitLlmEvaluationFeedbackRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback>;
    llmEvaluationListFeedback: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackRequest, ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackResponse>;
    llmEvaluationDeleteFeedback: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationFeedbackRequest, google_protobuf_empty_pb.Empty>;
    llmEvaluationUpdateFeedback: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationFeedbackRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback>;
    llmEvaluationCreateReleaseGate: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationReleaseGateRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate>;
    llmEvaluationGetReleaseGate: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReleaseGateRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate>;
    llmEvaluationListReleaseGates: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGatesRequest, ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGatesResponse>;
    llmEvaluationUpdateReleaseGate: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationReleaseGateRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate>;
    llmEvaluationDeleteReleaseGate: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationReleaseGateRequest, google_protobuf_empty_pb.Empty>;
    llmEvaluationRunReleaseGate: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationReleaseGateRequest, ondewo_nlu_operations_pb.Operation>;
    llmEvaluationGetReleaseGateRun: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReleaseGateRunRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGateRun>;
    llmEvaluationListReleaseGateRuns: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGateRunsRequest, ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGateRunsResponse>;
    llmEvaluationCreateScorecard: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationScorecardRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard>;
    llmEvaluationGetScorecard: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationScorecardRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard>;
    llmEvaluationListScorecards: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationScorecardsRequest, ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationScorecardsResponse>;
    llmEvaluationUpdateScorecard: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationScorecardRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard>;
    llmEvaluationDeleteScorecard: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationScorecardRequest, google_protobuf_empty_pb.Empty>;
    llmEvaluationGetProjectSettings: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationProjectSettingsRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationProjectSettings>;
    llmEvaluationUpdateProjectSettings: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationProjectSettingsRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationProjectSettings>;
    llmEvaluationListEvaluators: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationEvaluatorsRequest, ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationEvaluatorsResponse>;
    llmEvaluationCreateExamplesFromSession: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationExamplesFromSessionRequest, ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationExamplesFromSessionResponse>;
    llmEvaluationSimulateConversations: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.SimulateLlmEvaluationConversationsRequest, ondewo_nlu_operations_pb.Operation>;
    llmEvaluationCreateSchedule: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationScheduleRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule>;
    llmEvaluationGetSchedule: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationScheduleRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule>;
    llmEvaluationListSchedules: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationSchedulesRequest, ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationSchedulesResponse>;
    llmEvaluationUpdateSchedule: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationScheduleRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule>;
    llmEvaluationDeleteSchedule: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationScheduleRequest, google_protobuf_empty_pb.Empty>;
    llmEvaluationCreateReport: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationReportRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationReport>;
    llmEvaluationGetReport: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReportRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationReport>;
    llmEvaluationListReports: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReportsRequest, ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReportsResponse>;
    llmEvaluationDeleteReport: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationReportRequest, google_protobuf_empty_pb.Empty>;
    llmEvaluationCreateAbExperiment: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationAbExperimentRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment>;
    llmEvaluationGetAbExperiment: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment>;
    llmEvaluationListAbExperiments: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbExperimentsRequest, ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbExperimentsResponse>;
    llmEvaluationUpdateAbExperiment: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationAbExperimentRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment>;
    llmEvaluationDeleteAbExperiment: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationAbExperimentRequest, google_protobuf_empty_pb.Empty>;
    llmEvaluationStartAbExperiment: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.StartLlmEvaluationAbExperimentRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment>;
    llmEvaluationStopAbExperiment: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.StopLlmEvaluationAbExperimentRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment>;
    llmEvaluationGetAbExperimentResults: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentResultsRequest, ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentResultsResponse>;
    llmEvaluationGetAbRolloutRecommendation: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbRolloutRecommendationRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutRecommendation>;
    llmEvaluationApplyAbRollout: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.ApplyLlmEvaluationAbRolloutRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutDecision>;
    llmEvaluationGetAbRolloutDecision: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbRolloutDecisionRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutDecision>;
    llmEvaluationListAbRolloutDecisions: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbRolloutDecisionsRequest, ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbRolloutDecisionsResponse>;
    llmEvaluationCreateOnlineConfig: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationOnlineConfigRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig>;
    llmEvaluationGetOnlineConfig: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationOnlineConfigRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig>;
    llmEvaluationListOnlineConfigs: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineConfigsRequest, ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineConfigsResponse>;
    llmEvaluationUpdateOnlineConfig: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationOnlineConfigRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig>;
    llmEvaluationDeleteOnlineConfig: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationOnlineConfigRequest, google_protobuf_empty_pb.Empty>;
    llmEvaluationGetOnlineResult: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationOnlineResultRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineResult>;
    llmEvaluationListOnlineResults: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineResultsRequest, ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineResultsResponse>;
    llmEvaluationGetAnnotationQueueItem: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAnnotationQueueItemRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationAnnotationQueueItem>;
    llmEvaluationListAnnotationQueueItems: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAnnotationQueueItemsRequest, ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAnnotationQueueItemsResponse>;
    llmEvaluationUpdateAnnotationQueueItem: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationAnnotationQueueItemRequest, ondewo_nlu_llm_evaluation_pb.LlmEvaluationAnnotationQueueItem>;
    llmEvaluationPromoteAnnotationQueueItem: grpc.handleUnaryCall<ondewo_nlu_llm_evaluation_pb.PromoteLlmEvaluationAnnotationQueueItemRequest, ondewo_nlu_llm_evaluation_pb.PromoteLlmEvaluationAnnotationQueueItemResponse>;
}

export interface ILlmEvaluationsClient {
    llmEvaluationCreateDataset(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationDatasetRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void): grpc.ClientUnaryCall;
    llmEvaluationCreateDataset(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void): grpc.ClientUnaryCall;
    llmEvaluationCreateDataset(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void): grpc.ClientUnaryCall;
    llmEvaluationGetDataset(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationDatasetRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void): grpc.ClientUnaryCall;
    llmEvaluationGetDataset(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void): grpc.ClientUnaryCall;
    llmEvaluationGetDataset(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void): grpc.ClientUnaryCall;
    llmEvaluationListDatasets(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationListDatasets(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationListDatasets(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateDataset(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationDatasetRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateDataset(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateDataset(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteDataset(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationDatasetRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteDataset(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteDataset(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationAddExample(request: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExampleRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void): grpc.ClientUnaryCall;
    llmEvaluationAddExample(request: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExampleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void): grpc.ClientUnaryCall;
    llmEvaluationAddExample(request: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExampleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void): grpc.ClientUnaryCall;
    llmEvaluationAddExamples(request: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationAddExamples(request: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationAddExamples(request: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationGetExample(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExampleRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void): grpc.ClientUnaryCall;
    llmEvaluationGetExample(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExampleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void): grpc.ClientUnaryCall;
    llmEvaluationGetExample(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExampleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void): grpc.ClientUnaryCall;
    llmEvaluationListExamples(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationListExamples(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationListExamples(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateExample(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExampleRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateExample(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExampleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateExample(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExampleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteExample(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExampleRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteExample(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExampleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteExample(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExampleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationRunExperiment(request: ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationExperimentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    llmEvaluationRunExperiment(request: ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationExperimentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    llmEvaluationRunExperiment(request: ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationExperimentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    llmEvaluationGetExperiment(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExperimentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void): grpc.ClientUnaryCall;
    llmEvaluationGetExperiment(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExperimentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void): grpc.ClientUnaryCall;
    llmEvaluationGetExperiment(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExperimentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void): grpc.ClientUnaryCall;
    llmEvaluationListExperiments(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationListExperiments(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationListExperiments(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateExperiment(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExperimentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateExperiment(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExperimentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateExperiment(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExperimentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteExperiment(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExperimentRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteExperiment(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExperimentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteExperiment(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExperimentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationCancelExperiment(request: ondewo_nlu_llm_evaluation_pb.CancelLlmEvaluationExperimentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void): grpc.ClientUnaryCall;
    llmEvaluationCancelExperiment(request: ondewo_nlu_llm_evaluation_pb.CancelLlmEvaluationExperimentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void): grpc.ClientUnaryCall;
    llmEvaluationCancelExperiment(request: ondewo_nlu_llm_evaluation_pb.CancelLlmEvaluationExperimentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void): grpc.ClientUnaryCall;
    llmEvaluationCompareExperiments(request: ondewo_nlu_llm_evaluation_pb.CompareLlmEvaluationExperimentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationComparison) => void): grpc.ClientUnaryCall;
    llmEvaluationCompareExperiments(request: ondewo_nlu_llm_evaluation_pb.CompareLlmEvaluationExperimentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationComparison) => void): grpc.ClientUnaryCall;
    llmEvaluationCompareExperiments(request: ondewo_nlu_llm_evaluation_pb.CompareLlmEvaluationExperimentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationComparison) => void): grpc.ClientUnaryCall;
    llmEvaluationSubmitFeedback(request: ondewo_nlu_llm_evaluation_pb.SubmitLlmEvaluationFeedbackRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback) => void): grpc.ClientUnaryCall;
    llmEvaluationSubmitFeedback(request: ondewo_nlu_llm_evaluation_pb.SubmitLlmEvaluationFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback) => void): grpc.ClientUnaryCall;
    llmEvaluationSubmitFeedback(request: ondewo_nlu_llm_evaluation_pb.SubmitLlmEvaluationFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback) => void): grpc.ClientUnaryCall;
    llmEvaluationListFeedback(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationListFeedback(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationListFeedback(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteFeedback(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationFeedbackRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteFeedback(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteFeedback(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateFeedback(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationFeedbackRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateFeedback(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateFeedback(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback) => void): grpc.ClientUnaryCall;
    llmEvaluationCreateReleaseGate(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationReleaseGateRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate) => void): grpc.ClientUnaryCall;
    llmEvaluationCreateReleaseGate(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationReleaseGateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate) => void): grpc.ClientUnaryCall;
    llmEvaluationCreateReleaseGate(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationReleaseGateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate) => void): grpc.ClientUnaryCall;
    llmEvaluationGetReleaseGate(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReleaseGateRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate) => void): grpc.ClientUnaryCall;
    llmEvaluationGetReleaseGate(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReleaseGateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate) => void): grpc.ClientUnaryCall;
    llmEvaluationGetReleaseGate(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReleaseGateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate) => void): grpc.ClientUnaryCall;
    llmEvaluationListReleaseGates(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGatesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGatesResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationListReleaseGates(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGatesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGatesResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationListReleaseGates(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGatesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGatesResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateReleaseGate(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationReleaseGateRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateReleaseGate(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationReleaseGateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateReleaseGate(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationReleaseGateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteReleaseGate(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationReleaseGateRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteReleaseGate(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationReleaseGateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteReleaseGate(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationReleaseGateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationRunReleaseGate(request: ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationReleaseGateRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    llmEvaluationRunReleaseGate(request: ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationReleaseGateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    llmEvaluationRunReleaseGate(request: ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationReleaseGateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    llmEvaluationGetReleaseGateRun(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReleaseGateRunRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGateRun) => void): grpc.ClientUnaryCall;
    llmEvaluationGetReleaseGateRun(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReleaseGateRunRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGateRun) => void): grpc.ClientUnaryCall;
    llmEvaluationGetReleaseGateRun(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReleaseGateRunRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGateRun) => void): grpc.ClientUnaryCall;
    llmEvaluationListReleaseGateRuns(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGateRunsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGateRunsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationListReleaseGateRuns(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGateRunsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGateRunsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationListReleaseGateRuns(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGateRunsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGateRunsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationCreateScorecard(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationScorecardRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard) => void): grpc.ClientUnaryCall;
    llmEvaluationCreateScorecard(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationScorecardRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard) => void): grpc.ClientUnaryCall;
    llmEvaluationCreateScorecard(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationScorecardRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard) => void): grpc.ClientUnaryCall;
    llmEvaluationGetScorecard(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationScorecardRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard) => void): grpc.ClientUnaryCall;
    llmEvaluationGetScorecard(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationScorecardRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard) => void): grpc.ClientUnaryCall;
    llmEvaluationGetScorecard(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationScorecardRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard) => void): grpc.ClientUnaryCall;
    llmEvaluationListScorecards(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationScorecardsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationScorecardsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationListScorecards(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationScorecardsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationScorecardsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationListScorecards(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationScorecardsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationScorecardsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateScorecard(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationScorecardRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateScorecard(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationScorecardRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateScorecard(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationScorecardRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteScorecard(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationScorecardRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteScorecard(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationScorecardRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteScorecard(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationScorecardRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationGetProjectSettings(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationProjectSettingsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationProjectSettings) => void): grpc.ClientUnaryCall;
    llmEvaluationGetProjectSettings(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationProjectSettingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationProjectSettings) => void): grpc.ClientUnaryCall;
    llmEvaluationGetProjectSettings(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationProjectSettingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationProjectSettings) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateProjectSettings(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationProjectSettingsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationProjectSettings) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateProjectSettings(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationProjectSettingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationProjectSettings) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateProjectSettings(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationProjectSettingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationProjectSettings) => void): grpc.ClientUnaryCall;
    llmEvaluationListEvaluators(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationEvaluatorsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationEvaluatorsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationListEvaluators(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationEvaluatorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationEvaluatorsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationListEvaluators(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationEvaluatorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationEvaluatorsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationCreateExamplesFromSession(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationExamplesFromSessionRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationExamplesFromSessionResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationCreateExamplesFromSession(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationExamplesFromSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationExamplesFromSessionResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationCreateExamplesFromSession(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationExamplesFromSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationExamplesFromSessionResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationSimulateConversations(request: ondewo_nlu_llm_evaluation_pb.SimulateLlmEvaluationConversationsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    llmEvaluationSimulateConversations(request: ondewo_nlu_llm_evaluation_pb.SimulateLlmEvaluationConversationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    llmEvaluationSimulateConversations(request: ondewo_nlu_llm_evaluation_pb.SimulateLlmEvaluationConversationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    llmEvaluationCreateSchedule(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationScheduleRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule) => void): grpc.ClientUnaryCall;
    llmEvaluationCreateSchedule(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationScheduleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule) => void): grpc.ClientUnaryCall;
    llmEvaluationCreateSchedule(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationScheduleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule) => void): grpc.ClientUnaryCall;
    llmEvaluationGetSchedule(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationScheduleRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule) => void): grpc.ClientUnaryCall;
    llmEvaluationGetSchedule(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationScheduleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule) => void): grpc.ClientUnaryCall;
    llmEvaluationGetSchedule(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationScheduleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule) => void): grpc.ClientUnaryCall;
    llmEvaluationListSchedules(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationSchedulesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationSchedulesResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationListSchedules(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationSchedulesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationSchedulesResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationListSchedules(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationSchedulesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationSchedulesResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateSchedule(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationScheduleRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateSchedule(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationScheduleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateSchedule(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationScheduleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteSchedule(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationScheduleRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteSchedule(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationScheduleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteSchedule(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationScheduleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationCreateReport(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationReportRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReport) => void): grpc.ClientUnaryCall;
    llmEvaluationCreateReport(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationReportRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReport) => void): grpc.ClientUnaryCall;
    llmEvaluationCreateReport(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationReportRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReport) => void): grpc.ClientUnaryCall;
    llmEvaluationGetReport(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReportRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReport) => void): grpc.ClientUnaryCall;
    llmEvaluationGetReport(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReportRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReport) => void): grpc.ClientUnaryCall;
    llmEvaluationGetReport(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReportRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReport) => void): grpc.ClientUnaryCall;
    llmEvaluationListReports(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReportsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReportsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationListReports(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReportsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReportsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationListReports(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReportsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReportsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteReport(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationReportRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteReport(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationReportRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteReport(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationReportRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationCreateAbExperiment(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationAbExperimentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment) => void): grpc.ClientUnaryCall;
    llmEvaluationCreateAbExperiment(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationAbExperimentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment) => void): grpc.ClientUnaryCall;
    llmEvaluationCreateAbExperiment(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationAbExperimentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment) => void): grpc.ClientUnaryCall;
    llmEvaluationGetAbExperiment(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment) => void): grpc.ClientUnaryCall;
    llmEvaluationGetAbExperiment(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment) => void): grpc.ClientUnaryCall;
    llmEvaluationGetAbExperiment(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment) => void): grpc.ClientUnaryCall;
    llmEvaluationListAbExperiments(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbExperimentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbExperimentsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationListAbExperiments(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbExperimentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbExperimentsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationListAbExperiments(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbExperimentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbExperimentsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateAbExperiment(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationAbExperimentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateAbExperiment(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationAbExperimentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateAbExperiment(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationAbExperimentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteAbExperiment(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationAbExperimentRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteAbExperiment(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationAbExperimentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteAbExperiment(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationAbExperimentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationStartAbExperiment(request: ondewo_nlu_llm_evaluation_pb.StartLlmEvaluationAbExperimentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment) => void): grpc.ClientUnaryCall;
    llmEvaluationStartAbExperiment(request: ondewo_nlu_llm_evaluation_pb.StartLlmEvaluationAbExperimentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment) => void): grpc.ClientUnaryCall;
    llmEvaluationStartAbExperiment(request: ondewo_nlu_llm_evaluation_pb.StartLlmEvaluationAbExperimentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment) => void): grpc.ClientUnaryCall;
    llmEvaluationStopAbExperiment(request: ondewo_nlu_llm_evaluation_pb.StopLlmEvaluationAbExperimentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment) => void): grpc.ClientUnaryCall;
    llmEvaluationStopAbExperiment(request: ondewo_nlu_llm_evaluation_pb.StopLlmEvaluationAbExperimentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment) => void): grpc.ClientUnaryCall;
    llmEvaluationStopAbExperiment(request: ondewo_nlu_llm_evaluation_pb.StopLlmEvaluationAbExperimentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment) => void): grpc.ClientUnaryCall;
    llmEvaluationGetAbExperimentResults(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentResultsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentResultsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationGetAbExperimentResults(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentResultsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentResultsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationGetAbExperimentResults(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentResultsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentResultsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationGetAbRolloutRecommendation(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbRolloutRecommendationRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutRecommendation) => void): grpc.ClientUnaryCall;
    llmEvaluationGetAbRolloutRecommendation(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbRolloutRecommendationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutRecommendation) => void): grpc.ClientUnaryCall;
    llmEvaluationGetAbRolloutRecommendation(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbRolloutRecommendationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutRecommendation) => void): grpc.ClientUnaryCall;
    llmEvaluationApplyAbRollout(request: ondewo_nlu_llm_evaluation_pb.ApplyLlmEvaluationAbRolloutRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutDecision) => void): grpc.ClientUnaryCall;
    llmEvaluationApplyAbRollout(request: ondewo_nlu_llm_evaluation_pb.ApplyLlmEvaluationAbRolloutRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutDecision) => void): grpc.ClientUnaryCall;
    llmEvaluationApplyAbRollout(request: ondewo_nlu_llm_evaluation_pb.ApplyLlmEvaluationAbRolloutRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutDecision) => void): grpc.ClientUnaryCall;
    llmEvaluationGetAbRolloutDecision(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbRolloutDecisionRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutDecision) => void): grpc.ClientUnaryCall;
    llmEvaluationGetAbRolloutDecision(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbRolloutDecisionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutDecision) => void): grpc.ClientUnaryCall;
    llmEvaluationGetAbRolloutDecision(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbRolloutDecisionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutDecision) => void): grpc.ClientUnaryCall;
    llmEvaluationListAbRolloutDecisions(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbRolloutDecisionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbRolloutDecisionsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationListAbRolloutDecisions(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbRolloutDecisionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbRolloutDecisionsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationListAbRolloutDecisions(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbRolloutDecisionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbRolloutDecisionsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationCreateOnlineConfig(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationOnlineConfigRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig) => void): grpc.ClientUnaryCall;
    llmEvaluationCreateOnlineConfig(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationOnlineConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig) => void): grpc.ClientUnaryCall;
    llmEvaluationCreateOnlineConfig(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationOnlineConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig) => void): grpc.ClientUnaryCall;
    llmEvaluationGetOnlineConfig(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationOnlineConfigRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig) => void): grpc.ClientUnaryCall;
    llmEvaluationGetOnlineConfig(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationOnlineConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig) => void): grpc.ClientUnaryCall;
    llmEvaluationGetOnlineConfig(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationOnlineConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig) => void): grpc.ClientUnaryCall;
    llmEvaluationListOnlineConfigs(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineConfigsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineConfigsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationListOnlineConfigs(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineConfigsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineConfigsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationListOnlineConfigs(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineConfigsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineConfigsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateOnlineConfig(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationOnlineConfigRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateOnlineConfig(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationOnlineConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateOnlineConfig(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationOnlineConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteOnlineConfig(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationOnlineConfigRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteOnlineConfig(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationOnlineConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationDeleteOnlineConfig(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationOnlineConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    llmEvaluationGetOnlineResult(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationOnlineResultRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineResult) => void): grpc.ClientUnaryCall;
    llmEvaluationGetOnlineResult(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationOnlineResultRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineResult) => void): grpc.ClientUnaryCall;
    llmEvaluationGetOnlineResult(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationOnlineResultRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineResult) => void): grpc.ClientUnaryCall;
    llmEvaluationListOnlineResults(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineResultsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineResultsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationListOnlineResults(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineResultsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineResultsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationListOnlineResults(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineResultsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineResultsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationGetAnnotationQueueItem(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAnnotationQueueItemRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAnnotationQueueItem) => void): grpc.ClientUnaryCall;
    llmEvaluationGetAnnotationQueueItem(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAnnotationQueueItemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAnnotationQueueItem) => void): grpc.ClientUnaryCall;
    llmEvaluationGetAnnotationQueueItem(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAnnotationQueueItemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAnnotationQueueItem) => void): grpc.ClientUnaryCall;
    llmEvaluationListAnnotationQueueItems(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAnnotationQueueItemsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAnnotationQueueItemsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationListAnnotationQueueItems(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAnnotationQueueItemsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAnnotationQueueItemsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationListAnnotationQueueItems(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAnnotationQueueItemsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAnnotationQueueItemsResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateAnnotationQueueItem(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationAnnotationQueueItemRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAnnotationQueueItem) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateAnnotationQueueItem(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationAnnotationQueueItemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAnnotationQueueItem) => void): grpc.ClientUnaryCall;
    llmEvaluationUpdateAnnotationQueueItem(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationAnnotationQueueItemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAnnotationQueueItem) => void): grpc.ClientUnaryCall;
    llmEvaluationPromoteAnnotationQueueItem(request: ondewo_nlu_llm_evaluation_pb.PromoteLlmEvaluationAnnotationQueueItemRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.PromoteLlmEvaluationAnnotationQueueItemResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationPromoteAnnotationQueueItem(request: ondewo_nlu_llm_evaluation_pb.PromoteLlmEvaluationAnnotationQueueItemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.PromoteLlmEvaluationAnnotationQueueItemResponse) => void): grpc.ClientUnaryCall;
    llmEvaluationPromoteAnnotationQueueItem(request: ondewo_nlu_llm_evaluation_pb.PromoteLlmEvaluationAnnotationQueueItemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.PromoteLlmEvaluationAnnotationQueueItemResponse) => void): grpc.ClientUnaryCall;
}

export class LlmEvaluationsClient extends grpc.Client implements ILlmEvaluationsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public llmEvaluationCreateDataset(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationDatasetRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void): grpc.ClientUnaryCall;
    public llmEvaluationCreateDataset(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void): grpc.ClientUnaryCall;
    public llmEvaluationCreateDataset(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetDataset(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationDatasetRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetDataset(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetDataset(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void): grpc.ClientUnaryCall;
    public llmEvaluationListDatasets(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationListDatasets(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationListDatasets(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateDataset(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationDatasetRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateDataset(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateDataset(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteDataset(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationDatasetRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteDataset(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationDatasetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteDataset(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationDatasetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationAddExample(request: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExampleRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void): grpc.ClientUnaryCall;
    public llmEvaluationAddExample(request: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExampleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void): grpc.ClientUnaryCall;
    public llmEvaluationAddExample(request: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExampleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void): grpc.ClientUnaryCall;
    public llmEvaluationAddExamples(request: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationAddExamples(request: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationAddExamples(request: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetExample(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExampleRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetExample(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExampleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetExample(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExampleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void): grpc.ClientUnaryCall;
    public llmEvaluationListExamples(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationListExamples(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationListExamples(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateExample(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExampleRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateExample(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExampleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateExample(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExampleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteExample(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExampleRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteExample(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExampleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteExample(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExampleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationRunExperiment(request: ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationExperimentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public llmEvaluationRunExperiment(request: ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationExperimentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public llmEvaluationRunExperiment(request: ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationExperimentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetExperiment(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExperimentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetExperiment(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExperimentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetExperiment(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExperimentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void): grpc.ClientUnaryCall;
    public llmEvaluationListExperiments(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationListExperiments(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationListExperiments(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateExperiment(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExperimentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateExperiment(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExperimentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateExperiment(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExperimentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteExperiment(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExperimentRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteExperiment(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExperimentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteExperiment(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExperimentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationCancelExperiment(request: ondewo_nlu_llm_evaluation_pb.CancelLlmEvaluationExperimentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void): grpc.ClientUnaryCall;
    public llmEvaluationCancelExperiment(request: ondewo_nlu_llm_evaluation_pb.CancelLlmEvaluationExperimentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void): grpc.ClientUnaryCall;
    public llmEvaluationCancelExperiment(request: ondewo_nlu_llm_evaluation_pb.CancelLlmEvaluationExperimentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void): grpc.ClientUnaryCall;
    public llmEvaluationCompareExperiments(request: ondewo_nlu_llm_evaluation_pb.CompareLlmEvaluationExperimentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationComparison) => void): grpc.ClientUnaryCall;
    public llmEvaluationCompareExperiments(request: ondewo_nlu_llm_evaluation_pb.CompareLlmEvaluationExperimentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationComparison) => void): grpc.ClientUnaryCall;
    public llmEvaluationCompareExperiments(request: ondewo_nlu_llm_evaluation_pb.CompareLlmEvaluationExperimentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationComparison) => void): grpc.ClientUnaryCall;
    public llmEvaluationSubmitFeedback(request: ondewo_nlu_llm_evaluation_pb.SubmitLlmEvaluationFeedbackRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback) => void): grpc.ClientUnaryCall;
    public llmEvaluationSubmitFeedback(request: ondewo_nlu_llm_evaluation_pb.SubmitLlmEvaluationFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback) => void): grpc.ClientUnaryCall;
    public llmEvaluationSubmitFeedback(request: ondewo_nlu_llm_evaluation_pb.SubmitLlmEvaluationFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback) => void): grpc.ClientUnaryCall;
    public llmEvaluationListFeedback(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationListFeedback(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationListFeedback(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteFeedback(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationFeedbackRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteFeedback(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteFeedback(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateFeedback(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationFeedbackRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateFeedback(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateFeedback(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback) => void): grpc.ClientUnaryCall;
    public llmEvaluationCreateReleaseGate(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationReleaseGateRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate) => void): grpc.ClientUnaryCall;
    public llmEvaluationCreateReleaseGate(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationReleaseGateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate) => void): grpc.ClientUnaryCall;
    public llmEvaluationCreateReleaseGate(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationReleaseGateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetReleaseGate(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReleaseGateRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetReleaseGate(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReleaseGateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetReleaseGate(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReleaseGateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate) => void): grpc.ClientUnaryCall;
    public llmEvaluationListReleaseGates(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGatesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGatesResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationListReleaseGates(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGatesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGatesResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationListReleaseGates(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGatesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGatesResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateReleaseGate(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationReleaseGateRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateReleaseGate(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationReleaseGateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateReleaseGate(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationReleaseGateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteReleaseGate(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationReleaseGateRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteReleaseGate(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationReleaseGateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteReleaseGate(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationReleaseGateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationRunReleaseGate(request: ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationReleaseGateRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public llmEvaluationRunReleaseGate(request: ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationReleaseGateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public llmEvaluationRunReleaseGate(request: ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationReleaseGateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetReleaseGateRun(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReleaseGateRunRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGateRun) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetReleaseGateRun(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReleaseGateRunRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGateRun) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetReleaseGateRun(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReleaseGateRunRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGateRun) => void): grpc.ClientUnaryCall;
    public llmEvaluationListReleaseGateRuns(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGateRunsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGateRunsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationListReleaseGateRuns(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGateRunsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGateRunsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationListReleaseGateRuns(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGateRunsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGateRunsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationCreateScorecard(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationScorecardRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard) => void): grpc.ClientUnaryCall;
    public llmEvaluationCreateScorecard(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationScorecardRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard) => void): grpc.ClientUnaryCall;
    public llmEvaluationCreateScorecard(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationScorecardRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetScorecard(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationScorecardRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetScorecard(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationScorecardRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetScorecard(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationScorecardRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard) => void): grpc.ClientUnaryCall;
    public llmEvaluationListScorecards(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationScorecardsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationScorecardsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationListScorecards(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationScorecardsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationScorecardsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationListScorecards(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationScorecardsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationScorecardsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateScorecard(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationScorecardRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateScorecard(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationScorecardRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateScorecard(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationScorecardRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteScorecard(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationScorecardRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteScorecard(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationScorecardRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteScorecard(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationScorecardRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetProjectSettings(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationProjectSettingsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationProjectSettings) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetProjectSettings(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationProjectSettingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationProjectSettings) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetProjectSettings(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationProjectSettingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationProjectSettings) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateProjectSettings(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationProjectSettingsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationProjectSettings) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateProjectSettings(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationProjectSettingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationProjectSettings) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateProjectSettings(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationProjectSettingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationProjectSettings) => void): grpc.ClientUnaryCall;
    public llmEvaluationListEvaluators(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationEvaluatorsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationEvaluatorsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationListEvaluators(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationEvaluatorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationEvaluatorsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationListEvaluators(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationEvaluatorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationEvaluatorsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationCreateExamplesFromSession(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationExamplesFromSessionRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationExamplesFromSessionResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationCreateExamplesFromSession(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationExamplesFromSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationExamplesFromSessionResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationCreateExamplesFromSession(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationExamplesFromSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationExamplesFromSessionResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationSimulateConversations(request: ondewo_nlu_llm_evaluation_pb.SimulateLlmEvaluationConversationsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public llmEvaluationSimulateConversations(request: ondewo_nlu_llm_evaluation_pb.SimulateLlmEvaluationConversationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public llmEvaluationSimulateConversations(request: ondewo_nlu_llm_evaluation_pb.SimulateLlmEvaluationConversationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public llmEvaluationCreateSchedule(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationScheduleRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule) => void): grpc.ClientUnaryCall;
    public llmEvaluationCreateSchedule(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationScheduleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule) => void): grpc.ClientUnaryCall;
    public llmEvaluationCreateSchedule(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationScheduleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetSchedule(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationScheduleRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetSchedule(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationScheduleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetSchedule(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationScheduleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule) => void): grpc.ClientUnaryCall;
    public llmEvaluationListSchedules(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationSchedulesRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationSchedulesResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationListSchedules(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationSchedulesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationSchedulesResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationListSchedules(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationSchedulesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationSchedulesResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateSchedule(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationScheduleRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateSchedule(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationScheduleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateSchedule(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationScheduleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteSchedule(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationScheduleRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteSchedule(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationScheduleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteSchedule(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationScheduleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationCreateReport(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationReportRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReport) => void): grpc.ClientUnaryCall;
    public llmEvaluationCreateReport(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationReportRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReport) => void): grpc.ClientUnaryCall;
    public llmEvaluationCreateReport(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationReportRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReport) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetReport(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReportRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReport) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetReport(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReportRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReport) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetReport(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReportRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReport) => void): grpc.ClientUnaryCall;
    public llmEvaluationListReports(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReportsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReportsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationListReports(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReportsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReportsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationListReports(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReportsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReportsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteReport(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationReportRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteReport(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationReportRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteReport(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationReportRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationCreateAbExperiment(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationAbExperimentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment) => void): grpc.ClientUnaryCall;
    public llmEvaluationCreateAbExperiment(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationAbExperimentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment) => void): grpc.ClientUnaryCall;
    public llmEvaluationCreateAbExperiment(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationAbExperimentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetAbExperiment(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetAbExperiment(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetAbExperiment(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment) => void): grpc.ClientUnaryCall;
    public llmEvaluationListAbExperiments(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbExperimentsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbExperimentsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationListAbExperiments(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbExperimentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbExperimentsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationListAbExperiments(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbExperimentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbExperimentsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateAbExperiment(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationAbExperimentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateAbExperiment(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationAbExperimentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateAbExperiment(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationAbExperimentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteAbExperiment(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationAbExperimentRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteAbExperiment(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationAbExperimentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteAbExperiment(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationAbExperimentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationStartAbExperiment(request: ondewo_nlu_llm_evaluation_pb.StartLlmEvaluationAbExperimentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment) => void): grpc.ClientUnaryCall;
    public llmEvaluationStartAbExperiment(request: ondewo_nlu_llm_evaluation_pb.StartLlmEvaluationAbExperimentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment) => void): grpc.ClientUnaryCall;
    public llmEvaluationStartAbExperiment(request: ondewo_nlu_llm_evaluation_pb.StartLlmEvaluationAbExperimentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment) => void): grpc.ClientUnaryCall;
    public llmEvaluationStopAbExperiment(request: ondewo_nlu_llm_evaluation_pb.StopLlmEvaluationAbExperimentRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment) => void): grpc.ClientUnaryCall;
    public llmEvaluationStopAbExperiment(request: ondewo_nlu_llm_evaluation_pb.StopLlmEvaluationAbExperimentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment) => void): grpc.ClientUnaryCall;
    public llmEvaluationStopAbExperiment(request: ondewo_nlu_llm_evaluation_pb.StopLlmEvaluationAbExperimentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetAbExperimentResults(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentResultsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentResultsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetAbExperimentResults(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentResultsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentResultsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetAbExperimentResults(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentResultsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentResultsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetAbRolloutRecommendation(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbRolloutRecommendationRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutRecommendation) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetAbRolloutRecommendation(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbRolloutRecommendationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutRecommendation) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetAbRolloutRecommendation(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbRolloutRecommendationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutRecommendation) => void): grpc.ClientUnaryCall;
    public llmEvaluationApplyAbRollout(request: ondewo_nlu_llm_evaluation_pb.ApplyLlmEvaluationAbRolloutRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutDecision) => void): grpc.ClientUnaryCall;
    public llmEvaluationApplyAbRollout(request: ondewo_nlu_llm_evaluation_pb.ApplyLlmEvaluationAbRolloutRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutDecision) => void): grpc.ClientUnaryCall;
    public llmEvaluationApplyAbRollout(request: ondewo_nlu_llm_evaluation_pb.ApplyLlmEvaluationAbRolloutRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutDecision) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetAbRolloutDecision(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbRolloutDecisionRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutDecision) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetAbRolloutDecision(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbRolloutDecisionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutDecision) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetAbRolloutDecision(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbRolloutDecisionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutDecision) => void): grpc.ClientUnaryCall;
    public llmEvaluationListAbRolloutDecisions(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbRolloutDecisionsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbRolloutDecisionsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationListAbRolloutDecisions(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbRolloutDecisionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbRolloutDecisionsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationListAbRolloutDecisions(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbRolloutDecisionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbRolloutDecisionsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationCreateOnlineConfig(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationOnlineConfigRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig) => void): grpc.ClientUnaryCall;
    public llmEvaluationCreateOnlineConfig(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationOnlineConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig) => void): grpc.ClientUnaryCall;
    public llmEvaluationCreateOnlineConfig(request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationOnlineConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetOnlineConfig(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationOnlineConfigRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetOnlineConfig(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationOnlineConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetOnlineConfig(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationOnlineConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig) => void): grpc.ClientUnaryCall;
    public llmEvaluationListOnlineConfigs(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineConfigsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineConfigsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationListOnlineConfigs(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineConfigsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineConfigsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationListOnlineConfigs(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineConfigsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineConfigsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateOnlineConfig(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationOnlineConfigRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateOnlineConfig(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationOnlineConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateOnlineConfig(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationOnlineConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteOnlineConfig(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationOnlineConfigRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteOnlineConfig(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationOnlineConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationDeleteOnlineConfig(request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationOnlineConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetOnlineResult(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationOnlineResultRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineResult) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetOnlineResult(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationOnlineResultRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineResult) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetOnlineResult(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationOnlineResultRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineResult) => void): grpc.ClientUnaryCall;
    public llmEvaluationListOnlineResults(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineResultsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineResultsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationListOnlineResults(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineResultsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineResultsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationListOnlineResults(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineResultsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineResultsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetAnnotationQueueItem(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAnnotationQueueItemRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAnnotationQueueItem) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetAnnotationQueueItem(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAnnotationQueueItemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAnnotationQueueItem) => void): grpc.ClientUnaryCall;
    public llmEvaluationGetAnnotationQueueItem(request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAnnotationQueueItemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAnnotationQueueItem) => void): grpc.ClientUnaryCall;
    public llmEvaluationListAnnotationQueueItems(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAnnotationQueueItemsRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAnnotationQueueItemsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationListAnnotationQueueItems(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAnnotationQueueItemsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAnnotationQueueItemsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationListAnnotationQueueItems(request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAnnotationQueueItemsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAnnotationQueueItemsResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateAnnotationQueueItem(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationAnnotationQueueItemRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAnnotationQueueItem) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateAnnotationQueueItem(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationAnnotationQueueItemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAnnotationQueueItem) => void): grpc.ClientUnaryCall;
    public llmEvaluationUpdateAnnotationQueueItem(request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationAnnotationQueueItemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAnnotationQueueItem) => void): grpc.ClientUnaryCall;
    public llmEvaluationPromoteAnnotationQueueItem(request: ondewo_nlu_llm_evaluation_pb.PromoteLlmEvaluationAnnotationQueueItemRequest, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.PromoteLlmEvaluationAnnotationQueueItemResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationPromoteAnnotationQueueItem(request: ondewo_nlu_llm_evaluation_pb.PromoteLlmEvaluationAnnotationQueueItemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.PromoteLlmEvaluationAnnotationQueueItemResponse) => void): grpc.ClientUnaryCall;
    public llmEvaluationPromoteAnnotationQueueItem(request: ondewo_nlu_llm_evaluation_pb.PromoteLlmEvaluationAnnotationQueueItemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ondewo_nlu_llm_evaluation_pb.PromoteLlmEvaluationAnnotationQueueItemResponse) => void): grpc.ClientUnaryCall;
}
