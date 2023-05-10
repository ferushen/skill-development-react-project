import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/article';

export interface ArticleDetailsRecommendationSchema
	extends EntityState<Article> {
	isLoading?: boolean;
	error?: string;
}
