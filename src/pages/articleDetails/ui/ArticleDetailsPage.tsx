import { memo, ReactNode } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import { ArticleDetails } from 'entities/article';

import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
	className?: string;
	children?: ReactNode;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
	const { className } = props;
	const { t } = useTranslation('article');
	const { id } = useParams<{ id: string }>();

	const mods: Mods = {};

	if (!id) {
		return (
			<div
				className={cn(cls.articleDetailsPage, mods, [className])}
			>
				{t('article_not_found')}
			</div>
		);
	}

	return (
		<div
			className={cn(cls.articleDetailsPage, mods, [className])}
		>
			<ArticleDetails id={id} />
		</div>
	);
};

export default memo(ArticleDetailsPage);