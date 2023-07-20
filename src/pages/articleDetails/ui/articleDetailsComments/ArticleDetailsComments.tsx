import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';

import { selectArticleCommentsIsLoading } from '../../model/selectors/comments';
import { selectArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

import { CommentList } from '@/entities/comment';
import { AddCommentForm } from '@/features/addCommentForm';
import { Text, TextSize } from '@/shared/ui/text';
import { VStack } from '@/shared/ui/stack';

interface ArticleDetailsCommentsProps {
	className?: string;
	id?: string;
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
	const { className, id } = props;
	const { t } = useTranslation('article');
	const dispatch = useAppDispatch();

	const comments = useSelector(selectArticleComments.selectAll);
	const commentsIsLoading = useSelector(selectArticleCommentsIsLoading);

	const onCommentSend = useCallback((text: string) => {
		dispatch(addCommentForArticle(text));
	}, [dispatch]);

	useInitialEffect(() => {
		dispatch(fetchCommentsByArticleId(id));
	});

	return (
		<VStack className={className} gap={16} width='max'>
			<Text
				size={TextSize.M}
				title={t('comments')}
			/>
			<AddCommentForm onCommentSend={onCommentSend} />
			<CommentList
				comments={comments}
				isLoading={commentsIsLoading}
			/>
		</VStack>
	);
});
