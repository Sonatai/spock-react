import './styles.css';

import { PropsWithChildren } from 'react';

import { IFeature } from '../../../Hooks';
import { OnPageNav } from './OnPageNav';

interface ILayout {
    hasOnPageNav?: boolean;
    features?: IFeature[];
}

export const Layout = (props: PropsWithChildren<ILayout>): JSX.Element => {
    const { hasOnPageNav, children, features } = props;

    return (
        <div className="lg:pl-[19.5rem]">
            <div className="layout__wrapper">
                {children}

                {hasOnPageNav !== undefined &&
                    hasOnPageNav &&
                    features !== undefined &&
                    features?.length > 0 && <OnPageNav features={features} />}
            </div>
        </div>
    );
};
