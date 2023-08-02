import path from 'path';
import webpack from 'webpack';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import type { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
	const paths: BuildPaths = {
		build: path.resolve(__dirname, 'build'),
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		locales: path.resolve(__dirname, 'public', 'locales'),
		buildLocales: path.resolve(__dirname, 'build', 'locales'),
		src: path.resolve(__dirname, 'src'),
	};

	const mode = env?.mode || 'development';
	const PORT = env?.port || 3000;
	const analyze = env?.analyze || false;
	const apiUrl = env?.apiUrl || 'http://localhost:8000';
	const isDev = mode === 'development';

	const config: webpack.Configuration = buildWebpackConfig({
		mode,
		paths,
		isDev,
		port: PORT,
		analyze,
		apiUrl,
		project: 'frontend',
	});

	return config;
};
