declare module 'spock-react/components/search-card-types' {
    import { IExecutedFeatures, ISpecification } from 'spock-react-types';
    import { IScore } from 'spock-react/components/search-types';

    interface ISearchCard {
        onClick: (e?: any) => void;
        hit: IScore;
        spec?: ISpecification;
        feature?: IExecutedFeatures;
    }
}
