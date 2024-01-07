import axios from 'axios';
import { ISummary } from 'spock-react-types';

import { useQuery, UseQueryResult } from '@tanstack/react-query';

import config from '../../environment.json';

const getSummary = async (): Promise<ISummary> => {
    const data = await axios.get(config.summaryUrl);

    return data.data as ISummary;
};

export const useGetSummary = (): UseQueryResult<ISummary, unknown> => {
    return useQuery<ISummary>({
        queryKey: ['summary'],
        queryFn: async () => await getSummary(),
        gcTime: 60 * 60 * 24,
        staleTime: 60 * 60 * 24,
    });
};
