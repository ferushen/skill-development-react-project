import webpack from 'webpack';

import type { BuildOptions } from './types/config';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export function buildPlugins({
	paths,
	isDev,
	analyze,
}: BuildOptions): webpack.WebpackPluginInstance[] {
	const plugins = [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
		}),
	].filter(Boolean);

	if (isDev) {
		plugins.push(new ReactRefreshWebpackPlugin({ overlay: false }));
		/*plugins.push(new webpack.HotModuleReplacementPlugin());*/
		plugins.push(
			new BundleAnalyzerPlugin({
				analyzerMode: analyze ? 'server' : 'disabled',
				openAnalyzer: false,
			})
		);
	}

	return plugins;
}