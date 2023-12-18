import axios from 'axios';

import { useQuery, UseQueryResult } from '@tanstack/react-query';

import config from '../../environment.json';

const getSummary = async (): Promise<ISummary> => {
    const data = await axios.get(config.summaryUrl);

    return data.data as ISummary;
};

export interface IExecutedFeatures {
    id: string;
    extraInfo: any[];
}

export interface ISpecification {
    className: string;
    title: string;
    narrative: string;
    featureCount: string;
    failures: string;
    errors: string;
    skipped: string;
    successRate: string;
    duration: string;
    executedFeatures: IExecutedFeatures[];
    ignoredFeatures: any[];
}

export interface ISummary {
    generator: string;
    project: string;
    version: string;
    created: string;
    statistics: {
        runs: string;
        passed: string;
        failed: string;
        featureFailures: string;
        successRate: string;
        duration: string;
    };
    specifications: ISpecification[];
}

export const useGetSummary = (): UseQueryResult<ISummary, unknown> => {
    return useQuery<ISummary>({
        queryKey: ['summary'],
        queryFn: async () => await getSummary(),
        gcTime: 60 * 60 * 24,
        staleTime: 60 * 60 * 24,
    });
};
