import { ChangeEvent, useCallback, useMemo } from 'react';
import { classNames as cn, Mods } from '@/shared/lib/classNames/classNames';
import { typedMemo } from '@/shared/lib/utils/typedMemo/typedMemo';

import cls from './Select.module.scss';

export interface SelectOptions<T extends string> {
	value: T;
	content: string;
}

interface SelectProps<T extends string> {
	className?: string;
	label?: string;
	options?: SelectOptions<T>[];
	value?: T;
	readonly?: boolean;
	onChange?: (value: T) => void;
}

export const Select = typedMemo(<T extends string>(props: SelectProps<T>) => {
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

	const handleChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
		onChange?.(e.target.value as T);
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
				onChange={handleChange}
			>
				{optionsList}
			</select>
		</div>

	);
});