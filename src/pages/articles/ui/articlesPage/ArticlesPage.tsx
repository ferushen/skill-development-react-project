import { memo, ReactNode, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { classNames as cn } from '@/shared/lib/classNames/classNames';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
	DynamicModuleLoader,
	ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
	selectArticlesPageIsLoading,
	selectArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import {
	articlesPageActions,
	articlesPageReducer,
} from '../../model/slices/articlesPageSlice';
import { articlesFiltersReducer } from '@/features/articlesFilters';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';

import { ArticleInfiniteList } from '../articleInfiniteList/ArticleInfiniteList';
import { Page } from '@/widgets/page';
import { ArticleView } from '@/entities/article';
import { ArticlesPageFilters } from '@/features/articlesFilters';
import { VStack } from '@/shared/ui/stack';

import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
	className?: string;
	children?: ReactNode;
}

const reducers: ReducersList = {
	articlesPage: articlesPageReducer,
	articlesFilters: articlesFiltersReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
	const { className } = props;
	const dispatch = useAppDispatch();

	const [searchParams] = useSearchParams();

	const isLoading = useSelector(selectArticlesPageIsLoading);
	const view = useSelector(selectArticlesPageView);

	const onLoadNextPart = useCallback(() => {
		if (__PROJECT__ !== 'storybook') {
			if (!isLoading) {
				dispatch(fetchNextArticlesPage());
			}
		}
	}, [dispatch, isLoading]);

	// TODO: разобраться с колбэками
	// TODO: разобраться со storybook

	const fetchData = useCallback(() => {
		if (__PROJECT__ !== 'storybook') {
			dispatch(fetchArticlesList({ replace: true }));
		}
	}, [dispatch]);

	const debouncedFetchData = useDebounce(fetchData, 400);

	const refetchData = useCallback(() => {
		dispatch(articlesPageActions.setPage(1));
		fetchData();
	}, [dispatch, fetchData]);

	const debouncedRefetchData = useCallback(() => {
		dispatch(articlesPageActions.setPage(1));
		debouncedFetchData();
	}, [dispatch, debouncedFetchData]);

	const onChangeView = useCallback(
		(view: ArticleView) => {
			dispatch(articlesPageActions.setView(view));
			localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, view);
		},
		[dispatch]
	);

	useInitialEffect(() => {
		dispatch(initArticlesPage(searchParams));
	});

	return (
		<DynamicModuleLoader
			reducers={reducers}
			removeAfterUnmount={false}
		>
			<Page
				className={cn(cls.articlesPage, {}, [className])}
				onScrollEnd={onLoadNextPart}
			>
				<VStack
					align='start'
					gap={16}
					width='max'
				>
					<ArticlesPageFilters
						view={view}
						onChangeView={onChangeView}
						fetchData={refetchData}
						debouncedFetchData={debouncedRefetchData}
					/>
					<ArticleInfiniteList />
				</VStack>
			</Page>
		</DynamicModuleLoader>
	);
};

export default memo(ArticlesPage);
