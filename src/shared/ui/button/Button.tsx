import { ButtonHTMLAttributes, FC } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ThemeButton {
	CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
	const {
		className,
		theme,
		children,
		...otherProps
	} = props;

	return (
		<button
			{...otherProps}
			className={cn(cls.button, {}, [className, cls[theme]])}
		>
			{children}
		</button>
	);
};