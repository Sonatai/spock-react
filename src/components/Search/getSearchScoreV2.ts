import { IMinimizedSummaryEntry } from 'spock-react/components/search-types';

interface IScore {
    id: string;
    score: number;
    featureScores: IFeatureScore[];
}

interface IFeatureScore {
    id: string;
    score: number;
}
export const getSearchScoreV2TS = (
    searchInput: string,
    specifications: IMinimizedSummaryEntry[]
) => {
    console.log('---------------------- TS ------------------------------');
    const scores: IScore[] = [];

    const searchTerm = normalizeString(searchInput);

    specifications.forEach((specification) => {
        const normalizedClassName = normalizeString(specification.className);
        const normalizedTitle = normalizeString(specification.title);
        const normalizedNarrative = normalizeString(specification.narrative);
        let score = 0.0;
        const featureScores: IFeatureScore[] = [];

        // console.log('0 SCORE: ', score);
        const classNameScore = searchScore(
            searchTerm,
            normalizedClassName.replace('.', ' ').replace('_', ' ')
        );
        // console.log('CLASS NAME SCORE: ', classNameScore);
        score += classNameScore;

        score += searchScore(searchTerm, normalizedTitle);
        score += searchScore(searchTerm, normalizedNarrative);

        specification.features.forEach((feature) => {
            const normalizedFeature = normalizeString(feature.id);
            const featureScore = featureSearchScore(
                searchTerm,
                normalizedFeature
            );
            score += featureScore;
            featureScores.push({
                id: feature.id,
                score: featureScore,
            });
        });

        const sortedFeatureScores = featureScores.sort(sortScore);
        scores.push({
            id: specification.className,
            score,
            featureScores: sortedFeatureScores,
        });

        // console.log('FEATURE SCORES: ', featureScores);
    });

    const sortedScores = scores.sort(sortScore);

    const chosen = sortedScores.filter((score) => score.score > 0);

    // console.log('SCORES: ', scores);
    console.log('SORTED SCORE: ', sortedScores);

    // console.log('CHOSEN: ', chosen);
    console.log('-------------------------------------------------------');
};

const sortScore = (
    scoreA: IScore | IFeatureScore,
    scoreB: IScore | IFeatureScore
) => scoreB.score - scoreA.score;

const normalizeString = (term: string) => term.trim().toLowerCase();

const featureSearchScore = (searchTerm: string, sentence: string) => {
    let score = 0;

    // console.log('SEARCH TERM', searchTerm);
    // console.log('SENTENCE', sentence);
    // console.log('00 SEARCH SCORE', score);

    if (searchTerm.length === 0) {
        // console.log('01 SEARCH SCORE 0 - NOTHING HERE');
        return 0.0;
    }

    if (sentence.length === 0) {
        // console.log('02 SEARCH SCORE 0 - NOTHING HERE');
        return 0.0;
    }

    let words = removeFillWords(sentence.split(' '));

    // console.log('WORDS', words);

    let searchWords = searchTerm.split(' ');
    searchWords = searchWords.filter((word) => word.length > 0);
    words = words.filter((word) => word.length > 0);

    let searchWordsScore = 0;
    if (searchWords.length > 1) {
        searchWords.forEach((word) => {
            if (word.length === 0) {
                // console.log('040 SEARCH SCORE 0 - NOTHING HERE');
                searchWordsScore += 0;
            }

            if (word.includes(searchTerm)) {
                searchWordsScore += 0.25;
                // console.log('041 SEARCH SCORE: ', score);
            }
        });
    }
    if (searchWordsScore > 0) {
        score += searchWordsScore / searchWords.length;
    }

    let wordScore = 0;
    words.forEach((word) => {
        if (word.includes(searchTerm)) {
            wordScore += 1;
        }
    });
    // console.log('05 SEARCH SCORE: ', wordScore);

    if (wordScore === 0) {
        // console.log('06 SEARCH SCORE: ', score);
        return score;
    }
    score += wordScore / words.length;
    // console.log('07 SEARCH SCORE: ', score);

    return score;
};

const searchScore = (searchTerm: string, sentence: string) => {
    let score = 0;

    // console.log('SEARCH TERM', searchTerm);
    // console.log('SENTENCE', sentence);
    // console.log('00 SEARCH SCORE', score);

    if (searchTerm.length === 0) {
        // console.log('01 SEARCH SCORE 0 - NOTHING HERE');
        return 0.0;
    }

    if (sentence.length === 0) {
        // console.log('02 SEARCH SCORE 0 - NOTHING HERE');
        return 0.0;
    }

    if (sentence.includes(searchTerm)) {
        score += 1.0;
        // console.log('03 SEARCH SCORE: ', score);
    }

    let words = removeFillWords(sentence.split(' '));

    // console.log('WORDS', words);

    let searchWords = searchTerm.split(' ');
    searchWords = searchWords.filter((word) => word.length > 0);
    words = words.filter((word) => word.length > 0);

    let searchWordsScore = 0;
    if (searchWords.length > 1) {
        searchWords.forEach((word) => {
            if (word.length === 0) {
                // console.log('040 SEARCH SCORE 0 - NOTHING HERE');
                return 0;
            }

            if (word.includes(searchTerm)) {
                searchWordsScore += 0.25;
                // console.log('041 SEARCH SCORE: ', score);
            }
        });
    }
    if (searchWordsScore > 0) {
        score += searchWordsScore / searchWords.length;
    }

    let wordScore = 0;
    words.forEach((word) => {
        if (word.includes(searchTerm)) {
            wordScore += 0.5;
        }
    });
    // console.log('05 SEARCH SCORE: ', wordScore);

    if (wordScore === 0) {
        // console.log('06 SEARCH SCORE: ', score);
        return score;
    }
    score += wordScore / words.length;
    // console.log('07 SEARCH SCORE: ', score);

    return score;
};

const removeFillWords = (words: string[]) => {
    // We define an array of things to remove ("noisy words"):
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
    ];
    // We create a new array:
    const newWords = [];
    // We then iterate over the words:
    for (let i = 0; i < words.length; i++) {
        // We then check if the word is a fill word:
        if (!fillWords.includes(words[i])) {
            // If it is not, we add it to the new array:
            newWords.push(words[i]);
        }
    }
    // We return the new array:
    return newWords;
};
