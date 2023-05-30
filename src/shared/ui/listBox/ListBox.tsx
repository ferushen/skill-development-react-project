import { Fragment, ReactNode } from 'react';
import { typedMemo } from 'shared/lib/utils/typedMemo/typedMemo';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import type { DropdownDirection } from 'shared/types/ui';

import { Listbox as HListBox } from '@headlessui/react'
import { HStack, VStack } from '../stack';
import { Button, ButtonSize, ButtonVariant } from '../button/Button';

import cls from './ListBox.module.scss';

type ListBoxLabelRatio = 'ratio_50_50' | 'ratio_40_60';
type ListBoxOptionWidth = 'normal' | 'max-content';

const mapDirectionClass: Record<DropdownDirection, string> = {
	'bottom left': cls.optionsBottomLeft,
	'bottom right': cls.optionsBottomRight,
	'top left': cls.optionsTopLeft,
	'top right': cls.optionsTopRight,
};

const mapOptionWidthClass: Record<ListBoxOptionWidth, string> = {
	'normal': cls.optionWidthNormal,
	'max-content': cls.optionWidthMax,
};

export interface ListBoxOption<T extends string = string> {
	value: T;
	content: ReactNode;
	disabled?: boolean;
}

interface ListBoxProps<T extends string> {
	className?: string;
	direction?: DropdownDirection;
	optionWidth?: ListBoxOptionWidth;
	ratio?: ListBoxLabelRatio;
	readonly?: boolean;
	label?: string;
	options?: ListBoxOption<T>[];
	defaultValue?: string | T;
	value?: T;
	onChange?: (value: T) => void;
}

export const ListBox = typedMemo(<T extends string>(props: ListBoxProps<T>) => {
	const {
		className,
		direction = 'bottom right',
		optionWidth = 'normal',
		ratio,
		readonly,
		label,
		options,
		defaultValue,
		value,
		onChange
	} = props;

	const listBoxMods: Mods = {
		[cls.readonly]: readonly
	};

	const wrapperClasses = [
		className,
		ratio && cls[ratio]
	];
	const optionsClasses = [mapDirectionClass[direction]];
	const optionClasses = [mapOptionWidthClass[optionWidth]];

	return (
		<HStack
			className={cn('', {}, wrapperClasses)}
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
											},
											optionClasses
										)}
									>
										{opt.content}
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