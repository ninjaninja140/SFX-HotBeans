import react from '@vitejs/plugin-react';
import url from 'node:url';
import { UserConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import { Router } from './src/generators/routes';
import { Sitemap } from './src/generators/sitemap';

// https://vite.dev/config/
/** @type {import('vite').UserConfig} */
export default {
	server: {
		watch: {
			ignored: ['**/src/Router.tsx', '**/src/configuration/Routes.json', '**/public/sitemap.xml'],
		},
	},
	plugins: [
		react(),
		nodePolyfills({
			protocolImports: true,
			overrides: {
				path: 'path-browserify',
				fs: 'browserify-fs',
			},
		}),
		{
			name: 'build-scripts',
			async buildStart(s) {
				await new Router().run();
				await new Sitemap().run(this.environment.config.server.port);
			},
			async hotUpdate(options) {
				console.log(options.server.config.server);
				await new Router().run();
				await new Sitemap().run(options.server.config.server.port);
			},
		},
	],
	resolve: {
		alias: [
			{
				find: '@',
				replacement: url.fileURLToPath(new URL('.', import.meta.url)),
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

