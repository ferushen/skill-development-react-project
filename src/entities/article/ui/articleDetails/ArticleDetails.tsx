import { memo, ReactNode, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
	getArticleDetailsData,
	getArticleDetailsError,
	getArticleDetailsIsLoading
} from '../../model/selectors/articleDetails';

import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../articleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../articleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../articleTextBlockComponent/ArticleTextBlockComponent';

import { Skeleton } from 'shared/ui/skeleton/Skeleton';
import { Avatar } from 'shared/ui/avatar/Avatar';
import { Text, TextAlign, TextSize, TextVariant } from 'shared/ui/text/Text';
import { Icon } from 'shared/ui/icon/Icon';
import { HStack, VStack } from 'shared/ui/stack';

import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';

import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
	className?: string;
	id: string;
}

const reducers: ReducersList = {
	articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
	const {
		className,
		id,
	} = props;
	const { t } = useTranslation('article');

	const dispatch = useAppDispatch();
	const isLoading = useSelector(getArticleDetailsIsLoading);
	const article = useSelector(getArticleDetailsData);
	const error = useSelector(getArticleDetailsError);

	const renderBlock = useCallback((block: ArticleBlock) => {
		switch (block.type) {
			case ArticleBlockType.Code:
				return <ArticleCodeBlockComponent block={block} key={block.id} />;
			case ArticleBlockType.Image:
				return <ArticleImageBlockComponent block={block} key={block.id} />;
			case ArticleBlockType.Text:
				return <ArticleTextBlockComponent block={block} key={block.id} />;
			default:
				return null;
		}
	}, []);

	useInitialEffect(() => {
		dispatch(fetchArticleById(id));
	});

	let content: ReactNode;

	if (isLoading) {
		content = (
			<>
				<Skeleton
					className={cls.avatar}
					width={200}
					height={200}
					border='50%'
				/>
				<Skeleton
					className={cls.title}
					width={300}
					height={32}
				/>
				<Skeleton
					className={cls.skeleton}
					width={600}
					height={24}
				/>
				<Skeleton
					className={cls.skeleton}
					width='100%'
					height={200}
				/>
				<Skeleton
					className={cls.skeleton}
					width='100%'
					height={200}
				/>
			</>
		);
	}

	if (error) {
		content = (
			<Text
				align={TextAlign.Center}
				variant={TextVariant.Error}
				title={t('error_while_loading_article')}
			/>
		);
	}

	if (!isLoading && !error) {
		content = (
			<>
				<HStack align={'start'} width={'max'}>
					<Avatar
						className={cls.avatar}
						size={200}
						src={article?.img}
					/>
				</HStack>
				<Text
					className={cls.title}
					size={TextSize.L}
					title={article?.title}
					text={article?.subtitle}
				/>
				<HStack justify={'start'}>
					<Icon className={cls.logo} Svg={EyeIcon} />
					<Text text={String(article?.views)} />
				</HStack>
				<HStack className={cls.articleInfo}>
					<Icon className={cls.logo} Svg={CalendarIcon} />
					<Text text={article?.createdAt} />
				</HStack>
				<VStack justify={'start'} gap={16}>
					{article?.blocks.map(renderBlock)}
				</VStack>
			</>
		);
	}

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
			<div className={cn(cls.articleDetails, {}, [className])}>
				{content}
			</div>
		</DynamicModuleLoader>
	);
});