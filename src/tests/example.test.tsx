import axios from 'axios';
import { describe, expect, test } from 'vitest';

import { renderHook } from '@testing-library/react-hooks';

import { App } from '../App';
import { useGetSummary } from '../Hooks/useGetSummary';
import { HookProvider, render } from '../test-utils';

describe('test', () => {
    test('component example', () => {
        const view = render(<App />);
        expect(view).toBeTruthy();
    });

    test('hook example', async () => {
        const { result, waitFor } = renderHook(() => useGetSummary(), {
            wrapper: HookProvider,
        });

        await waitFor(() => result.current.isSuccess);

        expect(result.current.data).toBeTruthy();
    });

    test('Axios example', async () => {
        const getSummary = async () => {
            const data = await axios.get(
                'https://raw.githubusercontent.com/Gleethos/neureka/master/docs/spock/reports/summary.json'
            );

            return data.data;
        };

        const result = await getSummary();

        expect(result).toBeTruthy();
    });
});
