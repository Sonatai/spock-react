import type { Meta, StoryObj } from '@storybook/react';

import { Divide } from './Divide';

const meta = {
    title: 'Shared/Divide',
    component: Divide,
    tags: ['autodocs'],
} satisfies Meta<typeof Divide>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
