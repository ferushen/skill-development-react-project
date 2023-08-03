/* eslint-disable correct-fsd-import-paths/layer-import */
import { Story, StoryContext } from '@storybook/react';
import { ThemeProvider } from '@/app/providers/themeProvider';
import { Theme } from '@/shared/const/theme';

type DecoratorTheme = Theme | undefined;

export const ThemeDecorator = (StoryComponent: Story, context: StoryContext) => {
	const initialTheme = context.parameters.theme as DecoratorTheme;

	/*if (!initialTheme) {
		initialTheme = Theme.LIGHT;
	} */

	return (
		<ThemeProvider initialTheme={initialTheme}>
			<div className='app'>
				<StoryComponent />
			</div>
		</ThemeProvider>
	);
};

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
