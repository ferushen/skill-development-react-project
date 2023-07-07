import { ReactNode, memo } from 'react';
import { Mods, classNames as cn } from 'shared/lib/classNames/classNames';

import { useTheme } from 'app/providers/themeProvider';
import { useModal } from 'shared/lib/hooks/useModal/useModal';

import { Overlay } from 'shared/ui/overlay/Overlay';
import { Portal } from 'shared/ui/portal/Portal';

import cls from './Drawer.module.scss';

interface DrawerProps {
	className?: string;
	children: ReactNode;
	isOpen: boolean;
	onClose: () => void;
	lazy?: boolean;
}

export const Drawer = memo((props: DrawerProps) => {
	const {
		className,
		children,
		isOpen,
		lazy,
		onClose
	} = props;

	const { theme } = useTheme();
	const {
		handleClose,
		isMounted,
		isOpening
	} = useModal({
		isOpen,
		animationDelay: 300,
		onClose,
	});

	const mods: Mods = {
		[cls.opened]: isOpening,
	};

	if (lazy && !isMounted) {
		return null;
	}

	return (
		<Portal>
			<div className={cn(cls.drawer, mods, [className, theme, 'app_drawer'])}>
				<Overlay className={cls.overlay} onClick={handleClose} />
				<div className={cls.content}>
					{children}
				</div>
			</div>
		</Portal>
	);
});