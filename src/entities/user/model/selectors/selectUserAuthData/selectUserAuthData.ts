import { StateSchema } from 'app/providers/storeProvider';

export const selectUserAuthData = (state: StateSchema) => state.user.authData;
