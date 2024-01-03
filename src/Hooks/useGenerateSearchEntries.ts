import { useEffect, useState } from 'react';

import {
    cleanedSearchData,
    IMinimizedSummaryEntry,
    ISearchEntry,
} from '../components/Search/generateSearchEntries';
import { ISpecification } from 'spock-react-types';
import { IGenerateSearchEntries } from 'spock-react/hooks-types';

export const useGenerateSearchEntries = (
    props: IGenerateSearchEntries
): ISearchEntry[] | null => {
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

        minimizedSummary !== undefined &&
            setSearchEntries(cleanedSearchData(minimizedSummary));
    }, [summary]);

    return searchEntries;
};
