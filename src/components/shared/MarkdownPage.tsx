import { useMarkdown } from '../../Hooks/useMarkdown';
import { Layout } from './Layout/Layout';
import { LoadingSpinner } from './LoadingSpinner/LoadingSpinner';
import { MarkdownRenderer } from './MarkdownRenderer';
import { Message } from './Message/Message';

interface IMarkdownPage {
    filePath: string;
}

export const MarkdownPage = (props: IMarkdownPage): JSX.Element => {
    const { filePath } = props;

    const { data, isLoading, isError } = useMarkdown({ filePath });

    if (isError) {
        return (
            <Message level="error" headline="Page couldn't be loaded">
                Sorry the page could not be loaded. Please try again later. If
                the error still occurs, please open an{' '}
                <a href="https://github.com/Sonatai/spock-react/issues">
                    issue
                </a>
                .
            </Message>
        );
    } else if (isLoading) {
        return <LoadingSpinner isLoading={isLoading} />;
    } else {
        return (
            <Layout>
                <MarkdownRenderer>{data}</MarkdownRenderer>
            </Layout>
        );
    }
};
