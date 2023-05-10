import { ArticleDetailsCommentsSchema } from './articleDetailsComments';
import { ArticleDetailsRecommendationSchema } from './articleDetailsRecommendation';

export interface ArticleDetailsPageSchema {
	comments: ArticleDetailsCommentsSchema;
	recommendations: ArticleDetailsRecommendationSchema;
}
