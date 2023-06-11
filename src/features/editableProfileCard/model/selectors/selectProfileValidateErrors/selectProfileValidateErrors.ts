import { StateSchema } from 'app/providers/storeProvider';

export const selectProfileValidateErrors = (state: StateSchema) =>
	state?.profile?.validateErrors;
