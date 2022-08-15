import { useState } from 'react';

import { useGenerateSearchEntries } from '../../Hooks/useGenerateSearchEntries';
import { ISummary } from '../../Hooks/useGetSummary';
import { getSearchScore } from './getSearchScore';

interface ISearchHit {
	score: number;
	key: string;
}

interface ISearchInput {
	summary: ISummary;
}

export const SearchInput = (props: ISearchInput): JSX.Element => {
	const { summary } = props;

	const { searchEntries } = useGenerateSearchEntries({ summary: summary });

	const [searchHits, setSearchHits] = useState<ISearchHit[] | null>(null);

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
			setSearchHits(hits.sort((a, b) => b.score - a.score));

			console.log('hits', hits);
		}
	};

	return (
		<>
			<label>Search</label>
			<input
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						handleSearch(e.target.value);
					}
				}}
			/>
		</>
	);
};
