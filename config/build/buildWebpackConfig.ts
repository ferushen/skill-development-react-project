import webpack from 'webpack';

import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const { paths, mode, isDev } = options;

	return {
		mode,
		entry: paths.entry,
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(options),
		output: {
			filename: '[name].[contenthash].js',
			path: paths.build,
			publicPath: '/',
			clean: true,
		},
		plugins: buildPlugins(options),
		devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
		devServer: isDev ? buildDevServer(options) : undefined,
	};
}
