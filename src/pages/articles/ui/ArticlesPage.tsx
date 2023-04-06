import { memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
	className?: string;
	children?: ReactNode;
}

const ArticlesPage = (props: ArticlesPageProps) => {
	const { className } = props;
	const { t } = useTranslation('article');

	const mods: Mods = {};

	return (
		<div
			className={cn(cls.articlesPage, mods, [className])}
		>
			{ /* eslint-disable-next-line */}
			{'ArticlesPage'}
		</div>
	);
};

export default memo(ArticlesPage);