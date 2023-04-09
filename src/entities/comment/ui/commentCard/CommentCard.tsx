import { memo } from 'react';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import { Avatar } from 'shared/ui/avatar/Avatar';
import { Skeleton } from 'shared/ui/skeleton/Skeleton';
import { Text } from 'shared/ui/text/Text';

import type { Comment } from '../../model/types/comment';

import cls from './CommentCard.module.scss';

interface CommentCardProps {
	className?: string;
	comment: Comment;
	isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
	const { className, comment, isLoading } = props;

	const mods: Mods = {};

	if (isLoading) {
		return (
			<div className={cn(cls.commentCard, mods, [className])}>
				<div className={cls.header}>
					<Skeleton width={30} height={30} border={'50%'} />
					<Skeleton width={100} height={16} />
				</div>
				<Skeleton className={cls.text} width={'100%'} height={50} />
			</div>
		);
	}

	return (
		<div className={cn(cls.commentCard, mods, [className])}>
			<div className={cls.header}>
				{comment.user.avatar
					? <Avatar size={30} src={comment.user.avatar} />
					: <Avatar size={30} empty={true} />
				}
				<Text text={comment.user.username} />
			</div>
			<Text className={cls.text} text={comment.text} />
		</div>
	);
});