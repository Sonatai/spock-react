import './styles.css';

import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useActiveLink } from '../../../Hooks/useActiveLink';

interface INavLink {
    href: string;
    children: string | ReactNode;
    id: string;
}

export const NavLink = (props: INavLink): JSX.Element => {
    const { children: displayText, href, id } = props;

    const { activeLink, setActiveLink } = useActiveLink();

    return (
        <li className="nav__link__list__item">
            <Link
                to={href}
                className={`nav__link ${
                    activeLink === id ? 'nav__link--active' : ''
                }`}
                onClick={() => {
                    setActiveLink(id);
                }}
            >
                {displayText}
            </Link>
        </li>
    );
};
