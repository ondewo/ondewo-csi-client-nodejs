// source: google/logging/type/http_request.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
goog.exportSymbol('proto.google.logging.type.HttpRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.logging.type.HttpRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.logging.type.HttpRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.logging.type.HttpRequest.displayName = 'proto.google.logging.type.HttpRequest';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.logging.type.HttpRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.logging.type.HttpRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.logging.type.HttpRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.type.HttpRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestMethod: jspb.Message.getFieldWithDefault(msg, 1, ""),
    requestUrl: jspb.Message.getFieldWithDefault(msg, 2, ""),
    requestSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    status: jspb.Message.getFieldWithDefault(msg, 4, 0),
    responseSize: jspb.Message.getFieldWithDefault(msg, 5, 0),
    userAgent: jspb.Message.getFieldWithDefault(msg, 6, ""),
    remoteIp: jspb.Message.getFieldWithDefault(msg, 7, ""),
    serverIp: jspb.Message.getFieldWithDefault(msg, 13, ""),
    referer: jspb.Message.getFieldWithDefault(msg, 8, ""),
    latency: (f = msg.getLatency()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    cacheLookup: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    cacheHit: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    cacheValidatedWithOriginServer: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    cacheFillBytes: jspb.Message.getFieldWithDefault(msg, 12, 0),
    protocol: jspb.Message.getFieldWithDefault(msg, 15, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.logging.type.HttpRequest}
 */
proto.google.logging.type.HttpRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.logging.type.HttpRequest;
  return proto.google.logging.type.HttpRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.logging.type.HttpRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.logging.type.HttpRequest}
 */
proto.google.logging.type.HttpRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestMethod(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestUrl(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRequestSize(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setResponseSize(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserAgent(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setRemoteIp(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setServerIp(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setReferer(value);
      break;
    case 14:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setLatency(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCacheLookup(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCacheHit(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCacheValidatedWithOriginServer(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCacheFillBytes(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setProtocol(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.logging.type.HttpRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.logging.type.HttpRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.logging.type.HttpRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.logging.type.HttpRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestMethod();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRequestUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRequestSize();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getResponseSize();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getUserAgent();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getRemoteIp();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getServerIp();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getReferer();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getLatency();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getCacheLookup();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getCacheHit();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getCacheValidatedWithOriginServer();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getCacheFillBytes();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getProtocol();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
};


/**
 * optional string request_method = 1;
 * @return {string}
 */
proto.google.logging.type.HttpRequest.prototype.getRequestMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.type.HttpRequest} returns this
 */
proto.google.logging.type.HttpRequest.prototype.setRequestMethod = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string request_url = 2;
 * @return {string}
 */
proto.google.logging.type.HttpRequest.prototype.getRequestUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.type.HttpRequest} returns this
 */
proto.google.logging.type.HttpRequest.prototype.setRequestUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 request_size = 3;
 * @return {number}
 */
proto.google.logging.type.HttpRequest.prototype.getRequestSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.logging.type.HttpRequest} returns this
 */
proto.google.logging.type.HttpRequest.prototype.setRequestSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 status = 4;
 * @return {number}
 */
proto.google.logging.type.HttpRequest.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.logging.type.HttpRequest} returns this
 */
proto.google.logging.type.HttpRequest.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 response_size = 5;
 * @return {number}
 */
proto.google.logging.type.HttpRequest.prototype.getResponseSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.logging.type.HttpRequest} returns this
 */
proto.google.logging.type.HttpRequest.prototype.setResponseSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string user_agent = 6;
 * @return {string}
 */
proto.google.logging.type.HttpRequest.prototype.getUserAgent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.type.HttpRequest} returns this
 */
proto.google.logging.type.HttpRequest.prototype.setUserAgent = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string remote_ip = 7;
 * @return {string}
 */
proto.google.logging.type.HttpRequest.prototype.getRemoteIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.type.HttpRequest} returns this
 */
proto.google.logging.type.HttpRequest.prototype.setRemoteIp = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string server_ip = 13;
 * @return {string}
 */
proto.google.logging.type.HttpRequest.prototype.getServerIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.type.HttpRequest} returns this
 */
proto.google.logging.type.HttpRequest.prototype.setServerIp = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string referer = 8;
 * @return {string}
 */
proto.google.logging.type.HttpRequest.prototype.getReferer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.type.HttpRequest} returns this
 */
proto.google.logging.type.HttpRequest.prototype.setReferer = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional google.protobuf.Duration latency = 14;
 * @return {?proto.google.protobuf.Duration}
 */
proto.google.logging.type.HttpRequest.prototype.getLatency = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 14));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.google.logging.type.HttpRequest} returns this
*/
proto.google.logging.type.HttpRequest.prototype.setLatency = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.logging.type.HttpRequest} returns this
 */
proto.google.logging.type.HttpRequest.prototype.clearLatency = function() {
  return this.setLatency(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.logging.type.HttpRequest.prototype.hasLatency = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional bool cache_lookup = 11;
 * @return {boolean}
 */
proto.google.logging.type.HttpRequest.prototype.getCacheLookup = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.logging.type.HttpRequest} returns this
 */
proto.google.logging.type.HttpRequest.prototype.setCacheLookup = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional bool cache_hit = 9;
 * @return {boolean}
 */
proto.google.logging.type.HttpRequest.prototype.getCacheHit = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.logging.type.HttpRequest} returns this
 */
proto.google.logging.type.HttpRequest.prototype.setCacheHit = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional bool cache_validated_with_origin_server = 10;
 * @return {boolean}
 */
proto.google.logging.type.HttpRequest.prototype.getCacheValidatedWithOriginServer = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.logging.type.HttpRequest} returns this
 */
proto.google.logging.type.HttpRequest.prototype.setCacheValidatedWithOriginServer = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional int64 cache_fill_bytes = 12;
 * @return {number}
 */
proto.google.logging.type.HttpRequest.prototype.getCacheFillBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.logging.type.HttpRequest} returns this
 */
proto.google.logging.type.HttpRequest.prototype.setCacheFillBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional string protocol = 15;
 * @return {string}
 */
proto.google.logging.type.HttpRequest.prototype.getProtocol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.logging.type.HttpRequest} returns this
 */
proto.google.logging.type.HttpRequest.prototype.setProtocol = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


goog.object.extend(exports, proto.google.logging.type);
