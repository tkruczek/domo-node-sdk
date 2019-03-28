import Transport from '../common/Transport';
import { Group } from './models';
export default class GroupClient {
    urlBase: string;
    type: string;
    transport: Transport;
    constructor(transport: any);
    create(group: Group): Promise<Group>;
    get(id: string): Promise<Group>;
    list(limit: number, offset: number): Promise<Group[]>;
    update(id: string, group: Group): Promise<Group>;
    delete(id: string): Promise<void>;
    addUser(groupId: string, userId: number): Promise<void>;
    listUsers(groupId: string, limit: number, offset: number): Promise<number[]>;
    removeUser(groupId: string, userId: number): Promise<void>;
}
