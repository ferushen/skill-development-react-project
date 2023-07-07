import { Fragment, ReactNode } from 'react';
import { typedMemo } from 'shared/lib/utils/typedMemo/typedMemo';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import type { DropdownDirection } from 'shared/types/ui';

import { Listbox as HListBox } from '@headlessui/react';
import { HStack, VStack } from 'shared/ui/stack';
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/button/Button';

import cls from './ListBox.module.scss';

// TODO: облегчить компонент (напр., убрать ListBoxLabelRatio)

type ListBoxVariant = 'outlined' | 'stretchBgInverted' | 'profileInput';
type ListBoxLabelRatio = 'ratio_50_50' | 'ratio_40_60';
type ListBoxOptionWidth = 'normal' | 'max-content';

const mapButtonVariant: Record<ListBoxVariant, ButtonVariant> = {
	'outlined': ButtonVariant.BackgroundInverted,
	'stretchBgInverted': ButtonVariant.BackgroundSecondaryInverted,
	'profileInput': ButtonVariant.BackgroundInverted,
};

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

interface ListBoxProps<T extends string = string> {
	className?: string;
	variant?: ListBoxVariant;
	direction?: DropdownDirection;
	optionWidth?: ListBoxOptionWidth;
	ratio?: ListBoxLabelRatio;
	readonly?: boolean;
	label?: string;
	options: ListBoxOption<T>[];
	defaultValue?: string | T;
	value?: T;
	onChange?: (value: T) => void;
}

export const ListBox = typedMemo(<T extends string>(props: ListBoxProps<T>) => {
	const {
		className,
		variant = 'outlined',
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
	const labelClasses = [cls[variant]];
	const optionsClasses = [mapDirectionClass[direction]];
	const optionClasses = [
		mapOptionWidthClass[optionWidth],
		cls[variant]
	];

	const activeOption = options.find((opt) => opt.value === value);
	const activeContent = activeOption?.content;

	const buttonVariant = mapButtonVariant[variant];
	const buttonMods: Mods = {
		[cls.btnReadonly]: readonly
	};

	return (
		<HStack
			className={cn('', {}, wrapperClasses)}
			justify='start'
			width={ratio && 'max'}
		>
			{label && (
				<div className={cn(cls.label, {}, labelClasses)}>
					{label}
				</div>
			)}
			<HListBox
				as='div'
				className={cn(cls.listBox, listBoxMods, [])}
				value={value}
				onChange={onChange}
			>
				<HListBox.Button as='div'>
					<Button
						className={cn(cls.btn, buttonMods, [])}
						variant={readonly ? ButtonVariant.Clear : buttonVariant}
						size={variant === 'stretchBgInverted' ? ButtonSize.M : ButtonSize.S}
						format={variant === 'stretchBgInverted' ? 'flat' : undefined}
						width={ratio && 'max'}
						disabled={readonly ? 'only_cursor' : undefined}
					>
						{activeContent ?? defaultValue}
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
	);
});