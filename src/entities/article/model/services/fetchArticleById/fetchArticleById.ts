import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<
	Article,
	string,
	ThunkConfig<string>
>('articleDetails/fetchArticleById', async (articleId, thunkAPI) => {
	const { extra } = thunkAPI;

	try {
		const response = await extra.api.get<Article>('/articles/' + articleId, {
			params: {
				// бэк вернет всю информацию о пользователе
				_expand: 'user',
			},
		});

		if (!response.data) {
			throw new Error();
		}

		return response.data;
	} catch (e) {
		console.log(e);
		return thunkAPI.rejectWithValue('error');
	}
});
