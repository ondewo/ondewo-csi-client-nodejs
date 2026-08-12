// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2020-2026 ONDEWO GmbH
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
var ondewo_nlu_llm_evaluation_pb = require('../../ondewo/nlu/llm_evaluation_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var ondewo_nlu_operations_pb = require('../../ondewo/nlu/operations_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_AddLlmEvaluationExampleRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExampleRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.AddLlmEvaluationExampleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_AddLlmEvaluationExampleRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExampleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_AddLlmEvaluationExamplesRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.AddLlmEvaluationExamplesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_AddLlmEvaluationExamplesRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_AddLlmEvaluationExamplesResponse(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.AddLlmEvaluationExamplesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_AddLlmEvaluationExamplesResponse(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ApplyLlmEvaluationAbRolloutRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ApplyLlmEvaluationAbRolloutRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ApplyLlmEvaluationAbRolloutRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ApplyLlmEvaluationAbRolloutRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ApplyLlmEvaluationAbRolloutRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CancelLlmEvaluationExperimentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.CancelLlmEvaluationExperimentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.CancelLlmEvaluationExperimentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CancelLlmEvaluationExperimentRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.CancelLlmEvaluationExperimentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CompareLlmEvaluationExperimentsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.CompareLlmEvaluationExperimentsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.CompareLlmEvaluationExperimentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CompareLlmEvaluationExperimentsRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.CompareLlmEvaluationExperimentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CreateLlmEvaluationAbExperimentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationAbExperimentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.CreateLlmEvaluationAbExperimentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CreateLlmEvaluationAbExperimentRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationAbExperimentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CreateLlmEvaluationDatasetRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationDatasetRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.CreateLlmEvaluationDatasetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CreateLlmEvaluationDatasetRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationDatasetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CreateLlmEvaluationExamplesFromSessionRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationExamplesFromSessionRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.CreateLlmEvaluationExamplesFromSessionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CreateLlmEvaluationExamplesFromSessionRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationExamplesFromSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CreateLlmEvaluationExamplesFromSessionResponse(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationExamplesFromSessionResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.CreateLlmEvaluationExamplesFromSessionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CreateLlmEvaluationExamplesFromSessionResponse(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationExamplesFromSessionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CreateLlmEvaluationOnlineConfigRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationOnlineConfigRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.CreateLlmEvaluationOnlineConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CreateLlmEvaluationOnlineConfigRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationOnlineConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CreateLlmEvaluationReleaseGateRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationReleaseGateRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.CreateLlmEvaluationReleaseGateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CreateLlmEvaluationReleaseGateRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationReleaseGateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CreateLlmEvaluationReportRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationReportRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.CreateLlmEvaluationReportRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CreateLlmEvaluationReportRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationReportRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CreateLlmEvaluationScheduleRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationScheduleRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.CreateLlmEvaluationScheduleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CreateLlmEvaluationScheduleRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationScheduleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CreateLlmEvaluationScorecardRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationScorecardRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.CreateLlmEvaluationScorecardRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CreateLlmEvaluationScorecardRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationScorecardRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DeleteLlmEvaluationAbExperimentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationAbExperimentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.DeleteLlmEvaluationAbExperimentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteLlmEvaluationAbExperimentRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationAbExperimentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DeleteLlmEvaluationDatasetRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationDatasetRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.DeleteLlmEvaluationDatasetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteLlmEvaluationDatasetRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationDatasetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DeleteLlmEvaluationExampleRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExampleRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.DeleteLlmEvaluationExampleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteLlmEvaluationExampleRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExampleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DeleteLlmEvaluationExperimentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExperimentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.DeleteLlmEvaluationExperimentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteLlmEvaluationExperimentRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExperimentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DeleteLlmEvaluationFeedbackRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationFeedbackRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.DeleteLlmEvaluationFeedbackRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteLlmEvaluationFeedbackRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationFeedbackRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DeleteLlmEvaluationOnlineConfigRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationOnlineConfigRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.DeleteLlmEvaluationOnlineConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteLlmEvaluationOnlineConfigRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationOnlineConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DeleteLlmEvaluationReleaseGateRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationReleaseGateRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.DeleteLlmEvaluationReleaseGateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteLlmEvaluationReleaseGateRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationReleaseGateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DeleteLlmEvaluationReportRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationReportRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.DeleteLlmEvaluationReportRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteLlmEvaluationReportRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationReportRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DeleteLlmEvaluationScheduleRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationScheduleRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.DeleteLlmEvaluationScheduleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteLlmEvaluationScheduleRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationScheduleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DeleteLlmEvaluationScorecardRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationScorecardRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.DeleteLlmEvaluationScorecardRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteLlmEvaluationScorecardRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationScorecardRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetLlmEvaluationAbExperimentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetLlmEvaluationAbExperimentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetLlmEvaluationAbExperimentRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetLlmEvaluationAbExperimentResultsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentResultsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetLlmEvaluationAbExperimentResultsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetLlmEvaluationAbExperimentResultsRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentResultsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetLlmEvaluationAbExperimentResultsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentResultsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.GetLlmEvaluationAbExperimentResultsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetLlmEvaluationAbExperimentResultsResponse(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentResultsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetLlmEvaluationAbRolloutDecisionRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbRolloutDecisionRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetLlmEvaluationAbRolloutDecisionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetLlmEvaluationAbRolloutDecisionRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbRolloutDecisionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetLlmEvaluationAbRolloutRecommendationRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbRolloutRecommendationRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetLlmEvaluationAbRolloutRecommendationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetLlmEvaluationAbRolloutRecommendationRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbRolloutRecommendationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetLlmEvaluationAnnotationQueueItemRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAnnotationQueueItemRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetLlmEvaluationAnnotationQueueItemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetLlmEvaluationAnnotationQueueItemRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAnnotationQueueItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetLlmEvaluationDatasetRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationDatasetRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetLlmEvaluationDatasetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetLlmEvaluationDatasetRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationDatasetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetLlmEvaluationExampleRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExampleRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetLlmEvaluationExampleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetLlmEvaluationExampleRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExampleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetLlmEvaluationExperimentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExperimentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetLlmEvaluationExperimentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetLlmEvaluationExperimentRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExperimentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetLlmEvaluationOnlineConfigRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationOnlineConfigRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetLlmEvaluationOnlineConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetLlmEvaluationOnlineConfigRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationOnlineConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetLlmEvaluationOnlineResultRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationOnlineResultRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetLlmEvaluationOnlineResultRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetLlmEvaluationOnlineResultRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationOnlineResultRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetLlmEvaluationProjectSettingsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationProjectSettingsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetLlmEvaluationProjectSettingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetLlmEvaluationProjectSettingsRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationProjectSettingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetLlmEvaluationReleaseGateRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReleaseGateRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetLlmEvaluationReleaseGateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetLlmEvaluationReleaseGateRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReleaseGateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetLlmEvaluationReleaseGateRunRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReleaseGateRunRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetLlmEvaluationReleaseGateRunRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetLlmEvaluationReleaseGateRunRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReleaseGateRunRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetLlmEvaluationReportRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReportRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetLlmEvaluationReportRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetLlmEvaluationReportRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReportRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetLlmEvaluationScheduleRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationScheduleRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetLlmEvaluationScheduleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetLlmEvaluationScheduleRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationScheduleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetLlmEvaluationScorecardRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationScorecardRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetLlmEvaluationScorecardRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetLlmEvaluationScorecardRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationScorecardRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLlmEvaluationAbExperimentsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbExperimentsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLlmEvaluationAbExperimentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLlmEvaluationAbExperimentsRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbExperimentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLlmEvaluationAbExperimentsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbExperimentsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLlmEvaluationAbExperimentsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLlmEvaluationAbExperimentsResponse(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbExperimentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLlmEvaluationAbRolloutDecisionsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbRolloutDecisionsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLlmEvaluationAbRolloutDecisionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLlmEvaluationAbRolloutDecisionsRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbRolloutDecisionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLlmEvaluationAbRolloutDecisionsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbRolloutDecisionsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLlmEvaluationAbRolloutDecisionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLlmEvaluationAbRolloutDecisionsResponse(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbRolloutDecisionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLlmEvaluationAnnotationQueueItemsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAnnotationQueueItemsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLlmEvaluationAnnotationQueueItemsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLlmEvaluationAnnotationQueueItemsRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAnnotationQueueItemsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLlmEvaluationAnnotationQueueItemsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAnnotationQueueItemsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLlmEvaluationAnnotationQueueItemsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLlmEvaluationAnnotationQueueItemsResponse(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAnnotationQueueItemsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLlmEvaluationDatasetsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLlmEvaluationDatasetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLlmEvaluationDatasetsRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLlmEvaluationDatasetsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLlmEvaluationDatasetsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLlmEvaluationDatasetsResponse(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLlmEvaluationEvaluatorsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationEvaluatorsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLlmEvaluationEvaluatorsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLlmEvaluationEvaluatorsRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationEvaluatorsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLlmEvaluationEvaluatorsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationEvaluatorsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLlmEvaluationEvaluatorsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLlmEvaluationEvaluatorsResponse(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationEvaluatorsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLlmEvaluationExamplesRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLlmEvaluationExamplesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLlmEvaluationExamplesRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLlmEvaluationExamplesResponse(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLlmEvaluationExamplesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLlmEvaluationExamplesResponse(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLlmEvaluationExperimentsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLlmEvaluationExperimentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLlmEvaluationExperimentsRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLlmEvaluationExperimentsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLlmEvaluationExperimentsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLlmEvaluationExperimentsResponse(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLlmEvaluationFeedbackRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLlmEvaluationFeedbackRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLlmEvaluationFeedbackRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLlmEvaluationFeedbackResponse(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLlmEvaluationFeedbackResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLlmEvaluationFeedbackResponse(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLlmEvaluationOnlineConfigsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineConfigsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLlmEvaluationOnlineConfigsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLlmEvaluationOnlineConfigsRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineConfigsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLlmEvaluationOnlineConfigsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineConfigsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLlmEvaluationOnlineConfigsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLlmEvaluationOnlineConfigsResponse(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineConfigsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLlmEvaluationOnlineResultsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineResultsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLlmEvaluationOnlineResultsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLlmEvaluationOnlineResultsRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineResultsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLlmEvaluationOnlineResultsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineResultsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLlmEvaluationOnlineResultsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLlmEvaluationOnlineResultsResponse(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineResultsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLlmEvaluationReleaseGateRunsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGateRunsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLlmEvaluationReleaseGateRunsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLlmEvaluationReleaseGateRunsRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGateRunsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLlmEvaluationReleaseGateRunsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGateRunsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLlmEvaluationReleaseGateRunsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLlmEvaluationReleaseGateRunsResponse(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGateRunsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLlmEvaluationReleaseGatesRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGatesRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLlmEvaluationReleaseGatesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLlmEvaluationReleaseGatesRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGatesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLlmEvaluationReleaseGatesResponse(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGatesResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLlmEvaluationReleaseGatesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLlmEvaluationReleaseGatesResponse(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGatesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLlmEvaluationReportsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReportsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLlmEvaluationReportsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLlmEvaluationReportsRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReportsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLlmEvaluationReportsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReportsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLlmEvaluationReportsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLlmEvaluationReportsResponse(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReportsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLlmEvaluationSchedulesRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationSchedulesRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLlmEvaluationSchedulesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLlmEvaluationSchedulesRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationSchedulesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLlmEvaluationSchedulesResponse(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationSchedulesResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLlmEvaluationSchedulesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLlmEvaluationSchedulesResponse(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationSchedulesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLlmEvaluationScorecardsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationScorecardsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLlmEvaluationScorecardsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLlmEvaluationScorecardsRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationScorecardsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLlmEvaluationScorecardsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationScorecardsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLlmEvaluationScorecardsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLlmEvaluationScorecardsResponse(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationScorecardsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_LlmEvaluationAbExperiment(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment)) {
    throw new Error('Expected argument of type ondewo.nlu.LlmEvaluationAbExperiment');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_LlmEvaluationAbExperiment(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_LlmEvaluationAbRolloutDecision(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutDecision)) {
    throw new Error('Expected argument of type ondewo.nlu.LlmEvaluationAbRolloutDecision');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_LlmEvaluationAbRolloutDecision(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutDecision.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_LlmEvaluationAbRolloutRecommendation(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutRecommendation)) {
    throw new Error('Expected argument of type ondewo.nlu.LlmEvaluationAbRolloutRecommendation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_LlmEvaluationAbRolloutRecommendation(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutRecommendation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_LlmEvaluationAnnotationQueueItem(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.LlmEvaluationAnnotationQueueItem)) {
    throw new Error('Expected argument of type ondewo.nlu.LlmEvaluationAnnotationQueueItem');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_LlmEvaluationAnnotationQueueItem(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.LlmEvaluationAnnotationQueueItem.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_LlmEvaluationComparison(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.LlmEvaluationComparison)) {
    throw new Error('Expected argument of type ondewo.nlu.LlmEvaluationComparison');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_LlmEvaluationComparison(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.LlmEvaluationComparison.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_LlmEvaluationDataset(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset)) {
    throw new Error('Expected argument of type ondewo.nlu.LlmEvaluationDataset');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_LlmEvaluationDataset(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_LlmEvaluationExample(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample)) {
    throw new Error('Expected argument of type ondewo.nlu.LlmEvaluationExample');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_LlmEvaluationExample(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_LlmEvaluationExperiment(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment)) {
    throw new Error('Expected argument of type ondewo.nlu.LlmEvaluationExperiment');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_LlmEvaluationExperiment(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_LlmEvaluationFeedback(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback)) {
    throw new Error('Expected argument of type ondewo.nlu.LlmEvaluationFeedback');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_LlmEvaluationFeedback(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_LlmEvaluationOnlineConfig(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig)) {
    throw new Error('Expected argument of type ondewo.nlu.LlmEvaluationOnlineConfig');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_LlmEvaluationOnlineConfig(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_LlmEvaluationOnlineResult(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineResult)) {
    throw new Error('Expected argument of type ondewo.nlu.LlmEvaluationOnlineResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_LlmEvaluationOnlineResult(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_LlmEvaluationProjectSettings(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.LlmEvaluationProjectSettings)) {
    throw new Error('Expected argument of type ondewo.nlu.LlmEvaluationProjectSettings');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_LlmEvaluationProjectSettings(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.LlmEvaluationProjectSettings.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_LlmEvaluationReleaseGate(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate)) {
    throw new Error('Expected argument of type ondewo.nlu.LlmEvaluationReleaseGate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_LlmEvaluationReleaseGate(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_LlmEvaluationReleaseGateRun(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGateRun)) {
    throw new Error('Expected argument of type ondewo.nlu.LlmEvaluationReleaseGateRun');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_LlmEvaluationReleaseGateRun(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGateRun.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_LlmEvaluationReport(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.LlmEvaluationReport)) {
    throw new Error('Expected argument of type ondewo.nlu.LlmEvaluationReport');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_LlmEvaluationReport(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.LlmEvaluationReport.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_LlmEvaluationSchedule(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule)) {
    throw new Error('Expected argument of type ondewo.nlu.LlmEvaluationSchedule');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_LlmEvaluationSchedule(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_LlmEvaluationScorecard(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard)) {
    throw new Error('Expected argument of type ondewo.nlu.LlmEvaluationScorecard');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_LlmEvaluationScorecard(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_Operation(arg) {
  if (!(arg instanceof ondewo_nlu_operations_pb.Operation)) {
    throw new Error('Expected argument of type ondewo.nlu.Operation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_Operation(buffer_arg) {
  return ondewo_nlu_operations_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_PromoteLlmEvaluationAnnotationQueueItemRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.PromoteLlmEvaluationAnnotationQueueItemRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.PromoteLlmEvaluationAnnotationQueueItemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_PromoteLlmEvaluationAnnotationQueueItemRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.PromoteLlmEvaluationAnnotationQueueItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_PromoteLlmEvaluationAnnotationQueueItemResponse(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.PromoteLlmEvaluationAnnotationQueueItemResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.PromoteLlmEvaluationAnnotationQueueItemResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_PromoteLlmEvaluationAnnotationQueueItemResponse(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.PromoteLlmEvaluationAnnotationQueueItemResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RunLlmEvaluationExperimentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationExperimentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RunLlmEvaluationExperimentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RunLlmEvaluationExperimentRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationExperimentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RunLlmEvaluationReleaseGateRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationReleaseGateRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RunLlmEvaluationReleaseGateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RunLlmEvaluationReleaseGateRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationReleaseGateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_SimulateLlmEvaluationConversationsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.SimulateLlmEvaluationConversationsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.SimulateLlmEvaluationConversationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_SimulateLlmEvaluationConversationsRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.SimulateLlmEvaluationConversationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_StartLlmEvaluationAbExperimentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.StartLlmEvaluationAbExperimentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.StartLlmEvaluationAbExperimentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_StartLlmEvaluationAbExperimentRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.StartLlmEvaluationAbExperimentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_StopLlmEvaluationAbExperimentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.StopLlmEvaluationAbExperimentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.StopLlmEvaluationAbExperimentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_StopLlmEvaluationAbExperimentRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.StopLlmEvaluationAbExperimentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_SubmitLlmEvaluationFeedbackRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.SubmitLlmEvaluationFeedbackRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.SubmitLlmEvaluationFeedbackRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_SubmitLlmEvaluationFeedbackRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.SubmitLlmEvaluationFeedbackRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_UpdateLlmEvaluationAbExperimentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationAbExperimentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.UpdateLlmEvaluationAbExperimentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_UpdateLlmEvaluationAbExperimentRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationAbExperimentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_UpdateLlmEvaluationAnnotationQueueItemRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationAnnotationQueueItemRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.UpdateLlmEvaluationAnnotationQueueItemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_UpdateLlmEvaluationAnnotationQueueItemRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationAnnotationQueueItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_UpdateLlmEvaluationDatasetRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationDatasetRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.UpdateLlmEvaluationDatasetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_UpdateLlmEvaluationDatasetRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationDatasetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_UpdateLlmEvaluationExampleRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExampleRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.UpdateLlmEvaluationExampleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_UpdateLlmEvaluationExampleRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExampleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_UpdateLlmEvaluationExperimentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExperimentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.UpdateLlmEvaluationExperimentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_UpdateLlmEvaluationExperimentRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExperimentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_UpdateLlmEvaluationFeedbackRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationFeedbackRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.UpdateLlmEvaluationFeedbackRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_UpdateLlmEvaluationFeedbackRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationFeedbackRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_UpdateLlmEvaluationOnlineConfigRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationOnlineConfigRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.UpdateLlmEvaluationOnlineConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_UpdateLlmEvaluationOnlineConfigRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationOnlineConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_UpdateLlmEvaluationProjectSettingsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationProjectSettingsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.UpdateLlmEvaluationProjectSettingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_UpdateLlmEvaluationProjectSettingsRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationProjectSettingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_UpdateLlmEvaluationReleaseGateRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationReleaseGateRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.UpdateLlmEvaluationReleaseGateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_UpdateLlmEvaluationReleaseGateRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationReleaseGateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_UpdateLlmEvaluationScheduleRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationScheduleRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.UpdateLlmEvaluationScheduleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_UpdateLlmEvaluationScheduleRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationScheduleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_UpdateLlmEvaluationScorecardRequest(arg) {
  if (!(arg instanceof ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationScorecardRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.UpdateLlmEvaluationScorecardRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_UpdateLlmEvaluationScorecardRequest(buffer_arg) {
  return ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationScorecardRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// LangSmith-style evaluation surface: datasets, examples, experiments, evaluator
// runs, feedback (LLM-as-judge / human / heuristic / custom code / pairwise),
// pairwise comparisons, release gates + persisted gate runs, scorecards,
// per-project evaluation settings (judge configuration), the evaluator registry,
// golden-transcript recording from sessions, conversation simulation
// (standard + adversarial red-teaming), recurring schedules and report artifacts.
var LlmEvaluationsService = exports.LlmEvaluationsService = {
  // region datasets
//
// Create a new evaluation dataset.
llmEvaluationCreateDataset: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationCreateDataset',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationDatasetRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset,
    requestSerialize: serialize_ondewo_nlu_CreateLlmEvaluationDatasetRequest,
    requestDeserialize: deserialize_ondewo_nlu_CreateLlmEvaluationDatasetRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationDataset,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationDataset,
  },
  // Get an evaluation dataset by resource name.
llmEvaluationGetDataset: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationGetDataset',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationDatasetRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset,
    requestSerialize: serialize_ondewo_nlu_GetLlmEvaluationDatasetRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetLlmEvaluationDatasetRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationDataset,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationDataset,
  },
  // List evaluation datasets in the project, optionally filtered + paginated.
llmEvaluationListDatasets: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationListDatasets',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsResponse,
    requestSerialize: serialize_ondewo_nlu_ListLlmEvaluationDatasetsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListLlmEvaluationDatasetsRequest,
    responseSerialize: serialize_ondewo_nlu_ListLlmEvaluationDatasetsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListLlmEvaluationDatasetsResponse,
  },
  // Update metadata of an existing evaluation dataset (examples managed via Add/Update/Delete RPCs).
llmEvaluationUpdateDataset: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateDataset',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationDatasetRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset,
    requestSerialize: serialize_ondewo_nlu_UpdateLlmEvaluationDatasetRequest,
    requestDeserialize: deserialize_ondewo_nlu_UpdateLlmEvaluationDatasetRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationDataset,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationDataset,
  },
  // Delete an evaluation dataset and all owned examples.
llmEvaluationDeleteDataset: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteDataset',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationDatasetRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_nlu_DeleteLlmEvaluationDatasetRequest,
    requestDeserialize: deserialize_ondewo_nlu_DeleteLlmEvaluationDatasetRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // endregion datasets
//
// region examples
//
// Add a single example to an existing dataset.
llmEvaluationAddExample: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationAddExample',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExampleRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample,
    requestSerialize: serialize_ondewo_nlu_AddLlmEvaluationExampleRequest,
    requestDeserialize: deserialize_ondewo_nlu_AddLlmEvaluationExampleRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationExample,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationExample,
  },
  // Add multiple examples to an existing dataset in one call.
llmEvaluationAddExamples: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationAddExamples',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesResponse,
    requestSerialize: serialize_ondewo_nlu_AddLlmEvaluationExamplesRequest,
    requestDeserialize: deserialize_ondewo_nlu_AddLlmEvaluationExamplesRequest,
    responseSerialize: serialize_ondewo_nlu_AddLlmEvaluationExamplesResponse,
    responseDeserialize: deserialize_ondewo_nlu_AddLlmEvaluationExamplesResponse,
  },
  // Get a single evaluation example by resource name.
llmEvaluationGetExample: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationGetExample',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExampleRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample,
    requestSerialize: serialize_ondewo_nlu_GetLlmEvaluationExampleRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetLlmEvaluationExampleRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationExample,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationExample,
  },
  // List examples in a dataset, optionally filtered + paginated.
llmEvaluationListExamples: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationListExamples',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesResponse,
    requestSerialize: serialize_ondewo_nlu_ListLlmEvaluationExamplesRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListLlmEvaluationExamplesRequest,
    responseSerialize: serialize_ondewo_nlu_ListLlmEvaluationExamplesResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListLlmEvaluationExamplesResponse,
  },
  // Update fields of an existing evaluation example.
llmEvaluationUpdateExample: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateExample',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExampleRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample,
    requestSerialize: serialize_ondewo_nlu_UpdateLlmEvaluationExampleRequest,
    requestDeserialize: deserialize_ondewo_nlu_UpdateLlmEvaluationExampleRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationExample,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationExample,
  },
  // Delete an evaluation example.
llmEvaluationDeleteExample: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteExample',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExampleRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_nlu_DeleteLlmEvaluationExampleRequest,
    requestDeserialize: deserialize_ondewo_nlu_DeleteLlmEvaluationExampleRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // endregion examples
//
// region experiments
//
// Run a fresh experiment over a dataset. Long-running operation: the returned
// Operation resolves to the completed LlmEvaluationExperiment once all
// evaluators have produced feedback.
llmEvaluationRunExperiment: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationRunExperiment',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationExperimentRequest,
    responseType: ondewo_nlu_operations_pb.Operation,
    requestSerialize: serialize_ondewo_nlu_RunLlmEvaluationExperimentRequest,
    requestDeserialize: deserialize_ondewo_nlu_RunLlmEvaluationExperimentRequest,
    responseSerialize: serialize_ondewo_nlu_Operation,
    responseDeserialize: deserialize_ondewo_nlu_Operation,
  },
  // Retrieve a previously-run experiment by resource name.
llmEvaluationGetExperiment: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationGetExperiment',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExperimentRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment,
    requestSerialize: serialize_ondewo_nlu_GetLlmEvaluationExperimentRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetLlmEvaluationExperimentRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationExperiment,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationExperiment,
  },
  // List experiments in a project, optionally filtered + paginated.
llmEvaluationListExperiments: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationListExperiments',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsResponse,
    requestSerialize: serialize_ondewo_nlu_ListLlmEvaluationExperimentsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListLlmEvaluationExperimentsRequest,
    responseSerialize: serialize_ondewo_nlu_ListLlmEvaluationExperimentsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListLlmEvaluationExperimentsResponse,
  },
  // Update metadata of an experiment (e.g. baseline pointer, display_name).
// Evaluator runs and feedback are immutable; use LlmEvaluationSubmitFeedback /
// LlmEvaluationDeleteFeedback for downstream annotations.
llmEvaluationUpdateExperiment: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateExperiment',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExperimentRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment,
    requestSerialize: serialize_ondewo_nlu_UpdateLlmEvaluationExperimentRequest,
    requestDeserialize: deserialize_ondewo_nlu_UpdateLlmEvaluationExperimentRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationExperiment,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationExperiment,
  },
  // Delete an experiment and all owned evaluator runs + feedbacks.
llmEvaluationDeleteExperiment: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteExperiment',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExperimentRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_nlu_DeleteLlmEvaluationExperimentRequest,
    requestDeserialize: deserialize_ondewo_nlu_DeleteLlmEvaluationExperimentRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Cancel a still-running experiment. No-op if already finished.
llmEvaluationCancelExperiment: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationCancelExperiment',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.CancelLlmEvaluationExperimentRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment,
    requestSerialize: serialize_ondewo_nlu_CancelLlmEvaluationExperimentRequest,
    requestDeserialize: deserialize_ondewo_nlu_CancelLlmEvaluationExperimentRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationExperiment,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationExperiment,
  },
  // Compare two-or-more experiments and emit a pairwise comparison report.
llmEvaluationCompareExperiments: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationCompareExperiments',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.CompareLlmEvaluationExperimentsRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationComparison,
    requestSerialize: serialize_ondewo_nlu_CompareLlmEvaluationExperimentsRequest,
    requestDeserialize: deserialize_ondewo_nlu_CompareLlmEvaluationExperimentsRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationComparison,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationComparison,
  },
  // endregion experiments
//
// region feedback
//
// Submit a single feedback record (used by human reviewers / external evaluators).
llmEvaluationSubmitFeedback: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationSubmitFeedback',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.SubmitLlmEvaluationFeedbackRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback,
    requestSerialize: serialize_ondewo_nlu_SubmitLlmEvaluationFeedbackRequest,
    requestDeserialize: deserialize_ondewo_nlu_SubmitLlmEvaluationFeedbackRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationFeedback,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationFeedback,
  },
  // List feedback records, optionally filtered + paginated.
llmEvaluationListFeedback: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationListFeedback',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackResponse,
    requestSerialize: serialize_ondewo_nlu_ListLlmEvaluationFeedbackRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListLlmEvaluationFeedbackRequest,
    responseSerialize: serialize_ondewo_nlu_ListLlmEvaluationFeedbackResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListLlmEvaluationFeedbackResponse,
  },
  // Delete a single feedback record.
llmEvaluationDeleteFeedback: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteFeedback',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationFeedbackRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_nlu_DeleteLlmEvaluationFeedbackRequest,
    requestDeserialize: deserialize_ondewo_nlu_DeleteLlmEvaluationFeedbackRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Update a single feedback record (e.g. correct a human review score or comment).
llmEvaluationUpdateFeedback: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateFeedback',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationFeedbackRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback,
    requestSerialize: serialize_ondewo_nlu_UpdateLlmEvaluationFeedbackRequest,
    requestDeserialize: deserialize_ondewo_nlu_UpdateLlmEvaluationFeedbackRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationFeedback,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationFeedback,
  },
  // endregion feedback
//
// region release gates
//
// Create a new release gate (a named set of thresholds over evaluator scores,
// regression deltas and telemetry that decides whether a candidate configuration ships).
llmEvaluationCreateReleaseGate: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationCreateReleaseGate',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationReleaseGateRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate,
    requestSerialize: serialize_ondewo_nlu_CreateLlmEvaluationReleaseGateRequest,
    requestDeserialize: deserialize_ondewo_nlu_CreateLlmEvaluationReleaseGateRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationReleaseGate,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationReleaseGate,
  },
  // Get a release gate by resource name.
llmEvaluationGetReleaseGate: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationGetReleaseGate',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReleaseGateRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate,
    requestSerialize: serialize_ondewo_nlu_GetLlmEvaluationReleaseGateRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetLlmEvaluationReleaseGateRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationReleaseGate,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationReleaseGate,
  },
  // List release gates in the project, optionally filtered + paginated.
llmEvaluationListReleaseGates: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationListReleaseGates',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGatesRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGatesResponse,
    requestSerialize: serialize_ondewo_nlu_ListLlmEvaluationReleaseGatesRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListLlmEvaluationReleaseGatesRequest,
    responseSerialize: serialize_ondewo_nlu_ListLlmEvaluationReleaseGatesResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListLlmEvaluationReleaseGatesResponse,
  },
  // Update an existing release gate. Semantic changes (suite, baseline,
// evaluators, thresholds, weights, safety) increment the server-managed revision.
llmEvaluationUpdateReleaseGate: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateReleaseGate',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationReleaseGateRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate,
    requestSerialize: serialize_ondewo_nlu_UpdateLlmEvaluationReleaseGateRequest,
    requestDeserialize: deserialize_ondewo_nlu_UpdateLlmEvaluationReleaseGateRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationReleaseGate,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationReleaseGate,
  },
  // Delete a release gate and all owned gate runs.
llmEvaluationDeleteReleaseGate: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteReleaseGate',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationReleaseGateRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_nlu_DeleteLlmEvaluationReleaseGateRequest,
    requestDeserialize: deserialize_ondewo_nlu_DeleteLlmEvaluationReleaseGateRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Run a release gate against a candidate target. Long-running operation: the
// returned Operation resolves to the completed LlmEvaluationReleaseGateRun once
// the candidate (and optional safety) experiments finished and the verdict has
// been computed and persisted server-side.
llmEvaluationRunReleaseGate: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationRunReleaseGate',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationReleaseGateRequest,
    responseType: ondewo_nlu_operations_pb.Operation,
    requestSerialize: serialize_ondewo_nlu_RunLlmEvaluationReleaseGateRequest,
    requestDeserialize: deserialize_ondewo_nlu_RunLlmEvaluationReleaseGateRequest,
    responseSerialize: serialize_ondewo_nlu_Operation,
    responseDeserialize: deserialize_ondewo_nlu_Operation,
  },
  // Get a single release gate run (persisted verdict + checks) by resource name.
llmEvaluationGetReleaseGateRun: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationGetReleaseGateRun',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReleaseGateRunRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGateRun,
    requestSerialize: serialize_ondewo_nlu_GetLlmEvaluationReleaseGateRunRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetLlmEvaluationReleaseGateRunRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationReleaseGateRun,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationReleaseGateRun,
  },
  // List release gate runs, optionally filtered + paginated.
llmEvaluationListReleaseGateRuns: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationListReleaseGateRuns',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGateRunsRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGateRunsResponse,
    requestSerialize: serialize_ondewo_nlu_ListLlmEvaluationReleaseGateRunsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListLlmEvaluationReleaseGateRunsRequest,
    responseSerialize: serialize_ondewo_nlu_ListLlmEvaluationReleaseGateRunsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListLlmEvaluationReleaseGateRunsResponse,
  },
  // endregion release gates
//
// region scorecards
//
// Create a new scorecard (weighted multi-criteria roll-up definition).
llmEvaluationCreateScorecard: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationCreateScorecard',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationScorecardRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard,
    requestSerialize: serialize_ondewo_nlu_CreateLlmEvaluationScorecardRequest,
    requestDeserialize: deserialize_ondewo_nlu_CreateLlmEvaluationScorecardRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationScorecard,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationScorecard,
  },
  // Get a scorecard by resource name.
llmEvaluationGetScorecard: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationGetScorecard',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationScorecardRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard,
    requestSerialize: serialize_ondewo_nlu_GetLlmEvaluationScorecardRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetLlmEvaluationScorecardRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationScorecard,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationScorecard,
  },
  // List scorecards in the project, optionally filtered + paginated.
llmEvaluationListScorecards: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationListScorecards',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationScorecardsRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationScorecardsResponse,
    requestSerialize: serialize_ondewo_nlu_ListLlmEvaluationScorecardsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListLlmEvaluationScorecardsRequest,
    responseSerialize: serialize_ondewo_nlu_ListLlmEvaluationScorecardsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListLlmEvaluationScorecardsResponse,
  },
  // Update an existing scorecard.
llmEvaluationUpdateScorecard: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateScorecard',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationScorecardRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard,
    requestSerialize: serialize_ondewo_nlu_UpdateLlmEvaluationScorecardRequest,
    requestDeserialize: deserialize_ondewo_nlu_UpdateLlmEvaluationScorecardRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationScorecard,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationScorecard,
  },
  // Delete a scorecard.
llmEvaluationDeleteScorecard: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteScorecard',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationScorecardRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_nlu_DeleteLlmEvaluationScorecardRequest,
    requestDeserialize: deserialize_ondewo_nlu_DeleteLlmEvaluationScorecardRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // endregion scorecards
//
// region project settings
//
// Get the per-(project, language_code) evaluation settings singleton (judge
// configuration, default weights, pass cutoffs). The server auto-creates
// default settings on first access.
llmEvaluationGetProjectSettings: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationGetProjectSettings',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationProjectSettingsRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationProjectSettings,
    requestSerialize: serialize_ondewo_nlu_GetLlmEvaluationProjectSettingsRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetLlmEvaluationProjectSettingsRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationProjectSettings,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationProjectSettings,
  },
  // Update the per-(project, language_code) evaluation settings singleton.
llmEvaluationUpdateProjectSettings: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateProjectSettings',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationProjectSettingsRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationProjectSettings,
    requestSerialize: serialize_ondewo_nlu_UpdateLlmEvaluationProjectSettingsRequest,
    requestDeserialize: deserialize_ondewo_nlu_UpdateLlmEvaluationProjectSettingsRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationProjectSettings,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationProjectSettings,
  },
  // endregion project settings
//
// region evaluator registry
//
// List the evaluators available on this server, with metadata describing the
// category, required example fields, multi-turn support, default threshold,
// judge requirement and configurable parameters of each evaluator.
llmEvaluationListEvaluators: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationListEvaluators',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationEvaluatorsRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationEvaluatorsResponse,
    requestSerialize: serialize_ondewo_nlu_ListLlmEvaluationEvaluatorsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListLlmEvaluationEvaluatorsRequest,
    responseSerialize: serialize_ondewo_nlu_ListLlmEvaluationEvaluatorsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListLlmEvaluationEvaluatorsResponse,
  },
  // endregion evaluator registry
//
// region golden transcripts + simulation
//
// Convert a recorded session (or a selection of its session steps) into
// evaluation examples ("golden transcripts") inside an existing dataset.
llmEvaluationCreateExamplesFromSession: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationCreateExamplesFromSession',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationExamplesFromSessionRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationExamplesFromSessionResponse,
    requestSerialize: serialize_ondewo_nlu_CreateLlmEvaluationExamplesFromSessionRequest,
    requestDeserialize: deserialize_ondewo_nlu_CreateLlmEvaluationExamplesFromSessionRequest,
    responseSerialize: serialize_ondewo_nlu_CreateLlmEvaluationExamplesFromSessionResponse,
    responseDeserialize: deserialize_ondewo_nlu_CreateLlmEvaluationExamplesFromSessionResponse,
  },
  // Generate synthetic multi-turn evaluation conversations by simulating users
// (persona-driven; STANDARD kind) or attackers (red-teaming; ADVERSARIAL kind)
// against the live target. Long-running operation: the returned Operation
// resolves once the generated examples have been persisted into the receiving dataset.
llmEvaluationSimulateConversations: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationSimulateConversations',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.SimulateLlmEvaluationConversationsRequest,
    responseType: ondewo_nlu_operations_pb.Operation,
    requestSerialize: serialize_ondewo_nlu_SimulateLlmEvaluationConversationsRequest,
    requestDeserialize: deserialize_ondewo_nlu_SimulateLlmEvaluationConversationsRequest,
    responseSerialize: serialize_ondewo_nlu_Operation,
    responseDeserialize: deserialize_ondewo_nlu_Operation,
  },
  // endregion golden transcripts + simulation
//
// region schedules
//
// Create a new schedule for recurring experiment / release gate runs.
llmEvaluationCreateSchedule: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationCreateSchedule',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationScheduleRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule,
    requestSerialize: serialize_ondewo_nlu_CreateLlmEvaluationScheduleRequest,
    requestDeserialize: deserialize_ondewo_nlu_CreateLlmEvaluationScheduleRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationSchedule,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationSchedule,
  },
  // Get a schedule by resource name.
llmEvaluationGetSchedule: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationGetSchedule',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationScheduleRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule,
    requestSerialize: serialize_ondewo_nlu_GetLlmEvaluationScheduleRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetLlmEvaluationScheduleRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationSchedule,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationSchedule,
  },
  // List schedules in the project, optionally filtered + paginated.
llmEvaluationListSchedules: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationListSchedules',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationSchedulesRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationSchedulesResponse,
    requestSerialize: serialize_ondewo_nlu_ListLlmEvaluationSchedulesRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListLlmEvaluationSchedulesRequest,
    responseSerialize: serialize_ondewo_nlu_ListLlmEvaluationSchedulesResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListLlmEvaluationSchedulesResponse,
  },
  // Update an existing schedule (cron / interval, enabled flag, request template).
llmEvaluationUpdateSchedule: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateSchedule',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationScheduleRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule,
    requestSerialize: serialize_ondewo_nlu_UpdateLlmEvaluationScheduleRequest,
    requestDeserialize: deserialize_ondewo_nlu_UpdateLlmEvaluationScheduleRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationSchedule,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationSchedule,
  },
  // Delete a schedule. Experiments / gate runs already created by it are kept.
llmEvaluationDeleteSchedule: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteSchedule',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationScheduleRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_nlu_DeleteLlmEvaluationScheduleRequest,
    requestDeserialize: deserialize_ondewo_nlu_DeleteLlmEvaluationScheduleRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // endregion schedules
//
// region reports
//
// Persist a generated report as an immutable artifact (incl. payload bytes).
llmEvaluationCreateReport: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationCreateReport',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationReportRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReport,
    requestSerialize: serialize_ondewo_nlu_CreateLlmEvaluationReportRequest,
    requestDeserialize: deserialize_ondewo_nlu_CreateLlmEvaluationReportRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationReport,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationReport,
  },
  // Get a report by resource name (incl. payload bytes).
llmEvaluationGetReport: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationGetReport',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReportRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReport,
    requestSerialize: serialize_ondewo_nlu_GetLlmEvaluationReportRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetLlmEvaluationReportRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationReport,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationReport,
  },
  // List reports, optionally filtered + paginated. Payload bytes are omitted
// unless explicitly requested via field_mask.
llmEvaluationListReports: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationListReports',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReportsRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReportsResponse,
    requestSerialize: serialize_ondewo_nlu_ListLlmEvaluationReportsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListLlmEvaluationReportsRequest,
    responseSerialize: serialize_ondewo_nlu_ListLlmEvaluationReportsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListLlmEvaluationReportsResponse,
  },
  // Delete a report.
llmEvaluationDeleteReport: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteReport',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationReportRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_nlu_DeleteLlmEvaluationReportRequest,
    requestDeserialize: deserialize_ondewo_nlu_DeleteLlmEvaluationReportRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // endregion reports
//
// region a/b experiments
//
// Create a new A/B experiment (a set of routing variants over live
// DetectIntent traffic). Created in DRAFT status; traffic is only split once
// it is started via LlmEvaluationStartAbExperiment.
llmEvaluationCreateAbExperiment: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationCreateAbExperiment',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationAbExperimentRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment,
    requestSerialize: serialize_ondewo_nlu_CreateLlmEvaluationAbExperimentRequest,
    requestDeserialize: deserialize_ondewo_nlu_CreateLlmEvaluationAbExperimentRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationAbExperiment,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationAbExperiment,
  },
  // Get an A/B experiment by resource name.
llmEvaluationGetAbExperiment: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationGetAbExperiment',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment,
    requestSerialize: serialize_ondewo_nlu_GetLlmEvaluationAbExperimentRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetLlmEvaluationAbExperimentRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationAbExperiment,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationAbExperiment,
  },
  // List A/B experiments in the project, optionally filtered + paginated.
llmEvaluationListAbExperiments: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationListAbExperiments',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbExperimentsRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbExperimentsResponse,
    requestSerialize: serialize_ondewo_nlu_ListLlmEvaluationAbExperimentsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListLlmEvaluationAbExperimentsRequest,
    responseSerialize: serialize_ondewo_nlu_ListLlmEvaluationAbExperimentsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListLlmEvaluationAbExperimentsResponse,
  },
  // Update an existing A/B experiment (variants, traffic config, metadata).
// Only allowed in DRAFT / STOPPED status; running experiments must be stopped first.
llmEvaluationUpdateAbExperiment: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateAbExperiment',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationAbExperimentRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment,
    requestSerialize: serialize_ondewo_nlu_UpdateLlmEvaluationAbExperimentRequest,
    requestDeserialize: deserialize_ondewo_nlu_UpdateLlmEvaluationAbExperimentRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationAbExperiment,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationAbExperiment,
  },
  // Delete an A/B experiment and all owned sticky-assignment rows.
llmEvaluationDeleteAbExperiment: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteAbExperiment',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationAbExperimentRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_nlu_DeleteLlmEvaluationAbExperimentRequest,
    requestDeserialize: deserialize_ondewo_nlu_DeleteLlmEvaluationAbExperimentRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Start an A/B experiment: validates that the variant traffic weights are
// well-formed (sum to the configured total), stamps started_at and transitions
// the experiment to RUNNING so live traffic begins to be split.
llmEvaluationStartAbExperiment: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationStartAbExperiment',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.StartLlmEvaluationAbExperimentRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment,
    requestSerialize: serialize_ondewo_nlu_StartLlmEvaluationAbExperimentRequest,
    requestDeserialize: deserialize_ondewo_nlu_StartLlmEvaluationAbExperimentRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationAbExperiment,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationAbExperiment,
  },
  // Stop a running A/B experiment: stamps stopped_at and transitions to STOPPED.
// Existing sticky assignments are retained for results computation.
llmEvaluationStopAbExperiment: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationStopAbExperiment',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.StopLlmEvaluationAbExperimentRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment,
    requestSerialize: serialize_ondewo_nlu_StopLlmEvaluationAbExperimentRequest,
    requestDeserialize: deserialize_ondewo_nlu_StopLlmEvaluationAbExperimentRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationAbExperiment,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationAbExperiment,
  },
  // Compute per-variant telemetry rollups for an A/B experiment. Stateless /
// computed on demand: gathers each variant's sessions and aggregates their
// LlmTelemetry into a per-variant LlmTelemetryReport. There is no auto-rollout.
llmEvaluationGetAbExperimentResults: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationGetAbExperimentResults',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentResultsRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentResultsResponse,
    requestSerialize: serialize_ondewo_nlu_GetLlmEvaluationAbExperimentResultsRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetLlmEvaluationAbExperimentResultsRequest,
    responseSerialize: serialize_ondewo_nlu_GetLlmEvaluationAbExperimentResultsResponse,
    responseDeserialize: deserialize_ondewo_nlu_GetLlmEvaluationAbExperimentResultsResponse,
  },
  // endregion a/b experiments
//
// region a/b rollout
//
// Compute a rollout recommendation for an A/B experiment: which variant wins
// against the control on the chosen optimize metric under the supplied
// statistical guard-rails (confidence level, minimum sessions per variant,
// minimum effect size). Stateless / read-only — computed on demand from the
// per-variant results; nothing is persisted and no traffic / config changes.
llmEvaluationGetAbRolloutRecommendation: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationGetAbRolloutRecommendation',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbRolloutRecommendationRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutRecommendation,
    requestSerialize: serialize_ondewo_nlu_GetLlmEvaluationAbRolloutRecommendationRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetLlmEvaluationAbRolloutRecommendationRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationAbRolloutRecommendation,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationAbRolloutRecommendation,
  },
  // Apply a rollout for an A/B experiment: promotes the chosen variant's config
// as the project's classifier default, stops the experiment, and writes +
// returns the LlmEvaluationAbRolloutDecision audit record. The operator picks
// the variant explicitly (there is no auto-rollout). Idempotent: re-applying
// an already-rolled-out experiment returns the existing decision.
llmEvaluationApplyAbRollout: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationApplyAbRollout',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.ApplyLlmEvaluationAbRolloutRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutDecision,
    requestSerialize: serialize_ondewo_nlu_ApplyLlmEvaluationAbRolloutRequest,
    requestDeserialize: deserialize_ondewo_nlu_ApplyLlmEvaluationAbRolloutRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationAbRolloutDecision,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationAbRolloutDecision,
  },
  // Get the applied rollout decision (audit record) by resource name.
llmEvaluationGetAbRolloutDecision: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationGetAbRolloutDecision',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbRolloutDecisionRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutDecision,
    requestSerialize: serialize_ondewo_nlu_GetLlmEvaluationAbRolloutDecisionRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetLlmEvaluationAbRolloutDecisionRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationAbRolloutDecision,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationAbRolloutDecision,
  },
  // List applied rollout decisions in the project, optionally filtered (e.g. by
// experiment) + paginated.
llmEvaluationListAbRolloutDecisions: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationListAbRolloutDecisions',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbRolloutDecisionsRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbRolloutDecisionsResponse,
    requestSerialize: serialize_ondewo_nlu_ListLlmEvaluationAbRolloutDecisionsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListLlmEvaluationAbRolloutDecisionsRequest,
    responseSerialize: serialize_ondewo_nlu_ListLlmEvaluationAbRolloutDecisionsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListLlmEvaluationAbRolloutDecisionsResponse,
  },
  // endregion a/b rollout
