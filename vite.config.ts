/// <reference types="vitest" />
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dotenv from 'dotenv';

dotenv.config();
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
        plugins: [react()],
        resolve: {
            alias: {
                '@design-system': path.resolve(__dirname, './src/design-system/'),
            },
        },
        server: {
            port: 5173,
        },
        test: {
            include: ['**/*.test.ts'],
            // globals: true,
            reportsDirectory: 'coverage',
        },
        define: {
            // 'process.env.API_URL': JSON.stringify(env.API_URL),
        },
    };
});
