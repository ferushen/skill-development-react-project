import { Meta, StoryFn } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ArticlesPageFilters } from './ArticlesPageFilters';

export default {
	title: 'features/ArticlesFilters/ArticlesPageFilters',
	component: ArticlesPageFilters,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof ArticlesPageFilters>;

const Template: StoryFn<typeof ArticlesPageFilters> = (args) => <ArticlesPageFilters {...args} />;

export const Normal = Template.bind({});
Normal.decorators = [
	StoreDecorator({})
];
