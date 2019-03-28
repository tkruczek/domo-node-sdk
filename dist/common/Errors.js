"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RequestException extends Error {
    constructor(method, req, type, error) {
        super(`Unable to ${method} ${req.url} for ${type}`);
        this.method = method;
        this.type = type;
        this.path = req.url;
        this.error = error;
    }
}
exports.RequestException = RequestException;
class ClientConfigException extends Error {
    constructor(missingConfig) {
        super(`Missing required configuration parameter: ${missingConfig}`);
        this.name = 'ClientConfigException';
    }
}
exports.ClientConfigException = ClientConfigException;
//# sourceMappingURL=Errors.js.map