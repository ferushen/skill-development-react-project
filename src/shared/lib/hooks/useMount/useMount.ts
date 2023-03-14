import { useEffect, useRef, useState } from 'react';

interface useMountProps {
	opened: boolean;
	delay?: number;
}

export const useMount = ({ opened, delay = 300 }: useMountProps) => {
	const [mounted, setMounted] = useState(false);
	const timer = useRef<ReturnType<typeof setTimeout>>();
	console.log(`useMount:start opened:${opened}; mounted:${mounted}`);
	//console.log(`useMount:end opened:${opened}; mounted:${mounted}`);

	useEffect(() => {
		if (opened && !mounted) {
			setMounted(true);
		} else if (!opened && mounted) {
			timer.current = setTimeout(() => {
				setMounted(false);
			}, delay);
		}

		return () => {
			clearTimeout(timer.current);
		};
	}, [opened]);

	return { mounted };
};
