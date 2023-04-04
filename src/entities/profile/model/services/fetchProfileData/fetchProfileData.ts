import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<
	Profile,
	void,
	ThunkConfig<string>
>('profile/fetchProfileData', async (_, thunkAPI) => {
	const { extra } = thunkAPI;

	try {
		const response = await extra.api.get<Profile>('/profile');

		if (!response.data) {
			throw new Error('Не удалось загрузить данные с сервера');
		}

		return response.data;
	} catch (e) {
		console.log(e);
		return thunkAPI.rejectWithValue('error');
	}
});