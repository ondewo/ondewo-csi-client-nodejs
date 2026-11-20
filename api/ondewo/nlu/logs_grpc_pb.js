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
var ondewo_nlu_logs_pb = require('../../ondewo/nlu/logs_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var ondewo_nlu_common_pb = require('../../ondewo/nlu/common_pb.js');
var ondewo_nlu_operation_metadata_pb = require('../../ondewo/nlu/operation_metadata_pb.js');

function serialize_ondewo_nlu_CaiLogStream(arg) {
  if (!(arg instanceof ondewo_nlu_logs_pb.CaiLogStream)) {
    throw new Error('Expected argument of type ondewo.nlu.CaiLogStream');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_CaiLogStream(buffer_arg) {
  return ondewo_nlu_logs_pb.CaiLogStream.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DeleteLogsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_logs_pb.DeleteLogsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.DeleteLogsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteLogsRequest(buffer_arg) {
  return ondewo_nlu_logs_pb.DeleteLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_DeleteLogsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_logs_pb.DeleteLogsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.DeleteLogsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_DeleteLogsResponse(buffer_arg) {
  return ondewo_nlu_logs_pb.DeleteLogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ExportLogsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_logs_pb.ExportLogsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ExportLogsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ExportLogsRequest(buffer_arg) {
  return ondewo_nlu_logs_pb.ExportLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ExportLogsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_logs_pb.ExportLogsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ExportLogsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ExportLogsResponse(buffer_arg) {
  return ondewo_nlu_logs_pb.ExportLogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetLogStreamRequest(arg) {
  if (!(arg instanceof ondewo_nlu_logs_pb.GetLogStreamRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.GetLogStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetLogStreamRequest(buffer_arg) {
  return ondewo_nlu_logs_pb.GetLogStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLogStreamsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_logs_pb.ListLogStreamsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLogStreamsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLogStreamsRequest(buffer_arg) {
  return ondewo_nlu_logs_pb.ListLogStreamsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLogStreamsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_logs_pb.ListLogStreamsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLogStreamsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLogStreamsResponse(buffer_arg) {
  return ondewo_nlu_logs_pb.ListLogStreamsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLogsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_logs_pb.ListLogsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLogsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLogsRequest(buffer_arg) {
  return ondewo_nlu_logs_pb.ListLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_ListLogsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_logs_pb.ListLogsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.ListLogsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_ListLogsResponse(buffer_arg) {
  return ondewo_nlu_logs_pb.ListLogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_StreamLogsRequest(arg) {
  if (!(arg instanceof ondewo_nlu_logs_pb.StreamLogsRequest)) {
    throw new Error('Expected argument of type ondewo.nlu.StreamLogsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_StreamLogsRequest(buffer_arg) {
  return ondewo_nlu_logs_pb.StreamLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_StreamLogsResponse(arg) {
  if (!(arg instanceof ondewo_nlu_logs_pb.StreamLogsResponse)) {
    throw new Error('Expected argument of type ondewo.nlu.StreamLogsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_StreamLogsResponse(buffer_arg) {
  return ondewo_nlu_logs_pb.StreamLogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// <p>Reads, follows, exports and erases the logs ONDEWO CAI captures: the log records of the CAI gRPC server
// processes themselves (every worker of every replica), the output of the docker containers that remote
// operations run (build cache, training, RAG crawl, LLM evaluation and simulation, RAGFlow upload / removal /
// re-parse) and of the short-lived helper containers that prepare them (hardware check, GPU pre-allocation).
// Long-running operations that run inside a CAI worker (agent export, import, restore, re-index, ranking
// optimization) are covered too: the server records they emit carry the operation&apos;s name.</p>
// <p>Entries are served from the CAI database, not from the docker daemon, so the logs of a container that was
// already removed, and of a server process that already exited, stay readable until retention or
// <code>DeleteLogs</code> removes them.</p>
// <p><b>Secrets are redacted server-side</b> when an entry is captured and again when it is read, so a
// redaction rule added later also applies to entries captured before it.</p>
// <p>Errors are reported as gRPC status codes: <code>INVALID_ARGUMENT</code> for a malformed name, filter,
// cursor, <code>resume_token</code>, <code>page_token</code> or <code>field_mask</code> (each naming the field);
// <code>NOT_FOUND</code> for an unknown log stream or operation, and for one the caller may not read;
// <code>RESOURCE_EXHAUSTED</code> when the server process already serves its maximum of concurrent streams or
// exports; <code>UNAVAILABLE</code> when the logs API is disabled (<code>ONDEWO_NLU_CAI_LOG_API_ENABLED</code>)
// or the database cannot be reached; <code>UNAUTHENTICATED</code> without a valid credential;
// <code>PERMISSION_DENIED</code> when the caller may read no logs at all.</p>
// <p>Authorization: entries that belong to no project (the server&apos;s own records outside any project RPC
// or operation) require the server permission <code>ServerPermission.Logs.ReadServerLogs</code>, granted to
// <code>SERVER_ADMIN</code> by default; a caller holding it reads every entry. Without it a caller reads only
// the entries tagged with a project in which it holds <code>ProjectPermission.Logs.ReadProjectLogs</code>,
// granted to <code>PROJECT_DEVELOPER</code> and above by default; entries of other projects are filtered out
// and are never reported as existing. <code>DeleteLogs</code> requires
// <code>ServerPermission.Logs.DeleteLogs</code>, granted to <code>SERVER_ADMIN</code> only. A long-running
// <code>StreamLogs</code> or <code>ExportLogs</code> re-checks the caller periodically and ends when the access
// was revoked or the credential expired.</p>
var LogsService = exports.LogsService = {
  // ////////////////////////////////////////////////////////////////////////////
// region Log endpoints
// ////////////////////////////////////////////////////////////////////////////
//
// <p>Streams captured log entries as they are written, in the manner of <code>docker logs --follow</code>.
// The stream replays <code>tail_lines</code> historical entries and then follows. It stays open until the
// capture of every matching log stream has terminated (only possible when the filter selects container
// streams alone: the server&apos;s own log streams never terminate while the server runs), until the client
// disconnects, or until the server-side maximum stream duration is reached.</p>
// <p>Limits: at most <code>ONDEWO_NLU_CAI_LOG_STREAM_MAX_DURATION_S</code> (default 3600) seconds per stream,
// after which the server sends a final message with <code>end_reason_code =
// CAI_LOG_STREAM_END_REASON_MAX_DURATION</code> and a <code>resume_token</code> to reconnect with; at most
// <code>ONDEWO_NLU_CAI_LOG_MAX_CONCURRENT_STREAMS</code> (default 8) concurrent streams per server process,
// beyond which a new stream is <code>RESOURCE_EXHAUSTED</code>. The server sends NO keep-alive message: a
// quiet filter sends nothing, so a client must not treat silence as a dead stream (use HTTP/2 keep-alive
// pings to detect a dead connection).</p>
// <p>Errors: <code>INVALID_ARGUMENT</code> for a filter carrying <code>start_time</code> or
// <code>end_time</code>, an <code>after_seq</code> with a filter that does not resolve to exactly one log
// stream, a malformed <code>resume_token</code>, an invalid <code>regex</code> or an unknown
// <code>field_mask</code> path; <code>NOT_FOUND</code> for a named log stream or operation the caller may
// not read; <code>RESOURCE_EXHAUSTED</code> as above, and when one read of the stored entries exceeds
// <code>ONDEWO_NLU_CAI_LOG_QUERY_TIMEOUT_S</code> (narrow the filter); <code>UNAVAILABLE</code> when the
// database cannot be reached (reconnect with the last <code>resume_token</code>). When the caller&apos;s
// access is revoked or its credential expires during the stream, the server sends a final message
// (<code>CAI_LOG_STREAM_END_REASON_PERMISSION_REVOKED</code> /
// <code>CAI_LOG_STREAM_END_REASON_CREDENTIALS_EXPIRED</code>, with a <code>resume_token</code>) and ends the
// stream with <code>PERMISSION_DENIED</code> / <code>UNAUTHENTICATED</code>.</p>
streamLogs: {
    path: '/ondewo.nlu.Logs/StreamLogs',
    requestStream: false,
    responseStream: true,
    requestType: ondewo_nlu_logs_pb.StreamLogsRequest,
    responseType: ondewo_nlu_logs_pb.StreamLogsResponse,
    requestSerialize: serialize_ondewo_nlu_StreamLogsRequest,
    requestDeserialize: deserialize_ondewo_nlu_StreamLogsRequest,
    responseSerialize: serialize_ondewo_nlu_StreamLogsResponse,
    responseDeserialize: deserialize_ondewo_nlu_StreamLogsResponse,
  },
  // <p>Returns a bounded, filtered page of captured log entries. Supports a time window, severity filtering, a
// regular expression, a plain-text search and cursor paging in both directions for infinite scrolling.</p>
// <p>No time window is required: without <code>start_time</code> / <code>end_time</code> the window is the
// newest <code>max_lines</code> matching entries (or, with <code>oldest_first</code>, the oldest after the
// cursor). With <code>include_counts</code> the response also carries the number of matching entries per
// severity. The <code>next_resume_token</code> of a response can be handed to <code>StreamLogs</code> to
// continue live exactly where the page ended, without a gap or a duplicate.</p>
// <p>Errors: <code>INVALID_ARGUMENT</code> for an invalid or over-long <code>regex</code>, a
// <code>start_time</code> after <code>end_time</code>, <code>before_seq</code> / <code>after_seq</code>
// combined with <code>resume_token</code> or with a filter that does not resolve to exactly one log stream, a
// negative <code>before_seq</code> / <code>after_seq</code>, a malformed <code>resume_token</code> or an
// unknown <code>field_mask</code> path; <code>NOT_FOUND</code> for a named log stream or operation the caller
// may not read; <code>RESOURCE_EXHAUSTED</code> when the query exceeds
// <code>ONDEWO_NLU_CAI_LOG_QUERY_TIMEOUT_S</code> (narrow the filter: log streams, time window or severity);
// <code>UNAVAILABLE</code> when the database cannot be reached.</p>
// <p>A page is bounded by size as well as by <code>max_lines</code>: when its messages would exceed the
// server&apos;s size budget it is cut (a forward page keeps its oldest entries, a backward page its newest)
// and reported with <code>truncated = true</code>; the cursors continue exactly where it was cut.</p>
listLogs: {
    path: '/ondewo.nlu.Logs/ListLogs',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_logs_pb.ListLogsRequest,
    responseType: ondewo_nlu_logs_pb.ListLogsResponse,
    requestSerialize: serialize_ondewo_nlu_ListLogsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListLogsRequest,
    responseSerialize: serialize_ondewo_nlu_ListLogsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListLogsResponse,
  },
  // <p>Returns one log stream, i.e. the capture of one server process or of one container.</p>
// <p>Errors: <code>INVALID_ARGUMENT</code> for a malformed <code>name</code> or an unknown
// <code>field_mask</code> path; <code>NOT_FOUND</code> for an unknown log stream or one the caller may not
// read.</p>
getLogStream: {
    path: '/ondewo.nlu.Logs/GetLogStream',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_logs_pb.GetLogStreamRequest,
    responseType: ondewo_nlu_logs_pb.CaiLogStream,
    requestSerialize: serialize_ondewo_nlu_GetLogStreamRequest,
    requestDeserialize: deserialize_ondewo_nlu_GetLogStreamRequest,
    responseSerialize: serialize_ondewo_nlu_CaiLogStream,
    responseDeserialize: deserialize_ondewo_nlu_CaiLogStream,
  },
  // <p>Lists the log streams CAI has captured. A server process yields a new log stream every time it starts,
// and a container every time it is (re)started under a new container id. Ordered by
// <code>capture_started_at</code>, newest first.</p>
// <p>A caller without <code>ServerPermission.Logs.ReadServerLogs</code> sees only the log streams of the
// projects in which it holds <code>ProjectPermission.Logs.ReadProjectLogs</code>; the server&apos;s own log
// streams are not listed to it, although <code>ListLogs</code> and <code>StreamLogs</code> return their
// entries that are tagged with such a project.</p>
// <p>Errors: <code>INVALID_ARGUMENT</code> for a malformed <code>page_token</code>,
// <code>CAI_LOG_CAPTURE_STATE_UNSPECIFIED</code> in <code>capture_states</code> or an unknown
// <code>field_mask</code> path.</p>
listLogStreams: {
    path: '/ondewo.nlu.Logs/ListLogStreams',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_logs_pb.ListLogStreamsRequest,
    responseType: ondewo_nlu_logs_pb.ListLogStreamsResponse,
    requestSerialize: serialize_ondewo_nlu_ListLogStreamsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ListLogStreamsRequest,
    responseSerialize: serialize_ondewo_nlu_ListLogStreamsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ListLogStreamsResponse,
  },
  // <p>Exports the captured log entries matching a filter as a file: plain text, NDJSON or CSV, streamed in
// chunks. Entries are exported oldest first with the same filter semantics and the same server-side secret
// redaction as <code>ListLogs</code>; unlike <code>ListLogs</code> the content filters are applied to EVERY
// entry of the window. Concatenating the <code>chunk</code>s of all messages in order yields the file.</p>
// <p>A bounded time window is REQUIRED: <code>filter.start_time</code> AND <code>filter.end_time</code> must
// both be set, with <code>start_time</code> before <code>end_time</code>.</p>
// <p>Limits: each <code>chunk</code> is at most 1 MiB; an export holds at most
// <code>ONDEWO_NLU_CAI_LOG_EXPORT_MAX_ENTRIES</code> (default 1000000) entries and at most
// <code>ONDEWO_NLU_CAI_LOG_EXPORT_MAX_BYTES</code> (default 1 GiB) of output. When a limit is reached the
// export ends early with <code>truncated = true</code> on the last message; so does an export one of whose
// reads exceeds <code>ONDEWO_NLU_CAI_LOG_QUERY_TIMEOUT_S</code>. At most
// <code>ONDEWO_NLU_CAI_LOG_MAX_CONCURRENT_EXPORTS</code> (default 1) exports run per server process, beyond
// which a new one is <code>RESOURCE_EXHAUSTED</code>.</p>
// <p>Errors: <code>INVALID_ARGUMENT</code> for a missing, empty or inverted time window, an invalid
// <code>regex</code> or an unknown <code>format</code> value; <code>NOT_FOUND</code> for a named log stream
// or operation the caller may not read; <code>RESOURCE_EXHAUSTED</code> as above. A revoked access or an
// expired credential ends the export with <code>PERMISSION_DENIED</code> / <code>UNAUTHENTICATED</code> and
// no last message.</p>
exportLogs: {
    path: '/ondewo.nlu.Logs/ExportLogs',
    requestStream: false,
    responseStream: true,
    requestType: ondewo_nlu_logs_pb.ExportLogsRequest,
    responseType: ondewo_nlu_logs_pb.ExportLogsResponse,
    requestSerialize: serialize_ondewo_nlu_ExportLogsRequest,
    requestDeserialize: deserialize_ondewo_nlu_ExportLogsRequest,
    responseSerialize: serialize_ondewo_nlu_ExportLogsResponse,
    responseDeserialize: deserialize_ondewo_nlu_ExportLogsResponse,
  },
  // <p>Permanently deletes captured log entries matching a filter. Only the identity filters and the time
// window apply; content filters are rejected. A time window alone is a valid filter. A log stream whose last
// entry was deleted is removed too, unless it is still <code>CAI_LOG_CAPTURE_STATE_CAPTURING</code>. A
// capture that is still running keeps writing, so entries emitted after the deletion are stored again.</p>
// <p>Idempotent: repeating a deletion succeeds and reports <code>0</code> deleted entries. With
// <code>validate_only</code> nothing is deleted and the counts are what would be deleted.</p>
// <p>Errors: <code>INVALID_ARGUMENT</code> for an empty filter, a content filter (<code>text</code>,
// <code>regex</code>, <code>log_levels</code>, <code>min_log_level</code>,
// <code>include_unleveled_lines</code>, <code>emitter_prefixes</code>, <code>thread_names</code>,
// <code>trace_ids</code>; presence alone counts) or a <code>start_time</code> after <code>end_time</code>;
// <code>PERMISSION_DENIED</code> without <code>ServerPermission.Logs.DeleteLogs</code>;
// <code>RESOURCE_EXHAUSTED</code> when one deletion step exceeds <code>ONDEWO_NLU_CAI_LOG_QUERY_TIMEOUT_S</code>
// (what was deleted until then stays deleted; repeat the request); <code>UNAVAILABLE</code> when the database
// cannot be reached.</p>
deleteLogs: {
    path: '/ondewo.nlu.Logs/DeleteLogs',
    requestStream: false,
    responseStream: false,
    requestType: ondewo_nlu_logs_pb.DeleteLogsRequest,
    responseType: ondewo_nlu_logs_pb.DeleteLogsResponse,
    requestSerialize: serialize_ondewo_nlu_DeleteLogsRequest,
    requestDeserialize: deserialize_ondewo_nlu_DeleteLogsRequest,
    responseSerialize: serialize_ondewo_nlu_DeleteLogsResponse,
    responseDeserialize: deserialize_ondewo_nlu_DeleteLogsResponse,
  },
};

exports.LogsClient = grpc.makeGenericClientConstructor(LogsService, 'Logs');
