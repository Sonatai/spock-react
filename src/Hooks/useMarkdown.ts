import { useQuery } from '@tanstack/react-query';

const getMarkdown = async (mdFile: string) => {
    const data = await fetch(mdFile);
    return await data.text();
};

interface IMarkdown {
    filePath: string;
}

export const useMarkdown = (props: IMarkdown) => {
    const { filePath } = props;

    return useQuery<string, string>(
        [filePath],
        async () => await getMarkdown(filePath),
        {
            cacheTime: 60 * 60 * 24,
            staleTime: 60 * 60 * 24,
        }
    );
};
