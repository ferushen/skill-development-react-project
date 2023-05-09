import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';

import { ArticleType } from 'entities/article';
import { articlesFiltersActions } from 'features/articlesFilters';
import { ArticleSortField } from 'features/articlesFilters';
import { SortOrder } from 'shared/types/sortOrder';

import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
	void,
	URLSearchParams,
	ThunkConfig<string>
>('articles/initArticlesPage', async (searchParams, thunkAPI) => {
	const { getState, dispatch } = thunkAPI;

	const inited = getArticlesPageInited(getState());

	if (!inited) {
		searchParams.forEach((value, param) => {
			switch (param) {
				case 'order':
					dispatch(articlesFiltersActions.setOrder(value as SortOrder));
					break;
				case 'sort':
					dispatch(articlesFiltersActions.setSort(value as ArticleSortField));
					break;
				case 'search':
					dispatch(articlesFiltersActions.setSearch(value));
					break;
				case 'type':
					dispatch(articlesFiltersActions.setType(value as ArticleType));
					break;
				default:
					break;
			}
		});

		dispatch(articlesPageActions.initState());
		dispatch(fetchArticlesList({}));
	}
});
