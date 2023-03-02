import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
	title: 'shared/Button',
	component: Button,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	children: 'text'
};

export const Secondary = Template.bind({});
Secondary.args = {
	children: 'text',
	theme: ButtonTheme.CLEAR
};

export const OutlineLight = Template.bind({});
OutlineLight.args = {
	children: 'text',
	theme: ButtonTheme.OUTLINE
};

export const OutlineLightSizeM = Template.bind({});
OutlineLightSizeM.args = {
	children: 'text',
	size: ButtonSize.M,
	theme: ButtonTheme.OUTLINE
};

export const OutlineLightSizeL = Template.bind({});
OutlineLightSizeL.args = {
	children: 'text',
	size: ButtonSize.L,
	theme: ButtonTheme.OUTLINE
};

export const OutlineLightSizeXL = Template.bind({});
OutlineLightSizeXL.args = {
	children: 'text',
	size: ButtonSize.XL,
	theme: ButtonTheme.OUTLINE
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
	children: 'text',
	theme: ButtonTheme.OUTLINE
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
	children: 'text',
	theme: ButtonTheme.BACKGROUND
};

export const BackgroundInvertedTheme = Template.bind({});
BackgroundInvertedTheme.args = {
	children: 'text',
	theme: ButtonTheme.BACKGROUND_INVERTED
};

export const SquareM = Template.bind({});
SquareM.args = {
	children: 'text',
	square: true,
	size: ButtonSize.M,
	theme: ButtonTheme.BACKGROUND_INVERTED
};

export const SquareL = Template.bind({});
SquareL.args = {
	children: 'text',
	square: true,
	size: ButtonSize.L,
	theme: ButtonTheme.BACKGROUND_INVERTED
};

export const SquareXL = Template.bind({});
SquareXL.args = {
	children: 'text',
	square: true,
	size: ButtonSize.XL,
	theme: ButtonTheme.BACKGROUND_INVERTED
};

export const MaxWidth = Template.bind({});
MaxWidth.args = {
	children: 'text',
	size: ButtonSize.MW,
	theme: ButtonTheme.BACKGROUND_INVERTED
};