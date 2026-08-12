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
// Modifications Copyright 2020-2026 ONDEWO GmbH
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
// File-level comment for <code>ondewo/nlu/rag.proto</code>.
// This file contains a single service <a href="#ondewo.nlu.Rags">Rags</a>. The Rags service provides RAG (Retrieval-Augmented Generation) and web crawler functionality.
// Fields marked as <code>optional</code> carry explicit presence, so that an explicitly set default value (<code>0</code>, <code>false</code>, <code>""</code>) can be distinguished from a field that was never set. Without the <code>optional</code> keyword it would for instance not be possible to distinguish between an integer <code>0</code> and <code>null</code>.
// The marker is applied where that distinction is actually consumed — the partial-update inputs (an unset field leaves the stored value untouched, an explicit default clears it) and the retrieval overrides that are forwarded to RAGFlow (an explicit <code>0.0</code> or <code>false</code> must override the server-side default rather than fall back to it). Fields that carry no such distinction are deliberately left without the keyword, and for message-typed fields it is omitted because proto3 gives them explicit presence anyway.
'use strict';
var grpc = require('@grpc/grpc-js');
var ondewo_nlu_rag_pb = require('../../ondewo/nlu/rag_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var ondewo_nlu_common_pb = require('../../ondewo/nlu/common_pb.js');
var ondewo_nlu_operation_metadata_pb = require('../../ondewo/nlu/operation_metadata_pb.js');
var ondewo_nlu_operations_pb = require('../../ondewo/nlu/operations_pb.js');
var ondewo_nlu_session_pb = require('../../ondewo/nlu/session_pb.js');

function serialize_ondewo_nlu_Operation(arg) {
  if (!(arg instanceof ondewo_nlu_operations_pb.Operation)) {
    throw new Error('Expected argument of type ondewo.nlu.Operation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_Operation(buffer_arg) {
  return ondewo_nlu_operations_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagAddCrawlerResultsToDatasetsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagAddCrawlerResultsToDatasetsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagAddCrawlerResultsToDatasetsRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagAddCrawlerResultsToDatasetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagCrawler(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagCrawler)) {
    throw new Error('Expected argument of type ondewo.nlu.RagCrawler');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagCrawler(buffer_arg) {
  return ondewo_nlu_rag_pb.RagCrawler.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagCrawlerResult(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagCrawlerResult)) {
    throw new Error('Expected argument of type ondewo.nlu.RagCrawlerResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagCrawlerResult(buffer_arg) {
  return ondewo_nlu_rag_pb.RagCrawlerResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagCreateCrawlerRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagCreateCrawlerRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagCreateCrawlerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagCreateCrawlerRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagCreateCrawlerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagCreateDatasetRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagCreateDatasetRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagCreateDatasetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagCreateDatasetRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagCreateDatasetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagDataset(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagDataset)) {
    throw new Error('Expected argument of type ondewo.nlu.RagDataset');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagDataset(buffer_arg) {
  return ondewo_nlu_rag_pb.RagDataset.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagDatasetList(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagDatasetList)) {
    throw new Error('Expected argument of type ondewo.nlu.RagDatasetList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagDatasetList(buffer_arg) {
  return ondewo_nlu_rag_pb.RagDatasetList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagDeleteCrawlerRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagDeleteCrawlerRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagDeleteCrawlerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagDeleteCrawlerRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagDeleteCrawlerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagDeleteCrawlerResponse(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagDeleteCrawlerResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RagDeleteCrawlerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagDeleteCrawlerResponse(buffer_arg) {
  return ondewo_nlu_rag_pb.RagDeleteCrawlerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagDeleteCrawlerRunsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagDeleteCrawlerRunsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagDeleteCrawlerRunsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagDeleteCrawlerRunsRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagDeleteCrawlerRunsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagDeleteCrawlerRunsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagDeleteCrawlerRunsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RagDeleteCrawlerRunsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagDeleteCrawlerRunsResponse(buffer_arg) {
  return ondewo_nlu_rag_pb.RagDeleteCrawlerRunsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagDeleteCrawlersRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagDeleteCrawlersRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagDeleteCrawlersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagDeleteCrawlersRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagDeleteCrawlersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagDeleteCrawlersResponse(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagDeleteCrawlersResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RagDeleteCrawlersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagDeleteCrawlersResponse(buffer_arg) {
  return ondewo_nlu_rag_pb.RagDeleteCrawlersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagDeleteDocumentsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagDeleteDocumentsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagDeleteDocumentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagDeleteDocumentsRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagDeleteDocumentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagDeleteRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagDeleteRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagDeleteRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagDocument(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagDocument)) {
    throw new Error('Expected argument of type ondewo.nlu.RagDocument');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagDocument(buffer_arg) {
  return ondewo_nlu_rag_pb.RagDocument.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagDocumentIdsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagDocumentIdsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagDocumentIdsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagDocumentIdsRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagDocumentIdsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagDocumentList(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagDocumentList)) {
    throw new Error('Expected argument of type ondewo.nlu.RagDocumentList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagDocumentList(buffer_arg) {
  return ondewo_nlu_rag_pb.RagDocumentList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagDownloadDocumentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagDownloadDocumentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagDownloadDocumentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagDownloadDocumentRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagDownloadDocumentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagFileChunk(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagFileChunk)) {
    throw new Error('Expected argument of type ondewo.nlu.RagFileChunk');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagFileChunk(buffer_arg) {
  return ondewo_nlu_rag_pb.RagFileChunk.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagGetCrawlerAttachedDatasetsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagGetCrawlerAttachedDatasetsRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagGetCrawlerAttachedDatasetsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RagGetCrawlerAttachedDatasetsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagGetCrawlerAttachedDatasetsResponse(buffer_arg) {
  return ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagGetCrawlerRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagGetCrawlerRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagGetCrawlerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagGetCrawlerRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagGetCrawlerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagGetCrawlerResultRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagGetCrawlerResultRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagGetCrawlerResultRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagGetCrawlerResultRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagGetCrawlerResultRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagGetCrawlerResultsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagGetCrawlerResultsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagGetCrawlerResultsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagGetCrawlerResultsRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagGetCrawlerResultsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagGetCrawlerResultsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagGetCrawlerResultsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RagGetCrawlerResultsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagGetCrawlerResultsResponse(buffer_arg) {
  return ondewo_nlu_rag_pb.RagGetCrawlerResultsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagGetCrawlerRunLogsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagGetCrawlerRunLogsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagGetCrawlerRunLogsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagGetCrawlerRunLogsRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagGetCrawlerRunLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagGetCrawlerRunLogsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagGetCrawlerRunLogsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RagGetCrawlerRunLogsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagGetCrawlerRunLogsResponse(buffer_arg) {
  return ondewo_nlu_rag_pb.RagGetCrawlerRunLogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagGetCrawlerRunRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagGetCrawlerRunRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagGetCrawlerRunRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagGetCrawlerRunRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagGetCrawlerRunRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagListCrawlerRunsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagListCrawlerRunsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagListCrawlerRunsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagListCrawlerRunsRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagListCrawlerRunsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagListCrawlerRunsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagListCrawlerRunsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RagListCrawlerRunsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagListCrawlerRunsResponse(buffer_arg) {
  return ondewo_nlu_rag_pb.RagListCrawlerRunsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagListCrawlersRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagListCrawlersRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagListCrawlersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagListCrawlersRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagListCrawlersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagListCrawlersResponse(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagListCrawlersResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RagListCrawlersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagListCrawlersResponse(buffer_arg) {
  return ondewo_nlu_rag_pb.RagListCrawlersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagListDatasetsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagListDatasetsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagListDatasetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagListDatasetsRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagListDatasetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagListDocumentsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagListDocumentsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagListDocumentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagListDocumentsRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagListDocumentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagPartialSuccess(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagPartialSuccess)) {
    throw new Error('Expected argument of type ondewo.nlu.RagPartialSuccess');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagPartialSuccess(buffer_arg) {
  return ondewo_nlu_rag_pb.RagPartialSuccess.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagRemoveCrawlerResultsFromDatasetsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagRemoveCrawlerResultsFromDatasetsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagRemoveCrawlerResultsFromDatasetsRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagRemoveCrawlerResultsFromDatasetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagRetrievalRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagRetrievalRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagRetrievalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagRetrievalRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagRetrievalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagRetrievalResponse(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagRetrievalResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RagRetrievalResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagRetrievalResponse(buffer_arg) {
  return ondewo_nlu_rag_pb.RagRetrievalResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagStartCrawlerRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagStartCrawlerRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagStartCrawlerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagStartCrawlerRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagStartCrawlerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagStopCrawlerRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagStopCrawlerRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagStopCrawlerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagStopCrawlerRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagStopCrawlerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagStopCrawlerResponse(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagStopCrawlerResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.RagStopCrawlerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagStopCrawlerResponse(buffer_arg) {
  return ondewo_nlu_rag_pb.RagStopCrawlerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagUpdateCrawlerRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagUpdateCrawlerRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagUpdateCrawlerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagUpdateCrawlerRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagUpdateCrawlerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagUpdateDatasetRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagUpdateDatasetRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagUpdateDatasetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagUpdateDatasetRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagUpdateDatasetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagUpdateDocumentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagUpdateDocumentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagUpdateDocumentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagUpdateDocumentRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagUpdateDocumentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_RagUploadDocumentRequest(arg) {
  if (!(arg instanceof ondewo_nlu_rag_pb.RagUploadDocumentRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.RagUploadDocumentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_RagUploadDocumentRequest(buffer_arg) {
  return ondewo_nlu_rag_pb.RagUploadDocumentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Provides RAG and web crawler endpoints.
// Most of the RAG related endpoints largely mirror <a href="https://github.com/ondewo/ragflow">RAGFlow's</a> HTTP API endpoints. For more information on RAGFlow refer to the <a href="https://ragflow.io/docs/dev/">official documentation</a>
var RagsService = exports.RagsService = {
  // ===========================================
// Dataset Management
// REST: /api/v1/datasets
// ===========================================
//
// RAGFlow endpoint: POST /api/v1/datasets
//
// Create a new dataset (knowledge base).<br>
ragCreateDataset: {
    path: '/ondewo.nlu.Rags/RagCreateDataset',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagCreateDatasetRequest,
    responseType: ondewo_nlu_rag_pb.RagDataset,
    requestSerialize: serialize_ondewo_nlu_RagCreateDatasetRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagCreateDatasetRequest,
    responseSerialize: serialize_ondewo_nlu_RagDataset,
    responseDeserialize: deserialize_ondewo_nlu_RagDataset,
  },
  // RAGFlow endpoint: PUT /api/v1/datasets/<dataset_id>
//
// Update an existing dataset's configuration.<br>
ragUpdateDataset: {
    path: '/ondewo.nlu.Rags/RagUpdateDataset',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagUpdateDatasetRequest,
    responseType: ondewo_nlu_rag_pb.RagDataset,
    requestSerialize: serialize_ondewo_nlu_RagUpdateDatasetRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagUpdateDatasetRequest,
    responseSerialize: serialize_ondewo_nlu_RagDataset,
    responseDeserialize: deserialize_ondewo_nlu_RagDataset,
  },
  // RAGFlow endpoint: DELETE /api/v1/datasets
//
// Delete one or more datasets (batch operation).<br>
// If ids is null or empty, deletes all user's datasets.<br>
// Deletes all associated documents, files, and chunks.
ragDeleteDatasets: {
    path: '/ondewo.nlu.Rags/RagDeleteDatasets',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagDeleteRequest,
    responseType: ondewo_nlu_rag_pb.RagPartialSuccess,
    requestSerialize: serialize_ondewo_nlu_RagDeleteRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagDeleteRequest,
    responseSerialize: serialize_ondewo_nlu_RagPartialSuccess,
    responseDeserialize: deserialize_ondewo_nlu_RagPartialSuccess,
  },
  // RAGFlow endpoint: GET /api/v1/datasets
//
// List datasets with pagination and filtering.<br>
// Returns datasets from all tenants the user has access to.
ragListDatasets: {
    path: '/ondewo.nlu.Rags/RagListDatasets',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagListDatasetsRequest,
    responseType: ondewo_nlu_rag_pb.RagDatasetList,
    requestSerialize: serialize_ondewo_nlu_RagListDatasetsRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagListDatasetsRequest,
    responseSerialize: serialize_ondewo_nlu_RagDatasetList,
    responseDeserialize: deserialize_ondewo_nlu_RagDatasetList,
  },
  // ========================================================================
// Document Management
// REST: /api/v1/datasets/<dataset_id>/documents
// ========================================================================
//
// RAGFlow endpoint: POST /api/v1/datasets/<dataset_id>/documents
//
// Uploads a document to a dataset and starts parsing it.<br>
// If the <code>run</code> field of the returned document is not <code>RAG_DOCUMENT_STATUS_RUNNING</code> this indicates a failure to start parsing the document.
ragUploadDocument: {
    path: '/ondewo.nlu.Rags/RagUploadDocument',
    requestStream: true,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagUploadDocumentRequest,
    responseType: ondewo_nlu_rag_pb.RagDocument,
    requestSerialize: serialize_ondewo_nlu_RagUploadDocumentRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagUploadDocumentRequest,
    responseSerialize: serialize_ondewo_nlu_RagDocument,
    responseDeserialize: deserialize_ondewo_nlu_RagDocument,
  },
  // RAGFlow endpoint: PUT /api/v1/datasets/<dataset_id>/documents/<document_id>
//
// Update document metadata and configuration.<br>
// If the chunk method is changed, the document is automatically re-parsed.<br>
// If the <code>run</code> field of the returned document is not <code>RAG_DOCUMENT_STATUS_RUNNING</code> this indicates a failure to start parsing the document.
ragUpdateDocument: {
    path: '/ondewo.nlu.Rags/RagUpdateDocument',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagUpdateDocumentRequest,
    responseType: ondewo_nlu_rag_pb.RagDocument,
    requestSerialize: serialize_ondewo_nlu_RagUpdateDocumentRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagUpdateDocumentRequest,
    responseSerialize: serialize_ondewo_nlu_RagDocument,
    responseDeserialize: deserialize_ondewo_nlu_RagDocument,
  },
  // RAGFlow endpoint: GET /api/v1/datasets/<dataset_id>/documents/<document_id>
//
// Download the original document file.<br>
// Returns binary file stream from storage.<br>
// First chunk contains metadata, subsequent chunks only contain data.
ragDownloadDocument: {
    path: '/ondewo.nlu.Rags/RagDownloadDocument',
    requestStream: false,
    responseStream: true,
    requestType: ondewo_nlu_rag_pb.RagDownloadDocumentRequest,
    responseType: ondewo_nlu_rag_pb.RagFileChunk,
    requestSerialize: serialize_ondewo_nlu_RagDownloadDocumentRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagDownloadDocumentRequest,
    responseSerialize: serialize_ondewo_nlu_RagFileChunk,
    responseDeserialize: deserialize_ondewo_nlu_RagFileChunk,
  },
  // RAGFlow endpoint: GET /api/v1/datasets/<dataset_id>/documents
//
// List documents in a dataset with pagination and filtering.<br>
// Supports time range filtering and keyword search.
ragListDocuments: {
    path: '/ondewo.nlu.Rags/RagListDocuments',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagListDocumentsRequest,
    responseType: ondewo_nlu_rag_pb.RagDocumentList,
    requestSerialize: serialize_ondewo_nlu_RagListDocumentsRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagListDocumentsRequest,
    responseSerialize: serialize_ondewo_nlu_RagDocumentList,
    responseDeserialize: deserialize_ondewo_nlu_RagDocumentList,
  },
  // RAGFlow endpoint: DELETE /api/v1/datasets/<dataset_id>/documents
//
// Delete one or more documents from a dataset (batch operation).<br>
// If ids empty, deletes all documents. Removes chunks and storage files.
ragDeleteDocuments: {
    path: '/ondewo.nlu.Rags/RagDeleteDocuments',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagDeleteDocumentsRequest,
    responseType: ondewo_nlu_rag_pb.RagPartialSuccess,
    requestSerialize: serialize_ondewo_nlu_RagDeleteDocumentsRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagDeleteDocumentsRequest,
    responseSerialize: serialize_ondewo_nlu_RagPartialSuccess,
    responseDeserialize: deserialize_ondewo_nlu_RagPartialSuccess,
  },
  // ========================================================================
// Chunk Management
// REST: /api/v1/datasets/<dataset_id>/chunks, /api/v1/datasets/<dataset_id>/documents/<document_id>/chunks, /api/v1/retrieval
// ========================================================================
//
// RAGFlow endpoint: POST /api/v1/retrieval
//
// Retrieve chunks using vector similarity search.<br>
// Supports reranking, metadata filtering, and knowledge graph retrieval.
ragRetrieval: {
    path: '/ondewo.nlu.Rags/RagRetrieval',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagRetrievalRequest,
    responseType: ondewo_nlu_rag_pb.RagRetrievalResponse,
    requestSerialize: serialize_ondewo_nlu_RagRetrievalRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagRetrievalRequest,
    responseSerialize: serialize_ondewo_nlu_RagRetrievalResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagRetrievalResponse,
  },
  // RAGFlow endpoint: POST /api/v1/datasets/<dataset_id>/chunks
//
// Start parsing documents into chunks.<br>
// Queues documents for background processing.
ragParseDocuments: {
    path: '/ondewo.nlu.Rags/RagParseDocuments',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagDocumentIdsRequest,
    responseType: ondewo_nlu_rag_pb.RagPartialSuccess,
    requestSerialize: serialize_ondewo_nlu_RagDocumentIdsRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagDocumentIdsRequest,
    responseSerialize: serialize_ondewo_nlu_RagPartialSuccess,
    responseDeserialize: deserialize_ondewo_nlu_RagPartialSuccess,
  },
  // RAGFlow endpoint: DELETE /api/v1/datasets/<dataset_id>/chunks
//
// Stop parsing documents.
ragStopParsing: {
    path: '/ondewo.nlu.Rags/RagStopParsing',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagDocumentIdsRequest,
    responseType: ondewo_nlu_rag_pb.RagPartialSuccess,
    requestSerialize: serialize_ondewo_nlu_RagDocumentIdsRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagDocumentIdsRequest,
    responseSerialize: serialize_ondewo_nlu_RagPartialSuccess,
    responseDeserialize: deserialize_ondewo_nlu_RagPartialSuccess,
  },
  // ========================================================================
// Crawler
// ========================================================================
//
// Create a rag crawler for a dataset of an agent.
ragCreateCrawler: {
    path: '/ondewo.nlu.Rags/RagCreateCrawler',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagCreateCrawlerRequest,
    responseType: ondewo_nlu_rag_pb.RagCrawler,
    requestSerialize: serialize_ondewo_nlu_RagCreateCrawlerRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagCreateCrawlerRequest,
    responseSerialize: serialize_ondewo_nlu_RagCrawler,
    responseDeserialize: deserialize_ondewo_nlu_RagCrawler,
  },
  // Get a rag crawler by resource name.
ragGetCrawler: {
    path: '/ondewo.nlu.Rags/RagGetCrawler',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagGetCrawlerRequest,
    responseType: ondewo_nlu_rag_pb.RagCrawler,
    requestSerialize: serialize_ondewo_nlu_RagGetCrawlerRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagGetCrawlerRequest,
    responseSerialize: serialize_ondewo_nlu_RagCrawler,
    responseDeserialize: deserialize_ondewo_nlu_RagCrawler,
  },
  // List rag crawlers of a dataset for the specified agent.
ragListCrawlers: {
    path: '/ondewo.nlu.Rags/RagListCrawlers',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagListCrawlersRequest,
    responseType: ondewo_nlu_rag_pb.RagListCrawlersResponse,
    requestSerialize: serialize_ondewo_nlu_RagListCrawlersRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagListCrawlersRequest,
    responseSerialize: serialize_ondewo_nlu_RagListCrawlersResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagListCrawlersResponse,
  },
  // Update a rag crawler (partial update of configuration fields).
ragUpdateCrawler: {
    path: '/ondewo.nlu.Rags/RagUpdateCrawler',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagUpdateCrawlerRequest,
    responseType: ondewo_nlu_rag_pb.RagCrawler,
    requestSerialize: serialize_ondewo_nlu_RagUpdateCrawlerRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagUpdateCrawlerRequest,
    responseSerialize: serialize_ondewo_nlu_RagCrawler,
    responseDeserialize: deserialize_ondewo_nlu_RagCrawler,
  },
  // Delete a rag crawler of a dataset for the specified agent.
ragDeleteCrawler: {
    path: '/ondewo.nlu.Rags/RagDeleteCrawler',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagDeleteCrawlerRequest,
    responseType: ondewo_nlu_rag_pb.RagDeleteCrawlerResponse,
    requestSerialize: serialize_ondewo_nlu_RagDeleteCrawlerRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagDeleteCrawlerRequest,
    responseSerialize: serialize_ondewo_nlu_RagDeleteCrawlerResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagDeleteCrawlerResponse,
  },
  // Run a crawler.
ragStartCrawler: {
    path: '/ondewo.nlu.Rags/RagStartCrawler',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagStartCrawlerRequest,
    responseType: ondewo_nlu_operations_pb.Operation,
    requestSerialize: serialize_ondewo_nlu_RagStartCrawlerRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagStartCrawlerRequest,
    responseSerialize: serialize_ondewo_nlu_Operation,
    responseDeserialize: deserialize_ondewo_nlu_Operation,
  },
  // Stop a pending or running crawler run.
ragStopCrawler: {
    path: '/ondewo.nlu.Rags/RagStopCrawler',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagStopCrawlerRequest,
    responseType: ondewo_nlu_rag_pb.RagStopCrawlerResponse,
    requestSerialize: serialize_ondewo_nlu_RagStopCrawlerRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagStopCrawlerRequest,
    responseSerialize: serialize_ondewo_nlu_RagStopCrawlerResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagStopCrawlerResponse,
  },
  // Get a crawler run by resource name.
ragGetCrawlerRun: {
    path: '/ondewo.nlu.Rags/RagGetCrawlerRun',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagGetCrawlerRunRequest,
    responseType: ondewo_nlu_operations_pb.Operation,
    requestSerialize: serialize_ondewo_nlu_RagGetCrawlerRunRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagGetCrawlerRunRequest,
    responseSerialize: serialize_ondewo_nlu_Operation,
    responseDeserialize: deserialize_ondewo_nlu_Operation,
  },
  // List crawler runs for a crawler.
ragListCrawlerRuns: {
    path: '/ondewo.nlu.Rags/RagListCrawlerRuns',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagListCrawlerRunsRequest,
    responseType: ondewo_nlu_rag_pb.RagListCrawlerRunsResponse,
    requestSerialize: serialize_ondewo_nlu_RagListCrawlerRunsRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagListCrawlerRunsRequest,
    responseSerialize: serialize_ondewo_nlu_RagListCrawlerRunsResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagListCrawlerRunsResponse,
  },
  // Delete crawler runs by explicit run names and/or crawler names.
ragDeleteCrawlerRuns: {
    path: '/ondewo.nlu.Rags/RagDeleteCrawlerRuns',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagDeleteCrawlerRunsRequest,
    responseType: ondewo_nlu_rag_pb.RagDeleteCrawlerRunsResponse,
    requestSerialize: serialize_ondewo_nlu_RagDeleteCrawlerRunsRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagDeleteCrawlerRunsRequest,
    responseSerialize: serialize_ondewo_nlu_RagDeleteCrawlerRunsResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagDeleteCrawlerRunsResponse,
  },
  // Get a single crawler result by crawler run resource name and URL.
ragGetCrawlerResult: {
    path: '/ondewo.nlu.Rags/RagGetCrawlerResult',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagGetCrawlerResultRequest,
    responseType: ondewo_nlu_rag_pb.RagCrawlerResult,
    requestSerialize: serialize_ondewo_nlu_RagGetCrawlerResultRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagGetCrawlerResultRequest,
    responseSerialize: serialize_ondewo_nlu_RagCrawlerResult,
    responseDeserialize: deserialize_ondewo_nlu_RagCrawlerResult,
  },
  // Get crawler results by crawler run resource name.
ragGetCrawlerResults: {
    path: '/ondewo.nlu.Rags/RagGetCrawlerResults',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagGetCrawlerResultsRequest,
    responseType: ondewo_nlu_rag_pb.RagGetCrawlerResultsResponse,
    requestSerialize: serialize_ondewo_nlu_RagGetCrawlerResultsRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagGetCrawlerResultsRequest,
    responseSerialize: serialize_ondewo_nlu_RagGetCrawlerResultsResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagGetCrawlerResultsResponse,
  },
  // Add rag crawler output to one or more datasets.
ragAddCrawlerResultsToDatasets: {
    path: '/ondewo.nlu.Rags/RagAddCrawlerResultsToDatasets',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagAddCrawlerResultsToDatasetsRequest,
    responseType: ondewo_nlu_operations_pb.Operation,
    requestSerialize: serialize_ondewo_nlu_RagAddCrawlerResultsToDatasetsRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagAddCrawlerResultsToDatasetsRequest,
    responseSerialize: serialize_ondewo_nlu_Operation,
    responseDeserialize: deserialize_ondewo_nlu_Operation,
  },
  // Remove previously imported crawler output from one or more datasets.
ragRemoveCrawlerResultsFromDatasets: {
    path: '/ondewo.nlu.Rags/RagRemoveCrawlerResultsFromDatasets',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagRemoveCrawlerResultsFromDatasetsRequest,
    responseType: ondewo_nlu_operations_pb.Operation,
    requestSerialize: serialize_ondewo_nlu_RagRemoveCrawlerResultsFromDatasetsRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagRemoveCrawlerResultsFromDatasetsRequest,
    responseSerialize: serialize_ondewo_nlu_Operation,
    responseDeserialize: deserialize_ondewo_nlu_Operation,
  },
  // Get datasets currently attached to a crawler.
ragGetCrawlerAttachedDatasets: {
    path: '/ondewo.nlu.Rags/RagGetCrawlerAttachedDatasets',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsRequest,
    responseType: ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsResponse,
    requestSerialize: serialize_ondewo_nlu_RagGetCrawlerAttachedDatasetsRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagGetCrawlerAttachedDatasetsRequest,
    responseSerialize: serialize_ondewo_nlu_RagGetCrawlerAttachedDatasetsResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagGetCrawlerAttachedDatasetsResponse,
  },
  // Delete multiple crawlers.
ragDeleteCrawlers: {
    path: '/ondewo.nlu.Rags/RagDeleteCrawlers',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagDeleteCrawlersRequest,
    responseType: ondewo_nlu_rag_pb.RagDeleteCrawlersResponse,
    requestSerialize: serialize_ondewo_nlu_RagDeleteCrawlersRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagDeleteCrawlersRequest,
    responseSerialize: serialize_ondewo_nlu_RagDeleteCrawlersResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagDeleteCrawlersResponse,
  },
  // Get crawler run logs.
ragGetCrawlerRunLogs: {
    path: '/ondewo.nlu.Rags/RagGetCrawlerRunLogs',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_rag_pb.RagGetCrawlerRunLogsRequest,
    responseType: ondewo_nlu_rag_pb.RagGetCrawlerRunLogsResponse,
    requestSerialize: serialize_ondewo_nlu_RagGetCrawlerRunLogsRequest,
    requestDeserialize: deserialize_ondewo_nlu_RagGetCrawlerRunLogsRequest,
    responseSerialize: serialize_ondewo_nlu_RagGetCrawlerRunLogsResponse,
    responseDeserialize: deserialize_ondewo_nlu_RagGetCrawlerRunLogsResponse,
  },
};

exports.RagsClient = grpc.makeGenericClientConstructor(RagsService, 'Rags');
