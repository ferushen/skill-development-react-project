import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from '@/shared/lib/classNames/classNames';

import { getRouteArticleDetails } from '@/shared/const/router';

import type { Article, ArticleTextBlock } from '../../model/types/article';
import { ArticleBlockType, ArticleView } from '../../model/consts/consts';

import { ArticleTextBlockComponent } from '../articleTextBlockComponent/ArticleTextBlockComponent';
import { AppImage } from '@/shared/ui/appImage';
import { AppLink } from '@/shared/ui/appLink';
import { Avatar } from '@/shared/ui/avatar';
import { Button, ButtonVariant } from '@/shared/ui/button';
import { Card } from '@/shared/ui/card';
import { HStack, VStack } from '@/shared/ui/stack';
import { Icon } from '@/shared/ui/icon';
import { Text, TextAlign } from '@/shared/ui/text';
import { Skeleton } from '@/shared/ui/skeleton';

import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';

import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
	className?: string;
	article: Article;
	view: ArticleView;
	target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
	const { className, article, view, target } = props;
	const { t } = useTranslation('article');

	const types = <Text className={cls.types} text={article.type.join(', ')} />;

	const views = (
		<HStack justify={'start'} gap={8}>
			<Icon className={cls.icon} Svg={EyeIcon} />
			<Text className={cls.views} text={String(article.views)} />
		</HStack>
	);

	if (view === ArticleView.List) {
		const textBlock = article.blocks.find(block => (
			block.type === ArticleBlockType.Text
		)) as ArticleTextBlock;

		return (
			<div className={cn('', {}, [className, cls[view]])}>
				<Card size='large'>
					<VStack justify='start' gap={8}>
						<HStack justify='between' width='max'>
							<div className={cls.titleWrapper}>
								<Text className={cls.title} title={article.title} />
								{types}
							</div>
							<VStack justify='start' gap={4} className={cls.infoWrapper}>
								<HStack justify='start' gap={8}>
									<Avatar size={30} src={article.user.avatar} />
									<Text className={cls.username} text={article.user.username} />
								</HStack>
								<Text className={cls.date} align={TextAlign.Right} text={article.createdAt} />
							</VStack>
						</HStack>
						<AppImage
							className={cls.img}
							src={article.img}
							alt={article.title}
							fallback={<Skeleton width='100%' height={300} />}
						/>
						{textBlock && (
							<ArticleTextBlockComponent className={cls.textBlock} block={textBlock} />
						)}
						<HStack justify='between' gap={8} width='max'>
							<AppLink
								to={getRouteArticleDetails(article.id)}
								target={target}
							>
								<Button variant={ButtonVariant.Outline}>
									{t('read_more')}
								</Button>
							</AppLink>
							{views}
						</HStack>
					</VStack>
				</Card>
			</div>
		);
	}

	return (
		<AppLink
			className={cn('', {}, [className, cls[view]])}
			to={getRouteArticleDetails(article.id)}
			target={target}
		>
			<Card size='large'>
				<VStack justify='start' gap={8}>
					<div className={cls.imgWrapper}>
						<AppImage
							className={cls.img}
							src={article.img}
							alt={article.title}
							fallback={<Skeleton width={200} height={200} />}
						/>
						<Text className={cls.date} text={article.createdAt} />
					</div>
					<HStack justify='between' gap={8}>
						{types}
						{views}
					</HStack>
					<Text className={cls.title} text={article.title} />
				</VStack>
			</Card>
		</AppLink>
	);
});