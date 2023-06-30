import { memo } from 'react';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import { ArticleView } from '../../model/consts/consts';

import { Card } from 'shared/ui/card/Card';
import { Skeleton } from 'shared/ui/skeleton/Skeleton';
import { HStack, VStack } from 'shared/ui/stack';

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
				<Card size='large'>
					<VStack align={'normal'} justify={'start'} gap={8}>
						<HStack justify={'between'} width={'max'}>
							<VStack justify={'start'} gap={8}>
								<Skeleton className={cls.title} width={250} height={24} />
								<Skeleton className={cls.types} width={180} height={16} />
							</VStack>
							<VStack align={'end'} justify={'start'} gap={4} className={cls.infoWrapper}>
								<HStack justify={'start'} gap={8}>
									<Skeleton width={30} height={30} border={'50%'} />
									<Skeleton className={cls.username} width={80} height={24} />
								</HStack>
								<Skeleton className={cls.date} width={120} height={24} />
							</VStack>
						</HStack>
						<Skeleton className={cls.img} width={'100%'} height={300} />
						<Skeleton className={cls.textBlock} />
						<HStack justify={'between'} gap={8} width={'max'}>
							<Skeleton width={126} height={36} />
							<Skeleton className={cls.date} width={60} height={24} />
						</HStack >
					</VStack>
				</Card >
			</div >
		);
	}

	return (
		<div className={cn(cls.articleListItemSkeleton, mods, [className, cls[view]])}>
			<Card size='large'>
				<VStack align={'normal'} justify={'start'} gap={8}>
					<div className={cls.imgWrapper}>
						<Skeleton className={cls.img} width={200} height={200} />
					</div>
					<HStack justify={'between'} gap={8}>
						<Skeleton width={130} height={24} />
					</HStack>
					<Skeleton className={cls.title} width={150} height={24} />
				</VStack>
			</Card>
		</div>
	);
});