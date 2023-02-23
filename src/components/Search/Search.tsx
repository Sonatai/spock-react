import './styles.css';

import { useState } from 'react';
import {
    Dialog,
    DialogBackdrop,
    DialogDisclosure,
    Separator,
    useDialogState,
} from 'reakit';

import { ISummary } from '../../Hooks/useGetSummary';
import { SearchButton } from './SearchButton/SearchButton';
import { SearchFooter } from './SearchFooter/SearchFooter';
import { SearchHits } from './SearchHits/SearchHits';
import { SearchInput } from './SearchInput/SearchInput';

export interface ISearchHit {
    score: number;
    key: string;
}

interface ISearchInput {
    summary: ISummary;
}

export const Search = (props: ISearchInput): JSX.Element => {
    const { summary } = props;

    const dialog = useDialogState();

    const [searchHits, setSearchHits] = useState<ISearchHit[] | null>(null);
    const [searchInput, setSearchInput] = useState('');

    return (
        <>
            <DialogDisclosure {...dialog} className="modal-button">
                <SearchButton />
            </DialogDisclosure>
            <DialogBackdrop {...dialog} className="backdrop">
                <Dialog
                    {...dialog}
                    aria-label="Search Modal"
                    className="modal-content"
                    onKeyDown={(e) => {
                        if (e.key === 'Escape') {
                            setSearchHits(null);
                            setSearchInput('');
                        }
                    }}
                >
                    <SearchInput
                        summary={summary}
                        setSearchHits={setSearchHits}
                        setSearchInput={setSearchInput}
                        searchInput={searchInput}
                    />
                    <SearchHits
                        searchHits={searchHits}
                        setSearchHits={setSearchHits}
                        summary={summary}
                        setSearchInput={setSearchInput}
                        dialog={dialog}
                    />
                    <Separator className="separator" />
                    <SearchFooter />
                </Dialog>
            </DialogBackdrop>
        </>
    );
};
