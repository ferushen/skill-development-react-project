import { StateSchema } from '@/app/providers/storeProvider';
import { selectProfileIsLoading } from './selectProfileIsLoading';

describe('selectProfileIsLoading', () => {
	test('should work with filled state', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				isLoading: true,
			},
		};
		expect(selectProfileIsLoading(state as StateSchema)).toEqual(true);
	});
	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(selectProfileIsLoading(state as StateSchema)).toEqual(undefined);
	});
});
