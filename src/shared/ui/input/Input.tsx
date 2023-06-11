import { InputHTMLAttributes, memo } from 'react';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly' | 'max'>;

// TODO: разобраться с InputVariant

export enum InputVariant {
	Primary = 'primary',
	OutlineDashed = 'outlineDashed',
	OutlineRounded = 'outlineRounded',
	Poured = 'poured',
}

export type InputBorder = 'rounded_6' | 'rounded_10';
export type InputLabelRatio = 'ratio_50_50' | 'ratio_40_60' | 'ratio_100';

/*export type InputHeight = 36;*/

interface InputProps extends HTMLInputProps {
	classNameInput?: string;
	classNameWrapper?: string;
	variant?: InputVariant;
	rounded?: InputBorder;
	max?: boolean;
	ratio?: InputLabelRatio;
	value?: string | number;
	label?: string;
	readonly?: boolean;
	onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
	const {
		classNameInput,
		classNameWrapper,
		variant = InputVariant.Primary,
		rounded,
		max,
		ratio,
		value,
		type = 'text',
		label,
		placeholder,
		readonly,
		onChange,
		...otherProps
	} = props;

	const wrapperMods: Mods = {
		[cls.readonly]: readonly,
		[cls.maxWidth]: max,
	};

	const wrapperClasses = [
		classNameWrapper,
		ratio && cls[ratio],
	];

	const inputClasses = [
		cls[variant],
		rounded && cls[rounded],
		classNameInput,
	];

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	return (
		<div className={cn(cls.inputWrapper, wrapperMods, wrapperClasses)}>
			{label && (
				<div className={cls.label}>
					{label}
				</div>
			)}
			<input
				{...otherProps}
				className={cn(cls.input, wrapperMods, inputClasses)}
				type={type}
				value={value}
				placeholder={placeholder}
				readOnly={readonly}
				onChange={changeHandler}
			/>
		</div>
	);
});