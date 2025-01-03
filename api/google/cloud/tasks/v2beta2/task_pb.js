// source: google/cloud/tasks/v2beta2/task.proto
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

var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_cloud_tasks_v2beta2_target_pb = require('../../../../google/cloud/tasks/v2beta2/target_pb.js');
goog.object.extend(proto, google_cloud_tasks_v2beta2_target_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_rpc_status_pb = require('../../../../google/rpc/status_pb.js');
goog.object.extend(proto, google_rpc_status_pb);
goog.exportSymbol('proto.google.cloud.tasks.v2beta2.AttemptStatus', null, global);
goog.exportSymbol('proto.google.cloud.tasks.v2beta2.Task', null, global);
goog.exportSymbol('proto.google.cloud.tasks.v2beta2.Task.PayloadTypeCase', null, global);
goog.exportSymbol('proto.google.cloud.tasks.v2beta2.Task.View', null, global);
goog.exportSymbol('proto.google.cloud.tasks.v2beta2.TaskStatus', null, global);
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
proto.google.cloud.tasks.v2beta2.Task = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.cloud.tasks.v2beta2.Task.oneofGroups_);
};
goog.inherits(proto.google.cloud.tasks.v2beta2.Task, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.tasks.v2beta2.Task.displayName = 'proto.google.cloud.tasks.v2beta2.Task';
}
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
proto.google.cloud.tasks.v2beta2.TaskStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.tasks.v2beta2.TaskStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.tasks.v2beta2.TaskStatus.displayName = 'proto.google.cloud.tasks.v2beta2.TaskStatus';
}
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
proto.google.cloud.tasks.v2beta2.AttemptStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.tasks.v2beta2.AttemptStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.tasks.v2beta2.AttemptStatus.displayName = 'proto.google.cloud.tasks.v2beta2.AttemptStatus';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.cloud.tasks.v2beta2.Task.oneofGroups_ = [[3,4]];

/**
 * @enum {number}
 */
proto.google.cloud.tasks.v2beta2.Task.PayloadTypeCase = {
  PAYLOAD_TYPE_NOT_SET: 0,
  APP_ENGINE_HTTP_REQUEST: 3,
  PULL_MESSAGE: 4
};

/**
 * @return {proto.google.cloud.tasks.v2beta2.Task.PayloadTypeCase}
 */
proto.google.cloud.tasks.v2beta2.Task.prototype.getPayloadTypeCase = function() {
  return /** @type {proto.google.cloud.tasks.v2beta2.Task.PayloadTypeCase} */(jspb.Message.computeOneofCase(this, proto.google.cloud.tasks.v2beta2.Task.oneofGroups_[0]));
};



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
proto.google.cloud.tasks.v2beta2.Task.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.tasks.v2beta2.Task.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.tasks.v2beta2.Task} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.tasks.v2beta2.Task.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    appEngineHttpRequest: (f = msg.getAppEngineHttpRequest()) && google_cloud_tasks_v2beta2_target_pb.AppEngineHttpRequest.toObject(includeInstance, f),
    pullMessage: (f = msg.getPullMessage()) && google_cloud_tasks_v2beta2_target_pb.PullMessage.toObject(includeInstance, f),
    scheduleTime: (f = msg.getScheduleTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.google.cloud.tasks.v2beta2.TaskStatus.toObject(includeInstance, f),
    view: jspb.Message.getFieldWithDefault(msg, 8, 0)
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
 * @return {!proto.google.cloud.tasks.v2beta2.Task}
 */
proto.google.cloud.tasks.v2beta2.Task.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.tasks.v2beta2.Task;
  return proto.google.cloud.tasks.v2beta2.Task.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.tasks.v2beta2.Task} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.tasks.v2beta2.Task}
 */
proto.google.cloud.tasks.v2beta2.Task.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new google_cloud_tasks_v2beta2_target_pb.AppEngineHttpRequest;
      reader.readMessage(value,google_cloud_tasks_v2beta2_target_pb.AppEngineHttpRequest.deserializeBinaryFromReader);
      msg.setAppEngineHttpRequest(value);
      break;
    case 4:
      var value = new google_cloud_tasks_v2beta2_target_pb.PullMessage;
      reader.readMessage(value,google_cloud_tasks_v2beta2_target_pb.PullMessage.deserializeBinaryFromReader);
      msg.setPullMessage(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setScheduleTime(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 7:
      var value = new proto.google.cloud.tasks.v2beta2.TaskStatus;
      reader.readMessage(value,proto.google.cloud.tasks.v2beta2.TaskStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 8:
      var value = /** @type {!proto.google.cloud.tasks.v2beta2.Task.View} */ (reader.readEnum());
      msg.setView(value);
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
proto.google.cloud.tasks.v2beta2.Task.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.tasks.v2beta2.Task.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.tasks.v2beta2.Task} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.tasks.v2beta2.Task.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAppEngineHttpRequest();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_cloud_tasks_v2beta2_target_pb.AppEngineHttpRequest.serializeBinaryToWriter
    );
  }
  f = message.getPullMessage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_cloud_tasks_v2beta2_target_pb.PullMessage.serializeBinaryToWriter
    );
  }
  f = message.getScheduleTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.google.cloud.tasks.v2beta2.TaskStatus.serializeBinaryToWriter
    );
  }
  f = message.getView();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.google.cloud.tasks.v2beta2.Task.View = {
  VIEW_UNSPECIFIED: 0,
  BASIC: 1,
  FULL: 2
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.cloud.tasks.v2beta2.Task.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.cloud.tasks.v2beta2.Task} returns this
 */
