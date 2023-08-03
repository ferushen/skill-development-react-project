import { memo } from 'react';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

import { Button, ButtonVariant } from '@/shared/ui/button';
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
