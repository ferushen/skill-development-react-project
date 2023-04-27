import { MutableRefObject, useCallback, useEffect, useRef } from 'react';

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
	const throttleRef = useRef(false);
	const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

	useEffect(() => {
		clearTimeout(timerRef.current);
	}, []);

	return useCallback(
		(...args) => {
			if (!throttleRef.current) {
				callback(...args);
				throttleRef.current = true;

				timerRef.current = setTimeout(() => {
					throttleRef.current = false;
				}, delay);
			}
		},
		[callback, delay]
	);
}
