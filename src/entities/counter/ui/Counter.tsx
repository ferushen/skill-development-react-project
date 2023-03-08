import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

import { Button } from 'shared/ui';

export const Counter: FC = () => {
	const dispatch = useDispatch();
	const counterValue = useSelector(getCounterValue);

	const increment = () => {
		dispatch(counterActions.increment());
	};

	const decrement = () => {
		dispatch(counterActions.decrement());
	};

	return (
		<div>
			{/*eslint-disable-next-line i18next/no-literal-string*/}
			<h1 data-testid="value-title">value = {counterValue}</h1>
			<Button
				onClick={increment}
				data-testid="increment-btn"
			>+</Button>
			<Button
				onClick={decrement}
				data-testid="decrement-btn"
			>-</Button>
		</div>
	);
};