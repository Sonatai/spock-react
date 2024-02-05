import './styles.css';

import { Input } from 'reakit';
import { ISearchInput } from 'spock-react/components/search-input-types';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useGenerateSearchEntries } from '../../../Hooks/useGenerateSearchEntries/useGenerateSearchEntries';
import { getSearchScoreV2TS } from '../getSearchScore';

export const SearchInput = (props: ISearchInput): JSX.Element => {
    const { summary, setSearchHits, setSearchInput, searchInput } = props;

    const searchEntries = useGenerateSearchEntries({ summary });

    const handleSearch = (searchInput: string) => {
        if (searchEntries === null) {
            setSearchHits(null);
        } else if (searchInput === '') {
            setSearchHits(null);
        } else {
            const hits = getSearchScoreV2TS(searchInput, searchEntries);
            hits.length > 0 ? setSearchHits(hits) : setSearchHits(null);
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
