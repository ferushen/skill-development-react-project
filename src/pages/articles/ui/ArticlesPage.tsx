import { memo, ReactNode, useCallback } from 'react';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageActions, articlesPageReducer, getArticles } from '../model/slices/articlesPageSlice';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from '../model/selectors/articlesPageSelectors';

import { ArticleList, ArticleView } from 'entities/article';
import { ArticlesViewSwitcher } from 'features/articlesViewSwitcher';

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
	const error = useSelector(getArticlesPageError);
	const view = useSelector(getArticlesPageView);

	const mods: Mods = {};

	const onViewChange = useCallback((view: ArticleView) => {
		dispatch(articlesPageActions.setView(view));
		localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, view);
	}, [dispatch]);

	useInitialEffect(() => {
		dispatch(fetchArticlesList());
	});

	return (
		<DynamicModuleLoader reducers={reducers}>
			<div className={cn(cls.articlesPage, mods, [className])}>
				<ArticlesViewSwitcher activeView={view} onViewClick={onViewChange} />
				<ArticleList
					isLoading={isLoading}
					view={view}
					articles={articles}
				/>
			</div>
		</DynamicModuleLoader>
	);
};

export default memo(ArticlesPage);