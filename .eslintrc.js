module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		/*jest: true*/
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:storybook/recommended',
		/*'prettier',*/
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:prettier/recommended',
		'plugin:react-hooks/recommended',
	],
	globals: {
		__IS_DEV__: true,
		__API__: true,
		__PROJECT__: true,
	},
	overrides: [
		{
			files: ['**/src/**/*.test.{ts,tsx}', '**/src/**/*.stories.tsx'],
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
		ecmaFeatures: {
			jsx: true,
		},
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
		'@typescript-eslint/ban-ts-comment': [
			'warn',
			{
				'ts-ignore': false,
			},
		],
		'@typescript-eslint/no-empty-function': 1,
		'@typescript-eslint/no-namespace': 0,
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				caughtErrorsIgnorePattern: '^_',
			},
		],
		'react/display-name': 'off',
		// отвечает за правильное написание хуков
		'react-hooks/rules-of-hooks': 'error',
		// отвечает за массивы зависимостей в хуках
		'react-hooks/exhaustive-deps': 'warn',
		'react/jsx-no-constructed-context-values': 2,
		'correct-fsd-import-paths/layer-import': [
			'error',
			{
				alias: '@',
				ignoredImportPatterns: ['**/storeProvider', '**/testing'],
			},
		],
		'correct-fsd-import-paths/public-api-outside-module': [
			'error',
			{
				alias: '@',
				testFilesPatterns: [
					'**/*.test.{ts,tsx}',
					'**/*.stories.tsx',
					'**/StoreDecorator.tsx',
				],
			},
		],
		'correct-fsd-import-paths/relative-path-inside-module': ['error', { alias: '@' }],
		'unused-imports/no-unused-imports': 'error',
		'unused-imports/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_',
			},
		],
		'react/jsx-first-prop-new-line': [1, 'multiline'],
		'react/jsx-max-props-per-line': [
			1,
			{
				maximum: {
					single: 1,
					multi: 1,
				},
			},
		],
		'linebreak-style': ['error', 'windows'],
		'no-unused-vars': ['off'],
		// 'indent': ['error', 'tab', { SwitchCase: 1 }],
		quotes: ['error', 'single'],
		//'semi': ['error', 'always'],
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
		/*'function-call-argument-newline': [2, 'consistent']*/
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
