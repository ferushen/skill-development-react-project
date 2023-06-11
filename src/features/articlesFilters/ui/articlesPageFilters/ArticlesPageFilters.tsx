import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import type { SortOrder } from 'shared/types/sortOrder';
import { ArticleType, ArticleView } from 'entities/article';
import { ArticleSortField } from '../../model/types/articlesFilters';

import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { articlesFiltersActions } from '../../model/slice/articlesFiltersSlice';
import {
	selectArticlesFiltersOrder,
	selectArticlesFiltersSearch,
	selectArticlesFiltersSort,
	selectArticlesFiltersTabType
} from '../../model/selectors/articlesFiltersSelectors';


import { ArticleTypeTabs } from '../articleTypeTabs/ArticleTypeTabs';
import { ArticlesSortSwitcher } from '../articlesSortSwitcher/ArticlesSortSwitcher';
import { ArticlesViewSwitcher } from '../articlesViewSwitcher/ArticlesViewSwitcher';
import { Input, InputVariant } from 'shared/ui/input/Input';
import { HStack, VStack } from 'shared/ui/stack';

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

	const order = useSelector(selectArticlesFiltersOrder);
	const search = useSelector(selectArticlesFiltersSearch);
	const sort = useSelector(selectArticlesFiltersSort);
	const type = useSelector(selectArticlesFiltersTabType);

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
		<VStack
			className={cn(cls.container, {}, [className])}
			align={'start'}
			gap={8}
			width={'max'}
		>
			<HStack justify={'between'} gap={16} width={'max'}>
				<ArticlesSortSwitcher
					order={order}
					sort={sort}
					onChangeOrder={onChangeOrder}
					onChangeSort={onChangeSort}
				/>
				<ArticlesViewSwitcher
					activeView={view}
					onClickView={onChangeView}
				/>
			</HStack>
			<Input
				classNameWrapper={cls.inputWrapper}
				classNameInput={cls.input}
				variant={InputVariant.Poured}
				rounded='rounded_10'
				max
				placeholder={t('search')}
				value={search}
				onChange={onChangeSearch}
			/>
			<ArticleTypeTabs
				active={type}
				onChangeTypeTab={onChangeType}
			/>
		</VStack>
	);
});