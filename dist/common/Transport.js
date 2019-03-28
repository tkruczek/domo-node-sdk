"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rp = require("request-promise-native");
const DEBUG = require("debug");
const Constants_1 = require("./Constants");
const Errors_1 = require("./Errors");
const debug = DEBUG('domo-sdk');
class Transport {
    constructor(clientId, clientSecret, scopes, host) {
        this.accessToken = '';
        this.apiHost = `https://${host}`;
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.scopes = scopes;
    }
    get(req, type) {
        req.method = Constants_1.HTTP_METHODS.GET;
        return this.request(req)
            .catch((err) => {
            const ex = new Errors_1.RequestException(Constants_1.HTTP_METHODS[req.method], req, type, err);
            debug(ex.message);
            throw ex;
        });
    }
    post(req, type, isJson) {
        req.method = Constants_1.HTTP_METHODS.POST;
        return this.request(req, isJson)
            .catch((err) => {
            const ex = new Errors_1.RequestException(Constants_1.HTTP_METHODS[req.method], req, type, err);
            debug(ex.message);
            throw ex;
        });
    }
    put(req, type, isJson) {
        req.method = Constants_1.HTTP_METHODS.PUT;
        return this.request(req, isJson)
            .catch((err) => {
            const ex = new Errors_1.RequestException(Constants_1.HTTP_METHODS[req.method], req, type, err);
            debug(ex.message);
            throw ex;
        });
    }
    patch(req, type, isJson) {
        req.method = Constants_1.HTTP_METHODS.PATCH;
        return this.request(req, isJson)
            .catch((err) => {
            const ex = new Errors_1.RequestException(Constants_1.HTTP_METHODS[req.method], req, type, err);
            debug(ex.message);
            throw ex;
        });
    }
    delete(req, type) {
        req.method = Constants_1.HTTP_METHODS.DELETE;
        return this.request(req)
            .catch((err) => {
            const ex = new Errors_1.RequestException(Constants_1.HTTP_METHODS[req.method], req, type, err);
            debug(ex.message);
            throw ex;
        });
    }
    addAuthHeaders(baseHeaders) {
        if (!this.accessToken)
            return baseHeaders;
        if (baseHeaders && Object.keys(baseHeaders).indexOf('Authorization') > -1)
            return baseHeaders;
        const headers = baseHeaders ? Object.assign(baseHeaders) : {};
        headers.Authorization = `bearer ${this.accessToken}`;
        return headers;
    }
    renewAccessToken() {
        const scope = this.scopes
            .map(s => Constants_1.API_SCOPE[s].toLowerCase())
            .join(' ');
        const req = {
            url: '/oauth/token',
            method: Constants_1.HTTP_METHODS.GET,
            params: { scope, grant_type: 'client_credentials' },
            auth: {
                username: this.clientId,
                password: this.clientSecret,
            },
        };
        return this.request(req)
            .then((res) => { this.accessToken = res.access_token; })
            .catch(console.log);
    }
    request(req, json = true) {
        return rp(this.formatRequest(req, json))
            .catch(err => this.retryRequest(err, req, json));
    }
    retryRequest(err, req, json) {
        if (err.statusCode === 401) {
            return this.renewAccessToken().then(() => this.request(req, json));
        }
        else {
            throw err;
        }
    }
    formatRequest(req, json) {
        const options = {
            json,
            url: `${this.apiHost}${req.url}`,
            method: Constants_1.HTTP_METHODS[req.method],
            qs: req.params,
            body: req.body,
            headers: this.addAuthHeaders(req.headers),
        };
        if (req.auth)
            options.auth = req.auth;
        return options;
    }
}
exports.default = Transport;
//# sourceMappingURL=Transport.js.map