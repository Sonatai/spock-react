import { expect, test } from 'vitest';

import { renderHook } from '@testing-library/react-hooks';
import { HookProvider } from '../../test-utils';
import mockedSummery from './mock.summary.json';
import { useGenerateSearchEntries } from './useGenerateSearchEntries';
import { IMinimizedSummaryEntry } from 'spock-react/components/search-types';

const minimizedSummaries: IMinimizedSummaryEntry[] = [
    {
        className: 'Example_Spec.Example_Spec',
        title: 'An Introduction to writing Spock Specifications',
        narrative:
            'Hello and welcome to the example / template specification of this project.\n    This is a simple introduction as to how to get started writing Spock specifications.\n\n    Spock works on top of Groovy which is in essence a syntactic super-set of Java.\n    That means that one can write Java code in Groovy, and 99% of the time it will \n    work the exact same way.',
        features: [
            { id: 'Call me feature not unit test!' },
            {
                id: 'I am readable and also best practice!',
            },
            {
                id: 'Numbers to the power of two with a fancy data table!',
            },
        ],
    },
    {
        className: 'it.Calculus_Stress_Test',
        title: '',
        narrative: '',
        features: [
            {
                id: 'Activation functions work across types, on large prime sized 1D slices and non sliced 1D tensors.',
            },
            {
                id: 'Activation functions work across types.',
            },
            {
                id: 'Dot operation stress test runs error free and produces expected result',
            },
        ],
    },
    {
        className: 'it.Cross_Device_Sliced_Tensor_System_Test',
        title: 'Cross Device Tensor Slicing',
        narrative: '',
        features: [
            {
                id: 'Cross device sliced tensor integration test runs without errors.',
            },
            {
                id: 'Slices can be created using the SliceBuilder.',
            },
        ],
    },
];

test('generate search entries', () => {
    const { result } = renderHook(
        () => useGenerateSearchEntries({ summary: mockedSummery }),
        {
            wrapper: HookProvider,
        }
    );

    expect(result.current?.length).toBe(3);
    expect(result.current).toStrictEqual(minimizedSummaries);
});
