import { StateSchema } from 'app/providers/storeProvider';
import { ArticleView } from 'entities/article';

export const getArticlesPageIsLoading = (state: StateSchema) =>
	state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateSchema) =>
	state.articlesPage?.error;
export const getArticlesPageView = (state: StateSchema) =>
	state.articlesPage?.view || ArticleView.List;
export const getArticlesPageNum = (state: StateSchema) =>
	state.articlesPage?.page || 1;
export const getArticlesPageLimit = (state: StateSchema) =>
	state.articlesPage?.limit || 9;
export const getArticlesPageHasMore = (state: StateSchema) =>
	state.articlesPage?.hasMore;