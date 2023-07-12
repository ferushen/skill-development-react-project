import { fetchProfileData } from './fetchProfileData';
import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/TestAsyncThunk';
import { Currency } from '@/entities/currency';
import { Country } from '@/entities/country';

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

describe('fetchProfileData', () => {
	test('success fetch', async () => {
		// создаем инстанс TestAsyncThunk и вызываем thunk
		const thunk = new TestAsyncThunk(fetchProfileData);

		// мокаем ответ от сервера
		thunk.api.get.mockReturnValue(Promise.resolve({ data: data }));

		const result = await thunk.callThunk('1');

		// убеждаемся что запрос на сервер был отправлен
		expect(thunk.api.get).toHaveBeenCalled();
		// убеждаемся что async thunk отработал без ошибок
		expect(result.meta.requestStatus).toBe('fulfilled');
		// проверяем payload
		expect(result.payload).toEqual(data);
	});

	test('error fetch', async () => {
		// создаем инстанс TestAsyncThunk и вызываем thunk
		const thunk = new TestAsyncThunk(fetchProfileData);

		// мокаем ответ от сервера
		thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await thunk.callThunk('1');

		// убеждаемся что async thunk отработал без ошибок
		expect(result.meta.requestStatus).toBe('rejected');
	});
});
