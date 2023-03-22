import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './Input';

export default {
	title: 'shared/Input',
	component: Input,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	placeholder: 'Enter something',
};

export const PrimaryWithValue = Template.bind({});
PrimaryWithValue.args = {
	placeholder: 'Enter something',
	value: 'Some value'
};