import { ButtonHTMLAttributes, FC } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonTheme {
	CLEAR = 'clear',
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
	theme?: ButtonTheme;
	square?: boolean;
	size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
	const {
		className,
		children,
		theme,
		square,
		size,
		...otherProps
	} = props;

	const mods: Record<string, boolean> = {
		[cls.square]: square,
	};

	const additionalClasses: string[] = [
		className,
		cls[theme],
		cls[size]
	];

	return (
		<button
			{...otherProps}
			className={cn(cls.button, mods, additionalClasses)}
		>
			{children}
		</button>
	);
};