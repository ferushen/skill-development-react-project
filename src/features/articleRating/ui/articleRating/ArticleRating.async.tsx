import { Suspense, lazy } from 'react';
import { ArticleRatingProps } from './ArticleRating';
import { Skeleton } from '@/shared/ui/skeleton/Skeleton';

export const ArticleRatingLazy = lazy(() => import('./ArticleRating'));

export const ArticleRatingAsync = (props: ArticleRatingProps) => (
	<Suspense fallback={<Skeleton width='100%' height={90} />}>
		<ArticleRatingLazy {...props} />
	</Suspense>
);