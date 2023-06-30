import './styles.css';

import { nanoid } from 'nanoid';
import { Fragment } from 'react';

import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SyntaxHighlighter } from '../shared/SyntaxHighlighter';
import { IRow, ResponsiveTable } from '../shared/Table';

/*
className === unique key for spec
executedFeatures === unique key for test
feature.id === unique key for test
kind: GIVEN | WHEN | THEN | AND | CLEANUP | WHERE | EXPECT
*/

export interface IBlock {
    kind: string;
    text: string;
    /* eslint-disable  @typescript-eslint/consistent-indexed-object-style */
    code: string[] | { [key: string]: string[] };
}

export interface IFeature {
    id: string;
    blocks: IBlock[];
}

interface IWhereTable {
    /* eslint-disable  @typescript-eslint/consistent-indexed-object-style */
    data: { [key: string]: string[] };
}

// It gives you a responsive table with the where-table from the specs
const WhereTable = (props: IWhereTable): JSX.Element => {
    const { data } = props;
    const headers = Object.keys(data);

    /* -----------------------  Start  ----------------------- */
    // rawRows => converted columns that doesn't match table type 😩
    const rawRows = Array.from({ length: Object.values(data)[0].length }, () =>
        Array.from({ length: headers.length })
    );

    for (const [index, [_key, values]] of Object.entries(
        Object.entries(data)
    )) {
        for (let i = 0; i < values.length; i++) {
            rawRows[i][parseInt(index)] = values[i];
        }
    }
    /* -----------------------  End  ------------------------ */

    const rows = rawRows.map((row) => ({ row }));

    return <ResponsiveTable headers={headers} rows={rows as IRow[]} />;
};

export const Feature = (props: IFeature): JSX.Element => {
    const { id, blocks } = props;

    return (
        <section id={id}>
            <div className="feature__headline group">
                <h3>
                    <a href={`#${id}`} className="">
                        {id}
                        <FontAwesomeIcon
                            icon={faHashtag}
                            size="lg"
                            className="feature__headline__hashtag"
                        />
                    </a>
                </h3>
            </div>
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
                        {block.kind !== 'where' &&
                            (block.code as string[]).length > 0 && (
                                <SyntaxHighlighter
                                    code={(block.code as string[]).join('\n')}
                                    language="groovy"
                                />
                            )}
                        {block.kind === 'where' && (
                            <WhereTable
                                data={block.code as { [key: string]: string[] }}
                            />
                        )}
                    </Fragment>
                ))}
            </div>
        </section>
    );
};

const toLowerFirstLetter = (sentence: string) =>
    sentence.trim().charAt(0).toLowerCase() + sentence.substring(1);
