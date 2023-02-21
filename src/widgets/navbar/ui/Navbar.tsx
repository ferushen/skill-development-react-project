import { BugButton } from 'app/providers/errorBoundary';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames as cn } from 'shared/lib/classNames/classNames';

import { AppLink } from 'shared/ui';
import { AppLinkTheme } from 'shared/ui/appLink/AppLink';


import cls from './Navbar.module.scss';


interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	const { t } = useTranslation();

	return (
		<div className={cn(cls.navbar, {}, [className])}>
			<BugButton />
			<div className={cls.links}>
				<AppLink to={'/'} theme={AppLinkTheme.INVERTED}>
					{t('Главная')}
				</AppLink>
				<AppLink to={'/about'} theme={AppLinkTheme.INVERTED}>
					{t('O нас')}
				</AppLink>
			</div>
		</div>
	);
};