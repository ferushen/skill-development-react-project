import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import type { Comment } from '../../model/types/comment';

import { CommentCard } from '../commentCard/CommentCard';
import { Text } from 'shared/ui/text/Text';

import cls from './CommentList.module.scss';

interface CommentListProps {
	className?: string;
	comments?: Comment[];
	isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
	const {
		className,
		comments,
		isLoading
	} = props;
	const { t } = useTranslation();

	const mods: Mods = {};

	if (isLoading) {
		return (
			<div className={cn(cls.commentList, mods, [className])}>
				<CommentCard isLoading />
			</div>
		);
	}

	return (
		<div className={cn(cls.commentList, mods, [className])}>
			{comments?.length
				? comments.map(comment => (
					<CommentCard
						className={cls.comment}
						comment={comment}
						key={comment.id}
					/>
				))
				: <Text title={t('no_comments_yet')} />
			}
		</div>
	);
});