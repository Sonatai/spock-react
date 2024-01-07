import { useEffect, useState } from 'react';
import { ISpecification } from 'spock-react-types';
import {
    IMinimizedSummaryEntry,
    ISearchEntry,
} from 'spock-react/components/search-types';
import { IGenerateSearchEntries } from 'spock-react/hooks-types';

import { cleanedSearchData } from '../components/Search/generateSearchEntries';

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
