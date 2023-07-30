import { StoryFn, Meta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { Overlay } from './Overlay';

export default {
	title: 'shared/Overlay',
	component: Overlay,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof Overlay>;

const Template: StoryFn<typeof Overlay> = (args) => <Overlay {...args} />;

export const Normal = Template.bind({});

export const Dark = Template.bind({});
Dark.parameters = {
	theme: Theme.DARK
};