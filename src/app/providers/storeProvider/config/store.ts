import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { createReducerManager } from './reducerManager';
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { $api } from 'shared/api/api';
import { counterReducer } from 'entities/counter';
import { scrollSaverReducer } from 'features/scrollSaver';
import { userReducer } from 'entities/user';
import { rtkApi } from 'shared/api/rtkApi';

export function createReduxStore(
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>
) {
	const rootReducer: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		counter: counterReducer,
		scrollSaver: scrollSaverReducer,
		user: userReducer,
		[rtkApi.reducerPath]: rtkApi.reducer,
	};

	// создание Reducer Manager
	const reducerManager = createReducerManager(rootReducer);

	const extraArg: ThunkExtraArg = {
		api: $api,
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
			}).concat(rtkApi.middleware),
	});

	// добавление поля reducerManager к store
	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
