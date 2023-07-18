import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/themeProvider';
import { ArticleRating } from './ArticleRating';

export default {
	title: 'features/articleRating',
	component: ArticleRating,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

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