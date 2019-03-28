"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DEBUG = require("debug");
const Transport_1 = require("./common/Transport");
const DatasetClient_1 = require("./datasets/DatasetClient");
const PDPClient_1 = require("./datasets/PDPClient");
const StreamClient_1 = require("./streams/StreamClient");
const UserClient_1 = require("./users/UserClient");
const GroupClient_1 = require("./groups/GroupClient");
const Constants_1 = require("./common/Constants");
const Errors_1 = require("./common/Errors");
const debug = DEBUG('domo-sdk');
class DomoClient {
    constructor(clientId, clientSecret, scope = [Constants_1.API_SCOPE.USER, Constants_1.API_SCOPE.DATA], host = 'api.domo.com') {
        if (!clientId || !clientSecret) {
            const err = new Errors_1.ClientConfigException('clientId, clientSecret');
            debug(err.message);
            throw err;
        }
        if (scope && scope.length === 0) {
            const err = new Errors_1.ClientConfigException('scope');
            debug(err.message);
            throw err;
        }
        this.transport = new Transport_1.default(clientId, clientSecret, scope, host);
        this.datasets = new DatasetClient_1.default(this.transport);
        this.policies = new PDPClient_1.default(this.transport);
        this.streams = new StreamClient_1.default(this.transport);
        this.users = new UserClient_1.default(this.transport);
        this.groups = new GroupClient_1.default(this.transport);
    }
}
exports.DomoClient = DomoClient;
//# sourceMappingURL=index.js.map