//
// region online evaluation
//
// Create a new online-evaluation config: a per-(project, language_code)
// definition selecting a reference-free evaluator set + a sample rate. A
// swarm-safe background worker samples already-persisted live session steps,
// scores the recorded answer with these evaluators and enqueues failing steps
// into the annotation queue.
llmEvaluationCreateOnlineConfig: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationCreateOnlineConfig',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationOnlineConfigRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig,
    requestSerialize: serialize_ondewo_nlu_CreateLlmEvaluationOnlineConfigRequest,
    requestDeserialize: deserialize_ondewo_nlu_CreateLlmEvaluationOnlineConfigRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationOnlineConfig,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationOnlineConfig,
  },
  // Get an online-evaluation config by resource name.
llmEvaluationGetOnlineConfig: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationGetOnlineConfig',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationOnlineConfigRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig,
    requestSerialize: serialize_ondewo_nlu_GetLlmEvaluationOnlineConfigRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetLlmEvaluationOnlineConfigRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationOnlineConfig,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationOnlineConfig,
  },
  // List online-evaluation configs in the project, optionally filtered + paginated.
llmEvaluationListOnlineConfigs: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationListOnlineConfigs',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineConfigsRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineConfigsResponse,
    requestSerialize: serialize_ondewo_nlu_ListLlmEvaluationOnlineConfigsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListLlmEvaluationOnlineConfigsRequest,
    responseSerialize: serialize_ondewo_nlu_ListLlmEvaluationOnlineConfigsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListLlmEvaluationOnlineConfigsResponse,
  },
  // Update an existing online-evaluation config (enabled flag, evaluator set,
