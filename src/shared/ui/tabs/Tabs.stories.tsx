import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tabs } from './Tabs';

export default {
	title: 'shared/Tabs',
	component: Tabs,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {
	tabs: [
		{
			value: 'tab_1',
			content: 'first tab',
		},
		{
			value: 'tab_2',
			content: 'second tab',
		},
		{
			value: 'tab_3',
			content: 'third tab',
		},
	],
	active: 'tab_1',
	onClickTab: action('onClickTab')
};
