import { memo } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextVariant {
	Primary = 'primary',
	Error = 'error'
}

interface TextProps {
	className?: string;
	title?: string;
	text?: string;
	variant?: TextVariant;
}

export const Text = memo((props: TextProps) => {
	const {
		className,
		title,
		text,
		variant = TextVariant.Primary
	} = props;

	return (
		<div className={cn('', {}, [className, cls[variant]])}>
			{title && <p className={cls.title}>{title}</p>}
			{text && <p className={cls.text}>{text}</p>}
		</div>
	);
});