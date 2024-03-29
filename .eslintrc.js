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
		{
			files: ['**/*.js'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
			},
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'i18next',
		'react-hooks',
		'correct-fsd-import-paths',
		'unused-imports',
	],
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
					exclude: [
						'align',
						'as',
						'border',
						'color',
						'data-testid',
						'direction',
						'disabled',
						'format',
						'indent',
						'justify',
						'key',
						'name',
						'optionWidth',
						'ratio',
						'rounded',
						'role',
						'size',
						'target',
						'to',
						'variant',
						'width',
					],
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
		'correct-fsd-import-paths/relative-path-inside-module': ['error', { alias: '@' }],
		'correct-fsd-import-paths/public-api-outside-module': [
			'error',
			{
				alias: '@',
				testFilesPatterns: ['**/*.test.{ts,tsx}', '**/*.stories.tsx', '**/StoreDecorator.tsx']
			}
		],
		'correct-fsd-import-paths/layer-import': [
			'error',
			{
				alias: '@',
				ignoredImportPatterns: ['**/storeProvider', '**/testing']
			}
		],
		'react/jsx-no-constructed-context-values': 2,
		'unused-imports/no-unused-imports': 'error',
		'unused-imports/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_'
			}
		],
		'@typescript-eslint/no-namespace': 0,
		'@typescript-eslint/no-empty-function': 1,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
