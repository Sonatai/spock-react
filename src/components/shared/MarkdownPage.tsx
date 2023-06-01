import { MarkdownRenderer } from './MarkdownRenderer';
import { Layout } from './Layout/Layout';

interface IMarkdownPage {
    children: string;
}

export const MarkdownPage = (props: IMarkdownPage): JSX.Element => {
    const { children } = props;
    return (
        <Layout>
            <MarkdownRenderer>{children}</MarkdownRenderer>
        </Layout>
    );
};
