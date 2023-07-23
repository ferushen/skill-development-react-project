export enum AppRoutes {
	Main = 'main',
	About = 'about',
	Profile = 'profile',
	Articles = 'articles',
	ArticleDetails = 'article-details',
	ArticleCreate = 'article-create',
	ArticleEdit = 'article-edit',
	AdminPanel = 'admin-panel',
	Forbidden = 'forbidden',
	// last
	NotFound = 'not-found',
}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => '/articles/create;';
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdminPanel = () => '/admin';
export const getRouteForbidden = () => '/forbidden';
