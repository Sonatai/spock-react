import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import mockData from '../../../../mocks/fullSummary.mock.json';
import { getScoreMock } from '../../../../mocks/mock.utils';
import { SearchCard } from './SearchCard';

const meta = {
    title: 'Components/Search/Hits/Card',
    component: SearchCard,
    decorators: [
        (Story): React.JSX.Element => {
            return (
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/*"
                            element={
                                <div className="w-180">
                                    <Story />
                                </div>
                            }
                        />
                    </Routes>
                </BrowserRouter>
            );
        },
    ],
    tags: ['autodocs'],
} satisfies Meta<typeof SearchCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchCardComponent: Story = {
    name: 'Search Card',
    args: {
        hit: getScoreMock()[0],
        spec: mockData.specifications[0],
        feature: undefined,
        onClick: () => {},
    },
};
