import { StateSchema } from '@/app/providers/storeProvider';
import { ArticleType } from '@/entities/article';
import { ArticleSortField } from '../types/articlesFilters';

export const selectArticlesFiltersOrder = (state: StateSchema) =>
	state.articlesFilters?.order ?? 'asc';
export const selectArticlesFiltersSort = (state: StateSchema) =>
	state.articlesFilters?.sort ?? ArticleSortField.Created;
export const selectArticlesFiltersSearch = (state: StateSchema) =>
	state.articlesFilters?.search ?? '';
export const selectArticlesFiltersTabType = (state: StateSchema) =>
	state.articlesFilters?.type || ArticleType.All;
