import './styles.css';

import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

import { ISummary } from '../../Hooks/useGetSummary';
import { Search } from '../Search/Search';

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
                <ul className="main__list">
                    <li className="main__list__item">
                        <Link to="/">Home</Link>
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
