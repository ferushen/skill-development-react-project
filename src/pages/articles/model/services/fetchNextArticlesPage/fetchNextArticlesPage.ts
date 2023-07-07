import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import {
	selectArticlesPageHasMore,
	selectArticlesPageIsLoading,
	selectArticlesPageNum,
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

	const page = selectArticlesPageNum(getState());
	const isLoading = selectArticlesPageIsLoading(getState());
	const hasMore = selectArticlesPageHasMore(getState());

	if (hasMore && !isLoading) {
		dispatch(articlesPageActions.setPage(page + 1));
		dispatch(fetchArticlesList({}));
	}
});
