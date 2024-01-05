import { nanoid } from 'nanoid';
import { Fragment } from 'react';

import * as config from '../../../environment.json';
import { useGetSpec, useScrollUp } from '../../Hooks';
import {
    Divide,
    Feature,
    Layout,
    LoadingSpinner,
    MarkdownRenderer,
    Message,
} from '../../components';
import { IDocument } from 'spock-react/pages/document-types';

export const Document = (props: IDocument): JSX.Element => {
    const { fileName } = props;

    const { data, isLoading, isError } = useGetSpec({ fileName });
    useScrollUp();

    if (isError) {
        return (
            <Message level="error" headline={`${fileName} couldn't be loaded`}>
                The page has some loading problems. Please try again later. If
                the problem still occurs, please open an{' '}
                <a href={config.LinkToIssueReport}>issue</a>.
            </Message>
        );
    } else if (isLoading || data === undefined) {
        return <LoadingSpinner isLoading={isLoading} />;
    } else {
        return (
            <Layout hasOnPageNav features={data?.features}>
                <div className="mb-[3rem]">
                    <h1 className="mb-[0.5rem]">
                        {data?.title !== '' ? data.title : data.className}
                    </h1>

                    {`Class name: ${data.className}`}
                </div>

                <h2>Description</h2>
                <MarkdownRenderer>{data.narrative}</MarkdownRenderer>

                <h2>Features</h2>
                {data.features.map((feature, index) => (
                    <Fragment key={nanoid()}>
                        <Feature
                            blocks={feature.blocks}
                            id={feature.id}
                            key={nanoid()}
                        />

                        {index < data.features.length - 1 && <Divide />}
                    </Fragment>
                ))}
            </Layout>
        );
    }
};
