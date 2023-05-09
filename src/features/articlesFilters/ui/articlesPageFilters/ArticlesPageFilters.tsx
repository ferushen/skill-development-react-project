import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { articlesFiltersActions } from '../../model/slice/articlesFiltersSlice';
import {
	getArticlesFiltersOrder,
	getArticlesFiltersSearch,
	getArticlesFiltersSort,
	getArticlesFiltersTabType
} from '../../model/selectors/articlesFiltersSelectors';

import type { SortOrder } from 'shared/types/sortOrder';
import { ArticleType, ArticleView } from 'entities/article';
import { ArticleSortField } from '../../model/types/articlesFilters';

import { ArticleTypeTabs } from '../articleTypeTabs/ArticleTypeTabs';
import { ArticlesSortSwitcher } from '../articlesSortSwitcher/ArticlesSortSwitcher';
import { ArticlesViewSwitcher } from '../articlesViewSwitcher/ArticlesViewSwitcher';

import { Card } from 'shared/ui/card/Card';
import { Input, InputVariant } from 'shared/ui/input/Input';

import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
	className?: string;
	view: ArticleView;
	onChangeView: (view: ArticleView) => void;
	fetchData: () => void;
	debouncedFetchData: () => void;
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
	const {
		className,
		view,
		onChangeView,
		fetchData,
		debouncedFetchData,
	} = props;
	const { t } = useTranslation('article');
	const dispatch = useAppDispatch();

	const order = useSelector(getArticlesFiltersOrder);
	const search = useSelector(getArticlesFiltersSearch);
	const sort = useSelector(getArticlesFiltersSort);
	const type = useSelector(getArticlesFiltersTabType);

	const mods: Mods = {};

	const onChangeOrder = useCallback((order: SortOrder) => {
		dispatch(articlesFiltersActions.setOrder(order));
		fetchData();
	}, [dispatch, fetchData]);

	const onChangeSort = useCallback((sort: ArticleSortField) => {
		dispatch(articlesFiltersActions.setSort(sort));
		fetchData();
	}, [dispatch, fetchData]);

	const onChangeSearch = useCallback((search: string) => {
		dispatch(articlesFiltersActions.setSearch(search));
		debouncedFetchData();
	}, [dispatch, debouncedFetchData]);

	const onChangeType = useCallback((type: ArticleType) => {
		dispatch(articlesFiltersActions.setType(type));
		fetchData();
	}, [dispatch, fetchData]);

	return (
		<div className={cn(cls.articlesPageFilters, mods, [className])}>
			<div className={cls.sortWrapper}>
				<ArticlesSortSwitcher
					className={cls.sort}
					order={order}
					sort={sort}
					onChangeOrder={onChangeOrder}
					onChangeSort={onChangeSort}
				/>
				<ArticlesViewSwitcher
					activeView={view}
					onClickView={onChangeView}
				/>
			</div>
			<Card className={cls.search} size='small'>
				<Input
					variant={InputVariant.MaxWidth}
					placeholder={t('search')}
					value={search}
					onChange={onChangeSearch}
				/>
			</Card>
			<ArticleTypeTabs
				active={type}
				onChangeTypeTab={onChangeType}
			/>
		</div>
	);
});