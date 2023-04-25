import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/article';

export interface ArticlesPageSchema extends EntityState<Article> {
	_inited: boolean;
	isLoading?: boolean;
	error?: string;

	view: ArticleView;

	// pagination
	page: number;
	limit?: number;
	hasMore: boolean;
}
