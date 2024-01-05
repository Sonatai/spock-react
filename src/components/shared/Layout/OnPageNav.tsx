import { nanoid } from 'nanoid';

import { NavAnchor } from '..';
import { IOnPageNave } from 'spock-react/shared/layout-types';
import { IMinimalFeature } from 'spock-react-types';

export const OnPageNav = (props: IOnPageNave): JSX.Element => {
    const { features } = props;

    return (
        <div className="onPage">
            <h4>On the Page</h4>
            <nav>
                <ul className="layout__list">
                    {features.map((feature: IMinimalFeature) => (
                        <NavAnchor href={feature.id} key={nanoid()}>
                            {feature.id}
                        </NavAnchor>
                    ))}
                </ul>
            </nav>
        </div>
    );
};
