/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/storeProvider';

type ActionCreatorType<Return, Arg, RejectedValue> = (
	arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

// мокаем axios
jest.mock('axios');

// флаг true указывает на глубокое "моканье"
const mockedAxios = jest.mocked(axios);

/*
 * Return - тип, который возвращает thunk;
 * Arg - аргумент;
 * RejectedValue - возвращаемое значение при ошибке;
 */

export class TestAsyncThunk<Return, Arg, RejectedValue> {
	getState: () => StateSchema;
	actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

	api: jest.MockedFunctionDeep<typeof axios>;
	dispatch: jest.MockedFn<any>;
	navigate: jest.MockedFn<any>;

	constructor(
		actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
		state?: DeepPartial<StateSchema>
	) {
		this.actionCreator = actionCreator;
		this.dispatch = jest.fn();
		this.getState = jest.fn(() => state as StateSchema);

		this.api = mockedAxios;
		this.navigate = jest.fn();
	}

	async callThunk(arg: Arg) {
		const action = this.actionCreator(arg);
		const result = await action(this.dispatch, this.getState, {
			api: this.api,
			navigate: this.navigate,
		});

		return result;
	}
}
