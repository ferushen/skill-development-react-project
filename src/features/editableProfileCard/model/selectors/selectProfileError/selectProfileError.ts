import { StateSchema } from 'app/providers/storeProvider';

export const selectProfileError = (state: StateSchema) => state?.profile?.error;
