import { StateSchema } from 'app/providers/storeProvider';
import { selectProfileReadonly } from './selectProfileReadonly';

describe('selectProfileReadonly', () => {
	test('should return true value for readonly', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				readonly: true,
			},
		};
		expect(selectProfileReadonly(state as StateSchema)).toEqual(true);
	});
	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(selectProfileReadonly(state as StateSchema)).toEqual(undefined);
	});
});
