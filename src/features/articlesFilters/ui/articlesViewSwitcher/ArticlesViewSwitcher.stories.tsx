import { Meta, StoryFn } from '@storybook/react';
import { ArticlesViewSwitcher } from './ArticlesViewSwitcher';

export default {
	title: 'features/ArticlesFilters/ArticlesViewSwitcher',
	component: ArticlesViewSwitcher,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof ArticlesViewSwitcher>;

const Template: StoryFn<typeof ArticlesViewSwitcher> = (args) => <ArticlesViewSwitcher {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
