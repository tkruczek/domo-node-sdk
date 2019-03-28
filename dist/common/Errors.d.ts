import { Request } from './Transport';
export declare class RequestException extends Error {
    method: string;
    type: string;
    path: string;
    error: any;
    constructor(method: string, req: Request, type: string, error: any);
}
export declare class ClientConfigException extends Error {
    name: string;
    constructor(missingConfig: string);
}
