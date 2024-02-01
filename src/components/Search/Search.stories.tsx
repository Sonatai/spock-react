import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Search } from './Search';
import mockData from './search.mock.json';

/***
 * !TODO: Wrap router
 */

const meta = {
    title: 'Search',
    component: Search,
    decorators: [
        (Story): React.JSX.Element => {
            return (
                <BrowserRouter>
                    <Routes>
                        <Route path="/*" element={<Story />} />
                    </Routes>
                </BrowserRouter>
            );
        },
    ],
    tags: ['autodocs'],
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
    args: { summary: mockData },
};
