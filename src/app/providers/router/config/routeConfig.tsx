import { RouteProps } from 'react-router-dom';

import { MainPage } from 'pages/main';
import { AboutPage } from 'pages/about';
import { NotFoundPage } from 'pages/notFoundPage';
import { ProfilePage } from 'pages/profile';

export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
	PROFILE = 'profile',
	// last
	NOT_FOUND = 'not-found'
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.PROFILE]: '/profile',
	// last
	[AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath[AppRoutes.MAIN],
		element: <MainPage />
	},
	[AppRoutes.PROFILE]: {
		path: RoutePath[AppRoutes.PROFILE],
		element: <ProfilePage />
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath[AppRoutes.ABOUT],
		element: <AboutPage />
	},
	// last
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath[AppRoutes.NOT_FOUND],
		element: <NotFoundPage />
	},
}; 