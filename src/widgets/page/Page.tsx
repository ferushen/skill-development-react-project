import { MutableRefObject, ReactNode, UIEvent, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { StateSchema } from 'app/providers/storeProvider';
import { getScrollSaverByPath, scrollSaverActions } from 'features/scrollSaver';

import cls from './Page.module.scss';

interface PageProps {
	className?: string;
	children: ReactNode;
	onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
	const { className, children, onScrollEnd } = props;
	const { pathname } = useLocation();
	const dispatch = useAppDispatch();

	const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

	// useSelector умеет работать с селекторами, у которых только 1 аргумент
	// поэтому используем здесь стрелочную функцию
	const scrollPosition = useSelector(
		(state: StateSchema) => getScrollSaverByPath(state, pathname)
	);

	const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
		dispatch(scrollSaverActions.setScrollPosition({
			path: pathname,
			position: e.currentTarget.scrollTop,
		}));
	}, 500);

	useInfiniteScroll({
		triggerRef,
		wrapperRef,
		callback: onScrollEnd,
	});

	useInitialEffect(() => {
		wrapperRef.current.scrollTop = scrollPosition;
	});

	return (
		<main
			className={cn(cls.page, {}, [className])}
			onScroll={onScroll}
			ref={wrapperRef}
		>
			{children}
			{onScrollEnd
				? <div className={cls.trigger} ref={triggerRef} />
				: null
			}
		</main>
	);
};