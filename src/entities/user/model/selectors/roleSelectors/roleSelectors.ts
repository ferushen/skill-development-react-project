import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider';
import { UserRole } from '../../types/user';

export const selectUserRoles = (state: StateSchema) =>
	state.user.authData?.roles;

export const isUserAdmin = createSelector(selectUserRoles, (roles) =>
	Boolean(roles?.includes(UserRole.Admin))
);

export const isUserModerator = createSelector(selectUserRoles, (roles) =>
	Boolean(roles?.includes(UserRole.Moderator))
);
