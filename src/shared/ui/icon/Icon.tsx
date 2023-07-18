import { SVGProps, memo } from 'react';
import { classNames as cn } from '@/shared/lib/classNames/classNames';

import cls from './Icon.module.scss';

type IconVariant = 'primary' | 'inverted';

interface IconProps extends SVGProps<SVGSVGElement> {
	className?: string;
	variant?: IconVariant;
	Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props: IconProps) => {
	const {
		className,
		variant = 'primary',
		Svg,
		...otherProps
	} = props;

	const classes = [
		className,
		cls[variant]
	];

	return (
		<Svg className={cn('', {}, classes)}  {...otherProps} />
	);
});