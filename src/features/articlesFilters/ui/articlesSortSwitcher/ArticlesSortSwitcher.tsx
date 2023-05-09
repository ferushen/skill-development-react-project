import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import type { SortOrder } from 'shared/types/sortOrder';
import { ArticleSortField } from '../../model/types/articlesFilters';

import { Select, SelectOptions } from 'shared/ui/select/Select';

import cls from './ArticlesSortSwitcher.module.scss';

interface ArticlesSortSwitcherProps {
	className?: string;
	sort: ArticleSortField;
	order: SortOrder;
	onChangeOrder: (newOrder: SortOrder) => void;
	onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticlesSortSwitcher = memo((props: ArticlesSortSwitcherProps) => {
	const {
		className,
		order,
		sort,
		onChangeOrder,
		onChangeSort,
	} = props;
	const { t } = useTranslation('article');

	const orderOptions = useMemo<SelectOptions<SortOrder>[]>(() => [
		{
			value: 'asc',
			content: t('ascending_order')
		},
		{
			value: 'desc',
			content: t('descending_order')
		}
	], [t]);

	const sortFieldOptions = useMemo<SelectOptions<ArticleSortField>[]>(() => [
		{
			value: ArticleSortField.Created,
			content: t('date')
		},
		{
			value: ArticleSortField.Title,
			content: t('title')
		},
		{
			value: ArticleSortField.Views,
			content: t('views')
		},
	], [t]);

	return (
		<div className={cn(cls.articlesSortSwitcher, {}, [])}>
			<Select<ArticleSortField>
				className={className}
				label={t('sort_by')}
				options={sortFieldOptions}
				value={sort}
				onChange={onChangeSort}
			/>
			<Select<SortOrder>
				options={orderOptions}
				value={order}
				onChange={onChangeOrder}
			/>
		</div>
	);
});