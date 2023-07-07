import { useMemo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserRole, selectUserRoles } from 'entities/user';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface RequireRoleProps {
	children: JSX.Element;
	roles: UserRole[];
}

export function RequireRole({ children, roles }: RequireRoleProps) {
	const location = useLocation();

	const userRoles = useSelector(selectUserRoles);

	const hasRequiredRoles = useMemo(() => {
		if (!roles) {
			return true;
		}

		return roles.some(role => {
			const hasRole = userRoles?.includes(role);
			return hasRole;
		});
	}, [roles, userRoles]);

	if (!hasRequiredRoles) {
		return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
	}

	return children;
}