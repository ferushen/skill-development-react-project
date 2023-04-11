import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<
	Profile,
	string,
	ThunkConfig<string>
>('profile/fetchProfileData', async (profileId, thunkAPI) => {
	const { extra, rejectWithValue } = thunkAPI;

	try {
		const response = await extra.api.get<Profile>('/profile/' + profileId);

		if (!response.data) {
			throw new Error('Не удалось загрузить данные с сервера');
		}

		return response.data;
	} catch (e) {
		console.log(e);
		return rejectWithValue('error');
	}
});
