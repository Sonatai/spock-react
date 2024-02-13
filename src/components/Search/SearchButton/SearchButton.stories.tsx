import type { Meta, StoryObj } from '@storybook/react';

import { useDialogState } from 'reakit';

import { SearchButton } from './SearchButton';

const meta = {
    title: 'Components/Search/Button',
    component: SearchButton,
    decorators: [
        (Story): React.JSX.Element => {
            const dialog = useDialogState();

            return (
                <div className="w-96">
                    <Story args={{ dialog }} />
                </div>
            );
        },
    ],
    tags: ['autodocs'],
} satisfies Meta<typeof SearchButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchButtonComponent: Story = {
    name: 'Search Button',
    args: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        dialog: () => {},
    },
};
