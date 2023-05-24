import { Fragment, ReactNode } from 'react';
import { typedMemo } from 'shared/lib/utils/typedMemo/typedMemo';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import { Listbox as HListBox } from '@headlessui/react'
import { HStack, VStack } from '../stack';
import { Button, ButtonSize, ButtonVariant } from '../button/Button';

import cls from './ListBox.module.scss';

export interface ListBoxOption<T extends string = string> {
	value: T;
	content: ReactNode;
	disabled?: boolean;
}

type DropdownDirection = 'top' | 'bottom';

type ListBoxLabelRatio = 'ratio_50_50' | 'ratio_40_60';

interface ListBoxProps<T extends string> {
	className?: string;
	direction?: DropdownDirection;
	label?: string;
	ratio?: ListBoxLabelRatio;
	readonly?: boolean;
	options?: ListBoxOption<T>[];
	defaultValue?: T;
	value?: T;
	onChange?: (value: T) => void;
}

export const ListBox = typedMemo(<T extends string>(props: ListBoxProps<T>) => {
	const {
		className,
		direction = 'bottom',
		label,
		ratio,
		readonly,
		options,
		defaultValue,
		value,
		onChange
	} = props;

	const listBoxMods: Mods = {
		[cls.readonly]: readonly
	};

	const classes = [
		className,
		ratio && cls[ratio]
	];

	const optionsClasses = [cls[direction]];

	return (
		<HStack
			className={cn('', {}, classes)}
			justify='start'
			width={ratio && 'max'}
		>
			{label && (
				<div className={cls.label}>
					{label}
				</div>
			)}
			<HListBox
				as='div'
				className={cn(cls.listBox, listBoxMods, [])}
				value={value}
				onChange={onChange}
			>
				<HListBox.Button as={'div'}>
					<Button
						/*className={readonly ? cls.only_cursor : undefined}*/
						variant={readonly ? ButtonVariant.OutlineSecondary : ButtonVariant.Outline}
						size={ButtonSize.S}
						width={ratio && 'max'}
						disabled={readonly ? 'only_cursor' : undefined}
					>
						{/*(value && t(value))*/value ?? defaultValue}
					</Button>
				</HListBox.Button>
				<HListBox.Options className={cn(cls.options, {}, optionsClasses)}>
					<VStack justify={'center'}>
						{options?.map(opt => (
							<HListBox.Option
								value={opt.value}
								disabled={opt.disabled}
								as={Fragment}
								key={opt.value}
							>
								{({ active, selected }) => (
									<li
										className={cn(
											cls.option,
											{
												[cls.active]: active,
												[cls.selected]: selected,
												[cls.disabled]: opt.disabled,
											}
										)}
									>
										{opt.content}
										{console.log(value)}
										{console.log(opt.value, selected)}
									</li>
								)}

							</HListBox.Option>
						))}
					</VStack>
				</HListBox.Options>
			</HListBox>
		</HStack>
	)
});