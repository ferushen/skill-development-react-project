import { StoryFn, Meta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Navbar } from './Navbar';

export default {
	title: 'widgets/Navbar',
	component: Navbar,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof Navbar>;

const Template: StoryFn<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.decorators = [StoreDecorator({})];

export const AuthLight = Template.bind({});
AuthLight.decorators = [
	StoreDecorator({
		user: {
			authData: { id: '1' },
			_initialized: true
		}
	})
];

export const Dark = Template.bind({});
Dark.decorators = [
	StoreDecorator({})
];
Dark.parameters = {
	theme: Theme.DARK
};

export const AuthDark = Template.bind({});
AuthDark.decorators = [
	StoreDecorator({
		user: {
			authData: { id: '1' },
			_initialized: true
		}
	})
];
AuthDark.parameters = {
	theme: Theme.DARK
};