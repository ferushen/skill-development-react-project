import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useArticleRecommendationList } from '../api/recommendationsApi';

import { ArticleList } from 'entities/article';
import { Text, TextSize } from 'shared/ui/text/Text';
import { VStack } from 'shared/ui/stack';

import cls from './ArticleRecommendationList.module.scss';

interface ArticleRecommendationListProps {
	className?: string;
}

export const ArticleRecommendationList = memo((props: ArticleRecommendationListProps) => {
	const { className } = props;
	const { t } = useTranslation('article');
	// подгружаем только 3 статьи
	const { data: articles, isLoading, error } = useArticleRecommendationList(3);

	// TODO: сделать корректные заглушки
	if (isLoading || error) {
		return null;
	}

	return (
		<VStack className={className} gap={16}>
			<Text
				className={cls.commentTitle}
				size={TextSize.M}
				title={t('recommendations')}
			/>
			<ArticleList
				className={cls.recommendations}
				articles={articles}
				isLoading={isLoading}
				target={'_blank'}
			/>
		</VStack>
	);
});