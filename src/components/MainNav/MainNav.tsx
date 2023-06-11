import './styles.css';

import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

import { faBook, faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import GithubLogo from '../../assets/img/github-mark-white.png';
import { ISummary } from '../../Hooks/useGetSummary';
import { Search } from '../Search/Search';
import { NavLink } from '../shared/NavLink/NavLink';
import { useActiveLink } from '../../Hooks/useActiveLink';

interface IMainNav {
    summary: ISummary;
}

export const MainNav = (props: IMainNav) => {
    const { summary } = props;
    const { setActiveLink } = useActiveLink();

    return (
        <div className="main">
            <Link
                to="/"
                className="main__logo"
                onClick={() => {
                    setActiveLink('home');
                }}
            >
                Neureka
            </Link>

            <div className="main__search">
                <Search summary={summary} />
            </div>

            <nav className="main__nav">
                <h4>Menu</h4>
                <ul className="main__list">
                    <NavLink href="/" id="home">
                        Home{' '}
                        <FontAwesomeIcon
                            icon={faHouseChimney}
                            size="lg"
                            className="main__menu__icon"
                        />
                    </NavLink>

                    <NavLink
                        href="https://github.com/Gleethos/neureka"
                        id="github"
                    >
                        Github{' '}
                        <img
                            src={GithubLogo}
                            alt="Github Logo"
                            className="main__github main__menu__icon"
                        />
                    </NavLink>

                    <NavLink
                        href="https://gleethos.github.io/neureka/jdocs/index.html"
                        id="jdocs"
                    >
                        JDocs
                        <FontAwesomeIcon
                            icon={faBook}
                            size="lg"
                            className="main__menu__icon"
                        />
                    </NavLink>
                </ul>

                <h4>Getting Started</h4>
                <ul className="main__list">
                    <NavLink
                        href="/getting-started/neural-networks-quickstart"
                        id="nnq"
                    >
                        Neural Networks Quickstart
                    </NavLink>
                    <NavLink
                        href="/getting-started/getting-started-with-apache-maven"
                        id="gswApacheMaven"
                    >
                        Getting Started With Apache Maven
                    </NavLink>
                    <NavLink
                        href="/getting-started/getting-started-with-gradle"
                        id="gswGradle"
                    >
                        Getting Started With Gradle
                    </NavLink>
                    <NavLink
                        href="/getting-started/getting-started-with-jitpack"
                        id="gswJitpack"
                    >
                        Getting Started With Jitpack
                    </NavLink>
                    <NavLink
                        href="/getting-started/getting-started-with-groovy-grape"
                        id="gswGroovyGrape"
                    >
                        Getting Started With Groovy Grape
                    </NavLink>
                    <NavLink
                        href="/getting-started/building-from-source"
                        id="bfs"
                    >
                        Building From Source
                    </NavLink>
                </ul>
                <h4>Guides & Concepts</h4>
                <ul className="main__list">
                    {summary.specifications.map((spec) => (
                        <NavLink
                            href={spec.className}
                            key={nanoid()}
                            id={spec.className}
                        >
                            {spec.title !== '' ? spec.title : spec.className}
                        </NavLink>
                    ))}
                </ul>
            </nav>
        </div>
    );
};
