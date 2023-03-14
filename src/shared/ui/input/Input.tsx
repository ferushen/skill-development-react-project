import { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
	className?: string;
	value?: string;
	onChange?: (value: string) => void;
	autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
	const {
		className,
		value,
		onChange,
		type = 'text',
		autofocus,
		...otherProps
	} = props;

	const ref = useRef<HTMLInputElement>();

	useEffect(() => {
		if (autofocus) {
			ref?.current?.focus();
		}
	}, [autofocus]);

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
		console.log(e.target.value);
	};

	return (
		<div className={cn(cls.inputWrapper, {}, [className])}>
			<input
				{...otherProps}
				ref={ref}
				type={type}
				value={value}
				onChange={onChangeHandler}
				className={cls.input}
			/>
		</div>
	);
});