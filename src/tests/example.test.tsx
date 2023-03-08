import { describe, expect, test } from 'vitest';

import { App } from '../App';
import { render } from '../test-utils';

describe('test', () => {
    test('example', () => {
        const view = render(<App />);
        expect(view).toBeTruthy();
    });
});
