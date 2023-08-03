import { Meta, StoryFn } from '@storybook/react';
import { ArticleDetailsComments } from './ArticleDetailsComments';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
	title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
	component: ArticleDetailsComments,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof ArticleDetailsComments>;

const Template: StoryFn<typeof ArticleDetailsComments> = (args) => (
	<ArticleDetailsComments {...args} />
);

export const Normal = Template.bind({});
Normal.decorators = [
	StoreDecorator({
		articleDetailsPage: {
			comments: {
				ids: ['1', '2', '3'],
				entities: {
					1: {
						id: '1',
						text: 'some comment',
						user: {
							id: '1',
							username: 'admin',
						},
					},
					2: {
						id: '2',
						text: 'some comment 2',
						user: {
							id: '1',
							username: 'admin',
						},
					},
					3: {
						id: '3',
						text: 'some comment 3',
						user: {
							id: '1',
							username: 'admin',
						},
					},
				},
			},
		},
	}),
];

export const Empty = Template.bind({});
Empty.decorators = [
	StoreDecorator({
		articleDetailsPage: {
			comments: {
				ids: [],
				entities: {},
			},
		},
	}),
];

export const Loading = Template.bind({});
Loading.decorators = [
	StoreDecorator({
		articleDetailsPage: {
			comments: {
				ids: [],
				entities: {},
				isLoading: true,
			},
		},
	}),
];
