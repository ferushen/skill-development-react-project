import { SVGProps, memo } from 'react';
import { classNames as cn } from '@/shared/lib/classNames/classNames';

import type { TestProps } from '@/shared/types/tests';

import cls from './Icon.module.scss';

type IconVariant = 'primary' | 'inverted';

interface IconProps extends SVGProps<SVGSVGElement>, TestProps {
	className?: string;
	variant?: IconVariant;
	Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props: IconProps) => {
	const {
		className,
		variant = 'primary',
		Svg,
		'data-testid': dataTestId = 'Icon',
		...otherProps
	} = props;

	const classes = [
		className,
		cls[variant]
	];

	return (
		<Svg className={cn('', {}, classes)} data-testid={dataTestId}  {...otherProps} />
	);
});