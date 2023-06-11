import { StateSchema } from 'app/providers/storeProvider';
import { selectProfileError } from './selectProfileError';

describe('selectProfileError', () => {
	test('should return error', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				error: 'some error message',
			},
		};
		expect(selectProfileError(state as StateSchema)).toEqual(
			'some error message'
		);
	});
	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(selectProfileError(state as StateSchema)).toEqual(undefined);
	});
});
