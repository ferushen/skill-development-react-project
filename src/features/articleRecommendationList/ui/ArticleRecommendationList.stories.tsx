import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { ArticleRecommendationList } from './ArticleRecommendationList';

// TODO: разобраться как мокать данные от RTK query

export default {
	title: 'features/ArticleRecommendationList',
	component: ArticleRecommendationList,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticleRecommendationList>;

const Template: ComponentStory<typeof ArticleRecommendationList> = (args) => <ArticleRecommendationList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
	ThemeDecorator(Theme.LIGHT),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
	ThemeDecorator(Theme.DARK),
];