import { memo, ReactNode, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

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
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import { Skeleton } from 'shared/ui/skeleton/Skeleton';
import { Avatar } from 'shared/ui/avatar/Avatar';
import { Text, TextAlign, TextSize, TextVariant } from 'shared/ui/text/Text';
import { Icon } from 'shared/ui/icon/Icon';

import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';

import cls from './ArticleDetails.module.scss';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';

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

	const mods: Mods = {};

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
				<div className={cls.avatarWrapper}>
					<Avatar
						className={cls.avatar}
						size={200}
						src={article?.img}
					/>
				</div>
				<Text
					className={cls.title}
					size={TextSize.L}
					title={article?.title}
					text={article?.subtitle}
				/>
				<div className={cls.articleInfo}>
					<Icon className={cls.logo} Svg={EyeIcon} />
					<Text text={String(article?.views)} />
				</div>
				<div className={cls.articleInfo}>
					<Icon className={cls.logo} Svg={CalendarIcon} />
					<Text text={article?.createdAt} />
				</div>
				<div className={cls.blocksWrapper}>
					{article?.blocks.map(renderBlock)}
				</div>
			</>
		);
	}

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
			<div className={cn(cls.articleDetails, mods, [className])}>
				{content}
			</div>
		</DynamicModuleLoader>
	);
});