import {
    IFeatureScore,
    IMinimizedSummaryEntry,
    IScore,
} from 'spock-react/components/search-types';

export const getSearchScore = (
    searchInput: string,
    specifications: IMinimizedSummaryEntry[]
) => {
    const scores: IScore[] = [];

    const searchTerm = normalizeString(searchInput);

    specifications.forEach((specification) => {
        const normalizedClassName = normalizeString(specification.className);
        const normalizedTitle = normalizeString(specification.title);
        const normalizedNarrative = normalizeString(specification.narrative);
        let score = 0.0;
        const featureScores: IFeatureScore[] = [];

        score += searchScore(
            searchTerm,
            normalizedClassName.replace('.', ' ').replace('_', ' ')
        );
        score += searchScore(searchTerm, normalizedTitle);
        score += searchScore(searchTerm, normalizedNarrative);

        specification.features.forEach((feature) => {
            const normalizedFeature = normalizeString(feature.id);

            const featureScore = featureSearchScore(
                searchTerm,
                normalizedFeature
            );
            featureScores.push({
                id: feature.id,
                score: featureScore,
            });

            score += featureScore;
        });

        const sortedFeatureScores = featureScores.sort(sortScore);
        scores.push({
            id: specification.className,
            score,
            featureScores: sortedFeatureScores,
        });
    });

    const sortedScores = scores.sort(sortScore);
    const chosen = getTop25(sortedScores);

    return chosen;
};

const getTop25 = (sortedScores: IScore[]) => sortedScores.slice(0, 25);

const sortScore = (
    scoreA: IScore | IFeatureScore,
    scoreB: IScore | IFeatureScore
) => scoreB.score - scoreA.score;

const normalizeString = (term: string) => {
    return removeFillWords(term.toLowerCase().trim());
};

const getSearchWordsScore = (searchWords: string[], searchTerm: string) => {
    let searchWordsScore = 0;
    searchWords.forEach((word) => {
        if (word.includes(searchTerm)) {
            searchWordsScore += 0.25;
        }
    });

    return searchWordsScore;
};

const getWordsScore = (words: string[], searchTerm: string) => {
    let wordScore = 0;
    words.forEach((word) => {
        if (word.includes(searchTerm)) {
            wordScore += 1;
        }
    });

    return wordScore;
};

const getWords = (sentence: string) =>
    sentence.split(' ').filter((word) => word.length > 0);

const featureSearchScore = (searchTerm: string, sentence: string) => {
    let score = 0;

    if (searchTerm.length === 0) {
        return 0.0;
    }

    if (sentence.length === 0) {
        return 0.0;
    }

    const words = getWords(sentence);
    const searchWords = getWords(searchTerm);

    const searchWordsScore = getSearchWordsScore(searchWords, searchTerm);
    if (searchWordsScore > 0) {
        score += searchWordsScore / searchWords.length;
    }

    const wordScore = getWordsScore(words, searchTerm);
    if (wordScore === 0) {
        return score;
    }
    score += wordScore / words.length;

    return score;
};

const searchScore = (searchTerm: string, sentence: string) => {
    let score = 0;

    if (searchTerm.length === 0) {
        return 0.0;
    }

    if (sentence.length === 0) {
        return 0.0;
    }

    if (sentence.includes(searchTerm)) {
        score += 1.0;
    }

    const words = getWords(sentence);
    const searchWords = getWords(searchTerm);

    const searchWordsScore = getSearchWordsScore(searchWords, searchTerm);
    if (searchWordsScore > 0) {
        score += searchWordsScore / searchWords.length;
    }

    const wordScore = getWordsScore(words, searchTerm);
    if (wordScore === 0) {
        return score;
    }
    score += wordScore / words.length;

    return score;
};

const removeFillWords = (sentence: string) =>
    sentence
        .replace(regex, ' ')
        .replace(/\s\s/gi, ' ')
        .split(' ')
        .filter(
            (word) =>
                !fillWords.includes(word) && word?.length > 0 && word !== ' '
        )
        .join(' ')
        .trim();

const fillWords = [
    'the',
    'a',
    'an',
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
];

const replaceCharSet = ['.', '`', ',', '"', '?', '_'];

const regex = new RegExp(`[${replaceCharSet.join('')}]`, 'gi');
