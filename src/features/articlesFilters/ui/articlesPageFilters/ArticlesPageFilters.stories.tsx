import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { ArticlesPageFilters } from './ArticlesPageFilters';

export default {
	title: 'page/ArticlesPage/ArticlesPageFilters',
	component: ArticlesPageFilters,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticlesPageFilters>;

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => <ArticlesPageFilters {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
	StoreDecorator({})
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
	ThemeDecorator(Theme.DARK),
	StoreDecorator({})
];