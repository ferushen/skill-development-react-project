import { memo } from 'react';
import { classNames as cn } from '@/shared/lib/classNames/classNames';

import cls from './Overlay.module.scss';

interface OverlayProps {
	className?: string;
	onClick?: () => void;
}

export const Overlay = memo((props: OverlayProps) => {
	const { className, onClick } = props;

	return (
		<div
			className={cn(cls.overlay, {}, [className])}
			onClick={onClick}
		/>
	);
});

/*
interface OverlayProps extends HTMLAttributes<HTMLElement> {
	className?: string;
	onClick?: () => void;
	wrapper?: ComponentType | keyof JSX.IntrinsicElements;
}

export const Overlay = memo((props: OverlayProps) => {
	const { className, onClick, wrapper: Tag = 'div', ...otherProps } = props;

	return (
		<Tag
			className={cn(cls.overlay, {}, [className])}
			onClick={onClick}
			{...otherProps}
		/>
	);
});
*/
