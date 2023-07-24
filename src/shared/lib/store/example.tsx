/* eslint-disable correct-fsd-import-paths/layer-import */
import { CounterSchema } from '@/entities/counter';
import { buildSelector } from './buildSelector';
import { buildSlice } from './buildSlice';
import { PayloadAction } from '@reduxjs/toolkit';

/**
 * Preparing: counterSlice.ts
 */

const initialState: CounterSchema = {
	value: 0,
};

// export const counterSlice = createSlice({
export const counterSlice = buildSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		add: (state, { payload }: PayloadAction<number>) => {
			state.value += payload;
		}
	},
});

// export const { actions: counterActions } = counterSlice;
// export const { reducer: counterReducer } = counterSlice;
export const {
	actions: counterActions,
	reducer: counterReducer,
	useActions: useCounterActions,
} = counterSlice;

/**
 * Реализация тестового компонента
 */

const ComponentCounterTest = () => {
	// const getCounterValue = (state: StateSchema) => state.counter.value;
	const [useCounterValue, getCounterValue] = buildSelector(state => state.counter.value);
	const { add, increment, decrement } = useCounterActions()();

	// const counterValue = useSelector(getCounterValue);
	const counterValue = useCounterValue();

	const handleInc = () => {
		increment();
	};
	const handleDec = () => {
		decrement();
	};
	const handleAddTwo = () => {
		add(2);
	};

	return (
		<div>
			<button onClick={handleAddTwo}>{'+2'}</button>
			<button onClick={handleInc}>{'+'}</button>
			<button onClick={handleDec}>{'-'}</button>
		</div>
	);
};
