import './styles.css';

import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ISearchCard } from 'spock-react/components/search-card-types';

export const SearchCard = (props: ISearchCard): JSX.Element => {
    const { onClick, hit, spec, feature } = props;

    return (
        <Link
            key={nanoid()}
            to={hit.id}
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
                className="card__icon"
                size="lg"
            />
        </Link>
    );
};
