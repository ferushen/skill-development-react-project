import { InputHTMLAttributes, memo } from 'react';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

// TODO: разобраться с InputVariant

export enum InputVariant {
	Primary = 'primary',
	OutlineDashed = 'outlineDashed',
	OutlineRounded = 'outlineRounded',
	Poured = 'poured',
}

export type InputBorder = 'rounded_6';
export type InputLabelRatio = 'ratio_50_50' | 'ratio_40_60' | 'ratio_100';

/*export type InputHeight = 36;*/

interface InputProps extends HTMLInputProps {
	className?: string;
	variant?: InputVariant;
	rounded?: InputBorder;
	ratio?: InputLabelRatio;
	value?: string | number;
	label?: string;
	readonly?: boolean;
	onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
	const {
		className,
		variant = InputVariant.Primary,
		rounded,
		ratio,
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
	};

	const classes = [
		className,
		ratio && cls[ratio]
	];

	const inputClasses = [
		cls[variant],
		rounded && cls[rounded],
	];

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	return (
		<div className={cn(cls.inputWrapper, mods, classes)}>
			{label && (
				<div className={cls.label}>
					{label}
				</div>
			)}
			<input
				{...otherProps}
				className={cn(cls.input, mods, inputClasses)}
				type={type}
				value={value}
				placeholder={placeholder}
				readOnly={readonly}
				onChange={changeHandler}
			/>
		</div>
	);
});