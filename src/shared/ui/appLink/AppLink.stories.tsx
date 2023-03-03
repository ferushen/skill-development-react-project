import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { AppLink, AppLinkVariant } from './AppLink';

export default {
	title: 'widgets/AppLink',
	component: AppLink,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {
		to: '/',
	}
} as ComponentMeta<typeof AppLink>;


const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	children: 'Link',
	variant: AppLinkVariant.PRIMARY
};

export const Inverted = Template.bind({});
Inverted.args = {
	children: 'Link',
	variant: AppLinkVariant.INVERTED
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
	children: 'Link',
	variant: AppLinkVariant.PRIMARY
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const InvertedDark = Template.bind({});
InvertedDark.args = {
	children: 'Link',
	variant: AppLinkVariant.INVERTED
};
InvertedDark.decorators = [ThemeDecorator(Theme.DARK)];