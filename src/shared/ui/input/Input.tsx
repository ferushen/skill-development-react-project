import { InputHTMLAttributes, memo } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
	className?: string;
	value?: string;
	onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
	const {
		className,
		value,
		onChange,
		type = 'text',
		...otherProps
	} = props;

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	return (
		<div className={cn(cls.inputWrapper, {}, [className])}>
			<input
				{...otherProps}
				type={type}
				value={value}
				onChange={onChangeHandler}
				className={cls.input}
			/>
		</div>
	);
});