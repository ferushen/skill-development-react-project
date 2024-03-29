import { ReducersMapObject } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from '@/app/providers/storeProvider';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18n from '@/shared/config/i18n/i18nForTests';

export interface componentRenderOptions {
	route?: string;
	initialState?: DeepPartial<StateSchema>;
	asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
	const {
		route = '/',
		initialState,
		asyncReducers
	} = options;

	return render(
		<MemoryRouter initialEntries={[route]}>
			<StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
				<I18nextProvider i18n={i18n}>
					{component}
				</I18nextProvider>
			</StoreProvider>
		</MemoryRouter>
	);
}