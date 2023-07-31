/* eslint-disable correct-fsd-import-paths/layer-import */
// @ts-nocheck
import { ThemeProvider } from '@/app/providers/themeProvider';
import { Theme } from '@/shared/const/theme';
import { StoryContext, StoryFn } from '@storybook/react';
import { DecoratorHelpers } from '@storybook/addon-styling';

type ThemeName = 'dark' | 'light';

interface ThemeAddonDecoratorProps {
	themes: Record<ThemeName, Theme>;
	defaultTheme: ThemeName;
}

const {
	pluckThemeFromContext,
	initializeThemeState
} = DecoratorHelpers;

/*const themeMapper: Record<ThemeName, Theme> = {
	'dark': Theme.DARK,
	'light': Theme.LIGHT,
};*/

export const ThemeAddonDecorator = ({
	themes,
	defaultTheme,
}: ThemeAddonDecoratorProps) => {
	console.log('@ThemeAddonDecorator: themes: ', themes);
	console.log('@ThemeAddonDecorator: def: ', defaultTheme);
	const themeNames = Object.keys(themes);

	initializeThemeState(themeNames, defaultTheme || themeNames[0]);

	return (StoryComponent: StoryFn, context: StoryContext) => {
		const themeFromContext = pluckThemeFromContext(context) as ThemeName;
		const selectedThemeName = themeFromContext || defaultTheme;
		const theme = themes[selectedThemeName];

		return (
			<ThemeProvider initialTheme={theme}>
				<StoryComponent />
			</ThemeProvider>
		);

	};
};
