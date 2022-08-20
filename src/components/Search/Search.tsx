import './styles.css';

import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	Dialog,
	DialogBackdrop,
	DialogDisclosure,
	Input,
	Separator,
	useDialogState,
} from 'reakit';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

export const Search = (props: ISearchInput): JSX.Element => {
	const { summary } = props;

	const { searchEntries } = useGenerateSearchEntries({ summary: summary });
	const dialog = useDialogState();

	const [searchHits, setSearchHits] = useState<ISearchHit[] | null>(null);
	const [searchInput, setSearchInput] = useState('');

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
		}
	};

	return (
		<>
			<DialogDisclosure {...dialog} className='group modal-button'>
				<FontAwesomeIcon
					icon={faMagnifyingGlass}
					className='fa-lg modal-button-icon'
				/>
				<div className='modal-button-text'>Search</div>
			</DialogDisclosure>
			<DialogBackdrop {...dialog} className='backdrop'>
				<Dialog {...dialog} aria-label='Welcome' className='modal-content'>
					<div className='flex items-baseline'>
						<FontAwesomeIcon icon={faMagnifyingGlass} className='fa-xl mr-2 ' />
						<Input
							onChange={(e) => {
								setSearchInput(e.target.value);
								handleSearch(e.target.value);
							}}
							className='h-10 w-full rounded-md bg-transparent text-3xl'
							value={searchInput}
							placeholder='search ...'
						/>
					</div>

					<Separator />
					<div className='min-h-[5rem] max-h-[20rem] overflow-auto'>
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
									<div className='mt-3'>
										<Link
											key={nanoid()}
											to={hit.key}
											onClick={() => {
												setSearchHits(null);
												setSearchInput('');
												dialog.setVisible(false);
											}}>
											{spec && (spec.title || spec.className)}
											{feature && feature.id}
										</Link>
									</div>
								);
							})
						) : (
							<div className='text-center pt-6'>no recent search results</div>
						)}
					</div>
					<Separator />
					<div className='h-20'>Hello</div>
				</Dialog>
			</DialogBackdrop>
		</>
	);
};
