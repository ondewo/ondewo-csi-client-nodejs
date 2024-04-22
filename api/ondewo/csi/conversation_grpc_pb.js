// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2021-2023 ONDEWO GmbH
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
var ondewo_csi_conversation_pb = require('../../ondewo/csi/conversation_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_rpc_status_pb = require('../../google/rpc/status_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var ondewo_nlu_session_pb = require('../../ondewo/nlu/session_pb.js');
var ondewo_t2s_text$to$speech_pb = require('../../ondewo/t2s/text-to-speech_pb.js');
var ondewo_s2t_speech$to$text_pb = require('../../ondewo/s2t/speech-to-text_pb.js');
var ondewo_nlu_context_pb = require('../../ondewo/nlu/context_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_csi_CheckUpstreamHealthResponse(arg) {
  if (!(arg instanceof ondewo_csi_conversation_pb.CheckUpstreamHealthResponse)) {
    throw new Error('Expected argument of type ondewo.csi.CheckUpstreamHealthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_csi_CheckUpstreamHealthResponse(buffer_arg) {
  return ondewo_csi_conversation_pb.CheckUpstreamHealthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_csi_ControlStreamRequest(arg) {
  if (!(arg instanceof ondewo_csi_conversation_pb.ControlStreamRequest)) {
    throw new Error('Expected argument of type ondewo.csi.ControlStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_csi_ControlStreamRequest(buffer_arg) {
  return ondewo_csi_conversation_pb.ControlStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_csi_ControlStreamResponse(arg) {
  if (!(arg instanceof ondewo_csi_conversation_pb.ControlStreamResponse)) {
    throw new Error('Expected argument of type ondewo.csi.ControlStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_csi_ControlStreamResponse(buffer_arg) {
  return ondewo_csi_conversation_pb.ControlStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_csi_ListS2sPipelinesRequest(arg) {
  if (!(arg instanceof ondewo_csi_conversation_pb.ListS2sPipelinesRequest)) {
    throw new Error('Expected argument of type ondewo.csi.ListS2sPipelinesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_csi_ListS2sPipelinesRequest(buffer_arg) {
  return ondewo_csi_conversation_pb.ListS2sPipelinesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_csi_ListS2sPipelinesResponse(arg) {
  if (!(arg instanceof ondewo_csi_conversation_pb.ListS2sPipelinesResponse)) {
    throw new Error('Expected argument of type ondewo.csi.ListS2sPipelinesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_csi_ListS2sPipelinesResponse(buffer_arg) {
  return ondewo_csi_conversation_pb.ListS2sPipelinesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_csi_S2sPipeline(arg) {
  if (!(arg instanceof ondewo_csi_conversation_pb.S2sPipeline)) {
    throw new Error('Expected argument of type ondewo.csi.S2sPipeline');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_csi_S2sPipeline(buffer_arg) {
  return ondewo_csi_conversation_pb.S2sPipeline.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_csi_S2sPipelineId(arg) {
  if (!(arg instanceof ondewo_csi_conversation_pb.S2sPipelineId)) {
    throw new Error('Expected argument of type ondewo.csi.S2sPipelineId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_csi_S2sPipelineId(buffer_arg) {
  return ondewo_csi_conversation_pb.S2sPipelineId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_csi_S2sStreamRequest(arg) {
  if (!(arg instanceof ondewo_csi_conversation_pb.S2sStreamRequest)) {
    throw new Error('Expected argument of type ondewo.csi.S2sStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_csi_S2sStreamRequest(buffer_arg) {
  return ondewo_csi_conversation_pb.S2sStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_csi_S2sStreamResponse(arg) {
  if (!(arg instanceof ondewo_csi_conversation_pb.S2sStreamResponse)) {
    throw new Error('Expected argument of type ondewo.csi.S2sStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_csi_S2sStreamResponse(buffer_arg) {
  return ondewo_csi_conversation_pb.S2sStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_csi_SetControlStatusRequest(arg) {
  if (!(arg instanceof ondewo_csi_conversation_pb.SetControlStatusRequest)) {
    throw new Error('Expected argument of type ondewo.csi.SetControlStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_csi_SetControlStatusRequest(buffer_arg) {
  return ondewo_csi_conversation_pb.SetControlStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_csi_SetControlStatusResponse(arg) {
  if (!(arg instanceof ondewo_csi_conversation_pb.SetControlStatusResponse)) {
    throw new Error('Expected argument of type ondewo.csi.SetControlStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_csi_SetControlStatusResponse(buffer_arg) {
  return ondewo_csi_conversation_pb.SetControlStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// endpoints of csi service
var ConversationsService = exports.ConversationsService = {
  // Create the S2S pipeline specified in the request message. The pipeline with the specified ID must not exist.
//
// <p>Examples:</p>
//
// <pre>
// grpcurl -plaintext -d '{
//   "id": "pizza",
//   "s2t_pipeline_id": "default_german",
//   "nlu_project_id": "1f3425d2-41fd-4970-87e6-88e8e121bb49",
//   "nlu_language_code": "de",
//   "t2s_pipeline_id": "default_german"
// }' localhost:50051 ondewo.csi.Conversations.CreateS2sPipeline
// </pre>
// <samp>{}</samp>
createS2sPipeline: {
    path: '/ondewo.csi.Conversations/CreateS2sPipeline',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_csi_conversation_pb.S2sPipeline,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_csi_S2sPipeline,
    requestDeserialize: deserialize_ondewo_csi_S2sPipeline,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Retrieve the S2S pipeline with the ID specified in the request message.
//
// <p>Examples:</p>
//
// <pre>
// grpcurl -plaintext -d '{"id": "pizza"}' localhost:50051 ondewo.csi.Conversations.GetS2sPipeline
// </pre>
// <samp>{
//   "id": "pizza",
//   "s2t_pipeline_id": "default_german",
//   "nlu_project_id": "1f3425d2-41fd-4970-87e6-88e8e121bb49",
//   "nlu_language_code": "de",
//   "t2s_pipeline_id": "default_german"
// }
// </samp>
getS2sPipeline: {
    path: '/ondewo.csi.Conversations/GetS2sPipeline',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_csi_conversation_pb.S2sPipelineId,
    responseType: ondewo_csi_conversation_pb.S2sPipeline,
    requestSerialize: serialize_ondewo_csi_S2sPipelineId,
    requestDeserialize: deserialize_ondewo_csi_S2sPipelineId,
    responseSerialize: serialize_ondewo_csi_S2sPipeline,
    responseDeserialize: deserialize_ondewo_csi_S2sPipeline,
  },
  // Update the S2S pipeline specified in the request message. The pipeline must exist.
//
// <p>Examples:</p>
//
// <pre>
// grpcurl -plaintext -d '{
//   "id": "pizza",
//   "s2t_pipeline_id": "default_german",
//   "nlu_project_id": "1f3425d2-41fd-4970-87e6-88e8e121bb49",
//   "nlu_language_code": "en",
//   "t2s_pipeline_id": "default_german"
// }' localhost:50051 ondewo.csi.Conversations.UpdateS2sPipeline
// </pre>
// <samp>{}</samp>
updateS2sPipeline: {
    path: '/ondewo.csi.Conversations/UpdateS2sPipeline',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_csi_conversation_pb.S2sPipeline,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_csi_S2sPipeline,
    requestDeserialize: deserialize_ondewo_csi_S2sPipeline,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Delete the S2S pipeline with the ID specified in the request message. The pipeline must exist.
//
// <p>Examples:</p>
//
// <pre>
// grpcurl -plaintext -d '{"id": "pizza"}' localhost:50051 ondewo.csi.Conversations.DeleteS2sPipeline
// </pre>
// <samp>{}</samp>
deleteS2sPipeline: {
    path: '/ondewo.csi.Conversations/DeleteS2sPipeline',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_csi_conversation_pb.S2sPipelineId,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ondewo_csi_S2sPipelineId,
    requestDeserialize: deserialize_ondewo_csi_S2sPipelineId,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // List all S2S pipelines of the server.
//
// <p>Examples:</p>
//
// <pre>
// grpcurl -plaintext localhost:50051 ondewo.csi.Conversations.ListS2sPipelines
// </pre>
// <samp>{
//   "pipelines": [
//     {
//       "id": "pizza",
//       "s2t_pipeline_id": "default_german",
//       "nlu_project_id": "1f3425d2-41fd-4970-87e6-88e8e121bb49",
//       "nlu_language_code": "de",
//       "t2s_pipeline_id": "default_german"
//     }
//   ]
// }</samp>
listS2sPipelines: {
    path: '/ondewo.csi.Conversations/ListS2sPipelines',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_csi_conversation_pb.ListS2sPipelinesRequest,
    responseType: ondewo_csi_conversation_pb.ListS2sPipelinesResponse,
    requestSerialize: serialize_ondewo_csi_ListS2sPipelinesRequest,
    requestDeserialize: deserialize_ondewo_csi_ListS2sPipelinesRequest,
    responseSerialize: serialize_ondewo_csi_ListS2sPipelinesResponse,
    responseDeserialize: deserialize_ondewo_csi_ListS2sPipelinesResponse,
  },
  // Processes a natural language query in audio format in a streaming fashion
// and returns structured, actionable data as a result.
s2sStream: {
    path: '/ondewo.csi.Conversations/S2sStream',
    requestStream: true,
    responseStream: true,
    requestType: ondewo_csi_conversation_pb.S2sStreamRequest,
    responseType: ondewo_csi_conversation_pb.S2sStreamResponse,
    requestSerialize: serialize_ondewo_csi_S2sStreamRequest,
    requestDeserialize: deserialize_ondewo_csi_S2sStreamRequest,
    responseSerialize: serialize_ondewo_csi_S2sStreamResponse,
    responseDeserialize: deserialize_ondewo_csi_S2sStreamResponse,
  },
  // Check the health of S2T, NLU and T2S servers
//
// <p>Examples:</p>
//
// <pre>
// grpcurl -plaintext localhost:50051 ondewo.csi.Conversations.CheckUpstreamHealth
// </pre>
//
// All upstreams healthy:
// <samp>{}</samp>
//
// All upstreams unhealthy:
// <samp>{
//   "s2t_status": {
//     "code": 14,
//     "message": "failed to connect to all addresses"
//   },
//   "nlu_status": {
//     "code": 14,
//     "message": "failed to connect to all addresses"
//   },
//   "t2s_status": {
//     "code": 14,
//     "message": "failed to connect to all addresses"
//   }
// }</samp>
checkUpstreamHealth: {
    path: '/ondewo.csi.Conversations/CheckUpstreamHealth',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: ondewo_csi_conversation_pb.CheckUpstreamHealthResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_ondewo_csi_CheckUpstreamHealthResponse,
    responseDeserialize: deserialize_ondewo_csi_CheckUpstreamHealthResponse,
  },
  // Get the control stream to control sip, t2s, s2t etc. during a conversation
getControlStream: {
    path: '/ondewo.csi.Conversations/GetControlStream',
    requestStream: false,
    responseStream: true,
    requestType: ondewo_csi_conversation_pb.ControlStreamRequest,
    responseType: ondewo_csi_conversation_pb.ControlStreamResponse,
    requestSerialize: serialize_ondewo_csi_ControlStreamRequest,
    requestDeserialize: deserialize_ondewo_csi_ControlStreamRequest,
    responseSerialize: serialize_ondewo_csi_ControlStreamResponse,
    responseDeserialize: deserialize_ondewo_csi_ControlStreamResponse,
  },
  // Send a message on the control stream to control sip, t2s, s2t etc. during a conversation
setControlStatus: {
    path: '/ondewo.csi.Conversations/SetControlStatus',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_csi_conversation_pb.SetControlStatusRequest,
    responseType: ondewo_csi_conversation_pb.SetControlStatusResponse,
    requestSerialize: serialize_ondewo_csi_SetControlStatusRequest,
    requestDeserialize: deserialize_ondewo_csi_SetControlStatusRequest,
    responseSerialize: serialize_ondewo_csi_SetControlStatusResponse,
    responseDeserialize: deserialize_ondewo_csi_SetControlStatusResponse,
  },
};

exports.ConversationsClient = grpc.makeGenericClientConstructor(ConversationsService);
