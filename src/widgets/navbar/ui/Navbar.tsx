import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from '@/shared/lib/classNames/classNames';

import { getRouteArticleCreate } from '@/shared/const/router';

import { useSelector } from 'react-redux';
import { selectUserAuthData } from '@/entities/user';

import { LoginModal } from '@/features/authByUsername';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { NotificationButton } from '@/features/notificationButton';
import { AppLink, AppLinkVariant } from '@/shared/ui/appLink';
import { BugButton } from '@/features/bugButton';
import { Button } from '@/shared/ui/button';
import { ButtonVariant } from '@/shared/ui/button';
import { HStack } from '@/shared/ui/stack';
import { Text, TextVariant } from '@/shared/ui/text';

import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
	const { t } = useTranslation();

	const [isAuthModal, setIsAuthModal] = useState(false);
	const authData = useSelector(selectUserAuthData);

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

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
					title={`🍺${t('ferushen_app')}`}
				/>
				<HStack
					justify={'end'}
					gap={30}
				>
					<BugButton />
					{authData ? (
						<>
							<AppLink
								variant={AppLinkVariant.Inverted}
								to={getRouteArticleCreate()}
							>
								{t('create_article')}
							</AppLink>
							<NotificationButton />
							<AvatarDropdown />
						</>
					) : (
						<>
							<Button
								onClick={onShowModal}
								variant={ButtonVariant.ClearInverted}
							>
								{t('login')}
							</Button>
							<LoginModal
								isOpen={isAuthModal}
								onClose={onCloseModal}
							/>
						</>
					)}
				</HStack>
			</HStack>
		</header>
	);
});
