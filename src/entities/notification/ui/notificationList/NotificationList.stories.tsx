import { Meta, StoryFn } from '@storybook/react';
import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
	title: 'entities/Notification/NotificationList',
	component: NotificationList,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	decorators: [StoreDecorator({})],
	parameters: {
		mockData: [
			{
				url: `${__API__}/notifications`,
				method: 'GET',
				status: 200,
				response: [
					{
						id: '1',
						title: 'Первое уведомление',
						description: 'Детальное описание к первому уведомлению',
					},
					{
						id: '2',
						title: 'Второе уведомление',
						description: 'Детальное описание ко второму уведомлению',
					},
					{
						id: '3',
						title: 'Третье уведомление',
						description: 'Детальное описание к третьему уведомлению',
					},
				],
			},
		],
	},
} as Meta<typeof NotificationList>;

const Template: StoryFn<typeof NotificationList> = (args) => (
	<NotificationList {...args} />
);

export const Normal = Template.bind({});
