// source: google/cloud/websecurityscanner/v1alpha/finding_type_stats.proto
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
var google_cloud_websecurityscanner_v1alpha_finding_pb = require('../../../../google/cloud/websecurityscanner/v1alpha/finding_pb.js');
goog.object.extend(proto, google_cloud_websecurityscanner_v1alpha_finding_pb);
goog.exportSymbol('proto.google.cloud.websecurityscanner.v1alpha.FindingTypeStats', null, global);
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
proto.google.cloud.websecurityscanner.v1alpha.FindingTypeStats = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.websecurityscanner.v1alpha.FindingTypeStats, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.websecurityscanner.v1alpha.FindingTypeStats.displayName = 'proto.google.cloud.websecurityscanner.v1alpha.FindingTypeStats';
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
proto.google.cloud.websecurityscanner.v1alpha.FindingTypeStats.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.websecurityscanner.v1alpha.FindingTypeStats.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.FindingTypeStats} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.websecurityscanner.v1alpha.FindingTypeStats.toObject = function(includeInstance, msg) {
  var f, obj = {
    findingType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    findingCount: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.google.cloud.websecurityscanner.v1alpha.FindingTypeStats}
 */
proto.google.cloud.websecurityscanner.v1alpha.FindingTypeStats.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.websecurityscanner.v1alpha.FindingTypeStats;
  return proto.google.cloud.websecurityscanner.v1alpha.FindingTypeStats.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.FindingTypeStats} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.websecurityscanner.v1alpha.FindingTypeStats}
 */
proto.google.cloud.websecurityscanner.v1alpha.FindingTypeStats.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.cloud.websecurityscanner.v1alpha.Finding.FindingType} */ (reader.readEnum());
      msg.setFindingType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFindingCount(value);
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
proto.google.cloud.websecurityscanner.v1alpha.FindingTypeStats.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.websecurityscanner.v1alpha.FindingTypeStats.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.FindingTypeStats} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.websecurityscanner.v1alpha.FindingTypeStats.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFindingType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getFindingCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional Finding.FindingType finding_type = 1;
 * @return {!proto.google.cloud.websecurityscanner.v1alpha.Finding.FindingType}
 */
proto.google.cloud.websecurityscanner.v1alpha.FindingTypeStats.prototype.getFindingType = function() {
  return /** @type {!proto.google.cloud.websecurityscanner.v1alpha.Finding.FindingType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.google.cloud.websecurityscanner.v1alpha.Finding.FindingType} value
 * @return {!proto.google.cloud.websecurityscanner.v1alpha.FindingTypeStats} returns this
 */
proto.google.cloud.websecurityscanner.v1alpha.FindingTypeStats.prototype.setFindingType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int32 finding_count = 2;
 * @return {number}
 */
proto.google.cloud.websecurityscanner.v1alpha.FindingTypeStats.prototype.getFindingCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.cloud.websecurityscanner.v1alpha.FindingTypeStats} returns this
 */
proto.google.cloud.websecurityscanner.v1alpha.FindingTypeStats.prototype.setFindingCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


goog.object.extend(exports, proto.google.cloud.websecurityscanner.v1alpha);
