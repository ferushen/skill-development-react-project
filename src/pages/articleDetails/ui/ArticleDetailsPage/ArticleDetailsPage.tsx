import { memo, ReactNode } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/comments';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

import { ArticleDetails } from 'entities/article';
import { CommentList } from 'entities/comment';
import { Text } from 'shared/ui/text/Text';

import cls from './ArticleDetailsPage.module.scss';

const reducers: ReducersList = {
	articleDetailsComments: articleDetailsCommentsReducer,
};

interface ArticleDetailsPageProps {
	className?: string;
	children?: ReactNode;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
	const { className } = props;
	const { t } = useTranslation('article');
	const { id } = useParams<{ id: string }>();

	const dispatch = useAppDispatch();
	const comments = useSelector(getArticleComments.selectAll);
	const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);

	const mods: Mods = {};

	useInitialEffect(() => {
		dispatch(fetchCommentsByArticleId(id));
	});

	if (!id) {
		return (
			<div className={cn(cls.articleDetailsPage, mods, [className])}>
				{t('article_not_found')}
			</div>
		);
	}

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={cn(cls.articleDetailsPage, mods, [className])}>
				<ArticleDetails id={id} />
				<Text className={cls.commentTitle} title={t('comments')} />
				<CommentList
					comments={comments}
					isLoading={commentsIsLoading}
				/>
			</div>
		</DynamicModuleLoader>
	);
};

export default memo(ArticleDetailsPage);