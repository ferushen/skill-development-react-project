import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Button, ButtonSize, ButtonVariant } from './Button';

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
	children: 'btn'
};

export const Clear = Template.bind({});
Clear.args = {
	children: 'btn',
	variant: ButtonVariant.CLEAR
};

export const OutlineLight = Template.bind({});
OutlineLight.args = {
	children: 'btn',
	variant: ButtonVariant.OUTLINE
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
	children: 'btn',
	variant: ButtonVariant.OUTLINE
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
	children: 'btn',
	variant: ButtonVariant.BACKGROUND
};

export const BackgroundInvertedTheme = Template.bind({});
BackgroundInvertedTheme.args = {
	children: 'btn',
	variant: ButtonVariant.BACKGROUND_INVERTED
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
	children: '@',
	square: true,
	size: ButtonSize.M,
	variant: ButtonVariant.BACKGROUND_INVERTED
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
	children: '@',
	square: true,
	size: ButtonSize.L,
	variant: ButtonVariant.BACKGROUND_INVERTED
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
	children: '@',
	square: true,
	size: ButtonSize.XL,
	variant: ButtonVariant.BACKGROUND_INVERTED
};

export const MaxWidth = Template.bind({});
MaxWidth.args = {
	children: '>>>',
	size: ButtonSize.MW,
	variant: ButtonVariant.BACKGROUND_INVERTED
};