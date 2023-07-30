import { Meta, StoryFn } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import AddCommentForm from './AddCommentForm';
import { action } from '@storybook/addon-actions';

export default {
	title: 'features/AddCommentForm',
	component: AddCommentForm,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof AddCommentForm>;

const Template: StoryFn<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {
	onCommentSend: action('onCommentSend')
};
Normal.decorators = [
	StoreDecorator({})
];