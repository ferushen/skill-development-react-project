import { ReactNode } from 'react';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between' | 'around';
export type FlexAlign = 'start' | 'center' | 'end' | 'normal';
export type FlexDirection = 'row' | 'column';
export type FlexGap = 4 | 8 | 12 | 16 | 20 | 24 | 30 | 40;

const justifyClasses: Record<FlexJustify, string> = {
	around: cls.justifyAround,
	between: cls.justifyBetween,
	center: cls.justifyCenter,
	end: cls.justifyEnd,
	start: cls.justifyStart,
};

const alignClasses: Record<FlexAlign, string> = {
	center: cls.alignCenter,
	normal: cls.alignNormal,
	end: cls.alignEnd,
	start: cls.alignStart,
};

const directionClasses: Record<FlexDirection, string> = {
	column: cls.directionColumn,
	row: cls.directionRow,
};

const gapClasses: Record<FlexGap, string> = {
	4: cls.gap4,
	8: cls.gap8,
	12: cls.gap12,
	16: cls.gap16,
	20: cls.gap20,
	24: cls.gap24,
	30: cls.gap30,
	40: cls.gap40,
};

export interface FlexProps {
	className?: string;
	children: ReactNode;
	direction?: FlexDirection;
	align?: FlexAlign;
	justify?: FlexJustify;
	gap?: FlexGap;
	max?: boolean;
}

export const Flex = (props: FlexProps) => {
	const {
		className,
		children,
		direction,
		align = 'start',
		justify = 'center',
		gap,
		max
	} = props;

	const classes = [
		className,
		direction && directionClasses[direction],
		alignClasses[align],
		justifyClasses[justify],
		gap && gapClasses[gap],
	];

	const mods: Mods = {
		[cls.max]: max,
	};

	return (
		<div className={cn(cls.flex, mods, classes)}>
			{children}
		</div>
	);
};