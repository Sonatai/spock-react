import { type PropsWithChildren } from 'react';

export const Container = (props: PropsWithChildren): JSX.Element => {
    const { children } = props;

    return (
        <main className="max-w-7xl mx-auto flex bg-[#29000E] bg-opacity-30 shadow-2xl shadow-[#ff3f81]">
            {children}
        </main>
    );
};
