import { userActions } from 'entities/user';
import { loginByUsername } from './loginByUsername';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk';

describe('loginByUsername', () => {
	test('success login', async () => {
		// информация о пользователе, которая возвращается с сервера
		const userValue = { username: '123', id: '1' };

		// создаем инстанс TestAsyncThunk и вызываем thunk
		const thunk = new TestAsyncThunk(loginByUsername);

		// мокаем ответ от сервера
		thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));

		const result = await thunk.callThunk({ username: '123', password: '1234' });

		// dispatch теперь изолирован внутри thunk
		// убеждаемся что dispatch был вызван с конкретным аргументом
		expect(thunk.dispatch).toHaveBeenCalledWith(
			userActions.setAuthData(userValue)
		);
		// убеждаемся что dispatch был вызван 3 раза
		expect(thunk.dispatch).toHaveBeenCalledTimes(3);
		// убеждаемся что запрос на сервер был отправлен
		expect(thunk.api.post).toHaveBeenCalled();
		// убеждаемся что async thunk отработал без ошибок
		expect(result.meta.requestStatus).toBe('fulfilled');
		// проверяем payload
		expect(result.payload).toEqual(userValue);
	});

	test('error login', async () => {
		// создаем инстанс TestAsyncThunk и вызываем thunk
		const thunk = new TestAsyncThunk(loginByUsername);
		// мокаем ответ от сервера
		thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await thunk.callThunk({ username: '123', password: '1234' });

		// убеждаемся что запрос на сервер был отправлен
		expect(thunk.api.post).toHaveBeenCalled();
		// убеждаемся что dispatch был вызван 2 раза (промежуточный не вызвался)
		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		// убеждаемся что async thunk отработал без ошибок
		expect(result.meta.requestStatus).toBe('rejected');
		// проверяем payload
		expect(result.payload).toEqual('error');
	});
});

// без использование testAsyncThunk
/*
describe('loginByUsername', () => {
	let dispatch: Dispatch;
	let getState: () => StateSchema;

	beforeEach(() => {
		dispatch = jest.fn();
		getState = jest.fn();
	});

	test('success login', async () => {
		const userValue = { username: '123', id: '1' };
		mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

		const action = loginByUsername({ username: '123', password: '1234' });
		const result = await action(dispatch, getState, undefined);
		
		expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
		expect(dispatch).toHaveBeenCalledTimes(3);
		expect(mockedAxios.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toEqual(userValue);
	});

	test('error login', async () => {
		mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

		const action = loginByUsername({ username: '123', password: '1234' });
		const result = await action(dispatch, getState, undefined);

		expect(mockedAxios.post).toHaveBeenCalled();
		expect(dispatch).toHaveBeenCalledTimes(2);
		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toEqual('error');
	});
});
*/
