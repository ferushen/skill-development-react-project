import { StateSchema } from '@/app/providers/storeProvider';

export const selectProfileData = (state: StateSchema) => state?.profile?.data;
