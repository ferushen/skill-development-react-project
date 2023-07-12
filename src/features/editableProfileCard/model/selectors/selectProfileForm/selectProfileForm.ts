import { StateSchema } from '@/app/providers/storeProvider';

export const selectProfileForm = (state: StateSchema) => state?.profile?.form;
