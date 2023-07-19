export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
	PROFILE = 'profile',
	ARTICLES = 'articles',
	ARTICLE_DETAILS = 'article-details',
	ARTICLE_CREATE = 'article-create',
	ARTICLE_EDIT = 'article-edit',
	ADMIN_PANEL = 'admin-panel',
	FORBIDDEN = 'forbidden',
	// last
	NOT_FOUND = 'not-found',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.PROFILE]: '/profile/',
	[AppRoutes.ARTICLES]: '/articles',
	[AppRoutes.ARTICLE_DETAILS]: '/articles/',
	[AppRoutes.ARTICLE_CREATE]: '/articles/create',
	[AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
	[AppRoutes.ADMIN_PANEL]: '/admin',
	[AppRoutes.FORBIDDEN]: '/forbidden',
	// last
	[AppRoutes.NOT_FOUND]: '*',
};
