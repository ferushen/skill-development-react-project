import { Meta, StoryFn } from '@storybook/react';
import { ThemeSwitcher } from './ThemeSwitcher';

export default {
	title: 'features/ThemeSwitcher',
	component: ThemeSwitcher,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof ThemeSwitcher>;


const Template: StoryFn<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const Normal = Template.bind({});
