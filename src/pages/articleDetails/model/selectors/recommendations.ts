import { StateSchema } from '@/app/providers/storeProvider';

export const selectArticleRecommendationsIsLoading = (state: StateSchema) =>
	state.articleDetailsPage?.recommendations?.isLoading;

export const selectArticleRecommendationsError = (state: StateSchema) =>
	state.articleDetailsPage?.recommendations?.error;
