import { StoryFn, Meta } from '@storybook/react';
import { Select } from './Select';

export default {
	title: 'shared/Select',
	component: Select,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof Select>;


const Template: StoryFn<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	label: 'Укажите значение',
	value: '123',
	options: [
		{ value: '123', content: 'Пункт первый' },
		{ value: '234', content: 'Второй первый' },
		{ value: '345', content: 'Третий первый' },
	]
};
