import { PropsWithChildren } from 'react';

import { useScrollUp } from '../../Hooks/useScrollUp';
import { Layout } from './Layout/Layout';

export const CustomPage = (props: PropsWithChildren<unknown>): JSX.Element => {
    const { children } = props;

    useScrollUp();

    return <Layout>{children}</Layout>;
};
