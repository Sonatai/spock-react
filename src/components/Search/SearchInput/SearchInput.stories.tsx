import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import mockData from '../../../mocks/fullSummary.mock.json';
import { SearchInput } from './SearchInput';

const meta = {
    title: 'Components/Search/Input',
    component: SearchInput,
    decorators: [
        (Story): React.JSX.Element => {
            const [input, setInput] = useState<string>('');
            return (
                <div className="w-96">
                    <Story
                        args={{
                            searchInput: input,
                            setSearchInput: setInput,
                        }}
                    />
                </div>
            );
        },
    ],
    tags: ['autodocs'],
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchInputComponent: Story = {
    name: 'Search Input',
    args: {
        summary: mockData,
        searchInput: '',
        setSearchHits: () => {},
        setSearchInput: () => {},
    },
};
