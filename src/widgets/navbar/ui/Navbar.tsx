import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData, userActions } from 'entities/user';

import { AppLink, AppLinkVariant } from 'shared/ui/appLink/AppLink';
import { BugButton } from 'app/providers/errorBoundary';
import { Button } from 'shared/ui/button/Button';
import { ButtonVariant } from 'shared/ui/button/Button';
import { LoginModal } from 'features/authByUsername';
import { Text, TextVariant } from 'shared/ui/text/Text';
import { HStack } from 'shared/ui/stack';

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

	return (
		<header>
			<HStack
				className={cn(cls.navbar, {}, [className])}
				justify={'between'}
				width={'max'}
			>
				<Text
					className={cls.appName}
					variant={TextVariant.Inverted}
					title={t('ferushen_app')}
				/>
				<HStack justify={'end'} gap={30}>
					<BugButton />
					{authData
						? (
							<>
								<AppLink
									variant={AppLinkVariant.INVERTED}
									to={RoutePath['article-create']}
								>
									{t('create_article')}
								</AppLink>
								<Button
									onClick={onLogout}
									variant={ButtonVariant.ClearInverted}
								>
									{t('logout')}
								</Button>
							</>
						)
						: (
							<>
								<Button
									onClick={onShowModal}
									variant={ButtonVariant.ClearInverted}
								>
									{t('login')}
								</Button>
								<LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
							</>
						)
					}
				</HStack>
			</HStack>
		</header>
	);
});