import { nanoid } from 'nanoid';

import { IFeature } from '../../../Hooks/useGetSpec';
import { NavAnchor } from '../NavLink/NavAnchor';

interface IOnPageNave {
    features: IFeature[];
}

export const OnPageNav = (props: IOnPageNave): JSX.Element => {
    const { features } = props;

    return (
        <div className="onPage">
            <h4>On the Page</h4>
            <nav>
                <ul className="layout__list">
                    {features.map((feature: IFeature) => (
                        <NavAnchor href={`#${feature.id}`} key={nanoid()}>
                            {feature.id}
                        </NavAnchor>
                    ))}
                </ul>
            </nav>
        </div>
    );
};
