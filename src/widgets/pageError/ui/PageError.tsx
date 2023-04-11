import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { Button, ButtonVariant } from 'shared/ui/button/Button';

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
		<div className={cn(cls.pageError, {}, [className])}>
			<p>{t('unexpected_error')}</p>
			<Button onClick={reloadPage} variant={ButtonVariant.OUTLINE}>
				{t('refresh_page')}
			</Button>
		</div>
	);
};