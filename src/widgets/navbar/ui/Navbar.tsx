import { FC, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/errorBoundary';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/user';

import { Button } from 'shared/ui/button/Button';
import { ButtonVariant } from 'shared/ui/button/Button';
import { LoginModal } from 'features/authByUsername';

import cls from './Navbar.module.scss';


interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const [isAuthModal, setIsAuthModal] = useState(false);
	const authData = useSelector(getUserAuthData);

	const isAuthorize = Boolean(authData);



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

	useEffect(() => {
		if (isAuthorize && isAuthModal) {
			setIsAuthModal(false);
		}
	}, [isAuthorize, isAuthModal]);

	/*	
	const onSuccess = useCallback(() => {
		setIsAuthModal(false);
	}, []);
	*/

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
};