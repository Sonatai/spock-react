import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import * as config from '../environment.json';
import { MainNav } from './components/MainNav/MainNav';
import { LoadingSpinner } from './components/shared/LoadingSpinner/LoadingSpinner';
import { MarkdownPage } from './components/shared/MarkdownPage';
import { Message } from './components/shared/Message/Message';
import { useGetSummary } from './Hooks/useGetSummary';
import { Document } from './pages/Document';
import buildingFromSource from './pages/GettingStarted/BuildingFromSource.md';
import gswApacheMavenPath from './pages/GettingStarted/GettingStartedWithApacheMaven.md';
import gswGradlePath from './pages/GettingStarted/GettingStartedWithGradle.md';
import gswGroovyGrape from './pages/GettingStarted/GettingStartedWithGroovyGrape.md';
import gswJitpack from './pages/GettingStarted/GettingStartedWithJitpack.md';
import { NeuralNetworksQuickstart } from './pages/GettingStarted/NeuralNetworksQuickstart/NeuralNetworksQuickstart';
import { Home } from './pages/Home/Home';

export const App = (): JSX.Element => {
    const { data: summary, isLoading, isError } = useGetSummary();

    useEffect(() => {
        document.title = config.appName;
    }, []);

    if (isError) {
        return (
            <Message level="error" headline="The summary couldn't be loaded">
                The summary has some loading problems. Please try again later.
                If the problem still occurs, please open an{' '}
                <a href={config.LinkToIssueReport}>issue</a>.
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
                                path={`/${spec.className}`}
                                element={<Document fileName={spec.className} />}
                                key={nanoid()}
                            />
                        ))}

                        <Route
                            path="/getting-started/neural-networks-quickstart"
                            element={<NeuralNetworksQuickstart />}
                        />
                        <Route
                            path="/getting-started/getting-started-with-apache-maven"
                            element={
                                <MarkdownPage filePath={gswApacheMavenPath} />
                            }
                        />
                        <Route
                            path="/getting-started/getting-started-with-gradle"
                            element={<MarkdownPage filePath={gswGradlePath} />}
                        />
                        <Route
                            path="/getting-started/getting-started-with-jitpack"
                            element={<MarkdownPage filePath={gswJitpack} />}
                        />
                        <Route
                            path="/getting-started/getting-started-with-groovy-grape"
                            element={<MarkdownPage filePath={gswGroovyGrape} />}
                        />
                        <Route
                            path="/getting-started/building-from-source"
                            element={
                                <MarkdownPage filePath={buildingFromSource} />
                            }
                        />
                    </Routes>
                </div>
            </main>
        );
    }
};
