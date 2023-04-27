import { memo, ReactNode, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/comments';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';

import { AddCommentForm } from 'features/addCommentForm';
import { ArticleDetails } from 'entities/article';
import { Button } from 'shared/ui/button/Button';
import { CommentList } from 'entities/comment';
import { Page } from 'widgets/page/Page';
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
	const navigate = useNavigate();
	// указываем дефолтное значение для storybook
	const { id = '1' } = useParams<{ id: string }>();

	const dispatch = useAppDispatch();
	const comments = useSelector(getArticleComments.selectAll);
	const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);

	const mods: Mods = {};

	const onBackToList = useCallback(() => {
		navigate(RoutePath.articles);
	}, [navigate]);

	const onCommentSend = useCallback((text: string) => {
		dispatch(addCommentForArticle(text));
	}, [dispatch]);

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
		<DynamicModuleLoader reducers={reducers}>
			<Page className={cn(cls.articleDetailsPage, mods, [className])}>
				<Button onClick={onBackToList}>
					{t('back_to_article_list')}
				</Button>
				<ArticleDetails id={id} />
				<Text className={cls.commentTitle} title={t('comments')} />
				<AddCommentForm onCommentSend={onCommentSend} />
				<CommentList
					comments={comments}
					isLoading={commentsIsLoading}
				/>
			</Page>
		</DynamicModuleLoader>
	);
};

export default memo(ArticleDetailsPage);