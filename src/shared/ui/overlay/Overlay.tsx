import { memo } from 'react';
import { classNames as cn } from '@/shared/lib/classNames/classNames';

import cls from './Overlay.module.scss';

interface OverlayProps {
	className?: string;
	onClick?: () => void;
	/*as?: ComponentType | keyof JSX.IntrinsicElements;*/
}

export const Overlay = memo((props: OverlayProps) => {
	const { className, onClick, /*as: Tag = 'div'*/ } = props;

	return (
		<div
			className={cn(cls.overlay, {}, [className])}
			onClick={onClick}
		/>
	);
});