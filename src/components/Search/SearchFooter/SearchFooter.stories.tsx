import type { Meta, StoryObj } from '@storybook/react';

import { SearchFooter } from './SearchFooter';

const meta = {
    title: 'Components/Search/Footer',
    component: SearchFooter,
    decorators: [
        (Story): React.JSX.Element => {
            return (
                <div className="w-180">
                    <Story />
                </div>
            );
        },
    ],
    tags: ['autodocs'],
} satisfies Meta<typeof SearchFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchFooterComponent: Story = { name: 'Search Footer' };
