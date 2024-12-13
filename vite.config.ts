import { ViteRouter } from '@bracketed/vite-plugin-router';
import react from '@vitejs/plugin-react';
import url from 'node:url';
import { UserConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
/** @type {import('vite').UserConfig} */
export default {
	optimizeDeps: {
		exclude: ['node-stdlib-browser'],
	},
	server: {
		watch: {
			ignored: [
				'**/src/Router.tsx',
				'**/src/configuration/Routes.json',
				'**/public/sitemap.xml',
				'**/src/routes.tsx',
			],
		},
	},
	plugins: [
		react(),
		svgr(),
		new ViteRouter({
			dir: 'src/pages',
			suspense: true,
			'404': true,

			redirects: {
				'/local': 'https://google.com',
			},
		}).affix(),
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
				replacement: url.fileURLToPath(new URL('./', import.meta.url)),
			},
			{
				find: '@src',
				replacement: url.fileURLToPath(new URL('./src', import.meta.url)),
			},
			{
				find: '@components',
				replacement: url.fileURLToPath(new URL('./src/components', import.meta.url)),
			},
			{
				find: '@utilities',
				replacement: url.fileURLToPath(new URL('./src/utilities', import.meta.url)),
			},
			{
				find: '@pages',
				replacement: url.fileURLToPath(new URL('./src/pages', import.meta.url)),
			},
			{
				find: '@css',
				replacement: url.fileURLToPath(new URL('./src/css', import.meta.url)),
			},
			{
				find: '@content',
				replacement: url.fileURLToPath(new URL('./src/content', import.meta.url)),
			},
			{
				find: '@configuration',
				replacement: url.fileURLToPath(new URL('./src/configuration', import.meta.url)),
			},
			{
				find: '@typings',
				replacement: url.fileURLToPath(new URL('./src/typings', import.meta.url)),
			},
		],
	},
} satisfies UserConfig;
