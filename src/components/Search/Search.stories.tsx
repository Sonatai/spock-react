import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Search } from './Search';
import mockData from '../../mocks/fullSummary.mock.json';

const meta = {
    title: 'Components/Search',
    component: Search,
    decorators: [
        (Story): React.JSX.Element => {
            return (
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/*"
                            element={
                                <div className="w-60">
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
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchComponent: Story = {
    name: 'Search',
    args: { summary: mockData },
};
