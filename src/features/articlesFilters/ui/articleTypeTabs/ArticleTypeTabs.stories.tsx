import { Meta, StoryFn } from '@storybook/react';
import { ArticleTypeTabs } from './ArticleTypeTabs';

export default {
	title: 'features/ArticlesFilters/ArticleTypeTabs',
	component: ArticleTypeTabs,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof ArticleTypeTabs>;

const Template: StoryFn<typeof ArticleTypeTabs> = (args) => <ArticleTypeTabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
