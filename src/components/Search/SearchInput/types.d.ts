declare module 'spock-react/components/search-input-types' {
    import { ISummary } from 'spock-react-types';
    import { ISearchHit } from 'spock-react/components/search-types';

    interface ISearchInput {
        summary: ISummary;
        setSearchHits: (searchHits: ISearchHit[] | null) => void;
        setSearchInput: (input: string) => void;
        searchInput: string;
    }
}
