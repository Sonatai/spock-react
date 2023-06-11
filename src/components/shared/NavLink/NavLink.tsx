import './styles.css';

import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface INavLink {
    href: string;
    children: string | ReactNode;
}

export const NavLink = (props: INavLink) => {
    const { children: displayText, href } = props;

    return (
        <li className="nav__link__list__item">
            <Link to={href} className="nav__link">
                {displayText}
            </Link>
        </li>
    );
};
