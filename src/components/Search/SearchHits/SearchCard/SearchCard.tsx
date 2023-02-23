import './styles.css';

import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    type IExecutedFeatures,
    type ISpecification,
} from '../../../../Hooks/useGetSummary';
import { type ISearchHit } from '../../Search';

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
            className="search-card"
        >
            <div className="card-text">
                {spec !== null &&
                    spec !== undefined &&
                    (spec.title !== '' ? spec.title : spec.className)}
                {feature?.id}
            </div>
            <FontAwesomeIcon icon={faAngleRight} className="fa-lg card-icon" />
        </Link>
    );
};
