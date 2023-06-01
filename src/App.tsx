import { nanoid } from 'nanoid';
import { Route, Routes } from 'react-router-dom';

import { LoadingSpinner } from './components/shared/LoadingSpinner/LoadingSpinner';
import { MainNav } from './components/MainNav/MainNav';
import { useGetSummary } from './Hooks/useGetSummary';
import { Document } from './pages/Document';
import { Home } from './pages/Home/Home';
import { MarkdownExample } from './pages/MarkdownPages/MarkdownExample';
import { Message } from './components/shared/Message/Message';

export const App = (): JSX.Element => {
    const { data: summary, isLoading, isError } = useGetSummary();

    if (isError) {
        return (
            <Message level="error" headline={`The summary couldn't be loaded`}>
                The summary has some loading problems. Please try again later.
                If the problem still occurs, please open an{' '}
                <a href="https://github.com/Sonatai/spock-react/issues">
                    issue
                </a>
                .
            </Message>
        );
    } else if (isLoading) {
        return <LoadingSpinner isLoading={isLoading} />;
    } else {
        return (
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
        );
    }
};
