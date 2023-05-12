import { nanoid } from 'nanoid';
import { Route, Routes } from 'react-router-dom';

import { LoadingSpinner } from './components/LoadingSpinner/LoadingSpinner';
import { MainNav } from './components/MainNav/MainNav';
import { useGetSummary } from './Hooks/useGetSummary';
import { Document } from './pages/Document';
import { Home } from './pages/Home/Home';
import { MarkdownExample } from './pages/MarkdownPages/MarkdownExample';

export const App = (): JSX.Element => {
    const { data: summary, isLoading, isError } = useGetSummary();

    return (
        <>
            {!isError && <LoadingSpinner isLoading={isLoading} />}

            <main>
                <div className="app">
                    {summary !== undefined && summary !== null && (
                        <MainNav summary={summary} />
                    )}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {summary?.specifications.map((spec) => (
                            <Route
                                path={spec.className}
                                element={<Document fileName={spec.className} />}
                                key={nanoid()}
                            />
                        ))}
                        <Route path="/markdown" element={<MarkdownExample />} />
                    </Routes>
                </div>
            </main>
        </>
    );
};
