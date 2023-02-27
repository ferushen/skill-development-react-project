import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider/lib/themeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Button, ThemeButton } from './Button';

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
	theme: ThemeButton.CLEAR
};

export const OutlineLight = Template.bind({});
OutlineLight.args = {
	children: 'text',
	theme: ThemeButton.OUTLINE
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
	children: 'text',
	theme: ThemeButton.OUTLINE
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];