import axios from 'axios';

import { useQuery, UseQueryResult } from '@tanstack/react-query';

import config from '../../environment.json';

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

const getSpec = async (file: string): Promise<ISpec> => {
    const data = await axios.get(`${config.specUrl}/${file}.json`);

    return data.data as ISpec;
};

interface IGetSpec {
    fileName: string;
}

export const useGetSpec = (props: IGetSpec): UseQueryResult<ISpec, unknown> => {
    const { fileName } = props;

    return useQuery<ISpec>({
        queryKey: [fileName],
        queryFn: async () => await getSpec(fileName),
        gcTime: 60 * 60 * 24,
        staleTime: 60 * 60 * 24,
    });
};
