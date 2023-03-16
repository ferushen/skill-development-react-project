import { StateSchema } from 'app/providers/storeProvider';

export const getLoginState = (state: StateSchema) => state?.loginForm;
