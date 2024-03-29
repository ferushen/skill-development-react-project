import { StateSchema } from '@/app/providers/storeProvider';

export const selectArticleDetailsData = (state: StateSchema) =>
	state.articleDetails?.data;

export const selectArticleDetailsIsLoading = (state: StateSchema) =>
	state.articleDetails?.isLoading || false;

export const selectArticleDetailsError = (state: StateSchema) =>
	state.articleDetails?.error;
