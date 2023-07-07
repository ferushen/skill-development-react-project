import {
	MutableRefObject,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';

interface UseModalProps {
	onClose?: () => void;
	isOpen?: boolean;
	animationDelay?: number;
}

export function useModal({ isOpen, animationDelay, onClose }: UseModalProps) {
	const [isMounted, setIsMounted] = useState(false);
	const [isOpening, setIsOpening] = useState(false);

	const timerClosingRef = useRef() as MutableRefObject<
		ReturnType<typeof setTimeout>
	>;
	const timerOpeningRef = useRef() as MutableRefObject<
		ReturnType<typeof setTimeout>
	>;

	const handleClose = useCallback(() => {
		if (onClose) {
			onClose();
		}
	}, [onClose]);

	useEffect(() => {
		if (isOpen && !isMounted) {
			setIsMounted(true);
		} else if (!isOpen && isMounted) {
			timerClosingRef.current = setTimeout(() => {
				setIsMounted(false);
			}, animationDelay);
		}

		return () => {
			clearTimeout(timerClosingRef.current);
		};
	}, [isOpen, isMounted, animationDelay]);

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
	}, [isOpen, handleClose]);

	return { isMounted, isOpening, handleClose };
}
