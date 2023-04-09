import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router-dom';

import {
	CombinedState,
	EnhancedStore,
	Reducer,
	ReducersMapObject,
} from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/counter';
import { ProfileSchema } from 'entities/profile';
import { UserSchema } from 'entities/user';
import { LoginSchema } from 'features/authByUsername';
import { ArticleDetailsSchema } from 'entities/article';
import { ArticleDetailsCommentsSchema } from 'pages/articleDetails';

export interface StateSchema {
	counter: CounterSchema;
	user: UserSchema;

	// Асинхронные редьюсеры
	loginForm?: LoginSchema;
	profile?: ProfileSchema;
	articleDetails?: ArticleDetailsSchema;
	articleDetailsComments?: ArticleDetailsCommentsSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager;
}

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: Reducer<CombinedState<StateSchema>>;
	// reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
}

export interface ThunkExtraArg {
	api: AxiosInstance;
	navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ThunkExtraArg;
	state: StateSchema;
}
