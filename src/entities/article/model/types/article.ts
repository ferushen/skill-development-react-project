import { User } from 'entities/user';

export enum ArticleBlockType {
	Code = 'CODE',
	Image = 'IMAGE',
	Text = 'TEXT',
}

export interface ArticleBlockBase {
	id: string;
	type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
	type: ArticleBlockType.Code;
	code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
	type: ArticleBlockType.Image;
	src: string;
	title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
	type: ArticleBlockType.Text;
	title?: string;
	paragraphs: string[];
}

export type ArticleBlock =
	| ArticleCodeBlock
	| ArticleImageBlock
	| ArticleTextBlock;

export enum ArticleType {
	All = 'ALL', 
	IT = 'IT',
	Science = 'SCIENCE',
	Economics = 'ECONOMICS',
}

export enum ArticleView {
	List = 'list',
	Grid = 'grid',
}

export interface Article {
	id: string;
	title: string;
	user: User;
	subtitle: string;
	img: string;
	views: number;
	createdAt: string;
	type: ArticleType[];
	blocks: ArticleBlock[];
}
