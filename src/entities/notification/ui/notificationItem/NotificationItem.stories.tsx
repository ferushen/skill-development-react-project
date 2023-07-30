import { Meta, StoryFn } from '@storybook/react';
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
} as Meta<typeof NotificationItem>;

const Template: StoryFn<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

export const Normal = Template.bind({});
