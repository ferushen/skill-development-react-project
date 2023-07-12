import { CSSProperties, memo, useMemo } from 'react';
import { classNames as cn } from '@/shared/lib/classNames/classNames';

import EmptyAvatar from './visitor-512-512.png';
import cls from './Avatar.module.scss';

interface AvatarProps {
	className?: string;
	src?: string;
	alt?: string;
	size?: number;
	empty?: boolean;
}

export const Avatar = memo((props: AvatarProps) => {
	const {
		className,
		src,
		alt = '',
		size,
		empty
	} = props;

	const styles = useMemo<CSSProperties>(() => ({
		width: size || 100,
		height: size || 100,
	}), [size]);

	return (
		<img
			src={!empty ? src : EmptyAvatar}
			alt={alt}
			style={styles}
			className={cn(cls.avatar, {}, [className])}
		/>
	);
});