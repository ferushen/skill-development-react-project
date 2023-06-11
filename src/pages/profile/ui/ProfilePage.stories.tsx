import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { Theme } from 'app/providers/themeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Currency } from 'entities/currency';
import { Country } from 'entities/country';
import avatar from 'shared/assets/tests/avatar.jpeg';

const data = {
	id: '1',
	firstname: 'Николай',
	lastname: 'Никола',
	age: 25,
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
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
	ThemeDecorator(Theme.DARK)
];

export const CantEdit = Template.bind({});
CantEdit.args = {};
CantEdit.decorators = [];