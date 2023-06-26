import { memo } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextVariant {
	Primary = 'primary',
	Inverted = 'inverted',
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

type TitleTagType = 'h1' | 'h2' | 'h3' | 'p';

interface TextProps {
	TitleTag?: TitleTagType;
	className?: string;
	variant?: TextVariant;
	size?: TextSize;
	align?: TextAlign;
	title?: string;
	text?: string;
	'data-testid'?: string;
}

export const Text = memo((props: TextProps) => {
	const {
		TitleTag = 'p',
		className,
		variant = TextVariant.Primary,
		size = TextSize.M,
		align = TextAlign.Left,
		title,
		text,
		'data-testid': dataTestId = 'Text'
	} = props;

	const additionalClasses = [
		className,
		cls[variant],
		cls[size],
		cls[align],
	];

	return (
		<div className={cn('', {}, additionalClasses)}>
			{title && (
				<TitleTag
					className={cls.title}
					data-testid={`${dataTestId}.Title`}
				>
					{title}
				</TitleTag>
			)}
			{text && (
				<p
					className={cls.text}
					data-testid={`${dataTestId}.Paragraph`}
				>
					{text}
				</p>
			)}
		</div>
	);
});