import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticlesSortSwitcher } from './ArticlesSortSwitcher';
import { ArticleSortField } from '../../model/types/articlesFilters';

export default {
	title: 'features/ArticlesFilters/ArticlesSortSwitcher',
	component: ArticlesSortSwitcher,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticlesSortSwitcher>;

const Template: ComponentStory<typeof ArticlesSortSwitcher> = (args) => <ArticlesSortSwitcher {...args} />;

export const Normal = Template.bind({});
Normal.args = {
	order: 'asc',
	sort: ArticleSortField.Created,
};
