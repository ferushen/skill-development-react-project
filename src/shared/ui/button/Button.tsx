import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonVariant {
	CLEAR = 'clear',
	CLEAR_INVERTED = 'clearInverted',
	OUTLINE = 'outline',
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
	S = 'size_s',
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl',
	MW = 'max_width'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	variant?: ButtonVariant;
	square?: boolean;
	size?: ButtonSize;
	disabled?: boolean;
	children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
	const {
		className,
		children,
		variant,
		square,
		size,
		disabled,
		...otherProps
	} = props;

	const mods: Record<string, boolean> = {
		[cls.square]: square,
		[cls.disabled]: disabled,
	};

	const additionalClasses: string[] = [
		className,
		cls[variant],
		cls[size],
	];

	return (
		<button
			{...otherProps}
			className={cn(cls.button, mods, additionalClasses)}
			disabled={disabled}
		>
			{children}
		</button>
	);
});