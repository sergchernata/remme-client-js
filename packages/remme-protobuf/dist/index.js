/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.AccountMethod = (function() {

    /**
     * Properties of an AccountMethod.
     * @exports IAccountMethod
     * @interface IAccountMethod
     */

    /**
     * Constructs a new AccountMethod.
     * @exports AccountMethod
     * @classdesc Represents an AccountMethod.
     * @implements IAccountMethod
     * @constructor
     * @param {IAccountMethod=} [properties] Properties to set
     */
    function AccountMethod(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new AccountMethod instance using the specified properties.
     * @function create
     * @memberof AccountMethod
     * @static
     * @param {IAccountMethod=} [properties] Properties to set
     * @returns {AccountMethod} AccountMethod instance
     */
    AccountMethod.create = function create(properties) {
        return new AccountMethod(properties);
    };

    /**
     * Encodes the specified AccountMethod message. Does not implicitly {@link AccountMethod.verify|verify} messages.
     * @function encode
     * @memberof AccountMethod
     * @static
     * @param {IAccountMethod} message AccountMethod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AccountMethod.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified AccountMethod message, length delimited. Does not implicitly {@link AccountMethod.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AccountMethod
     * @static
     * @param {IAccountMethod} message AccountMethod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AccountMethod.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AccountMethod message from the specified reader or buffer.
     * @function decode
     * @memberof AccountMethod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AccountMethod} AccountMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AccountMethod.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AccountMethod();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AccountMethod message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AccountMethod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AccountMethod} AccountMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AccountMethod.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AccountMethod message.
     * @function verify
     * @memberof AccountMethod
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AccountMethod.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates an AccountMethod message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AccountMethod
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AccountMethod} AccountMethod
     */
    AccountMethod.fromObject = function fromObject(object) {
        if (object instanceof $root.AccountMethod)
            return object;
        return new $root.AccountMethod();
    };

    /**
     * Creates a plain object from an AccountMethod message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AccountMethod
     * @static
     * @param {AccountMethod} message AccountMethod
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AccountMethod.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this AccountMethod to JSON.
     * @function toJSON
     * @memberof AccountMethod
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AccountMethod.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Method enum.
     * @name AccountMethod.Method
     * @enum {string}
     * @property {number} TRANSFER=0 TRANSFER value
     * @property {number} GENESIS=1 GENESIS value
     */
    AccountMethod.Method = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "TRANSFER"] = 0;
        values[valuesById[1] = "GENESIS"] = 1;
        return values;
    })();

    return AccountMethod;
})();

