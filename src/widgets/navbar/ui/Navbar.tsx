import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/errorBoundary';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { Button } from 'shared/ui/button/Button';
import { ButtonVariant } from 'shared/ui/button/Button';
import { LoginModal } from 'features/authByUsername';

import cls from './Navbar.module.scss';


interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

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