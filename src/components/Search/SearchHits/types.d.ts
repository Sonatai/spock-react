declare module 'spock-react/components/search-hits-types' {
    import { ISummary } from 'spock-react-types';
    import { ISearchHit } from 'spock-react/components/search-types';
    import { DialogStateReturn } from 'reakit/ts';

    interface ISearchHits {
        searchHits: ISearchHit[] | null;
        setSearchHits: (searchHits: ISearchHit[] | null) => void;
        summary: ISummary;
        setSearchInput: (input: string) => void;
        dialog: DialogStateReturn;
    }
}
