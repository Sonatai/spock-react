import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { App } from './App';
import { Message } from './components/shared/Message/Message';
import * as config from '../environment.json';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter basename={config.rootUrl}>
            <QueryClientProvider client={queryClient}>
                <ErrorBoundary
                    fallback={
                        <Message
                            headline="The webpage couldn't load"
                            level="error"
                        >
                            Sorry but the webpage couldn&apos;t load. Some error
                            happened. Try it later please. If the error occurs,
                            open an issue
                        </Message>
                    }
                >
                    <App />
                </ErrorBoundary>
            </QueryClientProvider>
        </BrowserRouter>
    </React.StrictMode>
);
