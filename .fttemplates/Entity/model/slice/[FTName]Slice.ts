import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: [FTName]Schema = {
	isLoading: false,
	error: undefined,
	data: undefined,
}

export const [FTName]Slice = createSlice({
	name: "[FTName]",
	initialState,
	reducers: {
		update: (state, action: PayloadAction<[FTName]>) => {
			state.data = {...state.data, ...action.payload};
		},
		revert: (state) => {
			state.validateErrors = undefined;
		},
		},
		extraReducers: (builder) => {
		builder
			.addCase(fetch[FTName | pascalcase]Data.pending, (state) => {
				state.isLoading = true;
				state.error = undefined;
			})
			.addCase(fetch[FTName | pascalcase]Data.fulfilled, (state, action: PayloadAction<[FTName]>) => {
				state.isLoading = false;
				state.data = action.payload;
			})
			.addCase(fetch[FTName | pascalcase]Data.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
	},
});

export const {actions: [FTName]Actions} = [FTName]Slice;
export const {reducer: [FTName]Reducer} = [FTName]Slice;