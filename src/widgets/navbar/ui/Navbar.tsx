import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData, userActions } from 'entities/user';

import { BugButton } from 'app/providers/errorBoundary';
import { Button } from 'shared/ui/button/Button';
import { ButtonVariant } from 'shared/ui/button/Button';
import { LoginModal } from 'features/authByUsername';

import cls from './Navbar.module.scss';


interface NavbarProps {
	className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const [isAuthModal, setIsAuthModal] = useState(false);
	const authData = useSelector(getUserAuthData);

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	const onLogout = useCallback(() => {
		dispatch(userActions.logout());
	}, [dispatch]);

	if (authData) {
		return (
			<div className={cn(cls.navbar, {}, [className])}>
				<BugButton />
				<Button
					onClick={onLogout}
					variant={ButtonVariant.CLEAR_INVERTED}
				>
					{t('logout')}
				</Button>
			</div>
		);
	}

	return (
		<div className={cn(cls.navbar, {}, [className])}>
			<BugButton />
			<Button
				onClick={onShowModal}
				variant={ButtonVariant.CLEAR_INVERTED}
			>
				{t('login')}
			</Button>
			<LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
		</div>
	);
});