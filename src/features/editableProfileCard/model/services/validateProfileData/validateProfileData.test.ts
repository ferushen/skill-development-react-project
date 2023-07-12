import { validateProfileData } from './validateProfileData';
import { Currency } from '@/entities/currency';
import { Country } from '@/entities/country';
import { ValidateProfileError } from '../../consts/consts';

const data = {
	firstname: 'Николай',
	lastname: 'Никола',
	age: '25',
	currency: Currency.RUB,
	country: Country.Russia,
	city: 'Saint-Petersburg',
	username: 'SnowOrWeak',
	avatar: 'url',
};

describe('validateProfileData', () => {
	test('valid data', () => {
		const result = validateProfileData(data);

		expect(result).toEqual([]);
	});

	test('without firstname and lastname', () => {
		const result = validateProfileData({
			...data,
			firstname: '',
			lastname: '',
		});

		expect(result).toEqual([ValidateProfileError.EmptyUserData]);
	});

	test('without age', () => {
		const result = validateProfileData({
			...data,
			age: undefined,
		});

		expect(result).toEqual([]);
	});

	test('incorrect age format', () => {
		const result = validateProfileData({
			...data,
			age: '1112',
		});

		expect(result).toEqual([ValidateProfileError.IncorrectAgeFormat]);
	});

	test('incorrect all', () => {
		const result = validateProfileData({});

		expect(result).toEqual([ValidateProfileError.EmptyUserData]);
	});
});
