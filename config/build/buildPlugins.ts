import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

import type { BuildOptions } from './types/config';

export function buildPlugins({
	paths,
	isDev,
	analyze,
	apiUrl,
	project,
}: BuildOptions): webpack.WebpackPluginInstance[] {
	const isProd = !isDev;

	const plugins = [
		new HtmlWebpackPlugin({
			template: paths.html,
			publicPath: '/',
		}),
		new webpack.ProgressPlugin(),
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
			__API__: JSON.stringify(apiUrl),
			__PROJECT__: JSON.stringify(project),
		}),
		new BundleAnalyzerPlugin({
			analyzerMode: analyze ? 'server' : 'disabled',
			openAnalyzer: false,
		}),
	];

	if (isDev) {
		plugins.push(new ReactRefreshWebpackPlugin({ overlay: false }));
		/*plugins.push(new webpack.HotModuleReplacementPlugin());*/
		plugins.push(
			new CircularDependencyPlugin({
				exclude: /node_modules/,
				failOnError: true,
			})
		);
		plugins.push(
			new ForkTsCheckerWebpackPlugin({
				typescript: {
					diagnosticOptions: {
						semantic: true,
						syntactic: true,
					},
					mode: 'write-references',
				},
			})
		);
	}

	if (isProd) {
		plugins.push(
			new MiniCssExtractPlugin({
				filename: 'css/[name].[contenthash:8].css',
				chunkFilename: 'css/[name].[contenthash:8].css',
			})
		);
		plugins.push(
			new CopyPlugin({
				patterns: [{ from: paths.locales, to: paths.buildLocales }],
			})
		);
	}

	return plugins;
}
