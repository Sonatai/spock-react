import axios from 'axios';

import { useQuery, type UseQueryResult } from '@tanstack/react-query';

const getSpec = async (file: string) => {
    const data = await axios.get(
        `https://raw.githubusercontent.com/Gleethos/neureka/master/docs/spock/reports/${file}.json`
    );

    return data.data;
};

interface IBlock {
    kind: string;
    text: string;
    code: string[];
}

export interface IFeature {
    id: string;
    result: string;
    duration: string;
    iterations: {
        tags: any;
        see: any[];
        extraInfo: any[];
    };
    blocks: IBlock[];
    problems: any[];
}

interface ISpec {
    className: string;
    statistics: {
        runs: string;
        passed: string;
        failed: string;
        featureFailures: string;
        successRate: string;
        duration: string;
    };
    title: string;
    narrative: string;
    headers: string[];
    tags: any;
    see: any[];
    features: IFeature[];
    generator: string;
}

interface IGetSpec {
    fileName: string;
}

export const useGetSpec = (props: IGetSpec): UseQueryResult<ISpec, unknown> => {
    const { fileName } = props;

    return useQuery<ISpec>([fileName], async () => await getSpec(fileName), {
        cacheTime: 60 * 60 * 24,
        staleTime: 60 * 60 * 24,
    });
};
