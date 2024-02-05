declare module 'spock-react/components/search-types' {
    import { ISummary } from 'spock-react-types';

    interface ISearch {
        summary: ISummary;
    }

    export interface IMinimizedSummaryEntry {
        className: string;
        title: string;
        narrative: string;
        features: Array<{ id: string }>;
    }

    interface IScore {
        id: string;
        score: number;
        featureScores: IFeatureScore[];
    }

    interface IFeatureScore {
        id: string;
        score: number;
    }
}
