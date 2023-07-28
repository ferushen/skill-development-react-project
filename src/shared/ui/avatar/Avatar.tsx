import { CSSProperties, memo, useMemo } from 'react';
import { classNames as cn } from '@/shared/lib/classNames/classNames';

import { AppImage } from '../appImage';
import { Icon } from '../icon';
import { Skeleton } from '../skeleton';

import EmptyAvatar from '../../assets/tests/visitor-80-80.png';
import UserFallback from '../../assets/icons/user-32-32.svg';

import cls from './Avatar.module.scss';

interface AvatarProps {
	className?: string;
	src?: string;
	alt?: string;
	size?: number;
	invertedFallbackColor?: boolean;
}

export const Avatar = memo((props: AvatarProps) => {
	const {
		className,
		src,
		alt = '',
		size = 100,
		invertedFallbackColor
	} = props;

	const isEmpty = !src;

	const styles = useMemo<CSSProperties>(() => ({
		width: size,
		height: size,
	}), [size]);

	const fallback = <Skeleton width={size} height={size} border='50%' />;
	const errorFallback = isEmpty ? (
		<img
			width={size}
			height={size}
			src={EmptyAvatar}
		/>
	) : (
		<Icon
			variant={invertedFallbackColor ? 'inverted' : 'primary'}
			width={size}
			height={size}
			Svg={UserFallback}
		/>
	);

	return (
		<AppImage
			className={cn(cls.avatar, {}, [className])}
			style={styles}
			src={src}
			alt={alt}
			fallback={fallback}
			errorFallback={errorFallback}
		/>
	);
});