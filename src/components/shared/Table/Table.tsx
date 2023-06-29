import './styles.css';

import { nanoid } from 'nanoid';
import { ReactNode } from 'react';

interface IRow {
    row: Array<string | ReactNode>;
}

interface ITable {
    headers: string[];
    rows: IRow[];
    breakOn?: 'small' | 'medium' | 'large';
}

export const Table = (props: ITable) => {
    const { breakOn = 'medium', headers, rows } = props;

    let tableClass = 'table-container__table';

    if (breakOn === 'small') {
        tableClass += ' table-container__table--break';
    } else if (breakOn === 'medium') {
        tableClass += ' table-container__table--break';
    } else if (breakOn === 'large') {
        tableClass += ' table-container__table--break';
    }

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
        <div className="table-container">
            <table className={tableClass}>
                <thead>
                    <tr>
                        {headers.map((col) => (
                            <th
                                key={nanoid()}
                                className="table-container__header"
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
