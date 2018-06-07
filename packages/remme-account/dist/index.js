"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var signing_1 = require("sawtooth-sdk/signing");
var secp256k1_1 = require("sawtooth-sdk/signing/secp256k1");
var remme_utils_1 = require("remme-utils");
var RemmeAccount = /** @class */ (function () {
    function RemmeAccount(privateKeyHex) {
        if (privateKeyHex && privateKeyHex.search(/^[0-9a-f]{64}$/) === -1) {
            throw new Error("Given privateKey is not a valid");
        }
        var context = signing_1.createContext("secp256k1");
        var privateKey;
        if (!privateKeyHex) {
            privateKey = context.newRandomPrivateKey();
        }
        else {
            privateKey = secp256k1_1.Secp256k1PrivateKey.fromHex(privateKeyHex);
        }
        this._signer = new signing_1.CryptoFactory(context).newSigner(privateKey);
        this.privateKeyHex = privateKey.asHex();
        this.publicKeyHex = this._signer.getPublicKey().asHex();
        this.address = remme_utils_1.getAddressFromData("account", this.publicKeyHex);
    }
    Object.defineProperty(RemmeAccount.prototype, "privateKey", {
        get: function () {
            return secp256k1_1.Secp256k1PrivateKey.fromHex(this.privateKeyHex);
        },
        enumerable: true,
        configurable: true
    });
    RemmeAccount.prototype.sign = function (transaction) {
        return this._signer.sign(transaction);
    };
    return RemmeAccount;
}());
exports.RemmeAccount = RemmeAccount;
//# sourceMappingURL=index.js.map