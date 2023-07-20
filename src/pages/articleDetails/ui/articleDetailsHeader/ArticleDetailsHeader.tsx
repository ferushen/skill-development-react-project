import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { RoutePath } from '@/shared/const/router';

import { useSelector } from 'react-redux';
import { selectCanEditArticle } from '../../model/selectors/article';
import { selectArticleDetailsData, selectArticleDetailsIsLoading } from '@/entities/article';
// import { selectUserAuthData } from 'entities/user';

import { Button, ButtonVariant } from '@/shared/ui/button';
import { Skeleton } from '@/shared/ui/skeleton';
import { HStack } from '@/shared/ui/stack';

interface ArticleDetailsHeaderProps {
	className?: string;
}

export const ArticleDetailsHeader = memo((props: ArticleDetailsHeaderProps) => {
	const { className } = props;
	const { t } = useTranslation('article');
	const navigate = useNavigate();

	// получаем данные об юзере и статье на уровне самого компонента
	// хотя можем использовать селектор, который объединил бы оба
	/*
	const userData = useSelector(selectUserAuthData);
	const article = useSelector(getArticleDetailsData);
	*/

	const article = useSelector(selectArticleDetailsData);
	const canEdit = useSelector(selectCanEditArticle);
	const isLoading = useSelector(selectArticleDetailsIsLoading);

	const onBackToList = useCallback(() => {
		navigate(RoutePath.articles);
	}, [navigate]);

	const onEditArticle = useCallback(() => {
		navigate(`${RoutePath['article-details']}${article?.id}/edit`);
	}, [article?.id, navigate]);

	if (isLoading) {
		return (
			<HStack
				className={className}
				justify='start'
				width='max'
			>
				<Skeleton width={160} height={36} border='6px' />
			</HStack>
		);
	}

	return (
		<HStack
			className={className}
			justify={'between'}
			gap={20}
			width={'max'}
		>
			<Button onClick={onBackToList} animated>
				{t('back_to_article_list')}
			</Button>
			{canEdit && (
				<Button
					variant={ButtonVariant.Outline}
					onClick={onEditArticle}
					animated
				>
					{t('edit')}
				</Button>
			)}
		</HStack>
	);
});