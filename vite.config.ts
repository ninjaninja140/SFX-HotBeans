import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vite.dev/config/
//https://stackblitz.com/edit/vitejs-vite-2fm1ar?file=vite.config.ts&terminal=dev
export default defineConfig({
	plugins: [
		react(),
		nodePolyfills({
			protocolImports: true,
			overrides: {
				path: 'path-browserify',
				fs: 'browserify-fs',
			},
		}),
	],
	resolve: {
		alias: [
			{
				find: '@',
				replacement: fileURLToPath(new URL('.', import.meta.url)),
			},
			{
				find: '@src',
				replacement: fileURLToPath(new URL('./src', import.meta.url)),
			},
			{
				find: '@components',
				replacement: fileURLToPath(new URL('./src/components', import.meta.url)),
			},
			{
				find: '@pages',
				replacement: fileURLToPath(new URL('./src/pages', import.meta.url)),
			},
			{
				find: '@css',
				replacement: fileURLToPath(new URL('./src/css', import.meta.url)),
			},
			{
				find: '@content',
				replacement: fileURLToPath(new URL('./src/content', import.meta.url)),
			},
			{
				find: '@configuration',
				replacement: fileURLToPath(new URL('./src/configuration', import.meta.url)),
			},
			{
				find: '@typings',
				replacement: fileURLToPath(new URL('./src/typings', import.meta.url)),
			},
		],
	},
});

