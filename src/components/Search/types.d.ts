declare module 'spock-react/components/search-types' {
    import { ISummary } from 'spock-react-types';

    export interface ISearchHit {
        score: number;
        key: string;
    }

    interface ISearch {
        summary: ISummary;
    }

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
}
