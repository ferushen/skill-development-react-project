import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useGetArticleRecommendationList } from '../api/recommendationsApi';

import { ArticleList } from '@/entities/article';
import { Text, TextSize } from '@/shared/ui/text/Text';
import { VStack } from '@/shared/ui/stack';

import cls from './ArticleRecommendationList.module.scss';

// TODO: если будет сделана виртуализация списка => здесь отключить

interface ArticleRecommendationListProps {
	className?: string;
}

export const ArticleRecommendationList = memo((props: ArticleRecommendationListProps) => {
	const { className } = props;
	const { t } = useTranslation('article');
	// подгружаем только 3 статьи
	const { data: articles, isLoading, error } = useGetArticleRecommendationList(3);

	// TODO: сделать корректные заглушки под каждый кейс
	if (isLoading || error || !articles) {
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