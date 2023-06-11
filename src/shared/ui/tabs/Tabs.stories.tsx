import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tabs } from './Tabs';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';

export default {
	title: 'shared/Tabs',
	component: Tabs,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {
		tabs: [
			{
				value: 'tab_1',
				content: 'first tab',
			},
			{
				value: 'tab_2',
				content: 'second tab',
			},
			{
				value: 'tab_3',
				content: 'third tab',
			},
		],
		active: 'tab_1',
		onClickTab: action('onClickTab')
	}
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const ColorPrimary = Template.bind({});
ColorPrimary.args = {
	color: 'primary',
};

export const ColorSecondary = Template.bind({});
ColorSecondary.args = {
	color: 'secondary',
};

export const DarkColorPrimary = Template.bind({});
DarkColorPrimary.decorators = [
	ThemeDecorator(Theme.DARK),
];

export const DarkColorSecondary = Template.bind({});
DarkColorSecondary.args = {
	color: 'secondary',
};
DarkColorSecondary.decorators = [
	ThemeDecorator(Theme.DARK),
];

export const SizeSmall = Template.bind({});
SizeSmall.args = {
	size: 'small',
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
	size: 'medium',
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
	size: 'large',
};

/* 
type TabSize = 'small' | 'medium' | 'large';
type TabColor = 'light' | 'dark';
*/