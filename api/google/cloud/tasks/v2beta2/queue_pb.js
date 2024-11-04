// source: google/cloud/tasks/v2beta2/queue.proto
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
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.google.cloud.tasks.v2beta2.Queue', null, global);
goog.exportSymbol('proto.google.cloud.tasks.v2beta2.Queue.State', null, global);
goog.exportSymbol('proto.google.cloud.tasks.v2beta2.Queue.TargetTypeCase', null, global);
goog.exportSymbol('proto.google.cloud.tasks.v2beta2.RateLimits', null, global);
goog.exportSymbol('proto.google.cloud.tasks.v2beta2.RetryConfig', null, global);
goog.exportSymbol('proto.google.cloud.tasks.v2beta2.RetryConfig.NumAttemptsCase', null, global);
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
proto.google.cloud.tasks.v2beta2.Queue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.cloud.tasks.v2beta2.Queue.oneofGroups_);
};
goog.inherits(proto.google.cloud.tasks.v2beta2.Queue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.tasks.v2beta2.Queue.displayName = 'proto.google.cloud.tasks.v2beta2.Queue';
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
proto.google.cloud.tasks.v2beta2.RateLimits = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.tasks.v2beta2.RateLimits, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.tasks.v2beta2.RateLimits.displayName = 'proto.google.cloud.tasks.v2beta2.RateLimits';
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
proto.google.cloud.tasks.v2beta2.RetryConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.cloud.tasks.v2beta2.RetryConfig.oneofGroups_);
};
goog.inherits(proto.google.cloud.tasks.v2beta2.RetryConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.tasks.v2beta2.RetryConfig.displayName = 'proto.google.cloud.tasks.v2beta2.RetryConfig';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.cloud.tasks.v2beta2.Queue.oneofGroups_ = [[3,4]];

/**
 * @enum {number}
 */
proto.google.cloud.tasks.v2beta2.Queue.TargetTypeCase = {
  TARGET_TYPE_NOT_SET: 0,
  APP_ENGINE_HTTP_TARGET: 3,
  PULL_TARGET: 4
};

/**
 * @return {proto.google.cloud.tasks.v2beta2.Queue.TargetTypeCase}
 */
proto.google.cloud.tasks.v2beta2.Queue.prototype.getTargetTypeCase = function() {
  return /** @type {proto.google.cloud.tasks.v2beta2.Queue.TargetTypeCase} */(jspb.Message.computeOneofCase(this, proto.google.cloud.tasks.v2beta2.Queue.oneofGroups_[0]));
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
proto.google.cloud.tasks.v2beta2.Queue.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.tasks.v2beta2.Queue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.tasks.v2beta2.Queue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.tasks.v2beta2.Queue.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    appEngineHttpTarget: (f = msg.getAppEngineHttpTarget()) && google_cloud_tasks_v2beta2_target_pb.AppEngineHttpTarget.toObject(includeInstance, f),
    pullTarget: (f = msg.getPullTarget()) && google_cloud_tasks_v2beta2_target_pb.PullTarget.toObject(includeInstance, f),
    rateLimits: (f = msg.getRateLimits()) && proto.google.cloud.tasks.v2beta2.RateLimits.toObject(includeInstance, f),
    retryConfig: (f = msg.getRetryConfig()) && proto.google.cloud.tasks.v2beta2.RetryConfig.toObject(includeInstance, f),
    state: jspb.Message.getFieldWithDefault(msg, 7, 0),
    purgeTime: (f = msg.getPurgeTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.tasks.v2beta2.Queue}
 */
proto.google.cloud.tasks.v2beta2.Queue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.tasks.v2beta2.Queue;
  return proto.google.cloud.tasks.v2beta2.Queue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.tasks.v2beta2.Queue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.tasks.v2beta2.Queue}
 */
proto.google.cloud.tasks.v2beta2.Queue.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_cloud_tasks_v2beta2_target_pb.AppEngineHttpTarget;
      reader.readMessage(value,google_cloud_tasks_v2beta2_target_pb.AppEngineHttpTarget.deserializeBinaryFromReader);
      msg.setAppEngineHttpTarget(value);
      break;
    case 4:
      var value = new google_cloud_tasks_v2beta2_target_pb.PullTarget;
      reader.readMessage(value,google_cloud_tasks_v2beta2_target_pb.PullTarget.deserializeBinaryFromReader);
      msg.setPullTarget(value);
      break;
    case 5:
      var value = new proto.google.cloud.tasks.v2beta2.RateLimits;
      reader.readMessage(value,proto.google.cloud.tasks.v2beta2.RateLimits.deserializeBinaryFromReader);
      msg.setRateLimits(value);
      break;
    case 6:
      var value = new proto.google.cloud.tasks.v2beta2.RetryConfig;
      reader.readMessage(value,proto.google.cloud.tasks.v2beta2.RetryConfig.deserializeBinaryFromReader);
      msg.setRetryConfig(value);
      break;
    case 7:
      var value = /** @type {!proto.google.cloud.tasks.v2beta2.Queue.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setPurgeTime(value);
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
proto.google.cloud.tasks.v2beta2.Queue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.tasks.v2beta2.Queue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.tasks.v2beta2.Queue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.tasks.v2beta2.Queue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAppEngineHttpTarget();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_cloud_tasks_v2beta2_target_pb.AppEngineHttpTarget.serializeBinaryToWriter
    );
  }
  f = message.getPullTarget();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_cloud_tasks_v2beta2_target_pb.PullTarget.serializeBinaryToWriter
    );
  }
  f = message.getRateLimits();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.google.cloud.tasks.v2beta2.RateLimits.serializeBinaryToWriter
    );
  }
  f = message.getRetryConfig();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.google.cloud.tasks.v2beta2.RetryConfig.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getPurgeTime();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.google.cloud.tasks.v2beta2.Queue.State = {
  STATE_UNSPECIFIED: 0,
  RUNNING: 1,
  PAUSED: 2,
  DISABLED: 3
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.cloud.tasks.v2beta2.Queue.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.cloud.tasks.v2beta2.Queue} returns this
 */
proto.google.cloud.tasks.v2beta2.Queue.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional AppEngineHttpTarget app_engine_http_target = 3;
 * @return {?proto.google.cloud.tasks.v2beta2.AppEngineHttpTarget}
 */
proto.google.cloud.tasks.v2beta2.Queue.prototype.getAppEngineHttpTarget = function() {
  return /** @type{?proto.google.cloud.tasks.v2beta2.AppEngineHttpTarget} */ (
    jspb.Message.getWrapperField(this, google_cloud_tasks_v2beta2_target_pb.AppEngineHttpTarget, 3));
};


/**
 * @param {?proto.google.cloud.tasks.v2beta2.AppEngineHttpTarget|undefined} value
 * @return {!proto.google.cloud.tasks.v2beta2.Queue} returns this
*/
proto.google.cloud.tasks.v2beta2.Queue.prototype.setAppEngineHttpTarget = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.google.cloud.tasks.v2beta2.Queue.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.cloud.tasks.v2beta2.Queue} returns this
 */
