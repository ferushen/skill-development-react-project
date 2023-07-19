import { AppRoutes, RoutePath } from '@/shared/const/router';
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
	[AppRoutes.MAIN]: {
		path: RoutePath[AppRoutes.MAIN],
		element: <MainPage />
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath[AppRoutes.ABOUT],
		element: <AboutPage />
	},
	[AppRoutes.PROFILE]: {
		path: `${RoutePath[AppRoutes.PROFILE]}:id`,
		element: <ProfilePage />,
		authOnly: true
	},
	[AppRoutes.ARTICLES]: {
		path: RoutePath[AppRoutes.ARTICLES],
		element: <ArticlesPage />,
		authOnly: true
	},
	[AppRoutes.ARTICLE_DETAILS]: {
		path: `${RoutePath[AppRoutes.ARTICLE_DETAILS]}:id`,
		element: <ArticleDetailsPage />,
		authOnly: true
	},
	[AppRoutes.ARTICLE_CREATE]: {
		path: RoutePath[AppRoutes.ARTICLE_CREATE],
		element: <ArticleEditPage />,
		authOnly: true
	},
	[AppRoutes.ARTICLE_EDIT]: {
		path: RoutePath[AppRoutes.ARTICLE_EDIT],
		element: <ArticleEditPage />,
		authOnly: true
	},
	[AppRoutes.ADMIN_PANEL]: {
		path: RoutePath[AppRoutes.ADMIN_PANEL],
		element: <AdminPanelPage />,
		authOnly: true,
		roles: [UserRole.Admin, UserRole.Moderator],
	},
	[AppRoutes.FORBIDDEN]: {
		path: RoutePath[AppRoutes.FORBIDDEN],
		element: <ForbiddenPage />,
	},
	// last
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath[AppRoutes.NOT_FOUND],
		element: <NotFoundPage />
	},
};
