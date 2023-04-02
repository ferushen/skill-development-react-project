import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { createReducerManager } from './reducerManager';
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { counterReducer } from 'entities/counter';
import { userReducer } from 'entities/user';
import { $api } from 'shared/api/api';
import { NavigateOptions, To } from 'react-router-dom';

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

export function createReduxStore(
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>,
	navigate?: (to: To, options?: NavigateOptions) => void
) {
	const rootReducer: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		counter: counterReducer,
		user: userReducer,
	};

	// создание Reducer Manager
	const reducerManager = createReducerManager(rootReducer);

	const extraArg: ThunkExtraArg = {
		api: $api,
		navigate,
	};

	const store = configureStore({
		// использование (добавление) Reducer Manager
		reducer: reducerManager.reduce,
		// __IS_DEV__ отключает dev-tools в продакшене
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: extraArg,
				},
			}),
	});

	// добавление поля reducerManager к store
	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
}
