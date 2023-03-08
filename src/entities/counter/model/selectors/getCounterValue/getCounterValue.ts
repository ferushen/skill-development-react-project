import { createSelector } from '@reduxjs/toolkit';
import { CounterSchema } from '../../types/CounterSchema';
import { getCounter } from '../getCounter/getCounter';

// воспользуемся reselector для переиспользования существующих селекторов
export const getCounterValue = createSelector(
	getCounter,
	(counter: CounterSchema) => counter.value
);
