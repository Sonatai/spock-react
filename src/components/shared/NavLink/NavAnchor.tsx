import './styles.css';

import { INavLink } from 'spock-react/shared/nav-link-types';

import { useActiveAnchor } from '../../../Hooks';

export const NavAnchor = (props: INavLink) => {
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
