declare module 'spock-react/components/search-input-types' {
    import { ISummary } from 'spock-react-types';
    import { IScore } from 'spock-react/components/search-types';

    interface ISearchInput {
        summary: ISummary;
        setSearchHits: (searchHits: IScore[] | null) => void;
        setSearchInput: (input: string) => void;
        searchInput: string;
    }
}
