import { StoryFn, Meta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
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
} as Meta<typeof AppLink>;


const Template: StoryFn<typeof AppLink> = (args) => <AppLink {...args} />;

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
PrimaryDark.parameters = {
	theme: Theme.DARK
};

export const InvertedDark = Template.bind({});
InvertedDark.args = {
	children: 'Link',
	variant: AppLinkVariant.Inverted
};
InvertedDark.parameters = {
	theme: Theme.DARK
};