import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { Article, ArticleType } from 'entities/article';
import {
	getArticlesFiltersOrder,
	getArticlesFiltersSearch,
	getArticlesFiltersSort,
	getArticlesFiltersTabType,
} from 'features/articlesFilters';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import {
	getArticlesPageLimit,
	getArticlesPageNum,
} from '../../selectors/articlesPageSelectors';

interface fetchArticlesListArgs {
	replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
	Article[],
	fetchArticlesListArgs,
	ThunkConfig<string>
>('articles/fetchArticlesList', async (args, thunkAPI) => {
	const { extra, rejectWithValue, getState } = thunkAPI;

	const limit = getArticlesPageLimit(getState());
	const page = getArticlesPageNum(getState());

	const order = getArticlesFiltersOrder(getState());
	const search = getArticlesFiltersSearch(getState());
	const sort = getArticlesFiltersSort(getState());
	const type = getArticlesFiltersTabType(getState());

	try {
		addQueryParams({
			order,
			search: search === '' ? undefined : search,
			sort,
			type: type === ArticleType.All ? undefined : type,
		});

		const response = await extra.api.get<Article[]>('/articles', {
			params: {
				_expand: 'user',
				_limit: limit,
				_page: page,
				_order: order,
				_sort: sort,
				q: search === '' ? undefined : search,
				type: type === ArticleType.All ? undefined : type,
			},
		});

		if (!response.data) {
			throw new Error();
		}

		return response.data;
	} catch (e) {
		return rejectWithValue('error');
	}
});
