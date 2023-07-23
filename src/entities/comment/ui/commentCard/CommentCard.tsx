import { memo } from 'react';
import { getRouteProfile } from '@/shared/const/router';
import { classNames as cn, Mods } from '@/shared/lib/classNames/classNames';

import type { Comment } from '../../model/types/comment';

import { AppLink } from '@/shared/ui/appLink';
import { Avatar } from '@/shared/ui/avatar';
import { HStack, VStack } from '@/shared/ui/stack';
import { Skeleton } from '@/shared/ui/skeleton';
import { Text, TextSize } from '@/shared/ui/text';

import cls from './CommentCard.module.scss';

interface CommentCardProps {
	comment?: Comment;
	isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
	const { comment, isLoading } = props;

	const mods: Mods = {
		[cls.loading]: isLoading,
	};

	if (isLoading) {
		return (
			<HStack align='start' gap={8} width='max'>
				<Skeleton
					className={cls.avatar}
					width={46}
					height={46}
					border='50%' />
				<Skeleton
					className={cls.commentCard}
					width='100%'
					height={76}
					size='big'
				/>
			</HStack>
		);
	}

	if (!comment) {
		return null;
	}

	return (
		<HStack align='start' gap={8} width='max'>
			<AppLink
				className={cls.avatar}
				to={getRouteProfile(comment.user.id)}
			>
				{comment.user.avatar
					? <Avatar size={30} src={comment.user.avatar} />
					: <Avatar size={30} empty={true} />
				}
			</AppLink>

			<VStack gap={8} width='max' className={cn(cls.commentCard, mods, [])}>
				<AppLink to={getRouteProfile(comment.user.id)}>
					<Text
						className={cls.username}
						title={comment.user.username}
						size={TextSize.S}
					/>
				</AppLink>
				<Text
					className={cls.commentText}
					text={comment.text}
				/>
			</VStack>
		</HStack>
	);
});