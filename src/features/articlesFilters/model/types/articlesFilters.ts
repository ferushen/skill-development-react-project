import { ArticleType } from 'entities/article';
import { SortOrder } from 'shared/types/sortOrder';

export enum ArticleSortField {
	Views = 'views',
	Title = 'title',
	Created = 'created',
}

export interface ArticlesFiltersSchema {
	order: SortOrder;
	search: string;
	sort: ArticleSortField;
	type: ArticleType;
}
