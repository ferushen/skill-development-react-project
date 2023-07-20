import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { AppLink, AppLinkVariant } from './AppLink';

export default {
	title: 'shared/AppLink',
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
	variant: AppLinkVariant.Primary
};

export const Inverted = Template.bind({});
Inverted.args = {
	children: 'Link',
	variant: AppLinkVariant.Inverted
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
	children: 'Link',
	variant: AppLinkVariant.Primary
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const InvertedDark = Template.bind({});
InvertedDark.args = {
	children: 'Link',
	variant: AppLinkVariant.Inverted
};
InvertedDark.decorators = [ThemeDecorator(Theme.DARK)];