import { StoryFn, Meta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { Popover } from './Popover';

export default {
	title: 'shared/Popover',
	component: Popover,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof Popover>;

const Template: StoryFn<typeof Popover> = (args) => <Popover {...args} />;

export const Normal = Template.bind({});

export const Dark = Template.bind({});
Dark.parameters = {
	theme: Theme.DARK,
};
