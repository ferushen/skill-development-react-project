import { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/storeProvider';
import { StateSchemaKey } from 'app/providers/storeProvider/config/StateSchema';

export type ReducersList = {
	[name in StateSchemaKey]?: Reducer;
}

type ReducerListEntry = [StateSchemaKey, Reducer];

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
		Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
			dispatch({ type: `@INIT ${name} reducer` });
			store.reducerManager.add(name, reducer);
		});

		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(([name, _]: ReducerListEntry) => {
					store.reducerManager.remove(name);
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
