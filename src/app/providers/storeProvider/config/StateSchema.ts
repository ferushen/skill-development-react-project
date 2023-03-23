import {
	AnyAction,
	CombinedState,
	EnhancedStore,
	Reducer,
	ReducersMapObject,
} from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/counter';
import { ProfileSchema } from 'entities/profile';
import { UserSchema } from 'entities/user';
import { LoginSchema } from 'features/authByUsername';

export interface StateSchema {
	counter: CounterSchema;
	user: UserSchema;

	// Асинхронные редьюсеры
	loginForm?: LoginSchema;
	profile?: ProfileSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager;
}

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
}