proto.google.cloud.tasks.v2beta2.Task.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional AppEngineHttpRequest app_engine_http_request = 3;
 * @return {?proto.google.cloud.tasks.v2beta2.AppEngineHttpRequest}
 */
proto.google.cloud.tasks.v2beta2.Task.prototype.getAppEngineHttpRequest = function() {
  return /** @type{?proto.google.cloud.tasks.v2beta2.AppEngineHttpRequest} */ (
    jspb.Message.getWrapperField(this, google_cloud_tasks_v2beta2_target_pb.AppEngineHttpRequest, 3));
};


/**
 * @param {?proto.google.cloud.tasks.v2beta2.AppEngineHttpRequest|undefined} value
 * @return {!proto.google.cloud.tasks.v2beta2.Task} returns this
*/
proto.google.cloud.tasks.v2beta2.Task.prototype.setAppEngineHttpRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.google.cloud.tasks.v2beta2.Task.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.cloud.tasks.v2beta2.Task} returns this
 */
proto.google.cloud.tasks.v2beta2.Task.prototype.clearAppEngineHttpRequest = function() {
  return this.setAppEngineHttpRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.tasks.v2beta2.Task.prototype.hasAppEngineHttpRequest = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PullMessage pull_message = 4;
 * @return {?proto.google.cloud.tasks.v2beta2.PullMessage}
 */
proto.google.cloud.tasks.v2beta2.Task.prototype.getPullMessage = function() {
  return /** @type{?proto.google.cloud.tasks.v2beta2.PullMessage} */ (
    jspb.Message.getWrapperField(this, google_cloud_tasks_v2beta2_target_pb.PullMessage, 4));
};


/**
 * @param {?proto.google.cloud.tasks.v2beta2.PullMessage|undefined} value
 * @return {!proto.google.cloud.tasks.v2beta2.Task} returns this
*/
proto.google.cloud.tasks.v2beta2.Task.prototype.setPullMessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.google.cloud.tasks.v2beta2.Task.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.cloud.tasks.v2beta2.Task} returns this
 */
proto.google.cloud.tasks.v2beta2.Task.prototype.clearPullMessage = function() {
  return this.setPullMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.tasks.v2beta2.Task.prototype.hasPullMessage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp schedule_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.cloud.tasks.v2beta2.Task.prototype.getScheduleTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.google.cloud.tasks.v2beta2.Task} returns this
*/
proto.google.cloud.tasks.v2beta2.Task.prototype.setScheduleTime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.cloud.tasks.v2beta2.Task} returns this
 */
proto.google.cloud.tasks.v2beta2.Task.prototype.clearScheduleTime = function() {
  return this.setScheduleTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.tasks.v2beta2.Task.prototype.hasScheduleTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp create_time = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.cloud.tasks.v2beta2.Task.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.google.cloud.tasks.v2beta2.Task} returns this
*/
proto.google.cloud.tasks.v2beta2.Task.prototype.setCreateTime = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.cloud.tasks.v2beta2.Task} returns this
 */
