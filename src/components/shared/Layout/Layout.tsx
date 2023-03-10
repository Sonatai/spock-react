import './styles.css';

import { PropsWithChildren } from 'react';

interface ILayout {
    onPageNav?: JSX.Element;
}

export const Layout = (props: PropsWithChildren<ILayout>): JSX.Element => {
    const { onPageNav, children } = props;

    return (
        <>
            <div
                className={`${
                    onPageNav !== null ? 'w-8/12' : 'w-10/12'
                } layout-wrapper `}
            >
                {children}
            </div>
            {onPageNav !== null && (
                <div className={'sideNavBar w-2/12'}>
                    <h5>On the Page</h5>
                    {onPageNav}
                </div>
            )}
        </>
    );
};
