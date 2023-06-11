import { memo, CSSProperties } from 'react';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import cls from './Skeleton.module.scss';

type SkeletonVariant = 'primary' | 'filled';
type SkeletonAnimationSize = 'small' | 'big';

interface SkeletonProps {
	className?: string;
	variant?: SkeletonVariant;
	size?: SkeletonAnimationSize;
	height?: string | number;
	width?: string | number;
	border?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
	const {
		className,
		variant = 'primary',
		size = 'small',
		height,
		width,
		border
	} = props;

	const mods: Mods = {};

	const classes = [
		className,
		cls[variant],
		cls[size]
	];

	const styles: CSSProperties = {
		height,
		width,
		borderRadius: border,
	};

	return (
		<div
			className={cn(cls.skeleton, mods, classes)}
			style={styles}
		/>
	);
});