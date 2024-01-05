declare module 'spock-react/shared/tab-types' {
    import { ReactNode } from 'react';

    interface ITab {
        content: ReactNode;
        header: string;
    }

    export interface ICustomTab {
        tabConfigs: ITab[];
    }
}
