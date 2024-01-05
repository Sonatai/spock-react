import './styles.css';

import { Link } from 'react-router-dom';

import { INavLink } from 'spock-react/shared/nav-link-types';
import { useActiveLink } from '../../../Hooks';

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
