import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	};

	/* 
    const svgLoader: webpack.RuleSetRule = {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
            filename: options.paths.assets.svg,
        },
    }; 
    */

	// webpack v5: deprecated
	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};

	/* 
    const imgLoader: webpack.RuleSetRule = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    };
    */

	const cssLoader = buildCssLoader(isDev);

	const babelLoader = {
		test: /\.(js|jsx|tsx)$/,
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
							namespace: [
								'about',
								'article',
								'main',
								'profile',
								'translations',
							],
							/*keyAsDefaultValue: ['ru'],*/
							/*saveMissing: true,*/
						},
					],
					[isDev && 'react-refresh/babel'].filter(Boolean),
				],
			},
		},
	};

	const typescriptLoader = {
		test: /\.tsx?$/,
		exclude: /node_modules/,
		use: 'ts-loader',
	};

	return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
}
