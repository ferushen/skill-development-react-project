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
		'plugin:storybook/recommended',
	],
	globals: {
		__IS_DEV__: true,
		__API__: true,
		__PROJECT__: true,
	},
	overrides: [
		{
			files: ['**/src/**/*.test.{ts,tsx}'],
			rules: {
				'i18next/no-literal-string': 'off',
			},
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks'],
	rules: {
		// отвечает за правильное написание хуков
		'react-hooks/rules-of-hooks': 'error',
		// отвечает за массивы зависимостей в хуках
		'react-hooks/exhaustive-deps': 'warn',
		'@typescript-eslint/ban-ts-comment': [
			'warn',
			{
				'ts-ignore': false,
			},
		],
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				caughtErrorsIgnorePattern: '^_',
			},
		],
		'i18next/no-literal-string': [
			'error',
			{
				mode: 'jsx-only',
				'jsx-attributes': {
					exclude: ['data-testid', 'to', 'name'],
				},
				callees: {
					exclude: ['join', 't'],
				},
			},
		],
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1,
			},
		],
		'linebreak-style': ['error', 'windows'],
		'no-unused-vars': ['off'],
		quotes: ['error', 'single'],
		/*
		'react/jsx-indent-props': [
			'error',
			{ identMode: 'tab', ignoreTernaryOperator: true }
		],
		*/
		'react/display-name': 'off',
		semi: ['error', 'always'],
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
