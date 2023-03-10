import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/spock-react/',
    plugins: [react()],
    // @ts-ignore
    test: {
        globals: true,
        environment: 'happy-dom',
        setupFiles: ['./src/setupTest.ts'],
    },
});
