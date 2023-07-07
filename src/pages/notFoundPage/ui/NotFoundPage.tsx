import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { Page } from 'widgets/page/Page';
import { VStack } from 'shared/ui/stack';

import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
	className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
	const { t } = useTranslation();

	return (
		<Page>
			<VStack
				className={cn(cls.notFoundPage, {}, [className])}
				align='center'
				width='max'
			>
				{t('page_not_found')}
			</VStack>
		</Page>
	);
};