// sample rate, thresholds, session filter).
llmEvaluationUpdateOnlineConfig: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateOnlineConfig',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationOnlineConfigRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig,
    requestSerialize: serialize_ondewo_nlu_UpdateLlmEvaluationOnlineConfigRequest,
    requestDeserialize: deserialize_ondewo_nlu_UpdateLlmEvaluationOnlineConfigRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationOnlineConfig,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationOnlineConfig,
  },
  // Delete an online-evaluation config. Already-produced online results and
// annotation-queue items are kept.
llmEvaluationDeleteOnlineConfig: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationDeleteOnlineConfig',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationOnlineConfigRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_nlu_DeleteLlmEvaluationOnlineConfigRequest,
    requestDeserialize: deserialize_ondewo_nlu_DeleteLlmEvaluationOnlineConfigRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // endregion online evaluation
//
// region online results
//
// Get a single online-evaluation result (per scored session step) by resource name.
llmEvaluationGetOnlineResult: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationGetOnlineResult',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationOnlineResultRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineResult,
    requestSerialize: serialize_ondewo_nlu_GetLlmEvaluationOnlineResultRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetLlmEvaluationOnlineResultRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationOnlineResult,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationOnlineResult,
  },
  // List online-evaluation results, optionally filtered by config / pass-state + paginated.
