import { expect, test, describe } from 'vitest';
import { getSearchScore } from '../getSearchScore';
import { mockedMinimizedSummary } from './minimizedSummary.mock';

describe('search algorithm', () => {
    test('testy', () => {
        const result = getSearchScore('intro', mockedMinimizedSummary);
        result.forEach((sum, index) => {
            console.log(`RESULT ${index}`, sum);
        });

        expect(result.length).toBe(1);
    });
});
