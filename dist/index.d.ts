import Transport from './common/Transport';
import DatasetClient from './datasets/DatasetClient';
import PDPClient from './datasets/PDPClient';
import StreamClient from './streams/StreamClient';
import UserClient from './users/UserClient';
import GroupClient from './groups/GroupClient';
import { API_SCOPE } from './common/Constants';
export declare class DomoClient {
    transport: Transport;
    datasets: DatasetClient;
    policies: PDPClient;
    streams: StreamClient;
    users: UserClient;
    groups: GroupClient;
    constructor(clientId: string, clientSecret: string, scope?: API_SCOPE[], host?: string);
}
