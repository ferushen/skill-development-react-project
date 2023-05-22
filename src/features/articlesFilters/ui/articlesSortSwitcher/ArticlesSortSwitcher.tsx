import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import type { SortOrder } from 'shared/types/sortOrder';
import { ArticleSortField } from '../../model/types/articlesFilters';

import { Select, SelectOptions } from 'shared/ui/select/Select';
import { HStack } from 'shared/ui/stack';

import cls from './ArticlesSortSwitcher.module.scss';

interface ArticlesSortSwitcherProps {
	sort: ArticleSortField;
	order: SortOrder;
	onChangeOrder: (newOrder: SortOrder) => void;
	onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticlesSortSwitcher = memo((props: ArticlesSortSwitcherProps) => {
	const {
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
		<HStack gap={8}>
			<Select<ArticleSortField>
				className={cls.sortField}
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
		</HStack>
	);
});