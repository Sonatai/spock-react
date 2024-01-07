import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { IMarkdownRenderer } from 'spock-react/shared/markdown-renderer-types';

import {
    Divide,
    MdTable,
    MdTableBody,
    MdTableCell,
    MdTableHead,
    MdTableHeader,
    MdTableRow,
    SyntaxHighlighter,
} from '../..';

export const MarkdownRenderer = (props: IMarkdownRenderer) => {
    const { children: content } = props;

    return (
        <Markdown
            components={{
                code: ({ className, children, ...props }) => {
                    const match = /language-(\w+)/.exec(className ?? '');
                    return match !== null ? (
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
                hr: () => {
                    return <Divide />;
                },
                table: (props) => {
                    const { children } = props;

                    return <MdTable>{children}</MdTable>;
                },
                thead: (props) => {
                    const { children } = props;

                    return <MdTableHead>{children}</MdTableHead>;
                },
                th: (props) => {
                    const { children } = props;

                    return <MdTableHeader>{children}</MdTableHeader>;
                },
                tbody: (props) => {
                    const { children } = props;

                    return <MdTableBody>{children}</MdTableBody>;
                },
                td: (props) => {
                    const { children } = props;

                    return <MdTableCell>{children}</MdTableCell>;
                },
                tr: (props) => {
                    const { children } = props;

                    return <MdTableRow>{children}</MdTableRow>;
                },
            }}
            remarkPlugins={[remarkGfm]}
        >
            {content}
        </Markdown>
    );
};
