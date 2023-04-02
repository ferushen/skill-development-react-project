import { profileActions, profileReducer } from './profileSlice';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { Country } from 'entities/country';
import { Currency } from 'entities/currency';

const data = {
	firstname: 'Николай',
	lastname: 'Никола',
	age: 25,
	currency: Currency.RUB,
	country: Country.Russia,
	city: 'Saint-Petersburg',
	username: 'SnowOrWeak',
	avatar: 'url',
};

describe('profileSlice', () => {
	test('test set readonly', () => {
		const state: DeepPartial<ProfileSchema> = { readonly: false };

		expect(
			profileReducer(state as ProfileSchema, profileActions.setReadonly(true))
		).toEqual({ readonly: true });
	});

	test('test cancel edit', () => {
		const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };

		expect(
			profileReducer(state as ProfileSchema, profileActions.cancelEdit())
		).toEqual({
			readonly: true,
			validateErrors: undefined,
			data,
			form: data,
		});
	});

	test('test update profile', () => {
		const state: DeepPartial<ProfileSchema> = {
			data,
			form: { username: 'prevUserName' },
		};

		expect(
			profileReducer(
				state as ProfileSchema,
				profileActions.updateProfile({ username: 'newUserName' })
			)
		).toEqual({
			data,
			form: {
				username: 'newUserName',
			},
		});
	});

	test('test update profile service pending', () => {
		const state: DeepPartial<ProfileSchema> = {
			isLoading: false,
			validateErrors: [ValidateProfileError.ServerError],
		};

		expect(
			profileReducer(state as ProfileSchema, updateProfileData.pending)
		).toEqual({
			isLoading: true,
			validateErrors: undefined,
		});
	});

	test('test update profile service fulfilled', () => {
		const state: DeepPartial<ProfileSchema> = {
			isLoading: true,
		};

		expect(
			profileReducer(
				state as ProfileSchema,
				updateProfileData.fulfilled(data, '')
			)
		).toEqual({
			isLoading: false,
			readonly: true,
			form: data,
			data,
			validateErrors: undefined,
		});
	});
});
