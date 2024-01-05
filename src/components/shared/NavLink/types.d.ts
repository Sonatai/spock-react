declare module 'spock-react/shared/nav-link-types' {
    import { ReactNode } from 'react';

    export interface INavLink {
        href: string;
        children: string | ReactNode;
    }
}
