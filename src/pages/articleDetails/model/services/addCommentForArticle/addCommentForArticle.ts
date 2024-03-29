import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/storeProvider';
import type { Comment } from '@/entities/comment';
import { selectArticleDetailsData } from '@/entities/article';
import { selectUserAuthData } from '@/entities/user';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
	Comment,
	string,
	ThunkConfig<string>
>('articleDetails/addCommentForArticle', async (text, thunkAPI) => {
	const { extra, dispatch, rejectWithValue, getState } = thunkAPI;

	const articleData = selectArticleDetailsData(getState());
	const userData = selectUserAuthData(getState());

	if (!text || !userData || !articleData) {
		return rejectWithValue('no data');
	}

	try {
		const response = await extra.api.post<Comment>('/comments', {
			text,
			articleId: articleData.id,
			userId: userData.id,
		});

		if (!response.data) {
			throw new Error();
		}

		dispatch(fetchCommentsByArticleId(articleData.id));

		return response.data;
	} catch (e) {
		return rejectWithValue('error');
	}
});
