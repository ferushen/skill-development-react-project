import { ReactNode, useLayoutEffect, useMemo, useState } from 'react';

import { Theme } from '@/shared/const/theme';
import { ThemeContext } from '@/shared/lib/context/themeContext';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';

const defaultValue = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
	initialTheme?: Theme;
	children: ReactNode;
}

const ThemeProvider = ({ initialTheme, children }: ThemeProviderProps) => {
	const [theme, setTheme] = useState<Theme>(initialTheme || defaultValue);

	const defaultProps = useMemo(() => ({
		theme: theme,
		setTheme: setTheme,
	}), [theme]);

	useLayoutEffect(() => {
		document.body.classList.add(theme);
		console.log('@ThemeProvider: useEffect:add ', theme);

		return () => {
			document.body.classList.remove(theme);
			console.log('@ThemeProvider: useEffect:remove ', theme);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;