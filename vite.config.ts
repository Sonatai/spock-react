import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import * as config from './environment.json';

// https://vitejs.dev/config/
export default defineConfig({
    base: config.rootUrl,
    plugins: [react()],
    // @ts-ignore
    test: {
        globals: true,
        environment: 'happy-dom',
        setupFiles: ['./src/setupTest.ts'],
    },
    assetsInclude: ['**/*.md'],
});
