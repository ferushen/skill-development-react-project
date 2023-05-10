import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import { Page } from 'widgets/page/Page';

import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
	className?: string;
}

// TODO: реализовать логику создания и редактирования статьи

const ArticleEditPage = (props: ArticleEditPageProps) => {
	const { className } = props;
	const { t } = useTranslation('article');

	const { id } = useParams<{ id: string }>();
	const isEdit = Boolean(id);

	const mods: Mods = {};

	return (
		<Page className={cn(cls.articleEditPage, mods, [className])}>
			{isEdit
				? t('edit_article_with_id') + id
				: t('creating_new_article')
			}
		</Page>
	);
};

export default memo(ArticleEditPage);