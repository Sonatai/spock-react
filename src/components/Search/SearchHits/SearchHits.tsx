import './styles.css';

import { nanoid } from 'nanoid';
import { ISearchHits } from 'spock-react/components/search-hits-types';

import { SearchCard } from './SearchCard';

export const SearchHits = (props: ISearchHits): JSX.Element => {
    const { searchHits, summary, setSearchHits, setSearchInput, dialog } =
        props;

    const handleClick = () => {
        setSearchHits(null);
        setSearchInput('');
        dialog.setVisible(false);
    };

    return (
        <div className="search__hit__wrapper">
            {searchHits !== null ? (
                searchHits.map((hit) => {
                    const spec = summary.specifications.find(
                        (spec) => spec.className === hit.id
                    );
                    const feature = summary.specifications.map((spec) =>
                        spec.executedFeatures.find(
                            (feature) => feature.id === hit.id
                        )
                    )[0];

                    return (
                        <SearchCard
                            key={nanoid()}
                            onClick={handleClick}
                            hit={hit}
                            spec={spec}
                            feature={feature}
                        />
                    );
                })
            ) : (
                <div className="no__search__hit">no search hits</div>
            )}
        </div>
    );
};
