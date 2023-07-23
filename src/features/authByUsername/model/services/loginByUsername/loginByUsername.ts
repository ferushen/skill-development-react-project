import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/storeProvider';
import { User, userActions } from '@/entities/user';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

interface LoginByUsernameProps {
	username: string;
	password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
	'login/loginByUsername',
	async (authData, thunkAPI) => {
		try {
			const response = await thunkAPI.extra.api.post<User>('/login', authData);

			if (!response.data) {
				throw new Error();
			}

			localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
			/*console.log('В LS: user: ', localStorage.getItem(USER_LOCALSTORAGE_KEY));*/
			thunkAPI.dispatch(userActions.setAuthData(response.data));

			return response.data;
		} catch (e) {
			console.log(e);
			return thunkAPI.rejectWithValue('error');
		}
	}
);
