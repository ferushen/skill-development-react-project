import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { Popover } from './Popover';

export default {
	title: 'shared/Popover',
	component: Popover,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const Normal = Template.bind({});

export const Dark = Template.bind({});
Dark.parameters = {
	theme: Theme.DARK
};