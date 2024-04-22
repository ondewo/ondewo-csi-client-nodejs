// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2018 Google Inc.
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
// Modifications Copyright 2020-2023 ONDEWO GmbH
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
var ondewo_nlu_session_pb = require('../../ondewo/nlu/session_pb.js');
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_rpc_status_pb = require('../../google/rpc/status_pb.js');
var google_type_latlng_pb = require('../../google/type/latlng_pb.js');
var ondewo_nlu_common_pb = require('../../ondewo/nlu/common_pb.js');
var ondewo_nlu_context_pb = require('../../ondewo/nlu/context_pb.js');
var ondewo_nlu_intent_pb = require('../../ondewo/nlu/intent_pb.js');
var ondewo_nlu_entity_type_pb = require('../../ondewo/nlu/entity_type_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_AddAudioFilesRequest(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.AddAudioFilesRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.AddAudioFilesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_AddAudioFilesRequest(buffer_arg) {
  return ondewo_nlu_session_pb.AddAudioFilesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_AddAudioFilesResponse(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.AddAudioFilesResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.AddAudioFilesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_AddAudioFilesResponse(buffer_arg) {
  return ondewo_nlu_session_pb.AddAudioFilesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_AddSessionCommentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.AddSessionCommentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.AddSessionCommentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_AddSessionCommentRequest(buffer_arg) {
  return ondewo_nlu_session_pb.AddSessionCommentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_AddSessionLabelsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.AddSessionLabelsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.AddSessionLabelsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_AddSessionLabelsRequest(buffer_arg) {
  return ondewo_nlu_session_pb.AddSessionLabelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_AudioFileResource(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.AudioFileResource)) {
    throw new Error('Expected argument of type ondewo.nlu.AudioFileResource');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_AudioFileResource(buffer_arg) {
  return ondewo_nlu_session_pb.AudioFileResource.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_Comment(arg) {
  if (!(arg instanceof ondewo_nlu_common_pb.Comment)) {
    throw new Error('Expected argument of type ondewo.nlu.Comment');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_Comment(buffer_arg) {
  return ondewo_nlu_common_pb.Comment.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CreateSessionRequest(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.CreateSessionRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.CreateSessionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CreateSessionRequest(buffer_arg) {
  return ondewo_nlu_session_pb.CreateSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_CreateSessionReviewRequest(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.CreateSessionReviewRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.CreateSessionReviewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CreateSessionReviewRequest(buffer_arg) {
  return ondewo_nlu_session_pb.CreateSessionReviewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DeleteAudioFilesRequest(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.DeleteAudioFilesRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.DeleteAudioFilesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteAudioFilesRequest(buffer_arg) {
  return ondewo_nlu_session_pb.DeleteAudioFilesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DeleteAudioFilesResponse(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.DeleteAudioFilesResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.DeleteAudioFilesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteAudioFilesResponse(buffer_arg) {
  return ondewo_nlu_session_pb.DeleteAudioFilesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DeleteSessionCommentsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.DeleteSessionCommentsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.DeleteSessionCommentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteSessionCommentsRequest(buffer_arg) {
  return ondewo_nlu_session_pb.DeleteSessionCommentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DeleteSessionLabelsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.DeleteSessionLabelsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.DeleteSessionLabelsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteSessionLabelsRequest(buffer_arg) {
  return ondewo_nlu_session_pb.DeleteSessionLabelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DeleteSessionRequest(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.DeleteSessionRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.DeleteSessionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteSessionRequest(buffer_arg) {
  return ondewo_nlu_session_pb.DeleteSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DetectIntentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.DetectIntentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.DetectIntentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DetectIntentRequest(buffer_arg) {
  return ondewo_nlu_session_pb.DetectIntentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DetectIntentResponse(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.DetectIntentResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.DetectIntentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DetectIntentResponse(buffer_arg) {
  return ondewo_nlu_session_pb.DetectIntentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetAudioFileOfSessionRequest(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.GetAudioFileOfSessionRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetAudioFileOfSessionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetAudioFileOfSessionRequest(buffer_arg) {
  return ondewo_nlu_session_pb.GetAudioFileOfSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetAudioFilesRequest(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.GetAudioFilesRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetAudioFilesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetAudioFilesRequest(buffer_arg) {
  return ondewo_nlu_session_pb.GetAudioFilesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetAudioFilesResponse(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.GetAudioFilesResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.GetAudioFilesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetAudioFilesResponse(buffer_arg) {
  return ondewo_nlu_session_pb.GetAudioFilesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetLatestSessionReviewRequest(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.GetLatestSessionReviewRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetLatestSessionReviewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetLatestSessionReviewRequest(buffer_arg) {
  return ondewo_nlu_session_pb.GetLatestSessionReviewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetSessionRequest(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.GetSessionRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetSessionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetSessionRequest(buffer_arg) {
  return ondewo_nlu_session_pb.GetSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetSessionReviewRequest(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.GetSessionReviewRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetSessionReviewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetSessionReviewRequest(buffer_arg) {
  return ondewo_nlu_session_pb.GetSessionReviewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListAccountIdsOfAllSessionsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.ListAccountIdsOfAllSessionsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListAccountIdsOfAllSessionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListAccountIdsOfAllSessionsRequest(buffer_arg) {
  return ondewo_nlu_session_pb.ListAccountIdsOfAllSessionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListAccountIdsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.ListAccountIdsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListAccountIdsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListAccountIdsResponse(buffer_arg) {
  return ondewo_nlu_session_pb.ListAccountIdsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListAudioFilesRequest(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.ListAudioFilesRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListAudioFilesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListAudioFilesRequest(buffer_arg) {
  return ondewo_nlu_session_pb.ListAudioFilesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListAudioFilesResponse(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.ListAudioFilesResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListAudioFilesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListAudioFilesResponse(buffer_arg) {
  return ondewo_nlu_session_pb.ListAudioFilesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListDatastreamIdsOfAllSessionsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.ListDatastreamIdsOfAllSessionsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListDatastreamIdsOfAllSessionsRequest(buffer_arg) {
  return ondewo_nlu_session_pb.ListDatastreamIdsOfAllSessionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListDatastreamIdsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.ListDatastreamIdsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListDatastreamIdsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListDatastreamIdsResponse(buffer_arg) {
  return ondewo_nlu_session_pb.ListDatastreamIdsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListIdentifiedUserIdsOfAllSessionsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.ListIdentifiedUserIdsOfAllSessionsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListIdentifiedUserIdsOfAllSessionsRequest(buffer_arg) {
  return ondewo_nlu_session_pb.ListIdentifiedUserIdsOfAllSessionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListIdentifiedUserIdsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.ListIdentifiedUserIdsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListIdentifiedUserIdsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListIdentifiedUserIdsResponse(buffer_arg) {
  return ondewo_nlu_session_pb.ListIdentifiedUserIdsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListInputContextsOfAllSessionsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.ListInputContextsOfAllSessionsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListInputContextsOfAllSessionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListInputContextsOfAllSessionsRequest(buffer_arg) {
  return ondewo_nlu_session_pb.ListInputContextsOfAllSessionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListInputContextsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.ListInputContextsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListInputContextsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListInputContextsResponse(buffer_arg) {
  return ondewo_nlu_session_pb.ListInputContextsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLanguageCodesOfAllSessionsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.ListLanguageCodesOfAllSessionsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLanguageCodesOfAllSessionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLanguageCodesOfAllSessionsRequest(buffer_arg) {
  return ondewo_nlu_session_pb.ListLanguageCodesOfAllSessionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLanguageCodesResponse(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.ListLanguageCodesResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLanguageCodesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLanguageCodesResponse(buffer_arg) {
  return ondewo_nlu_session_pb.ListLanguageCodesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListMatchedEntityTypesOfAllSessionsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.ListMatchedEntityTypesOfAllSessionsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListMatchedEntityTypesOfAllSessionsRequest(buffer_arg) {
  return ondewo_nlu_session_pb.ListMatchedEntityTypesOfAllSessionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListMatchedEntityTypesResponse(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.ListMatchedEntityTypesResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListMatchedEntityTypesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListMatchedEntityTypesResponse(buffer_arg) {
  return ondewo_nlu_session_pb.ListMatchedEntityTypesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListMatchedIntentsOfAllSessionsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.ListMatchedIntentsOfAllSessionsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListMatchedIntentsOfAllSessionsRequest(buffer_arg) {
  return ondewo_nlu_session_pb.ListMatchedIntentsOfAllSessionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListMatchedIntentsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.ListMatchedIntentsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListMatchedIntentsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListMatchedIntentsResponse(buffer_arg) {
  return ondewo_nlu_session_pb.ListMatchedIntentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListOriginIdsOfAllSessionsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.ListOriginIdsOfAllSessionsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListOriginIdsOfAllSessionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListOriginIdsOfAllSessionsRequest(buffer_arg) {
  return ondewo_nlu_session_pb.ListOriginIdsOfAllSessionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListOriginIdsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.ListOriginIdsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListOriginIdsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListOriginIdsResponse(buffer_arg) {
  return ondewo_nlu_session_pb.ListOriginIdsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListOutputContextsOfAllSessionsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.ListOutputContextsOfAllSessionsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListOutputContextsOfAllSessionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListOutputContextsOfAllSessionsRequest(buffer_arg) {
  return ondewo_nlu_session_pb.ListOutputContextsOfAllSessionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListOutputContextsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.ListOutputContextsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListOutputContextsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListOutputContextsResponse(buffer_arg) {
  return ondewo_nlu_session_pb.ListOutputContextsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListPlatformsOfAllSessionsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.ListPlatformsOfAllSessionsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListPlatformsOfAllSessionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListPlatformsOfAllSessionsRequest(buffer_arg) {
  return ondewo_nlu_session_pb.ListPlatformsOfAllSessionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListPlatformsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.ListPlatformsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListPlatformsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListPlatformsResponse(buffer_arg) {
  return ondewo_nlu_session_pb.ListPlatformsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListPropertyIdsOfAllSessionsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.ListPropertyIdsOfAllSessionsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListPropertyIdsOfAllSessionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListPropertyIdsOfAllSessionsRequest(buffer_arg) {
  return ondewo_nlu_session_pb.ListPropertyIdsOfAllSessionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListPropertyIdsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.ListPropertyIdsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListPropertyIdsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListPropertyIdsResponse(buffer_arg) {
  return ondewo_nlu_session_pb.ListPropertyIdsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListSessionCommentsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.ListSessionCommentsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListSessionCommentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListSessionCommentsRequest(buffer_arg) {
  return ondewo_nlu_session_pb.ListSessionCommentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListSessionCommentsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.ListSessionCommentsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListSessionCommentsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListSessionCommentsResponse(buffer_arg) {
  return ondewo_nlu_session_pb.ListSessionCommentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListSessionLabelsOfAllSessionsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.ListSessionLabelsOfAllSessionsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListSessionLabelsOfAllSessionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListSessionLabelsOfAllSessionsRequest(buffer_arg) {
  return ondewo_nlu_session_pb.ListSessionLabelsOfAllSessionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListSessionLabelsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.ListSessionLabelsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListSessionLabelsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListSessionLabelsRequest(buffer_arg) {
  return ondewo_nlu_session_pb.ListSessionLabelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListSessionLabelsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.ListSessionLabelsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListSessionLabelsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListSessionLabelsResponse(buffer_arg) {
  return ondewo_nlu_session_pb.ListSessionLabelsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListSessionReviewsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.ListSessionReviewsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListSessionReviewsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListSessionReviewsRequest(buffer_arg) {
  return ondewo_nlu_session_pb.ListSessionReviewsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListSessionReviewsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.ListSessionReviewsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListSessionReviewsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListSessionReviewsResponse(buffer_arg) {
  return ondewo_nlu_session_pb.ListSessionReviewsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListSessionsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.ListSessionsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListSessionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListSessionsRequest(buffer_arg) {
  return ondewo_nlu_session_pb.ListSessionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListSessionsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.ListSessionsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListSessionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListSessionsResponse(buffer_arg) {
  return ondewo_nlu_session_pb.ListSessionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListTagsOfAllSessionsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.ListTagsOfAllSessionsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListTagsOfAllSessionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListTagsOfAllSessionsRequest(buffer_arg) {
  return ondewo_nlu_session_pb.ListTagsOfAllSessionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListTagsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.ListTagsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListTagsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListTagsResponse(buffer_arg) {
  return ondewo_nlu_session_pb.ListTagsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListUserIdsOfAllSessionsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.ListUserIdsOfAllSessionsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListUserIdsOfAllSessionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListUserIdsOfAllSessionsRequest(buffer_arg) {
  return ondewo_nlu_session_pb.ListUserIdsOfAllSessionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListUserIdsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.ListUserIdsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListUserIdsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListUserIdsResponse(buffer_arg) {
  return ondewo_nlu_session_pb.ListUserIdsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_Session(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.Session)) {
    throw new Error('Expected argument of type ondewo.nlu.Session');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_Session(buffer_arg) {
  return ondewo_nlu_session_pb.Session.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_SessionReview(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.SessionReview)) {
    throw new Error('Expected argument of type ondewo.nlu.SessionReview');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_SessionReview(buffer_arg) {
  return ondewo_nlu_session_pb.SessionReview.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_StreamingDetectIntentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.StreamingDetectIntentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.StreamingDetectIntentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_StreamingDetectIntentRequest(buffer_arg) {
  return ondewo_nlu_session_pb.StreamingDetectIntentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_StreamingDetectIntentResponse(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.StreamingDetectIntentResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.StreamingDetectIntentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_StreamingDetectIntentResponse(buffer_arg) {
  return ondewo_nlu_session_pb.StreamingDetectIntentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_TrackSessionStepRequest(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.TrackSessionStepRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.TrackSessionStepRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_TrackSessionStepRequest(buffer_arg) {
  return ondewo_nlu_session_pb.TrackSessionStepRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_UpdateSessionCommentsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_session_pb.UpdateSessionCommentsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.UpdateSessionCommentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_UpdateSessionCommentsRequest(buffer_arg) {
  return ondewo_nlu_session_pb.UpdateSessionCommentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// A session represents an interaction with a user. You retrieve user input
// and pass it to the [DetectIntent][google.cloud.dialogflow.v2.Sessions.DetectIntent] (or
// [StreamingDetectIntent][google.cloud.dialogflow.v2.Sessions.StreamingDetectIntent]) method to determine
// user intent and respond.
var SessionsService = exports.SessionsService = {
  // Processes a natural language query and returns structured, actionable data
// as a result. This method is not idempotent, because it may cause contexts
// and session entity types to be updated, which in turn might affect
// results of future queries.
detectIntent: {
    path: '/ondewo.nlu.Sessions/DetectIntent',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_session_pb.DetectIntentRequest,
    responseType: ondewo_nlu_session_pb.DetectIntentResponse,
    requestSerialize: serialize_ondewo_nlu_DetectIntentRequest,
    requestDeserialize: deserialize_ondewo_nlu_DetectIntentRequest,
    responseSerialize: serialize_ondewo_nlu_DetectIntentResponse,
    responseDeserialize: deserialize_ondewo_nlu_DetectIntentResponse,
  },
  // Processes a natural language query in audio format in a streaming fashion
// and returns structured, actionable data as a result. This method is only
// available via the gRPC API (not REST).
streamingDetectIntent: {
    path: '/ondewo.nlu.Sessions/StreamingDetectIntent',
    requestStream: true,
    responseStream: true,
    requestType: ondewo_nlu_session_pb.StreamingDetectIntentRequest,
    responseType: ondewo_nlu_session_pb.StreamingDetectIntentResponse,
    requestSerialize: serialize_ondewo_nlu_StreamingDetectIntentRequest,
    requestDeserialize: deserialize_ondewo_nlu_StreamingDetectIntentRequest,
    responseSerialize: serialize_ondewo_nlu_StreamingDetectIntentResponse,
    responseDeserialize: deserialize_ondewo_nlu_StreamingDetectIntentResponse,
  },
  // *** SESSION RELATED ENDPOINTS *** //
// ListSessions: returns list of sessions from ondewo-kb; by default returns only session IDs
listSessions: {
    path: '/ondewo.nlu.Sessions/ListSessions',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_session_pb.ListSessionsRequest,
    responseType: ondewo_nlu_session_pb.ListSessionsResponse,
    requestSerialize: serialize_ondewo_nlu_ListSessionsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListSessionsRequest,
    responseSerialize: serialize_ondewo_nlu_ListSessionsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListSessionsResponse,
  },
  // GetSession: returns a session(=conversation) from ondewo-kb
getSession: {
    path: '/ondewo.nlu.Sessions/GetSession',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_session_pb.GetSessionRequest,
    responseType: ondewo_nlu_session_pb.Session,
    requestSerialize: serialize_ondewo_nlu_GetSessionRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetSessionRequest,
    responseSerialize: serialize_ondewo_nlu_Session,
    responseDeserialize: deserialize_ondewo_nlu_Session,
  },
  // CreateSession: creates and returns a session(=conversation) from ondewo-kb
createSession: {
    path: '/ondewo.nlu.Sessions/CreateSession',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_session_pb.CreateSessionRequest,
    responseType: ondewo_nlu_session_pb.Session,
    requestSerialize: serialize_ondewo_nlu_CreateSessionRequest,
    requestDeserialize: deserialize_ondewo_nlu_CreateSessionRequest,
    responseSerialize: serialize_ondewo_nlu_Session,
    responseDeserialize: deserialize_ondewo_nlu_Session,
  },
  // TrackSessionStep: append to an existing session; creates it if not existing
trackSessionStep: {
    path: '/ondewo.nlu.Sessions/TrackSessionStep',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_session_pb.TrackSessionStepRequest,
    responseType: ondewo_nlu_session_pb.Session,
    requestSerialize: serialize_ondewo_nlu_TrackSessionStepRequest,
    requestDeserialize: deserialize_ondewo_nlu_TrackSessionStepRequest,
    responseSerialize: serialize_ondewo_nlu_Session,
    responseDeserialize: deserialize_ondewo_nlu_Session,
  },
  // DeleteSession: delete a session(=conversation) from ondewo-kb (for testing only)
deleteSession: {
    path: '/ondewo.nlu.Sessions/DeleteSession',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_session_pb.DeleteSessionRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_nlu_DeleteSessionRequest,
    requestDeserialize: deserialize_ondewo_nlu_DeleteSessionRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // *** SESSION-LABEL RELATED ENDPOINTS *** //
listSessionLabels: {
    path: '/ondewo.nlu.Sessions/ListSessionLabels',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_session_pb.ListSessionLabelsRequest,
    responseType: ondewo_nlu_session_pb.ListSessionLabelsResponse,
    requestSerialize: serialize_ondewo_nlu_ListSessionLabelsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListSessionLabelsRequest,
    responseSerialize: serialize_ondewo_nlu_ListSessionLabelsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListSessionLabelsResponse,
  },
  listSessionLabelsOfAllSessions: {
    path: '/ondewo.nlu.Sessions/ListSessionLabelsOfAllSessions',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_session_pb.ListSessionLabelsOfAllSessionsRequest,
    responseType: ondewo_nlu_session_pb.ListSessionLabelsResponse,
    requestSerialize: serialize_ondewo_nlu_ListSessionLabelsOfAllSessionsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListSessionLabelsOfAllSessionsRequest,
    responseSerialize: serialize_ondewo_nlu_ListSessionLabelsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListSessionLabelsResponse,
  },
  listLanguageCodesOfAllSessions: {
    path: '/ondewo.nlu.Sessions/ListLanguageCodesOfAllSessions',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_session_pb.ListLanguageCodesOfAllSessionsRequest,
    responseType: ondewo_nlu_session_pb.ListLanguageCodesResponse,
    requestSerialize: serialize_ondewo_nlu_ListLanguageCodesOfAllSessionsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListLanguageCodesOfAllSessionsRequest,
    responseSerialize: serialize_ondewo_nlu_ListLanguageCodesResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListLanguageCodesResponse,
  },
  listMatchedIntentsOfAllSessions: {
    path: '/ondewo.nlu.Sessions/ListMatchedIntentsOfAllSessions',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_session_pb.ListMatchedIntentsOfAllSessionsRequest,
    responseType: ondewo_nlu_session_pb.ListMatchedIntentsResponse,
    requestSerialize: serialize_ondewo_nlu_ListMatchedIntentsOfAllSessionsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListMatchedIntentsOfAllSessionsRequest,
    responseSerialize: serialize_ondewo_nlu_ListMatchedIntentsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListMatchedIntentsResponse,
  },
  listMatchedEntityTypesOfAllSessions: {
    path: '/ondewo.nlu.Sessions/ListMatchedEntityTypesOfAllSessions',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_session_pb.ListMatchedEntityTypesOfAllSessionsRequest,
    responseType: ondewo_nlu_session_pb.ListMatchedEntityTypesResponse,
    requestSerialize: serialize_ondewo_nlu_ListMatchedEntityTypesOfAllSessionsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListMatchedEntityTypesOfAllSessionsRequest,
    responseSerialize: serialize_ondewo_nlu_ListMatchedEntityTypesResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListMatchedEntityTypesResponse,
  },
  listUserIdsOfAllSessions: {
    path: '/ondewo.nlu.Sessions/ListUserIdsOfAllSessions',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_session_pb.ListUserIdsOfAllSessionsRequest,
    responseType: ondewo_nlu_session_pb.ListUserIdsResponse,
    requestSerialize: serialize_ondewo_nlu_ListUserIdsOfAllSessionsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListUserIdsOfAllSessionsRequest,
    responseSerialize: serialize_ondewo_nlu_ListUserIdsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListUserIdsResponse,
  },
  listIdentifiedUserIdsOfAllSessions: {
    path: '/ondewo.nlu.Sessions/ListIdentifiedUserIdsOfAllSessions',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_session_pb.ListIdentifiedUserIdsOfAllSessionsRequest,
    responseType: ondewo_nlu_session_pb.ListIdentifiedUserIdsResponse,
    requestSerialize: serialize_ondewo_nlu_ListIdentifiedUserIdsOfAllSessionsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListIdentifiedUserIdsOfAllSessionsRequest,
    responseSerialize: serialize_ondewo_nlu_ListIdentifiedUserIdsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListIdentifiedUserIdsResponse,
  },
  listTagsOfAllSessions: {
    path: '/ondewo.nlu.Sessions/ListTagsOfAllSessions',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_session_pb.ListTagsOfAllSessionsRequest,
    responseType: ondewo_nlu_session_pb.ListTagsResponse,
    requestSerialize: serialize_ondewo_nlu_ListTagsOfAllSessionsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListTagsOfAllSessionsRequest,
    responseSerialize: serialize_ondewo_nlu_ListTagsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListTagsResponse,
  },
  listInputContextsOfAllSessions: {
    path: '/ondewo.nlu.Sessions/ListInputContextsOfAllSessions',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_session_pb.ListInputContextsOfAllSessionsRequest,
    responseType: ondewo_nlu_session_pb.ListInputContextsResponse,
    requestSerialize: serialize_ondewo_nlu_ListInputContextsOfAllSessionsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListInputContextsOfAllSessionsRequest,
    responseSerialize: serialize_ondewo_nlu_ListInputContextsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListInputContextsResponse,
  },
  listOutputContextsOfAllSessions: {
    path: '/ondewo.nlu.Sessions/ListOutputContextsOfAllSessions',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_session_pb.ListOutputContextsOfAllSessionsRequest,
    responseType: ondewo_nlu_session_pb.ListOutputContextsResponse,
    requestSerialize: serialize_ondewo_nlu_ListOutputContextsOfAllSessionsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListOutputContextsOfAllSessionsRequest,
    responseSerialize: serialize_ondewo_nlu_ListOutputContextsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListOutputContextsResponse,
  },
  listPlatformsOfAllSessions: {
    path: '/ondewo.nlu.Sessions/ListPlatformsOfAllSessions',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_session_pb.ListPlatformsOfAllSessionsRequest,
    responseType: ondewo_nlu_session_pb.ListPlatformsResponse,
    requestSerialize: serialize_ondewo_nlu_ListPlatformsOfAllSessionsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListPlatformsOfAllSessionsRequest,
    responseSerialize: serialize_ondewo_nlu_ListPlatformsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListPlatformsResponse,
  },
  listAccountIdsOfAllSessions: {
    path: '/ondewo.nlu.Sessions/ListAccountIdsOfAllSessions',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_session_pb.ListAccountIdsOfAllSessionsRequest,
    responseType: ondewo_nlu_session_pb.ListAccountIdsResponse,
    requestSerialize: serialize_ondewo_nlu_ListAccountIdsOfAllSessionsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListAccountIdsOfAllSessionsRequest,
    responseSerialize: serialize_ondewo_nlu_ListAccountIdsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListAccountIdsResponse,
  },
  listPropertyIdsOfAllSessions: {
    path: '/ondewo.nlu.Sessions/ListPropertyIdsOfAllSessions',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_session_pb.ListPropertyIdsOfAllSessionsRequest,
    responseType: ondewo_nlu_session_pb.ListPropertyIdsResponse,
    requestSerialize: serialize_ondewo_nlu_ListPropertyIdsOfAllSessionsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListPropertyIdsOfAllSessionsRequest,
    responseSerialize: serialize_ondewo_nlu_ListPropertyIdsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListPropertyIdsResponse,
  },
  listDatastreamIdsOfAllSessions: {
    path: '/ondewo.nlu.Sessions/ListDatastreamIdsOfAllSessions',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_session_pb.ListDatastreamIdsOfAllSessionsRequest,
    responseType: ondewo_nlu_session_pb.ListDatastreamIdsResponse,
    requestSerialize: serialize_ondewo_nlu_ListDatastreamIdsOfAllSessionsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListDatastreamIdsOfAllSessionsRequest,
    responseSerialize: serialize_ondewo_nlu_ListDatastreamIdsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListDatastreamIdsResponse,
  },
  listOriginIdsOfAllSessions: {
    path: '/ondewo.nlu.Sessions/ListOriginIdsOfAllSessions',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_session_pb.ListOriginIdsOfAllSessionsRequest,
    responseType: ondewo_nlu_session_pb.ListOriginIdsResponse,
    requestSerialize: serialize_ondewo_nlu_ListOriginIdsOfAllSessionsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListOriginIdsOfAllSessionsRequest,
    responseSerialize: serialize_ondewo_nlu_ListOriginIdsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListOriginIdsResponse,
  },
  addSessionLabels: {
    path: '/ondewo.nlu.Sessions/AddSessionLabels',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_session_pb.AddSessionLabelsRequest,
    responseType: ondewo_nlu_session_pb.Session,
    requestSerialize: serialize_ondewo_nlu_AddSessionLabelsRequest,
    requestDeserialize: deserialize_ondewo_nlu_AddSessionLabelsRequest,
    responseSerialize: serialize_ondewo_nlu_Session,
    responseDeserialize: deserialize_ondewo_nlu_Session,
  },
  deleteSessionLabels: {
    path: '/ondewo.nlu.Sessions/DeleteSessionLabels',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_session_pb.DeleteSessionLabelsRequest,
    responseType: ondewo_nlu_session_pb.Session,
    requestSerialize: serialize_ondewo_nlu_DeleteSessionLabelsRequest,
    requestDeserialize: deserialize_ondewo_nlu_DeleteSessionLabelsRequest,
    responseSerialize: serialize_ondewo_nlu_Session,
    responseDeserialize: deserialize_ondewo_nlu_Session,
  },
  addSessionComment: {
    path: '/ondewo.nlu.Sessions/AddSessionComment',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_session_pb.AddSessionCommentRequest,
    responseType: ondewo_nlu_common_pb.Comment,
    requestSerialize: serialize_ondewo_nlu_AddSessionCommentRequest,
    requestDeserialize: deserialize_ondewo_nlu_AddSessionCommentRequest,
    responseSerialize: serialize_ondewo_nlu_Comment,
    responseDeserialize: deserialize_ondewo_nlu_Comment,
  },
  deleteSessionComments: {
    path: '/ondewo.nlu.Sessions/DeleteSessionComments',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_session_pb.DeleteSessionCommentsRequest,
    responseType: ondewo_nlu_session_pb.Session,
    requestSerialize: serialize_ondewo_nlu_DeleteSessionCommentsRequest,
    requestDeserialize: deserialize_ondewo_nlu_DeleteSessionCommentsRequest,
    responseSerialize: serialize_ondewo_nlu_Session,
    responseDeserialize: deserialize_ondewo_nlu_Session,
  },
  updateSessionComments: {
    path: '/ondewo.nlu.Sessions/UpdateSessionComments',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_session_pb.UpdateSessionCommentsRequest,
    responseType: ondewo_nlu_session_pb.Session,
    requestSerialize: serialize_ondewo_nlu_UpdateSessionCommentsRequest,
    requestDeserialize: deserialize_ondewo_nlu_UpdateSessionCommentsRequest,
    responseSerialize: serialize_ondewo_nlu_Session,
    responseDeserialize: deserialize_ondewo_nlu_Session,
  },
  listSessionComments: {
    path: '/ondewo.nlu.Sessions/ListSessionComments',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_session_pb.ListSessionCommentsRequest,
    responseType: ondewo_nlu_session_pb.ListSessionCommentsResponse,
    requestSerialize: serialize_ondewo_nlu_ListSessionCommentsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListSessionCommentsRequest,
    responseSerialize: serialize_ondewo_nlu_ListSessionCommentsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListSessionCommentsResponse,
  },
  // *** SESSION-REVIEW RELATED ENDPOINTS *** //
// ListSessionReviews:
// returns list of session reviews from ondewo-kb; by default only returns session review IDs
listSessionReviews: {
    path: '/ondewo.nlu.Sessions/ListSessionReviews',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_session_pb.ListSessionReviewsRequest,
    responseType: ondewo_nlu_session_pb.ListSessionReviewsResponse,
    requestSerialize: serialize_ondewo_nlu_ListSessionReviewsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListSessionReviewsRequest,
    responseSerialize: serialize_ondewo_nlu_ListSessionReviewsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListSessionReviewsResponse,
  },
  // GetSessionReview:
// returns a session-review from ondewo-kb or computes the first review if none exists
getSessionReview: {
    path: '/ondewo.nlu.Sessions/GetSessionReview',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_session_pb.GetSessionReviewRequest,
    responseType: ondewo_nlu_session_pb.SessionReview,
    requestSerialize: serialize_ondewo_nlu_GetSessionReviewRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetSessionReviewRequest,
    responseSerialize: serialize_ondewo_nlu_SessionReview,
    responseDeserialize: deserialize_ondewo_nlu_SessionReview,
  },
  // GetLatestSessionReview:
// returns a session-review from ondewo-kb or computes the first review if none exists
getLatestSessionReview: {
    path: '/ondewo.nlu.Sessions/GetLatestSessionReview',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_session_pb.GetLatestSessionReviewRequest,
    responseType: ondewo_nlu_session_pb.SessionReview,
    requestSerialize: serialize_ondewo_nlu_GetLatestSessionReviewRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetLatestSessionReviewRequest,
    responseSerialize: serialize_ondewo_nlu_SessionReview,
    responseDeserialize: deserialize_ondewo_nlu_SessionReview,
  },
  // CreateSessionReview:
// persist a session review in ondewo-kb
// as a side effect: also update training data in ondewo-cai
createSessionReview: {
    path: '/ondewo.nlu.Sessions/CreateSessionReview',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_session_pb.CreateSessionReviewRequest,
    responseType: ondewo_nlu_session_pb.SessionReview,
    requestSerialize: serialize_ondewo_nlu_CreateSessionReviewRequest,
    requestDeserialize: deserialize_ondewo_nlu_CreateSessionReviewRequest,
    responseSerialize: serialize_ondewo_nlu_SessionReview,
    responseDeserialize: deserialize_ondewo_nlu_SessionReview,
  },
  // RPC to get audio files based on specified criteria.
// Retrieves information about audio files associated with specific sessions.
// Returns a response containing details of the requested audio files.
getAudioFiles: {
    path: '/ondewo.nlu.Sessions/GetAudioFiles',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_session_pb.GetAudioFilesRequest,
    responseType: ondewo_nlu_session_pb.GetAudioFilesResponse,
    requestSerialize: serialize_ondewo_nlu_GetAudioFilesRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetAudioFilesRequest,
    responseSerialize: serialize_ondewo_nlu_GetAudioFilesResponse,
    responseDeserialize: deserialize_ondewo_nlu_GetAudioFilesResponse,
  },
  // RPC to add audio files to a session.
// Adds new audio files to the specified session, providing details about each file.
// Returns a response containing information about the added audio files.
addAudioFiles: {
    path: '/ondewo.nlu.Sessions/AddAudioFiles',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_session_pb.AddAudioFilesRequest,
    responseType: ondewo_nlu_session_pb.AddAudioFilesResponse,
    requestSerialize: serialize_ondewo_nlu_AddAudioFilesRequest,
    requestDeserialize: deserialize_ondewo_nlu_AddAudioFilesRequest,
    responseSerialize: serialize_ondewo_nlu_AddAudioFilesResponse,
    responseDeserialize: deserialize_ondewo_nlu_AddAudioFilesResponse,
  },
  // RPC to delete specified audio files.
// Deletes audio files associated with specific sessions based on unique identifiers.
// Returns an empty response indicating the successful deletion of the specified audio files.
deleteAudioFiles: {
    path: '/ondewo.nlu.Sessions/DeleteAudioFiles',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_session_pb.DeleteAudioFilesRequest,
    responseType: ondewo_nlu_session_pb.DeleteAudioFilesResponse,
    requestSerialize: serialize_ondewo_nlu_DeleteAudioFilesRequest,
    requestDeserialize: deserialize_ondewo_nlu_DeleteAudioFilesRequest,
    responseSerialize: serialize_ondewo_nlu_DeleteAudioFilesResponse,
    responseDeserialize: deserialize_ondewo_nlu_DeleteAudioFilesResponse,
  },
  // RPC to get a consolidated audio file for a specific session.
// Retrieves a single audio file that combines all audio files associated with the specified session.
// Returns details of the consolidated audio file.
getAudioFileOfSession: {
    path: '/ondewo.nlu.Sessions/GetAudioFileOfSession',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_session_pb.GetAudioFileOfSessionRequest,
    responseType: ondewo_nlu_session_pb.AudioFileResource,
    requestSerialize: serialize_ondewo_nlu_GetAudioFileOfSessionRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetAudioFileOfSessionRequest,
    responseSerialize: serialize_ondewo_nlu_AudioFileResource,
    responseDeserialize: deserialize_ondewo_nlu_AudioFileResource,
  },
  // RPC to get a list audio files for a specific session.
// Retrieves a single audio file that combines all audio files associated with the specified session.
listAudioFiles: {
    path: '/ondewo.nlu.Sessions/ListAudioFiles',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_session_pb.ListAudioFilesRequest,
    responseType: ondewo_nlu_session_pb.ListAudioFilesResponse,
    requestSerialize: serialize_ondewo_nlu_ListAudioFilesRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListAudioFilesRequest,
    responseSerialize: serialize_ondewo_nlu_ListAudioFilesResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListAudioFilesResponse,
  },
};

exports.SessionsClient = grpc.makeGenericClientConstructor(SessionsService);
