import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import { Article, ArticleBlockType, ArticleTextBlock, ArticleView } from '../../model/types/article';

import { AppLink } from 'shared/ui/appLink/AppLink';
import { ArticleTextBlockComponent } from '../articleTextBlockComponent/ArticleTextBlockComponent';
import { Avatar } from 'shared/ui/avatar/Avatar';
import { Button, ButtonVariant } from 'shared/ui/button/Button';
import { Card } from 'shared/ui/card/Card';
import { Icon } from 'shared/ui/icon/Icon';
import { Text, TextAlign } from 'shared/ui/text/Text';
import { HStack, VStack } from 'shared/ui/stack';

import EyeIcon from 'shared/assets/icons/eye-20-20.svg';

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
					<VStack justify={'start'} gap={8}>
						<HStack justify={'between'} max>
							<div className={cls.titleWrapper}>
								<Text className={cls.title} title={article.title} />
								{types}
							</div>
							<VStack justify={'start'} gap={4} className={cls.infoWrapper}>
								<HStack justify={'start'} gap={8}>
									<Avatar size={30} src={article.user.avatar} />
									<Text className={cls.username} text={article.user.username} />
								</HStack>
								<Text className={cls.date} align={TextAlign.Right} text={article.createdAt} />
							</VStack>
						</HStack>
						<img className={cls.img} src={article.img} alt={article.title} />
						{textBlock && (
							<ArticleTextBlockComponent className={cls.textBlock} block={textBlock} />
						)}
						<HStack justify={'between'} gap={8} max>
							<AppLink
								to={RoutePath['article-details'] + article.id}
								target={target}
							>
								<Button variant={ButtonVariant.OUTLINE}>
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
			to={RoutePath['article-details'] + article.id}
			target={target}
		>
			<Card size='large'>
				<VStack justify={'start'} gap={8}>
					<div className={cls.imgWrapper}>
						<img className={cls.img} src={article.img} alt={article.title} />
						<Text className={cls.date} text={article.createdAt} />
					</div>
					<HStack justify={'between'} gap={8}>
						{types}
						{views}
					</HStack>
					<Text className={cls.title} text={article.title} />
				</VStack>
			</Card>
		</AppLink>
	);
});