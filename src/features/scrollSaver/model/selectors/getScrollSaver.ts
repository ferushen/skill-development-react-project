import { StateSchema } from '@/app/providers/storeProvider';

export const getScrollSaver = (state: StateSchema) => state.scrollSaver.scroll ?? 0;
