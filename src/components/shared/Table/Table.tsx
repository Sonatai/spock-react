import './styles.css';

import { nanoid } from 'nanoid';
import { ReactNode } from 'react';

interface IRow {
    row: Array<string | ReactNode>;
}

interface ITable {
    title?: string;
    headers: string[];
    rows: IRow[];
    breakOn?: 'small' | 'medium' | 'large';
}

export const Table = (props: ITable) => {
    const { breakOn = 'medium', headers, rows, title } = props;

    let tableClass = 'table-container__table';

    if (breakOn === 'small') {
        tableClass += ' table-container__table--break-sm';
    } else if (breakOn === 'medium') {
        tableClass += ' table-container__table--break-md';
    } else if (breakOn === 'large') {
        tableClass += ' table-container__table--break-lg';
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
            {title !== undefined && title !== '' && (
                <div className="table-container__title">
                    <h2>{title}</h2>
                </div>
            )}
            <table className={tableClass}>
                <thead>
                    <tr>
                        {headers.map((col) => (
                            <th key={nanoid()}>{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>{data}</tbody>
            </table>
        </div>
    );
};
