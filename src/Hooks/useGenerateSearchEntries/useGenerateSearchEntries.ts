import { useEffect, useState } from 'react';
import { ISpecification } from 'spock-react-types';
import { IMinimizedSummaryEntry } from 'spock-react/components/search-types';
import { IGenerateSearchEntries } from 'spock-react/hooks-types';

export const useGenerateSearchEntries = (
    props: IGenerateSearchEntries
): IMinimizedSummaryEntry[] | null => {
    const { summary } = props;

    const [searchEntries, setSearchEntries] = useState<
        IMinimizedSummaryEntry[] | null
    >(null);

    useEffect(() => {
        const minimizedSummary = summary?.specifications.map(
            (entry: ISpecification): IMinimizedSummaryEntry => {
                const features = entry.executedFeatures.map((feature) => ({
                    id: feature.id,
                }));
                return {
                    className: entry.className,
                    features,
                    narrative: entry.narrative,
                    title: entry.title,
                };
            }
        );

        minimizedSummary !== undefined && setSearchEntries(minimizedSummary);
    }, [summary]);

    return searchEntries;
};
