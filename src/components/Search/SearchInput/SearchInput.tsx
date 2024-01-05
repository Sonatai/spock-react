import './styles.css';

import { Input } from 'reakit';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ISearchInput } from 'spock-react/components/search-input-types';
import { ISearchHit } from 'spock-react/components/search-types';
import { useGenerateSearchEntries } from '../../../Hooks/useGenerateSearchEntries';
import { getSearchScore } from '../getSearchScore';

export const SearchInput = (props: ISearchInput): JSX.Element => {
    const { summary, setSearchHits, setSearchInput, searchInput } = props;

    const searchEntries = useGenerateSearchEntries({ summary });

    const handleSearch = (searchInput: string) => {
        if (searchEntries === null) {
            setSearchHits(null);
        } else if (searchInput === '') {
            setSearchHits(null);
        } else {
            const toLowerSearchInput = searchInput.trim().toLowerCase();

            const scoreEntries: ISearchHit[] = searchEntries.map((entry) => {
                const score = getSearchScore(
                    toLowerSearchInput,
                    entry.keywords
                );
                return {
                    key: entry.key,
                    score,
                };
            });

            const hits = scoreEntries.filter((entry) => entry.score > 0);
            hits.length > 0
                ? setSearchHits(hits.sort((a, b) => b.score - a.score))
                : setSearchHits(null);
        }
    };

    return (
        <div className="input__wrapper">
            <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="input__icon"
                size="xl"
            />
            <Input
                onChange={(e) => {
                    setSearchInput(e.target.value);
                    handleSearch(e.target.value);
                }}
                className="input"
                value={searchInput}
                placeholder="search ..."
            />
        </div>
    );
};
