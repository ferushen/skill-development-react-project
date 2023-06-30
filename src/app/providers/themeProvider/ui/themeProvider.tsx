import { ReactNode, useEffect, useMemo, useState } from 'react';
import { Theme } from '../consts/consts';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../lib/themeContext';

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

	useEffect(() => {
		document.body.classList.add(theme);
		return () => {
			document.body.classList.remove(theme);
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