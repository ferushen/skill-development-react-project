import { memo, ReactNode } from 'react';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import { ArticleList } from 'entities/article';

import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
	className?: string;
	children?: ReactNode;
}

const ArticlesPage = (props: ArticlesPageProps) => {
	const { className } = props;

	const mods: Mods = {};

	return (
		<div className={cn(cls.articlesPage, mods, [className])}>
			<ArticleList articles={[]} />
		</div>
	);
};

export default memo(ArticlesPage);