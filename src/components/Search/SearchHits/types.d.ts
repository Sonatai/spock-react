declare module 'spock-react/components/search-hits-types' {
    import { DialogStateReturn } from 'reakit/ts';
    import { ISummary } from 'spock-react-types';
    import { ISearchHit } from 'spock-react/components/search-types';

    interface ISearchHits {
        searchHits: ISearchHit[] | null;
        setSearchHits: (searchHits: ISearchHit[] | null) => void;
        summary: ISummary;
        setSearchInput: (input: string) => void;
        dialog: DialogStateReturn;
    }
}
