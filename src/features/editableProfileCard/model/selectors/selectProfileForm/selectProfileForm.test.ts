import { StateSchema } from 'app/providers/storeProvider';
import { Country } from 'entities/country';
import { Currency } from 'entities/currency';
import { selectProfileForm } from './selectProfileForm';

describe('selectProfileForm', () => {
	test('should return form', () => {
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

		const state: DeepPartial<StateSchema> = {
			profile: {
				form: data,
			},
		};
		expect(selectProfileForm(state as StateSchema)).toEqual(data);
	});
	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(selectProfileForm(state as StateSchema)).toEqual(undefined);
	});
});
