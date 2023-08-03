import { StateSchema } from '@/app/providers/storeProvider';
import { ArticleView } from '@/entities/article';

export const selectArticlesPageIsLoading = (state: StateSchema) =>
	state.articlesPage?.isLoading || false;
export const selectArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
export const selectArticlesPageView = (state: StateSchema) =>
	state.articlesPage?.view || ArticleView.List;
export const selectArticlesPageNum = (state: StateSchema) =>
	state.articlesPage?.page || 1;
export const selectArticlesPageLimit = (state: StateSchema) =>
	state.articlesPage?.limit || 9;
export const selectArticlesPageHasMore = (state: StateSchema) =>
	state.articlesPage?.hasMore;
export const selectArticlesPageInited = (state: StateSchema) =>
	state.articlesPage?._inited;
