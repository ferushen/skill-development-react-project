module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		/*jest: true*/
	},
	extends: [
		'prettier',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'i18next'],
	rules: {
		'@typescript-eslint/ban-ts-comment': ['warn', { 'ts-ignore': false }],
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				caughtErrorsIgnorePattern: '^_',
			},
		],
		'i18next/no-literal-string': 'error',
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'linebreak-style': ['error', 'windows'],
		'no-unused-vars': ['off'],
		quotes: ['error', 'single'],
		/*
		'react/jsx-indent-props': [
			'error',
			{ identMode: 'tab', ignoreTernaryOperator: true }
		],
		*/
		semi: ['error', 'always'],
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
