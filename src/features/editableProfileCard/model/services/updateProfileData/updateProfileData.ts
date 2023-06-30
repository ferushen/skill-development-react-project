import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { Profile } from 'entities/profile';
import { selectProfileForm } from '../../selectors/selectProfileForm/selectProfileForm';
import { ValidateProfileError } from '../../consts/consts';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
	Profile,
	void,
	ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, thunkAPI) => {
	const { extra, rejectWithValue, getState } = thunkAPI;

	const formData = selectProfileForm(getState());

	const errors = validateProfileData(formData);

	if (errors.length) {
		return rejectWithValue(errors);
	}

	try {
		const response = await extra.api.put<Profile>(
			'/profile/' + formData?.id,
			formData
		);

		if (!response.data) {
			throw new Error();
		}

		return response.data;
	} catch (e) {
		console.log(e);
		return rejectWithValue([ValidateProfileError.ServerError]);
	}
});
