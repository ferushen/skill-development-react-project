import { ReactNode, memo } from 'react';
import { Mods, classNames as cn } from 'shared/lib/classNames/classNames';

import { useTheme } from 'app/providers/themeProvider';

import { Overlay } from 'shared/ui/overlay/Overlay';
import { Portal } from 'shared/ui/portal/Portal';

import cls from './Drawer.module.scss';

interface DrawerProps {
	className?: string;
	children: ReactNode;
	isOpen: boolean;
	onClose: () => void;
}

export const Drawer = memo((props: DrawerProps) => {
	const {
		className,
		children,
		isOpen,
		onClose
	} = props;

	const { theme } = useTheme();

	const mods: Mods = {
		[cls.opened]: isOpen,
	};

	return (
		<Portal>
			<div className={cn(cls.drawer, mods, [className, theme, 'app_drawer'])}>
				<Overlay onClick={onClose} />
				<div className={cls.content}>
					{children}
				</div>
			</div>
		</Portal>
	);
});