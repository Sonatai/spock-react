import './styles.css';

import { DialogStateReturn } from 'reakit/ts';

import { ISummary } from '../../../Hooks/useGetSummary';
import { ISearchHit } from '../Search';
import { SearchCard } from './SearchCard/SearchCard';

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

    const onClick = () => {
        setSearchHits(null);
        setSearchInput('');
        dialog.setVisible(false);
    };

    return (
        <div className="search-hit-wrapper">
            {searchHits ? (
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
                            onClick={onClick}
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
