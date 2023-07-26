/* eslint-disable react/prop-types */
import { ButtonHTMLAttributes, ForwardedRef, forwardRef, memo, ReactNode } from 'react';
import { classNames as cn, Mods } from '@/shared/lib/classNames/classNames';

import type { TestProps } from '@/shared/types/tests';

import cls from './Button.module.scss';

export enum ButtonVariant {
	Clear = 'clear',
	ClearInverted = 'clear_inverted',
	Outline = 'outline',
	OutlineRed = 'outline_red',
	OutlineSecondary = 'outline_secondary',
	Background = 'background',
	BackgroundInverted = 'background_inverted',
	BackgroundSecondaryInverted = 'background_secondary_inverted',
}

export enum ButtonSize {
	S = 'size_s',
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl',
}

type ButtonDisabled = 'only_cursor' | 'with_opacity';
type ButtonWidth = 'max';
type ButtonFormat = 'square' | 'flat' | 'stretch';

interface ButtonProps extends TestProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'width' | 'disabled'> {
	className?: string;
	variant?: ButtonVariant;
	format?: ButtonFormat;
	size?: ButtonSize;
	width?: ButtonWidth;
	disabled?: ButtonDisabled;
	animated?: boolean;
	children?: ReactNode;
}

export const Button = memo(forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
	const {
		className,
		children,
		variant = ButtonVariant.Outline,
		size = ButtonSize.M,
		format,
		width,
		disabled,
		animated = true,
		...otherProps
	} = props;

	const mods: Mods = {
		[cls.animated]: disabled || variant === ButtonVariant.Clear || variant === ButtonVariant.ClearInverted ? false : animated,
	};

	const classes: Array<string | undefined> = [
		cls[size],
		cls[variant],
		format && cls[format],
		width && cls[width],
		disabled && cls[disabled],
		className,
	];

	return (
		<button
			{...otherProps}
			className={cn(cls.button, mods, classes)}
			disabled={Boolean(disabled)}
			ref={ref}
			data-testid={props['data-testid'] ?? 'Button'}
		>
			{children}
		</button>
	);
}));