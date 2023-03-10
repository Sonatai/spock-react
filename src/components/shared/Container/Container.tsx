import './styles.css';

import { PropsWithChildren } from 'react';

export const Container = (props: PropsWithChildren): JSX.Element => {
    const { children } = props;

    return <main className="container">{children}</main>;
};
