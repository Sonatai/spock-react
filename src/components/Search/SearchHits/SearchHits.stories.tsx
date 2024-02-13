import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDialogState } from 'reakit';
import { ISearchHits } from 'spock-react/components/search-hits-types';
import { IScore } from 'spock-react/components/search-types';

import { getScoreMock } from '../../../mocks/mock.utils';
import mockData from '../../../mocks/fullSummary.mock.json';
import { SearchHits } from './SearchHits';

const arg: ISearchHits = {
    searchHits: getScoreMock(),

    summary: mockData,
    setSearchHits: (searchHits: IScore[] | null) => {
        // eslint-disable-next-line no-console
        console.log('SEARCH HITS: ', searchHits);
    },
    setSearchInput: (input: string) => {
        // eslint-disable-next-line no-console
        console.info('INPUT: ', input);
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    dialog: () => {},
};

const meta = {
    title: 'Components/Search/Hits',
    component: SearchHits,
    decorators: [
        (Story): React.JSX.Element => {
            const dialog = useDialogState();

            return (
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/*"
                            element={
                                <div className="w-180">
                                    <Story args={{ ...arg, dialog }} />
                                </div>
                            }
                        />
                    </Routes>
                </BrowserRouter>
            );
        },
    ],
    tags: ['autodocs'],
} satisfies Meta<typeof SearchHits>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchHitsComponent: Story = {
    name: 'Search Hits',
    args: arg,
};
