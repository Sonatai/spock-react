import { MarkdownPage } from '../../components/shared/MarkdownPage';
import filePath from './example.md';

export const MarkdownExample = (): JSX.Element => {
    return <MarkdownPage filePath={filePath} />;
};
