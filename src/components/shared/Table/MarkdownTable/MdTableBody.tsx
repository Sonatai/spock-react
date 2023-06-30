import './styles.css';

import { PropsWithChildren } from 'react';

export const MdTableBody = (props: PropsWithChildren<unknown>): JSX.Element => {
    const { children } = props;

    return <tbody className="align-baseline">{children}</tbody>;
};
