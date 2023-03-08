import React, { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import testingStuff, { render, RenderOptions } from '@testing-library/react';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
            },
        },
    });

    return (
        <>
            <BrowserRouter basename="/spock-react">
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </BrowserRouter>
        </>
    );
};

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export { testingStuff as testing, customRender as render };
