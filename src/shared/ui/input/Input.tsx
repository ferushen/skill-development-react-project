import { InputHTMLAttributes, memo } from 'react';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

export enum InputVariant {
	Primary = 'primary',
	OutlineDashed = 'outlineDashed',
	OutlineRounded = 'outlineRounded',
	Poured = 'poured',
}

export type InputHeight = 36;

interface InputProps extends HTMLInputProps {
	className?: string;
	variant?: InputVariant;
	maxWidth?: boolean;
	value?: string | number;
	label?: string;
	readonly?: boolean;
	onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
	const {
		className,
		variant = InputVariant.Primary,
		maxWidth,
		value,
		type = 'text',
		label,
		placeholder,
		readonly,
		onChange,
		...otherProps
	} = props;

	const mods: Mods = {
		[cls.readonly]: readonly,
		[cls.maxWidth]: maxWidth,
	};

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	return (
		<div className={cn(cls.inputWrapper, mods, [className])}>
			{label && (
				<div className={cls.label}>
					{label}
				</div>
			)}
			<input
				{...otherProps}
				className={cn(cls.input, mods, [cls[variant]])}
				type={type}
				value={value}
				placeholder={placeholder}
				readOnly={readonly}
				onChange={changeHandler}
			/>
		</div>
	);
});