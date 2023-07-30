import { Meta, StoryFn } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
	title: 'entities/Comment/CommentList',
	component: CommentList,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof CommentList>;

const Template: StoryFn<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
	comments: [
		{
			id: '1',
			text: 'Я первый!',
			user: { id: '1', username: 'Joker' }
		},
		{
			id: '2',
			text: 'Я второй!',
			user: { id: '2', username: 'King' }
		},
		{
			id: '3',
			text: 'А я еще третий!',
			user: { id: '1', username: 'Joker' }
		},
	]
};

export const Loading = Template.bind({});
Loading.args = {
	comments: [
		{
			id: '1',
			text: 'Я первый!',
			user: { id: '1', username: 'Joker' }
		},
		{
			id: '2',
			text: 'Я второй!',
			user: { id: '2', username: 'King' }
		},
		{
			id: '3',
			text: 'А я еще третий!',
			user: { id: '1', username: 'Joker' }
		},
	],
	isLoading: true,
};
