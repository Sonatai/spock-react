import './styles.css';

import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { useActiveLink } from '../../../Hooks';

interface INavLink {
    href: string;
    children: string | ReactNode;
}

export const NavLink = (props: INavLink): JSX.Element => {
    const { children: displayText, href } = props;

    const { activeLink, setActiveLink } = useActiveLink();

    return (
        <li className="nav__link__list__item mr-2">
            <Link
                to={href}
                className={`nav__link ${
                    activeLink === href ? 'nav__link--active' : ''
                }`}
                onClick={() => {
                    setActiveLink(href);
                }}
            >
                {displayText}
            </Link>
        </li>
    );
};
