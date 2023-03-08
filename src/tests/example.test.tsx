import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { App } from '../App';

describe('test', () => {
    test('example', () => {
        const view = render(<App />);
        expect(view).toBeTruthy();
    });
});
