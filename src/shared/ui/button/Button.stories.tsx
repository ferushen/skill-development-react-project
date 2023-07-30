import { StoryFn, Meta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { Button, ButtonSize, ButtonVariant } from './Button';

export default {
	title: 'shared/Button',
	component: Button,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof Button>;


const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

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
	variant: ButtonVariant.Clear,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
	children: 'Click me',
	variant: ButtonVariant.ClearInverted
};

export const Outline = Template.bind({});
Outline.args = {
	children: 'Click me',
	variant: ButtonVariant.Outline
};

export const OutlineSecondary = Template.bind({});
OutlineSecondary.args = {
	children: 'Click me',
	variant: ButtonVariant.OutlineSecondary
};

export const OutlineRed = Template.bind({});
OutlineRed.args = {
	children: 'Click me',
	variant: ButtonVariant.OutlineRed
};

export const Background = Template.bind({});
Background.args = {
	children: 'Click me',
	variant: ButtonVariant.Background
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
	children: 'Click me',
	variant: ButtonVariant.BackgroundInverted
};

export const BackgroundSecondaryInverted = Template.bind({});
BackgroundSecondaryInverted.args = {
	children: 'Click me',
	variant: ButtonVariant.BackgroundSecondaryInverted
};

export const DarkPrimary = Template.bind({});
DarkPrimary.args = {
	children: 'btn'
};
DarkPrimary.parameters = {
	theme: Theme.DARK
};


export const DarkDisabled = Template.bind({});
DarkDisabled.args = {
	children: 'Click me',
	variant: ButtonVariant.Outline,
	disabled: 'with_opacity'
};
DarkDisabled.parameters = {
	theme: Theme.DARK
};


export const DarkClear = Template.bind({});
DarkClear.args = {
	children: 'Click me',
	variant: ButtonVariant.Clear,
};
DarkClear.parameters = {
	theme: Theme.DARK
};


export const DarkClearInverted = Template.bind({});
DarkClearInverted.args = {
	children: 'Click me',
	variant: ButtonVariant.ClearInverted
};
DarkClearInverted.parameters = {
	theme: Theme.DARK
};


export const DarkOutline = Template.bind({});
DarkOutline.args = {
	children: 'Click me',
	variant: ButtonVariant.Outline
};
DarkOutline.parameters = {
	theme: Theme.DARK
};


export const DarkOutlineSecondary = Template.bind({});
DarkOutlineSecondary.args = {
	children: 'Click me',
	variant: ButtonVariant.OutlineSecondary
};
DarkOutlineSecondary.parameters = {
	theme: Theme.DARK
};


export const DarkOutlineRed = Template.bind({});
DarkOutlineRed.args = {
	children: 'Click me',
	variant: ButtonVariant.OutlineRed
};
DarkOutlineRed.parameters = {
	theme: Theme.DARK
};


export const DarkBackground = Template.bind({});
DarkBackground.args = {
	children: 'Click me',
	variant: ButtonVariant.Background
};
DarkBackground.parameters = {
	theme: Theme.DARK
};


export const DarkBackgroundInverted = Template.bind({});
DarkBackgroundInverted.args = {
	children: 'Click me',
	variant: ButtonVariant.BackgroundInverted
};
DarkBackgroundInverted.parameters = {
	theme: Theme.DARK
};


export const DarkBackgroundSecondaryInverted = Template.bind({});
DarkBackgroundSecondaryInverted.args = {
	children: 'Click me',
	variant: ButtonVariant.BackgroundSecondaryInverted
};
DarkBackgroundSecondaryInverted.parameters = {
	theme: Theme.DARK
};


export const FormatMaxWidth = Template.bind({});
FormatMaxWidth.args = {
	children: 'Click me',
	format: 'stretch',
	variant: ButtonVariant.BackgroundInverted,
};

export const FormatFlatSizeS = Template.bind({});
FormatFlatSizeS.args = {
	children: 'Click me',
	format: 'flat',
	size: ButtonSize.S,
	variant: ButtonVariant.BackgroundInverted,
};

export const FormatFlatSizeM = Template.bind({});
FormatFlatSizeM.args = {
	children: 'Click me',
	format: 'flat',
	size: ButtonSize.M,
	variant: ButtonVariant.BackgroundInverted,
};

export const FormatFlatSizeL = Template.bind({});
FormatFlatSizeL.args = {
	children: 'Click me',
	format: 'flat',
	size: ButtonSize.L,
	variant: ButtonVariant.BackgroundInverted,
};

export const FormatSquareSizeM = Template.bind({});
FormatSquareSizeM.args = {
	children: '#',
	format: 'square',
	size: ButtonSize.M,
	variant: ButtonVariant.BackgroundInverted
};

export const FormatSquareSizeL = Template.bind({});
FormatSquareSizeL.args = {
	children: '#',
	format: 'square',
	size: ButtonSize.L,
	variant: ButtonVariant.BackgroundInverted
};

export const FormatSquareSizeXL = Template.bind({});
FormatSquareSizeXL.args = {
	children: '#',
	format: 'square',
	size: ButtonSize.XL,
	variant: ButtonVariant.BackgroundInverted
};

