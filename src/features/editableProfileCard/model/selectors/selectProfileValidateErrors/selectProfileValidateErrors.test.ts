import { StateSchema } from 'app/providers/storeProvider';
import { ValidateProfileError } from '../../types/editableProfileCard';
import { selectProfileValidateErrors } from './selectProfileValidateErrors';

describe('selectProfileValidateErrors', () => {
	test('should work with filled state', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				validateErrors: [
					ValidateProfileError.IncorrectAge,
					ValidateProfileError.IncorrectCountry,
				],
			},
		};
		expect(selectProfileValidateErrors(state as StateSchema)).toEqual([
			ValidateProfileError.IncorrectAge,
			ValidateProfileError.IncorrectCountry,
		]);
	});
	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(selectProfileValidateErrors(state as StateSchema)).toEqual(
			undefined
		);
	});
});
