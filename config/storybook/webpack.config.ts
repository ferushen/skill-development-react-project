import path from 'path';
import webpack, { DefinePlugin } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default ({ config }: { config: webpack.Configuration }) => {
	const paths: BuildPaths = {
		src: path.resolve(__dirname, '..', '..', 'src'),
		locales: path.resolve(__dirname, '..', '..', 'public', 'locales'),
		build: '',
		html: '',
		entry: '',
		buildLocales: '',
	};

	// eslint-disable-next-line
	config.resolve!.alias = { '@': paths.src };
	config.resolve?.modules?.unshift(paths.src); // для работы с абсолютными путями
	config.resolve?.extensions?.push('.ts', '.tsx'); // т.к. используем TS

	if (config.module?.rules) {
		config.module.rules = config.module.rules.map(
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
			__IS_DEV__: JSON.stringify(true),
			__API__: JSON.stringify('https://storybooktestapi.ru'), // не важно, что указывать, но желательно указать
			__PROJECT__: JSON.stringify('storybook'),
		})
	);

	config.plugins?.push(
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, '..', '..', 'public', 'locales'),
					to: 'locales',
				},
			],
		})
	);

	return config;
};

// альтернативная типизация
/* 
const rules = config.module!.rules as RuleSetRule[]
config.module!.rules = rules.map((rule) => (
/svg/.test(rule.test as string)
? {...rule, exclude: /\.svg$/i}
: rule
))
*/
