import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { counterReducer } from 'entities/counter';

export function createReduxStore(initialState?: StateSchema) {
	return configureStore<StateSchema>({
		reducer: {
			counter: counterReducer,
		},
		// отключает dev-tools в продакшене
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});
}
