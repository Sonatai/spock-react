import { PropsWithChildren } from 'react';

import { useScrollUp } from '../../../Hooks';
import { Layout } from '..';

export const CustomPage = (props: PropsWithChildren<unknown>): JSX.Element => {
    const { children } = props;

    useScrollUp();

    return <Layout>{children}</Layout>;
};
