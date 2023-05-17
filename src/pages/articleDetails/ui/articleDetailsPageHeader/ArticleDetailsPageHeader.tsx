import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import { useSelector } from 'react-redux';
import { getCanEditArticle } from '../../model/selectors/article';
/*
import { getArticleDetailsData } from 'entities/article';
import { getUserAuthData } from 'entities/user';
*/

import { Button, ButtonVariant } from 'shared/ui/button/Button';

import cls from './ArticleDetailsPageHeader.module.scss';
import { getArticleDetailsData } from 'entities/article';

interface ArticleDetailsPageHeaderProps {
	className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
	const { className } = props;
	const { t } = useTranslation('article');
	const navigate = useNavigate();

	// получаем данные об юзере и статье на уровне самого компонента
	// хотя можем использовать селектор, который объединил бы оба
	/*
	const userData = useSelector(getUserAuthData);
	const article = useSelector(getArticleDetailsData);
	*/

	const article = useSelector(getArticleDetailsData);
	const canEdit = useSelector(getCanEditArticle);

	const onBackToList = useCallback(() => {
		navigate(RoutePath.articles);
	}, [navigate]);

	const onEditArticle = useCallback(() => {
		navigate(`${RoutePath['article-details']}${article?.id}/edit`);
	}, [article?.id, navigate]);

	const mods: Mods = {};

	return (
		<div className={cn(cls.articleDetailsPageHeader, mods, [className])}>
			<Button onClick={onBackToList}>
				{t('back_to_article_list')}
			</Button>
			{canEdit && (
				<Button
					className={cls.editBtn}
					variant={ButtonVariant.OUTLINE}
					onClick={onEditArticle}
				>
					{t('edit')}
				</Button>
			)}
		</div>
	);
});