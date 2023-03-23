import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { useDispatch, useSelector } from 'react-redux';
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
	const dispatch = useDispatch();
	const [isAuthModal, setIsAuthModal] = useState(false);
	const authData = useSelector(getUserAuthData);

	console.log('Navbar authData', authData, 'isAuthModal', isAuthModal);
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
					{t('Выйти')}
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
				{t('Войти')}
			</Button>
			<LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
		</div>
	);
});