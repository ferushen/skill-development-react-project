import { ButtonHTMLAttributes, ForwardedRef, forwardRef, memo, ReactNode } from 'react';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonVariant {
	Clear = 'clear',
	ClearInverted = 'clear_inverted',
	Outline = 'outline',
	OutlineRed = 'outline_red',
	OutlineSecondary = 'outline_secondary',
	Background = 'background',
	BackgroundInverted = 'background_inverted',
}

export enum ButtonSize {
	S = 'size_s',
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl',
	MW = 'max_width'
}

type ButtonDisabled = 'only_cursor' | 'with_opacity';
type ButtonWidth = 'max';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'width' | 'disabled'> {
	className?: string;
	variant?: ButtonVariant;
	square?: boolean;
	size?: ButtonSize;
	width?: ButtonWidth;
	disabled?: ButtonDisabled;
	children?: ReactNode;
}

export const Button = memo(forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
	const {
		className,
		children,
		variant = ButtonVariant.Outline,
		square,
		size = ButtonSize.M,
		width,
		disabled,
		...otherProps
	} = props;

	const mods: Mods = {
		[cls.square]: square,
	};

	const additionalClasses: Array<string | undefined> = [
		className,
		cls[variant],
		cls[size],
		width && cls[width],
		disabled && cls[disabled]
	];

	return (
		<button
			{...otherProps}
			className={cn(cls.button, mods, additionalClasses)}
			disabled={Boolean(disabled)}
			ref={ref}
		>
			{children}
		</button>
	);
}));