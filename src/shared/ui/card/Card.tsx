import { HTMLAttributes, ReactNode } from 'react';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	children: ReactNode;
}

export const Card = (props: CardProps) => {
	const { className, children, ...otherProps } = props;

	const mods: Mods = {};

	return (
		<div
			{...otherProps}
			className={cn(cls.card, mods, [className])}
		>
			{children}
		</div>
	);
};