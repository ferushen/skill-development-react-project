import path from 'path';
import webpack, { DefinePlugin } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
	const paths: BuildPaths = {
		build: '',
		html: '',
		entry: '',
		src: path.resolve(__dirname, '..', '..', 'src'),
	};

	config.resolve?.modules?.unshift(paths.src); // для работы с абсолютными путями
	config.resolve?.extensions?.push('.ts', '.tsx'); // т.к. используем TS

	if (config.module?.rules) {
		config.module.rules = config.module?.rules?.map(
			(rule: webpack.RuleSetRule | '...') => {
				if (rule !== '...' && /svg/.test(rule.test as string)) {
					return { ...rule, exclude: /\.svg$/i };
				}

				return rule;
			}
		);

		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		config.module.rules.push(buildCssLoader(true));
	}

	config.plugins?.push(
		new DefinePlugin({
			__IS_DEV__: true,
		})
	);

	return config;
};
