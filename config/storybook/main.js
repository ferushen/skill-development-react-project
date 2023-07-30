module.exports = {
	framework: {
		name: '@storybook/react-webpack5',
		options: {
			legacyRootApi: true
		}
	},
	typescript: {
		reactDocgen: 'react-docgen-typescript-plugin',
		reactDocgenTypescriptOptions: {
			compilerOptions: {
				allowSyntheticDefaultImports: false,
				esModuleInterop: false
			},
			propFilter: () => true
		}
	},
	stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		{
			name: '@storybook/addon-essentials',
			options: {
				background: true
			}
		},
		'@storybook/addon-interactions',
		'storybook-addon-mock',
		'@storybook/addon-styling'
	],
};