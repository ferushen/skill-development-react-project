import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '@/shared/ui/text';
import { Card, CardVariant } from './Card';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
	title: 'shared/Card',
	component: Card,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	decorators: [
		Story => <div style={{ width: 'max-content' }}>{Story()}</div>
	],
	args: {
		// eslint-disable-next-line i18next/no-literal-string
		children: <Text title='Card title' text='some text' />
	}
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const ColorPrimary = Template.bind({});
ColorPrimary.args = {
	color: 'primary',
};

export const ColorSecondary = Template.bind({});
ColorSecondary.args = {
	color: 'secondary',
};

export const ColorBgColor = Template.bind({});
ColorBgColor.args = {
	color: 'bgColor',
};

export const Outline = Template.bind({});
Outline.args = {
	variant: CardVariant.Outline,
};

export const DarkColorPrimary = Template.bind({});
DarkColorPrimary.args = {
	color: 'primary',
};
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

export const DarkColorBgColor = Template.bind({});
DarkColorBgColor.args = {
	color: 'bgColor',
};
DarkColorBgColor.decorators = [
	ThemeDecorator(Theme.DARK),
];

export const DarkOutline = Template.bind({});
DarkOutline.args = {
	variant: CardVariant.Outline,
};
DarkOutline.decorators = [
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

export const SizeExtraLarge = Template.bind({});
SizeExtraLarge.args = {
	size: 'extraLarge',
};