proto.google.cloud.tasks.v2beta2.Task.prototype.clearCreateTime = function() {
  return this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.tasks.v2beta2.Task.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional TaskStatus status = 7;
 * @return {?proto.google.cloud.tasks.v2beta2.TaskStatus}
 */
proto.google.cloud.tasks.v2beta2.Task.prototype.getStatus = function() {
  return /** @type{?proto.google.cloud.tasks.v2beta2.TaskStatus} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.tasks.v2beta2.TaskStatus, 7));
};


/**
 * @param {?proto.google.cloud.tasks.v2beta2.TaskStatus|undefined} value
 * @return {!proto.google.cloud.tasks.v2beta2.Task} returns this
*/
proto.google.cloud.tasks.v2beta2.Task.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.cloud.tasks.v2beta2.Task} returns this
 */
proto.google.cloud.tasks.v2beta2.Task.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.tasks.v2beta2.Task.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional View view = 8;
 * @return {!proto.google.cloud.tasks.v2beta2.Task.View}
 */
proto.google.cloud.tasks.v2beta2.Task.prototype.getView = function() {
  return /** @type {!proto.google.cloud.tasks.v2beta2.Task.View} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.google.cloud.tasks.v2beta2.Task.View} value
 * @return {!proto.google.cloud.tasks.v2beta2.Task} returns this
 */
proto.google.cloud.tasks.v2beta2.Task.prototype.setView = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};





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
proto.google.cloud.tasks.v2beta2.TaskStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.tasks.v2beta2.TaskStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.tasks.v2beta2.TaskStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.tasks.v2beta2.TaskStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    attemptDispatchCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    attemptResponseCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    firstAttemptStatus: (f = msg.getFirstAttemptStatus()) && proto.google.cloud.tasks.v2beta2.AttemptStatus.toObject(includeInstance, f),
    lastAttemptStatus: (f = msg.getLastAttemptStatus()) && proto.google.cloud.tasks.v2beta2.AttemptStatus.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.tasks.v2beta2.TaskStatus}
 */
proto.google.cloud.tasks.v2beta2.TaskStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.tasks.v2beta2.TaskStatus;
  return proto.google.cloud.tasks.v2beta2.TaskStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.tasks.v2beta2.TaskStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.tasks.v2beta2.TaskStatus}
 */
proto.google.cloud.tasks.v2beta2.TaskStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAttemptDispatchCount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAttemptResponseCount(value);
      break;
    case 3:
      var value = new proto.google.cloud.tasks.v2beta2.AttemptStatus;
      reader.readMessage(value,proto.google.cloud.tasks.v2beta2.AttemptStatus.deserializeBinaryFromReader);
      msg.setFirstAttemptStatus(value);
      break;
    case 4:
      var value = new proto.google.cloud.tasks.v2beta2.AttemptStatus;
      reader.readMessage(value,proto.google.cloud.tasks.v2beta2.AttemptStatus.deserializeBinaryFromReader);
      msg.setLastAttemptStatus(value);
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
proto.google.cloud.tasks.v2beta2.TaskStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.tasks.v2beta2.TaskStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.tasks.v2beta2.TaskStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.tasks.v2beta2.TaskStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAttemptDispatchCount();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getAttemptResponseCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getFirstAttemptStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.cloud.tasks.v2beta2.AttemptStatus.serializeBinaryToWriter
    );
  }
  f = message.getLastAttemptStatus();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.google.cloud.tasks.v2beta2.AttemptStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 attempt_dispatch_count = 1;
 * @return {number}
 */
proto.google.cloud.tasks.v2beta2.TaskStatus.prototype.getAttemptDispatchCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.cloud.tasks.v2beta2.TaskStatus} returns this
 */
proto.google.cloud.tasks.v2beta2.TaskStatus.prototype.setAttemptDispatchCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 attempt_response_count = 2;
 * @return {number}
 */
proto.google.cloud.tasks.v2beta2.TaskStatus.prototype.getAttemptResponseCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.cloud.tasks.v2beta2.TaskStatus} returns this
 */
proto.google.cloud.tasks.v2beta2.TaskStatus.prototype.setAttemptResponseCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional AttemptStatus first_attempt_status = 3;
 * @return {?proto.google.cloud.tasks.v2beta2.AttemptStatus}
 */
proto.google.cloud.tasks.v2beta2.TaskStatus.prototype.getFirstAttemptStatus = function() {
  return /** @type{?proto.google.cloud.tasks.v2beta2.AttemptStatus} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.tasks.v2beta2.AttemptStatus, 3));
};


/**
 * @param {?proto.google.cloud.tasks.v2beta2.AttemptStatus|undefined} value
 * @return {!proto.google.cloud.tasks.v2beta2.TaskStatus} returns this
*/
proto.google.cloud.tasks.v2beta2.TaskStatus.prototype.setFirstAttemptStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.cloud.tasks.v2beta2.TaskStatus} returns this
 */
