import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/storeProvider';
import { Article } from '@/entities/article';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';
import { ArticleDetailsRecommendationSchema } from '../types/articleDetailsRecommendation';

const recommendationsAdapter = createEntityAdapter<Article>({
	selectId: (article) => article.id,
});

export const selectArticleRecommendations =
	recommendationsAdapter.getSelectors<StateSchema>(
		(state) =>
			state.articleDetailsPage?.recommendations ||
			recommendationsAdapter.getInitialState()
	);

export const articleDetailsRecommendationSlice = createSlice({
	name: 'articleDetailsRecommendation',
	initialState:
		recommendationsAdapter.getInitialState<ArticleDetailsRecommendationSchema>({
			isLoading: false,
			error: undefined,
			ids: [],
			entities: {},
		}),
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticleRecommendations.pending, (state, _) => {
				state.isLoading = true;
				state.error = undefined;
			})
			.addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
				state.isLoading = false;
				recommendationsAdapter.setAll(state, action.payload);
			})
			.addCase(fetchArticleRecommendations.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { actions: articleDetailsRecommendationActions } =
	articleDetailsRecommendationSlice;
export const { reducer: articleDetailsRecommendationReducer } =
	articleDetailsRecommendationSlice;
