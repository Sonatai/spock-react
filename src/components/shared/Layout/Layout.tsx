import './styles.css';

import { nanoid } from 'nanoid';
import { PropsWithChildren } from 'react';

import { IFeature } from '../../../Hooks/useGetSpec';

interface ILayout {
    hasOnPageNav?: boolean;
    features?: IFeature[];
}

export const Layout = (props: PropsWithChildren<ILayout>): JSX.Element => {
    const { hasOnPageNav, children, features } = props;

    return (
        <div className="lg:pl-[19.5rem]">
            <div className="max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16">
                {children}

                {hasOnPageNav !== undefined && hasOnPageNav && (
                    <div className="fixed z-20 top-0 bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] pb-10 overflow-y-hidden hidden xl:block">
                        <h4>On the Page</h4>
                        <nav>
                            <ul className="text-[0.875rem]">
                                {features?.map((feature: IFeature) => (
                                    <li className="pb-[0.5rem]" key={nanoid()}>
                                        <a href={`#${feature.id}`}>
                                            {feature.id}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                )}
            </div>
        </div>
    );
};
