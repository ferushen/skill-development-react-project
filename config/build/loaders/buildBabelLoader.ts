import babelRemovePropsPlugin from '../babel/babelRemovePropsPlugin';
import { BuildOptions } from '../types/config';

interface BuildBabelLoaderProps extends BuildOptions {
	isTsx: boolean;
}

export const buildBabelLoader = ({ isDev, isTsx }: BuildBabelLoaderProps) => ({
	test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
	exclude: /node_modules/,
	use: {
		loader: 'babel-loader',
		options: {
			presets: ['@babel/preset-env'],
			plugins: [
				[
					'i18next-extract',
					{
						locales: ['ru', 'en'],
						output: {
							about: 'locales/{{locale}}/about.json',
							article: 'locales/{{locale}}/article.json',
							main: 'locales/{{locale}}/main.json',
							profile: 'locales/{{locale}}/profile.json',
							translation: 'locales/{{locale}}/translation.json',
						},
						namespace: ['about', 'article', 'main', 'profile', 'translations'],
						/*keyAsDefaultValue: ['ru'],*/
						/*saveMissing: true,*/
					},
				],
				[
					'@babel/plugin-transform-typescript',
					{
						isTSX: isTsx,
					},
				],
				'@babel/plugin-transform-runtime',
				isTsx && !isDev && [
					babelRemovePropsPlugin,
					{
						props: ['data-testid'],
					},
				],
				isDev && 'react-refresh/babel',
			].filter(Boolean),
		},
	},
});
