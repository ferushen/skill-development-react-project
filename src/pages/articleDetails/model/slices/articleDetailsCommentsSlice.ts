import {
	createEntityAdapter,
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit';

import type { StateSchema } from '@/app/providers/storeProvider';
import type { ArticleDetailsCommentsSchema } from '../types/articleDetailsComments';
import type { Comment } from '@/entities/comment';

import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter<Comment>({
	// селектор, по которому будет происходить нормализация
	selectId: (comment: Comment) => comment.id,
});

export const selectArticleComments = commentsAdapter.getSelectors<StateSchema>(
	(state) =>
		state.articleDetailsPage?.comments || commentsAdapter.getInitialState()
);

const articleDetailsCommentsSlice = createSlice({
	name: 'articleDetailsCommentsSlice',
	initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
		isLoading: false,
		error: undefined,
		ids: [],
		entities: {},
	}),
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCommentsByArticleId.pending, (state) => {
				state.isLoading = true;
				state.error = undefined;
			})
			.addCase(
				fetchCommentsByArticleId.fulfilled,
				(state, action: PayloadAction<Comment[]>) => {
					state.isLoading = false;
					commentsAdapter.setAll(state, action.payload);
				}
			)
			.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { reducer: articleDetailsCommentsReducer } =
	articleDetailsCommentsSlice;
export const { actions: articleDetailsCommentsActions } =
	articleDetailsCommentsSlice;
