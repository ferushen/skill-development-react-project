import { Meta, StoryFn } from '@storybook/react';
import ForbiddenPage from './ForbiddenPage';

export default {
	title: 'pages/ForbiddenPage',
	component: ForbiddenPage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof ForbiddenPage>;

const Template: StoryFn<typeof ForbiddenPage> = () => <ForbiddenPage />;

export const Normal = Template.bind({});
