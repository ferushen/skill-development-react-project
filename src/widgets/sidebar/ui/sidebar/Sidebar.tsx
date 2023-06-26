import { memo, useMemo, useState } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';

import { SidebarItem } from '../sidebarItem/SidebarItem';
import { ThemeSwitcher } from 'features/themeSwitcher';
import { LangSwitcher } from 'features/langSwitcher/ui/LangSwitcher';
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/button/Button';
import { HStack, VStack } from 'shared/ui/stack';

import cls from './Sidebar.module.scss';

interface SidebarProps {
	className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);
	const sidebarItems = useSelector(getSidebarItems);

	const itemsList = useMemo(() => {
		return sidebarItems.map(item => (
			<SidebarItem
				key={item.path}
				item={item}
				collapsed={collapsed}
			/>
		));
	}, [collapsed, sidebarItems]);

	const onToggle = () => {
		setCollapsed(prev => !prev);
	};

	return (
		<section data-testid={'sidebar'}>
			<VStack
				className={cn(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
				align='center'
			>
				<Button
					className={cls.collapseBtn}
					variant={ButtonVariant.ClearInverted}
					size={ButtonSize.L}
					format='stretch'
					animated={false}
					onClick={onToggle}
					data-testid='sidebar-toggle'
				>
					{collapsed ? '>>>' : '<<<'}
				</Button>
				<VStack
					className={cls.content}
					justify='between'
					width='max'
				>
					<VStack
						justify='start'
						gap={20}
						role='navigation'
						className={cls.items}
					>
						{itemsList}
					</VStack>
					{collapsed ?
						(<VStack align='center' gap={16} width='max'>
							<ThemeSwitcher />
							<LangSwitcher short={collapsed} />
						</VStack>)
						:
						(<HStack justify='around' width='max'>
							<ThemeSwitcher />
							<LangSwitcher short={collapsed} />
						</HStack>)
					}
				</VStack>
			</VStack>
		</section>
	);
});