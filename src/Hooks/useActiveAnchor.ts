import { create } from 'zustand';

interface IActiveAnchor {
    activeAnchor: string;
    setActiveAnchor: (newAnchor: string) => void;
}
export const useActiveAnchor = create<IActiveAnchor>((set) => ({
    activeAnchor: '',
    setActiveAnchor: (newAnchor: string) => {
        set({ activeAnchor: newAnchor });
    },
}));
