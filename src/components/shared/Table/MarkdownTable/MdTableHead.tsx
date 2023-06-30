import './styles.css';

import { PropsWithChildren } from 'react';

export const MdTableHead = (props: PropsWithChildren<unknown>): JSX.Element => {
    const { children } = props;

    return <thead>{children}</thead>;
};
