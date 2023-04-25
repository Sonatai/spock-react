import { PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

const h1 = tv({
    base: 'text-3xl',
});

const h2 = tv({
    base: 'text-2xl',
});
const h3 = tv({
    base: 'text-xl',
});

const h4 = tv({
    base: 'text-sm',
});

const h5 = tv({
    base: 'text-sm',
});
const h6 = tv({
    base: 'text-sm',
});

interface IHeadingProps {
    headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Heading = (
    props: PropsWithChildren<IHeadingProps>
): JSX.Element => {
    const { children, headingLevel } = props;

    switch (headingLevel) {
        case 'h1':
            return <h1 className={h1()}>{children}</h1>;
        case 'h2':
            return <h2 className={h2()}>{children}</h2>;
        case 'h3':
            return <h3 className={h3()}>{children}</h3>;
        case 'h4':
            return <h4 className={h4()}>{children}</h4>;
        case 'h5':
            return <h5 className={h5()}>{children}</h5>;
        case 'h6':
            return <h6 className={h6()}>{children}</h6>;
    }
};
