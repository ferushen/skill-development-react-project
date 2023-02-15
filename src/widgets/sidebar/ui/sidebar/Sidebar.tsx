import { FC, useState } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { ThemeSwitcher } from 'features/themeSwitcher';
import { LangSwitcher } from 'features/langSwitcher/ui/LangSwitcher';

import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => {
		setCollapsed(prev => !prev);
	};

	return (
		<div
			className={cn(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
		>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
			<button onClick={onToggle} className={cls.button}>Шторка</button>
		</div>
	);
};