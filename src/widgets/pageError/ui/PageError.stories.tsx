import { StoryFn, Meta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { PageError } from './PageError';

export default {
	title: 'widgets/PageError',
	component: PageError,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof PageError>;


const Template: StoryFn<typeof PageError> = (args) => <PageError {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.parameters = {
	theme: Theme.DARK
};