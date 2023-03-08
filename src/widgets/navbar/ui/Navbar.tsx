import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/errorBoundary';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { Button } from 'shared/ui/button/Button';
import { ButtonVariant } from 'shared/ui/button/Button';
import { Modal } from 'shared/ui/modal/Modal';

import cls from './Navbar.module.scss';


interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);

	const onToggleModal = useCallback(() => {
		setIsAuthModal(prev => !prev);
	}, []);

	return (
		<div className={cn(cls.navbar, {}, [className])}>
			<BugButton />
			<Button
				onClick={onToggleModal}
				variant={ButtonVariant.CLEAR_INVERTED}
			>
				{t('Войти')}
			</Button>
			<Modal isOpen={isAuthModal} onClose={onToggleModal}>
				{t('lorem')}
			</Modal>
		</div>
	);
};