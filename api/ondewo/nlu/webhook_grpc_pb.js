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
// Modifications Copyright 2021 ONDEWO GmbH
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
var ondewo_nlu_webhook_pb = require('../../ondewo/nlu/webhook_pb.js');
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var ondewo_nlu_context_pb = require('../../ondewo/nlu/context_pb.js');
var ondewo_nlu_intent_pb = require('../../ondewo/nlu/intent_pb.js');
var ondewo_nlu_session_pb = require('../../ondewo/nlu/session_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

function serialize_ondewo_nlu_PingRequest(arg) {
	if (!(arg instanceof ondewo_nlu_webhook_pb.PingRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.PingRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_PingRequest(buffer_arg) {
	return ondewo_nlu_webhook_pb.PingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_PingResponse(arg) {
	if (!(arg instanceof ondewo_nlu_webhook_pb.PingResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.PingResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_PingResponse(buffer_arg) {
	return ondewo_nlu_webhook_pb.PingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_WebhookRequest(arg) {
	if (!(arg instanceof ondewo_nlu_webhook_pb.WebhookRequest)) {
		throw new Error('Expected argument of type ondewo.nlu.WebhookRequest');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_WebhookRequest(buffer_arg) {
	return ondewo_nlu_webhook_pb.WebhookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ondewo_nlu_WebhookResponse(arg) {
	if (!(arg instanceof ondewo_nlu_webhook_pb.WebhookResponse)) {
		throw new Error('Expected argument of type ondewo.nlu.WebhookResponse');
	}
	return Buffer.from(arg.serializeBinary());
}

function deserialize_ondewo_nlu_WebhookResponse(buffer_arg) {
	return ondewo_nlu_webhook_pb.WebhookResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

// service to send requests to a webhook server
var WebhookService = (exports.WebhookService = {
	// send a request for /response_refinement/ to the webhook server
	// fulfillment messages can be overwritten by the webhook server
	responseRefinement: {
		path: '/ondewo.nlu.Webhook/ResponseRefinement',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_webhook_pb.WebhookRequest,
		responseType: ondewo_nlu_webhook_pb.WebhookResponse,
		requestSerialize: serialize_ondewo_nlu_WebhookRequest,
		requestDeserialize: deserialize_ondewo_nlu_WebhookRequest,
		responseSerialize: serialize_ondewo_nlu_WebhookResponse,
		responseDeserialize: deserialize_ondewo_nlu_WebhookResponse
	},
	// send a request for /slot_filling/ to the webhook server
	// parameter values can be provided &
	// context information can be changed by the webhook server
	slotFilling: {
		path: '/ondewo.nlu.Webhook/SlotFilling',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_webhook_pb.WebhookRequest,
		responseType: ondewo_nlu_webhook_pb.WebhookResponse,
		requestSerialize: serialize_ondewo_nlu_WebhookRequest,
		requestDeserialize: deserialize_ondewo_nlu_WebhookRequest,
		responseSerialize: serialize_ondewo_nlu_WebhookResponse,
		responseDeserialize: deserialize_ondewo_nlu_WebhookResponse
	},
	// send a Ping to the webhook server to check server health
	// will return True if http status_code==200 is detected in the response
	ping: {
		path: '/ondewo.nlu.Webhook/Ping',
		requestStream: false,
		responseStream: false,
		requestType: ondewo_nlu_webhook_pb.PingRequest,
		responseType: ondewo_nlu_webhook_pb.PingResponse,
		requestSerialize: serialize_ondewo_nlu_PingRequest,
		requestDeserialize: deserialize_ondewo_nlu_PingRequest,
		responseSerialize: serialize_ondewo_nlu_PingResponse,
		responseDeserialize: deserialize_ondewo_nlu_PingResponse
	}
});

exports.WebhookClient = grpc.makeGenericClientConstructor(WebhookService);
