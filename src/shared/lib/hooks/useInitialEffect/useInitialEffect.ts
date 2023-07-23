import { useEffect } from 'react';

export const useInitialEffect = (callback: () => void) => {
	useEffect(() => {
		// для jest запросы лучше мокать
		if (__PROJECT__ !== 'storybook' /*&& __PROJECT__ !== 'jest'*/) {
			callback();
		}
		// eslint-disable-next-line
	}, []);
};
