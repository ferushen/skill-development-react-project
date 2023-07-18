import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/themeProvider';
import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
	title: 'features/ArticleRating',
	component: ArticleRating,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {
		articleId: '1'
	},
	decorators: [StoreDecorator({
		user: {
			authData: {
				id: '1'
			}
		}
	})],
	parameters: {
		mockData: [
			{
				url: `${__API__}/article-ratings?userId=1&articleId=1`, // важен порядок query-параметров
				method: 'GET',
				status: 200,
				response: [{
					rate: 4,
					feedback: 'статья нормик'
				}]
			}
		]
	}
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

export const Normal = Template.bind({});
Normal.decorators = [
	ThemeDecorator(Theme.LIGHT),
];

export const Dark = Template.bind({});
Dark.decorators = [
	ThemeDecorator(Theme.DARK),
];

export const WithoutRate = Template.bind({});
WithoutRate.args = {};
WithoutRate.decorators = [
	ThemeDecorator(Theme.LIGHT),
];
WithoutRate.parameters = {
	mockData: [
		{
			url: `${__API__}/article-ratings?userId=1&articleId=1`,
			method: 'GET',
			status: 200,
			response: [{
				rate: 0,
			}]
		}
	]
};