import { memo } from 'react';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import type { ArticleImageBlock } from '../../model/types/article';

import { Text, TextAlign } from 'shared/ui/text/Text';

import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
	className?: string;
	block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
	const { className, block } = props;

	const mods: Mods = {};

	return (
		<div className={cn(cls.articleImageBlockComponent, mods, [className])}>
			<img
				className={cls.img}
				src={block.src}
				alt={block.title}
			/>
			{block.title && (
				<Text
					align={TextAlign.Center}
					text={block.title}
				/>
			)}
		</div>
	);
});