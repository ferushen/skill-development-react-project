export type BuildMode = 'production' | 'development';

export interface BuildEnv {
	mode: BuildMode;
	port: number;
	analyze: boolean;
	apiUrl: string;
}

export interface BuildPaths {
	entry: string;
	build: string;
	html: string;
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
