import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleType } from 'entities/article';
import { SortOrder } from 'shared/types/sortOrder';
import {
	ArticlesFiltersSchema,
	ArticleSortField,
} from '../types/articlesFilters';

const initialState: ArticlesFiltersSchema = {
	order: 'asc',
	search: '',
	sort: ArticleSortField.Created,
	type: ArticleType.All,
};

export const articlesFiltersSlice = createSlice({
	name: 'articlesFilters',
	initialState,
	reducers: {
		setOrder: (state, action: PayloadAction<SortOrder>) => {
			state.order = action.payload;
		},
		setSearch: (state, action: PayloadAction<string>) => {
			state.search = action.payload;
		},
		setSort: (state, action: PayloadAction<ArticleSortField>) => {
			state.sort = action.payload;
		},
		setType: (state, action: PayloadAction<ArticleType>) => {
			state.type = action.payload;
		},
	},
});

export const { actions: articlesFiltersActions } = articlesFiltersSlice;
export const { reducer: articlesFiltersReducer } = articlesFiltersSlice;
