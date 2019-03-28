"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = require("../common/Constants");
class DatasetClient {
    constructor(transport) {
        this.urlBase = '/v1/datasets';
        this.type = 'Dataset';
        this.transport = transport;
    }
    create(dataset) {
        const req = {
            url: this.urlBase,
            body: dataset,
        };
        return this.transport.post(req, this.type);
    }
    get(id) {
        const req = { url: `${this.urlBase}/${id}` };
        return this.transport.get(req, this.type);
    }
    list(limit, offset, sort) {
        const req = {
            url: this.urlBase,
            params: { limit, offset, sort },
        };
        return this.transport.get(req, this.type);
    }
    update(id, dataset) {
        const req = {
            url: `${this.urlBase}/${id}`,
            body: dataset,
        };
        return this.transport.put(req, this.type);
    }
    delete(id) {
        const req = { url: `${this.urlBase}/${id}` };
        return this.transport.delete(req, this.type);
    }
    importData(id, csv, updateMethod = Constants_1.UPDATE_METHODS.REPLACE) {
        const req = {
            url: `${this.urlBase}/${id}/data`,
            params: {
                updateMethod
            },
            headers: { 'Content-Type': 'text/csv' },
            body: csv,
        };
        return this.transport.put(req, this.type, false);
    }
    exportData(id, includeHeader = false) {
        const req = {
            url: `${this.urlBase}/${id}/data`,
            headers: { Accept: 'text/csv' },
            params: {
                includeHeader,
                fileName: 'foo.csv',
            },
        };
        return this.transport.get(req, this.type);
    }
}
exports.default = DatasetClient;
//# sourceMappingURL=DatasetClient.js.map