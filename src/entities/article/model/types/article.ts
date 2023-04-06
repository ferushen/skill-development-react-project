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

export enum ArticleType {
	IT = 'IT',
	Science = 'Science',
	Economics = 'Economics',
}

export type ArticleBlock =
	| ArticleCodeBlock
	| ArticleImageBlock
	| ArticleTextBlock;

export interface Article {
	id: string;
	title: string;
	subtitle: string;
	img: string;
	views: number;
	createdAt: string;
	type: ArticleType[];
	blocks: ArticleBlock[];
}
