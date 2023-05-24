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

export const Disabled = Template.bind({});
Disabled.args = {
	children: 'Click me',
	variant: ButtonVariant.Outline,
	disabled: 'with_opacity'
};

export const Clear = Template.bind({});
Clear.args = {
	children: 'Click me',
	variant: ButtonVariant.Clear
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
	children: 'Click me',
	variant: ButtonVariant.ClearInverted
};

export const OutlineLight = Template.bind({});
OutlineLight.args = {
	children: 'Click me',
	variant: ButtonVariant.Outline
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
	children: 'Click me',
	variant: ButtonVariant.Outline
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
	children: 'Click me',
	variant: ButtonVariant.Background
};

export const BackgroundInvertedTheme = Template.bind({});
BackgroundInvertedTheme.args = {
	children: 'Click me',
	variant: ButtonVariant.BackgroundInverted
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
	children: '#',
	square: true,
	size: ButtonSize.M,
	variant: ButtonVariant.BackgroundInverted
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
	children: '#',
	square: true,
	size: ButtonSize.L,
	variant: ButtonVariant.BackgroundInverted
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
	children: '#',
	square: true,
	size: ButtonSize.XL,
	variant: ButtonVariant.BackgroundInverted
};

export const MaxWidth = Template.bind({});
MaxWidth.args = {
	children: 'Click me',
	size: ButtonSize.MW,
	variant: ButtonVariant.BackgroundInverted,
};
