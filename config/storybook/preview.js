import { addDecorator } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
import { I18nextDecorator } from 'shared/config/storybook/I18nextDecorator';
import { SuspenseDecorator } from 'shared/config/storybook/SuspenseDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

//import { ThemeAddonDecorator } from 'shared/config/storybook/ThemeAddonDecorator';
//import { withThemeFromJSXProvider } from "@storybook/addon-styling";
//import { ThemeProvider } from 'app/providers/themeProvider';

import { Theme } from 'shared/const/theme';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	theme: Theme.LIGHT
};

export const globalTypes = {
	locale: {
		description: 'Internationalization locale',
		toolbar: {
			title: 'Locale',
			icon: 'globe',
			items: [
				{ value: 'en', title: 'English' },
				{ value: 'ru', title: 'Russian' },
			],
			showName: true,
		},
	},
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator);
/*addDecorator(ThemeAddonDecorator({
	themes: {
		light: Theme.LIGHT,
		dark: Theme.DARK,
	},
	defaultTheme: 'light',
}));*/
/*addDecorator(withThemeFromJSXProvider({
	themes: {
		light: Theme.LIGHT,
		dark: Theme.DARK,
	},
	defaultTheme: 'light',
	Provider: ThemeProvider,
}));*/
addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator); // последовательность декораторов играет роль
addDecorator(I18nextDecorator);

// альтернативная запись:
// export const decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT), ...];
