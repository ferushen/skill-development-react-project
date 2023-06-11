import { StateSchema } from 'app/providers/storeProvider';
import { Country } from 'entities/country';
import { Currency } from 'entities/currency';
import { selectProfileData } from './selectProfileData';

describe('selectProfileData', () => {
	test('should return data', () => {
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
				data,
			},
		};
		expect(selectProfileData(state as StateSchema)).toEqual(data);
	});
	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(selectProfileData(state as StateSchema)).toEqual(undefined);
	});
});
