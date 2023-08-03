import { StoryFn, Meta } from '@storybook/react';

import { Loader } from './Loader';
import { Theme } from '@/shared/const/theme';

export default {
	title: 'shared/Loader',
	component: Loader,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof Loader>;

const Template: StoryFn<typeof Loader> = (args) => <Loader {...args} />;

export const Normal = Template.bind({});
/*Normal.parameters = {
	theming: {
		themeOverride: 'light', // component level override
	},
};*/

export const Dark = Template.bind({});
Dark.parameters = {
	theme: Theme.DARK,
};
/*Dark.parameters = {
	theming: {
		themeOverride: 'dark', // component level override
	},
};*/
