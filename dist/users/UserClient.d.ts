import Transport from '../common/Transport';
import { User } from './models';
export default class UserClient {
    urlBase: string;
    type: string;
    transport: Transport;
    constructor(transport: Transport);
    create(user: User, sendInvite?: boolean): Promise<User>;
    get(id: string): Promise<User>;
    list(limit: number, offset: number): Promise<User[]>;
    update(id: string, user: User): Promise<User>;
    delete(id: string): Promise<void>;
}
