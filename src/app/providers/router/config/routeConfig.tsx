import { AppRoutes, getRouteAbout, getRouteAdminPanel, getRouteArticleCreate, getRouteArticleDetails, getRouteArticleEdit, getRouteArticles, getRouteForbidden, getRouteMain, getRouteProfile } from '@/shared/const/router';
import type { AppRoutesProps } from '@/shared/types/router';

import { MainPage } from '@/pages/main';
import { AboutPage } from '@/pages/about';
import { NotFoundPage } from '@/pages/notFoundPage';
import { ProfilePage } from '@/pages/profile';
import { ArticlesPage } from '@/pages/articles';
import { ArticleDetailsPage } from '@/pages/articleDetails';
import { ArticleEditPage } from '@/pages/articleEditPage';
import { AdminPanelPage } from '@/pages/adminPanel';
import { ForbiddenPage } from '@/pages/forbidden';

import { UserRole } from '@/entities/user';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
	[AppRoutes.Main]: {
		path: getRouteMain(),
		element: <MainPage />
	},
	[AppRoutes.About]: {
		path: getRouteAbout(),
		element: <AboutPage />
	},
	[AppRoutes.Profile]: {
		path: getRouteProfile(':id'),
		element: <ProfilePage />,
		authOnly: true
	},
	[AppRoutes.Articles]: {
		path: getRouteArticles(),
		element: <ArticlesPage />,
		authOnly: true
	},
	[AppRoutes.ArticleDetails]: {
		path: getRouteArticleDetails(':id'),
		element: <ArticleDetailsPage />,
		authOnly: true
	},
	[AppRoutes.ArticleCreate]: {
		path: getRouteArticleCreate(),
		element: <ArticleEditPage />,
		authOnly: true
	},
	[AppRoutes.ArticleEdit]: {
		path: getRouteArticleEdit(':id'),
		element: <ArticleEditPage />,
		authOnly: true
	},
	[AppRoutes.AdminPanel]: {
		path: getRouteAdminPanel(),
		element: <AdminPanelPage />,
		authOnly: true,
		roles: [UserRole.Admin, UserRole.Moderator],
	},
	[AppRoutes.Forbidden]: {
		path: getRouteForbidden(),
		element: <ForbiddenPage />,
	},
	// last
	[AppRoutes.NotFound]: {
		path: '*',
		element: <NotFoundPage />
	},
};
