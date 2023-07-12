import { StateSchema } from '@/app/providers/storeProvider';

export const selectUserInitialized = (state: StateSchema) =>
	state.user._initialized;