proto.google.cloud.tasks.v2beta2.TaskStatus.prototype.clearFirstAttemptStatus = function() {
  return this.setFirstAttemptStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.tasks.v2beta2.TaskStatus.prototype.hasFirstAttemptStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional AttemptStatus last_attempt_status = 4;
 * @return {?proto.google.cloud.tasks.v2beta2.AttemptStatus}
 */
proto.google.cloud.tasks.v2beta2.TaskStatus.prototype.getLastAttemptStatus = function() {
  return /** @type{?proto.google.cloud.tasks.v2beta2.AttemptStatus} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.tasks.v2beta2.AttemptStatus, 4));
};


/**
 * @param {?proto.google.cloud.tasks.v2beta2.AttemptStatus|undefined} value
 * @return {!proto.google.cloud.tasks.v2beta2.TaskStatus} returns this
*/
proto.google.cloud.tasks.v2beta2.TaskStatus.prototype.setLastAttemptStatus = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.cloud.tasks.v2beta2.TaskStatus} returns this
 */
proto.google.cloud.tasks.v2beta2.TaskStatus.prototype.clearLastAttemptStatus = function() {
  return this.setLastAttemptStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.tasks.v2beta2.TaskStatus.prototype.hasLastAttemptStatus = function() {
  return jspb.Message.getField(this, 4) != null;
};





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
proto.google.cloud.tasks.v2beta2.AttemptStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.tasks.v2beta2.AttemptStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.tasks.v2beta2.AttemptStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.tasks.v2beta2.AttemptStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    scheduleTime: (f = msg.getScheduleTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    dispatchTime: (f = msg.getDispatchTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    responseTime: (f = msg.getResponseTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    responseStatus: (f = msg.getResponseStatus()) && google_rpc_status_pb.Status.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.tasks.v2beta2.AttemptStatus}
 */
proto.google.cloud.tasks.v2beta2.AttemptStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.tasks.v2beta2.AttemptStatus;
  return proto.google.cloud.tasks.v2beta2.AttemptStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.tasks.v2beta2.AttemptStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.tasks.v2beta2.AttemptStatus}
 */
proto.google.cloud.tasks.v2beta2.AttemptStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setScheduleTime(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDispatchTime(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setResponseTime(value);
      break;
    case 4:
      var value = new google_rpc_status_pb.Status;
      reader.readMessage(value,google_rpc_status_pb.Status.deserializeBinaryFromReader);
      msg.setResponseStatus(value);
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
proto.google.cloud.tasks.v2beta2.AttemptStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.tasks.v2beta2.AttemptStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.tasks.v2beta2.AttemptStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.tasks.v2beta2.AttemptStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScheduleTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDispatchTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getResponseTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getResponseStatus();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_rpc_status_pb.Status.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp schedule_time = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.cloud.tasks.v2beta2.AttemptStatus.prototype.getScheduleTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.google.cloud.tasks.v2beta2.AttemptStatus} returns this
*/
proto.google.cloud.tasks.v2beta2.AttemptStatus.prototype.setScheduleTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.cloud.tasks.v2beta2.AttemptStatus} returns this
 */
proto.google.cloud.tasks.v2beta2.AttemptStatus.prototype.clearScheduleTime = function() {
  return this.setScheduleTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.tasks.v2beta2.AttemptStatus.prototype.hasScheduleTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp dispatch_time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.cloud.tasks.v2beta2.AttemptStatus.prototype.getDispatchTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.google.cloud.tasks.v2beta2.AttemptStatus} returns this
*/
proto.google.cloud.tasks.v2beta2.AttemptStatus.prototype.setDispatchTime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.cloud.tasks.v2beta2.AttemptStatus} returns this
 */
proto.google.cloud.tasks.v2beta2.AttemptStatus.prototype.clearDispatchTime = function() {
  return this.setDispatchTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.tasks.v2beta2.AttemptStatus.prototype.hasDispatchTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp response_time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.cloud.tasks.v2beta2.AttemptStatus.prototype.getResponseTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.google.cloud.tasks.v2beta2.AttemptStatus} returns this
*/
proto.google.cloud.tasks.v2beta2.AttemptStatus.prototype.setResponseTime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.cloud.tasks.v2beta2.AttemptStatus} returns this
 */
proto.google.cloud.tasks.v2beta2.AttemptStatus.prototype.clearResponseTime = function() {
  return this.setResponseTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.tasks.v2beta2.AttemptStatus.prototype.hasResponseTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.rpc.Status response_status = 4;
 * @return {?proto.google.rpc.Status}
 */
proto.google.cloud.tasks.v2beta2.AttemptStatus.prototype.getResponseStatus = function() {
  return /** @type{?proto.google.rpc.Status} */ (
    jspb.Message.getWrapperField(this, google_rpc_status_pb.Status, 4));
};


/**
 * @param {?proto.google.rpc.Status|undefined} value
 * @return {!proto.google.cloud.tasks.v2beta2.AttemptStatus} returns this
*/
proto.google.cloud.tasks.v2beta2.AttemptStatus.prototype.setResponseStatus = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.cloud.tasks.v2beta2.AttemptStatus} returns this
 */
proto.google.cloud.tasks.v2beta2.AttemptStatus.prototype.clearResponseStatus = function() {
  return this.setResponseStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.tasks.v2beta2.AttemptStatus.prototype.hasResponseStatus = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.google.cloud.tasks.v2beta2);
