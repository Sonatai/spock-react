import './styles.css';

import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

import { ISummary } from '../../Hooks/useGetSummary';
import { Search } from '../Search/Search';

import GithubLogo from '../../assets/img/github-mark-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faHouseChimney } from '@fortawesome/free-solid-svg-icons';

interface IMainNav {
    summary: ISummary;
}

export const MainNav = (props: IMainNav) => {
    const { summary } = props;

    return (
        <div className="main">
            <Link to="/" className="main__logo">
                Neureka
            </Link>

            <div className="main__search">
                <Search summary={summary} />
            </div>

            <nav className="main__nav">
                <h4>Menu</h4>
                <ul className="main__list">
                    <li className="main__list__item">
                        <Link to="/" className="main__menu">
                            Home{' '}
                            <FontAwesomeIcon
                                icon={faHouseChimney}
                                size="lg"
                                className="main__menu__icon"
                            />
                        </Link>
                    </li>
                    <li className="main__list__item">
                        <Link
                            to="https://github.com/Gleethos/neureka"
                            className="main__menu"
                        >
                            Github{' '}
                            <img
                                src={GithubLogo}
                                alt="Github Logo"
                                className="main__github main__menu__icon"
                            />
                        </Link>
                    </li>
                    <li className="main__list__item">
                        <Link
                            to="https://gleethos.github.io/neureka/jdocs/index.html"
                            className="main__menu"
                        >
                            JDocs
                            <FontAwesomeIcon
                                icon={faBook}
                                size="lg"
                                className="main__menu__icon"
                            />
                        </Link>
                    </li>
                </ul>

                <h4>Getting Started</h4>
                <ul className="main__list">
                    <li className="main__list__item">
                        <Link to="/getting-started/neural-networks-quickstart">
                            Neural Networks Quickstart
                        </Link>
                    </li>
                    <li className="main__list__item">
                        <Link to="/getting-started/getting-started-with-apache-maven">
                            Getting Started With Apache Maven
                        </Link>
                    </li>
                    <li className="main__list__item">
                        <Link to="/getting-started/getting-started-with-gradle">
                            Getting Started With Gradle
                        </Link>
                    </li>
                </ul>
                <h4>Guides & Concepts</h4>
                <ul className="main__list">
                    {summary.specifications.map((spec) => (
                        <li className="main__list__item" key={nanoid()}>
                            <Link to={spec.className}>
                                {spec.title !== ''
                                    ? spec.title
                                    : spec.className}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};
