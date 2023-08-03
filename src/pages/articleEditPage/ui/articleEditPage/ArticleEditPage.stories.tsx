import { Meta, StoryFn } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import ArticleEditPage from './ArticleEditPage';

export default {
	title: 'pages/ArticleEditPage',
	component: ArticleEditPage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof ArticleEditPage>;

const Template: StoryFn<typeof ArticleEditPage> = (args) => <ArticleEditPage {...args} />;

export const Normal = Template.bind({});
Normal.decorators = [StoreDecorator({})];
