import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/themeProvider';
import { NotificationItem } from './NotificationItem';

export default {
	title: 'entities/Notification/NotificationItem',
	component: NotificationItem,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {
		item: {
			id: '1',
			description: 'Здесь описание уведомления',
			title: 'Заголовок уведомления'
		}
	}
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
	ThemeDecorator(Theme.LIGHT),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
	ThemeDecorator(Theme.DARK),
];