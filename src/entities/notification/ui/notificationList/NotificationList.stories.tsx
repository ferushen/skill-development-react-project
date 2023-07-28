import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import withMock from 'storybook-addon-mock';

export default {
	title: 'entities/Notification/NotificationList',
	component: NotificationList,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	decorators: [StoreDecorator({}), withMock],
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
				]
			}
		]
	}
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Normal = Template.bind({});
