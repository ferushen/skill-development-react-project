import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import type { SortOrder } from '@/shared/types/sort';

import { ArticleSortField, OrderOptions, SortOptions } from '../../model/types/articlesFilters';

import { ListBox } from '@/shared/ui/popups';
import { HStack } from '@/shared/ui/stack';

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

	const orderOptions = useMemo<OrderOptions>(() => [
		{
			value: 'asc',
			content: t('by_ascending_order')
		},
		{
			value: 'desc',
			content: t('by_descending_order')
		}
	], [t]);

	const sortFieldOptions = useMemo<SortOptions>(() => [
		{
			value: ArticleSortField.Created,
			content: t('by_date')
		},
		{
			value: ArticleSortField.Title,
			content: t('by_title')
		},
		{
			value: ArticleSortField.Views,
			content: t('by_views')
		},
	], [t]);

	return (
		<HStack gap={8} className={cls.container}>
			<ListBox
				className={cls.sortField}
				variant='stretchBgInverted'
				optionWidth='max-content'
				label={t('sort')}
				options={sortFieldOptions}
				value={sort}
				onChange={onChangeSort}
			/>
			<ListBox
				optionWidth='max-content'
				variant='stretchBgInverted'
				options={orderOptions}
				value={order}
				onChange={onChangeOrder}
			/>
		</HStack>
	);
});