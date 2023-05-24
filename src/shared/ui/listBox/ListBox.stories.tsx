import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { ListBox, ListBoxOption } from './ListBox';

export default {
	title: 'shared/ListBox',
	component: ListBox,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

const options: ListBoxOption[] = [
	{ value: 'opt1', content: 'опция-1' },
	{ value: 'opt2', content: 'опция-2' },
	{ value: 'opt3', content: 'опция-3', disabled: true },
	{ value: 'opt4', content: 'опция-4' },
];

const args = {
	options,
	label: 'LABEL',
	defaultValue: 'Выберите что-нибудь',
};

export const Normal = Template.bind({});
Normal.args = args;

export const Dark = Template.bind({});
Dark.args = args;
Dark.decorators = [
	ThemeDecorator(Theme.DARK),
]
