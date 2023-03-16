import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';
import { counterReducer } from 'entities/counter';
import { userReducer } from 'entities/user';

export function createReduxStore(initialState?: StateSchema) {
	const rootReducer: ReducersMapObject<StateSchema> = {
		counter: counterReducer,
		user: userReducer,
	};

	const reducerManager = createReducerManager(rootReducer);

	const store = configureStore<StateSchema>({
		reducer: reducerManager.reduce,
		// отключает dev-tools в продакшене
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});

	// добавляем к store редьюсер-менеджер
	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
}
