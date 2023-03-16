import { FC, Suspense } from 'react';
import { Loader } from 'shared/ui';

import { Modal } from 'shared/ui/modal/Modal';
import { LoginFormAsync } from '../loginForm/LoginForm.async';

interface LoginModalProps {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
	const {
		isOpen,
		onClose
	} = props;

	return (
		<Modal lazy isOpen={isOpen} onClose={onClose}>
			<Suspense fallback={<Loader />}>
				<LoginFormAsync />
			</Suspense>
		</Modal>
	);
};