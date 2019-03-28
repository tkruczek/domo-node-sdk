"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StreamClient {
    constructor(transport) {
        this.urlBase = '/v1/streams';
        this.type = 'Stream';
        this.execType = 'Stream Execution';
        this.transport = transport;
    }
    create(stream) {
        const req = {
            url: this.urlBase,
            body: stream,
        };
        return this.transport.post(req, this.type);
    }
    get(id, fields = ['all']) {
        const req = {
            url: `${this.urlBase}/${id}`,
            params: { fields: fields.join() },
        };
        return this.transport.get(req, this.type);
    }
    list(fields = ['all']) {
        const req = {
            url: this.urlBase,
            params: { fields: fields.join() },
        };
        return this.transport.get(req, this.type);
    }
    update(id, stream) {
        const req = {
            url: `${this.urlBase}/${id}`,
            body: stream,
        };
        return this.transport.patch(req, this.type);
    }
    delete(id) {
        const req = { url: `${this.urlBase}/${id}` };
        return this.transport.delete(req, this.type);
    }
    search(q, fields = ['all']) {
        const req = {
            url: `${this.urlBase}/search`,
            params: { q: q.join(), fields: fields.join() },
        };
        return this.transport.get(req, this.type);
    }
    createExecution(streamId) {
        const req = { url: `${this.urlBase}/${streamId}/executions` };
        return this.transport.post(req, this.execType);
    }
    getExecution(streamId, execId) {
        const req = { url: `${this.urlBase}/${streamId}/executions/${execId}` };
        return this.transport.get(req, this.execType);
    }
    listExecutions(streamId, limit, offset) {
        const req = {
            url: `${this.urlBase}/${streamId}/executions`,
            params: { limit, offset },
        };
        return this.transport.get(req, this.execType);
    }
    uploadPart(id, exec, part, csv) {
        const req = {
            url: `${this.urlBase}/${id}/executions/${exec}/part/${part}`,
            headers: { 'Content-Type': 'text/csv' },
            body: csv,
        };
        return this.transport.put(req, this.execType, false);
    }
    uploadCompressedPart(id, exec, part, data) {
        const req = {
            url: `${this.urlBase}/${id}/executions/${exec}/part/${part}`,
            headers: { 'Content-Type': 'application/gzip' },
            body: data,
        };
        return this.transport.put(req, this.execType, false);
    }
    commit(streamId, execId) {
        const req = { url: `${this.urlBase}/${streamId}/executions/${execId}/commit` };
        return this.transport.put(req, this.execType);
    }
    abort(streamId, exec) {
        const url = exec
            ? `${this.urlBase}/${streamId}/executions/${exec}/abort`
            : `${this.urlBase}/${streamId}/executions/abort`;
        const req = { url };
        return this.transport.put(req, this.execType);
    }
}
exports.default = StreamClient;
//# sourceMappingURL=StreamClient.js.map