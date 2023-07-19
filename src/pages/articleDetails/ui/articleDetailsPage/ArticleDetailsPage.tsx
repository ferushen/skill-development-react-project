import { memo, ReactNode } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from '@/shared/lib/classNames/classNames';

import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsPageReducer } from '../../model/slices/articleDetailsPageReducer';

import { ArticleDetailsComments } from '../articleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsHeader } from '../articleDetailsHeader/ArticleDetailsHeader';
import { ArticleDetails } from '@/entities/article';
import { ArticleRecommendationList } from '@/features/articleRecommendationList';
import { ArticleRating } from '@/features/articleRating';
import { Page } from '@/widgets/page';
import { VStack } from '@/shared/ui/stack';

import cls from './ArticleDetailsPage.module.scss';

const reducers: ReducersList = {
	articleDetailsPage: articleDetailsPageReducer,
};

interface ArticleDetailsPageProps {
	className?: string;
	children?: ReactNode;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
	const { className } = props;
	const { t } = useTranslation('article');

	const { id } = useParams<{ id: string }>();

	if (!id) {
		return (
			<div className={cn(cls.articleDetailsPage, {}, [className])}>
				{t('article_not_found')}
			</div>
		);
	}

	return (
		<DynamicModuleLoader reducers={reducers}>
			<Page className={cn(cls.articleDetailsPage, {}, [className])}>
				<VStack gap={16} width='max'>
					<ArticleDetailsHeader />
					<ArticleDetails id={id} />
					<ArticleRating articleId={id} />
					<ArticleRecommendationList />
					<ArticleDetailsComments id={id} />
				</VStack>
			</Page>
		</DynamicModuleLoader>
	);
};

export default memo(ArticleDetailsPage);