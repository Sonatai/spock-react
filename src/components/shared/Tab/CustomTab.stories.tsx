import type { Meta, StoryObj } from '@storybook/react';
import { SyntaxHighlighter } from '../SyntaxHighlighter';
import { CustomTab } from './CustomTab';

const meta = {
    title: 'shared/CustomTab',
    component: CustomTab,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof CustomTab>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Tab: Story = {
    args: {
        tabConfigs: [
            {
                header: 'Groovy',
                content: (
                    <SyntaxHighlighter
                        code="var settings = Neureka.get().settings()"
                        language="groovy"
                    />
                ),
            },
            {
                header: 'Java',
                content: (
                    <SyntaxHighlighter
                        code="var settings = Neureka.get().settings();"
                        language="java"
                    />
                ),
            },
            {
                header: 'Kotlin',
                content: (
                    <SyntaxHighlighter
                        code="var settings = Neureka.get().settings()"
                        language="kotlin"
                    />
                ),
            },
        ],
    },
};
