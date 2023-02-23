import { useEffect, useState } from 'react';

import {
    cleanedSearchData,
    IMinimizedSummaryEntry,
    ISearchEntry,
} from '../components/Search/generateSearchEntries';
import { ISpecification, ISummary } from './useGetSummary';

interface IGenerateSearchEntries {
    summary?: ISummary;
}

export const useGenerateSearchEntries = (props: IGenerateSearchEntries) => {
    const { summary } = props;

    const [searchEntries, setSearchEntries] = useState<ISearchEntry[] | null>(
        null
    );

    useEffect(() => {
        const minimizedSummary = summary?.specifications.map(
            (entry: ISpecification): IMinimizedSummaryEntry => ({
                className: entry.className,
                features: entry.executedFeatures,
                narrative: entry.narrative,
                title: entry.title,
            })
        );

        minimizedSummary &&
            setSearchEntries(cleanedSearchData(minimizedSummary));
    }, [summary]);

    return { searchEntries };
};
