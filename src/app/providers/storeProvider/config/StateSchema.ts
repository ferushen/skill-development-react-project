import { AxiosInstance } from 'axios';

import {
	CombinedState,
	EnhancedStore,
	Reducer,
	ReducersMapObject,
} from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/counter';
import { ProfileSchema } from 'entities/profile';
import { UserSchema } from 'entities/user';
import { LoginSchema } from 'features/authByUsername';
import { ArticleDetailsSchema } from 'entities/article';
import { ArticleDetailsCommentsSchema } from 'pages/articleDetails';
import { AddCommentFormSchema } from 'features/addCommentForm';
import { ArticlesPageSchema } from 'pages/articles';
import { ScrollSaverSchema } from 'features/scrollSaver';
import { ArticlesFiltersSchema } from 'features/articlesFilters';
import { ArticleDetailsRecommendationSchema } from 'pages/articleDetails';

export interface StateSchema {
	counter: CounterSchema;
	user: UserSchema;
	scrollSaver: ScrollSaverSchema;

	// Асинхронные редьюсеры
	addCommentForm?: AddCommentFormSchema;
	articlesPage?: ArticlesPageSchema;
	articlesFilters?: ArticlesFiltersSchema;
	articleDetails?: ArticleDetailsSchema;
	articleDetailsComments?: ArticleDetailsCommentsSchema;
	articleDetailsRecommendations?: ArticleDetailsRecommendationSchema;
	loginForm?: LoginSchema;
	profile?: ProfileSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager;
}

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: Reducer<CombinedState<StateSchema>>;
	// reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
}

export interface ThunkExtraArg {
	api: AxiosInstance;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ThunkExtraArg;
	state: StateSchema;
}