// Read-only: result rows are produced by the online-evaluation worker (no Create RPC).
llmEvaluationListOnlineResults: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationListOnlineResults',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineResultsRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineResultsResponse,
    requestSerialize: serialize_ondewo_nlu_ListLlmEvaluationOnlineResultsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListLlmEvaluationOnlineResultsRequest,
    responseSerialize: serialize_ondewo_nlu_ListLlmEvaluationOnlineResultsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListLlmEvaluationOnlineResultsResponse,
  },
  // endregion online results
//
// region annotation queue
//
// Get a single annotation-queue item by resource name.
llmEvaluationGetAnnotationQueueItem: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationGetAnnotationQueueItem',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAnnotationQueueItemRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAnnotationQueueItem,
    requestSerialize: serialize_ondewo_nlu_GetLlmEvaluationAnnotationQueueItemRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetLlmEvaluationAnnotationQueueItemRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationAnnotationQueueItem,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationAnnotationQueueItem,
  },
  // List annotation-queue items, optionally filtered by status / assignee + paginated.
// Items are enqueued by the online-evaluation worker (no Create RPC).
llmEvaluationListAnnotationQueueItems: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationListAnnotationQueueItems',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAnnotationQueueItemsRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAnnotationQueueItemsResponse,
    requestSerialize: serialize_ondewo_nlu_ListLlmEvaluationAnnotationQueueItemsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListLlmEvaluationAnnotationQueueItemsRequest,
    responseSerialize: serialize_ondewo_nlu_ListLlmEvaluationAnnotationQueueItemsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListLlmEvaluationAnnotationQueueItemsResponse,
  },
  // Update an annotation-queue item (status / assignee / reason transitions:
