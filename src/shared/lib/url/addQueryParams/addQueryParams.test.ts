import { getQueryParams } from './addQueryParams';

describe('shared/url/addQueryParams', () => {
	test('test with one param', () => {
		const params = getQueryParams({
			test_param: 'test-value',
		});

		expect(params).toEqual('?test_param=test-value');
	});
	test('test with multiple params', () => {
		const params = getQueryParams({
			test_param: 'test-value',
			second_param: '123',
		});

		expect(params).toEqual('?test_param=test-value&second_param=123');
	});
	test('test with undefined', () => {
		const params = getQueryParams({
			test_param: 'test-value',
			second_param: undefined,
		});

		expect(params).toEqual('?test_param=test-value');
	});
});
