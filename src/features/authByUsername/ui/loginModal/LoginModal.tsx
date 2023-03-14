import { FC } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { Modal } from 'shared/ui/modal/Modal';
import { LoginForm } from '../loginForm/LoginForm';

interface LoginModalProps {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
	const {
		className,
		isOpen,
		onClose
	} = props;

	return (
		<Modal lazy isOpen={isOpen} onClose={onClose}>
			<LoginForm />
		</Modal>
	);
};