// PENDING -> REVIEWED / DISMISSED).
llmEvaluationUpdateAnnotationQueueItem: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationUpdateAnnotationQueueItem',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationAnnotationQueueItemRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAnnotationQueueItem,
    requestSerialize: serialize_ondewo_nlu_UpdateLlmEvaluationAnnotationQueueItemRequest,
    requestDeserialize: deserialize_ondewo_nlu_UpdateLlmEvaluationAnnotationQueueItemRequest,
    responseSerialize: serialize_ondewo_nlu_LlmEvaluationAnnotationQueueItem,
    responseDeserialize: deserialize_ondewo_nlu_LlmEvaluationAnnotationQueueItem,
  },
  // Promote an annotation-queue item into a regression dataset. Thin server-side
// composition: delegates to LlmEvaluationCreateExamplesFromSession with the
// item's session (+ selected steps), flips the item status to PROMOTED and
// stamps the promoted dataset name. Returns the created example(s).
llmEvaluationPromoteAnnotationQueueItem: {
    path: '/ondewo.nlu.LlmEvaluations/LlmEvaluationPromoteAnnotationQueueItem',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_llm_evaluation_pb.PromoteLlmEvaluationAnnotationQueueItemRequest,
    responseType: ondewo_nlu_llm_evaluation_pb.PromoteLlmEvaluationAnnotationQueueItemResponse,
    requestSerialize: serialize_ondewo_nlu_PromoteLlmEvaluationAnnotationQueueItemRequest,
    requestDeserialize: deserialize_ondewo_nlu_PromoteLlmEvaluationAnnotationQueueItemRequest,
    responseSerialize: serialize_ondewo_nlu_PromoteLlmEvaluationAnnotationQueueItemResponse,
    responseDeserialize: deserialize_ondewo_nlu_PromoteLlmEvaluationAnnotationQueueItemResponse,
  },
};

exports.LlmEvaluationsClient = grpc.makeGenericClientConstructor(LlmEvaluationsService, 'LlmEvaluations');
