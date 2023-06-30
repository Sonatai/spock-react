import './styles.css';

import { PropsWithChildren } from 'react';

export const MdTableHeader = (
    props: PropsWithChildren<unknown>
): JSX.Element => {
    const { children } = props;

    return <th className="table-container__header">{children}</th>;
};
