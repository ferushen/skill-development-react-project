import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import { useSelector } from 'react-redux';
import { getCanEditArticle } from '../../model/selectors/article';
import { getArticleDetailsData } from 'entities/article';
import { getArticleDetailsIsLoading } from 'entities/article/model/selectors/articleDetails';
// import { getUserAuthData } from 'entities/user';

import { Button, ButtonVariant } from 'shared/ui/button/Button';
import { Skeleton } from 'shared/ui/skeleton/Skeleton';
import { HStack } from 'shared/ui/stack';


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
	const isLoading = useSelector(getArticleDetailsIsLoading);

	const onBackToList = useCallback(() => {
		navigate(RoutePath.articles);
	}, [navigate]);

	const onEditArticle = useCallback(() => {
		navigate(`${RoutePath['article-details']}${article?.id}/edit`);
	}, [article?.id, navigate]);

	if (isLoading) {
		return (
			<HStack className={cn('', {}, [className])} >
				<Skeleton width={160} height={36} border={'6px'} />
			</HStack>
		);
	}

	return (
		<HStack
			className={cn('', {}, [className])}
			justify={'between'}
			gap={20}
			width={'max'}
		>
			<Button onClick={onBackToList}>
				{t('back_to_article_list')}
			</Button>
			{canEdit && (
				<Button
					variant={ButtonVariant.Outline}
					onClick={onEditArticle}
				>
					{t('edit')}
				</Button>
			)}
		</HStack>
	);
});