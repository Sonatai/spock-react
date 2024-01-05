import axios from 'axios';

import { useQuery, UseQueryResult } from '@tanstack/react-query';

import config from '../../environment.json';
import { IGetSpec, ISpec } from 'spock-react/hooks-types';

const getSpec = async (file: string): Promise<ISpec> => {
    const data = await axios.get(`${config.specUrl}/${file}.json`);

    return data.data as ISpec;
};

export const useGetSpec = (props: IGetSpec): UseQueryResult<ISpec, unknown> => {
    const { fileName } = props;

    return useQuery<ISpec>({
        queryKey: [fileName],
        queryFn: async () => await getSpec(fileName),
        gcTime: 60 * 60 * 24,
        staleTime: 60 * 60 * 24,
    });
};
