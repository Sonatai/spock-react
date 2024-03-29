import { IActiveAnchor } from 'spock-react/hooks-types';
import { create } from 'zustand';

const getInitialState = () => {
    const urlParts = window.location.href
        .split('/')
        .filter((part) => part !== '');
    const pageAndAnchor = urlParts[urlParts.length - 1].split('#');

    return pageAndAnchor.length === 2 ? decodeURI(pageAndAnchor[1]) : '';
};

export const useActiveAnchor = create<IActiveAnchor>((set) => ({
    activeAnchor: getInitialState(),
    setActiveAnchor: (newAnchor: string) => {
        set({ activeAnchor: newAnchor });
    },
}));
