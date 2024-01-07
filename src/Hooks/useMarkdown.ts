import { IMarkdown } from 'spock-react/hooks-types';

import { useQuery } from '@tanstack/react-query';

const getMarkdown = async (mdFile: string) => {
    const data = await fetch(mdFile);
    return await data.text();
};

export const useMarkdown = (props: IMarkdown) => {
    const { filePath } = props;

    return useQuery<string, string>({
        queryKey: [filePath],
        queryFn: async () => await getMarkdown(filePath),
        gcTime: 60 * 60 * 24,
        staleTime: 60 * 60 * 24,
    });
};
