import { create } from 'zustand';

const getInitialState = () => {
    const pageAndAnchor = window.location.pathname.split('#');
    const page =
        pageAndAnchor[0] === '/spock-react/'
            ? '/'
            : pageAndAnchor[0].replace('/spock-react', '');

    return page;
};

interface IActiveLink {
    activeLink: string;
    setActiveLink: (newLink: string) => void;
}
export const useActiveLink = create<IActiveLink>((set) => ({
    activeLink: getInitialState(),
    setActiveLink: (newLink: string) => {
        set({ activeLink: newLink });
    },
}));
