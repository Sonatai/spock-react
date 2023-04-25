import { nanoid } from 'nanoid';
import { Link, Route, Routes } from 'react-router-dom';

import { LoadingSpinner } from './components/LoadingSpinner/LoadingSpinner';
import { Search } from './components/Search/Search';
import { useGetSummary } from './Hooks/useGetSummary';
import { Document } from './pages/Document';
import { Start } from './pages/Start';

/*
#ff3f81
#23153c
#121417
#1E293B
#F5D547
*/

export const App = (): JSX.Element => {
    const { data: summary, isLoading, isError } = useGetSummary();

    return (
        <>
            {!isError && <LoadingSpinner isLoading={isLoading} />}

            <main>
                <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
                    {summary !== undefined && summary !== null && (
                        <div className="hidden lg:block fixed z-20 inset-0 left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto pt-[0.25rem]">
                            <nav className="lg:text-sm lg:leading-6 relative">
                                <div className="sticky top-0 -ml-0.5">
                                    <Search summary={summary} />
                                </div>

                                <h5>Examples</h5>

                                <ul className="text-[0.875rem]">
                                    <li className="pb-[0.5rem]">
                                        <Link to="/">Home</Link>
                                    </li>

                                    {summary.specifications.map((spec) => (
                                        <li
                                            className="pb-[0.5rem]"
                                            key={nanoid()}
                                        >
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
                    )}
                    <Routes>
                        <Route path="/" element={<Start />} />
                        {summary?.specifications.map((spec) => (
                            <Route
                                path={spec.className}
                                element={<Document fileName={spec.className} />}
                                key={nanoid()}
                            />
                        ))}
                    </Routes>
                </div>
            </main>
        </>
    );
};
