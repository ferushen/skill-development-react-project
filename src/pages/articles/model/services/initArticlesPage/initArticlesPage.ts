import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
	void,
	void,
	ThunkConfig<string>
>('articles/initArticlesPage', async (_, thunkAPI) => {
	const { getState, dispatch } = thunkAPI;

	const inited = getArticlesPageInited(getState());

	if (!inited) {
		dispatch(articlesPageActions.initState());
		dispatch(
			fetchArticlesList({
				page: 1,
			})
		);
	}
});
