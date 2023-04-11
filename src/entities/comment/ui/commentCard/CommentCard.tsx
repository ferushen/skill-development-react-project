import { memo } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import { Avatar } from 'shared/ui/avatar/Avatar';
import { Skeleton } from 'shared/ui/skeleton/Skeleton';
import { Text } from 'shared/ui/text/Text';
import { AppLink } from 'shared/ui/appLink/AppLink';

import type { Comment } from '../../model/types/comment';

import cls from './CommentCard.module.scss';

interface CommentCardProps {
	className?: string;
	comment?: Comment;
	isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
	const { className, comment, isLoading } = props;

	const mods: Mods = {
		[cls.loading]: isLoading,
	};

	if (isLoading) {
		return (
			<div className={cn(cls.commentCard, mods, [className])}>
				<div className={cls.header}>
					<Skeleton width={30} height={30} border={'50%'} />
					<Skeleton width={100} height={16} />
				</div>
				<Skeleton className={cls.text} width={'100%'} height={24} />
			</div>
		);
	}

	if (!comment) {
		return null;
	}

	return (
		<div className={cn(cls.commentCard, mods, [className])}>
			<AppLink
				className={cls.header}
				to={`${RoutePath.profile}${comment.user.id}`}
			>
				{comment.user.avatar
					? <Avatar size={30} src={comment.user.avatar} />
					: <Avatar size={30} empty={true} />
				}
				<Text text={comment.user.username} />
			</AppLink>
			<Text className={cls.text} text={comment.text} />
		</div>
	);
});