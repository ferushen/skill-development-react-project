import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticlesSortSwitcher } from './ArticlesSortSwitcher';

export default {
	title: 'features/ArticlesSortSwitcher',
	component: ArticlesSortSwitcher,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticlesSortSwitcher>;

const Template: ComponentStory<typeof ArticlesSortSwitcher> = (args) => <ArticlesSortSwitcher {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
