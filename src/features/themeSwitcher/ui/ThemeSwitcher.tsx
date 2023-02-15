import { FC } from 'react';

import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { Button, ThemeButton } from 'shared/ui/button/Button';

import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button
			onClick={toggleTheme}
			className={cn('', {}, [className])}
			theme={ThemeButton.CLEAR}
		>
			{theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
		</Button>
	);
};