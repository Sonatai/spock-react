import './styles.css';

import { ReactNode } from 'react';

import { useActiveAnchor } from '../../../Hooks/useActiveAnchor';

interface INavAnchor {
    href: string;
    children: string | ReactNode;
}

export const NavAnchor = (props: INavAnchor) => {
    const { children: displayText, href } = props;

    const { activeAnchor, setActiveAnchor } = useActiveAnchor();

    return (
        <li className="nav__link__list__item">
            <a
                href={`#${href}`}
                className={`nav__link ${
                    activeAnchor === href ? 'nav__link--active' : ''
                }`}
                onClick={() => {
                    setActiveAnchor(href);
                }}
            >
                <span>{displayText}</span>
            </a>
        </li>
    );
};
