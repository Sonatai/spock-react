import { nanoid } from 'nanoid';
import { Fragment } from 'react';

import { Feature } from '../components/Feature/Feature';
import { Divide } from '../components/shared/Divide/Divide';
import { Layout } from '../components/shared/Layout/Layout';
import { useGetSpec } from '../Hooks/useGetSpec';
import { useScrollUp } from '../Hooks/useScrollUp';

interface IExampleOne {
    fileName: string;
}

export const Document = (props: IExampleOne): JSX.Element => {
    const { fileName } = props;

    const { data } = useGetSpec({ fileName });
    useScrollUp();

    return (
        <>
            {data !== undefined && data !== null && (
                <Layout hasOnPageNav features={data.features}>
                    <div className="mb-[3rem]">
                        <h1 className="mb-[0.5rem]">
                            {data.title !== '' ? data.title : data.className}
                        </h1>

                        {`Class name: ${data.className}`}
                    </div>

                    <h2>Description</h2>
                    <pre className="whitespace-pre-line">{data.narrative}</pre>

                    <h2>Features</h2>
                    {data.features.map((feature: any, index: number) => (
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
            )}
        </>
    );
};
