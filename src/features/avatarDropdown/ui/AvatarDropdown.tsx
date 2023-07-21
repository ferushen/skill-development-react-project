import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { RoutePath } from '@/shared/const/router';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { selectUserAuthData, isUserAdmin, isUserModerator, userActions } from '@/entities/user';

import { Avatar } from '@/shared/ui/avatar';
import { Dropdown } from '@/shared/ui/popups';

export const AvatarDropdown = memo(() => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	const authData = useSelector(selectUserAuthData);
	const isAdmin = useSelector(isUserAdmin);
	const isModerator = useSelector(isUserModerator);

	const isAdminPanelAvailable = isAdmin || isModerator;

	const onLogout = useCallback(() => {
		dispatch(userActions.logout());
	}, [dispatch]);

	if (!authData) {
		return null;
	}

	return (
		<Dropdown
			optionsWidth={160}
			indent='m'
			items={[
				...(isAdminPanelAvailable ? [{
					content: t('admin_panel'),
					href: RoutePath['admin-panel']
				}] : []),
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
	);
});