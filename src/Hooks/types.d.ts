declare module 'spock-react/hooks-types' {
    import { IFeature, ISummary } from 'spock-react-types';

    export interface IMarkdown {
        filePath: string;
    }

    export interface ISpec {
        className: string;
        statistics: {
            runs: string;
            passed: string;
            failed: string;
            featureFailures: string;
            successRate: string;
            duration: string;
        };
        title: string;
        narrative: string;
        headers: string[];
        tags: any;
        see: any[];
        features: IFeature[];
        generator: string;
    }

    export interface IGetSpec {
        fileName: string;
    }

    export interface IGenerateSearchEntries {
        summary?: ISummary;
    }

    export interface IActiveLink {
        activeLink: string;
        setActiveLink: (newLink: string) => void;
    }

    export interface IActiveAnchor {
        activeAnchor: string;
        setActiveAnchor: (newAnchor: string) => void;
    }
}
