import { Suspense } from 'react';

import { Modal } from 'shared/ui/modal/Modal';
import { Loader } from 'shared/ui/loader/Loader';
import { LoginFormAsync } from '../loginForm/LoginForm.async';

interface LoginModalProps {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
	const {
		isOpen,
		onClose
	} = props;

	return (
		<Modal lazy isOpen={isOpen} onClose={onClose}>
			<Suspense fallback={<Loader />}>
				<LoginFormAsync onSuccess={onClose} />
			</Suspense>
		</Modal>
	);
};