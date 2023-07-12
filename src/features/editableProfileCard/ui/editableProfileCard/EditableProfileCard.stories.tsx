import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EditableProfileCard } from './EditableProfileCard';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Currency } from '@/entities/currency';
import { Country } from '@/entities/country';
import avatar from '@/shared/assets/tests/avatar.jpeg';

export default {
	title: 'features/EditableProfileCard',
	component: EditableProfileCard,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />;

export const Normal = Template.bind({});
Normal.decorators = [
	StoreDecorator({
		profile: {
			form: {
				firstname: 'Николай',
				lastname: 'Никола',
				age: '25',
				currency: 'RUB' as Currency,
				country: 'Russia' as Country,
				city: 'Saint-Petersburg',
				username: 'SnowOrWeak',
				avatar: avatar
			}
		}
	})
];

export const WithError = Template.bind({});
WithError.decorators = [
	StoreDecorator({
		profile: {
			error: 'Some error',
		}
	})
];

export const Loading = Template.bind({});
Loading.decorators = [
	StoreDecorator({
		profile: {
			isLoading: true,
		}
	})
];