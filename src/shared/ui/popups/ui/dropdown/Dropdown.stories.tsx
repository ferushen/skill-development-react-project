/* eslint-disable i18next/no-literal-string */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Button } from '../../../button/Button';
import { Dropdown } from './Dropdown';

export default {
	title: 'shared/Dropdown',
	component: Dropdown,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	decorators: [
		(Story) => (<div style={{}}><Story /></div>)
	]
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

const args = {
	trigger: <Button>Trigger</Button>,
	items: [
		{ content: 'first item' },
		{ content: 'second item' },
		{ content: 'third item' },
	]
};

export const Normal = Template.bind({});
Normal.args = args;

export const Dark = Template.bind({});
Dark.args = args;
Dark.decorators = [
	ThemeDecorator(Theme.DARK),
];
