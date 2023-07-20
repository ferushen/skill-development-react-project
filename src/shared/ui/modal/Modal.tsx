import { ReactNode } from 'react';
import { classNames as cn, Mods } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';

import { Overlay } from '../overlay/Overlay';
import { Portal } from '@/shared/ui/portal';

import cls from './Modal.module.scss';

interface ModalProps {
	className?: string;
	children?: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
	lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
	const {
		className,
		children,
		isOpen,
		onClose,
		lazy
	} = props;

	const {
		isMounted,
		isOpening,
		handleClose
	} = useModal({
		isOpen,
		animationDelay: ANIMATION_DELAY,
		onClose
	});

	const modalMods: Mods = {
		[cls.opened]: isOpening,
	};

	if (lazy && !isMounted) {
		return null;
	}

	return (
		<Portal>
			<div className={cn(cls.modal, modalMods, [className])}>
				<Overlay onClick={handleClose} />
				<div className={cls.content}>
					{children}
				</div>
			</div>
		</Portal>
	);
};
