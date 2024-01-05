declare module 'spock-react/shared/layout-types' {
    import { IFeature, IMinimalFeature } from 'spock-react-types';

    export interface ILayout {
        hasOnPageNav?: boolean;
        features?: IFeature[];
    }

    interface IOnPageNave {
        features: IMinimalFeature[];
    }
}