proto.google.cloud.tasks.v2beta2.Queue.prototype.clearAppEngineHttpTarget = function() {
  return this.setAppEngineHttpTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.tasks.v2beta2.Queue.prototype.hasAppEngineHttpTarget = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PullTarget pull_target = 4;
 * @return {?proto.google.cloud.tasks.v2beta2.PullTarget}
 */
proto.google.cloud.tasks.v2beta2.Queue.prototype.getPullTarget = function() {
  return /** @type{?proto.google.cloud.tasks.v2beta2.PullTarget} */ (
    jspb.Message.getWrapperField(this, google_cloud_tasks_v2beta2_target_pb.PullTarget, 4));
};


/**
 * @param {?proto.google.cloud.tasks.v2beta2.PullTarget|undefined} value
 * @return {!proto.google.cloud.tasks.v2beta2.Queue} returns this
*/
proto.google.cloud.tasks.v2beta2.Queue.prototype.setPullTarget = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.google.cloud.tasks.v2beta2.Queue.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.cloud.tasks.v2beta2.Queue} returns this
 */
proto.google.cloud.tasks.v2beta2.Queue.prototype.clearPullTarget = function() {
  return this.setPullTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.tasks.v2beta2.Queue.prototype.hasPullTarget = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional RateLimits rate_limits = 5;
 * @return {?proto.google.cloud.tasks.v2beta2.RateLimits}
 */
proto.google.cloud.tasks.v2beta2.Queue.prototype.getRateLimits = function() {
  return /** @type{?proto.google.cloud.tasks.v2beta2.RateLimits} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.tasks.v2beta2.RateLimits, 5));
};


/**
 * @param {?proto.google.cloud.tasks.v2beta2.RateLimits|undefined} value
 * @return {!proto.google.cloud.tasks.v2beta2.Queue} returns this
*/
proto.google.cloud.tasks.v2beta2.Queue.prototype.setRateLimits = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.cloud.tasks.v2beta2.Queue} returns this
 */
proto.google.cloud.tasks.v2beta2.Queue.prototype.clearRateLimits = function() {
  return this.setRateLimits(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.tasks.v2beta2.Queue.prototype.hasRateLimits = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional RetryConfig retry_config = 6;
 * @return {?proto.google.cloud.tasks.v2beta2.RetryConfig}
 */
proto.google.cloud.tasks.v2beta2.Queue.prototype.getRetryConfig = function() {
  return /** @type{?proto.google.cloud.tasks.v2beta2.RetryConfig} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.tasks.v2beta2.RetryConfig, 6));
};


/**
 * @param {?proto.google.cloud.tasks.v2beta2.RetryConfig|undefined} value
 * @return {!proto.google.cloud.tasks.v2beta2.Queue} returns this
*/
proto.google.cloud.tasks.v2beta2.Queue.prototype.setRetryConfig = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.cloud.tasks.v2beta2.Queue} returns this
 */
proto.google.cloud.tasks.v2beta2.Queue.prototype.clearRetryConfig = function() {
  return this.setRetryConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.tasks.v2beta2.Queue.prototype.hasRetryConfig = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional State state = 7;
 * @return {!proto.google.cloud.tasks.v2beta2.Queue.State}
 */
proto.google.cloud.tasks.v2beta2.Queue.prototype.getState = function() {
  return /** @type {!proto.google.cloud.tasks.v2beta2.Queue.State} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.google.cloud.tasks.v2beta2.Queue.State} value
 * @return {!proto.google.cloud.tasks.v2beta2.Queue} returns this
 */
proto.google.cloud.tasks.v2beta2.Queue.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional google.protobuf.Timestamp purge_time = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.cloud.tasks.v2beta2.Queue.prototype.getPurgeTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.google.cloud.tasks.v2beta2.Queue} returns this
*/
proto.google.cloud.tasks.v2beta2.Queue.prototype.setPurgeTime = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.cloud.tasks.v2beta2.Queue} returns this
 */
proto.google.cloud.tasks.v2beta2.Queue.prototype.clearPurgeTime = function() {
  return this.setPurgeTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.tasks.v2beta2.Queue.prototype.hasPurgeTime = function() {
  return jspb.Message.getField(this, 8) != null;
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
proto.google.cloud.tasks.v2beta2.RateLimits.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.tasks.v2beta2.RateLimits.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.tasks.v2beta2.RateLimits} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.tasks.v2beta2.RateLimits.toObject = function(includeInstance, msg) {
  var f, obj = {
    maxTasksDispatchedPerSecond: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    maxBurstSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    maxConcurrentTasks: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.google.cloud.tasks.v2beta2.RateLimits}
 */
proto.google.cloud.tasks.v2beta2.RateLimits.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.tasks.v2beta2.RateLimits;
  return proto.google.cloud.tasks.v2beta2.RateLimits.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.tasks.v2beta2.RateLimits} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.tasks.v2beta2.RateLimits}
 */
proto.google.cloud.tasks.v2beta2.RateLimits.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaxTasksDispatchedPerSecond(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxBurstSize(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxConcurrentTasks(value);
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
proto.google.cloud.tasks.v2beta2.RateLimits.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.tasks.v2beta2.RateLimits.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.tasks.v2beta2.RateLimits} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.tasks.v2beta2.RateLimits.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaxTasksDispatchedPerSecond();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getMaxBurstSize();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getMaxConcurrentTasks();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional double max_tasks_dispatched_per_second = 1;
 * @return {number}
 */
proto.google.cloud.tasks.v2beta2.RateLimits.prototype.getMaxTasksDispatchedPerSecond = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.google.cloud.tasks.v2beta2.RateLimits} returns this
 */
proto.google.cloud.tasks.v2beta2.RateLimits.prototype.setMaxTasksDispatchedPerSecond = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional int32 max_burst_size = 2;
 * @return {number}
 */
proto.google.cloud.tasks.v2beta2.RateLimits.prototype.getMaxBurstSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.cloud.tasks.v2beta2.RateLimits} returns this
 */
proto.google.cloud.tasks.v2beta2.RateLimits.prototype.setMaxBurstSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 max_concurrent_tasks = 3;
 * @return {number}
 */
proto.google.cloud.tasks.v2beta2.RateLimits.prototype.getMaxConcurrentTasks = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.cloud.tasks.v2beta2.RateLimits} returns this
 */
proto.google.cloud.tasks.v2beta2.RateLimits.prototype.setMaxConcurrentTasks = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.cloud.tasks.v2beta2.RetryConfig.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.google.cloud.tasks.v2beta2.RetryConfig.NumAttemptsCase = {
  NUM_ATTEMPTS_NOT_SET: 0,
  MAX_ATTEMPTS: 1,
  UNLIMITED_ATTEMPTS: 2
};

/**
 * @return {proto.google.cloud.tasks.v2beta2.RetryConfig.NumAttemptsCase}
 */
proto.google.cloud.tasks.v2beta2.RetryConfig.prototype.getNumAttemptsCase = function() {
  return /** @type {proto.google.cloud.tasks.v2beta2.RetryConfig.NumAttemptsCase} */(jspb.Message.computeOneofCase(this, proto.google.cloud.tasks.v2beta2.RetryConfig.oneofGroups_[0]));
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
proto.google.cloud.tasks.v2beta2.RetryConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.tasks.v2beta2.RetryConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.tasks.v2beta2.RetryConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.tasks.v2beta2.RetryConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    maxAttempts: jspb.Message.getFieldWithDefault(msg, 1, 0),
    unlimitedAttempts: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    maxRetryDuration: (f = msg.getMaxRetryDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    minBackoff: (f = msg.getMinBackoff()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    maxBackoff: (f = msg.getMaxBackoff()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    maxDoublings: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.google.cloud.tasks.v2beta2.RetryConfig}
 */
proto.google.cloud.tasks.v2beta2.RetryConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.tasks.v2beta2.RetryConfig;
  return proto.google.cloud.tasks.v2beta2.RetryConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.tasks.v2beta2.RetryConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.tasks.v2beta2.RetryConfig}
 */
proto.google.cloud.tasks.v2beta2.RetryConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxAttempts(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUnlimitedAttempts(value);
      break;
    case 3:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setMaxRetryDuration(value);
      break;
    case 4:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setMinBackoff(value);
      break;
    case 5:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setMaxBackoff(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxDoublings(value);
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
proto.google.cloud.tasks.v2beta2.RetryConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.tasks.v2beta2.RetryConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.tasks.v2beta2.RetryConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.tasks.v2beta2.RetryConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getMaxRetryDuration();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getMinBackoff();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getMaxBackoff();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getMaxDoublings();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * optional int32 max_attempts = 1;
 * @return {number}
 */
proto.google.cloud.tasks.v2beta2.RetryConfig.prototype.getMaxAttempts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.cloud.tasks.v2beta2.RetryConfig} returns this
 */
proto.google.cloud.tasks.v2beta2.RetryConfig.prototype.setMaxAttempts = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.google.cloud.tasks.v2beta2.RetryConfig.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.cloud.tasks.v2beta2.RetryConfig} returns this
 */
proto.google.cloud.tasks.v2beta2.RetryConfig.prototype.clearMaxAttempts = function() {
  return jspb.Message.setOneofField(this, 1, proto.google.cloud.tasks.v2beta2.RetryConfig.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.tasks.v2beta2.RetryConfig.prototype.hasMaxAttempts = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool unlimited_attempts = 2;
 * @return {boolean}
 */
proto.google.cloud.tasks.v2beta2.RetryConfig.prototype.getUnlimitedAttempts = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.cloud.tasks.v2beta2.RetryConfig} returns this
 */
proto.google.cloud.tasks.v2beta2.RetryConfig.prototype.setUnlimitedAttempts = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.google.cloud.tasks.v2beta2.RetryConfig.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.cloud.tasks.v2beta2.RetryConfig} returns this
 */
proto.google.cloud.tasks.v2beta2.RetryConfig.prototype.clearUnlimitedAttempts = function() {
  return jspb.Message.setOneofField(this, 2, proto.google.cloud.tasks.v2beta2.RetryConfig.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.tasks.v2beta2.RetryConfig.prototype.hasUnlimitedAttempts = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Duration max_retry_duration = 3;
 * @return {?proto.google.protobuf.Duration}
 */
proto.google.cloud.tasks.v2beta2.RetryConfig.prototype.getMaxRetryDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.google.cloud.tasks.v2beta2.RetryConfig} returns this
*/
proto.google.cloud.tasks.v2beta2.RetryConfig.prototype.setMaxRetryDuration = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.cloud.tasks.v2beta2.RetryConfig} returns this
 */
proto.google.cloud.tasks.v2beta2.RetryConfig.prototype.clearMaxRetryDuration = function() {
  return this.setMaxRetryDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.tasks.v2beta2.RetryConfig.prototype.hasMaxRetryDuration = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Duration min_backoff = 4;
 * @return {?proto.google.protobuf.Duration}
 */
proto.google.cloud.tasks.v2beta2.RetryConfig.prototype.getMinBackoff = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 4));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.google.cloud.tasks.v2beta2.RetryConfig} returns this
*/
proto.google.cloud.tasks.v2beta2.RetryConfig.prototype.setMinBackoff = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.cloud.tasks.v2beta2.RetryConfig} returns this
 */