$root.TransferPayload = (function() {

    /**
     * Properties of a TransferPayload.
     * @exports ITransferPayload
     * @interface ITransferPayload
     * @property {string|null} [addressTo] TransferPayload addressTo
     * @property {number|Long|null} [value] TransferPayload value
     */

    /**
     * Constructs a new TransferPayload.
     * @exports TransferPayload
     * @classdesc Represents a TransferPayload.
     * @implements ITransferPayload
     * @constructor
     * @param {ITransferPayload=} [properties] Properties to set
     */
    function TransferPayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TransferPayload addressTo.
     * @member {string} addressTo
     * @memberof TransferPayload
     * @instance
     */
    TransferPayload.prototype.addressTo = "";

    /**
     * TransferPayload value.
     * @member {number|Long} value
     * @memberof TransferPayload
     * @instance
     */
    TransferPayload.prototype.value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new TransferPayload instance using the specified properties.
     * @function create
     * @memberof TransferPayload
     * @static
     * @param {ITransferPayload=} [properties] Properties to set
     * @returns {TransferPayload} TransferPayload instance
     */
    TransferPayload.create = function create(properties) {
        return new TransferPayload(properties);
    };

    /**
     * Encodes the specified TransferPayload message. Does not implicitly {@link TransferPayload.verify|verify} messages.
     * @function encode
     * @memberof TransferPayload
     * @static
     * @param {ITransferPayload} message TransferPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TransferPayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.addressTo != null && message.hasOwnProperty("addressTo"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.addressTo);
        if (message.value != null && message.hasOwnProperty("value"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.value);
        return writer;
    };

    /**
     * Encodes the specified TransferPayload message, length delimited. Does not implicitly {@link TransferPayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TransferPayload
     * @static
     * @param {ITransferPayload} message TransferPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TransferPayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TransferPayload message from the specified reader or buffer.
     * @function decode
     * @memberof TransferPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TransferPayload} TransferPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TransferPayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TransferPayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.addressTo = reader.string();
                break;
            case 2:
                message.value = reader.uint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TransferPayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TransferPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TransferPayload} TransferPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TransferPayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TransferPayload message.
     * @function verify
     * @memberof TransferPayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TransferPayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.addressTo != null && message.hasOwnProperty("addressTo"))
            if (!$util.isString(message.addressTo))
                return "addressTo: string expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                return "value: integer|Long expected";
        return null;
    };

    /**
     * Creates a TransferPayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TransferPayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TransferPayload} TransferPayload
     */
    TransferPayload.fromObject = function fromObject(object) {
        if (object instanceof $root.TransferPayload)
            return object;
        var message = new $root.TransferPayload();
        if (object.addressTo != null)
            message.addressTo = String(object.addressTo);
        if (object.value != null)
            if ($util.Long)
                (message.value = $util.Long.fromValue(object.value)).unsigned = true;
            else if (typeof object.value === "string")
                message.value = parseInt(object.value, 10);
            else if (typeof object.value === "number")
                message.value = object.value;
            else if (typeof object.value === "object")
                message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a TransferPayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TransferPayload
     * @static
     * @param {TransferPayload} message TransferPayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TransferPayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.addressTo = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.value = options.longs === String ? "0" : 0;
        }
        if (message.addressTo != null && message.hasOwnProperty("addressTo"))
            object.addressTo = message.addressTo;
        if (message.value != null && message.hasOwnProperty("value"))
            if (typeof message.value === "number")
                object.value = options.longs === String ? String(message.value) : message.value;
            else
                object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber(true) : message.value;
        return object;
    };

    /**
     * Converts this TransferPayload to JSON.
     * @function toJSON
     * @memberof TransferPayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TransferPayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TransferPayload;
})();

$root.GenesisPayload = (function() {

    /**
     * Properties of a GenesisPayload.
     * @exports IGenesisPayload
     * @interface IGenesisPayload
     * @property {number|Long|null} [totalSupply] GenesisPayload totalSupply
     */

    /**
     * Constructs a new GenesisPayload.
     * @exports GenesisPayload
     * @classdesc Represents a GenesisPayload.
     * @implements IGenesisPayload
     * @constructor
     * @param {IGenesisPayload=} [properties] Properties to set
     */
    function GenesisPayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GenesisPayload totalSupply.
     * @member {number|Long} totalSupply
     * @memberof GenesisPayload
     * @instance
     */
    GenesisPayload.prototype.totalSupply = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new GenesisPayload instance using the specified properties.
     * @function create
     * @memberof GenesisPayload
     * @static
     * @param {IGenesisPayload=} [properties] Properties to set
     * @returns {GenesisPayload} GenesisPayload instance
     */
    GenesisPayload.create = function create(properties) {
        return new GenesisPayload(properties);
    };

    /**
     * Encodes the specified GenesisPayload message. Does not implicitly {@link GenesisPayload.verify|verify} messages.
     * @function encode
     * @memberof GenesisPayload
     * @static
     * @param {IGenesisPayload} message GenesisPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GenesisPayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.totalSupply != null && message.hasOwnProperty("totalSupply"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.totalSupply);
        return writer;
    };

    /**
     * Encodes the specified GenesisPayload message, length delimited. Does not implicitly {@link GenesisPayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GenesisPayload
     * @static
     * @param {IGenesisPayload} message GenesisPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GenesisPayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GenesisPayload message from the specified reader or buffer.
     * @function decode
     * @memberof GenesisPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GenesisPayload} GenesisPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GenesisPayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GenesisPayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.totalSupply = reader.uint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GenesisPayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GenesisPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GenesisPayload} GenesisPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GenesisPayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GenesisPayload message.
     * @function verify
     * @memberof GenesisPayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GenesisPayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.totalSupply != null && message.hasOwnProperty("totalSupply"))
            if (!$util.isInteger(message.totalSupply) && !(message.totalSupply && $util.isInteger(message.totalSupply.low) && $util.isInteger(message.totalSupply.high)))
                return "totalSupply: integer|Long expected";
        return null;
    };

    /**
     * Creates a GenesisPayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GenesisPayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GenesisPayload} GenesisPayload
     */
    GenesisPayload.fromObject = function fromObject(object) {
        if (object instanceof $root.GenesisPayload)
            return object;
        var message = new $root.GenesisPayload();
        if (object.totalSupply != null)
            if ($util.Long)
                (message.totalSupply = $util.Long.fromValue(object.totalSupply)).unsigned = true;
            else if (typeof object.totalSupply === "string")
                message.totalSupply = parseInt(object.totalSupply, 10);
            else if (typeof object.totalSupply === "number")
                message.totalSupply = object.totalSupply;
            else if (typeof object.totalSupply === "object")
                message.totalSupply = new $util.LongBits(object.totalSupply.low >>> 0, object.totalSupply.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a GenesisPayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GenesisPayload
     * @static
     * @param {GenesisPayload} message GenesisPayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GenesisPayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.totalSupply = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.totalSupply = options.longs === String ? "0" : 0;
        if (message.totalSupply != null && message.hasOwnProperty("totalSupply"))
            if (typeof message.totalSupply === "number")
                object.totalSupply = options.longs === String ? String(message.totalSupply) : message.totalSupply;
            else
                object.totalSupply = options.longs === String ? $util.Long.prototype.toString.call(message.totalSupply) : options.longs === Number ? new $util.LongBits(message.totalSupply.low >>> 0, message.totalSupply.high >>> 0).toNumber(true) : message.totalSupply;
        return object;
    };

    /**
     * Converts this GenesisPayload to JSON.
     * @function toJSON
     * @memberof GenesisPayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GenesisPayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GenesisPayload;
})();

$root.Account = (function() {

    /**
     * Properties of an Account.
     * @exports IAccount
     * @interface IAccount
     * @property {number|Long|null} [balance] Account balance
     * @property {Array.<string>|null} [certificates] Account certificates
     */

    /**
     * Constructs a new Account.
     * @exports Account
     * @classdesc Represents an Account.
     * @implements IAccount
     * @constructor
     * @param {IAccount=} [properties] Properties to set
     */
    function Account(properties) {
        this.certificates = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Account balance.
     * @member {number|Long} balance
     * @memberof Account
     * @instance
     */
    Account.prototype.balance = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Account certificates.
     * @member {Array.<string>} certificates
     * @memberof Account
     * @instance
     */
    Account.prototype.certificates = $util.emptyArray;

    /**
     * Creates a new Account instance using the specified properties.
     * @function create
     * @memberof Account
     * @static
     * @param {IAccount=} [properties] Properties to set
     * @returns {Account} Account instance
     */
    Account.create = function create(properties) {
        return new Account(properties);
    };

    /**
     * Encodes the specified Account message. Does not implicitly {@link Account.verify|verify} messages.
     * @function encode
     * @memberof Account
     * @static
     * @param {IAccount} message Account message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Account.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.balance != null && message.hasOwnProperty("balance"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.balance);
        if (message.certificates != null && message.certificates.length)
            for (var i = 0; i < message.certificates.length; ++i)
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.certificates[i]);
        return writer;
    };

    /**
     * Encodes the specified Account message, length delimited. Does not implicitly {@link Account.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Account
     * @static
     * @param {IAccount} message Account message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Account.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Account message from the specified reader or buffer.
     * @function decode
     * @memberof Account
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Account} Account
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Account.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Account();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.balance = reader.uint64();
                break;
            case 2:
                if (!(message.certificates && message.certificates.length))
                    message.certificates = [];
                message.certificates.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Account message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Account
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Account} Account
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Account.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Account message.
     * @function verify
     * @memberof Account
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Account.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.balance != null && message.hasOwnProperty("balance"))
            if (!$util.isInteger(message.balance) && !(message.balance && $util.isInteger(message.balance.low) && $util.isInteger(message.balance.high)))
                return "balance: integer|Long expected";
        if (message.certificates != null && message.hasOwnProperty("certificates")) {
            if (!Array.isArray(message.certificates))
                return "certificates: array expected";
            for (var i = 0; i < message.certificates.length; ++i)
                if (!$util.isString(message.certificates[i]))
                    return "certificates: string[] expected";
        }
        return null;
    };

    /**
     * Creates an Account message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Account
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Account} Account
     */
    Account.fromObject = function fromObject(object) {
        if (object instanceof $root.Account)
            return object;
        var message = new $root.Account();
        if (object.balance != null)
            if ($util.Long)
                (message.balance = $util.Long.fromValue(object.balance)).unsigned = true;
            else if (typeof object.balance === "string")
                message.balance = parseInt(object.balance, 10);
            else if (typeof object.balance === "number")
                message.balance = object.balance;
            else if (typeof object.balance === "object")
                message.balance = new $util.LongBits(object.balance.low >>> 0, object.balance.high >>> 0).toNumber(true);
        if (object.certificates) {
            if (!Array.isArray(object.certificates))
                throw TypeError(".Account.certificates: array expected");
            message.certificates = [];
            for (var i = 0; i < object.certificates.length; ++i)
                message.certificates[i] = String(object.certificates[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from an Account message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Account
     * @static
     * @param {Account} message Account
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Account.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.certificates = [];
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.balance = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.balance = options.longs === String ? "0" : 0;
        if (message.balance != null && message.hasOwnProperty("balance"))
            if (typeof message.balance === "number")
                object.balance = options.longs === String ? String(message.balance) : message.balance;
            else
                object.balance = options.longs === String ? $util.Long.prototype.toString.call(message.balance) : options.longs === Number ? new $util.LongBits(message.balance.low >>> 0, message.balance.high >>> 0).toNumber(true) : message.balance;
        if (message.certificates && message.certificates.length) {
            object.certificates = [];
            for (var j = 0; j < message.certificates.length; ++j)
                object.certificates[j] = message.certificates[j];
        }
        return object;
    };

    /**
     * Converts this Account to JSON.
     * @function toJSON
     * @memberof Account
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Account.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Account;
})();

$root.GenesisStatus = (function() {

    /**
     * Properties of a GenesisStatus.
     * @exports IGenesisStatus
     * @interface IGenesisStatus
     * @property {boolean|null} [status] GenesisStatus status
     */

    /**
     * Constructs a new GenesisStatus.
     * @exports GenesisStatus
     * @classdesc Represents a GenesisStatus.
     * @implements IGenesisStatus
     * @constructor
     * @param {IGenesisStatus=} [properties] Properties to set
     */
    function GenesisStatus(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GenesisStatus status.
     * @member {boolean} status
     * @memberof GenesisStatus
     * @instance
     */
    GenesisStatus.prototype.status = false;

    /**
     * Creates a new GenesisStatus instance using the specified properties.
     * @function create
     * @memberof GenesisStatus
     * @static
     * @param {IGenesisStatus=} [properties] Properties to set
     * @returns {GenesisStatus} GenesisStatus instance
     */
    GenesisStatus.create = function create(properties) {
        return new GenesisStatus(properties);
    };

    /**
     * Encodes the specified GenesisStatus message. Does not implicitly {@link GenesisStatus.verify|verify} messages.
     * @function encode
     * @memberof GenesisStatus
     * @static
     * @param {IGenesisStatus} message GenesisStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GenesisStatus.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.status != null && message.hasOwnProperty("status"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.status);
        return writer;
    };

    /**
     * Encodes the specified GenesisStatus message, length delimited. Does not implicitly {@link GenesisStatus.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GenesisStatus
     * @static
     * @param {IGenesisStatus} message GenesisStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GenesisStatus.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GenesisStatus message from the specified reader or buffer.
     * @function decode
     * @memberof GenesisStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GenesisStatus} GenesisStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GenesisStatus.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GenesisStatus();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.status = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GenesisStatus message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GenesisStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GenesisStatus} GenesisStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GenesisStatus.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GenesisStatus message.
     * @function verify
     * @memberof GenesisStatus
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GenesisStatus.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (typeof message.status !== "boolean")
                return "status: boolean expected";
        return null;
    };

    /**
     * Creates a GenesisStatus message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GenesisStatus
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GenesisStatus} GenesisStatus
     */
    GenesisStatus.fromObject = function fromObject(object) {
        if (object instanceof $root.GenesisStatus)
            return object;
        var message = new $root.GenesisStatus();
        if (object.status != null)
            message.status = Boolean(object.status);
        return message;
    };

    /**
     * Creates a plain object from a GenesisStatus message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GenesisStatus
     * @static
     * @param {GenesisStatus} message GenesisStatus
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GenesisStatus.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.status = false;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this GenesisStatus to JSON.
     * @function toJSON
     * @memberof GenesisStatus
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GenesisStatus.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GenesisStatus;
})();

$root.AtomicSwapMethod = (function() {

    /**
     * Properties of an AtomicSwapMethod.
     * @exports IAtomicSwapMethod
     * @interface IAtomicSwapMethod
     */

    /**
     * Constructs a new AtomicSwapMethod.
     * @exports AtomicSwapMethod
     * @classdesc Represents an AtomicSwapMethod.
     * @implements IAtomicSwapMethod
     * @constructor
     * @param {IAtomicSwapMethod=} [properties] Properties to set
     */
    function AtomicSwapMethod(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new AtomicSwapMethod instance using the specified properties.
     * @function create
     * @memberof AtomicSwapMethod
     * @static
     * @param {IAtomicSwapMethod=} [properties] Properties to set
     * @returns {AtomicSwapMethod} AtomicSwapMethod instance
     */
    AtomicSwapMethod.create = function create(properties) {
        return new AtomicSwapMethod(properties);
    };

    /**
     * Encodes the specified AtomicSwapMethod message. Does not implicitly {@link AtomicSwapMethod.verify|verify} messages.
     * @function encode
     * @memberof AtomicSwapMethod
     * @static
     * @param {IAtomicSwapMethod} message AtomicSwapMethod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapMethod.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified AtomicSwapMethod message, length delimited. Does not implicitly {@link AtomicSwapMethod.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AtomicSwapMethod
     * @static
     * @param {IAtomicSwapMethod} message AtomicSwapMethod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapMethod.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AtomicSwapMethod message from the specified reader or buffer.
     * @function decode
     * @memberof AtomicSwapMethod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AtomicSwapMethod} AtomicSwapMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapMethod.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AtomicSwapMethod();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AtomicSwapMethod message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AtomicSwapMethod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AtomicSwapMethod} AtomicSwapMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapMethod.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AtomicSwapMethod message.
     * @function verify
     * @memberof AtomicSwapMethod
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AtomicSwapMethod.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates an AtomicSwapMethod message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AtomicSwapMethod
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AtomicSwapMethod} AtomicSwapMethod
     */
    AtomicSwapMethod.fromObject = function fromObject(object) {
        if (object instanceof $root.AtomicSwapMethod)
            return object;
        return new $root.AtomicSwapMethod();
    };

    /**
     * Creates a plain object from an AtomicSwapMethod message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AtomicSwapMethod
     * @static
     * @param {AtomicSwapMethod} message AtomicSwapMethod
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AtomicSwapMethod.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this AtomicSwapMethod to JSON.
     * @function toJSON
     * @memberof AtomicSwapMethod
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AtomicSwapMethod.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Method enum.
     * @name AtomicSwapMethod.Method
     * @enum {string}
     * @property {number} INIT=0 INIT value
     * @property {number} APPROVE=1 APPROVE value
     * @property {number} EXPIRE=2 EXPIRE value
     * @property {number} SET_SECRET_LOCK=3 SET_SECRET_LOCK value
     * @property {number} CLOSE=4 CLOSE value
     */
    AtomicSwapMethod.Method = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "INIT"] = 0;
        values[valuesById[1] = "APPROVE"] = 1;
        values[valuesById[2] = "EXPIRE"] = 2;
        values[valuesById[3] = "SET_SECRET_LOCK"] = 3;
        values[valuesById[4] = "CLOSE"] = 4;
        return values;
    })();

    return AtomicSwapMethod;
})();

$root.AtomicSwapInitPayload = (function() {

    /**
     * Properties of an AtomicSwapInitPayload.
     * @exports IAtomicSwapInitPayload
     * @interface IAtomicSwapInitPayload
     * @property {string|null} [receiverAddress] AtomicSwapInitPayload receiverAddress
     * @property {string|null} [senderAddressNonLocal] AtomicSwapInitPayload senderAddressNonLocal
     * @property {number|Long|null} [amount] AtomicSwapInitPayload amount
     * @property {string|null} [swapId] AtomicSwapInitPayload swapId
     * @property {string|null} [secretLockBySolicitor] AtomicSwapInitPayload secretLockBySolicitor
     * @property {string|null} [emailAddressEncryptedByInitiator] AtomicSwapInitPayload emailAddressEncryptedByInitiator
     * @property {number|null} [createdAt] AtomicSwapInitPayload createdAt
     */

    /**
     * Constructs a new AtomicSwapInitPayload.
     * @exports AtomicSwapInitPayload
     * @classdesc Represents an AtomicSwapInitPayload.
     * @implements IAtomicSwapInitPayload
     * @constructor
     * @param {IAtomicSwapInitPayload=} [properties] Properties to set
     */
    function AtomicSwapInitPayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AtomicSwapInitPayload receiverAddress.
     * @member {string} receiverAddress
     * @memberof AtomicSwapInitPayload
     * @instance
     */
    AtomicSwapInitPayload.prototype.receiverAddress = "";

    /**
     * AtomicSwapInitPayload senderAddressNonLocal.
     * @member {string} senderAddressNonLocal
     * @memberof AtomicSwapInitPayload
     * @instance
     */
    AtomicSwapInitPayload.prototype.senderAddressNonLocal = "";

    /**
     * AtomicSwapInitPayload amount.
     * @member {number|Long} amount
     * @memberof AtomicSwapInitPayload
     * @instance
     */
    AtomicSwapInitPayload.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * AtomicSwapInitPayload swapId.
     * @member {string} swapId
     * @memberof AtomicSwapInitPayload
     * @instance
     */
    AtomicSwapInitPayload.prototype.swapId = "";

    /**
     * AtomicSwapInitPayload secretLockBySolicitor.
     * @member {string} secretLockBySolicitor
     * @memberof AtomicSwapInitPayload
     * @instance
     */
    AtomicSwapInitPayload.prototype.secretLockBySolicitor = "";

    /**
     * AtomicSwapInitPayload emailAddressEncryptedByInitiator.
     * @member {string} emailAddressEncryptedByInitiator
     * @memberof AtomicSwapInitPayload
     * @instance
     */
    AtomicSwapInitPayload.prototype.emailAddressEncryptedByInitiator = "";

    /**
     * AtomicSwapInitPayload createdAt.
     * @member {number} createdAt
     * @memberof AtomicSwapInitPayload
     * @instance
     */
    AtomicSwapInitPayload.prototype.createdAt = 0;

    /**
     * Creates a new AtomicSwapInitPayload instance using the specified properties.
     * @function create
     * @memberof AtomicSwapInitPayload
     * @static
     * @param {IAtomicSwapInitPayload=} [properties] Properties to set
     * @returns {AtomicSwapInitPayload} AtomicSwapInitPayload instance
     */
    AtomicSwapInitPayload.create = function create(properties) {
        return new AtomicSwapInitPayload(properties);
    };

    /**
     * Encodes the specified AtomicSwapInitPayload message. Does not implicitly {@link AtomicSwapInitPayload.verify|verify} messages.
     * @function encode
     * @memberof AtomicSwapInitPayload
     * @static
     * @param {IAtomicSwapInitPayload} message AtomicSwapInitPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapInitPayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.receiverAddress != null && message.hasOwnProperty("receiverAddress"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.receiverAddress);
        if (message.amount != null && message.hasOwnProperty("amount"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.amount);
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.swapId);
        if (message.secretLockBySolicitor != null && message.hasOwnProperty("secretLockBySolicitor"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.secretLockBySolicitor);
        if (message.emailAddressEncryptedByInitiator != null && message.hasOwnProperty("emailAddressEncryptedByInitiator"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.emailAddressEncryptedByInitiator);
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.createdAt);
        if (message.senderAddressNonLocal != null && message.hasOwnProperty("senderAddressNonLocal"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.senderAddressNonLocal);
        return writer;
    };

    /**
     * Encodes the specified AtomicSwapInitPayload message, length delimited. Does not implicitly {@link AtomicSwapInitPayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AtomicSwapInitPayload
     * @static
     * @param {IAtomicSwapInitPayload} message AtomicSwapInitPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapInitPayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AtomicSwapInitPayload message from the specified reader or buffer.
     * @function decode
     * @memberof AtomicSwapInitPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AtomicSwapInitPayload} AtomicSwapInitPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapInitPayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AtomicSwapInitPayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.receiverAddress = reader.string();
                break;
            case 7:
                message.senderAddressNonLocal = reader.string();
                break;
            case 2:
                message.amount = reader.uint64();
                break;
            case 3:
                message.swapId = reader.string();
                break;
            case 4:
                message.secretLockBySolicitor = reader.string();
                break;
            case 5:
                message.emailAddressEncryptedByInitiator = reader.string();
                break;
            case 6:
                message.createdAt = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AtomicSwapInitPayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AtomicSwapInitPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AtomicSwapInitPayload} AtomicSwapInitPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapInitPayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AtomicSwapInitPayload message.
     * @function verify
     * @memberof AtomicSwapInitPayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AtomicSwapInitPayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.receiverAddress != null && message.hasOwnProperty("receiverAddress"))
            if (!$util.isString(message.receiverAddress))
                return "receiverAddress: string expected";
        if (message.senderAddressNonLocal != null && message.hasOwnProperty("senderAddressNonLocal"))
            if (!$util.isString(message.senderAddressNonLocal))
                return "senderAddressNonLocal: string expected";
        if (message.amount != null && message.hasOwnProperty("amount"))
            if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                return "amount: integer|Long expected";
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            if (!$util.isString(message.swapId))
                return "swapId: string expected";
        if (message.secretLockBySolicitor != null && message.hasOwnProperty("secretLockBySolicitor"))
            if (!$util.isString(message.secretLockBySolicitor))
                return "secretLockBySolicitor: string expected";
        if (message.emailAddressEncryptedByInitiator != null && message.hasOwnProperty("emailAddressEncryptedByInitiator"))
            if (!$util.isString(message.emailAddressEncryptedByInitiator))
                return "emailAddressEncryptedByInitiator: string expected";
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (!$util.isInteger(message.createdAt))
                return "createdAt: integer expected";
        return null;
    };

    /**
     * Creates an AtomicSwapInitPayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AtomicSwapInitPayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AtomicSwapInitPayload} AtomicSwapInitPayload
     */
    AtomicSwapInitPayload.fromObject = function fromObject(object) {
        if (object instanceof $root.AtomicSwapInitPayload)
            return object;
        var message = new $root.AtomicSwapInitPayload();
        if (object.receiverAddress != null)
            message.receiverAddress = String(object.receiverAddress);
        if (object.senderAddressNonLocal != null)
            message.senderAddressNonLocal = String(object.senderAddressNonLocal);
        if (object.amount != null)
            if ($util.Long)
                (message.amount = $util.Long.fromValue(object.amount)).unsigned = true;
            else if (typeof object.amount === "string")
                message.amount = parseInt(object.amount, 10);
            else if (typeof object.amount === "number")
                message.amount = object.amount;
            else if (typeof object.amount === "object")
                message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber(true);
        if (object.swapId != null)
            message.swapId = String(object.swapId);
        if (object.secretLockBySolicitor != null)
            message.secretLockBySolicitor = String(object.secretLockBySolicitor);
        if (object.emailAddressEncryptedByInitiator != null)
            message.emailAddressEncryptedByInitiator = String(object.emailAddressEncryptedByInitiator);
        if (object.createdAt != null)
            message.createdAt = object.createdAt >>> 0;
        return message;
    };

    /**
     * Creates a plain object from an AtomicSwapInitPayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AtomicSwapInitPayload
     * @static
     * @param {AtomicSwapInitPayload} message AtomicSwapInitPayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AtomicSwapInitPayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.receiverAddress = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.amount = options.longs === String ? "0" : 0;
            object.swapId = "";
            object.secretLockBySolicitor = "";
            object.emailAddressEncryptedByInitiator = "";
            object.createdAt = 0;
            object.senderAddressNonLocal = "";
        }
        if (message.receiverAddress != null && message.hasOwnProperty("receiverAddress"))
            object.receiverAddress = message.receiverAddress;
        if (message.amount != null && message.hasOwnProperty("amount"))
            if (typeof message.amount === "number")
                object.amount = options.longs === String ? String(message.amount) : message.amount;
            else
                object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber(true) : message.amount;
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            object.swapId = message.swapId;
        if (message.secretLockBySolicitor != null && message.hasOwnProperty("secretLockBySolicitor"))
            object.secretLockBySolicitor = message.secretLockBySolicitor;
        if (message.emailAddressEncryptedByInitiator != null && message.hasOwnProperty("emailAddressEncryptedByInitiator"))
            object.emailAddressEncryptedByInitiator = message.emailAddressEncryptedByInitiator;
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            object.createdAt = message.createdAt;
        if (message.senderAddressNonLocal != null && message.hasOwnProperty("senderAddressNonLocal"))
            object.senderAddressNonLocal = message.senderAddressNonLocal;
        return object;
    };

    /**
     * Converts this AtomicSwapInitPayload to JSON.
     * @function toJSON
     * @memberof AtomicSwapInitPayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AtomicSwapInitPayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AtomicSwapInitPayload;
})();

$root.AtomicSwapApprovePayload = (function() {

    /**
     * Properties of an AtomicSwapApprovePayload.
     * @exports IAtomicSwapApprovePayload
     * @interface IAtomicSwapApprovePayload
     * @property {string|null} [swapId] AtomicSwapApprovePayload swapId
     */

    /**
     * Constructs a new AtomicSwapApprovePayload.
     * @exports AtomicSwapApprovePayload
     * @classdesc Represents an AtomicSwapApprovePayload.
     * @implements IAtomicSwapApprovePayload
     * @constructor
     * @param {IAtomicSwapApprovePayload=} [properties] Properties to set
     */
    function AtomicSwapApprovePayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AtomicSwapApprovePayload swapId.
     * @member {string} swapId
     * @memberof AtomicSwapApprovePayload
     * @instance
     */
    AtomicSwapApprovePayload.prototype.swapId = "";

    /**
     * Creates a new AtomicSwapApprovePayload instance using the specified properties.
     * @function create
     * @memberof AtomicSwapApprovePayload
     * @static
     * @param {IAtomicSwapApprovePayload=} [properties] Properties to set
     * @returns {AtomicSwapApprovePayload} AtomicSwapApprovePayload instance
     */
    AtomicSwapApprovePayload.create = function create(properties) {
        return new AtomicSwapApprovePayload(properties);
    };

    /**
     * Encodes the specified AtomicSwapApprovePayload message. Does not implicitly {@link AtomicSwapApprovePayload.verify|verify} messages.
     * @function encode
     * @memberof AtomicSwapApprovePayload
     * @static
     * @param {IAtomicSwapApprovePayload} message AtomicSwapApprovePayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapApprovePayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.swapId);
        return writer;
    };

    /**
     * Encodes the specified AtomicSwapApprovePayload message, length delimited. Does not implicitly {@link AtomicSwapApprovePayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AtomicSwapApprovePayload
     * @static
     * @param {IAtomicSwapApprovePayload} message AtomicSwapApprovePayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapApprovePayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AtomicSwapApprovePayload message from the specified reader or buffer.
     * @function decode
     * @memberof AtomicSwapApprovePayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AtomicSwapApprovePayload} AtomicSwapApprovePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapApprovePayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AtomicSwapApprovePayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.swapId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AtomicSwapApprovePayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AtomicSwapApprovePayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AtomicSwapApprovePayload} AtomicSwapApprovePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapApprovePayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AtomicSwapApprovePayload message.
     * @function verify
     * @memberof AtomicSwapApprovePayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AtomicSwapApprovePayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            if (!$util.isString(message.swapId))
                return "swapId: string expected";
        return null;
    };

    /**
     * Creates an AtomicSwapApprovePayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AtomicSwapApprovePayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AtomicSwapApprovePayload} AtomicSwapApprovePayload
     */
    AtomicSwapApprovePayload.fromObject = function fromObject(object) {
        if (object instanceof $root.AtomicSwapApprovePayload)
            return object;
        var message = new $root.AtomicSwapApprovePayload();
        if (object.swapId != null)
            message.swapId = String(object.swapId);
        return message;
    };

    /**
     * Creates a plain object from an AtomicSwapApprovePayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AtomicSwapApprovePayload
     * @static
     * @param {AtomicSwapApprovePayload} message AtomicSwapApprovePayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AtomicSwapApprovePayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.swapId = "";
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            object.swapId = message.swapId;
        return object;
    };

    /**
     * Converts this AtomicSwapApprovePayload to JSON.
     * @function toJSON
     * @memberof AtomicSwapApprovePayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AtomicSwapApprovePayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AtomicSwapApprovePayload;
})();

$root.AtomicSwapExpirePayload = (function() {

    /**
     * Properties of an AtomicSwapExpirePayload.
     * @exports IAtomicSwapExpirePayload
     * @interface IAtomicSwapExpirePayload
     * @property {string|null} [swapId] AtomicSwapExpirePayload swapId
     */

    /**
     * Constructs a new AtomicSwapExpirePayload.
     * @exports AtomicSwapExpirePayload
     * @classdesc Represents an AtomicSwapExpirePayload.
     * @implements IAtomicSwapExpirePayload
     * @constructor
     * @param {IAtomicSwapExpirePayload=} [properties] Properties to set
     */
    function AtomicSwapExpirePayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AtomicSwapExpirePayload swapId.
     * @member {string} swapId
     * @memberof AtomicSwapExpirePayload
     * @instance
     */
    AtomicSwapExpirePayload.prototype.swapId = "";

    /**
     * Creates a new AtomicSwapExpirePayload instance using the specified properties.
     * @function create
     * @memberof AtomicSwapExpirePayload
     * @static
     * @param {IAtomicSwapExpirePayload=} [properties] Properties to set
     * @returns {AtomicSwapExpirePayload} AtomicSwapExpirePayload instance
     */
    AtomicSwapExpirePayload.create = function create(properties) {
        return new AtomicSwapExpirePayload(properties);
    };

    /**
     * Encodes the specified AtomicSwapExpirePayload message. Does not implicitly {@link AtomicSwapExpirePayload.verify|verify} messages.
     * @function encode
     * @memberof AtomicSwapExpirePayload
     * @static
     * @param {IAtomicSwapExpirePayload} message AtomicSwapExpirePayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapExpirePayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.swapId);
        return writer;
    };

    /**
     * Encodes the specified AtomicSwapExpirePayload message, length delimited. Does not implicitly {@link AtomicSwapExpirePayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AtomicSwapExpirePayload
     * @static
     * @param {IAtomicSwapExpirePayload} message AtomicSwapExpirePayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapExpirePayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AtomicSwapExpirePayload message from the specified reader or buffer.
     * @function decode
     * @memberof AtomicSwapExpirePayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AtomicSwapExpirePayload} AtomicSwapExpirePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapExpirePayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AtomicSwapExpirePayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.swapId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AtomicSwapExpirePayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AtomicSwapExpirePayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AtomicSwapExpirePayload} AtomicSwapExpirePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapExpirePayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AtomicSwapExpirePayload message.
     * @function verify
     * @memberof AtomicSwapExpirePayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AtomicSwapExpirePayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            if (!$util.isString(message.swapId))
                return "swapId: string expected";
        return null;
    };

    /**
     * Creates an AtomicSwapExpirePayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AtomicSwapExpirePayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AtomicSwapExpirePayload} AtomicSwapExpirePayload
     */
    AtomicSwapExpirePayload.fromObject = function fromObject(object) {
        if (object instanceof $root.AtomicSwapExpirePayload)
            return object;
        var message = new $root.AtomicSwapExpirePayload();
        if (object.swapId != null)
            message.swapId = String(object.swapId);
        return message;
    };

    /**
     * Creates a plain object from an AtomicSwapExpirePayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AtomicSwapExpirePayload
     * @static
     * @param {AtomicSwapExpirePayload} message AtomicSwapExpirePayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AtomicSwapExpirePayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.swapId = "";
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            object.swapId = message.swapId;
        return object;
    };

    /**
     * Converts this AtomicSwapExpirePayload to JSON.
     * @function toJSON
     * @memberof AtomicSwapExpirePayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AtomicSwapExpirePayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AtomicSwapExpirePayload;
})();

$root.AtomicSwapSetSecretLockPayload = (function() {

    /**
     * Properties of an AtomicSwapSetSecretLockPayload.
     * @exports IAtomicSwapSetSecretLockPayload
     * @interface IAtomicSwapSetSecretLockPayload
     * @property {string|null} [swapId] AtomicSwapSetSecretLockPayload swapId
     * @property {string|null} [secretLock] AtomicSwapSetSecretLockPayload secretLock
     */

    /**
     * Constructs a new AtomicSwapSetSecretLockPayload.
     * @exports AtomicSwapSetSecretLockPayload
     * @classdesc Represents an AtomicSwapSetSecretLockPayload.
     * @implements IAtomicSwapSetSecretLockPayload
     * @constructor
     * @param {IAtomicSwapSetSecretLockPayload=} [properties] Properties to set
     */
    function AtomicSwapSetSecretLockPayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AtomicSwapSetSecretLockPayload swapId.
     * @member {string} swapId
     * @memberof AtomicSwapSetSecretLockPayload
     * @instance
     */
    AtomicSwapSetSecretLockPayload.prototype.swapId = "";

    /**
     * AtomicSwapSetSecretLockPayload secretLock.
     * @member {string} secretLock
     * @memberof AtomicSwapSetSecretLockPayload
     * @instance
     */
    AtomicSwapSetSecretLockPayload.prototype.secretLock = "";

    /**
     * Creates a new AtomicSwapSetSecretLockPayload instance using the specified properties.
     * @function create
     * @memberof AtomicSwapSetSecretLockPayload
     * @static
     * @param {IAtomicSwapSetSecretLockPayload=} [properties] Properties to set
     * @returns {AtomicSwapSetSecretLockPayload} AtomicSwapSetSecretLockPayload instance
     */
    AtomicSwapSetSecretLockPayload.create = function create(properties) {
        return new AtomicSwapSetSecretLockPayload(properties);
    };

    /**
     * Encodes the specified AtomicSwapSetSecretLockPayload message. Does not implicitly {@link AtomicSwapSetSecretLockPayload.verify|verify} messages.
     * @function encode
     * @memberof AtomicSwapSetSecretLockPayload
     * @static
     * @param {IAtomicSwapSetSecretLockPayload} message AtomicSwapSetSecretLockPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapSetSecretLockPayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.swapId);
        if (message.secretLock != null && message.hasOwnProperty("secretLock"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.secretLock);
        return writer;
    };

    /**
     * Encodes the specified AtomicSwapSetSecretLockPayload message, length delimited. Does not implicitly {@link AtomicSwapSetSecretLockPayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AtomicSwapSetSecretLockPayload
     * @static
     * @param {IAtomicSwapSetSecretLockPayload} message AtomicSwapSetSecretLockPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapSetSecretLockPayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AtomicSwapSetSecretLockPayload message from the specified reader or buffer.
     * @function decode
     * @memberof AtomicSwapSetSecretLockPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AtomicSwapSetSecretLockPayload} AtomicSwapSetSecretLockPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapSetSecretLockPayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AtomicSwapSetSecretLockPayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.swapId = reader.string();
                break;
            case 2:
                message.secretLock = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AtomicSwapSetSecretLockPayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AtomicSwapSetSecretLockPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AtomicSwapSetSecretLockPayload} AtomicSwapSetSecretLockPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapSetSecretLockPayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AtomicSwapSetSecretLockPayload message.
     * @function verify
     * @memberof AtomicSwapSetSecretLockPayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AtomicSwapSetSecretLockPayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            if (!$util.isString(message.swapId))
                return "swapId: string expected";
        if (message.secretLock != null && message.hasOwnProperty("secretLock"))
            if (!$util.isString(message.secretLock))
                return "secretLock: string expected";
        return null;
    };

    /**
     * Creates an AtomicSwapSetSecretLockPayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AtomicSwapSetSecretLockPayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AtomicSwapSetSecretLockPayload} AtomicSwapSetSecretLockPayload
     */
    AtomicSwapSetSecretLockPayload.fromObject = function fromObject(object) {
        if (object instanceof $root.AtomicSwapSetSecretLockPayload)
            return object;
        var message = new $root.AtomicSwapSetSecretLockPayload();
        if (object.swapId != null)
            message.swapId = String(object.swapId);
        if (object.secretLock != null)
            message.secretLock = String(object.secretLock);
        return message;
    };

    /**
     * Creates a plain object from an AtomicSwapSetSecretLockPayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AtomicSwapSetSecretLockPayload
     * @static
     * @param {AtomicSwapSetSecretLockPayload} message AtomicSwapSetSecretLockPayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AtomicSwapSetSecretLockPayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.swapId = "";
            object.secretLock = "";
        }
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            object.swapId = message.swapId;
        if (message.secretLock != null && message.hasOwnProperty("secretLock"))
            object.secretLock = message.secretLock;
        return object;
    };

    /**
     * Converts this AtomicSwapSetSecretLockPayload to JSON.
     * @function toJSON
     * @memberof AtomicSwapSetSecretLockPayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AtomicSwapSetSecretLockPayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AtomicSwapSetSecretLockPayload;
})();

$root.AtomicSwapClosePayload = (function() {

    /**
     * Properties of an AtomicSwapClosePayload.
     * @exports IAtomicSwapClosePayload
     * @interface IAtomicSwapClosePayload
     * @property {string|null} [swapId] AtomicSwapClosePayload swapId
     * @property {string|null} [secretKey] AtomicSwapClosePayload secretKey
     */

    /**
     * Constructs a new AtomicSwapClosePayload.
     * @exports AtomicSwapClosePayload
     * @classdesc Represents an AtomicSwapClosePayload.
     * @implements IAtomicSwapClosePayload
     * @constructor
     * @param {IAtomicSwapClosePayload=} [properties] Properties to set
     */
    function AtomicSwapClosePayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AtomicSwapClosePayload swapId.
     * @member {string} swapId
     * @memberof AtomicSwapClosePayload
     * @instance
     */
    AtomicSwapClosePayload.prototype.swapId = "";

    /**
     * AtomicSwapClosePayload secretKey.
     * @member {string} secretKey
     * @memberof AtomicSwapClosePayload
     * @instance
     */
    AtomicSwapClosePayload.prototype.secretKey = "";

    /**
     * Creates a new AtomicSwapClosePayload instance using the specified properties.
     * @function create
     * @memberof AtomicSwapClosePayload
     * @static
     * @param {IAtomicSwapClosePayload=} [properties] Properties to set
     * @returns {AtomicSwapClosePayload} AtomicSwapClosePayload instance
     */
    AtomicSwapClosePayload.create = function create(properties) {
        return new AtomicSwapClosePayload(properties);
    };

    /**
     * Encodes the specified AtomicSwapClosePayload message. Does not implicitly {@link AtomicSwapClosePayload.verify|verify} messages.
     * @function encode
     * @memberof AtomicSwapClosePayload
     * @static
     * @param {IAtomicSwapClosePayload} message AtomicSwapClosePayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapClosePayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.swapId);
        if (message.secretKey != null && message.hasOwnProperty("secretKey"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.secretKey);
        return writer;
    };

    /**
     * Encodes the specified AtomicSwapClosePayload message, length delimited. Does not implicitly {@link AtomicSwapClosePayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AtomicSwapClosePayload
     * @static
     * @param {IAtomicSwapClosePayload} message AtomicSwapClosePayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapClosePayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AtomicSwapClosePayload message from the specified reader or buffer.
     * @function decode
     * @memberof AtomicSwapClosePayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AtomicSwapClosePayload} AtomicSwapClosePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapClosePayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AtomicSwapClosePayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.swapId = reader.string();
                break;
            case 2:
                message.secretKey = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AtomicSwapClosePayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AtomicSwapClosePayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AtomicSwapClosePayload} AtomicSwapClosePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapClosePayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AtomicSwapClosePayload message.
     * @function verify
     * @memberof AtomicSwapClosePayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AtomicSwapClosePayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            if (!$util.isString(message.swapId))
                return "swapId: string expected";
        if (message.secretKey != null && message.hasOwnProperty("secretKey"))
            if (!$util.isString(message.secretKey))
                return "secretKey: string expected";
        return null;
    };

    /**
     * Creates an AtomicSwapClosePayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AtomicSwapClosePayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AtomicSwapClosePayload} AtomicSwapClosePayload
     */
    AtomicSwapClosePayload.fromObject = function fromObject(object) {
        if (object instanceof $root.AtomicSwapClosePayload)
            return object;
        var message = new $root.AtomicSwapClosePayload();
        if (object.swapId != null)
            message.swapId = String(object.swapId);
        if (object.secretKey != null)
            message.secretKey = String(object.secretKey);
        return message;
    };

    /**
     * Creates a plain object from an AtomicSwapClosePayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AtomicSwapClosePayload
     * @static
     * @param {AtomicSwapClosePayload} message AtomicSwapClosePayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AtomicSwapClosePayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.swapId = "";
            object.secretKey = "";
        }
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            object.swapId = message.swapId;
        if (message.secretKey != null && message.hasOwnProperty("secretKey"))
            object.secretKey = message.secretKey;
        return object;
    };

    /**
     * Converts this AtomicSwapClosePayload to JSON.
     * @function toJSON
     * @memberof AtomicSwapClosePayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AtomicSwapClosePayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AtomicSwapClosePayload;
})();

$root.AtomicSwapInfo = (function() {

    /**
     * Properties of an AtomicSwapInfo.
     * @exports IAtomicSwapInfo
     * @interface IAtomicSwapInfo
     * @property {boolean|null} [isClosed] AtomicSwapInfo isClosed
     * @property {boolean|null} [isApproved] AtomicSwapInfo isApproved
     * @property {string|null} [senderAddress] AtomicSwapInfo senderAddress
     * @property {string|null} [senderAddressNonLocal] AtomicSwapInfo senderAddressNonLocal
     * @property {string|null} [receiverAddress] AtomicSwapInfo receiverAddress
     * @property {number|Long|null} [amount] AtomicSwapInfo amount
     * @property {string|null} [emailAddressEncryptedOptional] AtomicSwapInfo emailAddressEncryptedOptional
     * @property {string|null} [swapId] AtomicSwapInfo swapId
     * @property {string|null} [secretLock] AtomicSwapInfo secretLock
     * @property {string|null} [secretKey] AtomicSwapInfo secretKey
     * @property {number|null} [createdAt] AtomicSwapInfo createdAt
     * @property {boolean|null} [isInitiator] AtomicSwapInfo isInitiator
     */

    /**
     * Constructs a new AtomicSwapInfo.
     * @exports AtomicSwapInfo
     * @classdesc Represents an AtomicSwapInfo.
     * @implements IAtomicSwapInfo
     * @constructor
     * @param {IAtomicSwapInfo=} [properties] Properties to set
     */
    function AtomicSwapInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AtomicSwapInfo isClosed.
     * @member {boolean} isClosed
     * @memberof AtomicSwapInfo
     * @instance
     */
    AtomicSwapInfo.prototype.isClosed = false;

    /**
     * AtomicSwapInfo isApproved.
     * @member {boolean} isApproved
     * @memberof AtomicSwapInfo
     * @instance
     */
    AtomicSwapInfo.prototype.isApproved = false;

    /**
     * AtomicSwapInfo senderAddress.
     * @member {string} senderAddress
     * @memberof AtomicSwapInfo
     * @instance
     */
    AtomicSwapInfo.prototype.senderAddress = "";

    /**
     * AtomicSwapInfo senderAddressNonLocal.
     * @member {string} senderAddressNonLocal
     * @memberof AtomicSwapInfo
     * @instance
     */
    AtomicSwapInfo.prototype.senderAddressNonLocal = "";

    /**
     * AtomicSwapInfo receiverAddress.
     * @member {string} receiverAddress
     * @memberof AtomicSwapInfo
     * @instance
     */
    AtomicSwapInfo.prototype.receiverAddress = "";

    /**
     * AtomicSwapInfo amount.
     * @member {number|Long} amount
     * @memberof AtomicSwapInfo
     * @instance
     */
    AtomicSwapInfo.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * AtomicSwapInfo emailAddressEncryptedOptional.
     * @member {string} emailAddressEncryptedOptional
     * @memberof AtomicSwapInfo
     * @instance
     */
    AtomicSwapInfo.prototype.emailAddressEncryptedOptional = "";

    /**
     * AtomicSwapInfo swapId.
     * @member {string} swapId
     * @memberof AtomicSwapInfo
     * @instance
     */
    AtomicSwapInfo.prototype.swapId = "";

    /**
     * AtomicSwapInfo secretLock.
     * @member {string} secretLock
     * @memberof AtomicSwapInfo
     * @instance
     */
    AtomicSwapInfo.prototype.secretLock = "";

    /**
     * AtomicSwapInfo secretKey.
     * @member {string} secretKey
     * @memberof AtomicSwapInfo
     * @instance
     */
    AtomicSwapInfo.prototype.secretKey = "";

    /**
     * AtomicSwapInfo createdAt.
     * @member {number} createdAt
     * @memberof AtomicSwapInfo
     * @instance
     */
    AtomicSwapInfo.prototype.createdAt = 0;

    /**
     * AtomicSwapInfo isInitiator.
     * @member {boolean} isInitiator
     * @memberof AtomicSwapInfo
     * @instance
     */
    AtomicSwapInfo.prototype.isInitiator = false;

    /**
     * Creates a new AtomicSwapInfo instance using the specified properties.
     * @function create
     * @memberof AtomicSwapInfo
     * @static
     * @param {IAtomicSwapInfo=} [properties] Properties to set
     * @returns {AtomicSwapInfo} AtomicSwapInfo instance
     */
    AtomicSwapInfo.create = function create(properties) {
        return new AtomicSwapInfo(properties);
    };

    /**
     * Encodes the specified AtomicSwapInfo message. Does not implicitly {@link AtomicSwapInfo.verify|verify} messages.
     * @function encode
     * @memberof AtomicSwapInfo
     * @static
     * @param {IAtomicSwapInfo} message AtomicSwapInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.isClosed != null && message.hasOwnProperty("isClosed"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isClosed);
        if (message.senderAddress != null && message.hasOwnProperty("senderAddress"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.senderAddress);
        if (message.receiverAddress != null && message.hasOwnProperty("receiverAddress"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.receiverAddress);
        if (message.amount != null && message.hasOwnProperty("amount"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.amount);
        if (message.emailAddressEncryptedOptional != null && message.hasOwnProperty("emailAddressEncryptedOptional"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.emailAddressEncryptedOptional);
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.swapId);
        if (message.secretLock != null && message.hasOwnProperty("secretLock"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.secretLock);
        if (message.secretKey != null && message.hasOwnProperty("secretKey"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.secretKey);
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.createdAt);
        if (message.isInitiator != null && message.hasOwnProperty("isInitiator"))
            writer.uint32(/* id 10, wireType 0 =*/80).bool(message.isInitiator);
        if (message.isApproved != null && message.hasOwnProperty("isApproved"))
            writer.uint32(/* id 11, wireType 0 =*/88).bool(message.isApproved);
        if (message.senderAddressNonLocal != null && message.hasOwnProperty("senderAddressNonLocal"))
            writer.uint32(/* id 12, wireType 2 =*/98).string(message.senderAddressNonLocal);
        return writer;
    };

    /**
     * Encodes the specified AtomicSwapInfo message, length delimited. Does not implicitly {@link AtomicSwapInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AtomicSwapInfo
     * @static
     * @param {IAtomicSwapInfo} message AtomicSwapInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AtomicSwapInfo message from the specified reader or buffer.
     * @function decode
     * @memberof AtomicSwapInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AtomicSwapInfo} AtomicSwapInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AtomicSwapInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.isClosed = reader.bool();
                break;
            case 11:
                message.isApproved = reader.bool();
                break;
            case 2:
                message.senderAddress = reader.string();
                break;
            case 12:
                message.senderAddressNonLocal = reader.string();
                break;
            case 3:
                message.receiverAddress = reader.string();
                break;
            case 4:
                message.amount = reader.uint64();
                break;
            case 5:
                message.emailAddressEncryptedOptional = reader.string();
                break;
            case 6:
                message.swapId = reader.string();
                break;
            case 7:
                message.secretLock = reader.string();
                break;
            case 8:
                message.secretKey = reader.string();
                break;
            case 9:
                message.createdAt = reader.uint32();
                break;
            case 10:
                message.isInitiator = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AtomicSwapInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AtomicSwapInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AtomicSwapInfo} AtomicSwapInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AtomicSwapInfo message.
     * @function verify
     * @memberof AtomicSwapInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AtomicSwapInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.isClosed != null && message.hasOwnProperty("isClosed"))
            if (typeof message.isClosed !== "boolean")
                return "isClosed: boolean expected";
        if (message.isApproved != null && message.hasOwnProperty("isApproved"))
            if (typeof message.isApproved !== "boolean")
                return "isApproved: boolean expected";
        if (message.senderAddress != null && message.hasOwnProperty("senderAddress"))
            if (!$util.isString(message.senderAddress))
                return "senderAddress: string expected";
        if (message.senderAddressNonLocal != null && message.hasOwnProperty("senderAddressNonLocal"))
            if (!$util.isString(message.senderAddressNonLocal))
                return "senderAddressNonLocal: string expected";
        if (message.receiverAddress != null && message.hasOwnProperty("receiverAddress"))
            if (!$util.isString(message.receiverAddress))
                return "receiverAddress: string expected";
        if (message.amount != null && message.hasOwnProperty("amount"))
            if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                return "amount: integer|Long expected";
        if (message.emailAddressEncryptedOptional != null && message.hasOwnProperty("emailAddressEncryptedOptional"))
            if (!$util.isString(message.emailAddressEncryptedOptional))
                return "emailAddressEncryptedOptional: string expected";
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            if (!$util.isString(message.swapId))
                return "swapId: string expected";
        if (message.secretLock != null && message.hasOwnProperty("secretLock"))
            if (!$util.isString(message.secretLock))
                return "secretLock: string expected";
        if (message.secretKey != null && message.hasOwnProperty("secretKey"))
            if (!$util.isString(message.secretKey))
                return "secretKey: string expected";
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (!$util.isInteger(message.createdAt))
                return "createdAt: integer expected";
        if (message.isInitiator != null && message.hasOwnProperty("isInitiator"))
            if (typeof message.isInitiator !== "boolean")
                return "isInitiator: boolean expected";
        return null;
    };

    /**
     * Creates an AtomicSwapInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AtomicSwapInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AtomicSwapInfo} AtomicSwapInfo
     */
    AtomicSwapInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.AtomicSwapInfo)
            return object;
        var message = new $root.AtomicSwapInfo();
        if (object.isClosed != null)
            message.isClosed = Boolean(object.isClosed);
        if (object.isApproved != null)
            message.isApproved = Boolean(object.isApproved);
        if (object.senderAddress != null)
            message.senderAddress = String(object.senderAddress);
        if (object.senderAddressNonLocal != null)
            message.senderAddressNonLocal = String(object.senderAddressNonLocal);
        if (object.receiverAddress != null)
            message.receiverAddress = String(object.receiverAddress);
        if (object.amount != null)
            if ($util.Long)
                (message.amount = $util.Long.fromValue(object.amount)).unsigned = true;
            else if (typeof object.amount === "string")
                message.amount = parseInt(object.amount, 10);
            else if (typeof object.amount === "number")
                message.amount = object.amount;
            else if (typeof object.amount === "object")
                message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber(true);
        if (object.emailAddressEncryptedOptional != null)
            message.emailAddressEncryptedOptional = String(object.emailAddressEncryptedOptional);
        if (object.swapId != null)
            message.swapId = String(object.swapId);
        if (object.secretLock != null)
            message.secretLock = String(object.secretLock);
        if (object.secretKey != null)
            message.secretKey = String(object.secretKey);
        if (object.createdAt != null)
            message.createdAt = object.createdAt >>> 0;
        if (object.isInitiator != null)
            message.isInitiator = Boolean(object.isInitiator);
        return message;
    };

    /**
     * Creates a plain object from an AtomicSwapInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AtomicSwapInfo
     * @static
     * @param {AtomicSwapInfo} message AtomicSwapInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AtomicSwapInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.isClosed = false;
            object.senderAddress = "";
            object.receiverAddress = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.amount = options.longs === String ? "0" : 0;
            object.emailAddressEncryptedOptional = "";
            object.swapId = "";
            object.secretLock = "";
            object.secretKey = "";
            object.createdAt = 0;
            object.isInitiator = false;
            object.isApproved = false;
            object.senderAddressNonLocal = "";
        }
        if (message.isClosed != null && message.hasOwnProperty("isClosed"))
            object.isClosed = message.isClosed;
        if (message.senderAddress != null && message.hasOwnProperty("senderAddress"))
            object.senderAddress = message.senderAddress;
        if (message.receiverAddress != null && message.hasOwnProperty("receiverAddress"))
            object.receiverAddress = message.receiverAddress;
        if (message.amount != null && message.hasOwnProperty("amount"))
            if (typeof message.amount === "number")
                object.amount = options.longs === String ? String(message.amount) : message.amount;
            else
                object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber(true) : message.amount;
        if (message.emailAddressEncryptedOptional != null && message.hasOwnProperty("emailAddressEncryptedOptional"))
            object.emailAddressEncryptedOptional = message.emailAddressEncryptedOptional;
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            object.swapId = message.swapId;
        if (message.secretLock != null && message.hasOwnProperty("secretLock"))
            object.secretLock = message.secretLock;
        if (message.secretKey != null && message.hasOwnProperty("secretKey"))
            object.secretKey = message.secretKey;
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            object.createdAt = message.createdAt;
        if (message.isInitiator != null && message.hasOwnProperty("isInitiator"))
            object.isInitiator = message.isInitiator;
        if (message.isApproved != null && message.hasOwnProperty("isApproved"))
            object.isApproved = message.isApproved;
        if (message.senderAddressNonLocal != null && message.hasOwnProperty("senderAddressNonLocal"))
            object.senderAddressNonLocal = message.senderAddressNonLocal;
        return object;
    };

    /**
     * Converts this AtomicSwapInfo to JSON.
     * @function toJSON
     * @memberof AtomicSwapInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AtomicSwapInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AtomicSwapInfo;
})();

$root.CertificateMethod = (function() {

    /**
     * Properties of a CertificateMethod.
     * @exports ICertificateMethod
     * @interface ICertificateMethod
     */

    /**
     * Constructs a new CertificateMethod.
     * @exports CertificateMethod
     * @classdesc Represents a CertificateMethod.
     * @implements ICertificateMethod
     * @constructor
     * @param {ICertificateMethod=} [properties] Properties to set
     */
    function CertificateMethod(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new CertificateMethod instance using the specified properties.
     * @function create
     * @memberof CertificateMethod
     * @static
     * @param {ICertificateMethod=} [properties] Properties to set
     * @returns {CertificateMethod} CertificateMethod instance
     */
    CertificateMethod.create = function create(properties) {
        return new CertificateMethod(properties);
    };

    /**
     * Encodes the specified CertificateMethod message. Does not implicitly {@link CertificateMethod.verify|verify} messages.
     * @function encode
     * @memberof CertificateMethod
     * @static
     * @param {ICertificateMethod} message CertificateMethod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CertificateMethod.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified CertificateMethod message, length delimited. Does not implicitly {@link CertificateMethod.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CertificateMethod
     * @static
     * @param {ICertificateMethod} message CertificateMethod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CertificateMethod.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CertificateMethod message from the specified reader or buffer.
     * @function decode
     * @memberof CertificateMethod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CertificateMethod} CertificateMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CertificateMethod.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CertificateMethod();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CertificateMethod message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CertificateMethod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CertificateMethod} CertificateMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CertificateMethod.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CertificateMethod message.
     * @function verify
     * @memberof CertificateMethod
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CertificateMethod.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a CertificateMethod message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CertificateMethod
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CertificateMethod} CertificateMethod
     */
    CertificateMethod.fromObject = function fromObject(object) {
        if (object instanceof $root.CertificateMethod)
            return object;
        return new $root.CertificateMethod();
    };

    /**
     * Creates a plain object from a CertificateMethod message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CertificateMethod
     * @static
     * @param {CertificateMethod} message CertificateMethod
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CertificateMethod.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this CertificateMethod to JSON.
     * @function toJSON
     * @memberof CertificateMethod
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CertificateMethod.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Method enum.
     * @name CertificateMethod.Method
     * @enum {string}
     * @property {number} STORE=0 STORE value
     * @property {number} REVOKE=1 REVOKE value
     */
    CertificateMethod.Method = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "STORE"] = 0;
        values[valuesById[1] = "REVOKE"] = 1;
        return values;
    })();

    return CertificateMethod;
})();

