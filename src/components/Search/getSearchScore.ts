export const getSearchScore = (
    searchInput: string,
    keywords: string[]
): number => {
    let score = 0;

    const searchInputs = searchInput
        .split(' ')
        .filter((word) => word?.length > 0);

    searchInputs.forEach((word) => {
        if (keywords.includes(word)) {
            score += keywords.indexOf(word);
        }
    });

    return score;
};
