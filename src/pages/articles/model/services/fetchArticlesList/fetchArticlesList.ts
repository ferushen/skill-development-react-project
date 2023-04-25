import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { Article } from 'entities/article';
import { getArticlesPageLimit } from '../../selectors/articlesPageSelectors';

interface fetchArticlesListArgs {
	page?: number;
}

export const fetchArticlesList = createAsyncThunk<
	Article[],
	fetchArticlesListArgs,
	ThunkConfig<string>
>('articles/fetchArticlesList', async (args, thunkAPI) => {
	const { extra, rejectWithValue, getState } = thunkAPI;
	const { page = 1 } = args;
	const limit = getArticlesPageLimit(getState());

	try {
		const response = await extra.api.get<Article[]>('/articles', {
			params: {
				_expand: 'user',
				_limit: limit,
				_page: page,
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
