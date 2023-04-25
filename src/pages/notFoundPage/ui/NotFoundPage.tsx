import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { Page } from 'shared/ui/Page/Page';

import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
	className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
	const { t } = useTranslation();

	return (
		<Page className={cn(cls.notFoundPage, {}, [className])}>
			{t('page_not_found')}
		</Page>
	);
};