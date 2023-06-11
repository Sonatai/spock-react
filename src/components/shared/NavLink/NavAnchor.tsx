import { ReactNode } from 'react';
import './styles.css';
import { useActiveAnchor } from '../../../Hooks/useActiveAnchor';

interface INavAnchor {
    href: string;
    children: string | ReactNode;
    id: string;
}

export const NavAnchor = (props: INavAnchor) => {
    const { children: displayText, href, id } = props;

    const { activeAnchor, setActiveAnchor } = useActiveAnchor();

    return (
        <li className="nav__link__list__item">
            <a
                href={href}
                className={`nav__link ${
                    activeAnchor === id ? 'nav__link--active' : ''
                }`}
                onClick={() => {
                    setActiveAnchor(id);
                }}
            >
                <span>{displayText}</span>
            </a>
        </li>
    );
};
