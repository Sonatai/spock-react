import './styles.css';

import { PropsWithChildren } from 'react';

export const MdTableRow = (props: PropsWithChildren<unknown>): JSX.Element => {
    const { children } = props;

    return <tr>{children}</tr>;
};
