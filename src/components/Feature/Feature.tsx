import './styles.css';

import { nanoid } from 'nanoid';
import { Fragment } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

/*
className === unique key for spec
executedFeatures === unique key for test
feature.id === unique key for test
kind: GIVEN | WHEN | THEN | AND | CLEANUP | WHERE | EXPECT
#ff3f81
*/

export interface IBlock {
    kind: string;
    text: string;
    code: string[];
}

export interface IFeature {
    id: string;
    blocks: IBlock[];
}

export const Feature = (props: IFeature): JSX.Element => {
    const { id, blocks } = props;

    return (
        <section id={id}>
            <h3>
                <a href={`#${id}`}>{id}</a>
            </h3>
            <div>
                {blocks.map((block) => (
                    <Fragment key={nanoid()}>
                        <div className="feature">
                            <em>{block.kind}</em>
                            <div>
                                {block.text !== ''
                                    ? toLowerFirstLetter(block.text)
                                    : '----'}
                            </div>
                        </div>
                        {block.code.length > 0 && (
                            <SyntaxHighlighter
                                language="groovy"
                                style={dracula}
                                showLineNumbers
                            >
                                {block.code.join('\n')}
                            </SyntaxHighlighter>
                        )}
                    </Fragment>
                ))}
            </div>
        </section>
    );
};

const toLowerFirstLetter = (sentence: string) =>
    sentence.trim().charAt(0).toLowerCase() + sentence.substring(1);
