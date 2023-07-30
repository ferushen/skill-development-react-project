import { StoryFn, Meta } from '@storybook/react';
import { Page } from './Page';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
	title: 'widgets/Page',
	component: Page,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof Page>;

const Template: StoryFn<typeof Page> = (args) => <Page {...args} />;

export const Normal = Template.bind({});
Normal.decorators = [StoreDecorator({})];
