import './styles.css';

import { type DialogStateReturn } from 'reakit/ts';

import { type ISummary } from '../../../Hooks/useGetSummary';
import { type ISearchHit } from '../Search';
import { SearchCard } from './SearchCard/SearchCard';
import { nanoid } from 'nanoid';

interface ISearchHits {
    searchHits: ISearchHit[] | null;
    setSearchHits: (searchHits: ISearchHit[] | null) => void;
    summary: ISummary;
    setSearchInput: (input: string) => void;
    dialog: DialogStateReturn;
}

export const SearchHits = (props: ISearchHits): JSX.Element => {
    const { searchHits, summary, setSearchHits, setSearchInput, dialog } =
        props;

    const handleClick = () => {
        setSearchHits(null);
        setSearchInput('');
        dialog.setVisible(false);
    };

    return (
        <div className="search-hit-wrapper">
            {searchHits !== null ? (
                searchHits.map((hit) => {
                    const spec = summary.specifications.find(
                        (spec) => spec.className === hit.key
                    );
                    const feature = summary.specifications.map((spec) =>
                        spec.executedFeatures.find(
                            (feature) => feature.id === hit.key
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
                <div className="text-center pt-6">no search hits</div>
            )}
        </div>
    );
};
