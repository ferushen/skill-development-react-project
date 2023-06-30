import { addDecorator } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
import { I18nextDecorator } from 'shared/config/storybook/I18nextDecorator';
import { SuspenseDecorator } from 'shared/config/storybook/SuspenseDecorator';
import { Theme } from 'app/providers/themeProvider';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
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
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator); // последовательность декораторов играет роль
addDecorator(I18nextDecorator);

// альтернативная запись:
// export const decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT), ...];
