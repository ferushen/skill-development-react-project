import { memo, useMemo, useState } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { ThemeSwitcher } from 'features/themeSwitcher';
import { LangSwitcher } from 'features/langSwitcher/ui/LangSwitcher';
import { SidebarItem } from '../sidebarItem/SidebarItem';
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/button/Button';

import { SidebarItemsList } from '../../model/items';

import cls from './Sidebar.module.scss';

interface SidebarProps {
	className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);

	const itemsList = useMemo(() => {
		return SidebarItemsList.map(item => (
			<SidebarItem
				key={item.path}
				item={item}
				collapsed={collapsed}
			/>
		));
	}, [collapsed]);

	const onToggle = () => {
		setCollapsed(prev => !prev);
	};

	return (
		<div
			data-testid={'sidebar'}
			className={cn(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
		>
			<Button
				data-testid='sidebar-toggle'
				onClick={onToggle}
				className={cls.collapseBtn}
				variant={ButtonVariant.BACKGROUND_INVERTED}
				size={ButtonSize.MW}
			>
				{collapsed ? '>>>' : '<<<'}
			</Button>
			<div className={cls.content}>
				<div className={cls.items}>
					{itemsList}
				</div>
				<div className={cls.switchers}>
					<ThemeSwitcher />
					<LangSwitcher short={collapsed} />
				</div>
			</div>
		</div>
	);
});