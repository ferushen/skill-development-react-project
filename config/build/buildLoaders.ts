import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
	const { isDev } = options;

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
	/*
	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};
	*/

	const assetModulesLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		type: 'asset/resource',
	};

	/*
    const imgLoader: webpack.RuleSetRule = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    };
    */

	const cssLoader = buildCssLoader(isDev);

	const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
	const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

	// отказываемся от typescript loader
	//	const typescriptLoader = {
	//		test: /\.tsx?$/,
	//		exclude: /node_modules/,
	//		use: 'ts-loader',
	//	};

	return [
		/*fileLoader,*/
		assetModulesLoader,
		svgLoader,
		codeBabelLoader,
		tsxCodeBabelLoader,
		cssLoader,
	];
}
