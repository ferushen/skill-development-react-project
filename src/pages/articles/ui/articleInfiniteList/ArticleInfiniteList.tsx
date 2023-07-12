import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { selectArticlesPageError, selectArticlesPageIsLoading, selectArticlesPageView } from '../../model/selectors/articlesPageSelectors';
import { selectArticles } from '../../model/slices/articlesPageSlice';

import { ArticleList } from '@/entities/article';
import { Text } from '@/shared/ui/text/Text';

interface ArticleInfiniteListProps {
	className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
	const { className } = props;
	const { t } = useTranslation('article');

	const articles = useSelector(selectArticles.selectAll);
	const view = useSelector(selectArticlesPageView);
	const isLoading = useSelector(selectArticlesPageIsLoading);
	const error = useSelector(selectArticlesPageError);

	if (error) {
		return <Text text={t('error_loading_articles')} />;
	}

	return (
		<ArticleList
			className={className}
			isLoading={isLoading}
			view={view}
			articles={articles}
		/>
	);
});