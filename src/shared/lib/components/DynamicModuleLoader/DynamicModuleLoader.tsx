import { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from '@/app/providers/storeProvider';
import { StateSchema, StateSchemaKey } from '@/app/providers/storeProvider/config/StateSchema';

export type ReducersList = {
	[name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
}

interface DynamicModuleLoaderProps {
	children?: ReactNode;
	reducers: ReducersList;
	removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = props => {
	const { children, reducers, removeAfterUnmount = true } = props;
	const dispatch = useDispatch();

	const store = useStore() as ReduxStoreWithManager;

	useEffect(() => {
		const mountedReducers = store.reducerManager.getReducerMap();

		Object.entries(reducers).forEach(([name, reducer]) => {
			const mounted = mountedReducers[name as StateSchemaKey];
			// добавляем новый редьюсер только если его нет
			if (!mounted) {
				dispatch({ type: `@INIT ${name} reducer` });
				store.reducerManager.add(name as StateSchemaKey, reducer);
			}
		});

		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(([name, _]) => {
					store.reducerManager.remove(name as StateSchemaKey);
					dispatch({ type: `@DESTROY ${name} reducer` });
				});
			}
		};
		// eslint-disable-next-line
	}, []);

	return (
		<>
			{children}
		</>
	);
};
