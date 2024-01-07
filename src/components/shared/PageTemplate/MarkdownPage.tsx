import { IMarkdownPage } from 'spock-react/shared/page-template-types';

import { Layout, LoadingSpinner, MarkdownRenderer, Message } from '../';
import * as config from '../../../../environment.json';
import { useMarkdown, useScrollUp } from '../../../Hooks';

export const MarkdownPage = (props: IMarkdownPage): JSX.Element => {
    const { filePath } = props;

    useScrollUp();
    const { data, isLoading, isError } = useMarkdown({ filePath });

    if (isError) {
        return (
            <Message level="error" headline="Page couldn't be loaded">
                Sorry the page could not be loaded. Please try again later. If
                the error still occurs, please open an{' '}
                <a href={config.LinkToIssueReport}>issue</a>.
            </Message>
        );
    } else if (isLoading || data === undefined) {
        return <LoadingSpinner isLoading={isLoading} />;
    } else {
        return (
            <Layout>
                <MarkdownRenderer>{data}</MarkdownRenderer>
            </Layout>
        );
    }
};
