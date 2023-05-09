import { HTMLAttributes, ReactNode } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import cls from './Card.module.scss';

export enum CardVariant {
	Normal = 'normal',
	Outline = 'outline',
}

export type CardSize = 'small' | 'medium' | 'large';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	variant?: CardVariant;
	size?: CardSize;
	children: ReactNode;
}

export const Card = (props: CardProps) => {
	const {
		className,
		variant = CardVariant.Normal,
		size = 'medium',
		children,
		...otherProps
	} = props;

	const additionalClasses = [
		className,
		cls[variant],
		size && cls[size],
	];

	return (
		<div
			{...otherProps}
			className={cn(cls.card, {}, additionalClasses)}
		>
			{children}
		</div>
	);
};