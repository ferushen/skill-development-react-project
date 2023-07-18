import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/themeProvider';
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
				]
			}
		]
	}
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

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