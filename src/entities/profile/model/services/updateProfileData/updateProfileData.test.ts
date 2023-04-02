import { updateProfileData } from './updateProfileData';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/currency';
import { Country } from 'entities/country';
import { ValidateProfileError } from '../../types/profile';

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

describe('updateProfileData', () => {
	test('success update', async () => {
		// создаем инстанс TestAsyncThunk и вызываем thunk
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: data,
			},
		});

		// мокаем ответ от сервера
		thunk.api.put.mockReturnValue(Promise.resolve({ data: data }));

		const result = await thunk.callThunk();

		// убеждаемся что запрос на сервер был отправлен
		expect(thunk.api.put).toHaveBeenCalled();
		// убеждаемся что async thunk отработал без ошибок
		expect(result.meta.requestStatus).toBe('fulfilled');
		// проверяем payload
		expect(result.payload).toEqual(data);
	});

	test('server error', async () => {
		// создаем инстанс TestAsyncThunk и вызываем thunk
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: data,
			},
		});

		// мокаем ответ от сервера
		thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await thunk.callThunk();

		// убеждаемся что async thunk отработал без ошибок
		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toEqual([ValidateProfileError.ServerError]);
	});

	test('validate error', async () => {
		// создаем инстанс TestAsyncThunk и вызываем thunk
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: { ...data, lastname: '' },
			},
		});

		// нет необходимости мокать ответ, т.к. до него не должно дойти
		//thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

		const result = await thunk.callThunk();

		// убеждаемся что async thunk отработал без ошибок
		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toEqual([ValidateProfileError.IncorrectUserData]);
	});
});
