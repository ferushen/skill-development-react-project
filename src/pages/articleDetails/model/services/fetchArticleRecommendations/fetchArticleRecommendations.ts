import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { Article } from 'entities/article';

export const fetchArticleRecommendations = createAsyncThunk<
	Article[],
	void,
	ThunkConfig<string>
>('articleDetails/fetchArticleRecommendations', async (_, thunkAPI) => {
	const { extra, rejectWithValue } = thunkAPI;

	try {
		const response = await extra.api.get<Article[]>('/articles', {
			params: {
				_limit: 4,
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
