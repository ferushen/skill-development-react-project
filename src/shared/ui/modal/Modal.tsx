import { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { useMount } from 'shared/lib/hooks/useMount/useMount';

import { Portal } from 'shared/ui//portal/Portal';

import cls from './Modal.module.scss';

interface ModalProps {
	className?: string;
	children?: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
	lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = (props) => {
	const {
		className,
		children,
		isOpen,
		onClose,
		lazy
	} = props;

	// состояние для отслеживания момента закрытия модалки
	// const [isClosing, setIsClosing] = useState(false);
	// референс для хранения таймера для навешивания стилей на модалку при закрытии
	// const timerRef = useRef<ReturnType<typeof setTimeout>>();

	const [isMounted, setIsMounted] = useState(false);
	const { mounted } = useMount({ opened: isOpen, delay: ANIMATION_DELAY });

	const modalMods: Record<string, boolean> = {
		[cls.opened]: isOpen,
		/*[cls.isClosing]: !isOpen*/
	};

	useEffect(() => {
		if (isOpen) {
			setIsMounted(true);
		}
	}, [isOpen]);

	useEffect(() => {
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				closeHandler();
			}
		};

		if (isOpen) {
			window.addEventListener('keydown', onKeyDown);
		}

		return () => {
			// очищаем таймер анимации при анмаунте компонента
			// clearTimeout(timerRef.current);
			// очищаем прослушку на кнопки
			window.removeEventListener('keydown', onKeyDown);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen]);

	const closeHandler = useCallback(() => {
		if (onClose) {
			onClose();
		}
	}, [onClose]);

	// обработчик клика на контентной части модалки для предотвращения ее закрытия
	const onContentClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	if (lazy && !isMounted) {
		return null;
	}

	return (
		<Portal>
			<div className={cn(cls.modal, modalMods, [className])}>
				<div className={cls.overlay} onClick={closeHandler}>
					<div className={cls.content} onClick={onContentClick}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
};

/* 
	const timerRef = useRef<ReturnType<typeof setTimeout>>();

	const modalMods: Record<string, boolean> = {
		[cls.opened]: isOpen,
		[cls.isClosing]: isClosing
	};

	// обработчик закрытия модалки, переданный из пропсов
	const closeHandler = useCallback(() => {
		// объявляем, что модалка начинает процесс закрытия
		setIsClosing(true);
		if (onClose) {
			// закрываем модалку по таймауту; время равно времени анимации закрытия
			timerRef.current = setTimeout(() => {
				onClose();
				// объявляем, что модалка завершила процесс закрытия
				setIsClosing(false);
			}, ANIMATION_DELAY);
		}
	}, [onClose]);

	// обработчик клика на контентной части модалки для предотвращения ее закрытия
	const onContentClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	// почему ошибка ts если использовать тип React.KeyboardEvent
	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			closeHandler();
		}
	}, [closeHandler]);

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown);
		}
		return () => {
			// очищаем таймер анимации при анмаунте компонента
			clearTimeout(timerRef.current);
			// очищаем прослушку на кнопки
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [isOpen, onKeyDown]);
*/