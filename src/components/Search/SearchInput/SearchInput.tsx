import './styles.css';

import { Input } from 'reakit';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useGenerateSearchEntries } from '../../../Hooks/useGenerateSearchEntries';
import { ISummary } from '../../../Hooks/useGetSummary';
import { getSearchScore } from '../getSearchScore';
import { ISearchHit } from '../Search';

interface ISearchInput {
	summary: ISummary;
	setSearchHits: (searchHits: ISearchHit[] | null) => void;
	setSearchInput: (input: string) => void;
	searchInput: string;
}

export const SearchInput = (props: ISearchInput): JSX.Element => {
	const { summary, setSearchHits, setSearchInput, searchInput } = props;

	const { searchEntries } = useGenerateSearchEntries({ summary: summary });

	const handleSearch = (searchInput: string) => {
		if (!searchEntries) {
			setSearchHits(null);
		} else if (!searchInput) {
			setSearchHits(null);
		} else {
			const toLowerSearchInput = searchInput.trim().toLowerCase();

			const scoreEntries: ISearchHit[] = searchEntries.map((entry) => {
				const score = getSearchScore(toLowerSearchInput, entry.keywords);
				return {
					key: entry.key,
					score: score,
				};
			});

			const hits = scoreEntries.filter((entry) => entry.score > 0);
			hits.length > 0
				? setSearchHits(hits.sort((a, b) => b.score - a.score))
				: setSearchHits(null);
		}
	};

	return (
		<div className='input-wrapper'>
			<FontAwesomeIcon icon={faMagnifyingGlass} className='fa-xl input-icon' />
			<Input
				onChange={(e) => {
					setSearchInput(e.target.value);
					handleSearch(e.target.value);
				}}
				className='input'
				value={searchInput}
				placeholder='search ...'
			/>
		</div>
	);
};
