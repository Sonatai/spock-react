import './styles.css';

import { useState } from 'react';
import { Dialog, DialogBackdrop, Separator, useDialogState } from 'reakit';
import { IScore, ISearch } from 'spock-react/components/search-types';

import { SearchButton } from './SearchButton';
import { SearchFooter } from './SearchFooter';
import { SearchHits } from './SearchHits';
import { SearchInput } from './SearchInput';

export const Search = (props: ISearch): JSX.Element => {
    const { summary } = props;

    const dialog = useDialogState();

    const [searchHits, setSearchHits] = useState<IScore[] | null>(null);
    const [searchInput, setSearchInput] = useState('');

    return (
        <>
            <SearchButton dialog={dialog} />
            <DialogBackdrop {...dialog} className="backdrop">
                <Dialog
                    {...dialog}
                    aria-label="Search Modal"
                    className="modal__content"
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
