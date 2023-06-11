import { StateSchema } from 'app/providers/storeProvider';
import {
	selectArticleDetailsData,
	selectArticleDetailsError,
	selectArticleDetailsIsLoading,
} from './articleDetails';

describe('articleDetails', () => {
	test('should return data', () => {
		const data = {
			id: '1',
			title: 'some title',
		};

		const state: DeepPartial<StateSchema> = {
			articleDetails: {
				data,
			},
		};
		expect(selectArticleDetailsData(state as StateSchema)).toEqual(data);
	});

	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(selectArticleDetailsData(state as StateSchema)).toEqual(undefined);
	});

	test('should return isLoading', () => {
		const state: DeepPartial<StateSchema> = {
			articleDetails: {
				isLoading: true,
			},
		};
		expect(selectArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
	});

	test('should work with empty state isLoading', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(selectArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
	});

	test('should return error', () => {
		const state: DeepPartial<StateSchema> = {
			articleDetails: {
				error: 'some error',
			},
		};
		expect(selectArticleDetailsError(state as StateSchema)).toEqual(
			'some error'
		);
	});

	test('should work with empty state error', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(selectArticleDetailsError(state as StateSchema)).toEqual(undefined);
	});
});
