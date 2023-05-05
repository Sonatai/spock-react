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
            <nav className="main__nav">
                <div className="main__nav__search">
                    <Search summary={summary} />
                </div>

                <h4>Examples</h4>

                <ul className="text-[0.875rem]">
                    <li className="pb-[0.5rem]">
                        <Link to="/">Home</Link>
                    </li>

                    {summary.specifications.map((spec) => (
                        <li className="pb-[0.5rem]" key={nanoid()}>
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
