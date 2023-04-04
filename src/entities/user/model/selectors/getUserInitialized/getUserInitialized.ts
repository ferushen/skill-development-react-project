import { StateSchema } from 'app/providers/storeProvider';

export const getUserInitialized = (state: StateSchema) =>
	state.user._initialized;
