import './styles.css';

import { nanoid } from 'nanoid';
import { ReactNode } from 'react';

export interface IRow {
    row: Array<string | ReactNode>;
}

interface ITable {
    headers: string[];
    rows: IRow[];
}

export const ResponsiveTable = (props: ITable): JSX.Element => {
    const { headers, rows } = props;

    const data = rows.map((row) => {
        return (
            <tr key={nanoid()}>
                {row.row.map((data, index) => (
                    <td key={nanoid()} data-heading={headers[index]}>
                        {data}
                    </td>
                ))}
            </tr>
        );
    });

    return (
        <div className="responsive-table-container">
            <table className="responsive-table-container__table">
                <thead>
                    <tr>
                        {headers.map((col) => (
                            <th
                                key={nanoid()}
                                className="responsive-table-container__header"
                            >
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="align-baseline">{data}</tbody>
            </table>
        </div>
    );
};
