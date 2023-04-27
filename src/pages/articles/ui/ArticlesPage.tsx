import { memo, ReactNode, useCallback } from 'react';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getArticlesPageIsLoading, getArticlesPageView } from '../model/selectors/articlesPageSelectors';
import { articlesPageActions, articlesPageReducer, getArticles } from '../model/slices/articlesPageSlice';
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage';

import { ArticleList, ArticleView } from 'entities/article';
import { ArticlesViewSwitcher } from 'features/articlesViewSwitcher';
import { Page } from 'widgets/page/Page';

import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
	className?: string;
	children?: ReactNode;
}

const reducers: ReducersList = {
	articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
	const { className } = props;

	const dispatch = useAppDispatch();
	const articles = useSelector(getArticles.selectAll);
	const isLoading = useSelector(getArticlesPageIsLoading);
	const view = useSelector(getArticlesPageView);

	const mods: Mods = {};

	const onChangeView = useCallback((view: ArticleView) => {
		dispatch(articlesPageActions.setView(view));
		localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, view);
	}, [dispatch]);

	const onLoadNextPart = useCallback(() => {
		// if (__PROJECT__ !== 'storybook') { }
		dispatch(fetchNextArticlesPage());
	}, [dispatch]);

	useInitialEffect(() => {
		dispatch(initArticlesPage());
	});

	// TODO: добавить обработку ошибки при загрузке списка статей

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
			<Page
				className={cn(cls.articlesPage, mods, [className])}
				onScrollEnd={onLoadNextPart}
			>
				<ArticlesViewSwitcher activeView={view} onClickView={onChangeView} />
				<ArticleList
					isLoading={isLoading}
					view={view}
					articles={articles}
				/>
			</Page>
		</DynamicModuleLoader>
	);
};

export default memo(ArticlesPage);