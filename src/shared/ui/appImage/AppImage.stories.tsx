import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppImage } from './AppImage';
import { Theme } from '@/shared/const/theme';

export default {
	title: 'shared/AppImage',
	component: AppImage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = (args) => <AppImage {...args} />;

export const Normal = Template.bind({});

export const Dark = Template.bind({});
Dark.parameters = {
	theme: Theme.DARK
};
