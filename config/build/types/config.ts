export type BuildMode = 'production' | 'development';

export interface BuildEnv {
	analyze: boolean;
	apiUrl: string;
	mode: BuildMode;
	port: number;
}

export interface BuildPaths {
	build: string;
	entry: string;
	html: string;
	locales: string; // путь до папки с переводами
	buildLocales: string; // путь до папки с переводами для продакшена
	src: string;
}

export interface BuildOptions {
	mode: BuildMode;
	paths: BuildPaths;
	isDev: boolean; // данное поле для удобства
	port: number; // для webpack-dev-server
	analyze: boolean; // для webpack-bundle-analyzer
	apiUrl: string; // используется для axios api
	project: 'frontend' | 'storybook' | 'jest';
}