proto.google.cloud.tasks.v2beta2.RetryConfig.prototype.clearMinBackoff = function() {
  return this.setMinBackoff(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.tasks.v2beta2.RetryConfig.prototype.hasMinBackoff = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Duration max_backoff = 5;
 * @return {?proto.google.protobuf.Duration}
 */
proto.google.cloud.tasks.v2beta2.RetryConfig.prototype.getMaxBackoff = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 5));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.google.cloud.tasks.v2beta2.RetryConfig} returns this
*/
proto.google.cloud.tasks.v2beta2.RetryConfig.prototype.setMaxBackoff = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.cloud.tasks.v2beta2.RetryConfig} returns this
 */
proto.google.cloud.tasks.v2beta2.RetryConfig.prototype.clearMaxBackoff = function() {
  return this.setMaxBackoff(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.tasks.v2beta2.RetryConfig.prototype.hasMaxBackoff = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 max_doublings = 6;
 * @return {number}
 */
proto.google.cloud.tasks.v2beta2.RetryConfig.prototype.getMaxDoublings = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.cloud.tasks.v2beta2.RetryConfig} returns this
 */
proto.google.cloud.tasks.v2beta2.RetryConfig.prototype.setMaxDoublings = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


goog.object.extend(exports, proto.google.cloud.tasks.v2beta2);
