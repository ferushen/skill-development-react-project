import { ReactNode, useCallback } from 'react';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { typedMemo } from '@/shared/lib/utils/typedMemo/typedMemo';

import { Card, CardVariant } from '@/shared/ui/card';
import { HStack } from '../stack';

import cls from './Tabs.module.scss';

type TabSize = 'small' | 'medium' | 'large';
type TabColor = 'primary' | 'secondary';

const activeTabClass: Record<TabColor, string> = {
	primary: cls.activePrimary,
	secondary: cls.activeSecondary,
};

const hoverTabClass: Record<TabColor, string> = {
	primary: cls.hoverPrimary,
	secondary: cls.hoverSecondary,
};

export interface TabItem<T extends string> {
	value: T;
	content: ReactNode;
}

interface TabsProps<T extends string> {
	className?: string;
	size?: TabSize;
	color?: TabColor;
	tabs: TabItem<T>[];
	active?: T;
	/*onClickTab: (tab: TabItem<T>) => void;*/
	onClickTab: (type: T) => void;
}

export const Tabs = typedMemo(<T extends string>(props: TabsProps<T>) => {
	const {
		className,
		size = 'medium',
		color = 'primary',
		tabs,
		active,
		onClickTab,
	} = props;

	const tabClasses = [cls[size], hoverTabClass[color]];

	const clickTabHandle = useCallback(
		(tab: TabItem<T>) => {
			return () => {
				/*onClickTab(tab);*/
				onClickTab(tab.value);
			};
		},
		[onClickTab]
	);

	return (
		<HStack
			gap={8}
			justify='start'
			className={className}
		>
			{tabs.map((tab) => (
				<Card
					className={cn(
						cls.tab,
						{ [activeTabClass[color]]: active === tab.value },
						tabClasses
					)}
					variant={CardVariant.Normal}
					size={size}
					color={color}
					key={tab.value}
					onClick={clickTabHandle(tab)}
				>
					{tab.content}
				</Card>
			))}
		</HStack>
	);
});
