import { StateSchema } from 'app/providers/storeProvider';

export const selectProfileIsLoading = (state: StateSchema) =>
	state?.profile?.isLoading;
