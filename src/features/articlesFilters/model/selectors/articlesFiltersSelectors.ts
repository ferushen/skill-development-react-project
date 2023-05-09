import { StateSchema } from 'app/providers/storeProvider';
import { ArticleType } from 'entities/article';
import { ArticleSortField } from '../types/articlesFilters';

export const getArticlesFiltersOrder = (state: StateSchema) =>
	state.articlesFilters?.order ?? 'asc';
export const getArticlesFiltersSort = (state: StateSchema) =>
	state.articlesFilters?.sort ?? ArticleSortField.Created;
export const getArticlesFiltersSearch = (state: StateSchema) =>
	state.articlesFilters?.search ?? '';
export const getArticlesFiltersTabType = (state: StateSchema) =>
	state.articlesFilters?.type || ArticleType.All;
