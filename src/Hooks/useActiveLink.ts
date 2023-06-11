import { create } from 'zustand';

interface IActiveLink {
    activeLink: string;
    setActiveLink: (newLink: string) => void;
}
export const useActiveLink = create<IActiveLink>((set) => ({
    activeLink: '',
    setActiveLink: (newLink: string) => {
        set({ activeLink: newLink });
    },
}));
