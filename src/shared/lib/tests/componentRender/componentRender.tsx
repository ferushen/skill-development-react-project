/* eslint-disable correct-fsd-import-paths/layer-import */
import { ReducersMapObject } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from '@/app/providers/storeProvider';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18n from '@/shared/config/i18n/i18nForTests';
import { ThemeProvider } from '@/app/providers/themeProvider';
import '@/app/styles/index.scss';
import { Theme } from '@/shared/const/theme';

interface ComponentRenderOptions {
	route?: string;
	initialState?: DeepPartial<StateSchema>;
	asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
	theme?: Theme;
}

interface TestProviderProps {
	children: ReactNode;
	options?: ComponentRenderOptions;
}

export function TestProvider({ children, options = {} }: TestProviderProps) {
	const { route = '/', initialState, asyncReducers, theme = Theme.LIGHT } = options;

	return (
		<MemoryRouter initialEntries={[route]}>
			<StoreProvider
				asyncReducers={asyncReducers}
				initialState={initialState}
			>
				<I18nextProvider i18n={i18n}>
					<ThemeProvider initialTheme={theme}>
						<div className='app'>{children}</div>
					</ThemeProvider>
				</I18nextProvider>
			</StoreProvider>
		</MemoryRouter>
	);
}

export function componentRender(
	component: ReactNode,
	options: ComponentRenderOptions = {}
) {
	return render(<TestProvider options={options}>{component}</TestProvider>);
}
