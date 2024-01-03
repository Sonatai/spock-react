import { create } from 'zustand';
import * as config from '../../environment.json';
import { IActiveLink } from 'spock-react/hooks-types';

const getInitialState = () => {
    const pageAndAnchor = window.location.pathname.split('#');
    const page =
        pageAndAnchor[0] === config.rootUrl
            ? '/'
            : pageAndAnchor[0].replace(config.rootUrl, '');

    return page;
};

export const useActiveLink = create<IActiveLink>((set) => ({
    activeLink: getInitialState(),
    setActiveLink: (newLink: string) => {
        set({ activeLink: newLink });
    },
}));
