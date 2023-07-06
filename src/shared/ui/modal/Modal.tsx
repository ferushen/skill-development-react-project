import { MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import { Overlay } from '../overlay/Overlay';
import { Portal } from 'shared/ui/portal/Portal';

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

	const [isMounted, setIsMounted] = useState(false);
	const [isOpening, setIsOpening] = useState(false);
	const timerClosingRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
	const timerOpeningRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

	const modalMods: Mods = {
		[cls.opened]: isOpening,
	};

	const handleClose = useCallback(() => {
		if (onClose) {
			onClose();
		}
	}, [onClose]);

	// обработчик клика на контентной части модалки для предотвращения ее закрытия
	const onContentClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	useEffect(() => {
		if (isOpen && !isMounted) {
			setIsMounted(true);
		} else if (!isOpen && isMounted) {
			timerClosingRef.current = setTimeout(() => {
				setIsMounted(false);
			}, ANIMATION_DELAY);
		}

		return () => {
			clearTimeout(timerClosingRef.current);
		};
	}, [isOpen, isMounted]);

	useEffect(() => {
		if (isOpen) {
			timerOpeningRef.current = setTimeout(() => {
				setIsOpening(true);
			});
		}

		return () => {
			clearTimeout(timerOpeningRef.current);
			setIsOpening(false);
		};
	}, [isOpen]);

	useEffect(() => {
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				handleClose();
			}
		};

		if (isOpen) {
			window.addEventListener('keydown', onKeyDown);
		}

		return () => {
			// очищаем прослушку на кнопки
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [isOpen]);

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
