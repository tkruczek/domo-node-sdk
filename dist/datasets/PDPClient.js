"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PDPClient {
    constructor(transport) {
        this.type = 'Personalized Data Permission (PDP)';
        this.urlBase = '/v1/datasets';
        this.transport = transport;
    }
    create(datasetId, policy) {
        const req = {
            url: `${this.urlBase}/${datasetId}/policies`,
            body: policy,
        };
        return this.transport.post(req, this.type);
    }
    get(datasetId, policyId) {
        const req = { url: `${this.urlBase}/${datasetId}/policies/${policyId}` };
        return this.transport.get(req, this.type);
    }
    list(datasetId) {
        const req = { url: `${this.urlBase}/${datasetId}/policies` };
        return this.transport.get(req, this.type);
    }
    update(datasetId, policyId, policy) {
        const req = {
            url: `${this.urlBase}/${datasetId}/policies/${policyId}`,
            body: policy,
        };
        return this.transport.put(req, this.type);
    }
    delete(datasetId, policyId) {
        const req = { url: `${this.urlBase}/${datasetId}/policies/${policyId}` };
        return this.transport.delete(req, this.type);
    }
}
exports.default = PDPClient;
//# sourceMappingURL=PDPClient.js.map