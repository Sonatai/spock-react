import { Prism } from 'react-syntax-highlighter';
import { gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface ISyntaxHighlighter {
    code: string;
    language: string;
}

/**
 * Have no accessibility problems:
 * a11yDark
 * coldarkDark
 * gruvboxDark
 */

export const SyntaxHighlighter = (props: ISyntaxHighlighter): JSX.Element => {
    const { code, language } = props;

    return (
        <Prism language={language} style={gruvboxDark} showLineNumbers>
            {code.replace(/\n$/, '')}
        </Prism>
    );
};
