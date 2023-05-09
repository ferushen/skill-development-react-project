import { ReactNode, useCallback } from 'react';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';
import { typedMemo } from 'shared/lib/utils/typedMemo/typedMemo';

import { Card, CardVariant } from 'shared/ui/card/Card';

import cls from './Tabs.module.scss';

export type TabSize = 'small' | 'medium' | 'large';

export interface TabItem<T extends string> {
	value: T;
	content: ReactNode;
}

interface TabsProps<T extends string> {
	className?: string;
	size?: TabSize;
	tabs: TabItem<T>[];
	active?: T;
	/*onClickTab: (tab: TabItem<T>) => void;*/
	onClickTab: (type: T) => void;
}

export const Tabs = typedMemo(<T extends string>(props: TabsProps<T>) => {
	const {
		className,
		size = 'medium',
		tabs,
		active,
		onClickTab
	} = props;

	const mods: Mods = {};

	const clickTabHandle = useCallback((tab: TabItem<T>) => {
		return () => {
			/*onClickTab(tab);*/
			onClickTab(tab.value);
		};
	}, [onClickTab]);


	return (
		<div className={cn(cls.tabs, mods, [className])}>
			{tabs.map(tab => (
				<Card
					className={cls.tab}
					variant={active === tab.value ? CardVariant.Normal : CardVariant.Outline}
					size={size}
					key={tab.value}
					onClick={clickTabHandle(tab)}
				>
					{tab.content}
				</Card>
			))}
		</div>
	);
});