import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { SuspenseDecorator } from '@/shared/config/storybook/SuspenseDecorator';
import { Currency } from '@/entities/currency';
import { Country } from '@/entities/country';
import avatar from '@/shared/assets/tests/avatar.jpeg';

const data = {
	id: '1',
	firstname: 'Николай',
	lastname: 'Никола',
	age: '25',
	currency: Currency.RUB,
	country: Country.Russia,
	city: 'Saint-Petersburg',
	username: 'SnowOrWeak',
	avatar: avatar
};

export default {
	title: 'pages/ProfilePage',
	component: ProfilePage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	decorators: [
		SuspenseDecorator,

	],
	parameters: {
		router: {
			route: '/profile/1',
			path: '/profile/:id',
		}
	},
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;


export const Normal = Template.bind({});
Normal.decorators = [
	StoreDecorator({
		profile: {
			data,
			form: data,
			readonly: true,
		},
		user: {
			authData: {
				id: '1'
			}
		}
	})
];

export const CantEdit = Template.bind({});
CantEdit.decorators = [
	StoreDecorator({
		profile: {
			data,
			form: data,
			readonly: true,
		},
		user: {
			authData: {
				id: '2'
			}
		}
	})
];