/* eslint-disable correct-fsd-import-paths/use-only-public-api */
// TODO: fix eslint-disable

import { Story } from '@storybook/react';

import { StateSchema, StoreProvider } from '@/app/providers/storeProvider';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { loginReducer } from '@/features/authByUsername/model/slice/loginSlice';
import { articleDetailsReducer } from '@/entities/article/model/slice/articleSlice';
import { addCommentFormReducer } from '@/features/addCommentForm/model/slices/addCommentFormSlice';
import { articleDetailsPageReducer } from '@/pages/articleDetails/model/slices';
import { scrollSaverReducer } from '@/features/scrollSaver';
import { articlesPageReducer } from '@/pages/articles/model/slices/articlesPageSlice';
import { articlesFiltersReducer } from '@/features/articlesFilters/model/slice/articlesFiltersSlice';
import { profileReducer } from '@/features/editableProfileCard/model/slice/profileSlice';

const defaultAsyncReducers: ReducersList = {
	loginForm: loginReducer,
	profile: profileReducer,
	articlesPage: articlesPageReducer,
	articlesFilters: articlesFiltersReducer,
	articleDetails: articleDetailsReducer,
	articleDetailsPage: articleDetailsPageReducer,
	addCommentForm: addCommentFormReducer,
	scrollSaver: scrollSaverReducer,
};

export const StoreDecorator = (
	state: DeepPartial<StateSchema>,
	asyncReducers?: ReducersList
) => (StoryComponent: Story) => (
	<StoreProvider
		initialState={state}
		asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
	>
		<StoryComponent />
	</StoreProvider>
);