import { StateSchema } from '@/app/providers/storeProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
	test('should return true', () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				password: 'password',
			},
		};
		expect(getLoginPassword(state as StateSchema)).toBe('password');
	});
	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getLoginPassword(state as StateSchema)).toBe('');
	});
});
