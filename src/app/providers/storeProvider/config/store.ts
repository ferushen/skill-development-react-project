import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { counterReducer } from 'entities/counter';
import { userReducer } from 'entities/user';

export function createReduxStore(initialState?: StateSchema) {
	const rootReducer: ReducersMapObject<StateSchema> = {
		counter: counterReducer,
		user: userReducer,
	};

	return configureStore<StateSchema>({
		reducer: rootReducer,
		// отключает dev-tools в продакшене
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});
}
