const path = require('path');

module.exports = {
	typescript: {
		enableTypeChecking: true /* (default value) */,
	},
	webpack: {
		alias: {
			'@components': path.resolve(__dirname, 'src/components'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@css': path.resolve(__dirname, 'src/css'),
			'@content': path.resolve(__dirname, 'src/content'),
			'@src': path.resolve(__dirname, 'src'),
			'@configuration': path.resolve(__dirname, 'src/configuration'),
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
				path: require.resolve('path-browserify'),
				fs: require.resolve('browserify-fs'),
			};
			return webpackConfig;
		},
	},
};

