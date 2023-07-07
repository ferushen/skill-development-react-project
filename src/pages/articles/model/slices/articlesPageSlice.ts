import {
	createEntityAdapter,
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/storeProvider';
import { ArticlesPageSchema } from '../types/articlesPage';

import { Article, ArticleView } from 'entities/article';

import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';

import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

const articlesAdapter = createEntityAdapter<Article>({
	selectId: (article) => article.id,
});

export const selectArticles = articlesAdapter.getSelectors<StateSchema>(
	(state) => state.articlesPage || articlesAdapter.getInitialState()
);

export const articlesPageSlice = createSlice({
	name: 'articlesPage',
	initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
		_inited: false,
		isLoading: false,
		error: undefined,
		ids: [],
		entities: {},
		page: 1,
		hasMore: true,
		limit: 9,
		view: ArticleView.Grid,
	}),
	reducers: {
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
		},
		setView: (state, action: PayloadAction<ArticleView>) => {
			state.view = action.payload;
		},
		initState: (state) => {
			state._inited = true;
			const view = localStorage.getItem(
				ARTICLES_VIEW_LOCALSTORAGE_KEY
			) as ArticleView;
			state.view = view;
			state.limit = view === ArticleView.Grid ? 9 : 4;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticlesList.pending, (state, action) => {
				state.isLoading = true;
				state.error = undefined;

				if (action.meta.arg.replace) {
					articlesAdapter.removeAll(state);
				}
			})
			.addCase(fetchArticlesList.fulfilled, (state, action) => {
				state.isLoading = false;
				state.hasMore = action.payload.length >= state.limit;

				if (action.meta.arg.replace) {
					articlesAdapter.setAll(state, action.payload);
				} else {
					articlesAdapter.addMany(state, action.payload);
				}
			})
			.addCase(fetchArticlesList.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { actions: articlesPageActions } = articlesPageSlice;
export const { reducer: articlesPageReducer } = articlesPageSlice;
