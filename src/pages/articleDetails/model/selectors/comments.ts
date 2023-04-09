import { StateSchema } from 'app/providers/storeProvider';

export const getArticleDetailsCommentsIsLoading = (state: StateSchema) =>
	state.articleDetailsComments?.isLoading;

export const getArticleDetailsCommentsError = (state: StateSchema) =>
	state.articleDetailsComments?.error;
