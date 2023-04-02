import { ChangeEvent, memo, useCallback, useMemo } from 'react';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import cls from './Select.module.scss';

export interface SelectOptions {
	value: string;
	content: string;
}

interface SelectProps {
	className?: string;
	label?: string;
	options?: SelectOptions[];
	value?: string;
	readonly?: boolean;
	onChange?: (value: string) => void;
}

export const Select = memo((props: SelectProps) => {
	const {
		className,
		label,
		options,
		value,
		readonly,
		onChange
	} = props;

	const mods: Mods = {
		[cls.readonly]: readonly
	};

	const optionsList = useMemo(() => {
		return options?.map(opt => (
			<option
				className={cls.option}
				value={opt.value}
				key={opt.value}
			>
				{opt.content}
			</option>
		));
	}, [options]);

	const changeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
		onChange?.(e.target.value);
	}, [onChange]);

	return (
		<div className={cn(cls.wrapper, mods, [className])}>
			{label && (
				<span className={cls.label}>
					{label}
				</span>
			)}
			<select
				className={cls.select}
				value={value}
				disabled={readonly}
				onChange={changeHandler}
			>
				{optionsList}
			</select>
		</div>

	);
});