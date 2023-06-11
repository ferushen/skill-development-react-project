import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articlesPageSelectors';
import { getArticles } from '../../model/slices/articlesPageSlice';

import { ArticleList } from 'entities/article';
import { Text } from 'shared/ui/text/Text';

interface ArticleInfiniteListProps {
	className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
	const { className } = props;
	const { t } = useTranslation('article');

	const articles = useSelector(getArticles.selectAll);
	const view = useSelector(getArticlesPageView);
	const isLoading = useSelector(getArticlesPageIsLoading);
	const error = useSelector(getArticlesPageError);

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