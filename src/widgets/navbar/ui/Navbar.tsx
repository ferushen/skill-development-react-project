import { FC } from 'react';

import { classNames as cn } from 'shared/lib/classNames/classNames';

import { AppLink } from 'shared/ui';
import { AppLinkTheme } from 'shared/ui/appLink/AppLink';


import cls from './Navbar.module.scss';


interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	return (
		<div className={cn(cls.navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink to={'/'} theme={AppLinkTheme.INVERTED}>
					Главная
				</AppLink>
				<AppLink to={'/about'} theme={AppLinkTheme.INVERTED}>
					O нас
				</AppLink>
			</div>
		</div>
	);
};