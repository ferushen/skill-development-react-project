import { memo } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextVariant {
	Primary = 'primary',
	Error = 'error'
}

export enum TextSize {
	S = 'size_s',
	M = 'size_m',
	L = 'size_l',
}

export enum TextAlign {
	Center = 'center',
	Left = 'left',
	Right = 'right'
}

interface TextProps {
	className?: string;
	variant?: TextVariant;
	size?: TextSize;
	align?: TextAlign;
	title?: string;
	text?: string;
}

export const Text = memo((props: TextProps) => {
	const {
		className,
		variant = TextVariant.Primary,
		size = TextSize.M,
		align = TextAlign.Left,
		title,
		text,
	} = props;

	const additionalClasses = [
		className,
		cls[variant],
		cls[size],
		cls[align],
	];

	return (
		<div className={cn('', {}, additionalClasses)}>
			{title && <p className={cls.title}>{title}</p>}
			{text && <p className={cls.text}>{text}</p>}
		</div>
	);
});