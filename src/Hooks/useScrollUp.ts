import { useEffect } from 'react';

export const useScrollUp = () => {
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, [window, location.pathname]);
};
