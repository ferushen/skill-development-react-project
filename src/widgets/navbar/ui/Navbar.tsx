import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { selectUserAuthData, userActions } from 'entities/user';

import { AppLink, AppLinkVariant } from 'shared/ui/appLink/AppLink';
import { Avatar } from 'shared/ui/avatar/Avatar';
import { BugButton } from 'app/providers/errorBoundary';
import { Button } from 'shared/ui/button/Button';
import { ButtonVariant } from 'shared/ui/button/Button';
import { Dropdown } from 'shared/ui/dropdown/Dropdown';
import { HStack } from 'shared/ui/stack';
import { LoginModal } from 'features/authByUsername';
import { Text, TextVariant } from 'shared/ui/text/Text';

import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	const [isAuthModal, setIsAuthModal] = useState(false);
	const authData = useSelector(selectUserAuthData);

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
					title={'🍺' + t('ferushen_app')}
				/>
				<HStack justify={'end'} gap={30}>
					<BugButton />
					{authData
						? (
							<>
								<AppLink
									variant={AppLinkVariant.Inverted}
									to={RoutePath['article-create']}
								>
									{t('create_article')}
								</AppLink>
								<Dropdown
									optionsWidth={160}
									indent='m'
									items={[
										{
											content: t('profile'),
											href: RoutePath.profile + authData.id
										},
										{
											content: t('logout'),
											handleClick: onLogout
										},
									]}
									trigger={<Avatar size={30} src={authData.avatar} />}
								/>
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