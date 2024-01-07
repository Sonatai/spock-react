import { PropsWithChildren } from 'react';

import { Layout } from '../';
import { useScrollUp } from '../../../Hooks';

export const CustomPage = (props: PropsWithChildren<unknown>): JSX.Element => {
    const { children } = props;

    useScrollUp();

    return <Layout>{children}</Layout>;
};
