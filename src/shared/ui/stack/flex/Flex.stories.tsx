/* eslint-disable i18next/no-literal-string */
import { StoryFn, Meta } from '@storybook/react';
import { Flex } from './Flex';

export default {
	title: 'shared/Flex',
	component: Flex,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof Flex>;

const Template: StoryFn<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
	direction: 'row',
	children: (
		<>
			<div>item-1</div>
			<div>item-2</div>
			<div>item-3</div>
			<div>item-4</div>
		</>
	),
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
	direction: 'row',
	gap: 4,
	children: (
		<>
			<div>item-1</div>
			<div>item-2</div>
			<div>item-3</div>
			<div>item-4</div>
		</>
	),
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
	direction: 'row',
	gap: 8,
	children: (
		<>
			<div>item-1</div>
			<div>item-2</div>
			<div>item-3</div>
			<div>item-4</div>
		</>
	),
};

export const RowGap12 = Template.bind({});
RowGap12.args = {
	direction: 'row',
	gap: 12,
	children: (
		<>
			<div>item-1</div>
			<div>item-2</div>
			<div>item-3</div>
			<div>item-4</div>
		</>
	),
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
	direction: 'row',
	gap: 16,
	children: (
		<>
			<div>item-1</div>
			<div>item-2</div>
			<div>item-3</div>
			<div>item-4</div>
		</>
	),
};

export const RowGap20 = Template.bind({});
RowGap20.args = {
	direction: 'row',
	gap: 20,
	children: (
		<>
			<div>item-1</div>
			<div>item-2</div>
			<div>item-3</div>
			<div>item-4</div>
		</>
	),
};

export const RowGap24 = Template.bind({});
RowGap24.args = {
	direction: 'row',
	gap: 24,
	children: (
		<>
			<div>item-1</div>
			<div>item-2</div>
			<div>item-3</div>
			<div>item-4</div>
		</>
	),
};

export const Column = Template.bind({});
Column.args = {
	direction: 'column',
	children: (
		<>
			<div>item-1</div>
			<div>item-2</div>
			<div>item-3</div>
			<div>item-4</div>
		</>
	),
};
