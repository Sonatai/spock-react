import { Prism } from 'react-syntax-highlighter';
import { gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ISyntaxHighlighter } from 'spock-react/shared/syntax-highlighter-types';

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
