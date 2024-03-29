import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
	test('test set username', () => {
		const state: DeepPartial<LoginSchema> = { username: 'someUser' };
		expect(
			loginReducer(state as LoginSchema, loginActions.setUsername('aaaa'))
		).toEqual({ username: 'aaaa' });
	});
	test('test set password', () => {
		const state: DeepPartial<LoginSchema> = { password: '123' };
		expect(
			loginReducer(state as LoginSchema, loginActions.setPassword('12345'))
		).toEqual({ password: '12345' });
	});
});
