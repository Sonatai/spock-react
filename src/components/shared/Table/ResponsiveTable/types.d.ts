declare module 'spock-react/shared/responsive-table-types' {
    import { ReactNode } from 'react';

    export interface IRow {
        row: Array<string | ReactNode>;
    }

    export interface ITable {
        headers: string[];
        rows: IRow[];
    }
}
