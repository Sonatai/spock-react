import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';

import { Divide } from './shared/Divide/Divide';

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
                            {...props}
                            style={dracula}
                            language={match[1]}
                            showLineNumbers
                        >
                            {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
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
