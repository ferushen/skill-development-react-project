// TODO: fix eslint
import { RouteProps } from 'react-router-dom';
/* eslint-disable-next-line correct-fsd-import-paths/layer-import */
import { UserRole } from '@/entities/user';

export type AppRoutesProps = RouteProps & {
	authOnly?: boolean;
	roles?: UserRole[];
};
