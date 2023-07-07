import { ReactNode, memo } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { DropdownDirection } from 'shared/types/ui';
import { Popover as HPopover } from '@headlessui/react';

import cls from './Popover.module.scss';

const mapDirectionClass: Record<DropdownDirection, string> = {
	'bottom left': cls.optionsBottomLeft,
	'bottom right': cls.optionsBottomRight,
	'top left': cls.optionsTopLeft,
	'top right': cls.optionsTopRight,
};

interface PopoverProps {
	className?: string;
	direction?: DropdownDirection;
	trigger: ReactNode;
	children: ReactNode;
}

export const Popover = memo((props: PopoverProps) => {
	const {
		className,
		direction = 'bottom right',
		trigger,
		children,
	} = props;

	const panelOptionsClasses = [mapDirectionClass[direction]];

	return (
		<HPopover className={cn(cls.popover, {}, [className])}>
			<HPopover.Button as={'div'}
				className={cls.btn}
			>
				{trigger}
			</HPopover.Button>

			<HPopover.Panel className={cn(cls.panel, {}, panelOptionsClasses)}>
				{children}
			</HPopover.Panel>
		</HPopover>
	);
});