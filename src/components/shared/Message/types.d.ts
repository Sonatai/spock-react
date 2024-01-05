declare module 'spock-react/shared/message-types' {
    import { ReactNode } from 'react';

    export type TLevel = 'error' | 'success' | 'info' | 'warning';

    export interface IErrorMessage {
        headline: string;
        level: TLevel;
        children: ReactNode;
    }
}
