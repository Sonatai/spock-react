import { IFeatureScore, IScore } from 'spock-react/components/search-types';

import mockData from './fullSummary.mock.json';

export const getScoreMock = () =>
    mockData.specifications.slice(0, 10).map((data) => {
        const featureScores = data.executedFeatures.map((f) => {
            const featureScore: IFeatureScore = {
                id: f.id,
                score: 1,
            };

            return featureScore;
        });

        const score: IScore = {
            id: data.className,
            score: 1,
            featureScores,
        };

        return score;
    });
