import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/test-github-pages/docs/',
	plugins: [react()],
});
