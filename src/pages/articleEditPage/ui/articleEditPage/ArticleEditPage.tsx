import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/page';

interface ArticleEditPageProps {
	className?: string;
}

// TODO: реализовать логику создания и редактирования статьи

const ArticleEditPage = (props: ArticleEditPageProps) => {
	const { className } = props;
	const { t } = useTranslation('article');

	const { id } = useParams<{ id: string }>();
	const isEdit = Boolean(id);

	return (
		<Page className={className}>
			{isEdit ? t('edit_article_with_id') + id : t('creating_new_article')}
		</Page>
	);
};

export default memo(ArticleEditPage);
