import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './themeContext';

interface UseThemeResult {
	toggleTheme: () => void;
	theme: Theme;
}

export function useTheme(): UseThemeResult {
	const { theme, setTheme } = useContext(ThemeContext);

	const toggleTheme = () => {
		if (theme) {
			document.body.classList.remove(theme);
		}
		const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

		setTheme(newTheme);

		// вешаем на body класс с css-переменными выбранной темы приложения
		document.body.classList.add(newTheme);
		// сохраняем выбранную тему в local storage
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	};

	return { theme, toggleTheme };
}
