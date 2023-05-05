import { nanoid } from 'nanoid';

import { IFeature } from '../../../Hooks/useGetSpec';

interface IOnPageNave {
    features: IFeature[];
}

export const OnPageNav = (props: IOnPageNave): JSX.Element => {
    const { features } = props;

    return (
        <div className="onPage">
            <h4>On the Page</h4>
            <nav>
                <ul className="text-[0.875rem]">
                    {features.map((feature: IFeature) => (
                        <li className="pb-[0.5rem]" key={nanoid()}>
                            <a href={`#${feature.id}`}>{feature.id}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};
