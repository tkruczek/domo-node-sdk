import Transport from '../common/Transport';
import { Policy } from './models';
export default class PDPClient {
    urlBase: string;
    type: string;
    transport: Transport;
    constructor(transport: Transport);
    create(datasetId: string, policy: Policy): Promise<Policy>;
    get(datasetId: string, policyId: number): Promise<Policy>;
    list(datasetId: string): Promise<Policy[]>;
    update(datasetId: string, policyId: number, policy: Policy): Promise<Policy>;
    delete(datasetId: string, policyId: number): Promise<void>;
}
