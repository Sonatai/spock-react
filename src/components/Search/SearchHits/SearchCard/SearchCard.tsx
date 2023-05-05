import './styles.css';

import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    IExecutedFeatures,
    ISpecification,
} from '../../../../Hooks/useGetSummary';
import { ISearchHit } from '../../Search';

interface ISearchCard {
    onClick: (e?: any) => void;
    hit: ISearchHit;
    spec?: ISpecification;
    feature?: IExecutedFeatures;
}

export const SearchCard = (props: ISearchCard): JSX.Element => {
    const { onClick, hit, spec, feature } = props;

    return (
        <Link
            key={nanoid()}
            to={hit.key}
            onClick={onClick}
            className="search__card"
        >
            <div className="card__text">
                {spec !== null &&
                    spec !== undefined &&
                    (spec.title !== '' ? spec.title : spec.className)}
                {feature?.id}
            </div>

            <FontAwesomeIcon
                icon={faAngleRight}
                //  eslint-disable-next-line tailwindcss/no-custom-classname
                className="fa-lg card__icon"
            />
        </Link>
    );
};
