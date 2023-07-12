import { ArticleType } from '@/entities/article';
import { SortOrder } from '@/shared/types/sortOrder';

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

interface OrderOption {
	value: SortOrder;
	content: string;
}

interface SortOption {
	value: ArticleSortField;
	content: string;
}

export type OrderOptions = OrderOption[];
export type SortOptions = SortOption[];
