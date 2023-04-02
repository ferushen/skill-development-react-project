import { StateSchema } from 'app/providers/storeProvider';
import { ValidateProfileError } from '../../types/profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors', () => {
	test('should work with filled state', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				validateErrors: [
					ValidateProfileError.IncorrectAge,
					ValidateProfileError.IncorrectCountry,
				],
			},
		};
		expect(getProfileValidateErrors(state as StateSchema)).toEqual([
			ValidateProfileError.IncorrectAge,
			ValidateProfileError.IncorrectCountry,
		]);
	});
	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
	});
});
