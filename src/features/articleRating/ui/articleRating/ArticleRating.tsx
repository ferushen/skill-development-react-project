import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi';
import { selectUserAuthData } from '@/entities/user';

import { RatingCard } from '@/entities/rating';
import { Skeleton } from '@/shared/ui/skeleton';

export interface ArticleRatingProps {
	className?: string;
	articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
	const { className, articleId } = props;
	const { t } = useTranslation('article');

	const [rateArticleMutation] = useRateArticle();
	const userData = useSelector(selectUserAuthData);

	const { data, isLoading } = useGetArticleRating({ articleId, userId: userData?.id ?? '' });
	const rate = data?.[0]?.rate;

	const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
		try {
			rateArticleMutation({
				userId: userData?.id ?? '',
				articleId,
				rate: starsCount,
				feedback,
			});

		} catch (e) {
			console.log(e);
		}

	}, [articleId, userData?.id, rateArticleMutation]);


	const onAccept = useCallback((starsCount: number, feedback?: string) => {
		handleRateArticle(starsCount, feedback);
	}, [handleRateArticle]);

	/*
	const onCancel = useCallback((starsCount: number) => {
		handleRateArticle(starsCount);
	}, [handleRateArticle]);
	*/

	if (isLoading) {
		return <Skeleton width='100%' height={90} />;
	}

	return (
		<RatingCard
			className={className}
			title={t('rate_the_article')}
			hasFeedback={true}
			feedbackTitle={t('leave_feedback_about_the_article')}
			rate={rate}
			onAccept={onAccept}
		/*onCancel={onCancel}*/
		/>
	);
});

export default ArticleRating;