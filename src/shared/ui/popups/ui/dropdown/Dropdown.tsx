import { Fragment, memo, ReactNode } from 'react';
import { classNames as cn } from '@/shared/lib/classNames/classNames';

import type { DropdownDirection } from '@/shared/types/ui';

import { Menu } from '@headlessui/react';
import { AppLink } from '@/shared/ui/appLink';
import { Button, ButtonVariant } from '@/shared/ui/button';
import { HStack } from '@/shared/ui/stack';

import cls from './Dropdown.module.scss';

type DropdownIndent = 's' | 'm' | 'l';
type DropdownOptionsWidth = 160;

const mapIndentClass: Record<DropdownIndent, string> = {
	's': cls.smallIndent,
	'm': cls.mediumIndent,
	'l': cls.largeIndent,
};

const mapDirectionClass: Record<DropdownDirection, string> = {
	'bottom left': cls.menuBottomLeft,
	'bottom right': cls.menuBottomRight,
	'top left': cls.menuTopLeft,
	'top right': cls.menuTopRight,
};

interface DropdownItem {
	content?: ReactNode;
	href?: string;
	disabled?: boolean;
	handleClick?: () => void;
}

interface DropdownProps {
	className?: string;
	items: DropdownItem[];
	trigger: ReactNode;
	direction?: DropdownDirection;
	optionsWidth?: DropdownOptionsWidth;
	indent?: DropdownIndent;
}

export const Dropdown = memo((props: DropdownProps) => {
	const {
		className,
		items,
		trigger,
		direction = 'bottom left',
		optionsWidth,
		indent,
	} = props;

	const menuClasses = [
		mapDirectionClass[direction],
		optionsWidth && cls[`menuWidth${optionsWidth}`],
		indent && mapIndentClass[indent],
	];

	return (
		<Menu as='div' className={cn(cls.dropdown, {}, [className])}>
			<Menu.Button as='div' className={cls.btn}>
				<HStack justify={'center'} align={'center'}>
					{trigger}
				</HStack>
			</Menu.Button>
			<Menu.Items className={cn(cls.menu, {}, menuClasses)}>
				{items.map((item, index) => {
					if (item.href) {
						return (
							<Menu.Item as={Fragment} key={`dropdown-key-${index}`}>
								{({ active }) => (
									<AppLink
										className={cn(cls.item, { [cls.active]: active })}
										to={item.href as string}
									>
										{item.content}
									</AppLink>
								)}
							</Menu.Item>
						);
					}

					if (item.handleClick) {
						return (
							<Menu.Item as={Fragment} key={`dropdown-key-${index}`}>
								{({ active }) => (
									<Button
										className={cn(cls.item, { [cls.active]: active })}
										variant={ButtonVariant.Clear}
										disabled={item.disabled ? 'with_opacity' : undefined}
										animated={false}
										onClick={item.handleClick}
									>
										{item.content}
									</Button>
								)}
							</Menu.Item>
						);
					}

					return (
						<Menu.Item key={index}>
							{({ active }) => (
								<div className={cn(cls.item, { [cls.active]: active })}>
									{item.content}
								</div>
							)}
						</Menu.Item>
					);
				})}
			</Menu.Items>
		</Menu>
	);
});
