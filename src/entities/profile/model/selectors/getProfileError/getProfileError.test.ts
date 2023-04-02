import { StateSchema } from 'app/providers/storeProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
	test('should return error', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				error: 'some error message',
			},
		};
		expect(getProfileError(state as StateSchema)).toEqual('some error message');
	});
	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getProfileError(state as StateSchema)).toEqual(undefined);
	});
});
