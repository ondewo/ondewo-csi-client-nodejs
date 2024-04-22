// source: google/rpc/status.proto
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
var global = function () {
	if (this) {
		return this;
	}
	if (typeof window !== 'undefined') {
		return window;
	}
	if (typeof global !== 'undefined') {
		return global;
	}
	if (typeof self !== 'undefined') {
		return self;
	}
	return Function('return this')();
}.call(null);

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.object.extend(proto, google_protobuf_any_pb);
goog.exportSymbol('proto.google.rpc.Status', null, global);
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
proto.google.rpc.Status = function (opt_data) {
	jspb.Message.initialize(this, opt_data, 0, -1, proto.google.rpc.Status.repeatedFields_, null);
};
goog.inherits(proto.google.rpc.Status, jspb.Message);
if (goog.DEBUG && !COMPILED) {
	/**
	 * @public
	 * @override
	 */
	proto.google.rpc.Status.displayName = 'proto.google.rpc.Status';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.rpc.Status.repeatedFields_ = [3];

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
	proto.google.rpc.Status.prototype.toObject = function (opt_includeInstance) {
		return proto.google.rpc.Status.toObject(opt_includeInstance, this);
	};

	/**
	 * Static version of the {@see toObject} method.
	 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
	 *     the JSPB instance for transitional soy proto support:
	 *     http://goto/soy-param-migration
	 * @param {!proto.google.rpc.Status} msg The msg instance to transform.
	 * @return {!Object}
	 * @suppress {unusedLocalVariables} f is only used for nested messages
	 */
	proto.google.rpc.Status.toObject = function (includeInstance, msg) {
		var f,
			obj = {
				code: jspb.Message.getFieldWithDefault(msg, 1, 0),
				message: jspb.Message.getFieldWithDefault(msg, 2, ''),
				detailsList: jspb.Message.toObjectList(
					msg.getDetailsList(),
					google_protobuf_any_pb.Any.toObject,
					includeInstance
				)
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
 * @return {!proto.google.rpc.Status}
 */
proto.google.rpc.Status.deserializeBinary = function (bytes) {
	var reader = new jspb.BinaryReader(bytes);
	var msg = new proto.google.rpc.Status();
	return proto.google.rpc.Status.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.rpc.Status} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.rpc.Status}
 */
proto.google.rpc.Status.deserializeBinaryFromReader = function (msg, reader) {
	while (reader.nextField()) {
		if (reader.isEndGroup()) {
			break;
		}
		var field = reader.getFieldNumber();
		switch (field) {
			case 1:
				var value = /** @type {number} */ (reader.readInt32());
				msg.setCode(value);
				break;
			case 2:
				var value = /** @type {string} */ (reader.readString());
				msg.setMessage(value);
				break;
			case 3:
				var value = new google_protobuf_any_pb.Any();
				reader.readMessage(value, google_protobuf_any_pb.Any.deserializeBinaryFromReader);
				msg.addDetails(value);
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
proto.google.rpc.Status.prototype.serializeBinary = function () {
	var writer = new jspb.BinaryWriter();
	proto.google.rpc.Status.serializeBinaryToWriter(this, writer);
	return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.rpc.Status} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.rpc.Status.serializeBinaryToWriter = function (message, writer) {
	var f = undefined;
	f = message.getCode();
	if (f !== 0) {
		writer.writeInt32(1, f);
	}
	f = message.getMessage();
	if (f.length > 0) {
		writer.writeString(2, f);
	}
	f = message.getDetailsList();
	if (f.length > 0) {
		writer.writeRepeatedMessage(3, f, google_protobuf_any_pb.Any.serializeBinaryToWriter);
	}
};

/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.google.rpc.Status.prototype.getCode = function () {
	return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.google.rpc.Status} returns this
 */
proto.google.rpc.Status.prototype.setCode = function (value) {
	return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional string message = 2;
 * @return {string}
 */
proto.google.rpc.Status.prototype.getMessage = function () {
	return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.google.rpc.Status} returns this
 */
proto.google.rpc.Status.prototype.setMessage = function (value) {
	return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * repeated google.protobuf.Any details = 3;
 * @return {!Array<!proto.google.protobuf.Any>}
 */
proto.google.rpc.Status.prototype.getDetailsList = function () {
	return /** @type{!Array<!proto.google.protobuf.Any>} */ (
		jspb.Message.getRepeatedWrapperField(this, google_protobuf_any_pb.Any, 3)
	);
};

/**
 * @param {!Array<!proto.google.protobuf.Any>} value
 * @return {!proto.google.rpc.Status} returns this
 */
proto.google.rpc.Status.prototype.setDetailsList = function (value) {
	return jspb.Message.setRepeatedWrapperField(this, 3, value);
};

/**
 * @param {!proto.google.protobuf.Any=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Any}
 */
proto.google.rpc.Status.prototype.addDetails = function (opt_value, opt_index) {
	return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.protobuf.Any, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.rpc.Status} returns this
 */
proto.google.rpc.Status.prototype.clearDetailsList = function () {
	return this.setDetailsList([]);
};

goog.object.extend(exports, proto.google.rpc);
