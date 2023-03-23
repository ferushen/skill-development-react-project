import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/storeProvider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/authByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/profile';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
	loginForm: loginReducer,
	profile: profileReducer,
};

export const StoreDecorator = (
	state: DeepPartial<StateSchema>,
	asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
) => (StoryComponent: Story) => (
	<StoreProvider
		initialState={state}
		asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
	>
		<StoryComponent />
	</StoreProvider>
);