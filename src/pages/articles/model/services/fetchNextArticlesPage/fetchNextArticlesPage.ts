import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import {
	getArticlesPageHasMore,
	getArticlesPageIsLoading,
	getArticlesPageNum,
} from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

/*
 * Подгружает не первоначальную порцию данных, а следующую порцию
 * Для запроса использует async-thunk fetchArticlesList
 */

export const fetchNextArticlesPage = createAsyncThunk<
	void,
	void,
	ThunkConfig<string>
>('articles/fetchNextArticlesPage', async (_, thunkAPI) => {
	const { getState, dispatch } = thunkAPI;

	const page = getArticlesPageNum(getState());
	const isLoading = getArticlesPageIsLoading(getState());
	const hasMore = getArticlesPageHasMore(getState());

	if (hasMore && !isLoading) {
		dispatch(articlesPageActions.setPage(page + 1));
		dispatch(
			fetchArticlesList({
				page: page + 1,
			})
		);
	}
});
