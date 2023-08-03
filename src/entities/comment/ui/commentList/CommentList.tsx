import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import type { Comment } from '../../model/types/comment';

import { CommentCard } from '../commentCard/CommentCard';
import { Text } from '@/shared/ui/text';
import { VStack } from '@/shared/ui/stack';

interface CommentListProps {
	className?: string;
	comments?: Comment[];
	isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
	const { className, comments, isLoading } = props;
	const { t } = useTranslation();

	if (isLoading) {
		return (
			<VStack
				className={className}
				width={'max'}
			>
				<CommentCard isLoading />
			</VStack>
		);
	}

	return (
		<VStack
			className={className}
			gap={16}
			width={'max'}
		>
			{comments?.length ? (
				comments.map((comment) => (
					<CommentCard
						comment={comment}
						key={comment.id}
					/>
				))
			) : (
				<Text title={t('no_comments_yet')} />
			)}
		</VStack>
	);
});
