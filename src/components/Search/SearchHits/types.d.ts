declare module 'spock-react/components/search-hits-types' {
    import { DialogStateReturn } from 'reakit/ts';
    import { ISummary } from 'spock-react-types';
    import { IScore } from 'spock-react/components/search-types';

    interface ISearchHits {
        searchHits: IScore[] | null;
        setSearchHits: (searchHits: IScore[] | null) => void;
        summary: ISummary;
        setSearchInput: (input: string) => void;
        dialog: DialogStateReturn;
    }
}
