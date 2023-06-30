import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Page } from './Page';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

export default {
	title: 'shared/Page',
	component: Page,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Normal = Template.bind({});
Normal.decorators = [StoreDecorator({})];
