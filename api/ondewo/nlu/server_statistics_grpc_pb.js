// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2021 ONDEWO GmbH
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
var ondewo_nlu_server_statistics_pb = require('../../ondewo/nlu/server_statistics_pb.js');
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var ondewo_nlu_common_pb = require('../../ondewo/nlu/common_pb.js');

function serialize_google_protobuf_Empty(arg) {
	if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
		throw new Error('Expected argument of type google.protobuf.Empty');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
	return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_GetUserProjectCountRequest(arg) {
	if (!(arg instanceof ondewo_nlu_server_statistics_pb.GetUserProjectCountRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.GetUserProjectCountRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_GetUserProjectCountRequest(buffer_arg) {
	return ondewo_nlu_server_statistics_pb.GetUserProjectCountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_StatResponse(arg) {
	if (!(arg instanceof ondewo_nlu_common_pb.StatResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.StatResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_StatResponse(buffer_arg) {
	return ondewo_nlu_common_pb.StatResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

// Server project statistics
var ServerStatisticsService = (exports.ServerStatisticsService = {
	// Returns the count of projects in the CAI server
	getProjectCount: {
		path: '/ondewo.nlu.ServerStatistics/GetProjectCount',
		requestStream: false,
		responseStream: false,
		requestType: google_protobuf_empty_pb.Empty,
		responseType: ondewo_nlu_common_pb.StatResponse,
		requestSerialize: serialize_google_protobuf_Empty,
		requestDeserialize: deserialize_google_protobuf_Empty,
		responseSerialize: serialize_ondewo_nlu_StatResponse,
		responseDeserialize: deserialize_ondewo_nlu_StatResponse
	},
	// Returns the count of projects of a user
	getUserProjectCount: {
		path: '/ondewo.nlu.ServerStatistics/GetUserProjectCount',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_server_statistics_pb.GetUserProjectCountRequest,
		responseType: ondewo_nlu_common_pb.StatResponse,
		requestSerialize: serialize_ondewo_nlu_GetUserProjectCountRequest,
		requestDeserialize: deserialize_ondewo_nlu_GetUserProjectCountRequest,
		responseSerialize: serialize_ondewo_nlu_StatResponse,
		responseDeserialize: deserialize_ondewo_nlu_StatResponse
	},
	// Returns the users count within a project
	getUserCount: {
		path: '/ondewo.nlu.ServerStatistics/GetUserCount',
		requestStream: false,
		responseStream: false,
		requestType: google_protobuf_empty_pb.Empty,
		responseType: ondewo_nlu_common_pb.StatResponse,
		requestSerialize: serialize_google_protobuf_Empty,
		requestDeserialize: deserialize_google_protobuf_Empty,
		responseSerialize: serialize_ondewo_nlu_StatResponse,
		responseDeserialize: deserialize_ondewo_nlu_StatResponse
	}
});

exports.ServerStatisticsClient = grpc.makeGenericClientConstructor(ServerStatisticsService);
