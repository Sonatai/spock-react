import './styles.css';

import { PropsWithChildren } from 'react';

export const MdTable = (props: PropsWithChildren<unknown>): JSX.Element => {
    const { children } = props;

    return (
        <div className="table-container">
            <table className="table-container__table">{children}</table>
        </div>
    );
};
