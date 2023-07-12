import { StateSchema } from '@/app/providers/storeProvider';

export const selectProfileReadonly = (state: StateSchema) =>
	state?.profile?.readonly;
