import { memo } from 'react';
import { classNames as cn, Mods } from '@/shared/lib/classNames/classNames';

import type { ArticleCodeBlock } from '../../model/types/article';

import { Code } from '@/shared/ui/code';

import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
	className?: string;
	block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
	const { className, block } = props;

	const mods: Mods = {};

	return (
		<div className={cn(cls.articleCodeBlockComponent, mods, [className])}>
			<Code text={block.code} />
		</div>
	);
});