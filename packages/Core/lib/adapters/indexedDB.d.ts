import { INanoSQLAdapter, INanoSQLTable, INanoSQLPlugin, INanoSQLInstance } from "../interfaces";
export declare class IndexedDB implements INanoSQLAdapter {
    plugin: INanoSQLPlugin;
    nSQL: INanoSQLInstance;
    constructor();
    connect(id: string, complete: () => void, error: (err: any) => void): void;
    createTable(tableName: string, tableData: INanoSQLTable, complete: () => void, error: (err: any) => void): void;
    disconnectTable(table: string, complete: () => void, error: (err: any) => void): void;
    dropTable(table: string, complete: () => void, error: (err: any) => void): void;
    disconnect(complete: () => void, error: (err: any) => void): void;
    write(table: string, pk: any, row: {
        [key: string]: any;
    }, complete: (pk: any) => void, error: (err: any) => void): void;
    read(table: string, pk: any, complete: (row: {
        [key: string]: any;
    }) => void, error: (err: any) => void): void;
    delete(table: string, pk: any, complete: () => void, error: (err: any) => void): void;
    readMulti(table: string, type: "range" | "offset" | "all", offsetOrLow: any, limitOrHeigh: any, reverse: boolean, onRow: (row: {
        [key: string]: any;
    }, i: number) => void, complete: () => void, error: (err: any) => void): void;
    readMultiPK(table: string, type: "range" | "offset" | "all", offsetOrLow: any, limitOrHeigh: any, reverse: boolean, onPK: (pk: any, i: number) => void, complete: () => void, error: (err: any) => void): void;
    getIndex(table: string, complete: (index: any[]) => void, error: (err: any) => void): void;
    getNumberOfRecords(table: string, complete: (length: number) => void, error: (err: any) => void): void;
}
