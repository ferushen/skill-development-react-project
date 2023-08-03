import { StoryFn, Meta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ListBox, ListBoxOption } from './ListBox';

export default {
	title: 'shared/ListBox',
	component: ListBox,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	decorators: [
		(Story) => (
			<div
				style={{
					position: 'absolute',
					top: 300,
					left: 200,
				}}
			>
				<Story />
			</div>
		),
	],
} as Meta<typeof ListBox>;

const Template: StoryFn<typeof ListBox> = (args) => <ListBox {...args} />;

const optionsLong: ListBoxOption[] = [
	{ value: 'opt1', content: 'длинная-длинная-опция-1' },
	{ value: 'opt2', content: 'длинная-длинная-опция-2' },
	{ value: 'opt3', content: 'недоступная-длинная-опция-3', disabled: true },
	{ value: 'opt4', content: 'длинная-длинная-опция-4' },
];

const optionsShort: ListBoxOption[] = [
	{ value: 'opt1', content: 'опция-1' },
	{ value: 'opt2', content: 'опция-2' },
	{ value: 'opt3', content: 'недоступная', disabled: true },
	{ value: 'opt4', content: 'опция-4' },
];

const args = {
	options: optionsShort,
	label: 'лейбл',
	defaultValue: 'Выберите что-нибудь',
};

export const Primary = Template.bind({});
Primary.args = args;

export const MaxWidthLongString = Template.bind({});
MaxWidthLongString.args = {
	...args,
	direction: 'bottom right',
	options: optionsLong,
	optionWidth: 'max-content',
};

export const NormalWidthLongString = Template.bind({});
NormalWidthLongString.args = {
	...args,
	options: optionsLong,
	optionWidth: 'normal',
};

export const DarkTopLeft = Template.bind({});
DarkTopLeft.args = {
	...args,
	options: optionsLong,
	direction: 'top left',
	optionWidth: 'max-content',
};
DarkTopLeft.parameters = {
	theme: Theme.DARK,
};

export const DarkTopRight = Template.bind({});
DarkTopRight.args = {
	...args,
	options: optionsLong,
	direction: 'top right',
	optionWidth: 'max-content',
};
DarkTopRight.parameters = {
	theme: Theme.DARK,
};

export const DarkBottomLeft = Template.bind({});
DarkBottomLeft.args = {
	...args,
	options: optionsLong,
	direction: 'bottom left',
	optionWidth: 'max-content',
};
DarkBottomLeft.parameters = {
	theme: Theme.DARK,
};

export const DarkBottomRight = Template.bind({});
DarkBottomRight.args = {
	...args,
	options: optionsLong,
	direction: 'bottom right',
	optionWidth: 'max-content',
};
DarkBottomRight.parameters = {
	theme: Theme.DARK,
};
