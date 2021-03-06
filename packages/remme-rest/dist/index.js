"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var remme_http_client_1 = require("remme-http-client");
var models_1 = require("./models");
exports.RemmeMethods = models_1.RemmeMethods;
exports.ValidatorMethods = models_1.ValidatorMethods;
var RemmeRest = /** @class */ (function () {
    function RemmeRest(_a) {
        var nodeAddress = _a.nodeAddress, nodePort = _a.nodePort, sslMode = _a.sslMode;
        var _this = this;
        this.nodeAddress = function () { return _this._nodeAddress; };
        this.sslMode = function () { return _this._sslMode; };
        this._nodeAddress = nodeAddress + ":" + nodePort;
        this._sslMode = sslMode;
    }
    RemmeRest.prototype.getRequest = function (method, urlParam, queryParam) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this._getUrlForRequest(method, urlParam);
                        return [4 /*yield*/, this._sendRequest("GET", url, queryParam)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RemmeRest.prototype.putRequest = function (method, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this._getUrlForRequest(method);
                        return [4 /*yield*/, this._sendRequest("PUT", url, payload)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RemmeRest.prototype.postRequest = function (method, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this._getUrlForRequest(method);
                        return [4 /*yield*/, this._sendRequest("POST", url, payload)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RemmeRest.prototype.deleteRequest = function (method, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this._getUrlForRequest(method);
                        return [4 /*yield*/, this._sendRequest("DELETE", url, payload)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RemmeRest.prototype._sendRequest = function (method, url, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var options, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            url: url,
                            method: method,
                        };
                        if (payload) {
                            options[method.toUpperCase() === "GET" ? "params" : "data"] = payload;
                        }
                        return [4 /*yield*/, remme_http_client_1.HttpClient.send(options)];
                    case 1:
                        response = _a.sent();
                        if (response) {
                            if (response.data.error) {
                                this._throwErrorReceive(response.data);
                            }
                            else {
                                return [2 /*return*/, response.data];
                            }
                        }
                        else {
                            throw new Error("Please check if your node running at http://" + this._nodeAddress);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    RemmeRest.prototype._getUrlForRequest = function (method, payload) {
        var methodUrl = method;
        if (payload) {
            methodUrl += "/" + payload + (method === models_1.RemmeMethods.userPublicKeys ? "/pub_keys" : "");
        }
        var protocol = this._sslMode ? "https://" : "http://";
        var url;
        if (Object.values(models_1.RemmeMethods).includes(method)) {
            url = this._nodeAddress + "/api/v1/";
        }
        else if (Object.values(models_1.ValidatorMethods).includes(method)) {
            url = this._nodeAddress + "/validator/";
        }
        return "" + protocol + url + methodUrl;
    };
    RemmeRest.prototype._throwErrorReceive = function (_a) {
        var error = _a.error;
        if (typeof error === "string") {
            throw new Error(error);
        }
        if (error.message) {
            throw new Error(error.message);
        }
    };
    return RemmeRest;
}());
exports.RemmeRest = RemmeRest;
//# sourceMappingURL=index.js.map