import { memo } from 'react';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import { ArticleView } from '../../model/types/article';

import { Card } from 'shared/ui/card/Card';
import { Skeleton } from 'shared/ui/skeleton/Skeleton';

import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
	className?: string;
	view: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
	const { className, view } = props;

	const mods: Mods = {};

	if (view === ArticleView.List) {
		return (
			<div className={cn(cls.articleListItemSkeleton, mods, [className, cls[view]])}>
				<Card className={cls.card}>
					<div className={cls.header}>
						<div className={cls.titleWrapper}>
							<Skeleton className={cls.title} width={250} height={24} />
							<Skeleton className={cls.types} width={180} height={16} />
						</div>
						<div className={cls.infoWrapper}>
							<div className={cls.userInfo}>
								<Skeleton width={30} height={30} border={'50%'} />
								<Skeleton className={cls.username} width={80} height={24} />
							</div>
							<Skeleton className={cls.date} width={120} height={24} />
						</div>
					</div>
					<Skeleton className={cls.img} width={'100%'} height={300} />
					<Skeleton className={cls.textBlock} />
					<div className={cls.footer}>
						<Skeleton width={126} height={36} />
						<Skeleton className={cls.date} width={60} height={24} />
					</div >
				</Card >
			</div >
		);
	}

	return (
		<div className={cn(cls.articleListItemSkeleton, mods, [className, cls[view]])}>
			<Card className={cls.card}>
				<div className={cls.imgWrapper}>
					<Skeleton className={cls.img} width={200} height={200} />
				</div>
				<div className={cls.infoWrapper}>
					<Skeleton width={130} height={16} />
				</div>
				<Skeleton className={cls.title} width={150} height={16} />
			</Card>
		</div>
	);

});