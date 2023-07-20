import { memo } from 'react';
import { classNames as cn, Mods } from '@/shared/lib/classNames/classNames';

import type { ArticleTextBlock } from '../../model/types/article';

import { Text } from '@/shared/ui/text';

import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
	className?: string;
	block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
	const { className, block } = props;

	const mods: Mods = {};

	return (
		<div className={cn(cls.articleTextBlockComponent, mods, [className])}>
			{block.title && (
				<Text className={cls.title} title={block.title} />
			)}
			{block.paragraphs.map(paragraph => (
				<Text
					className={cls.paragraph}
					text={paragraph}
					key={paragraph}
				/>
			))}
		</div>
	);
});