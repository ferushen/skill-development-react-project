import { Story } from '@storybook/react';

import { StateSchema, StoreProvider } from 'app/providers/storeProvider';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginReducer } from 'features/authByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/profile';
import { articleDetailsReducer } from 'entities/article/model/slice/articleSlice';
import { addCommentFormReducer } from 'features/addCommentForm/model/slices/addCommentFormSlice';
import { articleDetailsPageReducer } from 'pages/articleDetails/model/slices';

const defaultAsyncReducers: ReducersList = {
	loginForm: loginReducer,
	profile: profileReducer,
	articleDetails: articleDetailsReducer,
	articleDetailsPage: articleDetailsPageReducer,
	addCommentForm: addCommentFormReducer,
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