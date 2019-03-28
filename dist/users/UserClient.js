"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserClient {
    constructor(transport) {
        this.urlBase = '/v1/users';
        this.type = 'User';
        this.transport = transport;
    }
    create(user, sendInvite = true) {
        const req = {
            url: this.urlBase,
            body: user,
            params: { sendInvite },
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
    update(id, user) {
        const req = {
            url: `${this.urlBase}/${id}`,
            body: user,
        };
        return this.transport.put(req, this.type);
    }
    delete(id) {
        const req = { url: `${this.urlBase}/${id}` };
        return this.transport.delete(req, this.type);
    }
}
exports.default = UserClient;
//# sourceMappingURL=UserClient.js.map