import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { Button } from 'shared/ui';
import { ButtonVariant } from 'shared/ui/button/Button';

import cls from './PageError.module.scss';

interface PageErrorProps {
	className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
	const { t } = useTranslation();

	const reloadPage = () => {
		location.reload();
	};

	return (
		<div className={cn(cls.pageError, {}, [className])}>
			<p>{t('Непредвиденная ошибка')}</p>
			<Button onClick={reloadPage} variant={ButtonVariant.OUTLINE}>
				{t('Обновить страницу')}
			</Button>
		</div>
	);
};