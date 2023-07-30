import { StoryFn, Meta } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from '../../assets/tests/storybook.png';

export default {
	title: 'shared/Avatar',
	component: Avatar,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof Avatar>;


const Template: StoryFn<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	size: 100,
	src: AvatarImg
};

export const Small = Template.bind({});
Small.args = {
	size: 50,
	src: AvatarImg
};