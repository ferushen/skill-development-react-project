import { StoryFn, Meta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { Drawer } from './Drawer';

export default {
	title: 'shared/Drawer',
	component: Drawer,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof Drawer>;

const Template: StoryFn<typeof Drawer> = (args) => <Drawer {...args} />;

export const Normal = Template.bind({});

export const Dark = Template.bind({});
Dark.parameters = {
	theme: Theme.DARK,
};
