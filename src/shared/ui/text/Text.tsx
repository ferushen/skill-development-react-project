import { memo } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextVariant {
	Primary = 'primary',
	Error = 'error'
}

export enum TextAlign {
	Center = 'center',
	Left = 'left',
	Right = 'right'
}

interface TextProps {
	className?: string;
	variant?: TextVariant;
	align?: TextAlign;
	title?: string;
	text?: string;
}

export const Text = memo((props: TextProps) => {
	const {
		className,
		variant = TextVariant.Primary,
		align = TextAlign.Left,
		title,
		text,
	} = props;

	const additionalClasses = [
		className,
		cls[variant],
		cls[align],
	];

	return (
		<div className={cn('', {}, additionalClasses)}>
			{title && <p className={cls.title}>{title}</p>}
			{text && <p className={cls.text}>{text}</p>}
		</div>
	);
});