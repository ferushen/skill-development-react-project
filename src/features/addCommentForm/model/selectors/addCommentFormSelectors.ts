import { StateSchema } from '@/app/providers/storeProvider';

export const selectAddCommentFormText = (state: StateSchema) =>
	state.addCommentForm?.text ?? '';

export const selectAddCommentFormError = (state: StateSchema) =>
	state.addCommentForm?.error;
