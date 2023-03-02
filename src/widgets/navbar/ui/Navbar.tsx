import { BugButton } from 'app/providers/errorBoundary';
import { FC } from 'react';

import { classNames as cn } from 'shared/lib/classNames/classNames';

import cls from './Navbar.module.scss';


interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	return (
		<div className={cn(cls.navbar, {}, [className])}>
			<BugButton />
		</div>
	);
};