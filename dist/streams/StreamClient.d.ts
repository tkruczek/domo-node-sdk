import Transport from '../common/Transport';
import { Stream, StreamExecution } from './models';
export default class StreamClient {
    urlBase: string;
    type: string;
    execType: string;
    transport: Transport;
    constructor(transport: any);
    create(stream: Stream): Promise<Stream>;
    get(id: string, fields?: string[]): Promise<Stream>;
    list(fields?: string[]): Promise<Stream[]>;
    update(id: string, stream: Stream): Promise<Stream>;
    delete(id: string): Promise<void>;
    search(q: string[], fields?: string[]): Promise<Stream[]>;
    createExecution(streamId: string): Promise<StreamExecution>;
    getExecution(streamId: string, execId: number): Promise<StreamExecution>;
    listExecutions(streamId: string, limit: number, offset: number): Promise<StreamExecution[]>;
    uploadPart(id: string, exec: number, part: number, csv: string): Promise<StreamExecution>;
    uploadCompressedPart(id: string, exec: number, part: number, data: string): Promise<StreamExecution>;
    commit(streamId: string, execId: number): Promise<StreamExecution>;
    abort(streamId: string, exec?: number): Promise<StreamExecution>;
}
