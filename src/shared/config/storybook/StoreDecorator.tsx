import { Story } from '@storybook/react';

import { StateSchema, StoreProvider } from '@/app/providers/storeProvider';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { loginReducer } from '@/features/authByUsername/testing';
import { articleDetailsReducer } from '@/entities/article/testing';
import { addCommentFormReducer } from '@/features/addCommentForm/testing';
import { articleDetailsPageReducer } from '@/pages/articleDetails/testing';
import { scrollSaverReducer } from '@/features/scrollSaver';
import { articlesPageReducer } from '@/pages/articles/testing';
import { articlesFiltersReducer } from '@/features/articlesFilters/testing';
import { profileReducer } from '@/features/editableProfileCard/testing';

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