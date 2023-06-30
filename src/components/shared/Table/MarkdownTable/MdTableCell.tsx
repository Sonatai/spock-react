import './styles.css';

import { PropsWithChildren } from 'react';

export const MdTableCell = (props: PropsWithChildren<unknown>): JSX.Element => {
    const { children } = props;

    return <td>{children}</td>;
};
