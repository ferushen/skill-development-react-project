import { memo } from 'react';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../articleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../articleListItem/ArticleListItemSkeleton';

import cls from './ArticleList.module.scss';

interface ArticleListProps {
	className?: string;
	articles: Article[];
	view?: ArticleView;
	isLoading?: boolean;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.Grid ? 9 : 3)
	.fill(0)
	.map((_, index) => (
		<ArticleListItemSkeleton view={view} key={index} />
	));

export const ArticleList = memo((props: ArticleListProps) => {
	const {
		className,
		articles,
		view = ArticleView.Grid,
		isLoading,
	} = props;

	const mods: Mods = {};

	const renderArticle = (article: Article) => {
		return (
			<ArticleListItem
				article={article}
				view={view}
				key={article.id}
			/>
		);
	};

	return (
		<div className={cn(cls.articleList, mods, [className, cls[view]])}>
			{articles.length > 0
				? articles.map(renderArticle)
				: null
			}
			{isLoading && getSkeletons(view)}
		</div>
	);
});