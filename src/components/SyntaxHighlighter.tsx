import { Prism } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface ISyntaxHighlighter {
    code: string;
    language: string;
}

export const SyntaxHighlighter = (props: ISyntaxHighlighter): JSX.Element => {
    const { code, language } = props;

    return (
        <Prism language={language} style={dracula} showLineNumbers>
            {code.replace(/\n$/, '')}
        </Prism>
    );
};
