import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AppRoutes, RoutePath } from 'app/providers/router/config/routeConfig';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { ThemeSwitcher } from 'features/themeSwitcher';
import { LangSwitcher } from 'features/langSwitcher/ui/LangSwitcher';
import { AppLink, Button } from 'shared/ui';
import { AppLinkVariant } from 'shared/ui/appLink/AppLink';
import { ButtonSize, ButtonVariant } from 'shared/ui/button/Button';

import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';

import cls from './Sidebar.module.scss';

interface SidebarProps {
	className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
	const [collapsed, setCollapsed] = useState(false);
	const { t } = useTranslation();

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

					<AppLink
						to={RoutePath[AppRoutes.MAIN]}
						variant={AppLinkVariant.INVERTED}
						className={cls.item}
					>
						<MainIcon className={cls.icon} />
						<span className={cls.link}>
							{t('Главная')}
						</span>
					</AppLink>

					<AppLink
						to={RoutePath[AppRoutes.ABOUT]}
						variant={AppLinkVariant.INVERTED}
						className={cls.item}
					>
						<AboutIcon className={cls.icon} />
						<span className={cls.link}>
							{t('О нас')}
						</span>
					</AppLink>

				</div>
				<div className={cls.switchers}>
					<ThemeSwitcher />
					<LangSwitcher short={collapsed} />
				</div>
			</div>
		</div>
	);
};