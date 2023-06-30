module.exports = {
	core: {
		builder: '@storybook/builder-webpack5',
	},
	framework: '@storybook/react',
	reactOptions: { legacyRootApi: true },
	typescript: {
		reactDocgen: 'react-docgen-typescript-plugin',
		reactDocgenTypescriptOptions: {
			compilerOptions: {
				allowSyntheticDefaultImports: false,
				esModuleInterop: false,
			},
			propFilter: () => true,
		},
	},
	stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-actions',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'storybook-addon-mock',
	],
};
