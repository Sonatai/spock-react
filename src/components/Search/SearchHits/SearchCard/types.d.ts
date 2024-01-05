declare module 'spock-react/components/search-card-types' {
    import { IExecutedFeatures, ISpecification } from 'spock-react-types';
    import { ISearchHit } from 'spock-react/components/search-types';

    interface ISearchCard {
        onClick: (e?: any) => void;
        hit: ISearchHit;
        spec?: ISpecification;
        feature?: IExecutedFeatures;
    }
}
