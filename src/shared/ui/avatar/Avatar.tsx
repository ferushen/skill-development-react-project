import { CSSProperties, FC, useMemo } from 'react';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import cls from './Avatar.module.scss';

interface AvatarProps {
	className?: string;
	src?: string;
	alt?: string;
	size?: number;
	empty?: boolean;
}

export const Avatar: FC<AvatarProps> = (props) => {
	const {
		className,
		src,
		alt = '',
		size,
		empty
	} = props;

	const mods: Mods = {
		[cls.empty]: empty
	};

	const styles = useMemo<CSSProperties>(() => ({
		width: size || 100,
		height: size || 100,
	}), [size]);

	return (
		<img
			src={src}
			alt={alt}
			style={styles}
			className={cn(cls.avatar, mods, [className])}
		/>
	);
};