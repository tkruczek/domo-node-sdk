"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GroupClient {
    constructor(transport) {
        this.urlBase = '/v1/groups';
        this.type = 'Group';
        this.transport = transport;
    }
    create(group) {
        const req = {
            url: this.urlBase,
            body: group,
        };
        return this.transport.post(req, this.type);
    }
    get(id) {
        const req = { url: `${this.urlBase}/${id}` };
        return this.transport.get(req, this.type);
    }
    list(limit, offset) {
        const req = {
            url: this.urlBase,
            params: { limit, offset },
        };
        return this.transport.get(req, this.type);
    }
    update(id, group) {
        const req = {
            url: `${this.urlBase}/${id}`,
            body: group,
        };
        return this.transport.put(req, this.type);
    }
    delete(id) {
        const req = { url: `${this.urlBase}/${id}` };
        return this.transport.delete(req, this.type);
    }
    addUser(groupId, userId) {
        const req = { url: `${this.urlBase}/${groupId}/users/${userId}` };
        return this.transport.put(req, this.type);
    }
    listUsers(groupId, limit, offset) {
        const req = {
            url: `${this.urlBase}/${groupId}/users`,
            params: { limit, offset },
        };
        return this.transport.get(req, this.type);
    }
    removeUser(groupId, userId) {
        const req = { url: `${this.urlBase}/${groupId}/users/${userId}` };
        return this.transport.delete(req, this.type);
    }
}
exports.default = GroupClient;
//# sourceMappingURL=GroupClient.js.map