import { memo } from 'react';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import cls from './Icon.module.scss';

interface IconProps {
	className?: string;
	Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props: IconProps) => {
	const { className, Svg } = props;

	const mods: Mods = {};

	return (
		<Svg className={cn(cls.icon, mods, [className])} />
	);
});