$root.NewCertificatePayload = (function() {

    /**
     * Properties of a NewCertificatePayload.
     * @exports INewCertificatePayload
     * @interface INewCertificatePayload
     * @property {string|null} [certificateRaw] NewCertificatePayload certificateRaw
     * @property {string|null} [signatureRem] NewCertificatePayload signatureRem
     * @property {string|null} [signatureCrt] NewCertificatePayload signatureCrt
     * @property {string|null} [certSignerPublicKey] NewCertificatePayload certSignerPublicKey
     */

    /**
     * Constructs a new NewCertificatePayload.
     * @exports NewCertificatePayload
     * @classdesc Represents a NewCertificatePayload.
     * @implements INewCertificatePayload
     * @constructor
     * @param {INewCertificatePayload=} [properties] Properties to set
     */
    function NewCertificatePayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * NewCertificatePayload certificateRaw.
     * @member {string} certificateRaw
     * @memberof NewCertificatePayload
     * @instance
     */
    NewCertificatePayload.prototype.certificateRaw = "";

    /**
     * NewCertificatePayload signatureRem.
     * @member {string} signatureRem
     * @memberof NewCertificatePayload
     * @instance
     */
    NewCertificatePayload.prototype.signatureRem = "";

    /**
     * NewCertificatePayload signatureCrt.
     * @member {string} signatureCrt
     * @memberof NewCertificatePayload
     * @instance
     */
    NewCertificatePayload.prototype.signatureCrt = "";

    /**
     * NewCertificatePayload certSignerPublicKey.
     * @member {string} certSignerPublicKey
     * @memberof NewCertificatePayload
     * @instance
     */
    NewCertificatePayload.prototype.certSignerPublicKey = "";

    /**
     * Creates a new NewCertificatePayload instance using the specified properties.
     * @function create
     * @memberof NewCertificatePayload
     * @static
     * @param {INewCertificatePayload=} [properties] Properties to set
     * @returns {NewCertificatePayload} NewCertificatePayload instance
     */
    NewCertificatePayload.create = function create(properties) {
        return new NewCertificatePayload(properties);
    };

    /**
     * Encodes the specified NewCertificatePayload message. Does not implicitly {@link NewCertificatePayload.verify|verify} messages.
     * @function encode
     * @memberof NewCertificatePayload
     * @static
     * @param {INewCertificatePayload} message NewCertificatePayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NewCertificatePayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.certificateRaw != null && message.hasOwnProperty("certificateRaw"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.certificateRaw);
        if (message.signatureRem != null && message.hasOwnProperty("signatureRem"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.signatureRem);
        if (message.signatureCrt != null && message.hasOwnProperty("signatureCrt"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.signatureCrt);
        if (message.certSignerPublicKey != null && message.hasOwnProperty("certSignerPublicKey"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.certSignerPublicKey);
        return writer;
    };

    /**
     * Encodes the specified NewCertificatePayload message, length delimited. Does not implicitly {@link NewCertificatePayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NewCertificatePayload
     * @static
     * @param {INewCertificatePayload} message NewCertificatePayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NewCertificatePayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NewCertificatePayload message from the specified reader or buffer.
     * @function decode
     * @memberof NewCertificatePayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NewCertificatePayload} NewCertificatePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NewCertificatePayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NewCertificatePayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.certificateRaw = reader.string();
                break;
            case 2:
                message.signatureRem = reader.string();
                break;
            case 3:
                message.signatureCrt = reader.string();
                break;
            case 4:
                message.certSignerPublicKey = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a NewCertificatePayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NewCertificatePayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NewCertificatePayload} NewCertificatePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NewCertificatePayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NewCertificatePayload message.
     * @function verify
     * @memberof NewCertificatePayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NewCertificatePayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.certificateRaw != null && message.hasOwnProperty("certificateRaw"))
            if (!$util.isString(message.certificateRaw))
                return "certificateRaw: string expected";
        if (message.signatureRem != null && message.hasOwnProperty("signatureRem"))
            if (!$util.isString(message.signatureRem))
                return "signatureRem: string expected";
        if (message.signatureCrt != null && message.hasOwnProperty("signatureCrt"))
            if (!$util.isString(message.signatureCrt))
                return "signatureCrt: string expected";
        if (message.certSignerPublicKey != null && message.hasOwnProperty("certSignerPublicKey"))
            if (!$util.isString(message.certSignerPublicKey))
                return "certSignerPublicKey: string expected";
        return null;
    };

    /**
     * Creates a NewCertificatePayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NewCertificatePayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NewCertificatePayload} NewCertificatePayload
     */
    NewCertificatePayload.fromObject = function fromObject(object) {
        if (object instanceof $root.NewCertificatePayload)
            return object;
        var message = new $root.NewCertificatePayload();
        if (object.certificateRaw != null)
            message.certificateRaw = String(object.certificateRaw);
        if (object.signatureRem != null)
            message.signatureRem = String(object.signatureRem);
        if (object.signatureCrt != null)
            message.signatureCrt = String(object.signatureCrt);
        if (object.certSignerPublicKey != null)
            message.certSignerPublicKey = String(object.certSignerPublicKey);
        return message;
    };

    /**
     * Creates a plain object from a NewCertificatePayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NewCertificatePayload
     * @static
     * @param {NewCertificatePayload} message NewCertificatePayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NewCertificatePayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.certificateRaw = "";
            object.signatureRem = "";
            object.signatureCrt = "";
            object.certSignerPublicKey = "";
        }
        if (message.certificateRaw != null && message.hasOwnProperty("certificateRaw"))
            object.certificateRaw = message.certificateRaw;
        if (message.signatureRem != null && message.hasOwnProperty("signatureRem"))
            object.signatureRem = message.signatureRem;
        if (message.signatureCrt != null && message.hasOwnProperty("signatureCrt"))
            object.signatureCrt = message.signatureCrt;
        if (message.certSignerPublicKey != null && message.hasOwnProperty("certSignerPublicKey"))
            object.certSignerPublicKey = message.certSignerPublicKey;
        return object;
    };

    /**
     * Converts this NewCertificatePayload to JSON.
     * @function toJSON
     * @memberof NewCertificatePayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NewCertificatePayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return NewCertificatePayload;
})();

$root.RevokeCertificatePayload = (function() {

    /**
     * Properties of a RevokeCertificatePayload.
     * @exports IRevokeCertificatePayload
     * @interface IRevokeCertificatePayload
     * @property {string|null} [address] RevokeCertificatePayload address
     */

    /**
     * Constructs a new RevokeCertificatePayload.
     * @exports RevokeCertificatePayload
     * @classdesc Represents a RevokeCertificatePayload.
     * @implements IRevokeCertificatePayload
     * @constructor
     * @param {IRevokeCertificatePayload=} [properties] Properties to set
     */
    function RevokeCertificatePayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RevokeCertificatePayload address.
     * @member {string} address
     * @memberof RevokeCertificatePayload
     * @instance
     */
    RevokeCertificatePayload.prototype.address = "";

    /**
     * Creates a new RevokeCertificatePayload instance using the specified properties.
     * @function create
     * @memberof RevokeCertificatePayload
     * @static
     * @param {IRevokeCertificatePayload=} [properties] Properties to set
     * @returns {RevokeCertificatePayload} RevokeCertificatePayload instance
     */
    RevokeCertificatePayload.create = function create(properties) {
        return new RevokeCertificatePayload(properties);
    };

    /**
     * Encodes the specified RevokeCertificatePayload message. Does not implicitly {@link RevokeCertificatePayload.verify|verify} messages.
     * @function encode
     * @memberof RevokeCertificatePayload
     * @static
     * @param {IRevokeCertificatePayload} message RevokeCertificatePayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RevokeCertificatePayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.address != null && message.hasOwnProperty("address"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.address);
        return writer;
    };

    /**
     * Encodes the specified RevokeCertificatePayload message, length delimited. Does not implicitly {@link RevokeCertificatePayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RevokeCertificatePayload
     * @static
     * @param {IRevokeCertificatePayload} message RevokeCertificatePayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RevokeCertificatePayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RevokeCertificatePayload message from the specified reader or buffer.
     * @function decode
     * @memberof RevokeCertificatePayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RevokeCertificatePayload} RevokeCertificatePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RevokeCertificatePayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RevokeCertificatePayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.address = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RevokeCertificatePayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RevokeCertificatePayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RevokeCertificatePayload} RevokeCertificatePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RevokeCertificatePayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RevokeCertificatePayload message.
     * @function verify
     * @memberof RevokeCertificatePayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RevokeCertificatePayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.address != null && message.hasOwnProperty("address"))
            if (!$util.isString(message.address))
                return "address: string expected";
        return null;
    };

    /**
     * Creates a RevokeCertificatePayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RevokeCertificatePayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RevokeCertificatePayload} RevokeCertificatePayload
     */
    RevokeCertificatePayload.fromObject = function fromObject(object) {
        if (object instanceof $root.RevokeCertificatePayload)
            return object;
        var message = new $root.RevokeCertificatePayload();
        if (object.address != null)
            message.address = String(object.address);
        return message;
    };

    /**
     * Creates a plain object from a RevokeCertificatePayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RevokeCertificatePayload
     * @static
     * @param {RevokeCertificatePayload} message RevokeCertificatePayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RevokeCertificatePayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.address = "";
        if (message.address != null && message.hasOwnProperty("address"))
            object.address = message.address;
        return object;
    };

    /**
     * Converts this RevokeCertificatePayload to JSON.
     * @function toJSON
     * @memberof RevokeCertificatePayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RevokeCertificatePayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RevokeCertificatePayload;
})();

$root.CertificateStorage = (function() {

    /**
     * Properties of a CertificateStorage.
     * @exports ICertificateStorage
     * @interface ICertificateStorage
     * @property {string|null} [hash] CertificateStorage hash
     * @property {string|null} [owner] CertificateStorage owner
     * @property {boolean|null} [revoked] CertificateStorage revoked
     */

    /**
     * Constructs a new CertificateStorage.
     * @exports CertificateStorage
     * @classdesc Represents a CertificateStorage.
     * @implements ICertificateStorage
     * @constructor
     * @param {ICertificateStorage=} [properties] Properties to set
     */
    function CertificateStorage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CertificateStorage hash.
     * @member {string} hash
     * @memberof CertificateStorage
     * @instance
     */
    CertificateStorage.prototype.hash = "";

    /**
     * CertificateStorage owner.
     * @member {string} owner
     * @memberof CertificateStorage
     * @instance
     */
    CertificateStorage.prototype.owner = "";

    /**
     * CertificateStorage revoked.
     * @member {boolean} revoked
     * @memberof CertificateStorage
     * @instance
     */
    CertificateStorage.prototype.revoked = false;

    /**
     * Creates a new CertificateStorage instance using the specified properties.
     * @function create
     * @memberof CertificateStorage
     * @static
     * @param {ICertificateStorage=} [properties] Properties to set
     * @returns {CertificateStorage} CertificateStorage instance
     */
    CertificateStorage.create = function create(properties) {
        return new CertificateStorage(properties);
    };

    /**
     * Encodes the specified CertificateStorage message. Does not implicitly {@link CertificateStorage.verify|verify} messages.
     * @function encode
     * @memberof CertificateStorage
     * @static
     * @param {ICertificateStorage} message CertificateStorage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CertificateStorage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.hash != null && message.hasOwnProperty("hash"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.hash);
        if (message.owner != null && message.hasOwnProperty("owner"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.owner);
        if (message.revoked != null && message.hasOwnProperty("revoked"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.revoked);
        return writer;
    };

    /**
     * Encodes the specified CertificateStorage message, length delimited. Does not implicitly {@link CertificateStorage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CertificateStorage
     * @static
     * @param {ICertificateStorage} message CertificateStorage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CertificateStorage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CertificateStorage message from the specified reader or buffer.
     * @function decode
     * @memberof CertificateStorage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CertificateStorage} CertificateStorage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CertificateStorage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CertificateStorage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.hash = reader.string();
                break;
            case 2:
                message.owner = reader.string();
                break;
            case 3:
                message.revoked = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CertificateStorage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CertificateStorage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CertificateStorage} CertificateStorage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CertificateStorage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CertificateStorage message.
     * @function verify
     * @memberof CertificateStorage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CertificateStorage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.hash != null && message.hasOwnProperty("hash"))
            if (!$util.isString(message.hash))
                return "hash: string expected";
        if (message.owner != null && message.hasOwnProperty("owner"))
            if (!$util.isString(message.owner))
                return "owner: string expected";
        if (message.revoked != null && message.hasOwnProperty("revoked"))
            if (typeof message.revoked !== "boolean")
                return "revoked: boolean expected";
        return null;
    };

    /**
     * Creates a CertificateStorage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CertificateStorage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CertificateStorage} CertificateStorage
     */
    CertificateStorage.fromObject = function fromObject(object) {
        if (object instanceof $root.CertificateStorage)
            return object;
        var message = new $root.CertificateStorage();
        if (object.hash != null)
            message.hash = String(object.hash);
        if (object.owner != null)
            message.owner = String(object.owner);
        if (object.revoked != null)
            message.revoked = Boolean(object.revoked);
        return message;
    };

    /**
     * Creates a plain object from a CertificateStorage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CertificateStorage
     * @static
     * @param {CertificateStorage} message CertificateStorage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CertificateStorage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.hash = "";
            object.owner = "";
            object.revoked = false;
        }
        if (message.hash != null && message.hasOwnProperty("hash"))
            object.hash = message.hash;
        if (message.owner != null && message.hasOwnProperty("owner"))
            object.owner = message.owner;
        if (message.revoked != null && message.hasOwnProperty("revoked"))
            object.revoked = message.revoked;
        return object;
    };

    /**
     * Converts this CertificateStorage to JSON.
     * @function toJSON
     * @memberof CertificateStorage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CertificateStorage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CertificateStorage;
})();

$root.TransactionPayload = (function() {

    /**
     * Properties of a TransactionPayload.
     * @exports ITransactionPayload
     * @interface ITransactionPayload
     * @property {number|null} [method] TransactionPayload method
     * @property {Uint8Array|null} [data] TransactionPayload data
     */

    /**
     * Constructs a new TransactionPayload.
     * @exports TransactionPayload
     * @classdesc Represents a TransactionPayload.
     * @implements ITransactionPayload
     * @constructor
     * @param {ITransactionPayload=} [properties] Properties to set
     */
    function TransactionPayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TransactionPayload method.
     * @member {number} method
     * @memberof TransactionPayload
     * @instance
     */
    TransactionPayload.prototype.method = 0;

    /**
     * TransactionPayload data.
     * @member {Uint8Array} data
     * @memberof TransactionPayload
     * @instance
     */
    TransactionPayload.prototype.data = $util.newBuffer([]);

    /**
     * Creates a new TransactionPayload instance using the specified properties.
     * @function create
     * @memberof TransactionPayload
     * @static
     * @param {ITransactionPayload=} [properties] Properties to set
     * @returns {TransactionPayload} TransactionPayload instance
     */
    TransactionPayload.create = function create(properties) {
        return new TransactionPayload(properties);
    };

    /**
     * Encodes the specified TransactionPayload message. Does not implicitly {@link TransactionPayload.verify|verify} messages.
     * @function encode
     * @memberof TransactionPayload
     * @static
     * @param {ITransactionPayload} message TransactionPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TransactionPayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.method != null && message.hasOwnProperty("method"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.method);
        if (message.data != null && message.hasOwnProperty("data"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
        return writer;
    };

    /**
     * Encodes the specified TransactionPayload message, length delimited. Does not implicitly {@link TransactionPayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TransactionPayload
     * @static
     * @param {ITransactionPayload} message TransactionPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TransactionPayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TransactionPayload message from the specified reader or buffer.
     * @function decode
     * @memberof TransactionPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TransactionPayload} TransactionPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TransactionPayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TransactionPayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.method = reader.uint32();
                break;
            case 2:
                message.data = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TransactionPayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TransactionPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TransactionPayload} TransactionPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TransactionPayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TransactionPayload message.
     * @function verify
     * @memberof TransactionPayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TransactionPayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.method != null && message.hasOwnProperty("method"))
            if (!$util.isInteger(message.method))
                return "method: integer expected";
        if (message.data != null && message.hasOwnProperty("data"))
            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                return "data: buffer expected";
        return null;
    };

    /**
     * Creates a TransactionPayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TransactionPayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TransactionPayload} TransactionPayload
     */
    TransactionPayload.fromObject = function fromObject(object) {
        if (object instanceof $root.TransactionPayload)
            return object;
        var message = new $root.TransactionPayload();
        if (object.method != null)
            message.method = object.method >>> 0;
        if (object.data != null)
            if (typeof object.data === "string")
                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
            else if (object.data.length)
                message.data = object.data;
        return message;
    };

    /**
     * Creates a plain object from a TransactionPayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TransactionPayload
     * @static
     * @param {TransactionPayload} message TransactionPayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TransactionPayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.method = 0;
            object.data = options.bytes === String ? "" : [];
        }
        if (message.method != null && message.hasOwnProperty("method"))
            object.method = message.method;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
        return object;
    };

    /**
     * Converts this TransactionPayload to JSON.
     * @function toJSON
     * @memberof TransactionPayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TransactionPayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TransactionPayload;
})();

module.exports = $root;