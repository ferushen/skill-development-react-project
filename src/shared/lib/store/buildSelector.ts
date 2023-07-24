import { StateSchema } from '@/app/providers/storeProvider';
import { useSelector } from 'react-redux';

/**
 * Возвращает типизированный результат
 *
 * Аргументом принимает селектор
 */

type Selector<T> = (state: StateSchema) => T;

type Result<T> = [() => T, Selector<T>];

export function buildSelector<T>(selector: Selector<T>): Result<T> {
	// хук оборачивает внутри себя selector в useSelector
	const useSelectorHook = () => {
		return useSelector(selector);
	};

	return [useSelectorHook, selector];
}
