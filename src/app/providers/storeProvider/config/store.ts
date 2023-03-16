import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { counterReducer } from 'entities/counter';
import { userReducer } from 'entities/user';
import { loginReducer } from 'features/authByUsername';

export function createReduxStore(initialState?: StateSchema) {
	const rootReducer: ReducersMapObject<StateSchema> = {
		counter: counterReducer,
		user: userReducer,
		loginForm: loginReducer,
	};

	return configureStore<StateSchema>({
		reducer: rootReducer,
		// отключает dev-tools в продакшене
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});
}
