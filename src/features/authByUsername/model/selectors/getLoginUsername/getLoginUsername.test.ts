import { StateSchema } from 'app/providers/storeProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
	test('should return true', () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				username: 'username',
			},
		};
		expect(getLoginUsername(state as StateSchema)).toBe('username');
	});
	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getLoginUsername(state as StateSchema)).toBe('');
	});
});
