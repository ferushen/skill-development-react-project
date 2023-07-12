import { Story } from '@storybook/react';
import { Theme, ThemeProvider } from '@/app/providers/themeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
	<ThemeProvider initialTheme={theme}>
		<div className={'app'}>
			<StoryComponent />
		</div>
	</ThemeProvider>

	// чтобы иконка меняла свой цвет необходимо обернуть в ThemeProvider
	// иконка будет менять свой цвет, но не будет менять тему приложения
	// Насчет темы, тебе тогда в декораторе надо дернуть useTheme и вместо 
	//  захардкоженной строки передавать полученную из хука тему классом на div
	/*
	<ThemeProvider>
		<div className={`app ${theme}`}>
			<StoryComponent />
		</div>
	</ThemeProvider>
	*/
);