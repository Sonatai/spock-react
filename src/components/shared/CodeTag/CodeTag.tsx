import { PropsWithChildren } from 'react';
import './styles.css';

export const CodeTag = (props: PropsWithChildren<unknown>) => {
    const { children } = props;

    return <code className="code-tag">{children}</code>;
};
