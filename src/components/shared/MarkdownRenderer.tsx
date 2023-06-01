import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { SyntaxHighlighter } from './SyntaxHighlighter';
import { Divide } from './Divide/Divide';

interface IMarkdownRenderer {
    children: string;
}

export const MarkdownRenderer = (props: IMarkdownRenderer) => {
    const { children: content } = props;

    return (
        <ReactMarkdown
            components={{
                code({ inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className ?? '');
                    return (inline === undefined || !inline) &&
                        match !== null ? (
                        <SyntaxHighlighter
                            code={String(children)}
                            language={match[1]}
                        />
                    ) : (
                        <code {...props} className={className}>
                            {children}
                        </code>
                    );
                },
                hr() {
                    return <Divide />;
                },
            }}
            remarkPlugins={[remarkGfm]}
        >
            {content}
        </ReactMarkdown>
    );
};
