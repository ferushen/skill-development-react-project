import { memo } from 'react';
import { useTheme } from '@/app/providers/themeProvider';
import { classNames as cn } from '@/shared/lib/classNames/classNames';

import { Button, ButtonVariant } from '@/shared/ui/button/Button';

import IconTumbler from '@/shared/assets/icons/theme-tumbler.svg';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button
			className={cn(cls.switcher, {}, [className])}
			variant={ButtonVariant.Clear}
			animated={false}
			onClick={toggleTheme}
		>
			<IconTumbler className={cn(cls[theme], {}, [])} />
		</Button>
	);
});