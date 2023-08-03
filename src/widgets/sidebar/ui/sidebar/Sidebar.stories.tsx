import { StoryFn, Meta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Sidebar } from './Sidebar';

export default {
	title: 'widgets/Sidebar',
	component: Sidebar,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof Sidebar>;

const Template: StoryFn<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.decorators = [
	StoreDecorator({
		user: {
			authData: {},
		},
	}),
];

export const Dark = Template.bind({});
Dark.decorators = [
	StoreDecorator({
		user: {
			authData: {},
		},
	}),
];
Dark.parameters = {
	theme: Theme.DARK,
};

export const NoAuth = Template.bind({});
NoAuth.decorators = [
	StoreDecorator({
		user: {
			authData: undefined,
		},
	}),
];
