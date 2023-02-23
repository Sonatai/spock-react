export interface IMinimizedSummaryEntry {
    className: string;
    title: string;
    narrative: string;
    features: Array<{ id: string }>;
}

export interface ISearchEntry {
    key: string;
    href?: string;
    keywords: string[];
}

const fillWords = [
    'the',
    'a',
    'of',
    'and',
    'or',
    'in',
    'on',
    'at',
    'to',
    'with',
    'by',
    'as',
    'from',
    'is',
    'of',
    'and',
    'in',
    'on',
    'at',
    'with',
    'by',
    'for',
    'an',
    'be',
    'can',
    'will',
    'there',
    'this',
    'so',
    'use',
];

const replaceCharSet = ['.', '`', ',', '"', '?', '_'];

const re = new RegExp(`[${replaceCharSet.join('')}]`, 'gi');

const searchWords = (sentence: string) =>
    sentence
        .toLowerCase()
        .trim()
        .replace(re, ' ')
        .replace(/\s\s/gi, ' ')
        .split(' ')
        .filter((word) => !fillWords.includes(word) && word?.length > 0)
        .sort();

export const cleanedSearchData = (
    data: IMinimizedSummaryEntry[]
): ISearchEntry[] => {
    const searchEntries: ISearchEntry[] = [];
    data.forEach((entry) => {
        const classNameArr = searchWords(entry.className);
        const narrativeArr = searchWords(entry.narrative);
        const titleArr = searchWords(entry.title);

        searchEntries.push({
            key: entry.className,
            href: undefined,
            keywords: [
                ...new Set(classNameArr.concat(narrativeArr).concat(titleArr)),
            ],
        });

        entry.features.forEach((feature): void => {
            searchEntries.push({
                key: entry.className,
                href: feature.id,
                keywords: [...new Set(searchWords(feature.id))],
            });
        });
    });

    return searchEntries;
};
