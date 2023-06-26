import { StateSchema } from 'app/providers/storeProvider';
import { ValidateProfileError } from '../../types/editableProfileCard';
import { selectProfileValidateErrors } from './selectProfileValidateErrors';

describe('selectProfileValidateErrors', () => {
	test('should work with filled state', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				validateErrors: [
					ValidateProfileError.InvalidSymbolsInFirstname,
					ValidateProfileError.IncorrectAgeFormat,
				],
			},
		};
		expect(selectProfileValidateErrors(state as StateSchema)).toEqual([
			ValidateProfileError.InvalidSymbolsInFirstname,
			ValidateProfileError.IncorrectAgeFormat,
		]);
	});
	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(selectProfileValidateErrors(state as StateSchema)).toEqual(
			undefined
		);
	});
});
