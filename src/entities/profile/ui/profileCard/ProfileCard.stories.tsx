import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from 'entities/country';
import { Currency } from 'entities/currency';
import { ProfileCard } from './ProfileCard';
import avatar from 'shared/assets/tests/avatar.jpeg';

export default {
	title: 'entities/ProfileCard',
	component: ProfileCard,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	data: {
		firstname: 'Николай',
		lastname: 'Никола',
		age: 25,
		currency: Currency.RUB,
		country: 'Russia' as Country,
		city: 'Saint-Petersburg',
		username: 'SnowOrWeak',
		avatar: avatar
	},
};

export const WithError = Template.bind({});
WithError.args = {
	error: 'some error',
};

export const Loading = Template.bind({});
Loading.args = {
	isLoading: true,
};
