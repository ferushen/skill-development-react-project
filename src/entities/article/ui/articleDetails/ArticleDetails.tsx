import { memo, ReactNode, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { ArticleBlock, ArticleBlockType } from '../../model/types/article';

import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
	selectArticleDetailsData,
	selectArticleDetailsError,
	selectArticleDetailsIsLoading
} from '../../model/selectors/articleDetails';

import { ArticleCodeBlockComponent } from '../articleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../articleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../articleTextBlockComponent/ArticleTextBlockComponent';
import { Icon } from 'shared/ui/icon/Icon';
import { HStack, VStack } from 'shared/ui/stack';
import { Skeleton } from 'shared/ui/skeleton/Skeleton';
import { Text, TextAlign, TextSize, TextVariant } from 'shared/ui/text/Text';

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
	const isLoading = useSelector(selectArticleDetailsIsLoading);
	const article = useSelector(selectArticleDetailsData);
	const error = useSelector(selectArticleDetailsError);

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
				<HStack width='max'>
					<Skeleton
						variant='filled'
						size='big'
						width='100%'
						height={300}
					/>
				</HStack>
				<HStack justify='between' width='max'>
					<Skeleton
						variant='filled'
						width={116}
						height={24}
					/>
					<Skeleton
						variant='filled'
						width={55}
						height={24}
					/>
				</HStack>
				<Skeleton
					variant='filled'
					width={300}
					height={32}
				/>
				<Skeleton
					variant='filled'
					size='big'
					width={600}
					height={24}
				/>
				<Skeleton
					variant='filled'
					size='big'
					width='100%'
					height={200}
				/>
				<Skeleton
					variant='filled'
					size='big'
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
				<HStack align='start' width='max'>
					<img
						className={cls.img}
						src={article?.img}
						alt={article?.title}
					/>
				</HStack>
				<HStack justify='between' width='max'>
					<HStack>
						<Icon className={cls.logo} Svg={CalendarIcon} />
						<Text text={article?.createdAt} />
					</HStack>
					<HStack>
						<Icon className={cls.logo} Svg={EyeIcon} />
						<Text text={String(article?.views)} />
					</HStack>
				</HStack>
				<Text
					size={TextSize.L}
					title={article?.title}
					text={article?.subtitle}
				/>
				<VStack justify='start' gap={16}>
					{article?.blocks.map(renderBlock)}
				</VStack>
			</>
		);
	}

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
			<VStack gap={16} width='max' className={cn(cls.articleDetails, {}, [className])}>
				{content}
			</VStack>
		</DynamicModuleLoader>
	);
});