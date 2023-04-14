import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import { Article, ArticleBlockType, ArticleTextBlock, ArticleView } from '../../model/types/article';

import { ArticleTextBlockComponent } from '../articleTextBlockComponent/ArticleTextBlockComponent';
import { Avatar } from 'shared/ui/avatar/Avatar';
import { Button, ButtonVariant } from 'shared/ui/button/Button';
import { Card } from 'shared/ui/card/Card';
import { Icon } from 'shared/ui/icon/Icon';
import { Text, TextAlign } from 'shared/ui/text/Text';

import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
	className?: string;
	article: Article;
	view: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
	const { className, article, view } = props;
	const { t } = useTranslation('article');
	const navigate = useNavigate();

	const mods: Mods = {};

	const types = <Text className={cls.types} text={article.type.join(', ')} />;
	const views = (
		<div className={cls.viewsWrapper}>
			<Icon className={cls.icon} Svg={EyeIcon} />
			<Text className={cls.views} text={String(article.views)} />
		</div>
	);

	const onOpenArticle = useCallback(() => {
		navigate(RoutePath['article-details'] + article.id);
	}, [article.id, navigate]);


	if (view === ArticleView.List) {
		const textBlock = article.blocks.find(block => (
			block.type === ArticleBlockType.Text
		)) as ArticleTextBlock;

		return (
			<div
				className={cn(cls.articleListItem, mods, [className, cls[view]])}
			>
				<Card className={cls.card}>
					<div className={cls.header}>
						<div className={cls.titleWrapper}>
							<Text className={cls.title} title={article.title} />
							{types}
						</div>
						<div className={cls.infoWrapper}>
							<div className={cls.userInfo}>
								<Avatar size={30} src={article.user.avatar} />
								<Text className={cls.username} text={article.user.username} />
							</div>
							<Text className={cls.date} align={TextAlign.Right} text={article.createdAt} />
						</div>
					</div>
					<img className={cls.img} src={article.img} alt={article.title} />
					{textBlock && (
						<ArticleTextBlockComponent className={cls.textBlock} block={textBlock} />
					)}
					<div className={cls.footer}>
						<Button
							variant={ButtonVariant.OUTLINE}
							onClick={onOpenArticle}
						>
							{/* eslint-disable-next-line */}
							{t('read_more')}
						</Button>
						{views}
					</div>
				</Card>
			</div>
		);
	}

	return (
		<div
			className={cn(cls.articleListItem, mods, [className, cls[view]])}
		>
			<Card className={cls.card} onClick={onOpenArticle}>
				<div className={cls.imgWrapper}>
					<img className={cls.img} src={article.img} alt={article.title} />
					<Text className={cls.date} text={article.createdAt} />
				</div>
				<div className={cls.infoWrapper}>
					{types}
					{views}
				</div>
				<Text className={cls.title} text={article.title} />
			</Card>
		</div>
	);

});