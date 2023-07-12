import { HTMLAttributes, ReactNode, memo } from 'react';
import { classNames as cn } from '@/shared/lib/classNames/classNames';

import cls from './Card.module.scss';

export enum CardVariant {
	Normal = 'normal',
	Outline = 'outline',
}

export type CardSize = 'small' | 'medium' | 'large' | 'extraLarge';
export type CardColor = 'primary' | 'secondary' | 'bgColor';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	variant?: CardVariant;
	size?: CardSize;
	color?: CardColor;
	children: ReactNode;
}

export const Card = memo((props: CardProps) => {
	const {
		className,
		variant = CardVariant.Normal,
		size = 'medium',
		color = 'primary',
		children,
		...otherProps
	} = props;

	const additionalClasses = [
		className,
		cls[variant],
		size && cls[size],
		cls[color],
	];

	return (
		<div
			{...otherProps}
			className={cn(cls.card, {}, additionalClasses)}
		>
			{children}
		</div>
	);
});