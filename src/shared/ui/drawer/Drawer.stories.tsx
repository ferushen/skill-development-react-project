import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { Drawer } from './Drawer';

export default {
	title: 'shared/Drawer',
	component: Drawer,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const Normal = Template.bind({});

export const Dark = Template.bind({});
Dark.parameters = {
	theme: Theme.DARK
};