import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentCard } from './CommentCard';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
	title: 'entities/Comment/CommentCard',
	component: CommentCard,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
	comment: {
		id: '1',
		text: 'Я первый!',
		user: { id: '1', username: 'Joker' }
	},
};

export const Dark = Template.bind({});
Dark.args = {
	comment: {
		id: '1',
		text: 'Я первый!',
		user: { id: '1', username: 'Joker' }
	},
};
Dark.decorators = [
	ThemeDecorator(Theme.DARK)
];

export const Loading = Template.bind({});
Loading.args = {
	comment: {
		id: '',
		text: '',
		user: { id: '', username: '' }
	},
	isLoading: true,
};

export const DarkLoading = Template.bind({});
DarkLoading.args = {
	comment: {
		id: '',
		text: '',
		user: { id: '', username: '' }
	},
	isLoading: true,
};
DarkLoading.decorators = [
	ThemeDecorator(Theme.DARK)
];
