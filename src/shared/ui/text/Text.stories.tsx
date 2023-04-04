
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Text, TextVariant } from './Text';

export default {
	title: 'shared/Text',
	component: Text,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	title: 'Title for testing',
	text: 'This test proposal is, in a way, to fill the text space of the limitless canvas of the Internet page.'
};

export const Error = Template.bind({});
Primary.args = {
	title: 'Title for testing',
	text: 'This test proposal is, in a way, to fill the text space of the limitless canvas of the Internet page.',
	variant: TextVariant.Error
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
	title: 'Title for testing',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
	text: 'This test proposal is, in a way, to fill the text space of the limitless canvas of the Internet page.'
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
	title: 'Title for testing',
	text: 'This test proposal is, in a way, to fill the text space of the limitless canvas of the Internet page.'
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
	title: 'Title for testing',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
	text: 'This test proposal is, in a way, to fill the text space of the limitless canvas of the Internet page.'
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];