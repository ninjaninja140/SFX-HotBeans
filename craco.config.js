import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const typescript = {
	enableTypeChecking: true,
};
export const webpack = {
	alias: {
		'@components': resolve(__dirname, 'src/components'),
		'@pages': resolve(__dirname, 'src/pages'),
		'@css': resolve(__dirname, 'src/css'),
		'@content': resolve(__dirname, 'src/content'),
		'@src': resolve(__dirname, 'src'),
		'@configuration': resolve(__dirname, 'src/configuration'),
		'@typings': resolve(__dirname, 'src/typings'),
	},
	module: {
		rules: [
			{
				test: /\.svg$/,
				use: ['@svgr/webpack'],
			},
		],
	},
	configure: (webpackConfig) => {
		webpackConfig.resolve.fallback = {
			...webpackConfig.resolve.fallback,
			path: resolve('path-browserify'),
			fs: resolve('browserify-fs'),
		};
		return webpackConfig;
	},
};

