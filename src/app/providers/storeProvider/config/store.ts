import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { createReducerManager } from './reducerManager';
import { StateSchema } from './StateSchema';
import { counterReducer } from 'entities/counter';
import { userReducer } from 'entities/user';

export function createReduxStore(
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>
) {
	const rootReducer: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		counter: counterReducer,
		user: userReducer,
	};

	// создание Reducer Manager
	const reducerManager = createReducerManager(rootReducer);

	const store = configureStore<StateSchema>({
		// использование (добавление) Reducer Manager
		reducer: reducerManager.reduce,
		// __IS_DEV__ отключает dev-tools в продакшене
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});

	// добавление поля reducerManager к store
	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
}
