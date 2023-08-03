import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from '@/shared/lib/classNames/classNames';

import { Article } from '../../model/types/article';
import { ArticleView } from '../../model/consts/consts';
import { ArticleListItem } from '../articleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../articleListItem/ArticleListItemSkeleton';

import { Text } from '@/shared/ui/text';

import cls from './ArticleList.module.scss';

// TODO: добавить виртуализацию условной (управление пропсом)

interface ArticleListProps {
	className?: string;
	articles: Article[];
	view?: ArticleView;
	isLoading?: boolean;
	target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) =>
	new Array(view === ArticleView.Grid ? 9 : 3).fill(0).map((_, index) => (
		<ArticleListItemSkeleton
			view={view}
			key={index}
		/>
	));

export const ArticleList = memo((props: ArticleListProps) => {
	const { className, articles, view = ArticleView.Grid, isLoading, target } = props;
	const { t } = useTranslation('article');

	const renderArticle = (article: Article) => {
		return (
			<ArticleListItem
				article={article}
				view={view}
				key={article.id}
				target={target}
			/>
		);
	};

	if (!isLoading && !articles.length) {
		return (
			<div className={cn('', {}, [className, cls[view]])}>
				<Text title={t('articles_not_found')} />
			</div>
		);
	}

	return (
		<div
			className={cn('', {}, [className, cls[view]])}
			data-testid='ArticleList'
		>
			{articles.length > 0 ? articles.map(renderArticle) : null}
			{isLoading && getSkeletons(view)}
		</div>
	);
});
