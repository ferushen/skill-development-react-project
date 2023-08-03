import { useTranslation } from 'react-i18next';
import { classNames as cn } from '@/shared/lib/classNames/classNames';

import { Button, ButtonVariant } from '@/shared/ui/button';
import { VStack } from '@/shared/ui/stack';

import cls from './PageError.module.scss';

interface PageErrorProps {
	className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
	const { t } = useTranslation();

	const reloadPage = () => {
		location.reload();
	};

	return (
		<VStack
			className={cn(cls.pageError, {}, [className])}
			align={'center'}
			gap={40}
		>
			<p>{t('unexpected_error')}</p>
			<Button
				variant={ButtonVariant.Outline}
				onClick={reloadPage}
			>
				{t('refresh_page')}
			</Button>
		</VStack>
	);
};
