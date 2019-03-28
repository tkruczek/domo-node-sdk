export interface AuthOption {
    username: string;
    password: string;
}
export interface Request {
    url: string;
    method?: number;
    headers?: any;
    params?: any;
    body?: any;
    auth?: AuthOption;
}
export interface RequestOptions {
    url: string;
    method: string;
    auth?: AuthOption;
    headers?: any;
    qs?: any;
    body?: any;
    json?: boolean;
}
export default class Transport {
    apiHost: string;
    clientId: string;
    clientSecret: string;
    accessToken: string;
    scopes: number[];
    constructor(clientId: string, clientSecret: string, scopes: number[], host: string);
    get(req: Request, type: string): any;
    post(req: Request, type: string, isJson?: boolean): any;
    put(req: Request, type: string, isJson?: boolean): any;
    patch(req: Request, type: string, isJson?: boolean): any;
    delete(req: Request, type: string): any;
    private addAuthHeaders(baseHeaders);
    private renewAccessToken();
    private request(req, json?);
    private retryRequest(err, req, json);
    private formatRequest(req, json);
}
