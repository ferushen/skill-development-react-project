import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { Skeleton } from './Skeleton';

export default {
	title: 'shared/Skeleton',
	component: Skeleton,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
	width: '80%',
	height: 100,
};

export const Circle = Template.bind({});
Circle.args = {
	border: '50%',
	width: 100,
	height: 100,
};

export const NormalDark = Template.bind({});
NormalDark.args = {
	width: '80%',
	height: 100,
};
NormalDark.parameters = {
	theme: Theme.DARK
};

export const CircleDark = Template.bind({});
CircleDark.args = {
	border: '50%',
	width: 100,
	height: 100,
};
CircleDark.parameters = {
	theme: Theme.DARK
};
