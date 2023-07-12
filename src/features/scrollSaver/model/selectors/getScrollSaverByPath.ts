import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/storeProvider';
import { getScrollSaver } from './getScrollSaver';

// большого смысла в reselect нет, т.к. нет необходимости мемоизировать
export const getScrollSaverByPath = createSelector(
	getScrollSaver, // получаем полный объект
	(state: StateSchema, path: string) => path, // получаем путь
	(scroll, path) => scroll[path] ?? 0 // получаем значение скролла
);
