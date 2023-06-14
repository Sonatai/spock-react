import './styles.css';

import { nanoid } from 'nanoid';
import { ReactNode } from 'react';

interface IRow {
    row: Array<string | ReactNode>;
}

interface ITable {
    headers: string[];
    rows: IRow[];
}

export const Table = (props: ITable) => {
    const { headers, rows } = props;

    return (
        <div className="table__container">
            <table>
                <thead>
                    <tr>
                        {headers.map((header) => (
                            <th key={nanoid()}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={nanoid()}>
                            {row.row.map((content) => (
                                <td key={nanoid()}>{content}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
