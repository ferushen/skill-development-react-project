import { Meta, StoryFn } from '@storybook/react';
import { ArticlesSortSwitcher } from './ArticlesSortSwitcher';
import { ArticleSortField } from '../../model/types/articlesFilters';

export default {
	title: 'features/ArticlesFilters/ArticlesSortSwitcher',
	component: ArticlesSortSwitcher,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof ArticlesSortSwitcher>;

const Template: StoryFn<typeof ArticlesSortSwitcher> = (args) => <ArticlesSortSwitcher {...args} />;

export const Normal = Template.bind({});
Normal.args = {
	order: 'asc',
	sort: ArticleSortField.Created,
};
