import { memo } from 'react';
import { Theme, useTheme } from 'app/providers/themeProvider';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { Button, ButtonVariant } from 'shared/ui/button/Button';

import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button
			className={cn('', {}, [className])}
			variant={ButtonVariant.CLEAR}
			onClick={toggleTheme}
		>
			{theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
		</Button>
	);
});