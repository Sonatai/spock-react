declare module 'spock-react-types' {
    export interface IExecutedFeatures {
        id: string;
        extraInfo: any[];
    }

    export interface ISpecification {
        className: string;
        title: string;
        narrative: string;
        featureCount: string;
        failures: string;
        errors: string;
        skipped: string;
        successRate: string;
        duration: string;
        executedFeatures: IExecutedFeatures[];
        ignoredFeatures: any[];
    }

    export interface ISummary {
        generator: string;
        project: string;
        version: string;
        created: string;
        statistics: {
            runs: string;
            passed: string;
            failed: string;
            featureFailures: string;
            successRate: string;
            duration: string;
        };
        specifications: ISpecification[];
    }

    interface IBlock {
        kind: string;
        text: string;
        /* eslint-disable  @typescript-eslint/consistent-indexed-object-style */
        code: string[] | { [key: string]: string[] };
    }

    export interface IFeature {
        id: string;
        result: string;
        duration: string;
        iterations: {
            tags: any;
            see: any[];
            extraInfo: any[];
        };
        blocks: IBlock[];
        problems: any[];
    }

    export interface IMinimalFeature {
        id: string;
        blocks: IBlock[];
    }
}
