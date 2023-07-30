import { Meta, StoryFn } from '@storybook/react';
import { AvatarDropdown } from './AvatarDropdown';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { UserRole } from '@/entities/user';

export default {
	title: 'features/AvatarDropdown',
	component: AvatarDropdown,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof AvatarDropdown>;

const Template: StoryFn<typeof AvatarDropdown> = () => <AvatarDropdown />;

export const User = Template.bind({});
User.decorators = [
	StoreDecorator({
		user: {
			authData: {
				roles: [
					UserRole.User
				]
			}
		}
	})
];

export const Admin = Template.bind({});
Admin.decorators = [
	StoreDecorator({
		user: {
			authData: {
				roles: [
					UserRole.Admin
				]
			}
		}
	})
];