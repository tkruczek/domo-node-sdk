import Transport from '../common/Transport';
import { UPDATE_METHODS } from '../common/Constants';
import { DataSet } from './models';
export default class DatasetClient {
    urlBase: string;
    type: string;
    transport: Transport;
    constructor(transport: Transport);
    create(dataset: DataSet): Promise<DataSet>;
    get(id: string): Promise<DataSet>;
    list(limit: number, offset: number, sort: string): Promise<DataSet[]>;
    update(id: string, dataset: DataSet): Promise<DataSet>;
    delete(id: string): Promise<void>;
    importData(id: string, csv: string, updateMethod?: UPDATE_METHODS): Promise<void>;
    exportData(id: string, includeHeader?: boolean): Promise<string>;
}
